// 3D phone for the HHS story. The story script decides which beat is active; this file turns the phone,
// swaps its screen with a short crossfade, and makes it buzz on the "incoming call" beat.
import * as THREE from './vendor/three.module.min.js';
import { RoundedBoxGeometry } from './vendor/RoundedBoxGeometry.js';
import { RoomEnvironment } from './vendor/RoomEnvironment.js';
import { drawScreen } from './hhs-screens.js';

const POSES = { // [rx, ry, rz] per screen, small changes so each beat feels like the phone was picked up again
  incoming: [-0.08, -0.38, 0.06], missed: [-0.04, -0.22, -0.02], search: [0.02, -0.12, 0.03], log: [-0.06, 0.18, -0.03], inbox: [0.0, 0.3, 0.02],
  think: [-0.1, 0, 0], agent: [-0.05, -0.3, 0.03], site: [0.02, -0.16, -0.02], crm: [-0.04, 0.22, 0.02], dash: [0.02, 0.32, -0.03],
  hhs: [-0.06, -0.08, 0], preview: [0, -0.24, 0.02], ask: [-0.04, 0.12, 0],
};

export default function mountPhone(slot, assets) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const scene = new THREE.Scene();
  scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04).texture;
  const key = new THREE.DirectionalLight(0xffffff, 1.2); key.position.set(-2, 3, 4); scene.add(key);
  const camera = new THREE.PerspectiveCamera(26, 1, 0.1, 40); camera.position.set(0, 0, 6.2);

  const phone = new THREE.Group(); scene.add(phone);
  const body = new THREE.Mesh(new RoundedBoxGeometry(1.0, 2.12, 0.1, 8, 0.15),
    new THREE.MeshPhysicalMaterial({ color: 0x1a2030, metalness: 0.7, roughness: 0.28, clearcoat: 0.8, clearcoatRoughness: 0.15 }));
  phone.add(body);
  const glass = new THREE.Mesh(new THREE.PlaneGeometry(0.97, 2.09), new THREE.MeshPhysicalMaterial({ color: 0x05070d, roughness: 0.05, metalness: 0, clearcoat: 1 }));
  glass.position.z = 0.0505; phone.add(glass);

  const makeLayer = z => {
    const canvas = document.createElement('canvas');
    const tex = new THREE.CanvasTexture(canvas); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
    const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, toneMapped: false, opacity: 1 });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(0.92, 0.92 * 1300 / 600), mat); mesh.position.z = z; phone.add(mesh);
    return { canvas, tex, mat, mesh };
  };
  const A = makeLayer(0.0512), B = makeLayer(0.0514);
  B.mat.opacity = 0;

  // a soft sheen across the glass sells the "real device" look
  const sheen = new THREE.Mesh(new THREE.PlaneGeometry(0.97, 2.09), new THREE.ShaderMaterial({ transparent: true, depthWrite: false,
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: 'varying vec2 vUv; void main(){ float d = abs((vUv.x + vUv.y*0.55) - 0.95); float a = smoothstep(0.22, 0.0, d) * 0.07; gl_FragColor = vec4(vec3(1.0), a); }' }));
  sheen.position.z = 0.052; phone.add(sheen);

  slot.appendChild(renderer.domElement);
  let wide = false;
  const fit = () => {
    const w = slot.clientWidth, h = slot.clientHeight; if (!w || !h) return;
    renderer.setSize(w, h, false); camera.aspect = w / h;
    const t = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    camera.position.z = Math.max(1.22 / t, 0.62 / (t * camera.aspect));
    camera.updateProjectionMatrix(); wide = w > 520; wake();
  };

  let cur = null, target = [0, 0, 0], rot = [0, -0.5, 0], vel = [0, 0, 0], fadeStart = -1, ring = false, raf = 0, visible = true, last = 0, entered = still ? 1 : 0;
  const FADE = 260;
  function show(id) {
    if (id === cur) return;
    const first = cur === null; cur = id;
    target = POSES[id] || [0, 0, 0];
    ring = id === 'incoming';
    if (first || still) { drawScreen(A.canvas, id, assets); A.tex.needsUpdate = true; B.mat.opacity = 0; }
    else { drawScreen(B.canvas, id, assets); B.tex.needsUpdate = true; fadeStart = performance.now(); }
    wake();
  }
  const wake = () => { if (!raf && visible) { last = performance.now(); raf = requestAnimationFrame(frame); } };
  function frame(now) {
    raf = 0; const dt = Math.min(0.033, (now - last) / 1000); last = now; let busy = false;
    // critically damped spring toward the pose (about 450 ms to settle)
    const k = 90, c = 2 * Math.sqrt(k);
    for (let i = 0; i < 3; i++) { const a = k * (target[i] - rot[i]) - c * vel[i]; vel[i] += a * dt; rot[i] += vel[i] * dt; if (Math.abs(target[i] - rot[i]) > 0.0005 || Math.abs(vel[i]) > 0.0005) busy = true; }
    if (still) { rot = target.slice(); busy = false; }
    entered = Math.min(1, entered + dt * 2.6); if (entered < 1) busy = true;
    const ent = 1 - Math.pow(1 - entered, 3);
    let buzz = 0;
    if (ring && !still) { const t = now % 1400; if (t < 700) buzz = Math.sin(now * 0.09) * 0.022 * Math.sin(Math.PI * t / 700); busy = true; }
    phone.rotation.set(rot[0], rot[1], rot[2] + buzz);
    phone.position.y = -0.25 * (1 - ent); phone.scale.setScalar(0.92 + 0.08 * ent);
    if (fadeStart >= 0) {
      const f = Math.min(1, (now - fadeStart) / FADE); B.mat.opacity = 1 - Math.pow(1 - f, 3); busy = true;
      if (f >= 1) { const ctx = A.canvas.getContext('2d'); A.canvas.width = B.canvas.width; A.canvas.height = B.canvas.height; ctx.drawImage(B.canvas, 0, 0); A.tex.needsUpdate = true; B.mat.opacity = 0; fadeStart = -1; }
    }
    renderer.render(scene, camera);
    if (busy) wake();
  }
  new ResizeObserver(fit).observe(slot);
  new IntersectionObserver(([en]) => { visible = en.isIntersecting; if (visible) wake(); }).observe(slot);
  fit();
  return { show };
}
