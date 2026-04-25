import { UIComponent } from '../types';

export const inputs: UIComponent[] = [
  {
    id: "input-neo-1",
    name: "Neumorphic Input",
    category: "Inputs",
    tags: ["neo", "soft", "ui", "input"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="neo-input-container"><input type="text" class="neo-input" placeholder="Enter frequency..." /></div>`,
      css: `.neo-input-container { padding: 20px; background: #e0e5ec; border-radius: 20px; }
.neo-input { border: none; padding: 15px 25px; border-radius: 12px; background: #e0e5ec; box-shadow: inset 6px 6px 12px #b8bec5, inset -6px -6px 12px #ffffff; }`,
      js: ""
    },
    variants: []
  },
  {
    id: "input-line-2",
    name: "Bottom Line Focus",
    category: "Inputs",
    tags: ["line", "minimal", "focus"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="line-input"><input type="text" placeholder="Type here..." /><span></span></div>`,
      css: `.line-input { position: relative; width: 250px; } 
.line-input input { width: 100%; border: none; border-bottom: 2px solid #ccc; outline: none; background: transparent; color: white; }
.line-input span { position: absolute; bottom: 0; left: 0; width: 0; height: 2px; background: #00e0ff; transition: 0.3s; }
.line-input input:focus ~ span { width: 100%; }`,
      js: ""
    },
    variants: []
  },
  {
    id: "input-box-3",
    name: "Cyber Grid Input",
    category: "Inputs",
    tags: ["cyber", "grid", "tech"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<input type="text" class="grid-input" placeholder="ACCESS_CODE" />`,
      css: `.grid-input { background: rgba(0,255,0,0.05); border: 1px solid #0f0; color: #0f0; padding: 10px; font-family: monospace; }`,
      js: ""
    },
    variants: []
  },
  {
    id: "input-float-4",
    name: "Floating Label",
    category: "Inputs",
    tags: ["float", "label", "modern"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="float-label"><input type="text" required /><label>Username</label></div>`,
      css: `.float-label { position: relative; margin: 20px 0; }
.float-label input { background: transparent; border: 1px solid #555; color: white; padding: 10px; width: 250px; }
.float-label label { position: absolute; left: 10px; top: 10px; color: #aaa; pointer-events: none; transition: 0.3s; }
.float-label input:focus ~ label, .float-label input:valid ~ label { top: -20px; font-size: 12px; color: #00e0ff; }`,
      js: ""
    },
    variants: []
  },
  {
    id: "input-glass-5",
    name: "Frosted Input",
    category: "Inputs",
    tags: ["glass", "frosted", "modern"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<input type="text" class="glass-input" placeholder="Matrix Search" />`,
      css: `.glass-input { background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2); padding: 12px; color: white; border-radius: 30px; width: 280px; }`,
      js: ""
    },
    variants: []
  }
];
