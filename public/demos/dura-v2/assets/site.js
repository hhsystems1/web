'use strict';
(() => {
  const C = window.DC;                      // config written by build.py
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const money = n => '$' + Number(n).toFixed(2);
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const STORE = 'https://dura-coating.com';
  const img = (src, w) => src ? src + (src.includes('?') ? '&' : '?') + 'width=' + w : '';

  /* ---------------- catalog: live from their Shopify store (same-origin proxy) ---------------- */
  let CAT = null;
  const clean = t => String(t).replace(/\s+-\s+(use code|with code).*$/i, '').replace(/\s*made in usa\s*$/i, '').replace(/\s{2,}/g, ' ').trim();
  async function catalog() {
    if (CAT) return CAT;
    let raw = null;
    try { raw = JSON.parse(sessionStorage.getItem('dc-cat') || 'null'); } catch (e) {}
    if (!raw) {
      const r = await fetch(C.api, { headers: { Accept: 'application/json' } });
      if (!r.ok) throw new Error('catalog ' + r.status);
      raw = (await r.json()).products.filter(p => C.handles[p.handle]).map(p => ({
        h: p.handle, n: p.title, imgs: p.images.slice(0, 6).map(i => i.src.split('?')[0]),
        v: p.variants.map(v => ({ id: v.id, t: v.title, p: +v.price, c: v.compare_at_price ? +v.compare_at_price : 0, a: v.available !== false })),
        d: (p.body_html || '').replace(/<(script|style|iframe)[\s\S]*?<\/\1>/gi, '').replace(/<br\s*\/?>|<\/(p|li|h\d|div)>/gi, '\n').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&#39;|&rsquo;/g, "'").replace(/&quot;|&ldquo;|&rdquo;/g, '"').replace(/[ \t]+/g, ' ').replace(/\n\s*\n+/g, '\n').trim().slice(0, 1800)
      }));
      try { sessionStorage.setItem('dc-cat', JSON.stringify(raw)); } catch (e) {}
    }
    CAT = {};
    raw.forEach(p => { p.cat = C.handles[p.h]; p.name = C.names[p.h] || clean(p.n); p.v.sort((a, b) => a.p - b.p); CAT[p.h] = p; });
    return CAT;
  }
  const from = p => { const a = p.v.filter(v => v.a); const v = (a.length ? a : p.v)[0]; return v; };
  const priceHTML = p => { const v = from(p); const multi = new Set(p.v.map(x => x.p)).size > 1; return `${multi ? '<small>from </small>' : ''}${money(v.p)}${v.c > v.p ? `<s>${money(v.c)}</s>` : ''}`; };
  const soldOut = p => p.v.every(v => !v.a);
  const failHTML = (what = 'products') => `<div class="fail">The live ${what} didn't load. <a class="link" href="${STORE}/collections/all" target="_blank" rel="noopener">Shop on dura-coating.com →</a></div>`;
  const skel = n => Array.from({ length: n }, () => '<div class="skel" aria-hidden="true"></div>').join('');

  const saveTag = v => v.c > v.p ? `<em class="save">Save ${Math.round((1 - v.p / v.c) * 100)}%</em>` : '';
  const blurb = p => { const l = (p.d || '').split(/\n|(?<=[.!?])\s+/).map(x => x.trim()).find(x => x.length > 18 && x.length < 160 && !/^["'“”]/.test(x) && x !== x.toUpperCase()); return l || C.cats[p.cat]?.name || ''; };
  function card(p, badge = '') {
    const v = from(p), one = p.v.length === 1, multi = new Set(p.v.map(x => x.p)).size > 1;
    const plus = soldOut(p) ? '' : one ? `<button class="qadd" data-add="${v.id}" data-h="${p.h}" aria-label="Add ${esc(p.name)} to cart">+</button>` : `<a class="qadd" href="product.html#${p.h}" aria-label="Choose a size of ${esc(p.name)}">+</a>`;
    return `<article class="pcard cg">${plus}<a class="ph" href="product.html#${p.h}" tabindex="-1" aria-hidden="true">${badge ? `<span class="badge">${badge}</span>` : ''}<img src="${img(p.imgs[0], 480)}" alt="" loading="lazy"></a>
      <div class="t"><h3><a href="product.html#${p.h}">${esc(p.name)}</a></h3><p class="bl">${esc(blurb(p))}</p>
      <div class="p">${soldOut(p) ? '<span class="so">Sold out</span>' : `${multi ? '<small>From </small>' : ''}<b>${money(v.p)}</b>${v.c > v.p ? `<s>${money(v.c)}</s>` : ''}${saveTag(v)}`}</div></div></article>`;
  }
  function row(p, btn = 'Add to cart') {
    const v = from(p), one = p.v.length === 1;
    const b = soldOut(p) ? '<button class="v2-btn out sm" disabled>Sold out</button>' : one ? `<button class="v2-btn out sm" data-add="${v.id}" data-h="${p.h}">${btn}</button>` : `<a class="v2-btn out sm" href="product.html#${p.h}">Choose size</a>`;
    return `<div class="prow"><a href="product.html#${p.h}" class="pi"><img src="${img(p.imgs[0], 200)}" alt="" loading="lazy"></a><div><h4><a href="product.html#${p.h}">${esc(p.name)}</a></h4>
      <div class="p"><b>${money(v.p)}</b>${v.c > v.p ? `<s>${money(v.c)}</s>` : ''}${saveTag(v)}</div>${b}</div></div>`;
  }

  /* ---------------- cart (stored here, checkout on their Shopify) ---------------- */
  const KEY = 'dc-cart';
  let cart = []; try { cart = JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(cart)); } catch (e) {} paintCart(); };
  const count = () => cart.reduce((s, l) => s + l.q, 0);
  const subtotal = () => cart.reduce((s, l) => s + l.q * l.p, 0);
  function add(p, vid, q = 1) {
    const v = p.v.find(x => String(x.id) === String(vid)); if (!v) return;
    const l = cart.find(x => String(x.id) === String(v.id));
    if (l) l.q += q; else cart.push({ id: v.id, h: p.h, n: p.name, t: v.t === 'Default Title' ? '' : v.t, p: v.p, i: p.imgs[0] || '', q });
    save(); openCart();
  }
  function paintCart() {
    const n = count();
    $$('.cart-count').forEach(b => { b.textContent = n; b.hidden = !n; });
    const L = $('#lines'); if (!L) return;
    if (!cart.length) { L.innerHTML = `<div class="empty"><p>Your cart is empty.</p><a class="btn btn-red" href="index.html#kit">Find my tire kit</a></div>`; $('#cart-foot').hidden = true; return; }
    $('#cart-foot').hidden = false;
    L.innerHTML = cart.map((l, k) => `<div class="line"><img src="${img(l.i, 160)}" alt=""><div><b>${esc(l.n)}</b>${l.t ? `<small>${esc(l.t)}</small>` : ''}
      <div class="qty"><button type="button" data-q="${k}" data-d="-1" aria-label="One less">−</button><input aria-label="Quantity" value="${l.q}" inputmode="numeric" data-qi="${k}"><button type="button" data-q="${k}" data-d="1" aria-label="One more">+</button></div></div>
      <div style="text-align:right"><b class="num">${money(l.p * l.q)}</b><button type="button" class="rm" data-rm="${k}">Remove</button></div></div>`).join('');
    const s = subtotal(), left = Math.max(0, C.freeShip - s);
    $('#sub').textContent = money(s);
    $('#ship-msg').innerHTML = left ? `Add <b>${money(left)}</b> for free US ground shipping (code <b>FREESHIP</b>).` : `You qualify for free US ground shipping. Use code <b>FREESHIP</b> at checkout.`;
    $('#ship-bar').style.width = Math.min(100, s / C.freeShip * 100) + '%';
    $('#checkout').href = `${STORE}/cart/${cart.map(l => `${l.id}:${l.q}`).join(',')}`;
  }
  document.addEventListener('click', e => {
    const q = e.target.closest('[data-q]'); if (q) { const l = cart[+q.dataset.q]; l.q = Math.max(1, l.q + +q.dataset.d); save(); }
    const r = e.target.closest('[data-rm]'); if (r) { cart.splice(+r.dataset.rm, 1); save(); }
  });
  document.addEventListener('change', e => { const i = e.target.closest('[data-qi]'); if (i) { const l = cart[+i.dataset.qi]; l.q = Math.max(1, parseInt(i.value, 10) || 1); save(); } });
  const openCart = () => { $('#drawer').classList.add('on'); $('#scrim').classList.add('on'); $('#drawer').setAttribute('aria-hidden', 'false'); $('#drawer .x').focus(); };
  const closeCart = () => { $('#drawer').classList.remove('on'); $('#scrim').classList.remove('on'); $('#drawer').setAttribute('aria-hidden', 'true'); };
  $$('[data-cart]').forEach(b => b.addEventListener('click', openCart));
  $('#scrim').addEventListener('click', closeCart); $('#drawer .x').addEventListener('click', closeCart);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCart(); });
  document.addEventListener('click', async e => {
    const b = e.target.closest('[data-add]'); if (!b) return;
    const cat = await catalog().catch(() => null); const p = cat && cat[b.dataset.h]; if (p) add(p, b.dataset.add, +(b.dataset.qty || 1));
  });
  let tt; function toast(m) { const t = $('#toast'); t.textContent = m; t.classList.add('on'); clearTimeout(tt); tt = setTimeout(() => t.classList.remove('on'), 2200); }
  paintCart();

  /* ---------------- chrome ---------------- */
  const burger = $('#burger'), mnav = $('#mnav');
  const setMenu = o => { if (o) mnav.style.setProperty('--mt', Math.max(0, burger.getBoundingClientRect().bottom + 8) + 'px'); mnav.hidden = !o; burger.setAttribute('aria-expanded', o); document.documentElement.classList.toggle('menu-open', o); burger.innerHTML = o ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>' : burger.dataset.icon; };
  burger.dataset.icon = burger.innerHTML;
  burger.addEventListener('click', () => setMenu(mnav.hidden));
  $$('#mnav a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  $$('#mnav .mx').forEach(b => b.addEventListener('click', async () => {
    const s = b.closest('.mrow').nextElementSibling; const o = s.hidden; s.hidden = !o; b.setAttribute('aria-expanded', o); b.textContent = o ? '−' : '+';
    if (o && !s.dataset.done) { try { const cat = await catalog(); const k = s.dataset.msub; const c = C.cats[k];
      const items = c.order.map(h => cat[h]).filter(Boolean).slice(0, 6);
      s.innerHTML = items.map(p => `<a href="product.html#${p.h}">${esc(p.name)}</a>`).join('') + `<a class="all" href="shop.html#${k}">Shop all ${esc(c.name)} →</a>`; s.dataset.done = 1;
      $$('a', s).forEach(a => a.addEventListener('click', () => setMenu(false))); } catch (e) {} }
  }));
  if (!still && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }), { rootMargin: '0px 0px -8% 0px' });
    $$('.rv').forEach(el => io.observe(el));
  } else $$('.rv').forEach(el => el.classList.add('in'));

  /* ---------------- tire kit picker ---------------- */
  async function picker(root) {
    const out = $('.kitcard', root); let cat;
    try { cat = await catalog(); } catch (e) { out.innerHTML = failHTML('kits'); return; }
    const show = key => {
      const k = C.kits[key]; const p = cat[k.h];
      $$('.veh', root).forEach(b => b.setAttribute('aria-pressed', b.dataset.k === key));
      if (!p) { out.innerHTML = failHTML('kit'); return; }
      let v = from(p);
      const opts = p.v.length > 1 ? `<div class="label" style="margin:0 20px">Finish</div><div class="opts" style="padding:0 20px">${p.v.map(x => `<button type="button" class="opt" data-v="${x.id}" aria-pressed="${x.id === v.id}"${x.a ? '' : ' disabled'}>${esc(x.t)}</button>`).join('')}</div>` : '';
      out.innerHTML = `<div class="top"><img src="${img(p.imgs[0], 400)}" alt="${esc(p.name)}"><div><h3>${esc(p.name)}</h3><div class="price num">${priceHTML(p)}</div></div></div>
        <dl>${k.rows.map(([a, b]) => `<div><dt>${a}</dt><dd>${b}</dd></div>`).join('')}</dl>${opts}
        <div class="act"><button class="btn btn-red" data-add="${v.id}" data-h="${p.h}"${soldOut(p) ? ' disabled' : ''}>${soldOut(p) ? 'Sold out' : 'Add kit to cart'}</button><a class="btn btn-line" href="product.html#${p.h}">Details</a></div>
        ${k.note ? `<p class="note">${k.note}</p>` : ''}`;
      $$('.opt', out).forEach(o => o.addEventListener('click', () => { $$('.opt', out).forEach(x => x.setAttribute('aria-pressed', x === o)); $('[data-add]', out).dataset.add = o.dataset.v; }));
    };
    $$('.veh', root).forEach(b => b.addEventListener('click', () => show(b.dataset.k)));
    show('car');
  }

  /* ---------------- coating chooser ---------------- */
  async function chooser(root) {
    const out = $('.coatpick', root); let cat;
    try { cat = await catalog(); } catch (e) { out.innerHTML = failHTML('coatings'); return; }
    const show = i => {
      const c = C.coats[i]; const p = cat[c.h];
      $$('.yr', root).forEach((b, k) => b.setAttribute('aria-pressed', k === i));
      if (!p) { out.innerHTML = failHTML('coating'); return; }
      const first = p.d.split(/(?<=[.!?])\s+/).filter(s => s.length > 30).slice(0, 2).join(' ');
      out.innerHTML = `<img src="${img(p.imgs[0], 520)}" alt="${esc(p.name)}"><div><p class="meta" style="margin:0">Rated up to ${c.y} years</p><h3 style="margin-top:8px">${esc(c.label)}</h3>
        <div class="bar" aria-hidden="true"><i style="width:${Math.round(c.n / 9 * 100)}%"></i></div>
        <p style="margin-top:14px;color:var(--text-2)">${esc(c.why)}</p>${first ? `<p style="margin-top:10px;color:var(--muted);font-size:15px">${esc(first)}</p>` : ''}
        <div class="price num" style="margin-top:16px">${priceHTML(p)}</div>
        <div class="btns" style="margin-top:16px"><a class="btn btn-red" href="product.html#${p.h}">Choose size</a><a class="btn btn-line" href="ceramic-coatings.html#all">Compare all</a></div></div>`;
    };
    $$('.yr', root).forEach((b, i) => b.addEventListener('click', () => show(i)));
    show(+(root.dataset.start || 3));
  }

  /* ---------------- grids ---------------- */
  async function grid(el, handles, badges = {}) {
    el.innerHTML = skel(Math.min(handles.length, 4));
    try { const cat = await catalog(); el.innerHTML = handles.map(h => cat[h] && card(cat[h], badges[h])).filter(Boolean).join('') || failHTML(); }
    catch (e) { el.innerHTML = failHTML(); }
  }

  /* ---------------- product page ---------------- */
  async function product() {
    const h = decodeURIComponent(location.hash.slice(1)); const box = $('#pdp');
    let cat; try { cat = await catalog(); } catch (e) { box.innerHTML = failHTML('product'); return; }
    const p = cat[h];
    if (!p) { box.innerHTML = `<div class="fail">We couldn't find that product. <a class="link" href="shop.html">Back to the shop</a></div>`; return; }
    document.title = `${p.name} | Dura-Coating`;
    $('#crumb-cat').textContent = C.cats[p.cat].name; $('#crumb-cat').href = 'shop.html#' + p.cat; $('#crumb-p').textContent = p.name;
    let v = from(p);
    const pool = Object.values(cat).filter(x => x.cat === p.cat && x.h !== p.h && !soldOut(x));
    const pairs = (C.pairs[p.cat] || []).map(x => cat[x]).filter(x => x && x.h !== p.h && !soldOut(x)).concat(pool).filter((x, i, a) => a.indexOf(x) === i);
    const addon = pairs.find(x => x.v.length === 1);
    const lines = (p.d || '').split('\n').map(x => x.trim()).filter(Boolean);
    const bullets = lines.filter(x => x.length > 14 && x.length < 90 && !/[:]$/.test(x)).slice(0, 3);
    const tireish = p.cat === 'tires';
    box.innerHTML = `<div class="g2"><div class="g2-track" id="g2t">${p.imgs.map((s, i) => `<div class="g2-slide"><img src="${img(s, 900)}" alt="${i ? '' : esc(p.name)}"${i ? ' loading="lazy"' : ''}></div>`).join('')}</div>
      ${p.imgs.length > 1 ? `<div class="g2-ctl"><div class="g2-bar"><i id="g2b" style="width:${100 / p.imgs.length}%"></i></div><button type="button" class="g2-arr" id="g2p" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m15 6-6 6 6 6"/></svg></button><button type="button" class="g2-arr" id="g2n" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m9 6 6 6-6 6"/></svg></button></div>` : ''}</div>
      <div class="buy2">${tireish ? '<a class="seek" href="tire-coating.html">▶ See how Dura-Dressing works</a>' : `<p class="seek">${esc(C.cats[p.cat].name)}</p>`}
      <h1>${esc(p.name)}</h1>
      <div class="pr" id="pp"></div>
      ${bullets.length ? `<ul class="ticks">${bullets.map(b => `<li>${C.check}<span>${esc(b)}</span></li>`).join('')}</ul>` : ''}
      ${p.v.length > 1 ? `<p class="lbl">Size / option</p><div class="opts2">${p.v.map(x => `<button type="button" class="opt2" data-v="${x.id}" aria-pressed="${x.id === v.id}"${x.a ? '' : ' disabled'}>${esc(x.t)}</button>`).join('')}</div>` : ''}
      ${addon ? `<p class="lbl">Popular add-on</p><label class="addon"><img src="${img(addon.imgs[0], 160)}" alt=""><span><b>${esc(addon.name)}</b><span class="p"><b>${money(from(addon).p)}</b>${from(addon).c > from(addon).p ? `<s>${money(from(addon).c)}</s>` : ''}${saveTag(from(addon))}</span><a href="product.html#${addon.h}">View details</a></span><input type="checkbox" id="addon" role="switch" aria-label="Add ${esc(addon.name)}"><i class="sw" aria-hidden="true"></i></label>` : ''}
      <button class="v2-btn red wide" id="buy">Add to cart</button>
      <p class="v2-note">Free US ground shipping over $150 · code FREESHIP</p>
      <div class="perks"><div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/></svg><span>Free shipping<br>over $150</span></div><div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6z"/><path d="m9 12 2 2 4-4"/></svg><span>Dura-Sure<br>money-back</span></div></div>
      <div class="acc">
        ${p.d ? `<details><summary>Details</summary><div class="desc">${esc(p.d)}</div></details>` : ''}
        <details><summary>How to use</summary><div class="desc">${tireish ? 'Clean the tire with Dura-Cleaner first so the coating can bond, let it dry, then brush on a thin coat. Full steps, amounts per vehicle and care tips are on the <a class="link" href="tire-coating.html">Dura-Dressing guide</a>.' : `Step-by-step videos for this product are on the <a class="link" href="https://www.youtube.com/@duracoatingtechnology" target="_blank" rel="noopener">Dura-Coating YouTube channel</a>. Questions? <a class="link" href="help.html#contact">Ask the shop</a>.`}</div></details>
        <details><summary>Shipping & returns</summary><div class="desc">Free US ground shipping on orders over $150 with code FREESHIP at checkout. Returns are accepted within 30 days of purchase per the <a class="link" href="https://dura-coating.com/policies/refund-policy" target="_blank" rel="noopener">store's refund policy</a>, and the Dura-Sure guarantee gives 100% money back if it doesn't outperform what you use now.</div></details>
      </div></div>`;
    const paint = () => { $('#pp').innerHTML = `<b>${money(v.p)}</b>${v.c > v.p ? `<s>${money(v.c)}</s>` : ''}${saveTag(v)}`; const b = $('#buy'); b.disabled = !v.a; b.textContent = v.a ? 'Add to cart' : 'Sold out'; sticky(); };
    const sb = $('#sbar');
    const sticky = () => { if (!sb) return; sb.innerHTML = `<img src="${img(p.imgs[0], 120)}" alt=""><div><b>${esc(p.name)}</b><span class="p"><b>${money(v.p)}</b>${v.c > v.p ? `<s>${money(v.c)}</s>` : ''}${saveTag(v)}</span></div><button class="v2-btn red sm" id="sbuy"${v.a ? '' : ' disabled'}>${v.a ? 'Add' : 'Sold out'}</button>`; $('#sbuy').onclick = () => $('#buy').click(); };
    paint();
    if (sb && 'IntersectionObserver' in window) new IntersectionObserver(([e]) => sb.classList.toggle('on', !e.isIntersecting && e.boundingClientRect.top < 0)).observe($('#buy'));
    $$('.opt2', box).forEach(o => o.addEventListener('click', () => { v = p.v.find(x => String(x.id) === o.dataset.v); $$('.opt2', box).forEach(x => x.setAttribute('aria-pressed', x === o)); paint(); }));
    const t = $('#g2t');
    if (t && p.imgs.length > 1) {
      const n = p.imgs.length, at = () => Math.round(t.scrollLeft / t.clientWidth);
      t.addEventListener('scroll', () => { $('#g2b').style.width = ((at() + 1) / n * 100) + '%'; }, { passive: true });
      $('#g2p').onclick = () => t.scrollTo({ left: (at() - 1) * t.clientWidth, behavior: still ? 'auto' : 'smooth' });
      $('#g2n').onclick = () => t.scrollTo({ left: ((at() + 1) % n) * t.clientWidth, behavior: still ? 'auto' : 'smooth' });
    }
    $('#buy').onclick = () => { add(p, v.id, 1); const a = $('#addon'); if (a && a.checked) add(addon, from(addon).id, 1); };
    const uw = $('#usewith'); if (uw) { uw.closest('section').hidden = !pairs.length; uw.innerHTML = pairs.slice(0, 3).map(x => row(x)).join(''); }
    const rel = pool.filter(x => !pairs.slice(0, 3).includes(x)).slice(0, 4).map(x => x.h);
    const rb = $('#related'); rb.closest('section').hidden = !rel.length; if (rel.length) grid(rb, rel);
    scrollTo(0, 0);
  }
  addEventListener('hashchange', () => { if (document.body.dataset.page === 'product') product(); });

  /* ---------------- shop ---------------- */
  async function shop() {
    const box = $('#bands');
    box.innerHTML = `<div class="grid v2-grid" style="margin-top:24px">${skel(6)}</div>`;
    let cat; try { cat = await catalog(); } catch (e) { box.innerHTML = '<div style="margin-top:32px">' + failHTML() + '</div>'; return; }
    box.innerHTML = Object.entries(C.cats).map(([id, c]) => {
      const items = c.order.map(h => cat[h]).filter(Boolean).concat(Object.values(cat).filter(p => p.cat === id && !c.order.includes(p.h)));
      return items.length ? `<section id="${id}" aria-labelledby="h-${id}" class="band2"><div class="band-head2"><h2 id="h-${id}">${c.name}</h2><span>${items.length} products</span></div><p class="bl2">${c.blurb}</p><div class="grid v2-grid">${items.map(p => card(p, c.badges?.[p.h])).join('')}</div></section>` : '';
    }).join('');
    const chips = $$('.chip');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) chips.forEach(c => c.toggleAttribute('aria-current', c.hash === '#' + x.target.id)); }), { rootMargin: '-40% 0px -55% 0px' });
      $$('#bands section').forEach(s => io.observe(s));
    }
    if (location.hash) { const t = document.getElementById(location.hash.slice(1)); if (t) t.scrollIntoView(); }
    chips.forEach(c => c.addEventListener('click', () => c.scrollIntoView({ inline: 'center', block: 'nearest' })));
  }

  /* ---------------- forms (Netlify Forms) ---------------- */
  $$('form[data-netlify-form]').forEach(f => f.addEventListener('submit', async e => {
    e.preventDefault();
    const err = $('.err', f); err.hidden = true;
    if (!f.checkValidity()) { f.reportValidity(); return; }
    const b = $('button[type=submit]', f); b.disabled = true; b.textContent = 'Sending…';
    const data = new URLSearchParams(new FormData(f)); data.set('form-name', f.dataset.netlifyForm);
    try {
      const r = await fetch('forms.html', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: data.toString() });
      if (!r.ok) throw 0;
      $$('.f,.two,.small,button[type=submit]', f).forEach(x => x.hidden = true); $('.ok', f).hidden = false; $('.ok', f).focus();
    } catch (x) { err.hidden = false; b.disabled = false; b.textContent = 'Try again'; }
  }));

  /* ---------------- tile photos from the live catalog ---------------- */
  async function tiles() {
    const els = $$('[data-img-h]'); if (!els.length) return;
    try { const cat = await catalog(); els.forEach(el => { const p = cat[el.dataset.imgH]; if (p && p.imgs[0]) el.innerHTML = `<img src="${img(p.imgs[0], 480)}" alt="" loading="lazy">`; }); } catch (e) {}
  }

  /* ---------------- boot ---------------- */
  const page = document.body.dataset.page;
  $$('[data-picker]').forEach(picker);
  $$('[data-chooser]').forEach(chooser);
  $$('[data-grid]').forEach(el => grid(el, el.dataset.grid.split(','), C.badges));
  if (page === 'product') product();
  if (page === 'shop') shop();
  tiles();
})();
