import { UIComponent } from '../types';

export const cards: UIComponent[] = [
  {
    id: "card-glass-1",
    name: "Glassmorphism Card",
    category: "Cards",
    tags: ["glass", "modern", "blur", "ui"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="card">
  <div class="content">
    <h2>01</h2>
    <h3>Glass Card</h3>
    <p>This is a modern glassmorphism card design with backdrop filter blur and subtle borders.</p>
    <a href="#">Read More</a>
  </div>
</div>`,
      css: `.card {
  position: relative;
  width: 280px;
  height: 400px;
  box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
  border-radius: 15px;
  background: rgba(255,255,255,0.1);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255,255,255,0.5);
  border-left: 1px solid rgba(255,255,255,0.5);
  backdrop-filter: blur(5px);
}
.content h2 { position: absolute; font-size: 8em; color: rgba(255,255,255,0.05); }`,
      js: ""
    },
    variants: []
  },
  {
    id: "card-3d-2",
    name: "Parallax Tilt",
    category: "Cards",
    tags: ["3d", "parallax", "tilt"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="tilt-card">
  <div class="inner-element">
    <h3>TILT CARD</h3>
    <p>3D Hover effect with shadows</p>
  </div>
</div>`,
      css: `.tilt-card {
  width: 300px; height: 400px;
  background: #232323; border-radius: 20px;
  transform-style: preserve-3d;
  perspective: 1000px;
}
.inner-element {
  transform: translateZ(50px);
  color: white; padding: 40px;
}`,
      js: ""
    },
    variants: []
  },
  {
    id: "card-hover-3",
    name: "Expandable Menu",
    category: "Cards",
    tags: ["hover", "expandable", "menu"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="expand-card">
  <div class="img-box">IMAGE</div>
  <div class="details">
    <h2>Title</h2>
    <p>Some description goes here and it expands on hover.</p>
  </div>
</div>`,
      css: `.expand-card {
  width: 300px; height: 100px; transition: 0.5s; overflow: hidden; background: #333;
}
.expand-card:hover { height: 300px; }`,
      js: ""
    },
    variants: []
  },
  {
    id: "card-profile-4",
    name: "Neon Profile",
    category: "Cards",
    tags: ["profile", "neon", "social"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="profile-card">
  <div class="user-img"></div>
  <h3>John Doe</h3>
  <p>Creative Director</p>
  <div class="socials">
    <span>FB</span><span>TW</span><span>IG</span>
  </div>
</div>`,
      css: `.profile-card {
  width: 300px; background: #000; border: 2px solid #00d2ff; border-radius: 20px; text-align: center; color: white; padding: 30px;
}`,
      js: ""
    },
    variants: []
  },
  {
    id: "card-price-5",
    name: "Modern Pricing",
    category: "Cards",
    tags: ["pricing", "modern", "ui"],
    authorId: "system",
    authorName: "BJU-VERSE",
    createdAt: Date.now(),
    code: {
      html: `<div class="price-card">
  <div class="plan">Basic</div>
  <div class="price">$19</div>
  <ul>
    <li>Feature 1</li>
    <li>Feature 2</li>
  </ul>
  <button>Choose Plan</button>
</div>`,
      css: `.price-card {
  background: white; border-radius: 15px; padding: 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); width: 250px;
}`,
      js: ""
    },
    variants: []
  }
];
