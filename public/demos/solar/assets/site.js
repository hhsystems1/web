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

  // ---- hero bill slider ----
  const qb = $('#q-bill'); qb && qb.addEventListener('input', () => { $('#q-bill-v').textContent = '$' + qb.value + (qb.value == 600 ? '+' : '') + '/mo'; });

  // ---- address forms → analyzer ----
  $$('form[data-addr]').forEach(f => f.addEventListener('submit', () => track('address_entered', f.dataset.addr)));

  // ---- energy flow ----
  const ph = $('#ef-ph');
  if (ph) {
    const txt = $('#flowtxt'), gen = $('#gen-on');
    const M = {
      day: { badge: 'Daytime', dash: ['sol-home', 'sol-batt', 'home-grid'], on: ['solar', 'home', 'batt', 'grid'],
        v: { solar: 'Producing', home: 'On solar', batt: 'Charging', grid: 'Gets extra', gen: 'Off' },
        t: 'Panels power the house first. Extra solar charges the battery, then flows out to the grid for credit.' },
      night: { badge: 'Nighttime', dash: ['batt-home', 'grid-home'], on: ['home', 'batt', 'grid'],
        v: { solar: 'Off', home: 'Battery + grid', batt: 'Powering home', grid: 'Covers the rest', gen: 'Off' },
        t: 'No solar at night. The battery runs the house through the evening peak, when power often costs the most; the grid covers anything left.' },
      outage: { badge: 'Grid outage', dash: ['batt-home'], on: ['home', 'batt'],
        v: { solar: 'Recharges by day', home: 'Backed-up circuits', batt: 'Powering home', grid: 'Down', gen: 'Off' },
        t: 'The grid is down, so the system disconnects from it for line-worker safety. The battery keeps your backed-up circuits running, and tomorrow\'s sun recharges it.' },
    };
    const set = mode => {
      const m = M[mode], g = gen.checked && mode === 'outage';
      ph.dataset.mode = mode;
      $('.ef-day', ph).classList.toggle('off', mode !== 'day');
      $('.ef-dusk', ph).classList.toggle('off', mode === 'day');
      $('#ef-badge-t').textContent = m.badge;
      $$('.modes button').forEach(b => b.setAttribute('aria-pressed', b.dataset.mode === mode));
      const dash = g ? ['gen-home', 'gen-batt'] : m.dash;
      $$('.ef-dash').forEach(d => d.classList.toggle('on', dash.includes(d.id.slice(2))));
      const on = g ? [...m.on, 'gen'] : m.on;
      $$('.ef-node').forEach(n => n.classList.toggle('on', on.includes(n.dataset.n)));
      Object.entries(m.v).forEach(([k, v]) => { $('#v-' + k).textContent = k === 'gen' ? (gen.checked ? (g ? 'Running' : 'Standby') : 'Not added') : (g && k === 'batt' ? 'Recharging' : v); });
      txt.textContent = g ? 'Long outage with a generator: when the battery runs low or clouds roll in, the generator starts, runs the home and recharges the battery.' : m.t;
    };
    $$('.modes button').forEach(b => b.addEventListener('click', () => { set(b.dataset.mode); track('cta_click', 'flow-' + b.dataset.mode); }));
    gen.addEventListener('change', () => set(ph.dataset.mode === 'day' && gen.checked ? 'outage' : ph.dataset.mode));
    set('day');
  }

  // ---- bill explainer ----
  if (window.BILLS) {
    const paper = $('.v3-paper'), list = $('#bill-lines');
    const show = k => {
      const [name, lines] = BILLS[k];
      $('#bill-name').textContent = name;
      list.innerHTML = lines.map(([t, d, fx]) => `<li><b>${t}</b><span class="fx ${fx}">${EFFECT[fx]}</span><p>${d}</p></li>`).join('');
      $$('.v3-tabs button').forEach(b => b.setAttribute('aria-selected', b.dataset.u === k));
    };
    $$('.v3-tabs button').forEach(b => b.addEventListener('click', () => { show(b.dataset.u); track('cta_click', 'bill-' + b.dataset.u); }));
    $$('.v3-seg button').forEach(b => b.addEventListener('click', () => { paper.dataset.s = b.dataset.s; $$('.v3-seg button').forEach(x => x.setAttribute('aria-pressed', x === b)); }));
    paper.dataset.s = '1'; show('aps');
  }

  // ---- pay quiz ----
  const quiz = $('#pay-quiz');
  if (quiz) {
    const a = {};
    const R = {
      cash: ['Cash', 'You own it outright and pay nothing monthly for solar. Highest upfront cost, lowest total cost.'],
      loan: ['Loan', 'You own it and spread the cost out. Ask for the cash price and the financed price; the difference is the real cost of the loan.'],
      lease: ['Lease or PPA', 'A company owns and maintains the system. A lease is a set monthly payment; a PPA charges per kWh produced. Check the yearly escalator on either.'],
      short: ['Look closely at payback', 'If you may sell within 7 years, an owned system may not pay for itself before you move. A lease or PPA can transfer to the buyer if they qualify; ask how.'],
    };
    const pick = () => {
      if (!a.own || !a.pay || !a.stay) return;
      let k = a.own === 'yes' ? (a.pay === 'up' ? 'cash' : 'loan') : 'lease';
      const cols = k === 'lease' ? ['lease', 'ppa'] : [k];
      $$('#pay-tbl [data-p]').forEach(c => c.classList.toggle('hl', cols.includes(c.dataset.p)));
      const r = $('#pay-result'); const [t, d] = R[k];
      r.innerHTML = `<b>${t} looks like the fit</b><p>${d}</p>` + (a.stay === 'short' && a.own === 'yes' ? `<p><strong style="color:#fff">${R.short[0]}:</strong> ${R.short[1]}</p>` : '');
      r.hidden = false; track('option_selected', 'pay-quiz-' + k);
    };
    $$('fieldset', quiz).forEach(fs => fs.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      a[fs.dataset.q] = b.dataset.v; $$('button', fs).forEach(x => x.setAttribute('aria-pressed', x === b)); pick();
    }));
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
