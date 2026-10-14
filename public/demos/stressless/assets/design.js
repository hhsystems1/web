'use strict';
// StressLess "Design your surface" builder. Prices, blends and warranties come from
// stresslessremodels.com (Vuba Stone and Rubber Stone pages); nothing here is invented.
(() => {
  const $ = id => document.getElementById(id);
  const IMG = window.DZ_IMG || {};
  const fmt = n => '$' + Math.round(n).toLocaleString('en-US');
  const track = (e, x) => window.slTrack && window.slTrack(e, x);

  const SURF = {
    pool: { name: 'Pool deck', photo: 'rsdeck', cap: 'A StressLess pool deck', size: 600, prods: ['rubber', 'vuba', 'sierra'] },
    patio: { name: 'Patio', photo: 'vubadeck', cap: 'A StressLess patio', size: 400, prods: ['rubber', 'vuba', 'sierra'] },
    drive: { name: 'Driveway / walkway', photo: 'drive', cap: 'A StressLess driveway', size: 600, prods: ['rubber', 'vuba', 'sierra'] },
    garage: { name: 'Garage floor', photo: 'garage2', cap: 'A StressLess garage floor', size: 450, prods: ['vuba', 'rubber', 'sierra', 'epoxy'] },
  };
  const PROD = {
    rubber: { name: 'Rubber Stone', img: 'edge', why: 'Cooler underfoot, cushioned and slip-resistant. Flexes with your concrete instead of cracking.',
      blends: [['Brown / Cream / White', ['#7a5134', '#e9dcc0', '#fbfaf6']], ['Light Grey / Standard Grey / White', ['#c8cbcb', '#8d9192', '#fbfaf6']], ['Grey / Cream / White', ['#8d9192', '#e9dcc0', '#fbfaf6']]],
      bnote: 'Our three most popular Rubber Stone blends. We bring real samples to your consultation.' },
    vuba: { name: 'VUBA Stone', img: 'vubahero', why: 'Natural stone in clear, UV-stable resin. 100% permeable, so water drains through.',
      blends: [['Ipanema Beach'], ['Poseidon'], ['Manhattan']],
      bnote: 'Our three most popular VUBA Stone blends. See them in person: we bring samples to your consultation.' },
    sierra: { name: 'Sierra Stone', img: 'sierrahero', why: 'Natural stone aggregates in industrial-grade epoxy. Indoors and out; resists stains and chemicals.',
      blends: [['Blend 1'], ['Blend 2']], bnote: 'Sierra Stone comes in two color blends. We help you choose in person.' },
    epoxy: { name: 'Epoxy', img: null, why: 'A smooth, glossy garage finish with strong adhesion to concrete.', blends: [['Pick at consultation']], bnote: 'Colors chosen with your consultant.' },
  };
  // $/sq ft ranges published on stresslessremodels.com; anything not listed is priced at the consultation
  const RATE = { 'pool:rubber': [13, 16], 'patio:rubber': [13, 16], 'pool:vuba': [11, 13], 'patio:vuba': [11, 13], 'garage:vuba': [8, 10], 'garage:epoxy': [4, 7] };
  const warranty = (s, p) => p === 'vuba' && s === 'garage' ? 'Lifetime warranty on VUBA Stone garage floors'
    : p === 'rubber' || p === 'vuba' ? '6-year warranty, materials & installation'
    : 'Warranty terms reviewed at your consultation';

  const st = { surface: 'pool', product: 'rubber', blend: 0, sqft: 600, adds: [] };
  let started = false;
  const start = () => { if (!started) { started = true; track('design_start'); } };

  const swatch = cols => !cols ? '' : `<i class="sw" style="background:radial-gradient(circle at 20% 30%,${cols[0]} 0 18%,transparent 19%),radial-gradient(circle at 70% 25%,${cols[1]} 0 16%,transparent 17%),radial-gradient(circle at 45% 70%,${cols[2]} 0 20%,transparent 21%),radial-gradient(circle at 80% 75%,${cols[0]} 0 12%,transparent 13%),radial-gradient(circle at 15% 80%,${cols[1]} 0 13%,transparent 14%),${cols[2]}"></i>`;

  const renderOpts = () => {
    const sv = SURF[st.surface];
    if (!sv.prods.includes(st.product)) st.product = sv.prods[0];
    document.querySelector('[data-k=product]').innerHTML = sv.prods.map(p => `<button type="button" data-v="${p}" aria-pressed="${p === st.product}">${PROD[p].name}${RATE[st.surface + ':' + p] ? `<small>$${RATE[st.surface + ':' + p].join('–$')}/sq ft</small>` : '<small>Priced in person</small>'}</button>`).join('');
    const pd = PROD[st.product];
    if (st.blend >= pd.blends.length) st.blend = 0;
    document.querySelector('[data-k=blend]').innerHTML = pd.blends.map(([n, c], i) => `<button type="button" data-v="${i}" aria-pressed="${i === st.blend}">${swatch(c)}<span>${n}</span></button>`).join('');
    $('dz-bnote').textContent = pd.bnote;
    $('dz-why').textContent = pd.why;
    document.querySelectorAll('[data-k=surface] button').forEach(b => b.setAttribute('aria-pressed', b.dataset.v === st.surface));
    document.querySelector('.pool-only').hidden = st.surface !== 'pool';
  };

  const price = (s, p, sq) => { const r = RATE[s + ':' + p]; return r ? [r[0] * sq, r[1] * sq] : null; };

  const render = () => {
    const sv = SURF[st.surface], pd = PROD[st.product], blend = pd.blends[st.blend][0];
    const img = $('dz-img');
    if (img.dataset.k !== sv.photo) { img.classList.add('swap'); img.onload = () => img.classList.remove('swap'); img.src = IMG[sv.photo]; img.dataset.k = sv.photo; img.alt = sv.cap; }
    $('dz-cap').textContent = sv.cap;
    $('dz-coat-name').textContent = pd.name; $('dz-blend-name').textContent = blend;
    const ci = $('dz-coat-img'); if (pd.img) { ci.hidden = false; if (ci.src !== IMG[pd.img]) ci.src = IMG[pd.img]; } else ci.hidden = true;
    $('dz-sqft').textContent = st.sqft.toLocaleString('en-US'); $('dz-range').value = st.sqft;
    const pr = price(st.surface, st.product, st.sqft), r = RATE[st.surface + ':' + st.product];
    $('dz-price').textContent = pr ? `${fmt(pr[0])} – ${fmt(pr[1])}` : 'Priced at your free consultation';
    $('dz-rate').textContent = pr ? `$${r[0]}–$${r[1]} / sq ft × ${st.sqft.toLocaleString('en-US')} sq ft` : `StressLess doesn't publish a typical ${pd.name} price for this space`;
    $('dz-mo').textContent = pr ? `≈ ${fmt((pr[0] + pr[1]) / 2 / 24)}/mo · 24 months same as cash` : '24 months same as cash available';
    $('dz-warr').textContent = warranty(st.surface, st.product);
    $('dz-bar-price').textContent = pr ? `${fmt(pr[0])} – ${fmt(pr[1])}` : 'Priced in person';
    // One-click upgrade, from the published comparisons
    let up = null;
    if ((st.surface === 'pool' || st.surface === 'patio') && st.product === 'vuba') up = { to: 'rubber', t: 'Upgrade to Rubber Stone', d: 'Cooler underfoot and cushioned for bare feet' };
    if (st.surface === 'garage' && st.product === 'epoxy') up = { to: 'vuba', t: 'Upgrade to VUBA Stone', d: 'Lifetime warranty on garage floors, resists UV yellowing' };
    if (up) {
      const a = price(st.surface, st.product, st.sqft), b2 = price(st.surface, up.to, st.sqft);
      const add = a && b2 ? ` · about +${fmt(Math.round(((b2[0] + b2[1]) - (a[0] + a[1])) / 2 / 25) * 25)}` : '';
      $('dz-up-t').textContent = up.t; $('dz-up-d').textContent = up.d + add; $('dz-up-b').dataset.to = up.to; $('dz-up').hidden = false;
    } else $('dz-up').hidden = true;
  };

  const summary = () => {
    const sv = SURF[st.surface], pd = PROD[st.product], pr = price(st.surface, st.product, st.sqft);
    return `${sv.name} · ${pd.name} · ${pd.blends[st.blend][0]} · about ${st.sqft} sq ft` + (st.adds.length ? ` · plus ${st.adds.join(', ')}` : '') + (pr ? ` · typical ${fmt(pr[0])}–${fmt(pr[1])}` : '');
  };

  document.querySelector('.dz-ctrl').addEventListener('click', e => {
    const b = e.target.closest('.dz-opts button'); if (!b) return;
    start();
    const k = b.parentElement.dataset.k;
    if (k === 'surface') { st.surface = b.dataset.v; st.sqft = SURF[st.surface].size; st.blend = 0; }
    if (k === 'product') { st.product = b.dataset.v; st.blend = 0; }
    if (k === 'blend') st.blend = +b.dataset.v;
    renderOpts(); render();
  });
  $('dz-range').addEventListener('input', e => { start(); st.sqft = +e.target.value; render(); });
  document.querySelectorAll('[data-sq]').forEach(b => b.addEventListener('click', () => { start(); st.sqft = +b.dataset.sq; render(); }));
  document.querySelectorAll('.dz-adds input').forEach(c => c.addEventListener('change', () => { start(); st.adds = [...document.querySelectorAll('.dz-adds input:checked')].filter(i => !i.closest('[hidden]')).map(i => i.value); }));
  $('dz-up-b').addEventListener('click', e => { track('design_upgrade', e.target.dataset.to); st.product = e.target.dataset.to; st.blend = 0; renderOpts(); render(); });

  const openForm = () => { start(); $('dz-sum').textContent = summary(); $('dz-form').hidden = false; $('dz-go').hidden = true; track('design_quote', st.surface + '-' + st.product); $('dz-form').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' }); setTimeout(() => $('dz-form').first.focus({ preventScroll: true }), 350); };
  $('dz-go').addEventListener('click', openForm);
  $('dz-bar-go').addEventListener('click', e => { e.preventDefault(); if ($('dz-form').hidden && $('dz-done').hidden) openForm(); else ($('dz-done').hidden ? $('dz-form') : $('dz-done')).scrollIntoView({ block: 'center' }); });

  $('dz-form').addEventListener('submit', async e => {
    e.preventDefault();
    const f = e.target, msg = f.querySelector('.mf-msg'), btn = f.querySelector('[type=submit]');
    const bad = [...f.querySelectorAll('[required]')].filter(i => !i.value.trim() || (i.type === 'email' && !/^\S+@\S+\.\S+$/.test(i.value)) || (i.type === 'tel' && i.value.replace(/\D/g, '').length < 10) || (i.name === 'zip' && !/^\d{5}$/.test(i.value.trim())));
    f.querySelectorAll('[aria-invalid]').forEach(i => i.removeAttribute('aria-invalid'));
    if (bad.length) { bad.forEach(i => i.setAttribute('aria-invalid', 'true')); bad[0].focus(); msg.className = 'mf-msg err'; msg.textContent = 'Please fill in the highlighted fields.'; return; }
    if (f.elements['bot-field'].value) return;
    btn.disabled = true; msg.className = 'mf-msg'; msg.textContent = 'Sending…';
    try {
      await window.slSend({ source: 'design builder', project: SURF[st.surface].name, zip: f.zip.value.trim(), first: f.first.value.trim(), phone: f.phone.value.trim(), email: f.email.value.trim(), message: 'Design: ' + summary(), sms_consent: f.sms_consent.checked ? 'yes' : 'no' });
      track('lead_design', st.surface + '-' + st.product);
      f.hidden = true; $('dz-done').hidden = false; $('dz-done').focus();
    } catch (err) {
      msg.className = 'mf-msg err'; msg.innerHTML = `Sorry, that didn't go through. Please call <a href="tel:+16239395300">(623) 939-5300</a>.`;
    } finally { btn.disabled = false; }
  });

  // Deep links: design.html?s=garage&p=vuba
  const q = new URLSearchParams(location.search);
  if (SURF[q.get('s')]) { st.surface = q.get('s'); st.sqft = SURF[st.surface].size; }
  if (PROD[q.get('p')]) st.product = q.get('p');
  $('dz-img').dataset.k = 'rsdeck';
  renderOpts(); render();
})();
