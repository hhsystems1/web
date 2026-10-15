'use strict';
// StressLess surface visualizer: select a surface in a photo (tap-to-select "magic wand"),
// then repaint it with a coating texture while keeping the photo's own light and shadows.
// Runs entirely in the browser; uploaded photos never leave the device unless the visitor sends them.
window.SLViz = (() => {
  const MAXW = 1200, WANDW = 560;

  // ---------- color helpers (sRGB -> Lab) ----------
  const lin = c => { c /= 255; return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
  const LUT = new Float32Array(256); for (let i = 0; i < 256; i++) LUT[i] = lin(i);
  const f = t => t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116;
  function toLab(d, n) {
    const L = new Float32Array(n), A = new Float32Array(n), B = new Float32Array(n);
    for (let i = 0, j = 0; i < n; i++, j += 4) {
      const r = LUT[d[j]], g = LUT[d[j + 1]], b = LUT[d[j + 2]];
      const x = f((r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047), y = f(r * 0.2126 + g * 0.7152 + b * 0.0722), z = f((r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883);
      L[i] = 116 * y - 16; A[i] = 500 * (x - y); B[i] = 200 * (y - z);
    }
    return { L, A, B };
  }

  // ---------- magic wand ----------
  // Grow a region from the tapped point: neighbours join if their color is close to the tapped
  // color (lightness counts less, so shade and sun on the same surface stay together).
  function wand(lab, w, h, sx, sy, tol, into) {
    const n = w * h, mask = into || new Uint8Array(n);
    let sl = 0, sa = 0, sb = 0, c = 0;
    for (let y = Math.max(0, sy - 3); y <= Math.min(h - 1, sy + 3); y++) for (let x = Math.max(0, sx - 3); x <= Math.min(w - 1, sx + 3); x++) { const i = y * w + x; sl += lab.L[i]; sa += lab.A[i]; sb += lab.B[i]; c++; }
    sl /= c; sa /= c; sb /= c;
    const seen = new Uint8Array(n), q = new Int32Array(n); let qh = 0, qt = 0;
    const start = sy * w + sx; q[qt++] = start; seen[start] = 1;
    const t2 = tol * tol;
    while (qh < qt) {
      const i = q[qh++], dl = (lab.L[i] - sl) * 0.55, da = lab.A[i] - sa, db = lab.B[i] - sb;
      if (dl * dl + da * da + db * db > t2) continue;
      mask[i] = 1;
      const x = i % w, y = (i - x) / w;
      if (x > 0 && !seen[i - 1]) { seen[i - 1] = 1; q[qt++] = i - 1; }
      if (x < w - 1 && !seen[i + 1]) { seen[i + 1] = 1; q[qt++] = i + 1; }
      if (y > 0 && !seen[i - w]) { seen[i - w] = 1; q[qt++] = i - w; }
      if (y < h - 1 && !seen[i + w]) { seen[i + w] = 1; q[qt++] = i + w; }
    }
    return mask;
  }
  // Close small gaps and fill small holes (stains, leaves, drains) so the coating looks continuous.
  function clean(mask, w, h) {
    const r = 2, tmp = new Uint8Array(w * h), out = new Uint8Array(w * h);
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) { let v = 0; for (let k = -r; k <= r && !v; k++) { const xx = x + k; if (xx >= 0 && xx < w && mask[y * w + xx]) v = 1; } tmp[y * w + x] = v; }
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) { let v = 0; for (let k = -r; k <= r && !v; k++) { const yy = y + k; if (yy >= 0 && yy < h && tmp[yy * w + x]) v = 1; } out[y * w + x] = v; }
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) { let v = 1; for (let k = -r; k <= r && v; k++) { const xx = x + k; if (xx < 0 || xx >= w || !out[y * w + xx]) v = 0; } tmp[y * w + x] = v; }
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) { let v = 1; for (let k = -r; k <= r && v; k++) { const yy = y + k; if (yy < 0 || yy >= h || !tmp[yy * w + x]) v = 0; } out[y * w + x] = v || mask[y * w + x]; }
    // holes: unselected pockets not connected to the border and smaller than 1.5% of the photo
    const lab = new Int32Array(w * h).fill(-1), q = new Int32Array(w * h); let id = 0;
    for (let s = 0; s < w * h; s++) {
      if (out[s] || lab[s] >= 0) continue;
      let qh = 0, qt = 0, border = false, list = []; q[qt++] = s; lab[s] = id;
      while (qh < qt) { const i = q[qh++]; list.push(i); const x = i % w, y = (i - x) / w; if (!x || !y || x === w - 1 || y === h - 1) border = true;
        const nb = [x > 0 ? i - 1 : -1, x < w - 1 ? i + 1 : -1, y > 0 ? i - w : -1, y < h - 1 ? i + w : -1];
        for (const j of nb) if (j >= 0 && !out[j] && lab[j] < 0) { lab[j] = id; q[qt++] = j; } }
      if (!border && list.length < w * h * 0.015) for (const i of list) out[i] = 1;
      id++;
    }
    return out;
  }

  // ---------- textures ----------
  const texCache = {};
  function loadImg(src) { return new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = src; }); }
  // Rubber Stone: irregular rubber crumb in the blend's named colors
  function crumb(colors, seed) {
    const S = 420, c = document.createElement('canvas'); c.width = c.height = S; const x = c.getContext('2d');
    let s = seed || 7; const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647;
    x.fillStyle = colors[1]; x.fillRect(0, 0, S, S);
    const weights = [0.42, 0.33, 0.25];
    for (let k = 0; k < 9000; k++) {
      const r = rnd(), col = r < weights[0] ? colors[0] : r < weights[0] + weights[1] ? colors[1] : colors[2];
      const cx = rnd() * S, cy = rnd() * S, rad = 1.6 + rnd() * 3.2, pts = 5 + (rnd() * 3 | 0);
      x.beginPath();
      for (let p = 0; p < pts; p++) { const a = p / pts * Math.PI * 2 + rnd() * 0.6, rr = rad * (0.6 + rnd() * 0.6); const px = cx + Math.cos(a) * rr, py = cy + Math.sin(a) * rr; p ? x.lineTo(px, py) : x.moveTo(px, py); }
      x.closePath(); const sh = 0.82 + rnd() * 0.3; x.fillStyle = col; x.globalAlpha = 1; x.fill(); x.fillStyle = sh < 1 ? `rgba(0,0,0,${(1 - sh).toFixed(2)})` : `rgba(255,255,255,${(sh - 1).toFixed(2)})`; x.fill();
    }
    return c;
  }
  function highlight() {
    const c = document.createElement('canvas'); c.width = c.height = 24; const x = c.getContext('2d');
    x.fillStyle = '#9fd18b'; x.fillRect(0, 0, 24, 24); x.strokeStyle = '#2e7424'; x.lineWidth = 3; x.beginPath(); x.moveTo(-6, 30); x.lineTo(30, -6); x.moveTo(-6, 6); x.lineTo(6, -6); x.moveTo(18, 30); x.lineTo(30, 18); x.stroke();
    return c;
  }
  async function texture(key, spec) {
    if (texCache[key]) return texCache[key];
    texCache[key] = spec.colors ? Promise.resolve(crumb(spec.colors, spec.seed)) : loadImg(spec.src);
    return texCache[key];
  }

  // ---------- the stage ----------
  function Stage(canvas) {
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    let W = 0, H = 0, orig = null, lum = null, small = null, sw = 0, sh = 0, mask = null, history = [], tex = null, texScale = 1, showOrig = false;
    const maskC = document.createElement('canvas'), maskX = maskC.getContext('2d');
    const paintC = document.createElement('canvas'), paintX = paintC.getContext('2d');

    async function setPhoto(src) {
      const img = await loadImg(src);
      const k = Math.min(1, MAXW / img.naturalWidth); W = Math.round(img.naturalWidth * k); H = Math.round(img.naturalHeight * k);
      canvas.width = W; canvas.height = H; ctx.drawImage(img, 0, 0, W, H);
      orig = ctx.getImageData(0, 0, W, H);
      lum = new Float32Array(W * H); for (let i = 0, j = 0; i < W * H; i++, j += 4) lum[i] = 0.2126 * orig.data[j] + 0.7152 * orig.data[j + 1] + 0.0722 * orig.data[j + 2];
      const ks = Math.min(1, WANDW / W); sw = Math.round(W * ks); sh = Math.round(H * ks);
      const c = document.createElement('canvas'); c.width = sw; c.height = sh; const cx = c.getContext('2d'); cx.drawImage(img, 0, 0, sw, sh);
      small = toLab(cx.getImageData(0, 0, sw, sh).data, sw * sh);
      mask = new Uint8Array(sw * sh); history = [];
      maskC.width = W; maskC.height = H; paintC.width = W; paintC.height = H;
      return { W, H };
    }
    function selectAt(fx, fy, tol, add = true) {
      const sx = Math.max(0, Math.min(sw - 1, Math.round(fx * sw))), sy = Math.max(0, Math.min(sh - 1, Math.round(fy * sh)));
      history.push(mask.slice());
      const m = add ? mask.slice() : new Uint8Array(sw * sh);
      wand(small, sw, sh, sx, sy, tol, m);
      mask = clean(m, sw, sh);
      buildMask(); render();
      return coverage();
    }
    function erase(fx, fy, r) {
      const cx = fx * sw, cy = fy * sh, rr = r * sw;
      for (let y = Math.max(0, cy - rr | 0); y <= Math.min(sh - 1, cy + rr); y++) for (let x = Math.max(0, cx - rr | 0); x <= Math.min(sw - 1, cx + rr); x++) if ((x - cx) ** 2 + (y - cy) ** 2 <= rr * rr) mask[y * sw + x] = 0;
      buildMask(); render();
    }
    function beginStroke() { history.push(mask.slice()); }
    function undo() { if (history.length) { mask = history.pop(); buildMask(); render(); } return coverage(); }
    function reset() { history.push(mask.slice()); mask = new Uint8Array(sw * sh); buildMask(); render(); }
    function coverage() { let c = 0; for (let i = 0; i < mask.length; i++) c += mask[i]; return c / mask.length; }
    function setMaskFrom(fn) { mask = fn(small, sw, sh, wand, clean); history = []; buildMask(); }
    function buildMask() {
      const c = document.createElement('canvas'); c.width = sw; c.height = sh; const x = c.getContext('2d'), id = x.createImageData(sw, sh);
      for (let i = 0; i < sw * sh; i++) { id.data[i * 4 + 3] = mask[i] ? 255 : 0; }
      x.putImageData(id, 0, 0);
      maskX.clearRect(0, 0, W, H); maskX.filter = 'blur(2px)'; maskX.imageSmoothingEnabled = true; maskX.drawImage(c, 0, 0, W, H); maskX.filter = 'none';
    }
    // Paint the texture in horizontal bands that shrink toward the top of the photo (a simple perspective).
    function paintTexture() {
      paintX.clearRect(0, 0, W, H);
      const bands = 28, base = W / (tex.width || 600) * texScale;
      for (let b = 0; b < bands; b++) {
        const y0 = Math.floor(H * b / bands), y1 = Math.ceil(H * (b + 1) / bands), t = (y0 + y1) / 2 / H;
        const s = base * (0.42 + 0.58 * t);
        const pat = paintX.createPattern(tex, 'repeat'); pat.setTransform(new DOMMatrix([s, 0, 0, s, (b * 37) % 97, 0]));
        paintX.fillStyle = pat; paintX.fillRect(0, y0, W, y1 - y0);
      }
    }
    function render() {
      if (!orig) return;
      if (showOrig || !tex || !mask) { ctx.putImageData(orig, 0, 0); return; }
      paintTexture();
      const P = paintX.getImageData(0, 0, W, H).data, M = maskX.getImageData(0, 0, W, H).data, O = orig.data;
      let tr = 0, tg = 0, tb = 0, tn = 0; for (let j = 0; j < P.length; j += 4 * 13) { tr += P[j]; tg += P[j + 1]; tb += P[j + 2]; tn++; }
      tr /= tn; tg /= tn; tb /= tn; const K = 0.62;
      for (let j = 0; j < P.length; j += 4) { P[j] = tr + (P[j] - tr) * K; P[j + 1] = tg + (P[j + 1] - tg) * K; P[j + 2] = tb + (P[j + 2] - tb) * K; }
      let sum = 0, cnt = 0; for (let i = 0; i < W * H; i += 7) if (M[i * 4 + 3] > 200) { sum += lum[i]; cnt++; }
      const mean = cnt ? sum / cnt : 128;
      const out = ctx.createImageData(W, H), D = out.data;
      for (let i = 0, j = 0; i < W * H; i++, j += 4) {
        const a = M[j + 3] / 255;
        if (a < 0.004) { D[j] = O[j]; D[j + 1] = O[j + 1]; D[j + 2] = O[j + 2]; D[j + 3] = 255; continue; }
        const sh = Math.min(1.3, Math.max(0.28, Math.pow(lum[i] / mean, 0.9)));
        D[j] = O[j] * (1 - a) + Math.min(255, P[j] * sh) * a;
        D[j + 1] = O[j + 1] * (1 - a) + Math.min(255, P[j + 1] * sh) * a;
        D[j + 2] = O[j + 2] * (1 - a) + Math.min(255, P[j + 2] * sh) * a;
        D[j + 3] = 255;
      }
      ctx.putImageData(out, 0, 0);
    }
    return {
      setPhoto, selectAt, erase, beginStroke, undo, reset, coverage, setMaskFrom, render,
      setTexture(t, scale) { tex = t; texScale = scale || 1; render(); },
      clearTexture() { tex = null; render(); },
      compare(on) { showOrig = on; render(); },
      blob(q = 0.85) { return new Promise(r => canvas.toBlob(r, 'image/jpeg', q)); },
      size: () => ({ W, H }),
    };
  }
  return { Stage, texture, highlight, wand, clean };
})();
