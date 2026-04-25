import { UIComponent } from '../types';

export const icons: UIComponent[] = [
  {
    id: "icon-power-1",
    name: "Animated Power Toggle",
    category: "Icons",
    tags: ["power", "toggle", "animated", "svg"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="icon-box">
  <svg viewBox="0 0 100 100" class="power-svg">
    <path class="circle" d="M30 30 A 40 40 0 1 0 70 30" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>
    <line class="line" x1="50" y1="10" x2="50" y2="50" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>
  </svg>
</div>`,
      css: `.power-svg { width: 50px; color: #ef4444; transition: 0.3s; cursor: pointer; }
.power-svg:hover { color: #22c55e; filter: drop-shadow(0 0 10px currentColor); }
.power-svg:hover .line { transform: translateY(5px); transition: 0.3s; }`,
      js: ""
    },
    variants: []
  },
  {
    id: "icon-burger-2",
    name: "Liquid Burger Menu",
    category: "Icons",
    tags: ["menu", "burger", "animated"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="burger"><span></span><span></span><span></span></div>`,
      css: `.burger { width: 30px; height: 20px; display: flex; flex-direction: column; justify-content: space-between; cursor: pointer; }
.burger span { height: 3px; background: white; border-radius: 10px; transition: 0.3s; }
.burger:hover span:nth-child(2) { transform: translateX(10px); opacity: 0; }`,
      js: ""
    },
    variants: []
  },
  {
    id: "icon-search-3",
    name: "Expanding Search Icon",
    category: "Icons",
    tags: ["search", "ui", "svg"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="search-icon">🔍</div>`,
      css: `.search-icon { font-size: 24px; transition: 0.5s; cursor: pointer; }
.search-icon:hover { transform: scale(1.2) rotate(10deg); }`,
      js: ""
    },
    variants: []
  },
  {
    id: "icon-neon-4",
    name: "Neon Home Glow",
    category: "Icons",
    tags: ["home", "neon", "glow"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="neon-home">🏠</div>`,
      css: `.neon-home { font-size: 30px; text-shadow: 0 0 10px #00e0ff; }`,
      js: ""
    },
    variants: []
  },
  {
    id: "icon-load-5",
    name: "Syncing Loader Icon",
    category: "Icons",
    tags: ["sync", "loader", "refresh"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="sync-icon">🔄</div>`,
      css: `.sync-icon { font-size: 24px; animation: spin 2s infinite linear; }
@keyframes spin { to { transform: rotate(360deg); } }`,
      js: ""
    },
    variants: []
  }
];
