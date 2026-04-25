import { UIComponent } from '../types';

export const text: UIComponent[] = [
  {
    id: "text-glitch-1",
    name: "Terminal Glitch Text",
    category: "Text",
    tags: ["glitch", "terminal", "animated"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<h1 class="glitch-txt" data-text="SYSTEM_OVERRIDE">SYSTEM_OVERRIDE</h1>`,
      css: `.glitch-txt { color: #0f0; font-family: monospace; font-size: 3rem; position: relative; }
.glitch-txt::before, .glitch-txt::after { content: attr(data-text); position: absolute; top: 0; left: 0; background: black; }
.glitch-txt::before { left: 2px; text-shadow: -2px 0 red; clip: rect(44px, 450px, 56px, 0); animation: glitch-anim 5s infinite linear alternate-reverse; }
@keyframes glitch-anim { 0% { clip: rect(31px, 9999px, 94px, 0); } /* ... */ }`,
      js: ""
    },
    variants: []
  },
  {
    id: "text-gradient-2",
    name: "Rainbow Text",
    category: "Text",
    tags: ["gradient", "rainbow", "modern"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<h2 class="grad-txt">ILLUMINATE THE MATRIX</h2>`,
      css: `.grad-txt { background: linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8f00ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 40px; font-weight: 900; }`,
      js: ""
    },
    variants: []
  },
  {
    id: "text-typing-3",
    name: "Typewriter Effect",
    category: "Text",
    tags: ["typing", "animated", "terminal"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<p class="typing">Initializing neural interface...</p>`,
      css: `.typing { overflow: hidden; border-right: .15em solid orange; white-space: nowrap; margin: 0 auto; letter-spacing: .15em; animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite; }
@keyframes typing { from { width: 0 } to { width: 100% } }
@keyframes blink-caret { from, to { border-color: transparent } 50% { border-color: orange; } }`,
      js: ""
    },
    variants: []
  },
  {
    id: "text-neon-4",
    name: "Flickering Neon Sign",
    category: "Text",
    tags: ["neon", "flicker", "retro"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<h1 class="neon-flicker">OPEN 24/7</h1>`,
      css: `.neon-flicker { color: #fff; text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa; animation: pulsate 1.5s infinite alternate; }
@keyframes pulsate { 100% { text-shadow: 0 0 4px #fff, 0 0 11px #fff; } }`,
      js: ""
    },
    variants: []
  },
  {
    id: "text-3d-5",
    name: "Retro 3D Perspective",
    category: "Text",
    tags: ["3d", "retro", "shadow"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<h1 class="depth-text">ARCADE</h1>`,
      css: `.depth-text { color: #f3f3f3; font-size: 80px; font-weight: bold; text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1); }`,
      js: ""
    },
    variants: []
  }
];
