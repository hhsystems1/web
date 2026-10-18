// Phone screens for the HHS story, drawn on a 2D canvas so the same art works in 3D and in the flat fallback.
// Every name, number and message here is a sample for illustration, never a real customer.
export const SW = 600, SH = 1300;
const F = '"Inter", system-ui, -apple-system, "Segoe UI", sans-serif';
const FD = '"Inter Tight", "Inter", system-ui, sans-serif';

function rr(x, a, b, w, h, r) { x.beginPath(); x.roundRect(a, b, w, h, r); }
function text(x, s, a, b, size, weight = 500, color = '#fff', align = 'left', font = F) { x.font = `${weight} ${size}px ${font}`; x.fillStyle = color; x.textAlign = align; x.textBaseline = 'alphabetic'; x.fillText(s, a, b); }
function wrap(x, s, a, b, maxW, size, lh, weight = 500, color = '#fff') {
  x.font = `${weight} ${size}px ${F}`; x.fillStyle = color; x.textAlign = 'left';
  let line = '', y = b; for (const w of s.split(' ')) { const t = line ? line + ' ' + w : w; if (x.measureText(t).width > maxW && line) { x.fillText(line, a, y); line = w; y += lh; } else line = t; } if (line) x.fillText(line, a, y); return y;
}
function status(x, dark = true) { const c = dark ? '#fff' : '#0b1020'; text(x, '7:42', 64, 70, 30, 600, c); x.fillStyle = c; rr(x, 470, 50, 60, 26, 8); x.globalAlpha = .9; x.fill(); x.globalAlpha = 1; }
function bg(x, a, b) { const g = x.createLinearGradient(0, 0, 0, SH); g.addColorStop(0, a); g.addColorStop(1, b); x.fillStyle = g; x.fillRect(0, 0, SW, SH); }
function circleBtn(x, cx, cy, r, color, icon) { x.fillStyle = color; x.beginPath(); x.arc(cx, cy, r, 0, 7); x.fill(); x.strokeStyle = '#fff'; x.lineWidth = 7; x.lineCap = 'round';
  x.save(); x.translate(cx, cy); if (icon === 'down') x.rotate(2.36); x.beginPath(); x.moveTo(-18, -8); x.quadraticCurveTo(0, -20, 18, -8); x.stroke(); x.beginPath(); x.moveTo(-18, -8); x.lineTo(-14, 6); x.moveTo(18, -8); x.lineTo(14, 6); x.stroke(); x.restore(); }
function card(x, a, b, w, h, fill = 'rgba(255,255,255,.12)', r = 28) { rr(x, a, b, w, h, r); x.fillStyle = fill; x.fill(); }

