(() => {
  const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
  const track = (e, x) => window.solTrack && window.solTrack(e, x || '');
  const KEY = 'hhs-solar-analysis-v1';
  const PANEL_W = 0.43, PW = 1.13, PH = 1.72; // kW per panel, metres (portrait)
  const RATE_GUESS = 0.15; // $/kWh used only when the visitor gives a dollar amount

  const st = { step: 1, addr: '', label: '', lat: null, lng: null, region: 'other', angle: 0, facing: '', shade: '',
    utility: '', useMode: 'kwh', useVal: '', billName: '', goal: '', battery: '', gen: false, pay: '', kw: null, maxStep: 1 };
  let billFile = null;

  // ---------- storage ----------
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (_) {} };
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (_) { return null; } };

  // ---------- regions & production ----------
  const regionOf = (lat, lng) => {
    if (lat > 31 && lat < 37.1 && lng > -115 && lng < -109) return 'az';
    if (lat > 31.3 && lat < 37.1 && lng >= -109 && lng < -103) return 'nm';
    if (lat > 25.8 && lat < 36.6 && lng >= -106.7 && lng < -93.5) return 'tx';
    if (lat > 32.5 && lat < 35.5 && lng > -121 && lng < -114) return 'socal';
    return 'other';
  };
  const YIELD = { az: 1700, nm: 1650, socal: 1600, tx: 1400, other: 1300 }; // kWh per kW per year, typical
  const RNAME = { az: 'Arizona', nm: 'New Mexico', socal: 'Southern California', tx: 'Texas', other: 'your area' };
  const FACE = { S: 1, W: .86, E: .86, N: .68, flat: .9, unsure: .9, '': .9 };
  const SHADE = { none: 1, some: .86, lots: .68, '': .9 };
  const kwhYear = () => {
    const v = Number(st.useVal) || 0;
    return st.useMode === 'kwh' ? v * 12 : (v / RATE_GUESS) * 12;
  };
  const yieldPerKw = () => YIELD[st.region] * FACE[st.facing] * SHADE[st.shade];

  // ---------- map ----------
  let map, pin, layer, recenter = true;
  const initMap = () => {
    if (map || !window.L) return;
    map = L.map('az-map', { zoomControl: true, attributionControl: false, maxZoom: 21 }).setView([39.5, -98.5], 4);
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { maxNativeZoom: 19, maxZoom: 21 }).addTo(map);
    layer = L.layerGroup().addTo(map);
    map.on('click', e => { if (st.step === 2 && pin) { pin.setLatLng(e.latlng); moved(); } });
  };
  const icon = () => L.divIcon({ className: '', html: '<div class="az-pin"></div>', iconSize: [30, 30], iconAnchor: [15, 30] });
  const placePin = () => {
    initMap(); if (!map) return;
    $('#az-empty').hidden = true;
    if (!pin) {
      pin = L.marker([st.lat, st.lng], { draggable: true, icon: icon(), keyboard: true, title: 'Your roof' }).addTo(map);
      pin.on('drag', moved); pin.on('dragend', () => { moved(); save(); });
    } else pin.setLatLng([st.lat, st.lng]);
    if (recenter) { map.setView([st.lat, st.lng], 20); recenter = false; }
    drawPanels();
  };
  const moved = () => { const p = pin.getLatLng(); st.lat = p.lat; st.lng = p.lng; drawPanels(); };
  const nPanels = () => (!st.kw && st.step < 5) ? 12 : Math.max(1, Math.round((st.kw || defaultKw()) / PANEL_W));
  const drawPanels = () => {
    if (!layer || st.lat == null) return;
    layer.clearLayers();
    if (st.step < 2) return;
    const n = nPanels();
    const cols = Math.max(1, Math.round(Math.sqrt(n * 1.7)));
    const rows = Math.ceil(n / cols);
    const gap = 0.05;
    const W = cols * (PW + gap), H = rows * (PH + gap);
    const a = st.angle * Math.PI / 180, ca = Math.cos(a), sa = Math.sin(a);
    const mLat = 1 / 111320, mLng = 1 / (111320 * Math.cos(st.lat * Math.PI / 180));
    const toLL = (x, y) => { const rx = x * ca - y * sa, ry = x * sa + y * ca; return [st.lat + ry * mLat, st.lng + rx * mLng]; };
    for (let i = 0; i < n; i++) {
      const r = Math.floor(i / cols), c = i % cols;
      const inRow = r === rows - 1 ? n - r * cols : cols;
      const off = (cols - inRow) * (PW + gap) / 2;
      const x0 = -W / 2 + off + c * (PW + gap), y0 = H / 2 - r * (PH + gap);
      const pts = [toLL(x0, y0), toLL(x0 + PW, y0), toLL(x0 + PW, y0 - PH), toLL(x0, y0 - PH)];
      L.polygon(pts, { color: '#7FE3D8', weight: 1, fillColor: '#0E2A4C', fillOpacity: .88, interactive: false }).addTo(layer);
    }
  };

  // ---------- steps ----------
  const show = n => {
    st.step = n; st.maxStep = Math.max(st.maxStep, n);
    $$('.az-step').forEach(s => s.hidden = Number(s.dataset.step) !== n);
    $$('#az-prog li').forEach(li => { const s = Number(li.dataset.s); li.classList.toggle('done', s < n); li.classList.toggle('cur', s === n); });
    $('#az-maptip').hidden = n !== 2;
    $('#az-stats').hidden = n < 5;
    if (n >= 2 && st.lat != null) placePin(); else drawPanels();
    if (n === 5) renderLayout();
    save();
    if (matchMedia('(max-width:900px)').matches && n > 1) document.querySelector('.az-panel').scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  $$('[data-back]').forEach(b => b.addEventListener('click', () => show(Math.max(1, st.step - 1))));

  // chips
  const setChip = (k, v) => { st[k] = v; $$(`[data-k=${k}] button`).forEach(b => b.setAttribute('aria-pressed', b.dataset.v === v)); };
  $$('.az-chips').forEach(fs => fs.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    setChip(fs.dataset.k, b.dataset.v);
    if (['goal', 'battery', 'pay'].includes(fs.dataset.k)) { track('option_selected', fs.dataset.k + '-' + b.dataset.v); eduGoal(); }
    if (fs.dataset.k === 'facing' || fs.dataset.k === 'shade') { st.kw = null; eduRoof(); }
    save();
  }));

  // ---------- step 1: address ----------
  const err = (id, m) => { const e = $(id); e.textContent = m || ''; e.hidden = !m; };
  const pick = r => {
    st.lat = Number(r.lat); st.lng = Number(r.lon); st.label = r.display_name; st.region = regionOf(st.lat, st.lng); recenter = true;
    $('#az-found').textContent = 'Found: ' + r.display_name.split(',').slice(0, 4).join(',');
    $('#az-results').hidden = true;
    show(2); eduRoof();
  };
  $('#az-find').addEventListener('submit', async e => {
    e.preventDefault();
    const q = $('#az-addr').value.trim(); if (q.length < 5) return err('#az-err', 'Enter your street address, city and state.');
    st.addr = q; err('#az-err'); track('address_entered', 'analyzer');
    const btn = $('#az-find-btn'); btn.disabled = true; btn.textContent = 'Finding…';
    try {
      const r = await fetch('https://nominatim.openstreetmap.org/search?format=jsonv2&countrycodes=us&limit=5&q=' + encodeURIComponent(q), { headers: { 'Accept-Language': 'en' } });
      const data = await r.json();
      if (!data.length) err('#az-err', "We couldn't find that address. Check the spelling, or try just the street and ZIP code.");
      else if (data.length === 1) pick(data[0]);
      else {
        const box = $('#az-results'); box.innerHTML = '<p class="muted small">Which one is your home?</p>';
        data.forEach(d => { const b = document.createElement('button'); b.type = 'button'; b.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z"/></svg>'; b.append(d.display_name); b.addEventListener('click', () => pick(d)); box.append(b); });
        box.hidden = false;
      }
    } catch (_) { err('#az-err', "Address search isn't responding right now. Try again in a moment."); }
    btn.disabled = false; btn.textContent = 'Find my home';
  });

  // ---------- step 2: roof ----------
  const ang = $('#az-angle');
  ang.addEventListener('input', () => { st.angle = Number(ang.value); $('#az-ang-v').textContent = st.angle + '°'; drawPanels(); });
  ang.addEventListener('change', save);
  const eduRoof = () => {
    const f = st.facing, s = st.shade;
    let t = '';
    if (f === 'N') t = '<b>North-facing roofs</b><p>They usually produce about a third less, so installers often leave them empty. If it is your only option, the reviewer checks whether the numbers still work.</p>';
    else if (f === 'E' || f === 'W') t = '<b>Why east and west work</b><p>They make roughly 10 to 15% less than south over a year, but west-facing panels produce more in late afternoon, when some rate plans charge the most.</p>';
    else if (f === 'S') t = '<b>Why this roof section</b><p>South-facing sections get the most sun over the year, so they are filled first.</p>';
    else if (f === 'flat') t = '<b>Flat roofs</b><p>Panels go on tilted racks. Production is close to a south-facing roof.</p>';
    if (s === 'lots') t += '<p><b>Heavy shade</b> can cut production by a third or more. The reviewer will check the trees and buildings around you.</p>';
    $('#edu-roof').innerHTML = t;
  };
  $('#az-roof-ok').addEventListener('click', () => {
    if (!st.facing) setChip('facing', 'unsure');
    if (!st.shade) setChip('shade', 'some');
    track('roof_confirmed', st.region); show(3);
  });

  // ---------- step 3: bill ----------
  const UT = {
    'APS': 'APS offers time-of-use and demand plans. On those, power after 4 or 5 pm costs more, so west-facing panels and batteries can matter.',
    'SRP': 'SRP has time-of-use and demand-charge plans for solar customers. A demand charge bills your single busiest hour, which a battery can lower.',
    'TEP': 'TEP credits extra solar you send to the grid at an export rate set by the utility, often lower than what you pay for power.',
    'AEP Texas': 'In the AEP Texas area your bill comes from a retail electricity provider. Your provider and plan decide what you are credited for extra solar.',
    'CenterPoint': 'In the CenterPoint area your retail electricity provider sets the rate and any buyback credit for extra solar.',
    'Oncor': 'In the Oncor area your retail electricity provider sets the rate and any buyback credit for extra solar.',
    'CPS Energy': 'CPS Energy sets its own rates and solar credits as a city-owned utility.',
    'Austin Energy': 'Austin Energy credits solar with its own Value of Solar rate.',
    'Electric co-op (Texas)': 'Co-ops set their own solar rules, so we check yours directly.',
    'Other': 'We will look up your utility\'s solar rules for you.',
  };
  $('#az-util').addEventListener('change', e => {
    st.utility = e.target.value; const t = UT[st.utility];
    const box = $('#edu-util'); box.hidden = !t;
    box.innerHTML = t ? `<b>Here's how your utility charges you</b><p>${t} We confirm the exact plan printed on your bill.</p>` : '';
    save();
  });
  const fileIn = $('#az-file'), drop = $('#az-drop');
  const setFile = f => {
    if (!f) return;
    if (f.size > 15e6) return err('#az-bill-err', 'That file is over 15 MB. Try a photo or a smaller PDF.');
    billFile = f; st.billName = f.name; err('#az-bill-err');
    $('#az-file-name').textContent = 'Attached: ' + f.name; drop.classList.add('has');
    track('bill_uploaded', f.type.includes('pdf') ? 'pdf' : 'image'); save();
  };
  fileIn.addEventListener('change', () => setFile(fileIn.files[0]));
  ['dragenter', 'dragover'].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.add('drag'); }));
  ['dragleave', 'drop'].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.remove('drag'); }));
  drop.addEventListener('drop', e => setFile(e.dataTransfer.files[0]));
  const useIn = $('#az-use');
  const setMode = m => {
    st.useMode = m; $$('.az-seg button').forEach(b => b.setAttribute('aria-pressed', b.dataset.u === m));
    $('#az-use-lbl').textContent = m === 'kwh' ? 'Average kWh per month' : 'Average bill per month ($)';
    useIn.placeholder = m === 'kwh' ? 'e.g. 1,200' : 'e.g. 180';
    $('#az-use-note').textContent = m === 'kwh' ? 'Find it on your bill as "kWh used". If you only know the dollar amount, switch to Monthly bill $.' : `We'll estimate your usage at about $${RATE_GUESS.toFixed(2)} per kWh until we read your bill.`;
  };
  $$('.az-seg button').forEach(b => b.addEventListener('click', () => { setMode(b.dataset.u); save(); }));
  useIn.addEventListener('input', () => { st.useVal = useIn.value; st.kw = null; save(); });
  $('#az-bill-ok').addEventListener('click', () => {
    const v = Number(st.useVal);
    const ok = st.useMode === 'kwh' ? v >= 100 && v <= 20000 : v >= 20 && v <= 3000;
    if (!ok) return err('#az-bill-err', st.useMode === 'kwh' ? 'Enter your average monthly kWh (usually between 300 and 3,000).' : 'Enter your average monthly bill in dollars.');
    err('#az-bill-err'); if (!billFile) track('bill_uploaded', 'manual');
    if (!st.utility) { st.utility = 'Other'; }
    show(4);
  });

  // ---------- step 4: goals ----------
  const gen = $('#az-gen');
  gen.addEventListener('change', () => { st.gen = gen.checked; if (gen.checked) track('option_selected', 'generator'); eduGoal(); save(); });
  const eduGoal = () => {
    const p = [];
    if (st.battery === 'yes' || st.battery === 'maybe' || st.goal === 'backup' || st.goal === 'both') p.push('<b>What storage changes</b><p>A battery stores midday solar for the evening and runs chosen circuits in an outage. Large loads like central AC or a well pump need review before they can be backed up. <a href="solar-battery.html#backup">Essential vs whole-home</a></p>');
    if (st.gen) p.push('<b>What extended backup requires</b><p>A gas or propane line, a transfer switch, and yearly service. The generator recharges the battery when clouds or storms last for days.</p>');
    if (st.pay === 'ppa') p.push('<b>About PPAs</b><p>You pay for the electricity the system generates at a contract rate. Check the yearly escalator and what happens if you sell. <a href="financing.html#ppas">PPA details</a></p>');
    if (st.pay === 'loan') p.push('<b>About loans</b><p>Compare the financed price, the payment and the total you repay, not just the monthly number. <a href="financing.html#loans">Loan details</a></p>');
    if (st.pay === 'lease') p.push('<b>About leases</b><p>A company owns the system and you pay monthly. Check the escalator and the end-of-term options. <a href="financing.html#leases">Lease details</a></p>');
    const box = $('#edu-goal'); box.innerHTML = p.join(''); box.hidden = !p.length;
  };
  $('#az-goal-ok').addEventListener('click', () => {
    if (!st.goal) setChip('goal', 'save');
    if (!st.battery) setChip('battery', st.goal === 'save' ? 'no' : 'maybe');
    if (!st.pay) setChip('pay', 'unsure');
    if (!st.kw) st.kw = defaultKw();
    show(5); track('analysis_completed', st.region);
  });

  // ---------- step 5: layout ----------
  const defaultKw = () => {
    const need = kwhYear() / yieldPerKw();
    const n = Math.min(60, Math.max(4, Math.round(need / PANEL_W)));
    return +(n * PANEL_W).toFixed(2);
  };
  const kwIn = $('#az-kw');
  const fmt = n => Math.round(n).toLocaleString('en-US');
  const renderLayout = () => {
    if (!st.kw) st.kw = defaultKw();
    kwIn.value = st.kw;
    const n = nPanels(), kw = n * PANEL_W, prod = kw * yieldPerKw(), use = kwhYear(), cov = use ? prod / use : 0;
    $('#az-kw-v').textContent = kw.toFixed(1) + ' kW';
    $('#o-panels').textContent = n; $('#o-prod').textContent = fmt(prod) + ' kWh';
    $('#o-use').textContent = fmt(use) + ' kWh'; $('#o-area').textContent = fmt(n * PW * PH * 10.764) + ' sq ft';
    $('#o-cov').textContent = Math.round(cov * 100) + '%';
    $('#o-covbar').style.width = Math.min(100, cov / 1.3 * 100) + '%';
    $('#o-cov-note').textContent = cov > 1.05 ? '(more than you use; check your export credits first)' : cov < .5 ? '(a smaller system; fine if roof space or budget is tight)' : '';
    $('#st-panels').textContent = n; $('#st-kw').textContent = kw.toFixed(1); $('#st-cov').textContent = Math.round(cov * 100) + '%';
    $('#az-sum').textContent = `${st.label ? st.label.split(',').slice(0, 2).join(',') + ' · ' : ''}${{ S: 'south', W: 'west', E: 'east', N: 'north', flat: 'flat', unsure: 'unconfirmed' }[st.facing] || ''} roof · ${st.utility}`;
    $('#edu-layout').innerHTML = `<b>Why this size</b><p>We started from the size that covers about your yearly use, then rounded to whole panels. Drag the slider: panels on the map, production and coverage update together.${st.battery === 'yes' || st.battery === 'maybe' ? ' Battery size is set at review, based on the circuits you want backed up.' : ''}</p>`;
    $('#o-assume').innerHTML = [
      `Panels: ${PANEL_W * 1000} W each, about ${PW} × ${PH} m`,
      `Typical production for ${RNAME[st.region]}: ${fmt(YIELD[st.region])} kWh per kW per year before roof adjustments`,
      `Roof adjustment: ${Math.round(FACE[st.facing] * 100)}% for direction, ${Math.round(SHADE[st.shade] * 100)}% for shade (your answers)`,
      st.useMode === 'usd' ? `Usage estimated from your bill amount at $${RATE_GUESS.toFixed(2)}/kWh until we read the bill` : 'Usage from the monthly kWh you entered × 12',
      'Panel placement is a visual guide. Setbacks, vents and roof edges are checked at review.',
      'First-year figures; panels typically lose about 0.5% of output per year.',
    ].map(t => `<li>${t}</li>`).join('');
    drawPanels();
  };
  kwIn.addEventListener('input', () => { st.kw = Number(kwIn.value); renderLayout(); });
  kwIn.addEventListener('change', () => { save(); track('option_selected', 'size'); });
  $('#az-layout-ok').addEventListener('click', () => show(6));

  // ---------- step 6: submit ----------
  const shrink = f => new Promise(res => {
    if (!f || !f.type.startsWith('image/') || f.size < 1.5e6) return res(f);
    const img = new Image(); img.onload = () => {
      const s = Math.min(1, 2000 / Math.max(img.width, img.height)), c = document.createElement('canvas');
      c.width = img.width * s; c.height = img.height * s; c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
      c.toBlob(b => res(b ? new File([b], f.name.replace(/\.\w+$/, '') + '.jpg', { type: 'image/jpeg' }) : f), 'image/jpeg', .85);
    }; img.onerror = () => res(f); img.src = URL.createObjectURL(f);
  });
  const form = $('#az-form');
  let fstart = false;
  form.addEventListener('input', () => { if (!fstart) { fstart = true; track('form_start', 'proposal'); } });
  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const btn = $('#az-send'); btn.disabled = true; btn.textContent = 'Sending…'; err('#az-send-err');
    const n = nPanels(), kw = n * PANEL_W, prod = kw * yieldPerKw(), use = kwhYear();
    const fd = new FormData(form);
    const add = { 'form-name': 'solar-analysis', address: st.label || st.addr, lat: st.lat?.toFixed(6), lng: st.lng?.toFixed(6), roof_facing: st.facing, shade: st.shade, utility: st.utility,
      monthly_kwh: st.useMode === 'kwh' ? st.useVal : '', monthly_bill: st.useMode === 'usd' ? st.useVal : '', goal: st.goal, battery: st.battery, generator: st.gen ? 'yes' : 'no', payment: st.pay,
      system_kw: kw.toFixed(2), panels: n, est_kwh_year: Math.round(prod), coverage: use ? Math.round(prod / use * 100) + '%' : '', layout_angle: st.angle };
    Object.entries(add).forEach(([k, v]) => fd.set(k, v ?? ''));
    if (billFile) fd.set('bill', await shrink(billFile));
    try {
      const r = await fetch('forms.html', { method: 'POST', body: fd });
      if (!r.ok) throw new Error(r.status);
      track('form_submit', 'proposal'); track('proposal_requested', st.region);
      form.hidden = true; $('#az-done').hidden = false; st.sent = true; save();
    } catch (_) {
      err('#az-send-err', "That didn't go through. Check your connection and try again; your answers are saved.");
      btn.disabled = false; btn.textContent = 'Request my proposal';
    }
  });

  // ---------- restore ----------
  const apply = s => {
    Object.assign(st, s);
    ['facing', 'shade', 'goal', 'battery', 'pay'].forEach(k => st[k] && setChip(k, st[k]));
    ang.value = st.angle; $('#az-ang-v').textContent = st.angle + '°';
    $('#az-addr').value = st.addr || '';
    if (st.utility) { $('#az-util').value = st.utility; $('#az-util').dispatchEvent(new Event('change')); }
    setMode(st.useMode || 'kwh'); useIn.value = st.useVal || '';
    gen.checked = !!st.gen;
    if (st.billName) $('#az-file-name').textContent = 'Earlier upload: ' + st.billName + ' (attach again to send it)';
    if (st.label) $('#az-found').textContent = 'Found: ' + st.label.split(',').slice(0, 4).join(',');
    eduRoof(); eduGoal();
    show(Math.min(st.step || 1, 5));
  };
  const boot = () => {
    initMap();
    const q = new URLSearchParams(location.search);
    const goal = q.get('goal'); if (goal) setChip('goal', goal);
    if (q.get('gen')) { st.gen = true; gen.checked = true; }
    const saved = load();
    const addr = q.get('addr');
    if (addr) { $('#az-addr').value = addr; show(1); $('#az-find').requestSubmit(); return; }
    if (saved && saved.lat != null && !saved.sent) {
      $('#az-resume').hidden = false;
      $('#az-resume-yes').onclick = () => { $('#az-resume').hidden = true; apply(saved); };
      $('#az-resume-no').onclick = () => { $('#az-resume').hidden = true; try { localStorage.removeItem(KEY); } catch (_) {} show(1); };
    }
    show(1);
    if (location.hash === '#bill') $('#az-addr').focus();
  };
  if (window.L) boot(); else addEventListener('load', boot);
})();
