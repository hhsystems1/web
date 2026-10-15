(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const page = (location.pathname.split('/demos/hissey/')[1] || 'index').replace(/\.html$/, '').replace(/^product-page\//, 'p-') || 'index';

  // ---- tracking: counts only, no personal details (POST /api/track) ----
  const dev = innerWidth < 760 ? 'mobile' : 'desktop';
  const track = (e, x) => {
    const body = JSON.stringify({ site: 'hissey', e, p: page, d: dev, x: x || '' });
    try { if (!(navigator.sendBeacon && navigator.sendBeacon('/api/track', new Blob([body], { type: 'application/json' })))) fetch('/api/track', { method: 'POST', body, keepalive: true }); } catch (_) {}
  };
  window.hwTrack = track;
  (() => {
    const q = new URLSearchParams(location.search);
    let src = q.get('utm_source') || (q.get('fbclid') ? 'facebook-ad' : q.get('gclid') ? 'google-ad' : q.get('ttclid') ? 'tiktok-ad' : '');
    if (!src && document.referrer) { try { const h = new URL(document.referrer).hostname; src = h.includes(location.hostname) ? 'internal' : h.replace(/^www\./, ''); } catch (_) {} }
    track('page_view', src || 'direct');
    const seen = {};
    addEventListener('scroll', () => {
      const pct = (scrollY + innerHeight) / document.documentElement.scrollHeight;
      if (pct > 0.5 && !seen[50]) { seen[50] = 1; track('scroll_50'); }
      if (pct > 0.9 && !seen[90]) { seen[90] = 1; track('scroll_90'); }
    }, { passive: true });
  })();
  document.addEventListener('click', ev => {
    const a = ev.target.closest('a,button'); if (!a) return;
    if (a.dataset.buy) track('buy_click', a.dataset.buy + (a.dataset.pos ? '.' + a.dataset.pos : ''));
    else if (a.dataset.soc) track('social_click', a.dataset.soc);
    else if (a.dataset.cta) track('cta_click', a.dataset.cta);
    else if (a.classList.contains('pc')) track('product_click', a.dataset.h);
  });

  // ---- header drawer ----
  const burger = $('.burger'), drawer = $('#drawer');
  if (burger) burger.onclick = () => { const o = drawer.hidden; drawer.hidden = !o; burger.setAttribute('aria-expanded', o); document.body.style.overflow = o ? 'hidden' : ''; };

  // ---- hero: pick your cap ----
  const hd = $('#herodata');
  if (hd) {
    const P = JSON.parse(hd.textContent), N = P.length, els = $$('.item'), tabs = $$('#roster button');
    let cur = 0, drag = 0;
    const off = i => { let d = i - cur; if (d > N / 2) d -= N; if (d < -N / 2) d += N; return d; };
    const layout = (dx = 0) => {
      const w = $('#stage').clientWidth, sp = Math.min(w * 0.5, 360);
      els.forEach((el, i) => {
        const d = off(i), a = Math.abs(d);
        el.classList.toggle('c', d === 0);
        el.style.transform = `translate(calc(-50% + ${d * sp + dx}px), -50%) scale(${d === 0 ? 1 : 0.55}) rotate(${d * 6}deg)`;
        el.style.opacity = a === 0 ? 1 : 0;
                el.style.zIndex = 10 - a;
        el.style.pointerEvents = a === 0 ? 'auto' : 'none';
        el.style.transition = dx ? 'none' : '';
      });
    };
    const info = quiet => {
      const p = P[cur];
      const paint = () => {
        $('#ix').textContent = String(cur + 1).padStart(2, '0');
        $('#col').textContent = p.col; $('#name').textContent = p.n;
        $('#price').innerHTML = p.o ? `${p.p}<s>${p.o}</s><em>Sale</em>` : p.p;
        const b = $('#buy'); b.href = 'https://www.hissey.co/product-page/' + p.h; b.dataset.buy = p.h;
        $('#more').href = 'product-page/' + p.h + '.html';
        $('#bigname').textContent = p.n.replace(/^the /i, '').split(' ')[0];
        tabs.forEach((t, i) => t.setAttribute('aria-current', i === cur));
      };
      if (quiet || still) return paint();
      $('#info').classList.add('swap'); $('#bigname').classList.add('swap');
      setTimeout(() => { paint(); $('#info').classList.remove('swap'); $('#bigname').classList.remove('swap'); }, 220);
    };
    const go = i => { cur = (i + N) % N; layout(); info(); track('hero_swipe', P[cur].h); };
    $('#prev').onclick = () => go(cur - 1); $('#next').onclick = () => go(cur + 1);
    tabs.forEach(t => t.onclick = () => go(+t.dataset.i));
    els.forEach(el => el.addEventListener('click', () => { if (Math.abs(drag) < 6) { const d = off(+el.dataset.i); if (d) go(cur + d); } }));
    addEventListener('keydown', e => { if (e.target.closest('input,textarea,select')) return; if (scrollY < innerHeight * .7) { if (e.key === 'ArrowRight') go(cur + 1); if (e.key === 'ArrowLeft') go(cur - 1); } });
    const st = $('#stage'); let x0 = null, id = null;
    st.addEventListener('pointerdown', e => { if (e.target.closest('.arrow')) return; x0 = e.clientX; drag = 0; id = e.pointerId; });
    addEventListener('pointermove', e => { if (x0 === null || e.pointerId !== id) return; drag = e.clientX - x0; if (Math.abs(drag) > 6) layout(drag * .9); });
    const end = () => { if (x0 === null) return; const d = drag; x0 = null; if (d < -50) go(cur + 1); else if (d > 50) go(cur - 1); else layout(); setTimeout(() => drag = 0, 0); };
    addEventListener('pointerup', end); addEventListener('pointercancel', end);
    addEventListener('resize', () => layout());
    layout(); info(true);
  }

  // ---- HISSEY pinned letters ----
  const pin = $('#hissey');
  if (pin) {
    const L = $$('#bigword span'), W = $$('#words .hw'); let last = -1;
    const tick = () => {
      if (still || innerWidth <= 900) return;
      const r = pin.getBoundingClientRect(), p = Math.min(1, Math.max(0, -r.top / (r.height - innerHeight)));
      const k = Math.min(5, Math.floor(p * 6)); if (k === last) return; last = k;
      L.forEach((s, i) => { s.classList.toggle('on', i === k); s.classList.toggle('done', i < k); });
      W.forEach((w, i) => w.classList.toggle('on', i === k));
    };
    addEventListener('scroll', () => requestAnimationFrame(tick), { passive: true }); tick();
  }

  // ---- shop filters ----
  const grid = $('#grid');
  if (grid) {
    const cards = $$('.pc', grid), chips = $$('.chip'), inst = $('#instock'), sort = $('#sort');
    const orig = cards.slice();
    let f = 'all';
    const apply = () => {
      let n = 0;
      cards.forEach(c => {
        const ok = (f === 'all' || c.dataset.cat === f || c.dataset.col === f || (f === 'sale' && c.dataset.sale === '1')) && (!inst.checked || c.dataset.s === '1');
        c.hidden = !ok; if (ok) n++;
      });
      $('#shown').textContent = n + (n === 1 ? ' style' : ' styles');
      $('#empty').hidden = n > 0;
      chips.forEach(c => c.setAttribute('aria-pressed', c.dataset.f === f));
    };
    const fromHash = () => { const h = location.hash.slice(1); f = chips.some(c => c.dataset.f === h) ? h : 'all'; apply(); };
    chips.forEach(c => c.onclick = () => { f = c.dataset.f; history.replaceState(null, '', f === 'all' ? location.pathname : '#' + f); apply(); track('filter_use', f); });
    inst.onchange = () => { apply(); track('filter_use', inst.checked ? 'in-stock' : 'all-stock'); };
    sort.onchange = () => {
      const v = sort.value, list = v === 'feat' ? orig : orig.slice().sort((a, b) => (v === 'lo' ? 1 : -1) * (a.dataset.p - b.dataset.p));
      list.forEach(c => grid.appendChild(c)); track('filter_use', 'sort-' + v);
    };
    addEventListener('hashchange', fromHash); fromHash();
  }

  // ---- product page ----
  const pd = $('#pdata');
  if (pd) {
    const h = JSON.parse(pd.textContent).h; track('product_view', h);
    const main = $('#pm');
    $$('#thumbs button').forEach(b => b.onclick = () => { main.src = b.dataset.src; $$('#thumbs button').forEach(x => x.setAttribute('aria-current', x === b)); });
    const lb = $('#lb');
    $('#gopen').onclick = () => { $('img', lb).src = main.src; lb.showModal(); track('photo_open', h); };
    $('.lbx', lb).onclick = () => lb.close();
    lb.addEventListener('click', e => { if (e.target === lb) lb.close(); });
    const sbar = $('#sbar'), buy = $('.pbuy');
    if (sbar && buy && 'IntersectionObserver' in window) new IntersectionObserver(([en]) => sbar.classList.toggle('on', !en.isIntersecting && en.boundingClientRect.top < 0)).observe(buy);
  }

  // ---- contact ----
  const cf = $('#cform');
  if (cf) {
    const item = new URLSearchParams(location.search).get('item');
    if (item) cf.message.value = `Is ${item} coming back in stock?`;
    let started = false, done = false, lastF = '';
    cf.addEventListener('input', e => { if (!started) { started = true; track('form_start'); } lastF = e.target.name || lastF; });
    addEventListener('pagehide', () => { if (started && !done) track('form_abandon', lastF); });
    const copy = $('#copy');
    copy.onclick = async () => { try { await navigator.clipboard.writeText($('#em').textContent); copy.textContent = 'Copied'; } catch (_) { const r = document.createRange(); r.selectNodeContents($('#em')); getSelection().removeAllRanges(); getSelection().addRange(r); } };
    cf.onsubmit = async ev => {
      ev.preventDefault();
      const msg = $('#fmsg');
      if (!cf.checkValidity()) { msg.className = 'fmsg err'; msg.textContent = 'Add your first name, email and a message.'; cf.reportValidity(); return; }
      const fd = new FormData(cf);
      const body = new URLSearchParams({ 'form-name': 'contact', source: fd.get('source'), name: `${fd.get('first')} ${fd.get('last')}`.trim(), email: fd.get('email'), message: fd.get('message'), 'bot-field': fd.get('bot-field') || '' });
      const btn = $('button[type=submit]', cf); btn.disabled = true;
      try {
        const r = await fetch('/__forms.html', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body });
        if (!r.ok) throw 0;
        done = true; track('lead_contact', item ? 'restock' : 'message');
        msg.className = 'fmsg ok'; msg.textContent = 'Got it. We\'ll get back to you by email.'; cf.reset();
      } catch (_) {
        msg.className = 'fmsg err'; msg.innerHTML = 'That didn\'t send. Email us at <a href="mailto:hisseywhiskey@gmail.com">hisseywhiskey@gmail.com</a>.';
      } finally { btn.disabled = false; }
    };
  }

  // ---- reveal ----
  if ('IntersectionObserver' in window && !still) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
    $$('.rv').forEach(el => io.observe(el));
  } else $$('.rv').forEach(el => el.classList.add('in'));
})();
