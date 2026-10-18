// HHS story scene: one field of points behind the page that flies into a new shape for each line of the story.
// Shapes are drawn on a small 2D canvas and sampled, so adding a shape is a few lines of canvas drawing.
import * as THREE from './vendor/three.module.min.js';

const S = 256; // sample canvas size

const draw = {
  cloud: null, // handled separately
  hhs(x) { x.font = '900 150px "Inter Tight", Arial, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('HHS', S / 2, S / 2 + 6); },
  pin(x) { x.beginPath(); x.arc(128, 100, 62, Math.PI * 0.85, Math.PI * 0.15); x.lineTo(128, 232); x.closePath(); x.fill(); x.globalCompositeOperation = 'destination-out'; x.beginPath(); x.arc(128, 100, 26, 0, 7); x.fill(); },
  grid4(x) { [[40, 40], [138, 40], [40, 138], [138, 138]].forEach(([a, b]) => { x.fillRect(a, b, 78, 78); }); },
  link(x) { x.lineWidth = 10; const pts = []; for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2 - Math.PI / 4; pts.push([128 + Math.cos(a) * 82, 128 + Math.sin(a) * 82]); }
    x.beginPath(); pts.forEach(([a, b], i) => (i ? x.lineTo(a, b) : x.moveTo(a, b))); x.closePath(); x.stroke(); pts.forEach(([a, b]) => { x.beginPath(); x.arc(a, b, 24, 0, 7); x.fill(); }); },
  team(x) { [[84, 0], [172, 0]].forEach(([a]) => { x.beginPath(); x.arc(a, 92, 34, 0, 7); x.fill(); x.beginPath(); x.ellipse(a, 196, 58, 52, 0, Math.PI, 0); x.fill(); }); },
  phone(x) { x.lineWidth = 14; x.beginPath(); x.roundRect(78, 22, 100, 212, 22); x.stroke(); x.fillRect(110, 40, 36, 8); x.beginPath(); x.arc(128, 206, 10, 0, 7); x.fill();
    x.lineWidth = 8; [26, 44].forEach(r => { x.beginPath(); x.arc(196, 60, r, -Math.PI / 2.4, Math.PI / 12); x.stroke(); }); },
  browser(x) { x.lineWidth = 12; x.beginPath(); x.roundRect(20, 40, 216, 176, 16); x.stroke(); x.fillRect(20, 40, 216, 34); x.globalCompositeOperation = 'destination-out'; [44, 66, 88].forEach(a => { x.beginPath(); x.arc(a, 57, 6, 0, 7); x.fill(); }); x.globalCompositeOperation = 'source-over';
    x.fillRect(44, 98, 120, 16); x.fillRect(44, 126, 168, 8); x.fillRect(44, 144, 150, 8); x.beginPath(); x.roundRect(44, 170, 80, 26, 13); x.fill(); },
  crm(x) { [[30, 40, 196], [50, 104, 176], [70, 168, 156]].forEach(([a, b, w]) => { x.beginPath(); x.roundRect(a, b, w, 46, 12); x.fill(); }); x.globalCompositeOperation = 'destination-out';
    [[46, 54], [66, 118], [86, 182]].forEach(([a, b]) => { x.beginPath(); x.arc(a + 8, b + 9, 9, 0, 7); x.fill(); x.fillRect(a + 26, b + 4, 90, 10); }); },
  dash(x) { [[40, 140], [84, 100], [128, 160], [172, 60]].forEach(([a, h]) => x.fillRect(a, 220 - h, 32, h)); x.fillRect(26, 222, 204, 8); x.lineWidth = 8; x.beginPath(); x.moveTo(44, 120); x.lineTo(98, 80); x.lineTo(142, 110); x.lineTo(206, 30); x.stroke(); },
  sun(x) { x.beginPath(); x.arc(128, 128, 54, 0, 7); x.fill(); x.lineWidth = 12; x.lineCap = 'round'; for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6; x.beginPath(); x.moveTo(128 + Math.cos(a) * 76, 128 + Math.sin(a) * 76); x.lineTo(128 + Math.cos(a) * 112, 128 + Math.sin(a) * 112); x.stroke(); } },
  spark(x) { const star = (cx, cy, r) => { x.beginPath(); for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4 - Math.PI / 2, rr = i % 2 ? r * 0.22 : r; x.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr); } x.closePath(); x.fill(); }; star(118, 136, 100); star(206, 50, 34); },
  store(x) { x.fillRect(36, 118, 184, 110); x.beginPath(); x.moveTo(24, 118); x.lineTo(46, 52); x.lineTo(210, 52); x.lineTo(232, 118); x.closePath(); x.fill(); x.globalCompositeOperation = 'destination-out'; x.fillRect(104, 152, 48, 76); x.fillRect(52, 140, 36, 40); x.fillRect(168, 140, 36, 40);
    for (let i = 0; i < 5; i++) x.fillRect(46 + i * 36, 52, 4, 66); },
  house(x) { x.beginPath(); x.moveTo(128, 26); x.lineTo(236, 120); x.lineTo(208, 120); x.lineTo(208, 228); x.lineTo(48, 228); x.lineTo(48, 120); x.lineTo(20, 120); x.closePath(); x.fill(); x.globalCompositeOperation = 'destination-out'; x.fillRect(108, 160, 40, 68); x.fillRect(68, 136, 30, 30); x.fillRect(158, 136, 30, 30); },
  box(x) { x.beginPath(); x.moveTo(128, 30); x.lineTo(226, 78); x.lineTo(226, 186); x.lineTo(128, 234); x.lineTo(30, 186); x.lineTo(30, 78); x.closePath(); x.fill(); x.globalCompositeOperation = 'destination-out'; x.lineWidth = 8;
    x.beginPath(); x.moveTo(30, 78); x.lineTo(128, 126); x.lineTo(226, 78); x.moveTo(128, 126); x.lineTo(128, 234); x.stroke(); },
  steps(x) { x.lineWidth = 8; x.beginPath(); x.moveTo(40, 200); x.bezierCurveTo(80, 120, 100, 200, 128, 128); x.bezierCurveTo(156, 56, 180, 120, 216, 50); x.stroke(); [[40, 200], [96, 158], [160, 92], [216, 50]].forEach(([a, b]) => { x.beginPath(); x.arc(a, b, 22, 0, 7); x.fill(); }); },
  check(x) { x.lineWidth = 34; x.lineCap = 'round'; x.lineJoin = 'round'; x.beginPath(); x.moveTo(50, 136); x.lineTo(108, 192); x.lineTo(210, 70); x.stroke(); },
};

