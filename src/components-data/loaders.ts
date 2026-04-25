import { UIComponent } from '../types';

export const loaders: UIComponent[] = [
  {
    id: "loader-dots-1",
    name: "Quantum Pulse",
    category: "Loaders",
    tags: ["dots", "pulse", "loading"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="loader"><span></span><span></span><span></span></div>`,
      css: `.loader { display: flex; gap: 10px; } .loader span { width: 20px; height: 20px; background: #3b82f6; border-radius: 50%; animation: pulse 1.5s infinite; }`,
      js: ""
    },
    variants: [
      {
        id: "v-pulse-1",
        name: "Emerald Pulse",
        code: {
          html: `<div class="loader emerald"><span></span><span></span><span></span></div>`,
          css: `.loader.emerald span { background: #10b981; }`,
          js: ""
        }
      }
    ]
  },
  {
    id: "loader-spin-2",
    name: "Cyber Spinner",
    category: "Loaders",
    tags: ["spin", "cyber", "neon"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="cyber-spin"></div>`,
      css: `.cyber-spin { width: 50px; height: 50px; border: 3px solid transparent; border-top-color: #0ff; border-radius: 50%; animation: spin 0.8s linear infinite; } @keyframes spin { to { transform: rotate(360deg); } }`,
      js: ""
    },
    variants: [
      {
        id: "v-spin-1",
        name: "Ruby Spin",
        code: {
          html: `<div class="cyber-spin ruby"></div>`,
          css: `.cyber-spin.ruby { border-top-color: #ff003c; }`,
          js: ""
        }
      }
    ]
  },
  {
    id: "loader-path-3",
    name: "Recursive Path",
    category: "Loaders",
    tags: ["path", "svg", "animated"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<svg class="loader-svg" viewBox="0 0 50 50"><circle cx="25" cy="25" r="20"></circle></svg>`,
      css: `.loader-svg circle { fill: none; stroke: #8b5cf6; stroke-width: 4; stroke-dasharray: 1, 150; stroke-dashoffset: 0; animation: dash 1.5s ease-in-out infinite; }
@keyframes dash { 0% { stroke-dasharray: 1, 150; stroke-dashoffset: 0; } 50% { stroke-dasharray: 90, 150; stroke-dashoffset: -35; } 100% { stroke-dasharray: 90, 150; stroke-dashoffset: -124; } }`,
      js: ""
    },
    variants: []
  },
  {
    id: "loader-glitch-4",
    name: "Data Glitch Loader",
    category: "Loaders",
    tags: ["glitch", "data", "processing"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="glitch-load">PROCESSING DATA...</div>`,
      css: `.glitch-load { color: #0f0; font-family: monospace; animation: glitch-text 0.2s infinite; }`,
      js: ""
    },
    variants: []
  },
  {
    id: "loader-dna-5",
    name: "Bio-Logic DNA",
    category: "Loaders",
    tags: ["dna", "bio", "logic"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="dna"><div></div><div></div><div></div><div></div></div>`,
      css: `.dna { display: flex; gap: 5px; } .dna div { width: 4px; height: 30px; background: #ec4899; animation: dna-anim 1s infinite alternate; }`,
      js: ""
    },
    variants: []
  }
];
