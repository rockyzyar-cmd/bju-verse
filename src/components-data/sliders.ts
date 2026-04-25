import { UIComponent } from '../types';

export const sliders: UIComponent[] = [
  {
    id: "slider-neon-1",
    name: "Neon Glow Range",
    category: "Sliders",
    tags: ["neon", "range", "slider", "ui"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="slider-container">
  <input type="range" class="neon-slider" min="0" max="100" value="50">
</div>`,
      css: `.slider-container { padding: 20px; background: #000; border-radius: 10px; }
.neon-slider {
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  background: #1a1a1a;
  outline: none;
  border-radius: 5px;
  box-shadow: inset 0 0 5px rgba(0,255,255,0.2);
}
.neon-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  background: #00f2ff;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 10px #00f2ff, 0 0 20px #00f2ff;
}`,
      js: ""
    },
    variants: []
  },
  {
    id: "slider-minimal-2",
    name: "Minimalist Step",
    category: "Sliders",
    tags: ["minimal", "steps", "clean"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<input type="range" class="min-slider" step="10">`,
      css: `.min-slider { cursor: pointer; }`,
      js: ""
    },
    variants: []
  },
  {
    id: "slider-gradient-3",
    name: "Gradient Flow Slider",
    category: "Sliders",
    tags: ["gradient", "color", "modern"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<input type="range" class="grad-slider">`,
      css: `.grad-slider { background: linear-gradient(to right, #f09, #30f); }`,
      js: ""
    },
    variants: []
  },
  {
    id: "slider-glass-4",
    name: "Frosted Glass Slider",
    category: "Sliders",
    tags: ["glass", "blur", "frosted"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<input type="range" class="glass-slider">`,
      css: `.glass-slider { background: rgba(255,255,255,0.1); backdrop-filter: blur(5px); }`,
      js: ""
    },
    variants: []
  },
  {
    id: "slider-vertical-5",
    name: "Vertical Volume Control",
    category: "Sliders",
    tags: ["vertical", "volume", "ui"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="vertical-slider"><input type="range" orient="vertical"></div>`,
      css: `.vertical-slider input { writing-mode: bt-lr; -webkit-appearance: slider-vertical; height: 150px; }`,
      js: ""
    },
    variants: []
  }
];
