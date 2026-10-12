'use strict';
(() => {
  const PHONE = '(775) 600-5305', TEL = '+17756005305';
  // Mobile menu
  const burger = document.querySelector('.burger'), mnav = document.getElementById('mnav');
  if (burger) burger.addEventListener('click', () => {
    const open = mnav.hidden; mnav.hidden = !open;
    burger.setAttribute('aria-expanded', open); burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  // Prefill plan from ?plan=
  const plan = new URLSearchParams(location.search).get('plan');
  document.querySelectorAll('form.lead select[name=plan]').forEach(s => {
    if (!plan) return;
    const o = [...s.options].find(x => x.text.toLowerCase().includes(plan.toLowerCase()));
    if (o) s.value = o.value; else { const m = s.form.querySelector('[name=message]'); if (m) m.value = `About: ${plan}`; }
  });
  // Lead forms → Netlify Forms (definition in forms.html)
  document.querySelectorAll('form.lead').forEach(f => {
    const err = f.querySelector('.err'), done = f.querySelector('.done'), btn = f.querySelector('[type=submit]'), label = btn.textContent, msg = err.innerHTML;
    f.addEventListener('submit', async e => {
      e.preventDefault();
      const email = f.email.value.trim(), phone = f.phone.value.replace(/\D/g, '');
      const ok = f.first.value.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && phone.length >= 10 && (!f.company || f.company.value.trim());
      if (!ok) { err.innerHTML = msg; err.hidden = false; return; }
      err.hidden = true;
      if (f['bot-field'].value) return;
      btn.disabled = true; btn.textContent = 'Sending…';
      const data = { 'form-name': 'fusion-lead', kind: f.dataset.kind, page: location.pathname };
      new FormData(f).forEach((v, k) => { if (k !== 'bot-field') data[k] = v; });
      try {
        const r = await fetch('forms.html', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(data).toString() });
        if (!r.ok) throw new Error(r.status);
        [...f.children].forEach(c => { if (c !== done) c.hidden = true; }); done.hidden = false; done.focus();
      } catch (_) {
        err.innerHTML = `Sorry, that didn’t go through. Please try again or call <a href="tel:${TEL}">${PHONE}</a>.`; err.hidden = false;
        btn.disabled = false; btn.textContent = label;
      }
    });
  });
})();
