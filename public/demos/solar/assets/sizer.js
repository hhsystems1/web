(() => {
  const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
  const form = $('#sz-form'); if (!form) return;
  const track = (e, x) => window.solTrack && window.solTrack(e, x || '');
  const st = { region: 'az', sys: 'solar', bill: 180, backup: 'ess', pay: 'loan' };
  const YIELD = { az: 1700, tx: 1400 }, RATE = 0.15, PW = 0.43;
  const SYS = {
    solar: ['Solar only', 'Cuts what you buy from the utility. Turns off in an outage, like every grid-tied system.'],
    battery: ['Solar + battery', 'Stores daytime solar for the evening and keeps chosen circuits on when the grid goes down.'],
    gen: ['Solar + battery + generator', 'The generator recharges the battery or runs the home when outages last for days.'],
  };
  const PAY = {
    cash: 'You own it. Highest upfront cost, lowest total cost.',
    loan: 'You own it and pay monthly. Compare the financed price, not just the payment.',
    lease: 'A company owns it; you pay a set monthly amount. Check the yearly escalator.',
    ppa: 'A company owns it; you pay per kWh it makes, plus your remaining utility bill.',
  };
  const fmt = n => Math.round(n).toLocaleString('en-US');
  let started = false;
  const render = () => {
    const use = st.bill / RATE * 12;
    const n = Math.min(60, Math.max(6, Math.floor(use / YIELD[st.region] / PW)));
    const kw = n * PW, prod = kw * YIELD[st.region], cov = prod / use;
    $$('.dz-top').forEach(i => i.classList.toggle('hide', i.dataset.sys !== st.sys));
    $('#sz-name').textContent = SYS[st.sys][0];
    $('#sz-sub').textContent = `${kw.toFixed(1)} kW · ${n} panels`;
    $('#sz-cov').innerHTML = `~${Math.round(Math.min(cov, 1.2) * 100)}%<small>of your use</small>`;
    $('#sz-why').textContent = SYS[st.sys][1];
    $('#sz-pay-why').textContent = PAY[st.pay];
    $('#sz-bill-v').textContent = '$' + st.bill + (st.bill >= 600 ? '+' : '') + '/mo';
    $('#sz-big').textContent = `${kw.toFixed(1)} kW · ${n} panels`;
    $('#sz-prod').textContent = `About ${fmt(prod)} kWh a year for a ${fmt(use)} kWh home`;
    const li = [];
    if (st.sys !== 'solar') li.push(st.backup === 'ess' ? 'Battery sized for essential circuits: fridge, lights, internet, outlets' : 'Whole-home backup: battery count set after we review your big loads');
    if (st.sys === 'gen') li.push('Standby generator on natural gas or propane');
    li.push({ cash: 'Paid in cash', loan: 'Financed with a solar loan', lease: 'Solar lease', ppa: 'Power purchase agreement (PPA)' }[st.pay]);
    li.push('Price comes in your reviewed proposal');
    $('#sz-list').innerHTML = li.map(t => `<li>${t}</li>`).join('');
    $('#sz-backup-row').hidden = st.sys === 'solar';
    $('#sz-bill-h').value = st.bill;
    $('#sz-goal-h').value = st.sys === 'solar' ? 'save' : 'both';
    const g = $('#sz-gen-h'); g.disabled = st.sys !== 'gen'; g.value = st.sys === 'gen' ? '1' : '';
    $$('.dz-quick .pill').forEach(b => b.setAttribute('aria-pressed', Number(b.dataset.b) === st.bill));
  };
  form.addEventListener('click', e => {
    const b = e.target.closest('[data-k] button'); if (!b) return;
    const k = b.closest('[data-k]').dataset.k; st[k] = b.dataset.v;
    $$(`[data-k=${k}] button`).forEach(x => x.setAttribute('aria-pressed', x === b));
    if (!started) { started = true; track('form_start', 'sizer'); }
    track('option_selected', 'sizer-' + k + '-' + b.dataset.v); render();
  });
  const bill = $('#sz-bill');
  bill.addEventListener('input', () => { st.bill = Number(bill.value); render(); });
  $$('.dz-quick .pill').forEach(b => b.addEventListener('click', () => { st.bill = Number(b.dataset.b); bill.value = st.bill; render(); }));
  const cmp = $('#sz-cmp'), stage = $('#sz-stage');
  const before = on => { stage.classList.toggle('show-before', on); cmp.classList.toggle('on', on); };
  cmp.addEventListener('pointerdown', () => before(true));
  ['pointerup', 'pointerleave', 'pointercancel', 'blur'].forEach(ev => cmp.addEventListener(ev, () => before(false)));
  cmp.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); before(true); } });
  cmp.addEventListener('keyup', () => before(false));
  form.addEventListener('submit', () => track('address_entered', 'sizer'));
  render();
})();