const screens = {
  incoming(x) {
    bg(x, '#1b2a4a', '#0a0f1e'); status(x);
    text(x, 'Incoming call', 300, 300, 30, 500, 'rgba(255,255,255,.7)', 'center');
    text(x, '(361) 555-0148', 300, 370, 54, 600, '#fff', 'center', FD);
    text(x, 'Victoria, TX', 300, 420, 28, 400, 'rgba(255,255,255,.6)', 'center');
    circleBtn(x, 150, 1080, 64, '#ff3b30', 'down'); circleBtn(x, 450, 1080, 64, '#34c759', 'up');
    text(x, 'Decline', 150, 1180, 26, 500, 'rgba(255,255,255,.8)', 'center'); text(x, 'Accept', 450, 1180, 26, 500, 'rgba(255,255,255,.8)', 'center');
  },
  missed(x) {
    bg(x, '#141c33', '#06080f'); status(x);
    text(x, 'Tuesday', 300, 220, 32, 500, 'rgba(255,255,255,.75)', 'center');
    text(x, '7:43', 300, 370, 150, 700, '#fff', 'center', FD);
    card(x, 36, 470, 528, 150); text(x, 'PHONE', 80, 520, 22, 600, 'rgba(255,255,255,.6)'); text(x, 'now', 520, 520, 22, 500, 'rgba(255,255,255,.6)', 'right');
    text(x, 'Missed call', 80, 566, 32, 600); text(x, '(361) 555-0148', 80, 602, 28, 400, 'rgba(255,255,255,.8)');
  },
  search(x) {
    bg(x, '#f6f7fb', '#eef1f7'); status(x, false);
    rr(x, 36, 120, 528, 76, 38); x.fillStyle = '#fff'; x.fill(); text(x, 'remodeler near me', 80, 168, 28, 500, '#4a5468');
    const rows = ['Another company', 'The next name on the list', 'Someone who picked up'];
    rows.forEach((r, i) => { const y = 250 + i * 190; card(x, 36, y, 528, 160, '#fff', 24); text(x, r, 70, y + 62, 30, 600, '#0b1020');
      text(x, 'Open now, nearby', 70, y + 104, 24, 400, '#6b7489'); rr(x, 410, y + 46, 120, 64, 32); x.fillStyle = i === 0 ? '#34c759' : '#2f7bff'; x.fill();
      text(x, i === 0 ? 'Calling' : 'Call', 470, y + 88, 24, 600, '#fff', 'center'); });
  },
  log(x) {
    bg(x, '#0b0f1c', '#0b0f1c'); status(x); text(x, 'Recents', 48, 190, 56, 700, '#fff', 'left', FD);
    const rows = [['(361) 555-0148', 'Tue 7:42 PM'], ['(361) 555-0192', 'Tue 12:10 PM'], ['(512) 555-0117', 'Mon 6:05 PM'], ['(361) 555-0163', 'Sat 9:30 AM'], ['(830) 555-0181', 'Fri 5:48 PM'], ['(361) 555-0129', 'Fri 8:02 AM'], ['(979) 555-0155', 'Thu 7:15 PM']];
    rows.forEach(([n, t], i) => { const y = 270 + i * 120; text(x, n, 48, y, 34, 600, '#ff453a'); text(x, 'missed', 48, y + 40, 24, 400, 'rgba(255,255,255,.5)'); text(x, t, 552, y, 24, 400, 'rgba(255,255,255,.5)', 'right');
      x.fillStyle = 'rgba(255,255,255,.08)'; x.fillRect(48, y + 64, 504, 2); });
  },
  inbox(x) {
    bg(x, '#ffffff', '#ffffff'); status(x, false); text(x, 'Inbox', 48, 190, 56, 700, '#0b1020', 'left', FD);
    const rows = [['Website form', 'New quote request', '2 days ago'], ['Website form', 'Do you service Port Lavaca?', '3 days ago'], ['Website form', 'Estimate for a bathroom', '5 days ago'], ['Website form', 'Still looking for someone', '1 week ago']];
    rows.forEach(([f, s, t], i) => { const y = 270 + i * 170; x.fillStyle = '#2f7bff'; x.beginPath(); x.arc(62, y - 10, 9, 0, 7); x.fill();
      text(x, f, 90, y, 30, 700, '#0b1020'); text(x, t, 552, y, 22, 400, '#6b7489', 'right'); text(x, s, 90, y + 44, 27, 500, '#2b3245'); text(x, 'Hi, I filled out your form and wanted to…', 90, y + 84, 24, 400, '#6b7489');
      x.fillStyle = '#eceff5'; x.fillRect(48, y + 112, 504, 2); });
  },
  think(x) {
    bg(x, '#0d1426', '#05070f'); status(x);
    card(x, 36, 470, 528, 220, 'rgba(255,255,255,.1)');
    text(x, 'What if', 300, 560, 48, 700, '#fff', 'center', FD); text(x, 'every caller', 300, 620, 48, 700, '#3fd6c6', 'center', FD); text(x, 'got an answer?', 300, 680 - 2, 40, 600, '#fff', 'center', FD);
  },
  agent(x) {
    bg(x, '#0b1224', '#060a14'); status(x);
    text(x, 'AI voice agent', 300, 170, 30, 600, '#3fd6c6', 'center'); text(x, 'On call, 7:42 PM', 300, 210, 24, 400, 'rgba(255,255,255,.6)', 'center');
    const lines = (s, maxW) => { let n = 1, line = ''; for (const w of s.split(' ')) { const t = line ? line + ' ' + w : w; if (x.measureText(t).width > maxW && line) { n++; line = w; } else line = t; } return n; };
    const bub = (s, who, y) => { x.font = `500 27px ${F}`; const w = Math.min(440, x.measureText(s).width + 56); const left = who === 'caller'; const a = left ? 40 : SW - 40 - w;
      const h = 30 + lines(s, w - 56) * 36; card(x, a, y, w, h, left ? 'rgba(255,255,255,.12)' : '#2f7bff', 26); wrap(x, s, a + 28, y + 46, w - 56, 27, 36, 500, '#fff'); return y + h + 22; };
    let y = 280;
    y = bub('Hi, do you do kitchen remodels?', 'caller', y);
    y = bub('We do. Can I get your name and the best time for a call back?', 'agent', y);
    y = bub('Maria. Any time after 5.', 'caller', y);
    y = bub('Got it, Maria. I’m sending this to the team right now.', 'agent', y);
    card(x, 110, y + 40, 380, 70, 'rgba(63,214,198,.18)', 35); text(x, 'Sent to owner', 300, y + 86, 26, 600, '#3fd6c6', 'center');
  },
  site(x) {
    bg(x, '#ffffff', '#f3f6fb'); status(x, false);
    x.fillStyle = '#0b1020'; x.fillRect(0, 110, SW, 90); text(x, 'Your Business', 48, 168, 30, 700, '#fff');
    text(x, 'What do you', 48, 300, 52, 800, '#0b1020', 'left', FD); text(x, 'need help with?', 48, 360, 52, 800, '#0b1020', 'left', FD);
    text(x, 'Step 1 of 2', 48, 420, 24, 500, '#6b7489');
    ['Kitchen', 'Bathroom', 'Whole home', 'Something else'].forEach((o, i) => { const y = 460 + i * 112; const on = i === 0; rr(x, 48, y, 504, 92, 22); x.fillStyle = on ? 'rgba(47,123,255,.1)' : '#fff'; x.fill();
      x.lineWidth = on ? 4 : 2; x.strokeStyle = on ? '#2f7bff' : '#dfe4ee'; x.stroke(); text(x, o, 84, y + 58, 30, 600, '#0b1020'); });
    rr(x, 48, 1000, 504, 92, 46); x.fillStyle = '#2f7bff'; x.fill(); text(x, 'Next', 300, 1058, 30, 700, '#fff', 'center');
  },
  crm(x) {
    bg(x, '#f5f7fb', '#f5f7fb'); status(x, false); text(x, 'Leads', 48, 190, 56, 700, '#0b1020', 'left', FD);
    const chip = (s, a, b, c) => { x.font = `600 22px ${F}`; const w = x.measureText(s).width + 32; rr(x, a, b, w, 40, 20); x.fillStyle = c + '22'; x.fill(); text(x, s, a + 16, b + 28, 22, 600, c); };
    [['Maria, kitchen remodel', 'New', '#2f7bff', 'Call back today after 5 PM'], ['Website form, bathroom', 'Called', '#8f7bff', 'Send estimate by Thursday'], ['(361) 555-0192', 'Booked', '#1fa896', 'Estimate Friday 10 AM']]
      .forEach(([n, st, c, nx], i) => { const y = 250 + i * 250; card(x, 36, y, 528, 220, '#fff', 26); text(x, n, 70, y + 66, 30, 700, '#0b1020'); chip(st, 70, y + 92, c);
        text(x, 'Next step', 70, y + 172, 22, 500, '#6b7489'); text(x, nx, 70, y + 202, 25, 600, '#2b3245'); });
  },
  dash(x) {
    bg(x, '#0b1224', '#060a14'); status(x); text(x, 'This week', 48, 190, 56, 700, '#fff', 'left', FD);
    text(x, 'Sample view', 48, 236, 24, 500, 'rgba(255,255,255,.5)');
    const labels = ['Calls', 'Leads', 'Booked'], cols = ['#5fd2ff', '#8f7bff', '#3fd6c6'];
    [0.86, 0.62, 0.4].forEach((v, i) => { const y = 320 + i * 150; text(x, labels[i], 48, y, 28, 600, '#fff'); rr(x, 48, y + 24, 504, 40, 20); x.fillStyle = 'rgba(255,255,255,.08)'; x.fill(); rr(x, 48, y + 24, 504 * v, 40, 20); x.fillStyle = cols[i]; x.fill(); });
    card(x, 36, 800, 528, 300, 'rgba(255,255,255,.06)'); text(x, 'Where leads came from', 70, 860, 26, 600, '#fff');
    [['Google', 0.7], ['Website', 0.5], ['Referrals', 0.3]].forEach(([n, v], i) => { const y = 920 + i * 60; text(x, n, 70, y, 24, 500, 'rgba(255,255,255,.75)'); x.fillStyle = '#2f7bff'; rr(x, 230, y - 22, 290 * v, 26, 13); x.fill(); });
  },
  hhs(x, logo) {
    bg(x, '#070d1c', '#04070f'); status(x);
    if (logo) { rr(x, 200, 380, 200, 200, 48); x.fillStyle = '#fff'; x.fill(); x.save(); rr(x, 210, 390, 180, 180, 40); x.clip(); x.drawImage(logo, 210, 390, 180, 180); x.restore(); }
    text(x, 'Helping Hands', 300, 690, 54, 800, '#fff', 'center', FD); text(x, 'Systems', 300, 752, 54, 800, '#fff', 'center', FD);
    text(x, 'Victoria, Texas', 300, 820, 28, 500, '#9aa7c2', 'center');
  },
  preview(x) {
    bg(x, '#070d1c', '#04070f'); status(x);
    card(x, 36, 260, 528, 640, 'rgba(255,255,255,.06)');
    [['Find the gap', 1], ['Build the fix', 1], ['Preview it working', 1], ['Go live when you approve', 0]].forEach(([s, done], i) => { const y = 340 + i * 140;
      x.fillStyle = done ? '#3fd6c6' : 'rgba(255,255,255,.12)'; x.beginPath(); x.arc(100, y, 30, 0, 7); x.fill();
      if (done) { x.strokeStyle = '#04070f'; x.lineWidth = 7; x.lineCap = 'round'; x.beginPath(); x.moveTo(86, y + 1); x.lineTo(97, y + 12); x.lineTo(116, y - 10); x.stroke(); }
      text(x, s, 150, y + 11, 30, 600, done ? '#fff' : 'rgba(255,255,255,.6)'); });
  },
  ask(x) {
    bg(x, '#070d1c', '#04070f'); status(x); text(x, 'What’s slipping?', 48, 200, 52, 800, '#fff', 'left', FD);
    ['Missed calls', 'My website', 'Follow-up', 'My numbers'].forEach((o, i) => { const y = 270 + i * 130; rr(x, 48, y, 504, 104, 24); x.fillStyle = 'rgba(255,255,255,.06)'; x.fill(); x.lineWidth = 2; x.strokeStyle = 'rgba(255,255,255,.18)'; x.stroke(); text(x, o, 84, y + 64, 32, 600, '#fff'); });
  },
};

// draws one screen with rounded corners on a transparent canvas
export function drawScreen(canvas, id, assets = {}) {
  const x = canvas.getContext('2d'); canvas.width = SW; canvas.height = SH;
  x.clearRect(0, 0, SW, SH); x.save(); rr(x, 0, 0, SW, SH, 70); x.clip();
  (screens[id] || screens.incoming)(x, assets.logo);
  x.restore();
}
