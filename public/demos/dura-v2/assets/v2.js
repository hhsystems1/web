'use strict';
(() => {
  const C = window.DC, $ = s => document.querySelector(s);
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const money = n => '$' + Number(n).toFixed(2);
  const img = (src, w) => src ? src + (src.includes('?') ? '&' : '?') + 'width=' + w : '';
  const clean = t => String(t).replace(/\s+-\s+(use code|with code).*$/i, '').replace(/\s*made in usa\s*$/i, '').replace(/\s{2,}/g, ' ').trim();
  let list = null;
  async function load() {
    if (list) return list;
    let raw = null;
    try { raw = JSON.parse(sessionStorage.getItem('dc-cat') || 'null'); } catch (e) {}
    if (!raw) {
      const r = await fetch(C.api, { headers: { Accept: 'application/json' } });
      const j = await r.json();
      raw = j.products.filter(p => C.handles[p.handle]).map(p => ({ h: p.handle, n: p.title, imgs: p.images.slice(0, 1).map(i => i.src.split('?')[0]), v: p.variants.map(v => ({ id: v.id, p: +v.price, c: v.compare_at_price ? +v.compare_at_price : 0, a: v.available !== false })) }));
    }
    list = raw.map(p => ({ ...p, name: C.names[p.h] || clean(p.n), cat: C.cats[C.handles[p.h]]?.name || '', low: Math.min(...p.v.map(v => v.p)) }));
    return list;
  }
  /* search */
  const q = $('#q'), res = $('#q-res');
  if (q) {
    let t;
    const run = async () => {
      const s = q.value.trim().toLowerCase();
      if (s.length < 2) { res.hidden = true; return; }
      let items = [];
      try { items = (await load()).filter(p => (p.name + ' ' + p.cat + ' ' + p.n).toLowerCase().includes(s)).slice(0, 7); } catch (e) {}
      res.innerHTML = items.length ? items.map(p => `<a href="product.html#${p.h}" role="option"><img src="${img(p.imgs[0], 120)}" alt=""><span>${esc(p.name)}<br><small style="color:#5c5c5c;font-weight:500">${esc(p.cat)}</small></span><span class="pr">${money(p.low)}</span></a>`).join('')
        : `<p>No matches for "${esc(q.value)}". <a href="shop.html" style="display:inline;padding:0;border:0;color:#d7261e">Browse the shop</a></p>`;
      res.hidden = false;
    };
    q.addEventListener('input', () => { clearTimeout(t); t = setTimeout(run, 160); });
    q.addEventListener('focus', () => { load().catch(() => {}); if (q.value.trim().length > 1) run(); });
    document.addEventListener('click', e => { if (!e.target.closest('.v2-search')) res.hidden = true; });
    q.addEventListener('keydown', e => { if (e.key === 'Escape') res.hidden = true; if (e.key === 'Enter') { const a = res.querySelector('a'); if (a) location.href = a.href; } });
  }
  /* spotlight price + add */
  const spot = document.querySelector('[data-spot]');
  if (spot) load().then(all => {
    const p = all.find(x => x.h === spot.dataset.spot); if (!p) return;
    const v = p.v.filter(x => x.a).sort((a, b) => a.p - b.p)[0] || p.v[0];
    $('#spot-price').innerHTML = money(v.p) + (v.c > v.p ? `<s>${money(v.c)}</s><em>Save ${Math.round((1 - v.p / v.c) * 100)}%</em>` : '');
    const b = $('#spot-add'); b.dataset.add = v.id; b.dataset.h = p.h; b.disabled = !v.a; if (!v.a) b.textContent = 'Sold out';
  }).catch(() => { $('#spot-price').textContent = ''; });
  /* newsletter */
  const nf = document.querySelector('.v2-news-f');
  if (nf) nf.addEventListener('submit', async e => {
    e.preventDefault();
    try { const r = await fetch('forms.html', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(new FormData(nf)).toString() }); if (!r.ok) throw 0; $('#nl-msg').textContent = 'You\'re on the list. Watch your inbox for the next deal.'; nf.reset(); }
    catch (_) { $('#nl-msg').textContent = 'That didn\'t go through. Try again in a moment.'; }
  });
})();
/* copy coupon code */
document.addEventListener('click', e => {
  const b = e.target.closest('[data-copy]'); if (!b) return;
  const code = b.dataset.copy, done = () => { b.textContent = 'Copied ' + code; setTimeout(() => { b.textContent = 'Copy code ' + code; }, 2000); };
  if (navigator.clipboard) navigator.clipboard.writeText(code).then(done, () => { b.textContent = 'Code: ' + code; }); else b.textContent = 'Code: ' + code;
});
/* animated hero: faded tire -> coat -> 15 washes, still shining */
(() => {
  const hx = document.getElementById('hx'); if (!hx) return;
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const n = document.getElementById('hx-n'), bar = document.getElementById('hx-bar');
  const btns = [...hx.querySelectorAll('[data-ba]')];
  let timers = [];
  const clear = () => { timers.forEach(clearTimeout); timers = []; hx.classList.remove('washing', 'pulse'); };
  const later = (f, ms) => timers.push(setTimeout(f, ms));
  const set = st => { hx.classList.toggle('after', st === 'after'); btns.forEach(b => b.setAttribute('aria-pressed', b.dataset.ba === st)); };
  const count = k => { n.textContent = k; bar.style.width = (k / 15 * 100) + '%'; };
  const pulse = () => { hx.classList.remove('pulse'); void hx.offsetWidth; hx.classList.add('pulse'); };
  function play() {
    clear(); set('before'); count(0);
    if (still) { set('after'); count(15); return; }
    later(() => set('after'), 1300);            // coating wipes across the tire
    later(pulse, 2350);
    later(() => hx.classList.add('washing'), 2900);
    for (let k = 1; k <= 15; k++) later(() => { count(k); if (k % 3 === 0) pulse(); }, 2900 + k * 230);
    later(() => { hx.classList.remove('washing'); pulse(); }, 2900 + 16 * 230);
  }
  btns.forEach(b => b.addEventListener('click', () => { clear(); set(b.dataset.ba); if (b.dataset.ba === 'after') { count(15); pulse(); } else count(0); }));
  document.getElementById('hx-rep').addEventListener('click', play);
  if ('IntersectionObserver' in window) { let done = false; new IntersectionObserver(([e]) => { if (e.isIntersecting && !done) { done = true; play(); } }, { threshold: .3 }).observe(hx); } else play();
})();
