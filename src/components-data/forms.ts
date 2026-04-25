import { UIComponent } from '../types';

export const forms: UIComponent[] = [
  {
    id: "form-login-1",
    name: "Glassmorphism Login",
    category: "Forms",
    tags: ["glass", "login", "modern", "blur"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<form class="glass-form"><h2>Login</h2><input type="text" placeholder="Username" /><button type="submit">Execute</button></form>`,
      css: `.glass-form { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); padding: 40px; border-radius: 20px; display: flex; flex-direction: column; gap: 20px; width: 300px; }`,
      js: ""
    },
    variants: []
  },
  {
    id: "form-signup-2",
    name: "Neon Signup",
    category: "Forms",
    tags: ["neon", "signup", "cyber"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<form class="neon-form"><h3>Join Matrix</h3><input type="email" placeholder="Email" /><button>SYNC</button></form>`,
      css: `.neon-form { background: #000; border: 1px solid #0f0; padding: 30px; }`,
      js: ""
    },
    variants: []
  },
  {
    id: "form-contact-3",
    name: "Minimal Contact",
    category: "Forms",
    tags: ["contact", "minimal"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<form class="min-form"><textarea placeholder="Message"></textarea><button>SEND</button></form>`,
      css: `.min-form { display: flex; flex-direction: column; gap: 10px; width: 300px; }`,
      js: ""
    },
    variants: []
  },
  {
    id: "form-search-4",
    name: "Animated Search",
    category: "Forms",
    tags: ["search", "animated"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="search-box"><input type="text" placeholder="Search..." /></div>`,
      css: `.search-box input { border: none; background: #eee; padding: 10px; border-radius: 20px; transition: 0.3s; }
.search-box input:focus { width: 300px; }`,
      js: ""
    },
    variants: []
  },
  {
    id: "form-auth-5",
    name: "Step Authentication",
    category: "Forms",
    tags: ["auth", "steps"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="auth-steps"><div class="step active">1</div><button>Next</button></div>`,
      css: `.auth-steps { color: white; }`,
      js: ""
    },
    variants: []
  }
];
