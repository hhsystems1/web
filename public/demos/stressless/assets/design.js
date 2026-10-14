'use strict';
// StressLess "Design your surface": one step-by-step form with a live photo preview.
// Prices, blends and warranties come from stresslessremodels.com; VUBA swatches are the manufacturer's.
(() => {
  const $ = id => document.getElementById(id);
  const fmt = n => '$' + Math.round(n).toLocaleString('en-US');
  const track = (e, x) => window.slTrack && window.slTrack(e, x);
  const PH = window.DZ_PHOTOS || {};
  const photoURL = k => `viz/photo/${PH[k]}`;
  const texURL = f => `viz/tex/${f}`;

  // Sample photos: tap points (as fractions of the photo) that select the coated surface
  // Sample photos: the coated area traced by hand (fractions of the photo); holes cut out (pool water)
  const SURF = {
    pool: { name: 'Pool deck', word: 'pool deck', cap: 'A StressLess pool deck', size: 600, prods: ['rubber', 'vuba', 'sierra'],
      area: [[[0.03, 0.66], [0.06, 0.58], [0.15, 0.54], [0.25, 0.5], [0.29, 0.465], [0.36, 0.445], [0.5, 0.44], [0.62, 0.443], [0.75, 0.452], [0.83, 0.47], [0.88, 0.51], [0.905, 0.56], [0.9, 0.62], [0.87, 0.655], [0.8, 0.675], [0.72, 0.695], [0.6, 0.71], [0.45, 0.72], [0.3, 0.725], [0.2, 0.735], [0.1, 0.73], [0.05, 0.7]]],
      holes: [[[0.19, 0.6], [0.22, 0.555], [0.3, 0.525], [0.37, 0.5], [0.42, 0.472], [0.55, 0.462], [0.65, 0.47], [0.72, 0.5], [0.76, 0.55], [0.755, 0.6], [0.7, 0.632], [0.6, 0.652], [0.5, 0.672], [0.4, 0.69], [0.3, 0.692], [0.22, 0.672], [0.19, 0.64]]] },
    patio: { name: 'Patio', word: 'patio', cap: 'A StressLess courtyard patio', size: 400, prods: ['rubber', 'vuba', 'sierra'],
      area: [[[0, 0.405], [0.1, 0.415], [0.2, 0.3], [0.45, 0.27], [0.6, 0.275], [0.7, 0.3], [0.77, 0.36], [0.79, 0.45], [0.76, 0.55], [0.74, 0.63], [0.72, 0.75], [0.7, 0.86], [0.69, 1], [0, 1]]], holes: [] },
    drive: { name: 'Driveway / walkway', word: 'driveway', cap: 'A StressLess driveway', size: 600, prods: ['rubber', 'vuba', 'sierra'],
      area: [[[0, 0.215], [0.1, 0.195], [0.25, 0.125], [0.4, 0.075], [0.55, 0.035], [0.7, 0], [0.92, 0], [0.89, 0.05], [0.86, 0.12], [0.855, 0.19], [0.885, 0.26], [0.95, 0.32], [1, 0.35], [1, 1], [0, 1]]], holes: [] },
    garage: { name: 'Garage floor', word: 'garage floor', cap: 'A StressLess garage floor', size: 450, prods: ['vuba', 'rubber', 'sierra', 'epoxy'],
      area: [[[0, 0.665], [0.27, 0.645], [0.3, 0.575], [0.34, 0.575], [0.36, 0.625], [0.42, 0.625], [0.45, 0.605], [0.6, 0.605], [0.63, 0.635], [0.7, 0.665], [0.75, 0.625], [0.86, 0.585], [0.875, 0.61], [0.875, 0.7], [0.85, 0.735], [0.9, 0.765], [1, 0.765], [1, 1], [0, 1]]], holes: [] },
  };
  const PROD = {
    rubber: { name: 'Rubber Stone', why: 'Cooler underfoot, cushioned and slip-resistant. Flexes with your concrete instead of cracking.',
      blends: [{ n: 'Brown / Cream / White', colors: ['#6e4a30', '#e6d8bb', '#f6f4ee'], seed: 3 }, { n: 'Light Grey / Standard Grey / White', colors: ['#c9cccc', '#8b8f90', '#f6f4ee'], seed: 5 }, { n: 'Grey / Cream / White', colors: ['#8b8f90', '#e6d8bb', '#f6f4ee'], seed: 9 }],
      scale: 0.3, bnote: 'Our three most popular Rubber Stone blends. We bring real samples to your consultation.' },
    vuba: { name: 'VUBA Stone', why: 'Natural stone in clear, UV-stable resin. 100% permeable, so water drains through.',
      blends: [{ n: 'Ipanema Beach', src: 'IpanemaBeach_33e848c2-5ab9-40f9-97fd-a09500befe27.webp?width=600' }, { n: 'Poseidon', src: 'Poseidon_b4daa220-16bf-4598-9d14-163e0a2eb543.webp?width=600' }, { n: 'Manhattan', src: 'OG_Manhattan_final_1.webp?width=600' }],
      scale: 0.18, bnote: 'Our three most popular VUBA Stone blends, shown with the manufacturer\'s swatches.' },
    sierra: { name: 'Sierra Stone', why: 'Natural stone aggregates in industrial-grade epoxy. Indoors and out; resists stains and chemicals.',
      blends: [{ n: 'Blend 1' }, { n: 'Blend 2' }], bnote: 'Sierra Stone comes in two color blends. We show them in person, so the preview keeps your current surface.' },
    epoxy: { name: 'Epoxy', why: 'A smooth, glossy garage finish with strong adhesion to concrete.', blends: [{ n: 'Chosen at consultation' }], bnote: 'Epoxy colors are chosen with your consultant, so the preview keeps your current floor.' },
  };
  const RATE = { 'pool:rubber': [13, 16], 'patio:rubber': [13, 16], 'pool:vuba': [11, 13], 'patio:vuba': [11, 13], 'garage:vuba': [8, 10], 'garage:epoxy': [4, 7] };
  const warranty = (s, p) => p === 'vuba' && s === 'garage' ? 'Lifetime warranty on VUBA Stone garage floors'
    : p === 'rubber' || p === 'vuba' ? '6-year warranty, materials & installation' : 'Warranty terms reviewed at your consultation';
  const price = (s, p, sq) => { const r = RATE[s + ':' + p]; return r ? [r[0] * sq, r[1] * sq] : null; };

  const st = { step: 0, surface: 'pool', product: 'rubber', blend: 0, sqft: 600, adds: [], own: false, ownFile: null, tool: 'add' };
  const stage = window.SLViz.Stage($('dz-canvas'));
  const form = $('dz-form'), panes = [...form.querySelectorAll('.dz-pane')], dots = [...form.querySelectorAll('.dz-steps li')];
  let started = false; const start = () => { if (!started) { started = true; track('design_start'); } };

  // ---------- photo + texture ----------
  async function loadSample() {
    const sv = SURF[st.surface];
    $('dz-load').hidden = false;
    try {
      await stage.setPhoto(photoURL(st.surface));
      stage.setMaskFrom((lab, w, h) => {
        const c = document.createElement('canvas'); c.width = w; c.height = h; const x = c.getContext('2d');
        const poly = pts => { x.beginPath(); pts.forEach(([fx, fy], i) => i ? x.lineTo(fx * w, fy * h) : x.moveTo(fx * w, fy * h)); x.closePath(); };
        x.fillStyle = '#000'; sv.area.forEach(p => { poly(p); x.fill(); });
        x.globalCompositeOperation = 'destination-out'; sv.holes.forEach(p => { poly(p); x.fill(); });
        const d = x.getImageData(0, 0, w, h).data, m = new Uint8Array(w * h);
        for (let i = 0; i < w * h; i++) m[i] = d[i * 4 + 3] > 127 ? 1 : 0;
        return m;
      });
      st.own = false; $('dz-cap').textContent = sv.cap; $('dz-cap').hidden = false;
      await applyTexture();
    } catch (e) { $('dz-load').textContent = 'Photo unavailable right now.'; return; }
    $('dz-load').hidden = true;
  }
  async function loadOwn(file) {
    $('dz-load').hidden = false; $('dz-load').textContent = 'Loading your photo…';
    const url = URL.createObjectURL(file);
    try { await stage.setPhoto(url); } catch (e) { $('dz-load').textContent = 'That photo could not be opened. Try a JPG or PNG.'; return; }
    st.own = true; st.ownFile = file; $('dz-cap').textContent = 'Your photo'; $('dz-load').hidden = true;
    $('dz-tools').hidden = false; $('dz-attach').hidden = false; $('dz-stage').classList.add('editing');
    tip(`Tap your ${SURF[st.surface].word} to select it`);
    track('design_upload', st.surface);
    $('dz-next').textContent = 'Next →';
    await applyTexture(true);
  }
  let texToken = 0;
  async function applyTexture(forceHighlight) {
    const me = ++texToken, pd = PROD[st.product], bl = pd.blends[st.blend];
    if (bl.colors || bl.src) {
      const t = await window.SLViz.texture(st.product + st.blend, bl.colors ? bl : { src: texURL(bl.src) }).catch(() => null);
      if (me !== texToken) return;
      if (t) { stage.setTexture(t, pd.scale); swatch(t); return; }
    }
    swatch(null);
    // no swatch for this coating: while choosing an area on your own photo, show the selection; otherwise keep the photo as is
    if (st.own && (forceHighlight || st.step === 1)) stage.setTexture(window.SLViz.highlight(), 1); else stage.clearTexture();
  }
  function swatch(t) {
    const el = $('dz-chip-sw');
    if (t) { el.style.backgroundImage = `url(${t.toDataURL ? t.toDataURL('image/jpeg', 0.7) : t.src})`; el.hidden = false; } else el.hidden = true;
  }
  function tip(text) { const t = $('dz-tip'); if (text) { t.textContent = text; t.hidden = false; } else t.hidden = true; }

  // ---------- canvas interaction (selection on your own photo) ----------
  const cv = $('dz-canvas');
  const frac = e => { const r = cv.getBoundingClientRect(); return [(e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height]; };
  let erasing = false;
  cv.addEventListener('pointerdown', e => {
    if (st.step !== 1 || !st.own) return;
    const [fx, fy] = frac(e);
    if (st.tool === 'add') { const cov = stage.selectAt(fx, fy, +$('dz-tol').value, true); tip(cov > 0.75 ? 'That grabbed a lot. Lower the sensitivity or tap Undo.' : 'Looks good? Tap more spots to add, or hit Next.'); start(); }
    else { erasing = true; cv.setPointerCapture(e.pointerId); stage.beginStroke(); stage.erase(fx, fy, 0.035); }
  });
  cv.addEventListener('pointermove', e => { if (erasing) { const [fx, fy] = frac(e); stage.erase(fx, fy, 0.035); } });
  cv.addEventListener('pointerup', () => { erasing = false; });
  form.querySelectorAll('[data-tool]').forEach(b => b.addEventListener('click', () => { st.tool = b.dataset.tool; form.querySelectorAll('[data-tool]').forEach(x => x.setAttribute('aria-pressed', x === b)); cv.style.cursor = st.tool === 'erase' ? 'cell' : 'crosshair'; }));
  $('dz-undo').addEventListener('click', () => stage.undo());
  $('dz-clear').addEventListener('click', () => { stage.reset(); tip(`Tap your ${SURF[st.surface].word} to select it`); });
  const cmp = $('dz-cmp');
  ['pointerdown', 'keydown'].forEach(ev => cmp.addEventListener(ev, e => { if (ev === 'keydown' && e.key !== ' ' && e.key !== 'Enter') return; stage.compare(true); cmp.classList.add('on'); }));
  ['pointerup', 'pointerleave', 'keyup', 'blur'].forEach(ev => cmp.addEventListener(ev, () => { stage.compare(false); cmp.classList.remove('on'); }));

  // ---------- form ----------
  function renderOpts() {
    const sv = SURF[st.surface];
    if (!sv.prods.includes(st.product)) { st.product = sv.prods[0]; st.blend = 0; }
    form.querySelectorAll('[data-k=surface] button').forEach(b => b.setAttribute('aria-pressed', b.dataset.v === st.surface));
    form.querySelector('[data-k=product]').innerHTML = sv.prods.map(p => { const r = RATE[st.surface + ':' + p]; return `<button type="button" data-v="${p}" aria-pressed="${p === st.product}">${PROD[p].name}<small>${r ? `$${r[0]}–$${r[1]} / sq ft` : 'Priced in person'}</small></button>`; }).join('');
    const pd = PROD[st.product];
    form.querySelector('[data-k=blend]').innerHTML = pd.blends.map((bl, i) => `<button type="button" data-v="${i}" aria-pressed="${i === st.blend}"><i class="sw" data-sw="${i}"></i><span>${bl.n}</span></button>`).join('');
    pd.blends.forEach((bl, i) => {
      const el = form.querySelector(`[data-sw="${i}"]`);
      if (!bl.colors && !bl.src) { el.remove(); return; }
      window.SLViz.texture(st.product + i, bl.colors ? bl : { src: texURL(bl.src) }).then(t => { el.style.backgroundImage = `url(${t.toDataURL ? t.toDataURL('image/jpeg', 0.7) : t.src})`; }).catch(() => el.remove());
    });
    $('dz-why').textContent = pd.why; $('dz-bnote').textContent = pd.bnote;
    $('dz-what').textContent = sv.word;
    form.querySelector('.pool-only').hidden = st.surface !== 'pool';
  }
  function renderPrice() {
    const sv = SURF[st.surface], pd = PROD[st.product], pr = price(st.surface, st.product, st.sqft), r = RATE[st.surface + ':' + st.product];
    const txt = pr ? `${fmt(pr[0])} – ${fmt(pr[1])}` : 'Priced in person';
    $('dz-coat-name').textContent = pd.name; $('dz-blend-name').textContent = pd.blends[st.blend].n; $('dz-chip-price').textContent = txt;
    $('dz-price').textContent = pr ? txt : 'Priced at your free consultation';
    $('dz-rate').textContent = pr ? `$${r[0]}–$${r[1]} / sq ft × ${st.sqft.toLocaleString('en-US')} sq ft` : `StressLess doesn't publish a typical ${pd.name} price for this space.`;
    $('dz-mo').textContent = pr ? `About ${fmt((pr[0] + pr[1]) / 2 / 24)}/mo with 24 months same as cash` : '24 months same as cash available';
    $('dz-warr').textContent = warranty(st.surface, st.product);
    $('dz-sqft').textContent = st.sqft.toLocaleString('en-US'); $('dz-range').value = st.sqft;
    let up = null;
    if ((st.surface === 'pool' || st.surface === 'patio') && st.product === 'vuba') up = { to: 'rubber', t: 'Upgrade to Rubber Stone', d: 'Cooler underfoot and cushioned for bare feet' };
    if (st.surface === 'garage' && st.product === 'epoxy') up = { to: 'vuba', t: 'Upgrade to VUBA Stone', d: 'Lifetime warranty on garage floors; resists UV yellowing' };
    if (up) {
      const a = price(st.surface, st.product, st.sqft), b2 = price(st.surface, up.to, st.sqft);
      $('dz-upg-t').textContent = up.t; $('dz-upg-d').textContent = up.d + (a && b2 ? ` · about +${fmt(Math.round(((b2[0] + b2[1]) - (a[0] + a[1])) / 2 / 25) * 25)}` : '');
      $('dz-upg-b').dataset.to = up.to; $('dz-upg').hidden = false;
    } else $('dz-upg').hidden = true;
    $('dz-sum').textContent = summary();
  }
  const summary = () => {
    const sv = SURF[st.surface], pd = PROD[st.product], pr = price(st.surface, st.product, st.sqft);
    return `${sv.name} · ${pd.name} · ${pd.blends[st.blend].n} · about ${st.sqft.toLocaleString('en-US')} sq ft` + (st.adds.length ? ` · plus ${st.adds.join(', ')}` : '') + (pr ? ` · typical ${fmt(pr[0])}–${fmt(pr[1])}` : '') + (st.own ? ' · customer photo attached' : '');
  };
  function go(i) {
    st.step = Math.max(0, Math.min(5, i));
    panes.forEach(p => p.hidden = +p.dataset.step !== st.step);
    dots.forEach((d, k) => { d.classList.toggle('on', k === st.step); d.classList.toggle('done', k < st.step); d.setAttribute('aria-current', k === st.step ? 'step' : 'false'); });
    $('dz-back').hidden = st.step === 0;
    $('dz-next').textContent = st.step === 5 ? 'Send my design' : st.step === 1 && !st.own ? 'Skip →' : 'Next →';
    $('dz-stage').classList.toggle('editing', st.step === 1 && st.own);
    if (st.step !== 1) tip(null); else if (st.own) tip('Tap to add more area, or hit Next.');
    if (st.step === 5) track('design_quote', st.surface + '-' + st.product);
    applyTexture();
    if (innerWidth < 980 && st.step > 0) $('dz-stage').scrollIntoView({ block: 'start', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }
  dots.forEach((d, k) => d.addEventListener('click', () => { if (k <= st.step || started) go(k); }));
  $('dz-back').addEventListener('click', () => go(st.step - 1));
  $('dz-next').addEventListener('click', () => st.step === 5 ? submit() : go(st.step + 1));
  form.addEventListener('submit', e => { e.preventDefault(); if (st.step === 5) submit(); });

  form.addEventListener('click', async e => {
    const b = e.target.closest('.dz-opts button'); if (!b) return;
    start();
    const k = b.parentElement.dataset.k;
    if (k === 'surface') { const changed = st.surface !== b.dataset.v; st.surface = b.dataset.v; st.sqft = SURF[st.surface].size; if (changed) { st.blend = 0; renderOpts(); renderPrice(); if (!st.own) await loadSample(); } go(1); return; }
    if (k === 'product') { st.product = b.dataset.v; st.blend = 0; track('design_product', st.product); }
    if (k === 'blend') st.blend = +b.dataset.v;
    renderOpts(); renderPrice(); applyTexture();
  });
  $('dz-upg-b').addEventListener('click', e => { track('design_upgrade', e.target.dataset.to); st.product = e.target.dataset.to; st.blend = 0; renderOpts(); renderPrice(); applyTexture(); });
  $('dz-file').addEventListener('change', e => { const f = e.target.files[0]; if (f) { start(); loadOwn(f); } });
  $('dz-sample').addEventListener('click', async () => { $('dz-tools').hidden = true; $('dz-attach').hidden = true; st.ownFile = null; await loadSample(); go(2); });
  $('dz-range').addEventListener('input', e => { start(); st.sqft = +e.target.value; renderPrice(); });
  form.querySelectorAll('[data-sq]').forEach(b => b.addEventListener('click', () => { start(); st.sqft = +b.dataset.sq; renderPrice(); }));
  form.querySelectorAll('.dz-adds input').forEach(c => c.addEventListener('change', () => { st.adds = [...form.querySelectorAll('.dz-adds input:checked')].filter(i => !i.closest('[hidden]')).map(i => i.value); renderPrice(); }));

  async function submit() {
    const msg = form.querySelector('.mf-msg'), btn = $('dz-next');
    const need = [['first', v => v.trim()], ['phone', v => v.replace(/\D/g, '').length >= 10], ['email', v => /^\S+@\S+\.\S+$/.test(v)], ['zip', v => /^\d{5}$/.test(v.trim())]];
    form.querySelectorAll('[aria-invalid]').forEach(i => i.removeAttribute('aria-invalid'));
    const bad = need.filter(([n, ok]) => !ok(form.elements[n].value)).map(([n]) => form.elements[n]);
    if (bad.length) { bad.forEach(i => i.setAttribute('aria-invalid', 'true')); bad[0].focus(); msg.className = 'mf-msg err'; msg.textContent = 'Please add your name, a 10-digit phone, an email and a 5-digit ZIP.'; return; }
    if (form.elements['bot-field'].value) return;
    btn.disabled = true; msg.className = 'mf-msg'; msg.textContent = 'Sending…';
    const fd = new FormData();
    const fields = { 'form-name': 'stressless-design', source: 'design builder', page: location.pathname, project: SURF[st.surface].name, zip: form.elements.zip.value.trim(), first: form.elements.first.value.trim(), phone: form.elements.phone.value.trim(), email: form.elements.email.value.trim(), sms_consent: form.elements.sms_consent.checked ? 'yes' : 'no', message: 'Design: ' + summary() };
    Object.entries(fields).forEach(([k, v]) => fd.append(k, v));
    if (st.own && $('dz-sendphoto').checked) {
      const out = await stage.blob(0.85).catch(() => null);
      if (out) fd.append('design_photo', out, 'design.jpg');
      if (st.ownFile && st.ownFile.size < 6e6) fd.append('original_photo', st.ownFile, st.ownFile.name || 'photo.jpg');
    }
    try {
      const r = await fetch('forms.html', { method: 'POST', body: fd });
      if (!r.ok) throw new Error(r.status);
      track('lead_design', st.surface + '-' + st.product);
      panes.forEach(p => p.hidden = true); $('dz-nav').hidden = true; $('dz-done').hidden = false; $('dz-done').focus();
    } catch (err) {
      msg.className = 'mf-msg err'; msg.innerHTML = `Sorry, that didn't go through. Please call <a href="tel:+16239395300">(623) 939-5300</a>.`;
    } finally { btn.disabled = false; }
  }

  // Deep links: design.html?s=garage&p=vuba
  const q = new URLSearchParams(location.search);
  if (SURF[q.get('s')]) { st.surface = q.get('s'); st.sqft = SURF[st.surface].size; }
  if (PROD[q.get('p')] && SURF[st.surface].prods.includes(q.get('p'))) st.product = q.get('p');
  renderOpts(); renderPrice(); go(0); loadSample();
})();
