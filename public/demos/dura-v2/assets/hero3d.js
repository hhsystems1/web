// Dura v2 hero: real-time 3D "drone" flyover of a concept car, tire goes from faded to coated.
// Model: "Car Concept", Khronos glTF Sample Assets, CC BY 4.0 (from a CC0 model by Unity Fan). Optimized for web.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const hx = document.getElementById('hx');
const stage = hx && hx.querySelector('.hx-stage');
const fail = why => { hx && hx.dispatchEvent(new CustomEvent('hx:fail', { detail: why })); };

(async () => {
  if (!hx) return;
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canvas = document.createElement('canvas');
  canvas.className = 'hx-gl';
  canvas.setAttribute('aria-hidden', 'true');
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' }); }
  catch (e) { return fail('webgl'); }
  const phone = () => innerWidth <= 860;
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, phone() ? 1.5 : 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.95;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);
  scene.fog = new THREE.Fog(0x000000, 9, 22);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;

  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);

  // studio floor: dark gloss, soft contact shadow, red under-glow
  const glowTex = (inner, outer) => { const c = document.createElement('canvas'); c.width = c.height = 256; const g = c.getContext('2d');
    const r = g.createRadialGradient(128, 128, 0, 128, 128, 128); r.addColorStop(0, inner); r.addColorStop(1, outer); g.fillStyle = r; g.fillRect(0, 0, 256, 256);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; };
  const floor = new THREE.Mesh(new THREE.CircleGeometry(30, 64), new THREE.MeshStandardMaterial({ color: 0x030303, roughness: 0.75, metalness: 0, envMapIntensity: 0.12 }));
  floor.rotation.x = -Math.PI / 2; scene.add(floor);
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: glowTex('rgba(0,0,0,0.95)', 'rgba(0,0,0,0)'), transparent: true, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2; shadow.position.y = 0.003; scene.add(shadow);
  const glow = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: glowTex('rgba(215,38,30,0.55)', 'rgba(215,38,30,0)'), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  glow.rotation.x = -Math.PI / 2; glow.position.y = 0.002; scene.add(glow);
  const key = new THREE.DirectionalLight(0xffffff, 1.4); key.position.set(4, 8, 3); scene.add(key);
  const rim = new THREE.DirectionalLight(0xff3b30, 0.9); rim.position.set(-6, 2, -5); scene.add(rim);

  stage.appendChild(canvas);

  let gltf;
  try { gltf = await new GLTFLoader().loadAsync(hx.dataset.model || '3d/car.glb'); }
  catch (e) { canvas.remove(); return fail('model'); }
  const car = gltf.scene;

  // look: gloss black paint; tires start faded
  const tires = [];
  car.traverse(o => {
    if (!o.isMesh) return;
    const mats = Array.isArray(o.material) ? o.material : [o.material];
    mats.forEach(m => {
      const n = m.name || '';
      if (/^Paint/.test(n)) { m.color.set(0x0a0a0b); m.metalness = 0.55; m.roughness = 0.22; if ('clearcoat' in m) { m.clearcoat = 1; m.clearcoatRoughness = 0.04; } if (m.iridescence !== undefined) m.iridescence = 0; }
      if (/^Tire/.test(n) && !m.userData.dura) {
        if (m.map) { m.map = null; m.needsUpdate = true; }   // drop sidewall decal texture (third-party logo)
        m.userData.dura = { color: m.color.clone(), rough: m.roughness };
        tires.push(m);
      }
    });
  });
  if (!tires.length) console.warn('hero3d: no tire materials found');

  // centre and measure
  const box = new THREE.Box3().setFromObject(car);
  const size = box.getSize(new THREE.Vector3()), ctr = box.getCenter(new THREE.Vector3());
  car.position.x -= ctr.x; car.position.z -= ctr.z; car.position.y -= box.min.y;
  scene.add(car);
  const L = Math.max(size.x, size.z), H = size.y;
  scene.fog.near = L * 7.5; scene.fog.far = L * 16; floor.scale.setScalar(L * 0.35);
  const longX = size.x > size.z; // which axis is the car's length
  shadow.scale.set(longX ? L * 1.25 : size.x * 1.6, longX ? size.z * 1.6 : L * 1.25, 1);
  glow.scale.set(longX ? L * 1.9 : size.x * 2.6, longX ? size.z * 2.6 : L * 1.9, 1);
  // a front wheel to finish on: lowest tire mesh furthest along +length
  let wheel = new THREE.Vector3(longX ? L * 0.32 : size.x * 0.45, H * 0.22, longX ? size.z * 0.45 : L * 0.32);
  car.updateMatrixWorld(true);
  const wps = [];
  car.traverse(o => { if (o.isMesh && (Array.isArray(o.material) ? o.material : [o.material]).some(m => tires.includes(m))) { const b = new THREE.Box3().setFromObject(o); const c = b.getCenter(new THREE.Vector3()); if (b.getSize(new THREE.Vector3()).length() < L * 0.6) wps.push(c); } });
  if (wps.length) { wps.sort((a, b) => (longX ? b.x - a.x : b.z - a.z) || (b.z + b.x - a.z - a.x)); wheel = wps[0]; }

  // drone path in spherical coords around the car
  const look = new THREE.Vector3(0, H * 0.42, 0);
  const wheelAz = Math.atan2(wheel.x, wheel.z);              // azimuth that faces the wheel
  const endAz = wheelAz + 0.62, startAz = endAz - Math.PI * 2 - 0.9;
  const R0 = L * 6.5, R1 = L * (phone() ? 1.7 : 3.5);
  const P0 = 0.08, P1 = Math.PI / 2 - 0.2;                  // straight-down high -> low and level
  const ease = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const DUR = 6.2;
  let t0 = performance.now(), flying = !still, idleAz = 0;
  const place = (az, pol, r, tgt) => {
    camera.position.set(Math.sin(pol) * Math.sin(az) * r, Math.cos(pol) * r + 0.05, Math.sin(pol) * Math.cos(az) * r);
    camera.lookAt(tgt);
  };
  const tgtEnd = new THREE.Vector3(wheel.x * 0.2, H * 0.4, wheel.z * 0.2);

  // tire state follows the HUD classes that v2.js sets on #hx
  let gloss = 0, sheen = 0;
  const dull = new THREE.Color(0x3a332c), black = new THREE.Color(0x0c0c0c);
  new MutationObserver(() => { if (hx.classList.contains('pulse')) sheen = 1; }).observe(hx, { attributes: true, attributeFilter: ['class'] });

  const resize = () => {
    const w = canvas.clientWidth, h = canvas.clientHeight; if (!w || !h) return;
    renderer.setSize(w, h, false); camera.aspect = w / h;
    // desktop: push the car to the right of the headline
    if (!phone()) camera.setViewOffset(w, h, -w * 0.17, h * 0.16, w, h); else camera.clearViewOffset();
    camera.fov = phone() ? 40 : 30; camera.updateProjectionMatrix();
  };
  addEventListener('resize', resize);

  let visible = true, raf = 0, last = performance.now(), fpsN = 0;
  const frame = now => {
    raf = 0; fpsN = Math.round(1000 / Math.max(1, now - last)); const dt = Math.min(0.05, (now - last) / 1000); last = now;
    const tt = flying ? Math.min(1, (now - t0) / 1000 / DUR) : 1;
    const e = ease(tt);
    if (flying || tt < 1) {
      const az = startAz + (endAz - startAz) * e, pol = P0 + (P1 - P0) * ease(Math.min(1, tt * 1.15)), r = R0 + (R1 - R0) * e;
      place(az, pol, r, new THREE.Vector3().lerpVectors(look, tgtEnd, e));
      if (tt >= 1) { flying = false; idleAz = 0; hx.dispatchEvent(new CustomEvent('hx:landed')); }
    } else {
      idleAz += dt * 0.06;                                       // slow drift after landing
      place(endAz + Math.sin(idleAz) * 0.35, P1 - 0.02, R1 * (1 + Math.sin(idleAz * 0.7) * 0.04), tgtEnd);
    }
    const want = hx.classList.contains('after') ? 1 : 0;
    gloss += (want - gloss) * Math.min(1, dt * 2.6);
    sheen = Math.max(0, sheen - dt * 2.2);
    tires.forEach(m => { const d = m.userData.dura; m.color.copy(dull).lerp(black, gloss); m.roughness = THREE.MathUtils.lerp(1, 0.18, gloss) - sheen * 0.12; if ('clearcoat' in m) { m.clearcoat = gloss; m.clearcoatRoughness = 0.06; } m.envMapIntensity = 1 + gloss * 1.6 + sheen * 2; });
    glow.material.opacity = 0.55 + gloss * 0.45;
    renderer.render(scene, camera);
    if (visible) raf = requestAnimationFrame(frame);
  };
  const run = () => { if (!raf && visible) { last = performance.now(); raf = requestAnimationFrame(frame); } };
  new IntersectionObserver(([en]) => { visible = en.isIntersecting && !document.hidden; run(); }).observe(hx);
  document.addEventListener('visibilitychange', () => { visible = !document.hidden; run(); });

  hx.addEventListener('hx:play', () => { if (!still) { t0 = performance.now(); flying = true; } run(); });
  resize(); place(still ? endAz : startAz, still ? P1 : P0, still ? R1 : R0, still ? tgtEnd : look);
  renderer.compile(scene, camera);
  hx.classList.add('three');
  hx.dataset.flight = still ? '0' : String(DUR * 1000);
  hx.dispatchEvent(new CustomEvent('hx:ready'));
  window.__hx = { fps: () => fpsN, seek: sec => { visible = false; if (raf) cancelAnimationFrame(raf); raf = 0; t0 = performance.now() - sec * 1000; flying = sec < DUR; frame(performance.now()); } };
  run();
})().catch(e => { console.warn('hero3d', e); fail('error'); });
