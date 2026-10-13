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

  function card(p, badge = '') {
    const v = from(p), one = p.v.length === 1;
    const btn = soldOut(p) ? '<button class="btn btn-line btn-sm add" disabled>Sold out</button>'
      : one ? `<button class="btn btn-red btn-sm add" data-add="${v.id}" data-h="${p.h}">Add to cart</button>`
      : `<a class="btn btn-line btn-sm add" href="product.html#${p.h}">Choose size</a>`;
    return `<article class="pcard"><a class="ph" href="product.html#${p.h}" tabindex="-1" aria-hidden="true">${badge ? `<span class="badge${badge === 'Made in USA' ? ' alt' : ''}">${badge}</span>` : ''}<img src="${img(p.imgs[0], 480)}" alt="" loading="lazy"></a>
      <div class="t"><h3><a href="product.html#${p.h}">${esc(p.name)}</a></h3><div class="p">${priceHTML(p)}</div>${btn}</div></article>`;
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
  burger.addEventListener('click', () => { const o = mnav.hidden; mnav.hidden = !o; burger.setAttribute('aria-expanded', o); });
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
    $('#crumb-cat').textContent = C.cats[p.cat].name; $('#crumb-cat').href = 'shop.html#' + p.cat;
    let v = from(p), q = 1;
    box.innerHTML = `<div class="gallery"><div class="main"><img id="main-img" src="${img(p.imgs[0], 900)}" alt="${esc(p.name)}"></div>
      ${p.imgs.length > 1 ? `<div class="thumbs">${p.imgs.map((s, i) => `<button type="button" data-i="${i}" aria-label="Photo ${i + 1}"${i ? '' : ' aria-current="true"'}><img src="${img(s, 160)}" alt=""></button>`).join('')}</div>` : ''}</div>
      <div class="buy"><p class="meta" style="margin:0 0 10px">${esc(C.cats[p.cat].name)}</p><h1>${esc(p.name)}</h1>
      <div class="price num" id="pp" style="margin-top:14px"></div>
      ${p.v.length > 1 ? `<div class="label">Size / option</div><div class="opts">${p.v.map(x => `<button type="button" class="opt" data-v="${x.id}" aria-pressed="${x.id === v.id}"${x.a ? '' : ' disabled'}>${esc(x.t)} · ${money(x.p)}</button>`).join('')}</div>` : ''}
      <div class="btns"><div class="qty"><button type="button" id="qm" aria-label="One less">−</button><input id="qv" value="1" aria-label="Quantity" inputmode="numeric"><button type="button" id="qp" aria-label="One more">+</button></div>
      <button class="btn btn-red" id="buy" style="flex:1">Add to cart</button></div>
      <div class="assure"><div>${C.check}<span><b>Dura-Sure guarantee.</b> 100% money back if it doesn't outperform what you use now.</span></div><div>${C.check}<span><b>Free US ground shipping</b> on orders over $150 with code FREESHIP.</span></div><div>${C.check}<span>Made and tested in Naples, Florida by a family-run detail shop.</span></div></div>
      ${p.d ? `<div class="label">About this product</div><div class="desc">${esc(p.d)}</div>` : ''}</div>`;
    const paint = () => { $('#pp').innerHTML = `${money(v.p)}${v.c > v.p ? `<s>${money(v.c)}</s>` : ''}`; const b = $('#buy'); b.disabled = !v.a; b.textContent = v.a ? 'Add to cart' : 'Sold out'; };
    paint();
    $$('.opt', box).forEach(o => o.addEventListener('click', () => { v = p.v.find(x => String(x.id) === o.dataset.v); $$('.opt', box).forEach(x => x.setAttribute('aria-pressed', x === o)); paint(); }));
    $$('.thumbs button', box).forEach(t => t.addEventListener('click', () => { $('#main-img').src = img(p.imgs[+t.dataset.i], 900); $$('.thumbs button', box).forEach(x => x.removeAttribute('aria-current')); t.setAttribute('aria-current', 'true'); }));
    const qv = $('#qv'); const setQ = n => { q = Math.max(1, Math.min(99, n || 1)); qv.value = q; };
    $('#qm').onclick = () => setQ(q - 1); $('#qp').onclick = () => setQ(q + 1); qv.onchange = () => setQ(parseInt(qv.value, 10));
    $('#buy').onclick = () => add(p, v.id, q);
    const rel = Object.values(cat).filter(x => x.cat === p.cat && x.h !== p.h).slice(0, 4).map(x => x.h);
    grid($('#related'), (C.pairs[p.cat] || []).filter(x => x !== p.h).concat(rel).slice(0, 4));
  }
  addEventListener('hashchange', () => { if (document.body.dataset.page === 'product') product(); });

  /* ---------------- shop ---------------- */
  async function shop() {
    const box = $('#bands');
    box.innerHTML = `<div class="grid" style="margin-top:32px">${skel(8)}</div>`;
    let cat; try { cat = await catalog(); } catch (e) { box.innerHTML = '<div style="margin-top:32px">' + failHTML() + '</div>'; return; }
    box.innerHTML = Object.entries(C.cats).map(([id, c]) => {
      const items = c.order.map(h => cat[h]).filter(Boolean).concat(Object.values(cat).filter(p => p.cat === id && !c.order.includes(p.h)));
      return items.length ? `<section id="${id}" aria-labelledby="h-${id}" style="scroll-margin-top:140px"><div class="band-head"><div><h2 id="h-${id}">${c.name}</h2><p>${c.blurb}</p></div><span class="num" style="color:var(--muted)">${items.length} products</span></div><div class="grid">${items.map(p => card(p, c.badges?.[p.h])).join('')}</div></section>` : '';
    }).join('');
    const chips = $$('.chip');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) chips.forEach(c => c.toggleAttribute('aria-current', c.hash === '#' + x.target.id)); }), { rootMargin: '-40% 0px -55% 0px' });
      $$('#bands section').forEach(s => io.observe(s));
    }
    if (location.hash) { const t = document.getElementById(location.hash.slice(1)); if (t) t.scrollIntoView(); }
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