const COLORS = { cloud: '#5fd2ff', hhs: '#2f7bff', pin: '#3fd6c6', grid4: '#5fd2ff', link: '#3fd6c6', team: '#8f7bff', phone: '#3fd6c6', browser: '#2f7bff', crm: '#8f7bff',
  dash: '#5fd2ff', sun: '#f5b23d', spark: '#8f7bff', store: '#3fd6c6', house: '#f5b23d', box: '#2f7bff', steps: '#5fd2ff', check: '#3fd6c6' };

export default function mount(host, beats, opts = {}) {
  const N = innerWidth < 700 ? 1700 : 2600;
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cache = {};
  const sample = name => {
    if (cache[name]) return cache[name];
    const out = new Float32Array(N * 3);
    if (name === 'cloud' || !draw[name]) {
      for (let i = 0; i < N; i++) { const u = Math.random() * 2 - 1, t = Math.random() * Math.PI * 2, r = 1.6 * Math.cbrt(Math.random()), s = Math.sqrt(1 - u * u);
        out.set([r * s * Math.cos(t) * 1.4, r * s * Math.sin(t), r * u], i * 3); }
      return (cache[name] = out);
    }
    const c = document.createElement('canvas'); c.width = c.height = S;
    const x = c.getContext('2d', { willReadFrequently: true }); x.fillStyle = x.strokeStyle = '#fff'; x.lineCap = 'round'; x.lineJoin = 'round';
    draw[name](x);
    const d = x.getImageData(0, 0, S, S).data, px = [];
    for (let y = 0; y < S; y += 2) for (let xx = 0; xx < S; xx += 2) if (d[(y * S + xx) * 4 + 3] > 120) px.push(xx, y);
    for (let i = 0; i < N; i++) { const k = (Math.random() * (px.length / 2)) | 0;
      out.set([(px[k * 2] / S - 0.5) * 2.4 + (Math.random() - 0.5) * 0.02, -(px[k * 2 + 1] / S - 0.5) * 2.4 + (Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.22], i * 3); }
    return (cache[name] = out);
  };

  const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
  host.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 50); camera.position.z = 5.2;

  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(sample('cloud')), seed = new Float32Array(N);
  for (let i = 0; i < N; i++) seed[i] = Math.random();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('seed', new THREE.BufferAttribute(seed, 1));
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uColor: { value: new THREE.Color(COLORS.cloud) }, uSize: { value: 30 * renderer.getPixelRatio() }, uFade: { value: 1 }, uTime: { value: 0 } },
    vertexShader: `attribute float seed; uniform float uSize; uniform float uTime; varying float vA;
      void main(){ vec3 p = position; p += 0.012 * vec3(sin(uTime*0.8+seed*40.0), cos(uTime*0.7+seed*30.0), 0.0);
        vec4 mv = modelViewMatrix * vec4(p,1.0); gl_Position = projectionMatrix * mv; gl_PointSize = uSize * (0.35 + seed*0.65) / -mv.z; vA = 0.45 + seed*0.55; }`,
    fragmentShader: `uniform vec3 uColor; uniform float uFade; varying float vA;
      void main(){ float d = length(gl_PointCoord-0.5); if(d>0.5) discard; float a = smoothstep(0.5,0.0,d); gl_FragColor = vec4(uColor, a*vA*uFade); }`,
  });
  const pts = new THREE.Points(geo, mat); scene.add(pts);

  let target = sample('cloud'), shape = 'cloud', fade = 1, fadeTo = 1, raf = 0, last = 0, energy = 1;
  const colorTo = new THREE.Color(COLORS.cloud);
  const layout = () => {
    const w = host.clientWidth, h = host.clientHeight; renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
    const wide = w >= 1000;
    pts.position.set(wide ? 1.55 : 0, wide ? 0 : 0.85, 0); pts.scale.setScalar(wide ? 1 : 0.62);
    wake();
  };
  const setShape = name => { if (name === shape) return; shape = name; target = sample(name); colorTo.set(COLORS[name] || COLORS.cloud); energy = 1; wake(); };
  const wake = () => { if (!raf) { last = performance.now(); raf = requestAnimationFrame(tick); } };
  function tick(now) {
    raf = 0; const dt = Math.min(0.05, (now - last) / 1000); last = now;
    const k = still ? 1 : 1 - Math.pow(0.0015, dt); let moving = 0;
    for (let i = 0; i < N * 3; i++) { const d = target[i] - pos[i]; if (d > 0.002 || d < -0.002) moving++; pos[i] += d * k * (0.55 + seed[(i / 3) | 0] * 0.9 > 1 ? 1 : 0.55 + seed[(i / 3) | 0] * 0.9); }
    geo.attributes.position.needsUpdate = true;
    mat.uniforms.uColor.value.lerp(colorTo, still ? 1 : 0.08);
    fade += (fadeTo - fade) * (still ? 1 : 0.1); mat.uniforms.uFade.value = fade;
    if (!still) { mat.uniforms.uTime.value = now / 1000; pts.rotation.y = Math.sin(now / 5200) * 0.22; pts.rotation.x = Math.sin(now / 7100) * 0.08; }
    renderer.render(scene, camera);
    energy = moving ? 1 : energy * 0.98;
    if (document.visibilityState === 'visible' && (!still || moving || Math.abs(fadeTo - fade) > 0.01)) raf = requestAnimationFrame(tick);
  }
  document.addEventListener('visibilitychange', wake);
  new ResizeObserver(layout).observe(host);
  layout();

  // which beat is in the middle of the screen decides the shape
  const pick = () => {
    const mid = innerHeight * 0.5; let best = null;
    for (const b of beats) { const r = b.getBoundingClientRect(); if (r.top <= mid && r.bottom >= mid) { best = b; break; } }
    if (best) { setShape(best.dataset.shape || 'cloud'); fadeTo = 1; }
    else { const first = beats[0].getBoundingClientRect(); if (first.top > mid) { setShape('cloud'); fadeTo = 1; } else { setShape(opts.after || 'cloud'); fadeTo = 0.22; } }
    wake();
  };
  addEventListener('scroll', pick, { passive: true }); pick();
  host.classList.add('on');
}
