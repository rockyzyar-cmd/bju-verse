import { UIComponent } from '../types';

export const animations: UIComponent[] = [
  {
    id: "anim-float-1",
    name: "Cyber Floating Object",
    category: "Animations",
    tags: ["floating", "3d", "motion", "cyber"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="floating-cube"></div>`,
      css: `.floating-cube { width: 100px; height: 100px; background: linear-gradient(135deg, #06b6d4, #8b5cf6); border-radius: 20%; box-shadow: 0 0 30px rgba(6, 182, 212, 0.4); animation: float 3s ease-in-out infinite; }
@keyframes float { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-20px) rotate(10deg); } }`,
      js: ""
    },
    variants: []
  },
  {
    id: "anim-glitch-2",
    name: "Text Glitch",
    category: "Animations",
    tags: ["text", "glitch", "effect"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<h1 class="glitch" data-text="BJU-VERSE">BJU-VERSE</h1>`,
      css: `.glitch { position: relative; color: white; font-size: 4em; } 
.glitch::before, .glitch::after { content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; height: 100%; }`,
      js: ""
    },
    variants: []
  },
  {
    id: "anim-particles-3",
    name: "Floating Particles",
    category: "Animations",
    tags: ["particles", "bg", "motion"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="particle-box"><div class="p1"></div><div class="p2"></div></div>`,
      css: `.particle-box { position: relative; width: 200px; height: 200px; } 
.p1, .p2 { position: absolute; width: 10px; height: 10px; background: white; border-radius: 50%; animation: particle 4s infinite linear; }`,
      js: ""
    },
    variants: []
  },
  {
    id: "anim-neon-4",
    name: "Neon Border Flow",
    category: "Animations",
    tags: ["neon", "border", "flow"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="neon-box">NEON</div>`,
      css: `.neon-box { position: relative; padding: 20px 40px; color: #03e9f4; overflow: hidden; border: 1px solid #03e9f4; }`,
      js: ""
    },
    variants: []
  },
  {
    id: "anim-3d-5",
    name: "3D Sphere Rotate",
    category: "Animations",
    tags: ["3d", "sphere", "rotate"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="sphere"></div>`,
      css: `.sphere { width: 100px; height: 100px; border-radius: 50%; background: radial-gradient(circle at 30% 30%, #5cabff, #000); animation: rotate-3d 5s infinite linear; }`,
      js: ""
    },
    variants: []
  },
  {
    id: "gpu-stress-engine-10k",
    name: "GPU Stress Engine (10k Instances)",
    category: "Animations",
    tags: ["performance", "threejs", "gpu", "instancing", "10k"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div id="preview-container" style="width: 100vw; height: 100vh;"></div>`,
      css: `body, html { margin: 0; padding: 0; width: 100%; height: 100%; background: #000; overflow: hidden; }
#preview-container { cursor: grab; }
#preview-container:active { cursor: grabbing; }`,
      js: `
// --- PERFORMANCE CONFIG ---
const TOTAL_ELEMENTS = 10000;
const container = document.getElementById('preview-container');

// 1. SCENE SETUP (High Performance)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ 
    antialias: false, // Performance boost
    powerPreference: "high-performance",
    alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// 2. THE SECRET WEAPON: INSTANCED MESH
const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
const material = new THREE.MeshStandardMaterial({ 
    color: 0x00ff88,
    metalness: 0.8,
    roughness: 0.2
});
const imesh = new THREE.InstancedMesh(geometry, material, TOTAL_ELEMENTS);

// Matrix utility for instant positioning
const dummy = new THREE.Object3D();

// 3. ZERO-DELAY INITIALIZATION
for (let i = 0; i < TOTAL_ELEMENTS; i++) {
    dummy.position.set(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
    );
    dummy.rotation.set(Math.random(), Math.random(), Math.random());
    dummy.updateMatrix();
    imesh.setMatrixAt(i, dummy.matrix);
}
scene.add(imesh);

// 4. LIGHTING
const light = new THREE.DirectionalLight(0xffffff, 1.5);
light.position.set(10, 10, 10);
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040, 1));

camera.position.z = 12;

// 5. SMOOTH INTERACTION (Raycasting)
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const color = new THREE.Color();

container.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    raycaster.setFromCamera(mouse, camera);
    const intersection = raycaster.intersectObject(imesh);
    
    if (intersection.length > 0) {
        const instanceId = intersection[0].instanceId;
        color.setHex(Math.random() * 0xffffff);
        imesh.setColorAt(instanceId, color);
        imesh.instanceColor.needsUpdate = true;
    }
});

// 6. RENDER LOOP (The 60FPS Lock)
function animate() {
    requestAnimationFrame(animate);
    imesh.rotation.y += 0.002;
    imesh.rotation.z += 0.001;
    renderer.render(scene, camera);
}
animate();

// 7. PERFECT FIT
window.addEventListener('resize', () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
});`
    },
    variants: []
  }
];
