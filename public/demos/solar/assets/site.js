(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const page = document.body.dataset.page || 'index';
  const device = matchMedia('(max-width: 760px)').matches ? 'mobile' : 'desktop';

  // ---- tracking: counts only, never form contents ----
  const track = (e, x = '') => {
    try {
      const body = JSON.stringify({ site: 'solar', e, p: page, d: device, x });
      if (navigator.sendBeacon) navigator.sendBeacon('/api/track', new Blob([body], { type: 'application/json' }));
      else fetch('/api/track', { method: 'POST', body, keepalive: true });
    } catch (_) {}
  };
  window.solTrack = track;
  const q = new URLSearchParams(location.search);
  const src = q.get('utm_source') || (q.get('gclid') ? 'google-ads' : q.get('fbclid') ? 'facebook' : '') || (document.referrer && !document.referrer.includes(location.host) ? new URL(document.referrer).hostname.replace(/^www\./, '') : 'direct');
  track('page_view', src);
  let s50 = false, s90 = false;
  addEventListener('scroll', () => {
    const p = (scrollY + innerHeight) / document.documentElement.scrollHeight;
    if (!s50 && p > .5) { s50 = true; track('scroll_50'); }
    if (!s90 && p > .9) { s90 = true; track('scroll_90'); }
  }, { passive: true });
  document.addEventListener('click', e => {
    const a = e.target.closest('[data-cta],[data-call]');
    if (!a) return;
    if (a.dataset.call) track('call_tap', a.dataset.call); else track('cta_click', a.dataset.cta);
  });

  // ---- nav ----
  $$('.dd').forEach(dd => {
    const b = $('button', dd);
    b.addEventListener('click', ev => { ev.stopPropagation(); const o = !dd.classList.contains('open'); $$('.dd').forEach(x => { x.classList.remove('open'); $('button', x).setAttribute('aria-expanded', 'false'); }); dd.classList.toggle('open', o); b.setAttribute('aria-expanded', o); });
  });
  document.addEventListener('click', () => $$('.dd.open').forEach(x => { x.classList.remove('open'); $('button', x).setAttribute('aria-expanded', 'false'); }));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') $$('.dd.open').forEach(x => x.classList.remove('open')); });
  const burger = $('.burger'), mnav = $('#mnav');
  burger && burger.addEventListener('click', () => { const o = mnav.hidden; mnav.hidden = !o; burger.setAttribute('aria-expanded', o); });

  // ---- address forms → analyzer ----
  $$('form[data-addr]').forEach(f => f.addEventListener('submit', () => track('address_entered', f.dataset.addr)));

  // ---- power-flow house ----
  const house = $('#house');
  if (house) {
    const txt = $('#flowtxt'), gen = $('#gen-on');
    const T = {
      day: 'Daytime: panels power the house first. Extra solar charges the battery, then flows out to the grid for credit.',
      night: 'Nighttime: no solar. The battery runs the house through the evening peak; the grid covers anything left.',
      outage: 'Outage: the grid is down and the system disconnects from it for line-worker safety. The battery keeps your backed-up circuits running; tomorrow\'s sun recharges it.',
      outageGen: 'Long outage with a generator: when the battery runs low or clouds roll in, the generator starts, runs the home and recharges the battery.',
    };
    const on = ids => $$('.fp', house).forEach(p => p.classList.toggle('on', ids.includes(p.id)));
    const set = mode => {
      house.dataset.mode = mode;
      $$('.modes button').forEach(b => b.setAttribute('aria-pressed', b.dataset.mode === mode));
      const g = gen.checked;
      $('#sun', house).style.opacity = mode === 'day' ? 1 : 0;
      $('#moon', house).style.opacity = mode === 'day' ? 0 : 1;
      $('#cut', house).style.opacity = mode === 'outage' ? 1 : 0;
      $('#wire', house).setAttribute('stroke', mode === 'outage' ? '#7A8594' : '#2B3440');
      $('#gen', house).style.opacity = g ? 1 : .35;
      const lit = mode !== 'day';
      ['#w1', '#w2'].forEach(w => $(w, house).setAttribute('fill', lit ? '#FFD98A' : '#9FB3C8'));
      $('#battfill', house).setAttribute('height', mode === 'day' ? 44 : mode === 'night' ? 26 : g ? 34 : 14);
      $('#battfill', house).setAttribute('y', mode === 'day' ? 318 : mode === 'night' ? 336 : g ? 328 : 348);
      if (mode === 'day') on(['f-sun-home', 'f-sun-batt', 'f-home-grid']);
      else if (mode === 'night') on(['f-batt-home', 'f-grid-home']);
      else on(g ? ['f-gen-home', 'f-gen-batt'] : ['f-batt-home']);
      txt.textContent = mode === 'outage' && g ? T.outageGen : T[mode];
    };
    $$('.modes button').forEach(b => b.addEventListener('click', () => { set(b.dataset.mode); track('cta_click', 'flow-' + b.dataset.mode); }));
    gen.addEventListener('change', () => set(house.dataset.mode));
    set('day');
  }

  // ---- contact form ----
  const cf = $('#contact-form');
  if (cf) {
    let started = false;
    cf.addEventListener('input', () => { if (!started) { started = true; track('form_start', 'contact'); } }, { once: false });
    cf.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = $('button[type=submit]', cf); btn.disabled = true; btn.textContent = 'Sending…';
      try {
        const r = await fetch('forms.html', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(new FormData(cf)).toString() });
        if (!r.ok) throw 0;
        track('form_submit', 'contact'); track('lead_contact');
        $$('.f,.fgrid,.consent', cf).forEach(x => x.hidden = true); btn.hidden = true; $('#contact-ok').hidden = false;
      } catch (_) { btn.disabled = false; btn.textContent = 'Try again'; }
    });
  }
})();
