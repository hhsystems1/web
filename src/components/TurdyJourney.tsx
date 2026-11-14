"use client";

import { useEffect } from 'react';

/**
 * Turdy's journey — ported from the Front Office demo
 * (hhsdemos site/front-office/index.html, single-file build).
 *
 * The ship flies in from deep space and hovers in the hero with Turdy
 * aboard. On scroll the empty ship flies away, Turdy jumps out, tucks
 * into a ball mid-air, and lands on node 01. He rolls down the glowing
 * route as a ball past each numbered stop (data-node), popping up to
 * wave at the copy at each one. After the last stop he hops into the
 * bottom-right corner and docks as the chat assistant. No idle wobble
 * anywhere — he is always either in the ship, travelling, or docked.
 *
 * Reduced motion: the ship and Turdy sit still in the hero, the route
 * is fully drawn, no arrival, no journey.
 */
export default function TurdyJourney() {
  useEffect(() => {
    const $ = <T extends HTMLElement = HTMLElement>(s: string, r: Document | Element = document) =>
      r.querySelector(s) as T | null;
    const $$ = <T extends HTMLElement = HTMLElement>(s: string, r: Document | Element = document) =>
      [...r.querySelectorAll(s)] as T[];
    const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

    const journey = $('#journey');
    const svg = $('#route') as unknown as SVGSVGElement | null;
    const track = $('#track') as unknown as SVGPathElement | null;
    const glow = $('#glow') as unknown as SVGPathElement | null;
    const core = $('#core-line') as unknown as SVGPathElement | null;
    const spark = $('#spark') as unknown as SVGCircleElement | null;
    const turdy = $('#turdy');
    const hey = $('#hey');
    const shipEl = $('#ship');
    if (!journey || !svg || !track || !glow || !core || !spark || !turdy || !hey || !shipEl) return;

    let L = 0;
    let samples: DOMPoint[] = [];
    let anchors: { s: number; l: number }[] = [];
    let top0 = 0;
    let nodesEls: { el: Element; l: number; x: number; y: number; side: number }[] = [];
    let heroSpot = { x: 0, y: 0 };
    let shipRect = { x: 0, y: 0, w: 0, h: 0 };
    let shipBusy = false;
    let docked = false;
    let greeted = false;
    let gT: ReturnType<typeof setTimeout> | null = null;

    const docXY = (el: Element) => {
      const r = el.getBoundingClientRect();
      return { x: r.left + r.width / 2 + scrollX, y: r.top + r.height / 2 + scrollY };
    };

    function build() {
      const jr = journey!.getBoundingClientRect();
      const top = jr.top + scrollY;
      const mobile = innerWidth <= 980;
      // The ship hovers in the hero with Turdy inside; his route starts at the cockpit and the line at node 01
      {
        const vw = innerWidth;
        const SRr = 528 / 760;
        const swr = $('#swirl')!.getBoundingClientRect();
        if (vw <= 760) {
          const btn = $('.hero .btn')!.getBoundingClientRect();
          const cue = $('.scroll-cue')!.getBoundingClientRect();
          const SW = Math.min(150, vw * 0.38);
          shipRect = {
            x: Math.max(btn.right + 4, vw - SW - 6) + scrollX,
            y: Math.max(btn.bottom - 6, cue.top - SW * SRr * 0.45) + scrollY,
            w: SW,
            h: SW * SRr,
          };
        } else {
          // Guard: a 0-wide anchor makes the ship 0x0 and invisible. The
          // anchor is absolutely positioned now, but never trust a 0 measure.
          const anchorW = Math.max(swr.width, 320);
          const SW = vw <= 980 ? 250 : Math.min(330, anchorW * 0.62);
          shipRect = {
            x: swr.left + scrollX + anchorW * 0.55 - SW / 2,
            y: Math.max(swr.top + scrollY - (vw <= 980 ? 10 : 70), 84),
            w: SW,
            h: SW * SRr,
          };
        }
        heroSpot = { x: shipRect.x + shipRect.w * 0.38, y: shipRect.y + shipRect.h * 0.66 };
      }
      const nodes = $$('[data-node]').map((n) => {
        const p = docXY(n);
        return { x: p.x, y: p.y - top, el: n };
      });
      if (!nodes.length) return;
      const n1 = nodes[0];
      let d = `M${n1.x},${n1.y}`;
      for (let i = 1; i < nodes.length; i++) {
        const a = nodes[i - 1];
        const b = nodes[i];
        const dy = b.y - a.y;
        if (i === 1 && !mobile) {
          // 01 -> 02: straight down the gutter, then curve over to the next stop
          d += ` C${a.x},${a.y + dy * 0.75} ${b.x},${b.y - dy * 0.3} ${b.x},${b.y}`;
        } else {
          const sw = mobile ? (i % 2 ? 14 : -14) : (i % 2 ? 46 : -46);
          d += ` C${a.x + sw},${a.y + dy * 0.5} ${b.x + sw},${b.y - dy * 0.5} ${b.x},${b.y}`;
        }
      }
      const h = journey!.offsetHeight;
      svg!.setAttribute('height', String(h));
      svg!.style.height = h + 'px';
      svg!.setAttribute('viewBox', `0 0 ${journey!.offsetWidth} ${h}`);
      [track!, glow!, core!].forEach((p) => p.setAttribute('d', d));
      L = core!.getTotalLength();
      samples = [];
      for (let s = 0; s <= L; s += 4) samples.push(core!.getPointAtLength(s));
      samples.push(core!.getPointAtLength(L));
      const near = (n: { x: number; y: number }) => {
        let best = 0;
        let bd = 1e9;
        samples.forEach((p, i) => {
          const dd = (p.x - n.x) ** 2 + (p.y - n.y) ** 2;
          if (dd < bd) {
            bd = dd;
            best = i;
          }
        });
        return Math.min(L, best * 4);
      };
      // scroll anchors: Turdy reaches each node when it sits a bit below mid-screen
      anchors = [{ s: 0, l: 0 }].concat(
        nodes.map((n) => ({ s: Math.max(1, n.y + top - innerHeight * 0.58), l: near(n) })),
      );
      for (let i = 1; i < anchors.length; i++)
        if (anchors[i].s <= anchors[i - 1].s) anchors[i].s = anchors[i - 1].s + 1;
      [glow!, core!].forEach((p) => {
        p.style.strokeDasharray = String(L);
      });
      const sideOf = (n: { el: Element; x: number }) => {
        const sec = n.el.closest('section');
        const t = sec?.querySelector('h2,h3');
        if (!t) return 1;
        const r = t.getBoundingClientRect();
        return r.left + r.width / 2 + scrollX >= n.x ? 1 : -1;
      };
      top0 = top;
      nodesEls = nodes.map((n) => ({ el: n.el, l: near(n), x: n.x, y: n.y, side: sideOf(n) }));
    }

    const DWELL = 0.22; // share of each section's scroll where Turdy stays put at a stop
    const stopAt = (y: number) => {
      for (let i = 2; i < anchors.length; i++) {
        const a = anchors[i - 1];
        const b = anchors[i];
        if (y <= b.s) {
          const t = clamp((y - a.s) / (b.s - a.s), 0, 1);
          if (t <= DWELL) return { at: i - 2, k: 0 };
          if (t >= 1 - DWELL) return { at: i - 1, k: 1 };
          return { at: -1, k: (t - DWELL) / (1 - 2 * DWELL) };
        }
      }
      return { at: nodesEls.length - 1, k: 1 };
    };
    const lenAtScroll = (y: number) => {
      if (anchors.length < 2 || y <= anchors[1].s) return 0;
      for (let i = 2; i < anchors.length; i++) {
        const a = anchors[i - 1];
        const b = anchors[i];
        if (y <= b.s) {
          const t = clamp((y - a.s) / (b.s - a.s), 0, 1);
          const k = clamp((t - DWELL) / (1 - 2 * DWELL), 0, 1);
          return lerp(a.l, b.l, k);
        }
      }
      return anchors[anchors.length - 1].l;
    };
    const pointAt = (l: number) => {
      const i = clamp(Math.round(l / 4), 0, samples.length - 1);
      return samples[i];
    };

    const RATIO = 960 / 590;

    function placeShip(fall: number) {
      if (!shipEl || !shipEl.isConnected || shipBusy) return;
      const R = shipRect;
      const vw = innerWidth;
      const vh = innerHeight;
      const x0 = R.x - scrollX;
      const y0 = R.y - scrollY;
      shipEl.style.width = R.w + 'px';
      shipEl.style.height = R.h + 'px';
      const d = clamp((fall - 0.06) / 0.5, 0, 1); // departure progress, scrubbed by scroll
      shipEl.classList.toggle('dropped', fall > 0.1);
      shipEl.classList.toggle('idle', d <= 0);
      if (d <= 0) {
        shipEl.style.opacity = '1';
        shipEl.style.transform = `translate(${x0}px,${y0}px)`;
        return;
      }
      const kt = Math.min(1, d / 0.3);
      const km = Math.max(0, (d - 0.2) / 0.8);
      const e = km * km;
      const flip = Math.cos(kt * Math.PI) || 0.001;
      const x = x0 + e * (vw * 0.92 - x0);
      const yy = y0 + e * (vh * 0.02 - y0) - Math.sin(km * Math.PI) * 40;
      const sc = 1 - 0.92 * (1 - Math.pow(1 - km, 3));
      shipEl.style.opacity = String(1 - Math.max(0, (d - 0.75) / 0.25));
      shipEl.style.transform = `translate(${x.toFixed(1)}px,${yy.toFixed(1)}px) scale(${(sc * flip).toFixed(3)},${sc.toFixed(3)}) rotate(${(-10 * e).toFixed(2)}deg)`;
    }

    function setDocked(on: boolean) {
      if (on === docked) return;
      docked = on;
      if (on && !greeted) {
        greeted = true;
        // The chat widget is the dock: show a short greeting near it, then hide
        const greet = $('#dock-greet');
        if (greet) {
          greet.classList.add('show');
          if (gT) clearTimeout(gT);
          gT = setTimeout(() => greet.classList.remove('show'), 5500);
        }
      }
    }

    function place() {
      if (!samples.length) return;
      const mobile = innerWidth <= 760;
      const HOP = 0.1; // share of the hero->01 scroll where Turdy is still sitting in the ship
      const fall = clamp(scrollY / Math.max(1, anchors[1] ? anchors[1].s : 1), 0, 1);
      const q = clamp((fall - HOP) / (1 - HOP), 0, 1);
      const fe = q * q * (3 - 2 * q);
      const base = innerWidth <= 760 ? 58 : innerWidth <= 980 ? 70 : 118;
      const H = lerp(shipRect.h * 0.95, base, fe);
      const W = H / RATIO;
      placeShip(fall);
      const btn = mobile ? 68 : 80;
      const margin = 18;
      const lastS = anchors[anchors.length - 1].s;
      const dockSpan = Math.max(320, innerHeight * 0.45);
      const y = scrollY;
      const l = lenAtScroll(y);
      // draw the route up to Turdy
      const drawn = clamp(l, 0, L);
      const lit = drawn;
      glow!.style.strokeDashoffset = String(L - lit);
      core!.style.strokeDashoffset = String(L - lit);
      const pt = pointAt(drawn);
      spark!.setAttribute('cx', String(pt.x));
      spark!.setAttribute('cy', String(pt.y));
      nodesEls.forEach((n) => n.el.classList.toggle('lit', drawn >= n.l - 6));
      // body position (viewport coords): feet on the route. He rolls as a
      // ball between stops, and pops up to wave at each numbered stop.
      let vx = pt.x - W / 2 - scrollX;
      let vy = pt.y + top0 - scrollY - H * 0.92;
      let h = H;
      let rot = 0;
      let pose = 'wave';
      let face = 1;
      if (fall < 1) {
        // jump out of the cockpit, tuck into a ball mid-air, land on node 01
        const hx = heroSpot.x - W / 2 - scrollX;
        const hy = heroSpot.y - scrollY - H * 0.92;
        // curve: drop down on the ship's side first, then sweep over to 01 below the headline
        const nx = vx;
        const ny = vy;
        const cx = hx;
        const cy = ny;
        const u = 1 - fe;
        vx = u * u * hx + 2 * u * fe * cx + fe * fe * nx;
        vy = u * u * hy + 2 * u * fe * cy + fe * fe * ny - Math.sin(fe * Math.PI) * (mobile ? 30 : 50);
        face = vx < hx - 2 ? -1 : 1;
        pose = q <= 0 ? 'wave' : fe < 0.45 ? (face > 0 ? 'right' : 'left') : 'ball';
      } else {
        const st = stopAt(y);
        if (st.at >= 0) {
          // standing at a stop: just above the number, waving at its text
          const n = nodesEls[st.at];
          face = n.side;
          vx = n.x - W / 2 - scrollX - face * W * 0.45;
          vy = n.y + top0 - scrollY - H - (mobile ? 18 : 24);
          pose = 'wave';
        } else {
          // travelling between stops: roll along the line as a ball, one
          // full roll per leg — a roll, not a somersault
          const a = pointAt(drawn - 12);
          const b = pointAt(drawn + 12);
          face = b.x - a.x < -2 ? -1 : 1;
          pose = 'ball';
          vy -= Math.sin(st.k * Math.PI) * H * 0.18;
          rot = st.k * 360 * face;
        }
      }
      // after the last stop, hop into the chat dock (bottom-right, where Ask Turdy lives)
      let k = 0;
      if (y > lastS) {
        k = clamp((y - lastS) / dockSpan, 0, 1);
        const eh = btn * 1.2;
        const ex = innerWidth - margin - btn / 2 - eh / RATIO / 2;
        const ey = innerHeight - margin - btn / 2 - eh / 2;
        const e = k * k * (3 - 2 * k);
        vx = lerp(vx, ex, e);
        vy = lerp(vy, ey, e) - Math.sin(e * Math.PI) * 120;
        h = lerp(h, eh, e);
        pose = k > 0.96 ? 'docked' : ex > vx ? 'right' : 'left';
        rot = 0;
      }
      // the route gutter is near the left edge: never let him slide off it
      vx = Math.max(vx, 8);
      const w = h / RATIO;
      turdy!.style.width = w + 'px';
      turdy!.style.height = h + 'px';
      turdy!.dataset.pose = pose;
      turdy!.classList.toggle('face-left', face < 0);
      turdy!.classList.toggle('in-ship', !!shipEl && fall <= HOP);
      turdy!.style.transform = `translate(${vx.toFixed(1)}px,${vy.toFixed(1)}px) rotate(${rot.toFixed(1)}deg)`;
      // greeting in the hero, above the ship
      hey!.style.opacity = y < 30 && !shipBusy ? '1' : '0';
      hey!.style.left = shipRect.x - scrollX + (mobile ? -6 : -40) + 'px';
      hey!.style.top = shipRect.y - scrollY - (mobile ? 18 : 8) + 'px';
      setDocked(y > lastS + dockSpan * 0.96);
    }

    function init() {
      build();
      place();
    }

    /* ---------- Arrival: on load the ship flies in from deep space and hovers with Turdy aboard ---------- */
    const arrival = () => {
      const ship = shipEl;
      const trail = $('#trail') as HTMLCanvasElement | null;
      if (!ship || !trail) return;
      if (scrollY > 30 && !location.hash) {
        try {
          scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
        } catch {
          /* ignore */
        }
      }
      const R = () => ({ x: shipRect.x - scrollX, y: shipRect.y - scrollY, w: shipRect.w, h: shipRect.h });
      if (reduce || scrollY > 30) {
        trail.remove();
        ship.style.opacity = '1';
        place();
        return;
      }
      shipBusy = true;
      ship.style.opacity = '0';
      let done = false;
      let raf = 0;
      let parts: { x: number; y: number; r: number; a: number; vx: number; vy: number }[] = [];
      const tc = trail.getContext('2d');
      const end = () => {
        if (done) return;
        done = true;
        cancelAnimationFrame(raf);
        shipBusy = false;
        trail.remove();
        ['wheel', 'touchmove', 'keydown'].forEach((ev) => removeEventListener(ev, end));
        place();
      };
      ['wheel', 'touchmove', 'keydown'].forEach((ev) => addEventListener(ev, end, { passive: true })); // scrolling takes over immediately
      const load = (img: HTMLImageElement) =>
        new Promise<void>((res, rej) => {
          if (img.complete && img.naturalWidth) return res();
          img.addEventListener('load', () => res(), { once: true });
          img.addEventListener('error', () => rej(new Error('ship image failed')), { once: true });
        });
      const giveUp = setTimeout(end, 10000);
      Promise.all([...ship.querySelectorAll('img')].map(load))
        .then(() => {
          clearTimeout(giveUp);
          if (!done) fly();
        })
        .catch(end);
      const bez = (a: number, b: number, c: number, d: number, t: number) => {
        const u = 1 - t;
        return u * u * u * a + 3 * u * u * t * b + 3 * u * t * t * c + t * t * t * d;
      };
      const ease = (t: number) => 1 - Math.pow(1 - t, 3);
      const inOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
      function fly() {
        const d = Math.min(2, devicePixelRatio || 1);
        trail!.width = innerWidth * d;
        trail!.height = innerHeight * d;
        tc!.setTransform(d, 0, 0, d, 0, 0);
        const r = R();
        const vw = innerWidth;
        const vh = innerHeight;
        const mobile = vw <= 760;
        const SW = r.w;
        const SH = r.h;
        ship.style.width = SW + 'px';
        ship.style.height = SH + 'px';
        const P = [
          { x: vw * (mobile ? 0.95 : 0.86), y: vh * (mobile ? 0.18 : 0.04) },
          { x: vw * (mobile ? 0.98 : 0.97), y: vh * (mobile ? 0.4 : 0.34) },
          { x: r.x + SW * 1.1, y: r.y + SH * 0.9 },
          { x: r.x, y: r.y },
        ];
        const T = 2600;
        const t0 = performance.now();
        const thr = (x: number, y: number, sc: number) =>
          [
            [0.93, 0.48],
            [0.93, 0.76],
          ].forEach(([fx, fy]) =>
            parts.push({
              x: x + (fx - 0.5) * SW * sc + SW / 2,
              y: y + (fy - 0.5) * SH * sc + SH / 2,
              r: (2 + Math.random() * 3) * sc + 1,
              a: 0.9,
              vx: 1.5 + Math.random(),
              vy: (Math.random() - 0.5) * 0.6,
            }),
          );
        const frame = (now: number) => {
          if (done) return;
          const k = Math.min(1, (now - t0) / T);
          const e = ease(k);
          const m = inOut(k);
          if (k < 1) {
            const x = bez(P[0].x, P[1].x, P[2].x, P[3].x, m);
            const y = bez(P[0].y, P[1].y, P[2].y, P[3].y, m);
            const sc = 0.08 + 0.92 * e * e;
            const rot = -14 * (1 - e) + Math.sin(k * 9) * 3 * (1 - e);
            ship.style.opacity = String(Math.min(1, k * 4));
            ship.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px) scale(${sc.toFixed(3)}) rotate(${rot.toFixed(2)}deg)`;
            thr(x, y, sc);
          }
          tc!.clearRect(0, 0, vw, vh);
          tc!.globalCompositeOperation = 'lighter';
          parts = parts.filter((p) => (p.a -= 0.022) > 0);
          for (const p of parts) {
            p.x += p.vx;
            p.y += p.vy;
            tc!.globalAlpha = p.a;
            tc!.fillStyle = p.a > 0.6 ? '#e6fffd' : '#35f0ff';
            tc!.beginPath();
            tc!.arc(p.x, p.y, p.r * (1.4 - p.a * 0.4), 0, 6.283);
            tc!.fill();
          }
          tc!.globalAlpha = 1;
          tc!.globalCompositeOperation = 'source-over';
          if (k >= 1) {
            if (shipBusy) {
              shipBusy = false;
              place();
            }
            if (!parts.length) return end();
          }
          raf = requestAnimationFrame(frame);
        };
        raf = requestAnimationFrame(frame);
      }
    };

    let tick = false;
    const onScroll = () => {
      if (!tick) {
        tick = true;
        requestAnimationFrame(() => {
          place();
          tick = false;
        });
      }
    };
    let rT: ReturnType<typeof setTimeout> | undefined;
    const onResize = () => {
      clearTimeout(rT);
      rT = setTimeout(init, 120);
    };

    if (reduce) {
      init();
      turdy.dataset.pose = 'wave';
      [glow, core].forEach((p) => {
        p.style.strokeDashoffset = '0';
      });
      const still = () => {
        const inShip = scrollY < 40;
        const H = innerWidth <= 760 ? 110 : 170;
        const W = H / RATIO;
        const x = heroSpot.x - W / 2 - scrollX;
        const yy = heroSpot.y - scrollY - H * 0.92;
        turdy.classList.toggle('in-ship', inShip);
        turdy.dataset.pose = 'wave';
        if (shipEl) {
          Object.assign(shipEl.style, {
            width: shipRect.w + 'px',
            height: shipRect.h + 'px',
            opacity: inShip ? '1' : '0',
            transform: `translate(${shipRect.x - scrollX}px,${shipRect.y - scrollY}px)`,
          });
          shipEl.classList.remove('dropped');
        }
        turdy.style.width = W + 'px';
        turdy.style.height = H + 'px';
        turdy.style.transform = `translate(${x}px,${yy}px)`;
        if (innerWidth <= 760) {
          hey.style.left = x - 70 + 'px';
          hey.style.top = yy - 26 + 'px';
        } else {
          hey.style.left = x - 130 + 'px';
          hey.style.top = yy + H * 0.05 + 'px';
        }
      };
      still();
      addEventListener('scroll', still, { passive: true });
      addEventListener('resize', () => {
        init();
        still();
      });
    } else {
      addEventListener('scroll', onScroll, { passive: true });
      addEventListener('resize', onResize);
      document.fonts?.ready.then(init);
      addEventListener('load', init);
      // images loading later can shift section heights: rebuild once settled
      setTimeout(init, 1500);
      init();
      arrival();
    }

    return () => {
      removeEventListener('scroll', onScroll);
      removeEventListener('resize', onResize);
      if (gT) clearTimeout(gT);
    };
  }, []);

  return (
    <>
      <svg id="route" aria-hidden="true">
        <defs>
          <linearGradient id="routeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8fb0ff" />
            <stop offset="0.4" stopColor="#5b83ff" />
            <stop offset="1" stopColor="#1f4bff" />
          </linearGradient>
          <filter id="blur6" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
          <filter id="blur2">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>
        <path className="track" id="track" />
        <path className="glow" id="glow" />
        <path className="core" id="core-line" />
        <circle className="spark" id="spark" r="5" />
      </svg>
      <canvas id="trail" aria-hidden="true" />
      <div id="ship" aria-hidden="true">
        <div className="bob">
          {/* Ship + pose images live in public/ — uploaded via the GitHub web
              UI (the connector can't push binary files). */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="full"
            src="/ship-full.webp"
            alt=""
            decoding="async"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="empty"
            src="/ship-empty.webp"
            alt=""
            decoding="async"
          />
        </div>
      </div>
      <div id="turdy" data-pose="wave" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="p-wave-a" src="/turdy-wave-a.webp" alt="" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="p-wave-b" src="/turdy-wave-b.webp" alt="" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="p-right" src="/turdy-right.webp" alt="" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="p-left" src="/turdy-left.webp" alt="" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="p-back" src="/turdy-back.webp" alt="" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="p-ball" src="/turdy-ball.webp" alt="" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="p-point"
          src="/turdy-point.webp"
          alt=""
        />
      </div>
      <p className="hey" id="hey" aria-hidden="true">
        Hey there!
      </p>
      <div className="dock-greet" id="dock-greet" role="status">
        Hey there! 👋 I&apos;m Turdy, your HHS assistant.
      </div>
    </>
  );
}
