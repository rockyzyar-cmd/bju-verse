import { UIComponent } from '../types';

export const backgrounds: UIComponent[] = [
  {
    id: "bg-god-particles",
    name: "GOD-MODE: Quantum Particles",
    category: "Backgrounds",
    tags: ["three.js", "3d", "particles", "advanced", "god-mode"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div id="canvas-container"></div>
<div class="ui-overlay">
  <h1>QUANTUM_STATE_SYNCED</h1>
  <div class="stats">PERFORMANCE: GOD-LEVEL</div>
</div>`,
      css: `#canvas-container { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; }
.ui-overlay { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; pointer-events: none; }
h1 { font-family: 'Syncopate', sans-serif; font-weight: 900; font-size: 3vw; letter-spacing: 1em; color: white; text-shadow: 0 0 20px rgba(255,255,255,0.5); margin: 0; }
.stats { font-family: monospace; font-size: 10px; color: #00ffcc; letter-spacing: 0.5em; margin-top: 20px; opacity: 0.6; }`,
      js: `
let scene, camera, renderer, particles;
const particleCount = 15000;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000);
  camera.position.z = 1000;

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('canvas-container').appendChild(renderer.domElement);

  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 2000;
    positions[i+1] = (Math.random() - 0.5) * 2000;
    positions[i+2] = (Math.random() - 0.5) * 2000;

    colors[i] = Math.random();
    colors[i+1] = Math.random();
    colors[i+2] = Math.random();
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 2,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
  });

  particles = new THREE.Points(geometry, material);
  scene.add(particles);

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  particles.rotation.x += 0.0005;
  particles.rotation.y += 0.0007;
  
  const time = Date.now() * 0.0001;
  const positions = particles.geometry.attributes.position.array;
  
  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i+1] += Math.sin(time + positions[i] * 0.01) * 0.5;
  }
  particles.geometry.attributes.position.needsUpdate = true;

  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

init();`
    },
    variants: []
  },
  {
    id: "bg-grid-1",
    name: "Animated Cyber Grid",
    category: "Backgrounds",
    tags: ["grid", "animated", "cyber", "moving"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="grid-bg"></div>`,
      css: `.grid-bg {
  width: 100%; height: 100%; min-height: 400px;
  background: radial-gradient(circle at center, #1a1a1a 0%, #000 100%),
              linear-gradient(rgba(0,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,255,0.05) 1px, transparent 1px);
  background-size: 100% 100%, 50px 50px, 50px 50px;
  animation: grid-move 20s linear infinite;
}
@keyframes grid-move { from { background-position: 0 0; } to { background-position: 0 500px; } }`,
      js: ""
    },
    variants: []
  },
  {
    id: "bg-gradient-2",
    name: "Mesh Gradient",
    category: "Backgrounds",
    tags: ["mesh", "gradient", "colorful"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="mesh-bg"></div>`,
      css: `.mesh-bg {
  width: 100%; height: 100%; min-height: 400px;
  background-color: #ff00ff;
  background-image: 
    radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), 
    radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), 
    radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%);
}`,
      js: ""
    },
    variants: []
  },
  {
    id: "bg-dots-3",
    name: "Subtle Dotted Matrix",
    category: "Backgrounds",
    tags: ["dots", "subtle", "clean"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="dots-bg"></div>`,
      css: `.dots-bg { width: 100%; height: 100%; min-height: 400px; background-image: radial-gradient(#333 1px, transparent 1px); background-size: 20px 20px; }`,
      js: ""
    },
    variants: []
  },
  {
    id: "bg-glass-4",
    name: "Frosted Pane",
    category: "Backgrounds",
    tags: ["glass", "blur", "ui"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="glass-bg"></div>`,
      css: `.glass-bg { width: 100%; height: 100%; min-height: 400px; background: rgba(255,255,255,0.05); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.1); }`,
      js: ""
    },
    variants: []
  },
  {
    id: "bg-aurora-5",
    name: "Aurora Waves",
    category: "Backgrounds",
    tags: ["aurora", "waves", "calm"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="aurora-bg"></div>`,
      css: `.aurora-bg { width: 100%; height: 100%; min-height: 400px; background: linear-gradient(45deg, #00d2ff, #3a7bd5); filter: blur(60px); opacity: 0.3; }`,
      js: ""
    },
    variants: []
  }
];
