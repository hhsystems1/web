'use strict';
(() => {
  const IMGS = {"logo": "stressless_remodeling_logo_1_wd2x4uk84fmmhsz9lgu77q-1920x742.png", "pool": "pool_deck_2__large__7tmkjr5do6tgbb8ywciv49-1440x1080.jpg", "deck": "img_0167_tnis5wda2eri480uvgsiht-1920x1440.jpg", "drive": "driveways_img_3250_nggpjdnln7ts3gcb3r5uks-1920x1440.jpg", "drivehero": "driveways_hero__1__im9s9i9fqmkpkzkdjglo4i-1632x1224.jpg", "drive2": "driveways_img_1096_tmdploq8ekgcpvry0zepi8-1920x1440.jpg", "garage": "steps_garage_after_1920x1280_7pwdulsakyy0bm19oy2a31i-1920x1280.jpg", "garage2": "stressless_remodeling_garage_flooring_5b0pteaw0qnumo4573sq-1920x1440.jpg", "kitchen": "new_kitchen_8lyvkhfgkoos63t0776onn-1920x1297.jpg", "kitchen36": "trend_group_36_rm5gyf1lbaftn613qurw1j-1920x1280.jpg", "kitchen33": "trend_group_33__1__497mvividib7y97s4fjacv-1920x1280.jpg", "island": "stressless_remodeling_kitchen_island_76n363z3m67oobxyfjj6n-1920x1280.jpg", "island2": "stressless_remodeling_island_phoenix_zndg54d5yiaivy9b00a21o-1920x1280.jpg", "counters": "trend_group_72__1__o989en69pehsc4ucg3qpa-1920x1280.jpg", "cab": "projects_after1__1__h9fbmfgcfataxf0pgyyfm-1920x2560.jpg", "cab2": "cabinet_refacing_x2lbwfspfwnaj18oblc3ym-1600x1200.jpg", "cabhero": "cabinets_hero_76qkd3h2pqh6ztrqgs403m-1920x1280.jpg", "bath": "trend_group_151__1__f0efl2ibu35cp0v5cd6rfa-1920x1280.jpg", "guestbath": "guest_bathroom_counters_hero__large__1vv67t1qh7e2yhli1rs0yt-1620x1080.jpg", "tub": "bathtub_f91177d0_687ghjlqzh995ucr603o1r-1349x982.jpg", "edge": "a2_rubber_stone_edge_1_cropped_xa4dwyxancav48t7pg8uxg-1920x1140.jpg", "sierra": "a2_sierra_stone_invermere_stone_5_cropped2_1_nrd58u84co8o61wml81dhb-1920x1053.jpg", "rs": "img_0268__1__rc6wgqac3taojvw6k6f0m-1920x1440.jpg", "vuba": "_mg_0843__1__kk2ur54k6tgn61v1vsn1xd-1920x1280.jpg", "vubahero": "vuba_stone_tdwcwl85qjalgmfv2gtzy8-1920x1440.webp", "sierrahero": "sierra_stone_0etnrrfz23pmeshj4dm518b-1920x1440.webp", "rsdeck": "untitled_design_26_gg5zezs5h6lrq4jc2j3e9-1920x1440.jpg", "vubadeck": "untitled_design_25_d9jj2j1d2wu3p8opcvxf-1920x1440.jpg", "sierradeck": "untitled_design_32_zzwu7gm6t1r6nhu9ml9f8i-1920x1440.jpg", "patio": "patio_6rgupyoo2t3vmordsz4gt-1920x1280.jpg", "patio2": "patio_2__large__y6kmphdn67ffulvjcnm9g-1440x1080.jpg", "entry": "entryway_hero__large__ewbe9lucugulmwfesjpjjg-1440x1080.jpg", "carlsbad": "carlsbad_pool_deck_resurfacing_tr1tpzpygnetxc7lkn0z-1600x1200.jpg", "palm": "carlsbad_pool_deck_resurfacing_zipcyzx35thezrpoalxhq6-1600x1200.jpg", "comm": "main_comm_hero___pro_selector_5hm9ly3ewupp1qyjgv2gfs-1440x1080.jpg", "commbiz": "comm_business_hero_tv0k5i57dnof9d3n5l7t1r-1080x768.jpg", "apt": "comm_apt_hero_qiu6ponwgq7qfsmd4ei4oc-1800x1200.jpg", "school": "comm_schools_hero__1___large__txq29h3qyclcy8rp03tsci-1620x1080.jpg", "about": "about_stressless_remodeling_hero_88xkjrbdoj7qyndnhmo4d-1920x1301.jpg", "derek": "screenshot_2025_08_13_151733_m81zk7wf5zhijv64sxx1n-532x413.png", "office": "stressless_remodeling_office_arizona_bd4h30zts4krghnm1aie3-1920x1042.jpg", "derekw": "derek_wood_owner_wzrsl1kr1eos0hfxmaqg4-1920x2369.jpg", "henry": "henry_jaffe_uihgf1jkm28unqu990wco-200x200.jpg", "mario": "marioesquer_mkw27f8xllckugmh3tionq-1200x1500.jpg", "handshake": "stressless_remodeling_referrals_nt9flpt1lza6qov1nrbkq6-1536x1024.jpg", "awards": "stressless_remodeling_awards_won_vuuk5f4hurxwnayab4hem-1448x1086.png", "stairs": "stairs_hero__large__9qkwiaz5ytw8oc43y53wc2-1440x1080.jpg", "courtyard": "courtyard_hero__large__kouzn0qzomkdycp52olue7-1440x1080.jpg", "outkitchen": "outdoor_rubberstone_r2mnievxwulrmcsyka6gq-1536x1024.png", "porch": "front_porch_hero__large__wdi5qjlp4f9zzcbw2a5tih-1440x1080.jpg", "walkway": "walkways_2__large__zuzm6glvtdrgu6zq4xpq2n-1440x1080.jpg", "interior": "driveways_2_decfq3bx7bwo01fin7r3-1920x1440.jpg", "horse": "stressless_remodeling_horse_barn_rubberstone_4z8a1ork41jdyy8mwa29yi-1536x1024.png", "playground": "playground_hero__1__hvw54gazjls0r5eetlx11-1920x1440.jpg", "tiles": "bathroom_tiles_hero__large__3wb67ioukzqbdsylev1ni-1620x1080.jpg", "statuario": "statuario_shower_2_fzvjysl8wk61jl228quzfg-1920x2560.jpg", "bath124": "trend_group_124_1920x1280_w2cqg8fxskc1fkcj6gjmlk-1920x1280.jpg", "bath152": "trend_group_152_1920x2880_qq675ujx2lm0y3flwyk910j-1920x2880.jpg", "breakfast": "breakfast_bar_hero__large__j0s373cja6cumfenxvs7pd-1620x1080.jpg", "kgal1": "kitchen_gallery_1__large__6ydsas17b6c6ph3uz430bc-1620x1080.jpg", "commwalk": "comm_walkways_hero_o9rmyv0to1y0eoelmjjbg-1920x1440.jpg"};
  const PHONE_TXT = '(623) 939-5300', TEL = '+16239395300', CTA = 'Get my free estimate';
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Their own photos, served from their site's image service (swap for local copies at launch)
  const IMG = (f, w) => `https://www.stresslessremodels.com/_next/image?url=%2Fcdn--media%2F${f}&w=${w}&q=75`;
  document.querySelectorAll('img[data-img]').forEach(i => { const f = IMGS[i.dataset.img]; if (f) i.src = IMG(f, i.dataset.w || 1920); });

  // Lead delivery: Netlify Forms (form definition lives in forms.html)
  const send = async data => {
    const body = new URLSearchParams({ 'form-name': 'stressless-lead', page: location.pathname, ...data });
    const r = await fetch('forms.html', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString() });
    if (!r.ok) throw new Error('send failed: ' + r.status);
    return r;
  };

  // Desktop dropdowns (hover works too; click/keyboard handled here)
  const closeAll = except => document.querySelectorAll('.dd.open').forEach(d => { if (d !== except) { d.classList.remove('open'); d.firstElementChild.setAttribute('aria-expanded', 'false'); } });
  document.querySelectorAll('.dd > button').forEach(b => b.addEventListener('click', () => {
    const dd = b.parentElement, open = !dd.classList.contains('open'); closeAll(dd);
    dd.classList.toggle('open', open); b.setAttribute('aria-expanded', open);
  }));
  document.addEventListener('click', e => { if (!e.target.closest('.dd')) closeAll(); });
  addEventListener('keydown', e => { if (e.key === 'Escape') closeAll(); });

  // Mobile menu
  const burger = document.querySelector('.burger'), mnav = document.getElementById('mnav');
  if (burger) burger.addEventListener('click', () => {
    const open = mnav.hidden; mnav.hidden = !open;
    burger.setAttribute('aria-expanded', open); burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); document.body.classList.toggle('menu-open', open);
  });

  // Hero reel (home only): autoplay where allowed; if the phone blocks it, start on first touch
  const reel = document.getElementById('reel'), rb = document.getElementById('reel-btn');
  if (reel && rb) {
    let userPaused = false;
    const ui = () => { const p = reel.paused; rb.textContent = p ? '▶ Play' : '❚❚'; rb.classList.toggle('play', p); rb.setAttribute('aria-label', p ? 'Play background video' : 'Pause background video'); };
    const tryPlay = () => { reel.muted = true; const pr = reel.play(); if (pr && pr.then) pr.then(ui, ui); else ui(); };
    reel.addEventListener('play', ui); reel.addEventListener('pause', ui);
    tryPlay(); reel.addEventListener('canplay', () => { if (reel.paused && !userPaused) tryPlay(); }, { once: true });
    const kick = () => { if (reel.paused && !userPaused) tryPlay(); };
    ['touchstart', 'pointerdown', 'keydown'].forEach(ev => addEventListener(ev, kick, { once: true, passive: true }));
    rb.onclick = e => { e.stopPropagation(); if (reel.paused) { userPaused = false; tryPlay(); } else { userPaused = true; reel.pause(); } };
  }

  // Simple one-step forms: contact, referral, careers
  document.querySelectorAll('form.mini-form').forEach(f => {
    const msg = f.querySelector('.mf-msg'), btn = f.querySelector('[type=submit]');
    f.addEventListener('submit', async e => {
      e.preventDefault();
      const bad = [...f.querySelectorAll('[required]')].filter(i => !i.value.trim() || (i.type === 'email' && !/^\S+@\S+\.\S+$/.test(i.value)) || (i.type === 'tel' && i.value.replace(/\D/g, '').length < 10));
      f.querySelectorAll('[aria-invalid]').forEach(i => i.removeAttribute('aria-invalid'));
      if (bad.length) { bad.forEach(i => i.setAttribute('aria-invalid', 'true')); bad[0].focus(); msg.className = 'mf-msg err'; msg.textContent = 'Please fill in the highlighted fields (phone needs 10 digits).'; return; }
      if (f.elements['bot-field'] && f.elements['bot-field'].value) return;
      const data = { source: f.dataset.kind };
      new FormData(f).forEach((v, k) => { if (k !== 'bot-field') data[k] = v; });
      btn.disabled = true; msg.className = 'mf-msg'; msg.textContent = 'Sending…';
      try {
        await send(data);
        const done = { referral: "Thanks! We'll reach out to your referral and keep you posted on your $500.", careers: "Thanks for introducing yourself. We'll be in touch.", contact: "Thanks! A member of our team will get back to you within 24 hours." };
        f.reset(); msg.className = 'mf-msg ok'; msg.textContent = done[f.dataset.kind] || 'Thanks! We got it.';
      } catch (err) {
        msg.className = 'mf-msg err'; msg.innerHTML = `Sorry, that didn't go through. Please call <a href="tel:${TEL}">${PHONE_TXT}</a>.`;
      } finally { btn.disabled = false; }
    });
  });

  // Gallery filters
  document.querySelectorAll('.tabs').forEach(group => {
    const btns = group.querySelectorAll('button'), gal = group.closest('.wrap').querySelector('.gal');
    btns.forEach(b => b.addEventListener('click', () => {
      btns.forEach(t => t.setAttribute('aria-pressed', t === b));
      gal.querySelectorAll('figure').forEach(f => { f.hidden = b.dataset.f !== 'all' && f.dataset.c !== b.dataset.f; });
    }));
  });

  // Gallery lightbox (any .gal on any page)
  if (document.querySelector('.gal .gal-open')) {
    const lb = document.createElement('dialog');
    lb.className = 'pv'; lb.setAttribute('aria-label', 'Project photo');
    lb.innerHTML = '<div class="pv-stage"><img alt=""><button type="button" class="pv-x" aria-label="Close">\u2715</button><button type="button" class="pv-nav pv-prev" aria-label="Previous photo">\u2039</button><button type="button" class="pv-nav pv-next" aria-label="Next photo">\u203a</button></div><div class="pv-bar"><div class="pv-meta"><p class="pv-cap"></p><span class="pv-n"></span></div><a class="btn btn-o pv-cta" href="book.html">Get a quote like this</a></div>';
    document.body.appendChild(lb);
    const li = lb.querySelector('img'), cap = lb.querySelector('.pv-cap'), num = lb.querySelector('.pv-n');
    let list = [], i = 0, opener = null;
    const show = n => {
      i = (n + list.length) % list.length;
      const f = list[i], im = f.querySelector('img');
      li.classList.remove('in');
      li.src = (im.currentSrc || im.src).replace(/([?&]w=)\d+/, '$11920');
      li.alt = im.alt; cap.textContent = f.querySelector('figcaption').textContent;
      num.textContent = (i + 1) + ' of ' + list.length;
      lb.classList.toggle('one', list.length < 2);
      const nx = list[(i + 1) % list.length].querySelector('img'); new Image().src = nx.src.replace(/([?&]w=)\d+/, '$11920');
    };
    li.addEventListener('load', () => li.classList.add('in'));
    document.querySelectorAll('.gal').forEach(g => g.addEventListener('click', e => {
      const b = e.target.closest('.gal-open'); if (!b) return;
      list = [...g.querySelectorAll('figure')].filter(f => !f.hidden);
      opener = b; show(list.indexOf(b.closest('figure')));
      lb.showModal(); document.documentElement.classList.add('pv-on');
    }));
    lb.querySelector('.pv-prev').onclick = () => show(i - 1);
    lb.querySelector('.pv-next').onclick = () => show(i + 1);
    lb.querySelector('.pv-x').onclick = () => lb.close();
    lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('pv-stage')) lb.close(); });
    lb.addEventListener('close', () => { document.documentElement.classList.remove('pv-on'); if (opener) opener.focus({ preventScroll: true }); });
    lb.addEventListener('keydown', e => { if (e.key === 'ArrowRight') show(i + 1); if (e.key === 'ArrowLeft') show(i - 1); });
    let sx = null, sy = 0;
    lb.addEventListener('touchstart', e => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
    lb.addEventListener('touchend', e => {
      if (sx === null) return; const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy; sx = null;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) show(i + (dx < 0 ? 1 : -1));
      else if (dy > 90 && Math.abs(dy) > Math.abs(dx)) lb.close();
    }, { passive: true });
  }

  // Two-step estimate forms (any page)
  document.querySelectorAll('form.est-form').forEach(f => {
    const q = s => f.querySelector(s), card = f.closest('.est');
    const s1 = q('.s1'), s2 = q('.s2'), s3 = q('.s3'), e1 = q('.e1'), e2 = q('.e2'), submit = q('[type=submit]');
    const err2 = e2.innerHTML;
    q('.next').addEventListener('click', () => {
      const pick = f.querySelector('[name=project]:checked'), zip = f.zip.value.trim();
      if (!pick || !/^\d{5}$/.test(zip)) { e1.hidden = false; return; }
      e1.hidden = true;
      q('.pick').textContent = `${pick.value} in ${zip}. Up to $1,500 off.`;
      s1.hidden = true; s2.hidden = false; card.querySelector('.d2').classList.add('on'); f.first.focus();
    });
    q('.back').addEventListener('click', () => { s2.hidden = true; s1.hidden = false; card.querySelector('.d2').classList.remove('on'); });
    f.addEventListener('submit', async e => {
      e.preventDefault();
      const ok = f.first.value.trim() && f.phone.value.replace(/\D/g, '').length >= 10 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.value.trim());
      if (!ok) { e2.innerHTML = err2; e2.hidden = false; return; }
      e2.hidden = true;
      if (f['bot-field'] && f['bot-field'].value) return;
      submit.disabled = true; submit.textContent = 'Sending…';
      try {
        await send({ source: 'estimate form', project: f.querySelector('[name=project]:checked').value, zip: f.zip.value.trim(), first: f.first.value.trim(), last: f.last.value.trim(), phone: f.phone.value.trim(), email: f.email.value.trim(), message: f.message ? f.message.value.trim() : '', sms_consent: f.sms_consent && f.sms_consent.checked ? 'yes' : 'no' });
        s2.hidden = true; s3.hidden = false; s3.focus();
      } catch (err) {
        e2.innerHTML = `Sorry, that didn't go through. Please try again or call <a href="tel:${TEL}">${PHONE_TXT}</a>.`; e2.hidden = false;
      } finally { submit.disabled = false; submit.textContent = CTA; }
    });
  });

  /* ---------- Chat assistant (scripted; facts from stresslessremodels.com) ---------- */
  const chat = document.getElementById('chat'), msgs = document.getElementById('ch-msgs'), quick = document.getElementById('ch-quick'), form = document.getElementById('ch-form'), input = document.getElementById('ch-in'), btn = document.getElementById('ch-btn'), tip = document.getElementById('ch-tip');
  const PHONE = '<a href="tel:+16239395300">(623) 939-5300</a>';
  let started = false, flow = null, lead = {};
  const esc = t => t.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const add = (html, who = 'bot') => { const d = document.createElement('div'); d.className = 'ch-m ' + who; d.innerHTML = html; msgs.appendChild(d); msgs.scrollTop = msgs.scrollHeight; };
  const say = (html, delay = 650) => new Promise(r => { const t = document.createElement('div'); t.className = 'ch-typing'; t.innerHTML = '<i></i><i></i><i></i>'; msgs.appendChild(t); msgs.scrollTop = msgs.scrollHeight; setTimeout(() => { t.remove(); add(html); r(); }, still ? 0 : delay); });
  const chips = list => { quick.innerHTML = ''; list.forEach(([label, fn]) => { const b = document.createElement('button'); b.type = 'button'; b.textContent = label; b.onclick = () => { add(esc(label), 'me'); quick.innerHTML = ''; fn(); }; quick.appendChild(b); }); };
  const menu = () => chips([['Get a free estimate', estimate], ['Which coating is best?', coating], ['How long does it take?', () => answer('time')], ['Financing', () => answer('finance')], ['Do you serve my area?', area], ['Talk to a person', human]]);
  const ANS = {
    time: 'Many projects are done in <b>as little as a day</b>. Rubber Stone and VUBA Stone installs average 1–2 days, depending on size and the surface.',
    finance: 'Yes! <b>24 months same as cash</b>: no interest if paid in full within 24 months, then low fixed payments. Subject to credit approval. You can apply at your consultation or online.',
    price: 'Every project is priced after a <b>free in-home consultation</b>, because size and surface condition change the cost. Right now you can get <b>up to $1,500 off</b> your estimate.',
    warranty: 'It depends on the product: Rubber Stone and VUBA Stone carry a <b>6-year limited warranty</b> outdoors, and VUBA Stone garage floors get a <b>lifetime warranty</b>. Every job also has the StressLess Guarantee: on time and on budget. <a href="pricing.html#warranty">See coverage</a>',
    license: "Yes. We're licensed, bonded and insured (ROC 316055, BurWood, LLC), and family-owned with 15+ years in the business.",
    commercial: 'Yes. We coat commercial entryways, walkways and outdoor common areas.',
    mess: "We resurface what you already have, so there's <b>no demolition</b>. Our own crew does the install and the clean-up."
  };
  const answer = async k => { await say(ANS[k]); await say('Anything else I can help with?', 500); menu(); };
  async function estimate() { flow = 'project'; await say("Great! Let's get your free estimate started. What are you upgrading?"); chips(['Pool deck / patio', 'Driveway', 'Garage floor', 'Countertops', 'Cabinets', 'Shower / bath'].map(p => [p, () => { lead.project = p; askZip(); }])); }
  async function askZip() { flow = 'zip'; await say(`${esc(lead.project)}, nice choice. What's your ZIP code?`); input.placeholder = 'ZIP code'; input.inputMode = 'numeric'; input.focus(); }
  async function coating() { await say("Happy to help you choose. Where's the surface?"); chips([['Around a pool', () => rec('pool')], ['Driveway / walkway', () => rec('drive')], ['Garage / indoors', () => rec('garage')]]); }
  async function rec(k) {
    const R = { pool: '<b>Rubber Stone</b> is our go-to around pools. It\'s slip-resistant, cushioned and noticeably cooler underfoot.', drive: '<b>VUBA Stone</b> is great for driveways. It\'s natural stone in clear resin, handles vehicle traffic and is 100% permeable, so water drains through.', garage: '<b>Sierra Stone</b> is ideal for garages and entryways. It\'s natural stone with industrial epoxy that resists stains and chemicals.' };
    await say(R[k]); await say('Want a free estimate for it? You can get up to $1,500 off.', 500); chips([['Yes, get my estimate', () => { lead.project = { pool: 'Pool deck / patio', drive: 'Driveway', garage: 'Garage floor' }[k]; askZip(); }], ['Not yet, other questions', menu]]);
  }
  async function area() { flow = 'area'; await say("We serve Arizona, New Mexico and California, with offices in Phoenix, Albuquerque and Escondido. What's your ZIP code?"); input.placeholder = 'ZIP code'; input.inputMode = 'numeric'; input.focus(); }
  const served = z => /^8[5-6]\d{3}$/.test(z) ? 'Arizona' : /^8[7-8]\d{3}$/.test(z) ? 'New Mexico' : /^9[0-2]\d{3}$/.test(z) ? 'Southern California' : null;
  async function human() { await say(`You can call our team at ${PHONE}, Monday–Friday 8am–4pm. Or leave your number and we'll call you.`); chips([['Leave my number', () => { flow = 'name'; say("Sure! What's your first name?"); input.placeholder = 'First name'; input.inputMode = 'text'; input.focus(); }], ['Back to menu', menu]]); }
  const intent = t => { t = t.toLowerCase();
    if (/estimate|quote|consult|book|schedule/.test(t)) return estimate;
    if (/price|cost|how much|\$|expensive|cheap/.test(t)) return () => answer('price');
    if (/financ|payment|monthly|credit|interest/.test(t)) return () => answer('finance');
    if (/how long|time|days?|fast|quick/.test(t)) return () => answer('time');
    if (/warrant|guarantee/.test(t)) return () => answer('warranty');
    if (/licen|insur|bond|roc/.test(t)) return () => answer('license');
    if (/commercial|business|office|hoa/.test(t)) return () => answer('commercial');
    if (/mess|demo|dust|clean/.test(t)) return () => answer('mess');
    if (/rubber|vuba|sierra|coating|which|best|pool|driveway|garage|patio/.test(t)) return coating;
    if (/area|zip|serve|located|where|phoenix|albuquerque|san diego|arizona|california|mexico/.test(t)) return area;
    if (/human|person|call|talk|phone|someone/.test(t)) return human;
    return null; };
  form.onsubmit = async e => {
    e.preventDefault(); const t = input.value.trim(); if (!t) return; add(esc(t), 'me'); input.value = ''; quick.innerHTML = '';
    if (flow === 'zip' || flow === 'area') {
      const z = t.replace(/\D/g, '').slice(0, 5); const st = served(z);
      if (z.length !== 5) { await say('Hmm, that doesn\'t look like a ZIP code. Mind trying the 5 digits?'); return; }
      lead.zip = z; input.inputMode = 'text';
      if (flow === 'area') { flow = null; await say(st ? `Good news, ${z} is in our ${st} service area. 🎉` : `${z} may be outside our usual area, but call ${PHONE} and we'll check.`); chips([['Get a free estimate', estimate], ['Other questions', menu]]); return; }
      if (!st) await say(`Thanks! ${z} may be outside our usual area, but we'll double-check.`, 400);
      flow = 'name'; await say("What's your first name?"); input.placeholder = 'First name'; return;
    }
    if (flow === 'name') { lead.name = t.split(' ')[0]; flow = 'phone'; await say(`Thanks, ${esc(lead.name)}! What's the best phone number to reach you?`); input.placeholder = 'Phone number'; input.inputMode = 'tel'; return; }
    if (flow === 'phone') {
      if (t.replace(/\D/g, '').length < 10) { await say('Could you double-check that number? I need 10 digits.'); return; }
      lead.phone = t; flow = null; input.placeholder = 'Type a message…'; input.inputMode = 'text';
      await say(`You're all set, ${esc(lead.name)}! ✅ ${lead.project ? `We'll call within one business day to book your free consultation for your <b>${esc(lead.project.toLowerCase())}</b>, and your <b>up to $1,500 off</b> is reserved.` : "We'll call you within one business day."}`);
      send({ source: 'chat', project: lead.project || '', zip: lead.zip || '', first: lead.name, phone: lead.phone }).catch(() => say(`Hmm, that didn't go through. Please call ${PHONE} and we'll take care of you.`, 200)); chips([['Ask another question', menu]]); return;
    }
    const fn = intent(t); if (fn) return fn();
    await say(`Good question! I don't have that answer handy, but our team does: ${PHONE}. Or pick a topic below.`); menu();
  };
  const open = async () => { chat.classList.add('open'); chat.setAttribute('aria-hidden', 'false'); btn.setAttribute('aria-expanded', 'true'); tip.classList.remove('show');
    if (!started) { started = true; await say("Hi there! 👋 I'm the StressLess assistant.", 300); await say('I can get your free estimate started, help you pick a coating, or answer questions. What can I help with?', 600); menu(); }
    setTimeout(() => input.focus(), 50); };
  const close = () => { chat.classList.remove('open'); chat.setAttribute('aria-hidden', 'true'); btn.setAttribute('aria-expanded', 'false'); btn.focus(); };
  btn.onclick = () => chat.classList.contains('open') ? close() : open();
  tip.onclick = open; document.getElementById('ch-x').onclick = close;
  addEventListener('keydown', e => { if (e.key === 'Escape' && chat.classList.contains('open')) close(); });
  setTimeout(() => { if (!started) tip.classList.add('show'); }, 6000);


  // ZIP checker (uses the chat's service-area rule)
  document.querySelectorAll('form.zipcheck').forEach(f => f.addEventListener('submit', e => {
    e.preventDefault();
    const z = f.zip.value.replace(/\D/g, '').slice(0, 5), out = f.querySelector('.zipres');
    if (z.length !== 5) { out.textContent = 'Please enter a 5-digit ZIP code.'; return; }
    const st = served(z);
    out.innerHTML = st ? `Yes! ${z} is in our ${st} service area. <a href="book.html">${CTA} →</a>` : `${z} may be outside our usual area. Call <a href="tel:${TEL}">${PHONE_TXT}</a> and we'll check.`;
  }));
})();
