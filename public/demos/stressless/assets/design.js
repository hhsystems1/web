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
  // Sample photos and their AI-rendered versions (one per Rubber Stone / VUBA Stone blend), rendered from the real photo
  const RENDERS = ["hf_20261014_130933_c7528bfe-cd93-4643-832a-6097480aadeb", "hf_20261014_131103_86521a79-d3c7-4711-9aef-f7ab7d17bb4b", "hf_20261014_130934_3ce679dd-f6f1-4bbb-8b66-e28f5eb4ee24", "hf_20261014_130935_1d28baf0-21ae-4e1e-9e25-ce6ad57acfdc", "hf_20261014_130727_74bef1f6-9997-4e97-91a5-6cba03da7acd", "hf_20261014_131104_35100240-a02e-497e-94fc-5846d7a821a6", "hf_20261014_130935_83a5eca7-39ab-41e8-ba74-6b9f5ea8fcac", "hf_20261014_131104_ed829b78-6a06-4e71-8c0f-342db581a033", "hf_20261014_130934_8f78e7b2-41a5-4e73-b36e-fb155e3ce8e2", "hf_20261014_131105_6f1d37ec-2762-41f9-8ec8-686b3023c718", "hf_20261014_130937_f2e029d2-a2ab-4f1b-a857-2b3736fb3425", "hf_20261014_130936_28a160d0-ca10-4b55-b677-b3c79dbb1ed1", "hf_20261014_130934_fd7a7d91-ae38-4716-ab29-fb314f482e84", "hf_20261014_131123_c4184540-edbb-4a3e-a79a-8431a7263a7c", "hf_20261014_131122_73b66ecc-52fc-4f9f-8ab6-c2f42ad6f964", "hf_20261014_131124_8e9cef3f-4e12-4e1c-a7d9-357ae986b4ea", "hf_20261014_131123_8e1aa18c-c949-4b42-895c-718968f1c609", "hf_20261014_131148_efc74cfb-97d3-4a1c-8947-14c17933cf09", "hf_20261014_131149_4c638262-7a6e-4650-9527-76ec419ccea1", "hf_20261014_131148_f51ec029-2581-419a-b73a-eb72f4ea7048", "hf_20261014_131148_f2377af8-1168-42a2-b93a-9c0b5bf2321f", "hf_20261014_131235_d13368d0-0abe-407d-a5b8-a6cded1cdcaa", "hf_20261014_131236_2360be0a-427e-4b48-a5e2-04702b806758", "hf_20261014_131235_ef9c388e-2993-40c4-abda-c36ea36ccd13"];
  const ORDER = ['pool', 'patio', 'drive', 'garage'];
  const renderURL = (s, p, b) => { if (p !== 'rubber' && p !== 'vuba') return null; const f = RENDERS[ORDER.indexOf(s) * 6 + (p === 'vuba' ? 3 : 0) + b]; return f ? `viz/r/${f}.png` : null; };
  const SURF = {
    pool: { name: 'Pool deck', word: 'pool deck', cap: 'A StressLess pool deck', size: 600, prods: ['rubber', 'vuba', 'sierra'] },
    patio: { name: 'Patio', word: 'patio', cap: 'A StressLess courtyard patio', size: 400, prods: ['rubber', 'vuba', 'sierra'] },
    drive: { name: 'Driveway / walkway', word: 'driveway', cap: 'A StressLess driveway', size: 600, prods: ['rubber', 'vuba', 'sierra'] },
    garage: { name: 'Garage floor', word: 'garage floor', cap: 'A StressLess garage floor', size: 450, prods: ['vuba', 'rubber', 'sierra', 'epoxy'] },
  };
  const PROD = {
    rubber: { name: 'Rubber Stone', why: 'Cooler underfoot, cushioned and slip-resistant. Flexes with your concrete instead of cracking.',
      blends: [{ n: 'Brown / Cream / White', colors: ['#6e4a30', '#e6d8bb', '#f6f4ee'], seed: 3 }, { n: 'Light Grey / Standard Grey / White', colors: ['#c9cccc', '#8b8f90', '#f6f4ee'], seed: 5 }, { n: 'Grey / Cream / White', colors: ['#8b8f90', '#e6d8bb', '#f6f4ee'], seed: 9 }],
      scale: 0.3, bnote: 'Our three most popular Rubber Stone blends. We bring real samples to your consultation.' },
    vuba: { name: 'VUBA Stone', why: 'Natural stone in clear, UV-stable resin. 100% permeable, so water drains through.',
      blends: [{ n: 'Ipanema Beach', src: 'IpanemaBeach_33e848c2-5ab9-40f9-97fd-a09500befe27.webp?width=600' }, { n: 'Poseidon', src: 'Poseidon_b4daa220-16bf-4598-9d14-163e0a2eb543.webp?width=600' }, { n: 'Manhattan', src: 'OG_Manhattan_final_1.webp?width=600' }],
      scale: 0.18, bnote: 'Our three most popular VUBA Stone blends, shown with the manufacturer\'s swatches.' },
    sierra: { name: 'Sierra Stone', why: 'Natural stone aggregates in industrial-grade epoxy. Indoors and out; resists stains and chemicals.',
      blends: [{ n: 'Blend 1' }, { n: 'Blend 2' }], bnote: 'Sierra Stone comes in two color blends that we show in person, so the photo shows the surface before.' },
    epoxy: { name: 'Epoxy', why: 'A smooth, glossy garage finish with strong adhesion to concrete.', blends: [{ n: 'Chosen at consultation' }], bnote: 'Epoxy colors are chosen with your consultant, so the photo shows the floor before.' },
  };
  const RATE = { 'pool:rubber': [13, 16], 'patio:rubber': [13, 16], 'pool:vuba': [11, 13], 'patio:vuba': [11, 13], 'garage:vuba': [8, 10], 'garage:epoxy': [4, 7] };
  const warranty = (s, p) => p === 'vuba' && s === 'garage' ? 'Lifetime warranty on VUBA Stone garage floors'
    : p === 'rubber' || p === 'vuba' ? '6-year warranty, materials & installation' : 'Warranty terms reviewed at your consultation';
  const price = (s, p, sq) => { const r = RATE[s + ':' + p]; return r ? [r[0] * sq, r[1] * sq] : null; };

  const st = { step: 0, surface: 'pool', product: 'rubber', blend: 0, sqft: 600, adds: [], own: false, ownFile: null, tool: 'add' };
  const form = $('dz-form');
  let started = false; const start = () => { if (!started) { started = true; track('design_start'); } };

  // ---------- photo preview ----------
  const orig = $('dz-orig'), rend = $('dz-render');
  const preload = {};
  const warm = u => { if (u && !preload[u]) { preload[u] = new Image(); preload[u].src = u; } };
  function showPreview() {
    const sv = SURF[st.surface];
    const before = photoURL(st.surface);
    if (orig.dataset.src !== before) { orig.dataset.src = before; $('dz-load').hidden = false; orig.onload = () => { $('dz-load').hidden = true; }; orig.src = before; orig.alt = sv.cap + ', before'; }
    const after = renderURL(st.surface, st.product, st.blend);
    if (after) {
      if (rend.dataset.src !== after) { rend.dataset.src = after; rend.classList.add('fade'); rend.onload = () => rend.classList.remove('fade'); rend.src = after; }
      rend.hidden = false; rend.alt = `${sv.cap} in ${PROD[st.product].name} ${PROD[st.product].blends[st.blend].n}`;
      $('dz-cmp').hidden = false;
    } else { rend.hidden = true; $('dz-cmp').hidden = true; }
    $('dz-cap').textContent = after ? sv.cap + ' · preview' : sv.cap;
    // warm the other blends for this surface so switching is instant
    [0, 1, 2].forEach(b => { warm(renderURL(st.surface, 'rubber', b)); warm(renderURL(st.surface, 'vuba', b)); });
    swatch();
  }
  function swatch() {
    const bl = PROD[st.product].blends[st.blend], el = $('dz-chip-sw');
    if (bl.src) { el.style.background = ''; el.style.backgroundImage = `url(${texURL(bl.src)})`; el.hidden = false; }
    else if (bl.colors) { el.style.background = `url(${renderURL('drive', 'rubber', st.blend)}) 50% 88% / 520% auto`; el.hidden = false; }
    else el.hidden = true;
  }
  const chipBg = c => `radial-gradient(circle at 25% 30%,${c[0]} 0 14%,transparent 15%),radial-gradient(circle at 70% 25%,${c[1]} 0 13%,transparent 14%),radial-gradient(circle at 45% 70%,${c[0]} 0 12%,transparent 13%),radial-gradient(circle at 80% 72%,${c[1]} 0 11%,transparent 12%),radial-gradient(circle at 15% 78%,${c[2]} 0 12%,transparent 13%),radial-gradient(circle at 55% 45%,${c[2]} 0 10%,transparent 11%),${c[1]}`;
  function tip(text) { const t = $('dz-tip'); if (text) { t.textContent = text; t.hidden = false; } else t.hidden = true; }
  const cmp = $('dz-cmp');
  const before = on => { rend.classList.toggle('hide', on); cmp.classList.toggle('on', on); };
  ['pointerdown'].forEach(ev => cmp.addEventListener(ev, () => before(true)));
  ['pointerup', 'pointerleave', 'pointercancel', 'blur'].forEach(ev => cmp.addEventListener(ev, () => before(false)));
  cmp.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); before(true); } });
  cmp.addEventListener('keyup', () => before(false));
  // Their own photo: kept in the browser until they send it with their request
  function setOwn(file) {
    st.own = true; st.ownFile = file;
    $('dz-thumb').src = URL.createObjectURL(file); $('dz-mine').hidden = false; $('dz-attach').hidden = false;
    track('design_upload', st.surface);
  }

  // ---------- one panel: every change updates the photo and price at once ----------
  function renderOpts() {
    const sv = SURF[st.surface];
    if (!sv.prods.includes(st.product)) { st.product = sv.prods[0]; st.blend = 0; }
    form.querySelectorAll('[data-k=surface] button').forEach(b => b.setAttribute('aria-pressed', b.dataset.v === st.surface));
    form.querySelector('[data-k=product]').innerHTML = sv.prods.map(p => { const r = RATE[st.surface + ':' + p]; return `<button type="button" data-v="${p}" aria-pressed="${p === st.product}">${PROD[p].name}<small>${r ? `$${r[0]}–$${r[1]}/sq ft` : 'Priced in person'}</small></button>`; }).join('');
    const pd = PROD[st.product];
    form.querySelector('[data-k=blend]').innerHTML = pd.blends.map((bl, i) => `<button type="button" data-v="${i}" aria-pressed="${i === st.blend}" title="${bl.n}" aria-label="${bl.n}"><i class="sw" data-sw="${i}"></i><span>${bl.n}</span></button>`).join('');
    pd.blends.forEach((bl, i) => {
      const el = form.querySelector(`[data-sw="${i}"]`);
      if (bl.src) el.style.backgroundImage = `url(${texURL(bl.src)})`; else if (bl.colors) el.style.background = `url(${renderURL('drive', 'rubber', i)}) 50% 88% / 520% auto`; else el.classList.add('sw-none');
    });
    $('dz-why').textContent = pd.why; $('dz-bnote').textContent = pd.bnote; $('dz-bname').textContent = pd.blends[st.blend].n;
    $('dz-what').textContent = sv.word;
    form.querySelector('.pool-only').hidden = st.surface !== 'pool';
  }
  function renderPrice() {
    const pd = PROD[st.product], pr = price(st.surface, st.product, st.sqft), r = RATE[st.surface + ':' + st.product];
    const txt = pr ? `${fmt(pr[0])} – ${fmt(pr[1])}` : 'Priced in person';
    $('dz-coat-name').textContent = pd.name; $('dz-blend-name').textContent = pd.blends[st.blend].n; $('dz-chip-price').textContent = txt;
    $('dz-price').textContent = pr ? txt : 'Priced at your free consultation';
    $('dz-rate').textContent = pr ? `$${r[0]}–$${r[1]}/sq ft × ${st.sqft.toLocaleString('en-US')} sq ft` : `StressLess doesn't publish a typical ${pd.name} price for this space.`;
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
    return `${sv.name} · ${pd.name} · ${pd.blends[st.blend].n} · about ${st.sqft.toLocaleString('en-US')} sq ft` + (st.adds.length ? ` · plus ${st.adds.join(', ')}` : '') + (pr ? ` · typical ${fmt(pr[0])}–${fmt(pr[1])}` : '') + (st.own ? ' · customer photo attached: send custom preview' : '');
  };
  const update = () => { renderOpts(); renderPrice(); showPreview(); };

  form.addEventListener('click', e => {
    const b = e.target.closest('[data-k] button'); if (!b) return;
    start();
    const k = b.closest('[data-k]').dataset.k;
    if (k === 'surface' && st.surface !== b.dataset.v) { st.surface = b.dataset.v; st.sqft = SURF[st.surface].size; st.blend = 0; }
    if (k === 'product' && st.product !== b.dataset.v) { st.product = b.dataset.v; st.blend = 0; track('design_product', st.product); }
    if (k === 'blend') st.blend = +b.dataset.v;
    update();
  });
  $('dz-upg-b').addEventListener('click', e => { track('design_upgrade', e.target.dataset.to); st.product = e.target.dataset.to; st.blend = 0; update(); });
  $('dz-file').addEventListener('change', e => { const f = e.target.files[0]; if (f) { start(); setOwn(f); renderPrice(); } });
  $('dz-remove').addEventListener('click', () => { st.own = false; st.ownFile = null; $('dz-mine').hidden = true; $('dz-attach').hidden = true; $('dz-file').value = ''; renderPrice(); });
  $('dz-range').addEventListener('input', e => { start(); st.sqft = +e.target.value; renderPrice(); });
  form.querySelectorAll('[data-sq]').forEach(b => b.addEventListener('click', () => { start(); st.sqft = +b.dataset.sq; renderPrice(); }));
  form.querySelectorAll('.dz-adds input').forEach(c => c.addEventListener('change', () => { st.adds = [...form.querySelectorAll('.dz-adds input:checked')].filter(i => !i.closest('[hidden]')).map(i => i.value); renderPrice(); }));
  $('dz-go').addEventListener('click', () => {
    start(); track('design_quote', st.surface + '-' + st.product);
    $('dz-contact').hidden = false; $('dz-go').hidden = true;
    $('dz-contact').scrollIntoView({ block: 'center', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    setTimeout(() => form.elements.first.focus({ preventScroll: true }), 350);
  });
  form.addEventListener('submit', e => { e.preventDefault(); submit(); });

  // Keep uploads small enough for the form (max ~1600px JPEG)
  function shrink(file) {
    return new Promise(res => {
      const img = new Image(); img.onload = () => { const k = Math.min(1, 1600 / Math.max(img.naturalWidth, img.naturalHeight)); const c = document.createElement('canvas'); c.width = Math.round(img.naturalWidth * k); c.height = Math.round(img.naturalHeight * k); c.getContext('2d').drawImage(img, 0, 0, c.width, c.height); c.toBlob(b => res(b || file), 'image/jpeg', 0.85); };
      img.onerror = () => res(file); img.src = URL.createObjectURL(file);
    });
  }
  async function submit() {
    const msg = form.querySelector('.mf-msg'), btn = $('dz-send');
    const need = [['first', v => v.trim()], ['phone', v => v.replace(/\D/g, '').length >= 10], ['email', v => /^\S+@\S+\.\S+$/.test(v)], ['zip', v => /^\d{5}$/.test(v.trim())]];
    form.querySelectorAll('[aria-invalid]').forEach(i => i.removeAttribute('aria-invalid'));
    const bad = need.filter(([n, ok]) => !ok(form.elements[n].value)).map(([n]) => form.elements[n]);
    if (bad.length) { bad.forEach(i => i.setAttribute('aria-invalid', 'true')); bad[0].focus(); msg.className = 'mf-msg err'; msg.textContent = 'Please add your name, a 10-digit phone, an email and a 5-digit ZIP.'; return; }
    if (form.elements['bot-field'].value) return;
    btn.disabled = true; msg.className = 'mf-msg'; msg.textContent = 'Sending…';
    const fd = new FormData();
    const fields = { 'form-name': 'stressless-design', source: 'design builder', page: location.pathname, project: SURF[st.surface].name, zip: form.elements.zip.value.trim(), first: form.elements.first.value.trim(), phone: form.elements.phone.value.trim(), email: form.elements.email.value.trim(), sms_consent: form.elements.sms_consent.checked ? 'yes' : 'no', message: 'Design: ' + summary() };
    Object.entries(fields).forEach(([k, v]) => fd.append(k, v));
    if (st.own && $('dz-sendphoto').checked && st.ownFile) fd.append('original_photo', await shrink(st.ownFile), 'customer-photo.jpg');
    try {
      const r = await fetch('forms.html', { method: 'POST', body: fd });
      if (!r.ok) throw new Error(r.status);
      track('lead_design', st.surface + '-' + st.product);
      $('dz-contact').hidden = true; $('dz-done').hidden = false; $('dz-done').focus();
    } catch (err) {
      msg.className = 'mf-msg err'; msg.innerHTML = `Sorry, that didn't go through. Please call <a href="tel:+16239395300">(623) 939-5300</a>.`;
    } finally { btn.disabled = false; }
  }

  // Deep links: design.html?s=garage&p=vuba
  const q = new URLSearchParams(location.search);
  if (SURF[q.get('s')]) { st.surface = q.get('s'); st.sqft = SURF[st.surface].size; }
  if (PROD[q.get('p')] && SURF[st.surface].prods.includes(q.get('p'))) st.product = q.get('p');
  update();
})();
