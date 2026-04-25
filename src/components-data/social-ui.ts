import { UIComponent } from '../types';

export const socialUI: UIComponent[] = [
  {
    id: "social-share-1",
    name: "Hover Share Bar",
    category: "Social UI",
    tags: ["share", "social", "bar", "hover"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="share-bar">
  <span>SHARE</span>
  <div class="icons">
    <button>FB</button>
    <button>TW</button>
    <button>IG</button>
  </div>
</div>`,
      css: `.share-bar { position: relative; background: #333; color: white; padding: 10px 20px; border-radius: 50px; cursor: pointer; transition: 0.5s; }
.share-bar .icons { display: none; gap: 10px; margin-top: 10px; }
.share-bar:hover .icons { display: flex; }`,
      js: ""
    },
    variants: []
  },
  {
    id: "social-profile-2",
    name: "Mini Profile Widget",
    category: "Social UI",
    tags: ["profile", "widget", "user"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="profile-widget">
  <div class="avatar"></div>
  <div class="info">
    <b>Nexus One</b>
    <span>Online</span>
  </div>
</div>`,
      css: `.profile-widget { display: flex; align-items: center; gap: 10px; background: rgba(255,255,255,0.05); padding: 10px; border-radius: 12px; }
.avatar { width: 40px; height: 40px; background: #555; border-radius: 50%; }
.info { display: flex; flex-direction: column; color: white; font-size: 12px; }`,
      js: ""
    },
    variants: []
  },
  {
    id: "social-like-3",
    name: "Floating Like Button",
    category: "Social UI",
    tags: ["like", "reaction", "animated"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<button class="like-btn">❤️ <span>2.4k</span></button>`,
      css: `.like-btn { background: #ff2d55; border: none; color: white; padding: 8px 15px; border-radius: 20px; cursor: pointer; transition: 0.3s; }
.like-btn:hover { transform: translateY(-5px); box-shadow: 0 5px 15px rgba(255,45,85,0.4); }`,
      js: ""
    },
    variants: []
  },
  {
    id: "social-chat-4",
    name: "Message Bubble",
    category: "Social UI",
    tags: ["chat", "bubble", "modern"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="chat-bubble">Transmission received via secure channel.</div>`,
      css: `.chat-bubble { background: #007aff; color: white; padding: 12px 18px; border-radius: 20px 20px 0 20px; max-width: 200px; font-size: 14px; }`,
      js: ""
    },
    variants: []
  },
  {
    id: "social-follow-5",
    name: "Cyber Follow Button",
    category: "Social UI",
    tags: ["follow", "button", "cyber"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<button class="cybr-follow">FOLLOW_NODE</button>`,
      css: `.cybr-follow { background: transparent; border: 1px solid #00f2ff; color: #00f2ff; padding: 10px 20px; text-transform: uppercase; font-family: monospace; cursor: pointer; transition: 0.2s; }
.cybr-follow:hover { background: #00f2ff; color: #000; }`,
      js: ""
    },
    variants: []
  }
];
