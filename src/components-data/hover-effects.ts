import { UIComponent } from '../types';

export const hoverEffects: UIComponent[] = [
  {
    id: "hover-tilt-1",
    name: "Magnetic Pull",
    category: "Hover Effects",
    tags: ["magnetic", "hover", "interactive"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="magnetic-box">HOVER ME</div>`,
      css: `.magnetic-box { width: 150px; height: 150px; background: #333; color: white; display: flex; align-items: center; justify-content: center; transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.magnetic-box:hover { transform: scale(1.1) rotate(5deg); box-shadow: 0 20px 40px rgba(0,0,0,0.4); }`,
      js: ""
    },
    variants: []
  },
  {
    id: "hover-reveal-2",
    name: "Underline Reveal",
    category: "Hover Effects",
    tags: ["underline", "reveal", "link"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<a href="#" class="reveal-link">Protocol_Index</a>`,
      css: `.reveal-link { color: #00f2ff; text-decoration: none; position: relative; font-size: 24px; }
.reveal-link::after { content: ''; position: absolute; width: 0; height: 2px; bottom: -5px; left: 0; background: #00f2ff; transition: 0.3s; }
.reveal-link:hover::after { width: 100%; }`,
      js: ""
    },
    variants: []
  },
  {
    id: "hover-border-3",
    name: "Tracing Border",
    category: "Hover Effects",
    tags: ["border", "trace", "animated"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="trace-box">DATA_STREAM</div>`,
      css: `.trace-box { width: 200px; height: 60px; border: 2px solid #555; display: flex; align-items: center; justify-content: center; color: #aaa; transition: 0.5s; position: relative; }
.trace-box:hover { color: #fff; border-color: #00f2ff; box-shadow: 0 0 20px rgba(0,242,255,0.2); }`,
      js: ""
    },
    variants: []
  },
  {
    id: "hover-mask-4",
    name: "Spotlight Mask",
    category: "Hover Effects",
    tags: ["mask", "spotlight", "reveal"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="spotlight">REVEAL THE TRUTH</div>`,
      css: `.spotlight { background: #111; color: #222; font-size: 40px; padding: 40px; transition: 0.3s; cursor: pointer; }
.spotlight:hover { color: #fff; text-shadow: 0 0 10px #00f2ff; }`,
      js: ""
    },
    variants: []
  },
  {
    id: "hover-shake-5",
    name: "Glitch Shake",
    category: "Hover Effects",
    tags: ["shake", "glitch", "warning"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<button class="shake-btn">CRITICAL_ERROR</button>`,
      css: `.shake-btn { padding: 10px 20px; background: #ef4444; border: none; color: white; cursor: pointer; }
.shake-btn:hover { animation: shake 0.1s infinite; }
@keyframes shake { 0% { transform: translate(0,0); } 50% { transform: translate(2px, 2px); } 100% { transform: translate(-2px, -2px); } }`,
      js: ""
    },
    variants: []
  }
];
