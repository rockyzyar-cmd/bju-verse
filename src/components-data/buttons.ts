import { UIComponent } from '../types';

export const buttons: UIComponent[] = [
    {
        id: "btn-glow-1",
        name: "Neon Glow Button",
        category: "Buttons",
        tags: ["glow", "neon", "animated", "hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: Date.now(),
        code: {
            html: `<button class="glow-on-hover" type="button">HOVER ME!</button>`,
            css: `.glow-on-hover {
    width: 220px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
}

.glow-on-hover:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.glow-on-hover:active {
    color: #000
}

.glow-on-hover:active:after {
    background: transparent;
}

.glow-on-hover:hover:before {
    opacity: 1;
}

.glow-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}`,
            js: `document.querySelector('.glow-on-hover').addEventListener('click', () => {
  console.log('Neon Glow Button clicked!');
});`
        },
        variants: [
            {
                id: "v1",
                name: "Electric Blue",
                code: {
                    html: `<button class="v-blue">ELECTRIC</button>`,
                    css: `.v-blue { padding: 12px 24px; background: #007bff; color: white; border: none; border-radius: 4px; box-shadow: 0 0 15px rgba(0,123,255,0.5); cursor: pointer; }`,
                    js: ""
                }
            },
            {
                id: "v2",
                name: "Sunset Orange",
                code: {
                    html: `<button class="v-orange">SUNSET</button>`,
                    css: `.v-orange { padding: 12px 24px; background: #fd7e14; color: white; border: none; border-radius: 4px; box-shadow: 0 0 15px rgba(253,126,20,0.5); cursor: pointer; }`,
                    js: ""
                }
            }
        ]
    },
    {
        id: "btn-cyber-2",
        name: "Cyberpunk Glitch",
        category: "Buttons",
        tags: ["cyberpunk", "glitch", "futuristic"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: Date.now(),
        code: {
            html: `<button class="cybr-btn">
  CYBER<span aria-hidden>_</span>
  <span aria-hidden class="cybr-btn__glitch">CYBER_</span>
  <span aria-hidden class="cybr-btn__tag">R25</span>
</button>`,
            css: `.cybr-btn {
  --primary: #ff003c;
  --shadow-primary: #15ff00;
  --color: white;
  --font-size: 26px;
  --shadow-primary-hue: 124;
  --shadow-secondary-hue: 20;
  --shadow-secondary: #00e0ff;
  --clip: polygon(0 0, 100% 0, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 70%);
  --border: 4px;
  --shimmy-distance: 5;
  background: var(--primary);
  color: var(--color);
  font-family: 'Cyber', sans-serif;
  text-transform: uppercase;
  outline: transparent;
  letter-spacing: 2px;
  position: relative;
  font-weight: 700;
  border: 0;
  min-width: 200px;
  height: 75px;
  line-height: 75px;
  transition: background 0.2s;
  cursor: pointer;
}
.cybr-btn:hover { background: #e60036; }
.cybr-btn:active { background: #cc0030; }
.cybr-btn__glitch {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: var(--shadow-primary);
  filter: drop-shadow(-2px 3px #00e0ff) drop-shadow(-1px -3px #15ff00);
  clip-path: var(--clip);
  display: none;
}
.cybr-btn:hover .cybr-btn__glitch { display: block; animation: glitch 0.3s infinite; }
@keyframes glitch {
  0% { clip-path: var(--clip); transform: translate(calc(var(--shimmy-distance) * -1%), 0); }
  20% { clip-path: var(--clip); transform: translate(calc(var(--shimmy-distance) * 1%), 0); }
}`,
            js: ""
        },
        variants: [
            {
                id: "v-glitch-1",
                name: "Neon Blue",
                code: {
                    html: `<button class="cybr-btn blue">BLUE_GLITCH</button>`,
                    css: `.cybr-btn.blue { --primary: #00e0ff; --shadow-primary: #ff003c; }`,
                    js: ""
                }
            },
            {
                id: "v-glitch-2",
                name: "Toxic Lime",
                code: {
                    html: `<button class="cybr-btn green">LIME_GLITCH</button>`,
                    css: `.cybr-btn.green { --primary: #15ff00; --shadow-primary: #00e0ff; --color: black; }`,
                    js: ""
                }
            }
        ]
    },
    {
        id: "btn-liquid-3",
        name: "Liquid Fill",
        category: "Buttons",
        tags: ["liquid", "fill", "creative"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: Date.now(),
        code: {
            html: `<a href="#" class="liquid-btn">
  <span>LIQUID</span>
  <div class="liquid"></div>
</a>`,
            css: `.liquid-btn {
  position: relative;
  padding: 20px 50px;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  width: 200px;
  overflow: hidden;
  border-radius: 40px;
  text-align: center;
}
.liquid-btn span {
  position: relative;
  color: #fff;
  font-size: 20px;
  font-family: Arial;
  letter-spacing: 8px;
  z-index: 1;
}
.liquid-btn .liquid {
  position: absolute;
  top: -80px; left: 0; width: 200px; height: 200px;
  background: #4973ff;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, .5);
  transition: .5s;
}
.liquid-btn:hover .liquid { top: -120px; }`,
            js: ""
        },
        variants: [
            {
                id: "v-liq-1",
                name: "Magma",
                code: {
                    html: `<a href="#" class="liquid-btn magma"><span>MAGMA</span><div class="liquid"></div></a>`,
                    css: `.magma .liquid { background: #ff4500 !important; }`,
                    js: ""
                }
            }
        ]
    },
    {
        id: "btn-bubble-4",
        name: "Bubble Burst",
        category: "Buttons",
        tags: ["bubble", "burst", "playful"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: Date.now(),
        code: {
            html: `<button class="bubbly-button">Click me!</button>`,
            css: `.bubbly-button {
  font-family: 'Helvetica', 'Arial', sans-serif;
  display: inline-block;
  font-size: 1em;
  padding: 1em 2em;
  margin-top: 100px;
  margin-bottom: 60px;
  -webkit-appearance: none;
  appearance: none;
  background-color: #ff0081;
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  position: relative;
  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
  box-shadow: 0 2px 25px rgba(255, 0, 129, 0.5);
}
.bubbly-button:active { transform: scale(0.9); }`,
            js: ""
        },
        variants: []
    },
    {
        id: "btn-3d-5",
        name: "Retro 3D",
        category: "Buttons",
        tags: ["3d", "retro", "push"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: Date.now(),
        code: {
            html: `<button class="pushable">
  <span class="shadow"></span>
  <span class="edge"></span>
  <span class="front">PUSH</span>
</button>`,
            css: `.pushable {
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;
}
.shadow {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  border-radius: 12px;
  background: hsl(0deg 0% 0% / 0.25);
  will-change: transform;
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(.3, .7, .4, 1);
}
.edge {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  border-radius: 12px;
  background: linear-gradient(to left, hsl(340deg 100% 16%) 0%, hsl(340deg 100% 32%) 8%, hsl(340deg 100% 32%) 92%, hsl(340deg 100% 16%) 100%);
}
.front {
  display: block;
  position: relative;
  padding: 12px 42px;
  border-radius: 12px;
  font-size: 1.25rem;
  color: white;
  background: hsl(345deg 100% 47%);
  will-change: transform;
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(.3, .7, .4, 1);
}
.pushable:hover .front { transform: translateY(-6px); transition: transform 250ms cubic-bezier(.3, .7, .4, 1.5); }
.pushable:active .front { transform: translateY(-2px); transition: transform 34ms; }`,
            js: ""
        },
        variants: []
    },
    {
        id: "btn-cyber-s4xjvs",
        name: "Cyberpunk Glitch Pro",
        category: "Buttons",
        tags: ["hover", "cyberpunk"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777025707979,
        code: {
            html: `<button class="cybr-btn-pro">CYBER<span aria-hidden>_</span>
    <span class="cybr-btn__glitch-pro">CYBER_</span>
  </button>`,
            css: `.cybr-btn-pro {
    --primary: #ff003c;
    --shadow-primary: #00e6f6;
    padding: 16px 32px;
    background: var(--primary);
    color: white;
    border: none;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: bold;
    letter-spacing: 2px;
    position: relative;
    cursor: pointer;
    box-shadow: 4px 4px 0px var(--shadow-primary);
  }
  
  .cybr-btn-pro:hover {
    filter: brightness(1.1);
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px var(--shadow-primary);
  }`,
            js: ""
        },
        variants: [
            {
                id: "v1",
                name: "Electric Blue",
                code: {
                    html: "<button class=\"v-blue\">ELECTRIC</button>",
                    css: `.v-blue {
        padding: 12px 24px;
        background: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        box-shadow: 0 0 15px rgba(0,123,255,0.5);
        cursor: pointer;
      }`,
                    js: ""
                }
            }
        ]
    },
    {
        id: "comp-402sqi",
        name: "Ripple Pro Button",
        category: "Buttons",
        tags: ["hover", "ripple"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777026370464,
        code: {
            html: `<button class="btn-ripple" onclick="clickEffect(event)">
    PRO BUTTON
  </button>`,
            css: `.btn-ripple {
    position: relative;
    padding: 16px 40px;
    font-size: 18px;
    color: #fff;
    background: linear-gradient(135deg, #6d28d9, #2563eb);
    border: none;
    border-radius: 14px;
    cursor: pointer;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(37,99,235,0.4);
    transition: 0.3s ease;
  }
  
  .btn-ripple:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 15px 40px rgba(109,40,217,0.5);
  }
  
  .btn-ripple::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: 0.5s;
  }
  
  .btn-ripple:hover::before {
    left: 100%;
  }
  
  .ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 0.6s linear;
    background: rgba(255,255,255,0.5);
  }
  
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }`,
            js: `window.clickEffect = function(e) {
    const btn = e.currentTarget;
    const circle = document.createElement("span");
    circle.classList.add("ripple");
    const rect = btn.getBoundingClientRect();
    circle.style.left = (e.clientX - rect.left) + "px";
    circle.style.top = (e.clientY - rect.top) + "px";
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  }`
        },
        variants: [
            {
                id: "v1",
                name: "Neon Edition",
                code: {
                    html: `<button class="btn-ripple neon" onclick="clickEffect(event)">
        NEON BUTTON
      </button>`,
                    css: `.btn-ripple.neon {
        background: linear-gradient(135deg, #00f5ff, #007bff);
        box-shadow: 0 0 15px rgba(0,245,255,0.5);
      }
      .btn-ripple.neon:hover {
        box-shadow: 0 0 30px rgba(0,245,255,0.9);
      }`,
                    js: ""
                }
            }
        ]
    },
    {
        id: "comp-fimls9",
        name: "Multi-State Pro Button",
        category: "Buttons",
        tags: ["hover", "glass", "neo"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777026370464,
        code: {
            html: `<button class="pro-btn-multi" onclick="clickEffect(event)">
    START NOW
  </button>`,
            css: `.pro-btn-multi {
    position: relative;
    padding: 16px 44px;
    font-size: 18px;
    color: #fff;
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 16px;
    cursor: pointer;
    overflow: hidden;
    background: linear-gradient(135deg, #1e293b, #0f172a);
    box-shadow: 0 10px 30px rgba(0,0,0,0.4);
    transition: all 0.25s ease;
    backdrop-filter: blur(10px);
  }
  
  .pro-btn-multi:hover {
    transform: translateY(-3px);
    border-color: rgba(99,102,241,0.6);
    box-shadow: 0 15px 40px rgba(99,102,241,0.3);
  }
  
  .pro-btn-multi:active {
    transform: scale(0.96);
  }
  
  .pro-btn-multi::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -100%;
    width: 200%;
    height: 200%;
    background: linear-gradient(120deg, transparent, rgba(255,255,255,0.15), transparent);
    transform: rotate(25deg);
    transition: 0.6s;
  }
  
  .pro-btn-multi:hover::before {
    left: 100%;
  }`,
            js: `window.clickEffect = function(e){
    const btn = e.currentTarget;
    const circle = document.createElement("span");
    circle.classList.add("ripple");
    const rect = btn.getBoundingClientRect();
    circle.style.left = (e.clientX - rect.left) + "px";
    circle.style.top = (e.clientY - rect.top) + "px";
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  }`
        },
        variants: [
            {
                id: "v1",
                name: "Glass Morph",
                code: {
                    html: "<button class=\"pro-btn-multi glass\" onclick=\"clickEffect(event)\">GLASS</button>",
                    css: `.pro-btn-multi.glass {
        background: rgba(255,255,255,0.08);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255,255,255,0.25);
      }`,
                    js: ""
                }
            },
            {
                id: "v2",
                name: "Matrix Code",
                code: {
                    html: "<button class=\"pro-btn-multi matrix\" onclick=\"clickEffect(event)\">MATRIX</button>",
                    css: `.pro-btn-multi.matrix {
        background: #001a00;
        border: 1px solid #00ff88;
        color: #00ff88;
      }`,
                    js: ""
                }
            }
        ]
    },
    {
        id: "comp-kvxqzu",
        name: "Liquid Interface Button",
        category: "Buttons",
        tags: ["neon", "liquid", "interactive"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777026370464,
        code: {
            html: `<button class="btn-liquid-neon" onclick="clickEffect(event)">
    PRESS ME
  </button>`,
            css: `.btn-liquid-neon {
    width: 200px;
    height: 55px;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 18px;
    position: relative;
    overflow: hidden;
    transition: 0.3s ease;
    background: linear-gradient(135deg, #7c3aed, #06b6d4);
    box-shadow: 0 10px 30px rgba(124,58,237,0.4);
  }
  
  .btn-liquid-neon::before {
    content:"";
    position:absolute;
    top:0;
    left:-150%;
    width:150%;
    height:100%;
    background: linear-gradient(120deg, transparent, rgba(255,255,255,0.3), transparent);
    transform: skewX(-20deg);
    transition: 0.6s;
  }
  
  .btn-liquid-neon:hover::before {
    left: 150%;
  }
  
  .btn-liquid-neon:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 40px rgba(6,182,212,0.6);
  }`,
            js: `window.clickEffect = function(e){
    const btn = e.currentTarget;
    const circle = document.createElement("span");
    circle.classList.add("ripple");
    const rect = btn.getBoundingClientRect();
    circle.style.left = (e.clientX - rect.left) + "px";
    circle.style.top = (e.clientY - rect.top) + "px";
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  }`
        },
        variants: [
            {
                id: "v1",
                name: "Cyber Red",
                code: {
                    html: "<button class=\"btn-liquid-neon cyber\" onclick=\"clickEffect(event)\">CYBER</button>",
                    css: `.btn-liquid-neon.cyber {
        background: #0a0a0a;
        border: 2px solid #ff003c;
        box-shadow: 0 0 15px #ff003c;
      }`,
                    js: ""
                }
            }
        ]
    },
    {
        id: "comp-p70a06",
        name: "Metaverse Explorer",
        category: "Buttons",
        tags: ["3d", "metaverse", "magical"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777033201789,
        code: {
            html: `<div class="btn-wrap">
  <button class="magical-btn">
    <span class="btn-inner">
      <span class="btn-txt">EXPLORE METAVERSE</span>
      <span class="btn-shimmer"></span>
    </span>
  </button>
</div>`,
            css: `.btn-wrap { perspective: 1000px; }
.magical-btn {
  position: relative;
  padding: 18px 45px;
  font-size: 16px;
  font-weight: 700;
  color: white;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  cursor: pointer;
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  letter-spacing: 2px;
}
.btn-shimmer {
  position: absolute;
  top: 0; left: -100%;
  width: 50%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  transform: skewX(-20deg);
  transition: 0.6s;
}
.magical-btn:hover .btn-shimmer { left: 150%; }
.magical-btn:hover { box-shadow: 0 15px 35px rgba(79, 172, 254, 0.3); }`,
            js: `const btn = document.querySelector('.magical-btn');
const wrap = document.querySelector('.btn-wrap');
wrap.addEventListener('mousemove', (e) => {
  const rect = btn.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = (centerY - y) * 0.15;
  const rotateY = (x - centerX) * 0.15;
  btn.style.transform = \`rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`;
});
wrap.addEventListener('mouseleave', () => {
  btn.style.transform = 'rotateX(0deg) rotateY(0deg)';
});`
        },
        variants: []
    },
    {
        id: "comp-pgnf8z",
        name: "Mercury Node",
        category: "Buttons",
        tags: ["mercury", "glass", "3d"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777033201789,
        code: {
            html: `<button class="mercury-btn" id="mercBtn">
    <span class="merc-shine"></span>
    <span class="merc-text">SYNC SYSTEM</span>
</button>`,
            css: `.mercury-btn {
  position: relative;
  padding: 18px 45px;
  font-size: 16px;
  font-weight: 700;
  border-radius: 12px;
  border: none;
  background: linear-gradient(145deg, #ffffff, #d1d1d1);
  color: #333;
  box-shadow: 6px 6px 12px #bebebe, -6px -6px 12px #ffffff;
  transition: all 0.3s ease;
  overflow: hidden;
  cursor: pointer;
}
.merc-shine {
  position: absolute;
  top: 0; left: -100%; width: 50%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
  transform: skewX(-30deg);
  transition: 0.5s;
}
.mercury-btn:hover .merc-shine { left: 150%; }
.mercury-btn:active { box-shadow: inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff; }`,
            js: `const btn = document.getElementById('mercBtn');
btn.addEventListener('mousemove', (e) => {
  const rect = btn.getBoundingClientRect();
  const rotateX = (rect.height/2 - (e.clientY - rect.top)) / 10;
  const rotateY = ((e.clientX - rect.left) - rect.width/2) / 10;
  btn.style.transform = \`rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`;
});
btn.addEventListener('mouseleave', () => btn.style.transform = 'rotateX(0deg) rotateY(0deg)');`
        },
        variants: []
    },
    {
        id: "comp-k49mkt",
        name: "Stealth Command",
        category: "Buttons",
        tags: ["stealth", "minimal"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777033352975,
        code: {
            html: `<button class="stealth-btn" id="stlBtn">
    <span class="stl-fill"></span>
    <span class="stl-text">ACCESS SYSTEM</span>
</button>`,
            css: `.stealth-btn {
  position: relative;
  padding: 18px 45px;
  background: #1a1a1a;
  color: white;
  border: 2px solid #444;
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  transition: 0.4s;
}
.stl-fill {
  position: absolute;
  bottom: -100%; left: 0; width: 100%; height: 100%;
  background: #333; transition: 0.4s; z-index: 1;
}
.stealth-btn:hover .stl-fill { bottom: 0; }
.stealth-btn:hover { border-color: #00ffcc; color: #00ffcc; }
.stl-text { position: relative; z-index: 2; }`,
            js: ""
        },
        variants: [
            {
                id: "v1",
                name: "Amber Protocol",
                code: {
                    html: "<button class=\"stealth-btn amber\">AMBER_LINK</button>",
                    css: ".amber { border-color: #ffaa00 !important; color: #ffaa00 !important; }",
                    js: ""
                }
            }
        ]
    },
    {
        id: "comp-e7et5w",
        name: "Magma Core",
        category: "Buttons",
        tags: ["magma", "fire", "lava"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777033201789,
        code: {
            html: `<button class="magma-btn" id="magBtn">
    <span class="mag-glow"></span>
    <span class="mag-text">IGNITE CORE</span>
</button>`,
            css: `.magma-btn {
    position: relative;
    padding: 18px 45px;
    background: #0a0a0a;
    color: #ff4500;
    border: 1px solid rgba(255, 69, 0, 0.3);
    border-radius: 12px;
    cursor: pointer;
    overflow: hidden;
    transition: 0.4s;
}
.mag-glow {
    position: absolute;
    top: 50%; left: 50%; width: 0; height: 0;
    background: linear-gradient(135deg, #ff4500, #ff8c00);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: 0.6s;
    z-index: 1;
}
.magma-btn:hover .mag-glow { width: 300px; height: 300px; }
.magma-btn:hover { color: white; border-color: #ff8c00; box-shadow: 0 0 20px rgba(255, 69, 0, 0.4); }
.mag-text { position: relative; z-index: 2; }`,
            js: ""
        },
        variants: []
    },
    {
        id: "comp-kwd6ci",
        name: "Ultra Dimension",
        category: "Buttons",
        tags: ["glow", "hover", "3d", "futuristic"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777033201789,
        code: {
            html: `<div class="hologram-container" id="holoContainer">
      <div class="stack-button" id="stackBtn">
          <!-- Layer 1: The Base Glow -->
          <span class="layer layer-bg"></span>
          
          <!-- Layer 2: The Glass Middle -->
          <span class="layer layer-glass"></span>
          
          <!-- Layer 3: The Content -->
          <span class="layer layer-content">
              <span class="icon">✦</span>
              <span class="text">ULTRA DIMENSION</span>
          </span>
  
          <!-- Light Reflection Sweep -->
          <div class="shine"></div>
      </div>
  </div>`,
            css: `:root {
      --primary: #6366f1;
      --secondary: #a855f7;
      --glass: rgba(255, 255, 255, 0.05);
      --border: rgba(255, 255, 255, 0.2);
  }
  
  .hologram-container {
      padding: 40px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 200px;
  }
  
  .stack-button {
      position: relative;
      width: 260px;
      height: 80px;
      transform-style: preserve-3d;
      transition: transform 0.1s ease-out;
  }
  
  .layer {
      position: absolute;
      inset: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
      pointer-events: none;
  }
  
  /* Layer 1: Deep Glow */
  .layer-bg {
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      filter: blur(20px);
      opacity: 0.2;
      transform: translateZ(-20px);
  }
  
  /* Layer 2: Frosted Glass */
  .layer-glass {
      background: var(--glass);
      backdrop-filter: blur(10px);
      border: 1px solid var(--border);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
      transform: translateZ(0px);
  }
  
  /* Layer 3: Text & Icon */
  .layer-content {
      color: white;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 2px;
      transform: translateZ(20px);
      text-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
  }
  
  .icon {
      margin-right: 10px;
      font-size: 20px;
      color: #00f2ff;
  }
  
  /* Hover State: The "Spread" Effect */
  .stack-button:hover .layer-bg {
      transform: translateZ(-50px) scale(1.1);
      opacity: 0.5;
  }
  
  .stack-button:hover .layer-glass {
      transform: translateZ(25px);
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.5);
  }
  
  .stack-button:hover .layer-content {
      transform: translateZ(70px);
  }
  
  /* Dynamic Shine Sweep */
  .shine {
      position: absolute;
      top: 0; left: -100%;
      width: 100%; height: 100%;
      background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.3),
          transparent
      );
      transform: skewX(-20deg);
      transition: 0.7s;
  }
  
  .stack-button:hover .shine {
      left: 100%;
  }
  
  /* Click Animation */
  .stack-button:active {
      transform: scale(0.9) rotateX(10deg);
  }`,
            js: ""
        },
        variants: []
    },

    {
        id: "comp-s9ddvt",
        name: "New Component",
        category: "Buttons",
        tags: ["neon", "hover", "3d"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777044031019,
        code: {
            html: `<div class="portal-wrapper">
      <button class="portal-btn" id="portalBtn">
          <!-- Rotating Energy Ring -->
          <div class="portal-ring"></div>
          <!-- Inner Dark Hole -->
          <div class="portal-hole"></div>
          <!-- Floating Text -->
          <span class="btn-text">Open Portal</span>
      </button>
  </div>`,
            css: `:root {
      --bg-dark: #09050e;
      --portal-edge: #7c3aed;  /* Deep Purple */
      --portal-core: #d946ef;  /* Neon Magenta */
      --text-color: #f3e8ff;
  }
  
  body {
      background-color: var(--bg-dark);
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      font-family: 'Space Grotesk', system-ui, sans-serif;
      perspective: 1000px;
  }
  
  .portal-wrapper {
      position: relative;
      padding: 20px;
  }
  
  .portal-btn {
      position: relative;
      padding: 22px 65px;
      background: #000;
      border: 2px solid #2e1065;
      border-radius: 50px; /* Pill Shape */
      color: var(--portal-edge);
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 3px;
      text-transform: uppercase;
      cursor: pointer;
      overflow: hidden;
      outline: none;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Bouncy hover */
      z-index: 1;
      box-shadow: 0 0 15px rgba(124, 58, 237, 0.1);
      transform-style: preserve-3d;
  }
  
  /* Rotating Energy Ring (Hidden by default) */
  .portal-ring {
      position: absolute;
      top: 50%; 
      left: 50%;
      width: 300%; 
      padding-bottom: 300%; /* Perfect circle */
      background: conic-gradient(
          from 0deg, 
          transparent, 
          var(--portal-edge) 20%, 
          var(--portal-core) 50%, 
          transparent 60%
      );
      transform: translate(-50%, -50%) rotate(0deg);
      z-index: -2;
      animation: spin 3s linear infinite;
      opacity: 0;
      transition: opacity 0.4s ease;
  }
  
  @keyframes spin {
      0% { transform: translate(-50%, -50%) rotate(0deg); }
      100% { transform: translate(-50%, -50%) rotate(360deg); }
  }
  
  /* The Black Hole Center (Creates inward depth) */
  .portal-hole {
      position: absolute;
      top: 50%; 
      left: 50%;
      width: calc(100% - 2px); 
      height: calc(100% - 2px);
      background: #030005;
      border-radius: 50px;
      transform: translate(-50%, -50%);
      z-index: -1;
      box-shadow: inset 0 0 10px rgba(124, 58, 237, 0.2);
      transition: all 0.4s ease;
  }
  
  /* Floating Text */
  .btn-text {
      position: relative;
      z-index: 2;
      display: inline-block;
      transition: all 0.4s ease;
  }
  
  /* Hover Effects */
  .portal-btn:hover {
      transform: scale(1.05) translateZ(20px);
      box-shadow: 0 10px 40px rgba(217, 70, 239, 0.4);
      color: #fff;
      border-color: transparent;
  }
  
  .portal-btn:hover .portal-ring {
      opacity: 1; /* Reveal energy ring */
  }
  
  .portal-btn:hover .portal-hole {
      /* Shrink the hole to show the energy ring border */
      width: calc(100% - 10px);
      height: calc(100% - 10px);
      box-shadow: inset 0 0 30px var(--portal-core);
  }
  
  .portal-btn:hover .btn-text {
      text-shadow: 0 0 15px #fff;
      transform: translateZ(30px); /* Text floats out */
  }
  
  /* Click Energy Burst */
  .portal-btn:active {
      transform: scale(0.95) translateZ(0px);
  }
  
  .burst-particle {
      position: absolute;
      background: #fff;
      border-radius: 50%;
      pointer-events: none;
      transform: translate(-50%, -50%);
      animation: burst 0.6s ease-out forwards;
  }
  
  @keyframes burst {
      0% { width: 0px; height: 0px; opacity: 1; box-shadow: 0 0 10px #fff; }
      100% { width: 100px; height: 100px; opacity: 0; box-shadow: 0 0 40px var(--portal-core); }
  }`,
            js: `const portalBtn = document.getElementById('portalBtn');
  const textSpan = portalBtn.querySelector('.btn-text');
  
  // 3D Parallax Effect on Mouse Move
  portalBtn.addEventListener('mousemove', (e) => {
      const rect = portalBtn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Shift text opposite to mouse to feel like it's floating above the portal
      const xShift = (x / rect.width - 0.5) * 15;
      const yShift = (y / rect.height - 0.5) * 15;
      
      textSpan.style.transform = \`translate(\${-xShift}px, \${-yShift}px) translateZ(30px)\`;
  });
  
  // Reset Position
  portalBtn.addEventListener('mouseleave', () => {
      textSpan.style.transform = \`translate(0px, 0px) translateZ(0px)\`;
  });
  
  // Click Burst Effect
  portalBtn.addEventListener('mousedown', (e) => {
      const rect = portalBtn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      const particle = document.createElement('div');
      particle.classList.add('burst-particle');
      particle.style.left = \`\${x}px\`;
      particle.style.top = \`\${y}px\`;
  
      portalBtn.appendChild(particle);
  
      // Remove particle after animation
      setTimeout(() => {
          particle.remove();
      }, 600);
  });`
        },
        variants: [
            {
                id: "v1",
                name: "Variant 1",
                code: {
                    html: `<div class="electric-wrapper">
          <button class="electric-btn" id="electricBtn">
              <!-- The Moving Electric Border -->
              <div class="electric-border"></div>
              <!-- Fluid Energy Tank -->
              <div class="energy-fluid"></div>
              <!-- Label -->
              <span class="btn-text">Charge Core</span>
          </button>
      </div>`,
                    css: `:root {
          --core-cyan: #00f2ff;
          --core-blue: #0066ff;
          --bg-dark: #050810;
          --text-light: #e0faff;
      }
      
      body {
          background-color: var(--bg-dark);
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-family: 'Inter', sans-serif;
      }
      
      .electric-wrapper {
          position: relative;
          padding: 10px;
      }
      
      .electric-btn {
          position: relative;
          padding: 22px 65px;
          background: #081221;
          border: 1px solid rgba(0, 242, 255, 0.2);
          border-radius: 50px; /* Pill Shape maintained */
          color: var(--core-cyan);
          font-size: 18px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          overflow: hidden;
          outline: none;
          transition: all 0.4s ease;
          z-index: 1;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      }
      
      /* Electric Border Flow (Moving Glow) */
      .electric-border {
          position: absolute;
          top: 0; left: 0;
          width: 200%; height: 100%;
          background: linear-gradient(90deg, 
              transparent, 
              var(--core-cyan), 
              var(--core-blue), 
              transparent
          );
          opacity: 0.3;
          z-index: -1;
          animation: flow 3s linear infinite;
      }
      
      @keyframes flow {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
      }
      
      /* Fluid Energy Fill (Rises on Hover) */
      .energy-fluid {
          position: absolute;
          bottom: -100%; /* Hidden at bottom */
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(0deg, var(--core-blue), var(--core-cyan));
          transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
          z-index: -2;
          filter: blur(5px);
      }
      
      /* Hover States */
      .electric-btn:hover {
          color: #fff;
          border-color: var(--core-cyan);
          box-shadow: 0 0 40px rgba(0, 242, 255, 0.3);
          letter-spacing: 4px;
      }
      
      .electric-btn:hover .energy-fluid {
          bottom: 0; /* Fill up */
      }
      
      .electric-btn:hover .electric-border {
          opacity: 1;
          animation-duration: 1s; /* Speed up electricity */
      }
      
      /* Text floating effect */
      .btn-text {
          position: relative;
          z-index: 2;
          display: inline-block;
          transition: transform 0.3s ease;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
      }
      
      /* Click Energy Pulse */
      .electric-btn:active {
          transform: scale(0.95);
      }`,
                    js: `const btn = document.getElementById('electricBtn');
      const text = btn.querySelector('.btn-text');
      
      // Subtle Tilt & Parallax
      btn.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
      
          // Calculate rotation (Tilt)
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = (y - centerY) / 10;
          const rotateY = (centerX - x) / 10;
      
          btn.style.transform = \`perspective(1000px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`;
          
          // Move text slightly for 3D depth
          text.style.transform = \`translate(\${(x - centerX) / 8}px, \${(y - centerY) / 8}px)\`;
      });
      
      // Reset on Leave
      btn.addEventListener('mouseleave', () => {
          btn.style.transform = \`perspective(1000px) rotateX(0deg) rotateY(0deg)\`;
          text.style.transform = \`translate(0, 0)\`;
      });
      
      // Click Shockwave
      btn.addEventListener('click', () => {
          btn.style.animation = 'none';
          void btn.offsetWidth; // trigger reflow
          btn.style.boxShadow = '0 0 60px #fff';
          setTimeout(() => {
              btn.style.boxShadow = '0 0 40px rgba(0, 242, 255, 0.3)';
          }, 200);
      });`
                }
            },
            {
                id: "v2",
                name: "Variant 2",
                code: {
                    html: `<div class="holo-wrapper">
          <button class="holo-btn" id="holoBtn">
              <!-- Holographic Color Layer -->
              <div class="holo-layer"></div>
              <!-- Realistic Light Reflection -->
              <div class="light-reflection"></div>
              <!-- Internal Scan Line -->
              <div class="scan-line"></div>
              <span class="btn-text">Sync Hologram</span>
          </button>
      </div>`,
                    css: `:root {
          --bg-dark: #02040a;
          --holo-gradient: linear-gradient(
              45deg, 
              #ff00ff, #00ffff, #ff00ff, #00ffff
          );
          --glass-border: rgba(255, 255, 255, 0.2);
      }
      
      body {
          background-color: var(--bg-dark);
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-family: 'Inter', sans-serif;
          perspective: 1000px;
      }
      
      .holo-wrapper {
          position: relative;
          padding: 20px;
      }
      
      .holo-btn {
          position: relative;
          padding: 22px 65px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
          border-radius: 50px; /* Pill Shape */
          color: #fff;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          overflow: hidden;
          outline: none;
          transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
          z-index: 1;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          transform-style: preserve-3d;
      }
      
      /* Holographic Color Shifting Layer */
      .holo-layer {
          position: absolute;
          top: -50%; left: -50%;
          width: 200%; height: 200%;
          background: linear-gradient(
              135deg,
              rgba(255, 0, 255, 0.2),
              rgba(0, 255, 255, 0.2),
              rgba(255, 255, 0, 0.2),
              rgba(255, 0, 255, 0.2)
          );
          background-size: 400% 400%;
          z-index: -2;
          opacity: 0;
          transition: opacity 0.5s ease;
          animation: holo-shift 8s ease infinite;
      }
      
      @keyframes holo-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
      }
      
      /* Moving Light Reflection (Cursor Follow) */
      .light-reflection {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: radial-gradient(
              circle at var(--rx) var(--ry), 
              rgba(255, 255, 255, 0.4) 0%, 
              transparent 50%
          );
          pointer-events: none;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
      }
      
      /* Vertical Scanning Line */
      .scan-line {
          position: absolute;
          left: -100%;
          top: 0;
          width: 30%;
          height: 100%;
          background: linear-gradient(
              90deg, 
              transparent, 
              rgba(255, 255, 255, 0.15), 
              transparent
          );
          transform: skewX(-20deg);
          z-index: 0;
      }
      
      /* Hover States */
      .holo-btn:hover {
          transform: translateY(-5px) rotateX(var(--rotX)) rotateY(var(--rotY));
          border-color: rgba(255, 255, 255, 0.5);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6),
                      inset 0 0 20px rgba(255, 255, 255, 0.1);
      }
      
      .holo-btn:hover .holo-layer {
          opacity: 1;
      }
      
      .holo-btn:hover .light-reflection {
          opacity: 1;
      }
      
      .holo-btn:hover .scan-line {
          animation: scan 2s infinite;
      }
      
      @keyframes scan {
          0% { left: -100%; }
          100% { left: 150%; }
      }
      
      .btn-text {
          position: relative;
          z-index: 2;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
      }
      
      /* Click State */
      .holo-btn:active {
          transform: scale(0.95);
      }`,
                    js: `const btn = document.getElementById('holoBtn');
      
      btn.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
      
          // Reflection Logic (follows mouse)
          btn.style.setProperty('--rx', \`\${x}px\`);
          btn.style.setProperty('--ry', \`\${y}px\`);
      
          // 3D Tilt Logic
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotX = (centerY - y) / 8; // Max tilt up/down
          const rotY = (x - centerX) / 8; // Max tilt left/right
      
          btn.style.setProperty('--rotX', \`\${rotX}deg\`);
          btn.style.setProperty('--rotY', \`\${rotY}deg\`);
      });
      
      // Reset tilt and reflection on leave
      btn.addEventListener('mouseleave', () => {
          btn.style.setProperty('--rotX', '0deg');
          btn.style.setProperty('--rotY', '0deg');
          // Smooth reset for the reflection point is handled by CSS transition
      });`
                }
            },
            {
                id: "v3",
                name: "Variant 3",
                code: {
                    html: `<div class="frost-wrapper">
          <button class="frost-btn" id="frostBtn">
              <!-- Aurora Liquid Background -->
              <div class="aurora-container">
                  <div class="aurora-blob one"></div>
                  <div class="aurora-blob two"></div>
                  <div class="aurora-blob three"></div>
              </div>
              <!-- Frosted Overlay -->
              <div class="frosted-glass"></div>
              <!-- Content -->
              <span class="btn-text">Aurora Sync</span>
          </button>
      </div>`,
                    css: `:root {
          --bg-dark: #030712;
          --aurora-1: #00f2ff;
          --aurora-2: #7000ff;
          --aurora-3: #00ffaa;
          --text-color: #f0f9ff;
      }
      
      body {
          background-color: var(--bg-dark);
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-family: 'Inter', sans-serif;
      }
      
      .frost-wrapper {
          position: relative;
          padding: 20px;
      }
      
      .frost-btn {
          position: relative;
          padding: 22px 65px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px; /* Pill Shape */
          color: var(--text-color);
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          overflow: hidden;
          outline: none;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      }
      
      /* Aurora Container */
      .aurora-container {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          z-index: -2;
          filter: blur(25px); /* Softens blobs into liquid light */
          transition: transform 0.5s ease-out;
      }
      
      /* Aurora Blobs */
      .aurora-blob {
          position: absolute;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          opacity: 0.6;
          transition: all 0.6s ease-out;
      }
      
      .one { background: var(--aurora-1); top: -20%; left: 10%; animation: float 6s infinite alternate; }
      .two { background: var(--aurora-2); bottom: -20%; right: 10%; animation: float 8s infinite alternate-reverse; }
      .three { background: var(--aurora-3); top: 20%; left: 40%; animation: float 7s infinite linear; }
      
      @keyframes float {
          from { transform: translate(0, 0); }
          to { transform: translate(20px, 15px); }
      }
      
      /* Frosted Glass Effect Overlay */
      .frosted-glass {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: -1;
      }
      
      /* Hover States */
      .frost-btn:hover {
          border-color: rgba(255, 255, 255, 0.5);
          box-shadow: 0 0 40px rgba(0, 242, 255, 0.2);
          transform: translateY(-3px);
      }
      
      .frost-btn:hover .aurora-container {
          filter: blur(15px); /* Sharpen lights on hover */
      }
      
      .btn-text {
          position: relative;
          z-index: 2;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
      }
      
      /* Click Feedback */
      .frost-btn:active {
          transform: translateY(1px) scale(0.97);
      }`,
                    js: `const btn = document.getElementById('frostBtn');
      const blobs = document.querySelectorAll('.aurora-blob');
      
      btn.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;
      
          blobs.forEach((blob, index) => {
              const speed = (index + 1) * 0.15;
              
              // Repulsion Logic: Blobs move AWAY from the cursor
              // Calculate vector from mouse to blob center
              const blobRect = blob.getBoundingClientRect();
              const blobX = (blobRect.left + blobRect.width / 2) - rect.left;
              const blobY = (blobRect.top + blobRect.height / 2) - rect.top;
      
              const diffX = blobX - mouseX;
              const diffY = blobY - mouseY;
      
              // Apply a push force
              const moveX = diffX * speed;
              const moveY = diffY * speed;
      
              blob.style.transform = \`translate(\${moveX}px, \${moveY}px)\`;
          });
      });
      
      btn.addEventListener('mouseleave', () => {
          // Return blobs to their original floating state
          blobs.forEach(blob => {
              blob.style.transform = \`translate(0, 0)\`;
          });
      });`
                }
            },
            {
                id: "v4",
                name: "Variant 4",
                code: {
                    html: `<div class="mercury-wrapper">
          <button class="mercury-btn" id="mercuryBtn">
              <!-- The Metallic Fluid Layer -->
              <div class="metal-surface"></div>
              <!-- Light Reflection (Follows Mouse) -->
              <div class="metal-reflection"></div>
              <!-- Chrome Shine Sweep -->
              <div class="chrome-sweep"></div>
              <span class="btn-text">Merge Reality</span>
          </button>
      </div>`,
                    css: `:root {
          --bg-dark: #000000;
          --metal-base: #1a1a1a;
          --metal-bright: #ffffff;
          --metal-mid: #737373;
      }
      
      body {
          background-color: var(--bg-dark);
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-family: 'Inter', sans-serif;
      }
      
      .mercury-wrapper {
          position: relative;
          padding: 20px;
      }
      
      .mercury-btn {
          position: relative;
          padding: 22px 65px;
          background: var(--metal-base);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px; /* Pill Shape */
          color: var(--metal-mid);
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          cursor: pointer;
          overflow: hidden;
          outline: none;
          z-index: 1;
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.9);
      }
      
      /* Base Liquid Metal Texture */
      .metal-surface {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: linear-gradient(145deg, #111, #333);
          z-index: -2;
      }
      
      /* Dynamic Reflection Point */
      .metal-reflection {
          position: absolute;
          top: var(--ry);
          left: var(--rx);
          width: 300px;
          height: 300px;
          background: radial-gradient(
              circle, 
              rgba(255, 255, 255, 0.4) 0%, 
              rgba(255, 255, 255, 0.1) 30%, 
              transparent 70%
          );
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
          filter: blur(10px);
      }
      
      /* Continuous Chrome Sweep Animation */
      .chrome-sweep {
          position: absolute;
          top: 0;
          left: -150%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.2),
              transparent
          );
          transform: skewX(-30deg);
          transition: 0.5s;
      }
      
      /* Hover States */
      .mercury-btn:hover {
          color: var(--metal-bright);
          border-color: rgba(255, 255, 255, 0.6);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 1),
                      inset 0 0 15px rgba(255, 255, 255, 0.1);
          letter-spacing: 5px;
      }
      
      .mercury-btn:hover .metal-reflection {
          opacity: 1;
      }
      
      .mercury-btn:hover .chrome-sweep {
          left: 150%;
          transition: 0.8s;
      }
      
      /* Click Wobble Effect */
      .mercury-btn:active {
          transform: scale(0.94) skewX(1deg);
          background: #444;
      }
      
      .btn-text {
          position: relative;
          z-index: 2;
          mix-blend-mode: difference; /* Text color reacts to metal shine */
      }`,
                    js: `const btn = document.getElementById('mercuryBtn');
      
      btn.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
      
          // Reflection Tracking
          btn.style.setProperty('--rx', \`\${x}px\`);
          btn.style.setProperty('--ry', \`\${y}px\`);
      
          // Dynamic Liquid Tilt
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const tiltX = (y - centerY) / 10;
          const tiltY = (centerX - x) / 10;
      
          // Added a slight "wobble" to the scale based on position
          const dist = Math.hypot(x - centerX, y - centerY);
          const scale = 1 + (dist / 1000); 
      
          btn.style.transform = \`perspective(800px) rotateX(\${tiltX}deg) rotateY(\${tiltY}deg) scale(\${scale})\`;
      });
      
      btn.addEventListener('mouseleave', () => {
          // Reset position smoothly
          btn.style.transform = \`perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)\`;
      });
      
      // Click Interaction
      btn.addEventListener('click', () => {
          // Mercury "splits" on click (Visual simulation through scale)
          btn.style.letterSpacing = "10px";
          setTimeout(() => {
              btn.style.letterSpacing = "5px";
          }, 300);
      });`
                }
            },
            {
                id: "v5",
                name: "Variant 5",
                code: {
                    html: `<div class="magma-wrapper">
          <button class="magma-btn" id="magmaBtn">
              <!-- Molten Lava Flow -->
              <div class="lava-flow"></div>
              <!-- Texture Overlay (Stone/Cracks) -->
              <div class="stone-texture"></div>
              <!-- Heat Aura -->
              <div class="heat-glow"></div>
              <span class="btn-text">Ignite Core</span>
          </button>
      </div>`,
                    css: `:root {
          --bg-dark: #080202;
          --lava-bright: #ff4d00;
          --lava-dark: #801000;
          --stone-color: #1a1a1a;
      }
      
      body {
          background-color: var(--bg-dark);
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-family: 'Montserrat', sans-serif;
      }
      
      .magma-wrapper {
          position: relative;
          padding: 20px;
      }
      
      .magma-btn {
          position: relative;
          padding: 22px 65px;
          background: var(--stone-color);
          border: 1px solid #333;
          border-radius: 50px; /* Pill Shape */
          color: #ffd2b3;
          font-size: 18px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          overflow: hidden;
          outline: none;
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          z-index: 1;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.8);
      }
      
      /* Internal Molten Lava Tracking */
      .lava-flow {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: radial-gradient(
              circle at var(--lx) var(--ly), 
              var(--lava-bright) 0%, 
              var(--lava-dark) 50%, 
              transparent 80%
          );
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: -2;
          filter: blur(5px);
      }
      
      /* Stone Texture / Cracks Overlay */
      .stone-texture {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background-image: url('https://www.transparenttextures.com/patterns/carbon-fibre.png'); /* Subtle stone texture */
          opacity: 0.3;
          z-index: -1;
          mix-blend-mode: multiply;
      }
      
      /* Outer Heat Aura */
      .heat-glow {
          position: absolute;
          top: 50%; left: 50%;
          width: 140%; height: 140%;
          background: radial-gradient(circle, rgba(255, 77, 0, 0.2) 0%, transparent 70%);
          transform: translate(-50%, -50%) scale(0.8);
          opacity: 0;
          filter: blur(40px);
          z-index: -3;
          transition: all 0.6s ease;
      }
      
      /* Hover States */
      .magma-btn:hover {
          color: #fff;
          border-color: var(--lava-bright);
          text-shadow: 0 0 15px var(--lava-bright);
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 40px rgba(255, 60, 0, 0.2);
      }
      
      .magma-btn:hover .lava-flow {
          opacity: 1;
      }
      
      .magma-btn:hover .heat-glow {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1.1);
      }
      
      /* Click Animation: Flare Up */
      .magma-btn:active {
          transform: translateY(0) scale(0.96);
          background: var(--lava-bright);
          transition: 0.1s;
      }
      
      .btn-text {
          position: relative;
          z-index: 2;
      }`,
                    js: `const btn = document.getElementById('magmaBtn');
      
      btn.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
      
          // Heat Spot Tracking
          btn.style.setProperty('--lx', \`\${x}px\`);
          btn.style.setProperty('--ly', \`\${y}px\`);
      
          // Subtle 3D Tilt
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const tiltX = (y - centerY) / 8;
          const tiltY = (centerX - x) / 8;
      
          btn.style.transform = \`perspective(1000px) translateY(-4px) rotateX(\${tiltX}deg) rotateY(\${tiltY}deg)\`;
      });
      
      btn.addEventListener('mouseleave', () => {
          // Reset to base hover state
          btn.style.transform = \`perspective(1000px) translateY(0) rotateX(0deg) rotateY(0deg)\`;
      });
      
      // Click Shockwave
      btn.addEventListener('click', () => {
          // Quick flash effect logic already in CSS :active
          console.log("Core Ignited!");
      });`
                }
            }
        ]
    },


    {
        id: "comp-xbia8b",
        name: "New Component",
        category: "Buttons",
        tags: ["neon", "hover", "3d"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777044031019,
        code: {
            html: `<div class="scene">
      <div class="warp-btn-wrap" id="warpWrap">
          <button class="warp-btn" id="warpBtn">
              <!-- Background Depth Layer -->
              <div class="portal-bg"></div>
              
              <!-- Spinning Energy Ring -->
              <div class="energy-ring"></div>
              
              <!-- Particle Stars -->
              <div class="stars"></div>
              
              <!-- Floating Text Content -->
              <div class="content-layer">
                  <span class="btn-text">WARP DRIVE</span>
                  <span class="btn-subtext">ENTER DIMENSION X-12</span>
              </div>
              
              <!-- Top Glass Shine -->
              <div class="glass-shine"></div>
          </button>
      </div>
  </div>`,
            css: `:root {
      --deep-bg: #020205;
      --neon-cyan: #00f2ff;
      --neon-purple: #7000ff;
      --glass: rgba(255, 255, 255, 0.05);
  }
  
  body {
      background-color: #050505;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      font-family: 'Space Grotesk', sans-serif;
      perspective: 1200px; /* Crucial for 3D */
      overflow: hidden;
  }
  
  .scene {
      width: 400px;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      transform-style: preserve-3d;
  }
  
  .warp-btn-wrap {
      position: relative;
      transform-style: preserve-3d;
      transition: transform 0.1s ease-out;
  }
  
  .warp-btn {
      position: relative;
      width: 280px;
      height: 90px;
      background: var(--deep-bg);
      border: 1px solid rgba(0, 242, 255, 0.3);
      border-radius: 16px;
      cursor: pointer;
      overflow: hidden;
      outline: none;
      transform-style: preserve-3d;
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
      transition: box-shadow 0.4s, border 0.4s;
  }
  
  /* 1. Deep Background Layer (Far back in Z-space) */
  .portal-bg {
      position: absolute;
      top: -50%; left: -50%; width: 200%; height: 200%;
      background: radial-gradient(circle at center, #1a0b2e 0%, #000 70%);
      transform: translateZ(-40px) scale(1.2); /* Deepest layer */
      z-index: -3;
  }
  
  /* 2. Spinning Energy Ring */
  .energy-ring {
      position: absolute;
      top: 50%; left: 50%;
      width: 150px; height: 150px;
      background: conic-gradient(from 0deg, transparent, var(--neon-cyan), var(--neon-purple), transparent 60%);
      border-radius: 50%;
      transform: translate(-50%, -50%) translateZ(-20px) rotate(0deg);
      filter: blur(15px);
      opacity: 0.4;
      animation: spin 4s linear infinite;
      z-index: -2;
  }
  
  @keyframes spin {
      to { transform: translate(-50%, -50%) translateZ(-20px) rotate(360deg); }
  }
  
  /* 3. Starfield (Middle Layer) */
  .stars {
      position: absolute;
      width: 100%; height: 100%;
      background-image: 
          radial-gradient(1px 1px at 20px 30px, #fff, transparent),
          radial-gradient(1px 1px at 50px 70px, #fff, transparent),
          radial-gradient(1px 1px at 150px 40px, #fff, transparent),
          radial-gradient(1.5px 1.5px at 200px 80px, var(--neon-cyan), transparent);
      background-size: 100% 100%;
      transform: translateZ(-10px);
      opacity: 0.5;
      z-index: -1;
  }
  
  /* 4. Content Layer (Closest to viewer) */
  .content-layer {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      transform: translateZ(40px); /* Floats 40px above background */
      pointer-events: none;
  }
  
  .btn-text {
      font-size: 20px;
      font-weight: 900;
      color: #fff;
      letter-spacing: 4px;
      text-shadow: 0 0 20px rgba(0, 242, 255, 0.8);
  }
  
  .btn-subtext {
      font-size: 9px;
      color: var(--neon-cyan);
      letter-spacing: 2px;
      margin-top: 5px;
      opacity: 0.7;
  }
  
  /* 5. Surface Shine (The "Glass" cover) */
  .glass-shine {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%);
      z-index: 5;
  }
  
  /* Hover States */
  .warp-btn:hover {
      border-color: var(--neon-cyan);
      box-shadow: 0 0 40px rgba(0, 242, 255, 0.3), 0 30px 60px rgba(0,0,0,0.6);
  }
  
  .warp-btn:hover .energy-ring {
      opacity: 0.8;
      animation-duration: 1.5s; /* Speed up on hover */
  }
  
  /* Click Sensation */
  .warp-btn:active {
      transform: translateZ(-10px);
      transition: 0.1s;
  }`,
            js: `const warpWrap = document.getElementById('warpWrap');
  const warpBtn = document.getElementById('warpBtn');
  const portalBg = document.querySelector('.portal-bg');
  const stars = document.querySelector('.stars');
  const content = document.querySelector('.content-layer');
  
  document.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
  
      // Normalize coordinates (-1 to 1)
      const x = (clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (clientY - innerHeight / 2) / (innerHeight / 2);
  
      // 1. Rotate the whole button container
      const rotateX = y * -25; // Tilt up/down
      const rotateY = x * 25;  // Tilt left/right
      warpWrap.style.transform = \`rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`;
  
      // 2. Parallax: Move internal layers independently based on Z-depth
      // Deep background moves with the mouse (more subtle)
      portalBg.style.transform = \`translate(\${x * 15}px, \${y * 15}px) translateZ(-40px) scale(1.2)\`;
      
      // Middle stars layer
      stars.style.transform = \`translate(\${x * -25}px, \${y * -25}px) translateZ(-10px)\`;
      
      // Front content moves opposite to mouse (feels like it's floating)
      content.style.transform = \`translate(\${x * -45}px, \${y * -45}px) translateZ(40px)\`;
  });
  
  // Smooth reset when mouse leaves the window or stops moving
  // (Optional: You can add mouseleave to reset transform)
  warpWrap.addEventListener('mouseleave', () => {
      warpWrap.style.transition = "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
      warpWrap.style.transform = \`rotateX(0deg) rotateY(0deg)\`;
      
      portalBg.style.transform = \`translate(0, 0) translateZ(-40px) scale(1.2)\`;
      stars.style.transform = \`translate(0, 0) translateZ(-10px)\`;
      content.style.transform = \`translate(0, 0) translateZ(40px)\`;
  });
  
  warpWrap.addEventListener('mouseenter', () => {
      warpWrap.style.transition = "transform 0.1s ease-out";
  });`
        },
        variants: [
            {
                id: "v1",
                name: "Variant 1",
                code: {
                    html: `<div class="scene">
          <div class="neural-wrap" id="neuralWrap">
              <button class="neural-btn" id="neuralBtn">
                  <!-- Layer 1: Hexagonal Grid (Deepest) -->
                  <div class="grid-bg"></div>
                  
                  <!-- Layer 2: Glowing Synapse Nodes (Middle) -->
                  <div class="nodes-layer">
                      <div class="node n1"></div>
                      <div class="node n2"></div>
                      <div class="node n3"></div>
                  </div>
                  
                  <!-- Layer 3: Data Scan Line (Middle-Front) -->
                  <div class="data-pulse"></div>
                  
                  <!-- Layer 4: Bio-Metric Content (Front) -->
                  <div class="content-layer">
                      <div class="bio-icon"></div>
                      <span class="btn-text">BIO-LINK</span>
                      <span class="status-text">LINK ESTABLISHED</span>
                  </div>
      
                  <!-- Surface Reflection -->
                  <div class="glass-glare"></div>
              </button>
          </div>
      </div>`,
                    css: `:root {
          --neural-gold: #ffcc00;
          --neural-amber: #ff8800;
          --deep-bg: #0a0805;
          --grid-color: rgba(255, 204, 0, 0.1);
      }
      
      body {
          background-color: #050505;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-family: 'Syne', sans-serif;
          perspective: 1200px;
      }
      
      .scene {
          width: 400px;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
      }
      
      .neural-wrap {
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.1s ease-out;
      }
      
      .neural-btn {
          position: relative;
          width: 280px;
          height: 90px;
          background: var(--deep-bg);
          border: 1px solid rgba(255, 204, 0, 0.2);
          border-radius: 12px;
          cursor: pointer;
          overflow: hidden;
          outline: none;
          transform-style: preserve-3d;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8);
      }
      
      /* Layer 1: Hex Grid (Z: -50px) */
      .grid-bg {
          position: absolute;
          top: -50%; left: -50%; width: 200%; height: 200%;
          background-image: 
              linear-gradient(var(--grid-color) 1px, transparent 1px),
              linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
          background-size: 20px 20px;
          transform: translateZ(-50px);
          z-index: -4;
      }
      
      /* Layer 2: Glowing Nodes (Z: -20px) */
      .node {
          position: absolute;
          width: 6px; height: 6px;
          background: var(--neural-gold);
          border-radius: 50%;
          box-shadow: 0 0 15px var(--neural-gold);
          transform: translateZ(-20px);
          z-index: -3;
      }
      .n1 { top: 20%; left: 30%; animation: pulse 2s infinite; }
      .n2 { bottom: 30%; right: 20%; animation: pulse 2.5s infinite 0.5s; }
      .n3 { top: 60%; left: 10%; animation: pulse 3s infinite 1s; }
      
      @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: translateZ(-20px) scale(1); }
          50% { opacity: 1; transform: translateZ(-20px) scale(1.5); }
      }
      
      /* Layer 3: Data Pulse (Z: 0px) */
      .data-pulse {
          position: absolute;
          top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 136, 0, 0.2), transparent);
          z-index: -1;
          animation: scan 3s linear infinite;
      }
      
      @keyframes scan {
          to { left: 200%; }
      }
      
      /* Layer 4: Front Content (Z: 50px) */
      .content-layer {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transform: translateZ(50px);
          z-index: 10;
      }
      
      .btn-text {
          font-size: 22px;
          font-weight: 800;
          color: var(--neural-gold);
          letter-spacing: 5px;
          text-shadow: 0 0 15px rgba(255, 204, 0, 0.5);
      }
      
      .status-text {
          font-size: 10px;
          color: #fff;
          opacity: 0.6;
          letter-spacing: 2px;
          margin-top: 4px;
      }
      
      /* Surface Detail */
      .glass-glare {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(135deg, rgba(255,255,255,0.05), transparent);
          z-index: 15;
      }
      
      /* Hover & Active */
      .neural-btn:hover {
          border-color: var(--neural-gold);
          box-shadow: 0 0 30px rgba(255, 204, 0, 0.2), 0 40px 80px rgba(0,0,0,0.9);
      }
      
      .neural-btn:active {
          transform: translateZ(-15px);
      }`,
                    js: `const wrap = document.getElementById('neuralWrap');
      const grid = document.querySelector('.grid-bg');
      const nodes = document.querySelector('.nodes-layer');
      const content = document.querySelector('.content-layer');
      
      document.addEventListener('mousemove', (e) => {
          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;
      
          // Center coordinates (-1 to 1)
          const x = (clientX - innerWidth / 2) / (innerWidth / 2);
          const y = (clientY - innerHeight / 2) / (innerHeight / 2);
      
          // 1. Overall Container Rotation
          wrap.style.transform = \`rotateX(\${y * -20}deg) rotateY(\${x * 20}deg)\`;
      
          // 2. Advanced Parallax (Layered Displacement)
          // Grid moves far with mouse
          grid.style.transform = \`translate(\${x * 20}px, \${y * 20}px) translateZ(-50px)\`;
          
          // Nodes move less
          nodes.style.transform = \`translate(\${x * -10}px, \${y * -10}px)\`;
          
          // Content moves opposite to create extreme depth
          content.style.transform = \`translate(\${x * -40}px, \${y * -40}px) translateZ(50px)\`;
      });
      
      wrap.addEventListener('mouseleave', () => {
          wrap.style.transition = "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
          wrap.style.transform = "rotateX(0deg) rotateY(0deg)";
          
          // Reset layers
          grid.style.transform = "translate(0, 0) translateZ(-50px)";
          content.style.transform = "translate(0, 0) translateZ(50px)";
      });
      
      wrap.addEventListener('mouseenter', () => {
          wrap.style.transition = "transform 0.1s ease-out";
      });`
                }
            },
            {
                id: "v2",
                name: "Variant 2",
                code: {
                    html: `<div class="scene">
          <div class="quantum-wrap" id="quantumWrap">
              <button class="quantum-btn" id="quantumBtn">
                  <!-- Layer 1: Deep Core Glow (Deepest) -->
                  <div class="core-glow"></div>
                  
                  <!-- Layer 2: Orbiting Rings (Middle) -->
                  <div class="orbit-rings">
                      <div class="ring r1"></div>
                      <div class="ring r2"></div>
                  </div>
                  
                  <!-- Layer 3: Floating Sub-atomic Particles (Middle-Front) -->
                  <div class="particle-field">
                      <div class="p p1"></div>
                      <div class="p p2"></div>
                      <div class="p p3"></div>
                      <div class="p p4"></div>
                  </div>
                  
                  <!-- Layer 4: Quantum Data (Front) -->
                  <div class="content-layer">
                      <span class="btn-text">QUANTUM</span>
                      <div class="status-line">
                          <span class="dot"></span>
                          <span class="line-text">CORE STABLE</span>
                      </div>
                  </div>
      
                  <!-- Top Frosted Surface -->
                  <div class="frosted-finish"></div>
              </button>
          </div>
      </div>`,
                    css: `:root {
          --quantum-teal: #00ffcc;
          --quantum-emerald: #00cc66;
          --deep-void: #020a08;
          --particle-white: rgba(255, 255, 255, 0.6);
      }
      
      body {
          background-color: #050505;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-family: 'Space Grotesk', sans-serif;
          perspective: 1200px;
      }
      
      .scene {
          width: 400px;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
      }
      
      .quantum-wrap {
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.1s ease-out;
      }
      
      .quantum-btn {
          position: relative;
          width: 280px;
          height: 90px;
          background: var(--deep-void);
          border: 1px solid rgba(0, 255, 204, 0.2);
          border-radius: 16px;
          cursor: pointer;
          overflow: hidden;
          outline: none;
          transform-style: preserve-3d;
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.8);
      }
      
      /* Layer 1: Core Glow (Z: -60px) */
      .core-glow {
          position: absolute;
          top: 50%; left: 50%;
          width: 150px; height: 150px;
          background: radial-gradient(circle, var(--quantum-teal) 0%, transparent 70%);
          transform: translate(-50%, -50%) translateZ(-60px);
          opacity: 0.3;
          z-index: -4;
      }
      
      /* Layer 2: Orbiting Rings (Z: -30px) */
      .ring {
          position: absolute;
          top: 50%; left: 50%;
          border: 1px solid rgba(0, 255, 204, 0.1);
          border-radius: 50%;
          transform: translate(-50%, -50%) translateZ(-30px);
      }
      .r1 { width: 120px; height: 120px; animation: rotate 10s linear infinite; }
      .r2 { width: 180px; height: 80px; animation: rotate 15s linear infinite reverse; }
      
      @keyframes rotate {
          from { transform: translate(-50%, -50%) translateZ(-30px) rotate(0deg); }
          to { transform: translate(-50%, -50%) translateZ(-30px) rotate(360deg); }
      }
      
      /* Layer 3: Particles (Z: -10px) */
      .p {
          position: absolute;
          width: 4px; height: 4px;
          background: var(--particle-white);
          border-radius: 50%;
          transform: translateZ(-10px);
      }
      .p1 { top: 20%; left: 20%; animation: float 3s infinite alternate; }
      .p2 { top: 70%; left: 80%; animation: float 4s infinite alternate-reverse; }
      .p3 { top: 40%; left: 50%; animation: float 5s infinite linear; }
      
      @keyframes float {
          to { transform: translate(10px, -10px) translateZ(-10px); }
      }
      
      /* Layer 4: Content (Z: 60px) */
      .content-layer {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transform: translateZ(60px);
          z-index: 10;
      }
      
      .btn-text {
          font-size: 24px;
          font-weight: 900;
          color: #fff;
          letter-spacing: 6px;
          text-shadow: 0 0 20px rgba(0, 255, 204, 0.6);
      }
      
      .status-line {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 5px;
      }
      
      .dot {
          width: 6px; height: 6px;
          background: var(--quantum-teal);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--quantum-teal);
      }
      
      .line-text {
          font-size: 10px;
          color: var(--quantum-teal);
          letter-spacing: 2px;
          opacity: 0.8;
      }
      
      /* Surface Detail */
      .frosted-finish {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(135deg, rgba(255,255,255,0.08), transparent);
          z-index: 15;
      }
      
      /* Hover & Interactions */
      .quantum-btn:hover {
          border-color: var(--quantum-teal);
          box-shadow: 0 0 40px rgba(0, 255, 204, 0.15), 0 50px 100px rgba(0,0,0,1);
      }
      
      .quantum-btn:hover .core-glow {
          opacity: 0.6;
          width: 200px; height: 200px;
      }
      
      .quantum-btn:active {
          transform: translateZ(-20px);
      }`,
                    js: `const wrap = document.getElementById('quantumWrap');
      const core = document.querySelector('.core-glow');
      const particles = document.querySelector('.particle-field');
      const content = document.querySelector('.content-layer');
      
      document.addEventListener('mousemove', (e) => {
          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;
      
          // Normalize mouse position (-1 to 1)
          const x = (clientX - innerWidth / 2) / (innerWidth / 2);
          const y = (clientY - innerHeight / 2) / (innerHeight / 2);
      
          // 1. Parent Rotation (Tilt)
          wrap.style.transform = \`rotateX(\${y * -25}deg) rotateY(\${x * 25}deg)\`;
      
          // 2. Parallax Depth Logic
          // Core (Deepest) moves with the mouse
          core.style.transform = \`translate(\${x * 20}px, \${y * 20}px) translate(-50%, -50%) translateZ(-60px)\`;
          
          // Particles move slightly opposite
          particles.style.transform = \`translate(\${x * -15}px, \${y * -15}px)\`;
          
          // Content (Front) moves strongly opposite to create window effect
          content.style.transform = \`translate(\${x * -50}px, \${y * -50}px) translateZ(60px)\`;
      });
      
      // Smooth reset
      wrap.addEventListener('mouseleave', () => {
          wrap.style.transition = "transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)";
          wrap.style.transform = "rotateX(0deg) rotateY(0deg)";
          
          core.style.transform = "translate(-50%, -50%) translateZ(-60px)";
          content.style.transform = "translate(0, 0) translateZ(60px)";
      });
      
      wrap.addEventListener('mouseenter', () => {
          wrap.style.transition = "transform 0.1s ease-out";
      });`
                }
            },
            {
                id: "v3",
                name: "Variant 3",
                code: {
                    html: `<div class="scene">
          <div class="retro-wrap" id="retroWrap">
              <button class="retro-btn" id="retroBtn">
                  <!-- Layer 1: The Synthwave Sun (Deepest) -->
                  <div class="retro-sun"></div>
                  
                  <!-- Layer 2: Moving Neon Grid Floor (Middle) -->
                  <div class="grid-floor"></div>
                  
                  <!-- Layer 3: Floating Neon Text (Front) -->
                  <div class="content-layer">
                      <span class="btn-text" data-text="OVERDRIVE">OVERDRIVE</span>
                      <div class="glitch-line"></div>
                  </div>
      
                  <!-- Layer 4: CRT Scanlines Overlay -->
                  <div class="scanlines"></div>
                  
                  <!-- Surface Reflection -->
                  <div class="top-glare"></div>
              </button>
          </div>
      </div>`,
                    css: `:root {
          --retro-pink: #ff00ff;
          --retro-blue: #00ffff;
          --retro-purple: #7000ff;
          --deep-space: #0b011d;
      }
      
      body {
          background-color: #050505;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-family: 'Audiowide', cursive; /* Retro tech font */
          perspective: 1200px;
      }
      
      .scene {
          width: 400px;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
      }
      
      .retro-wrap {
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.1s ease-out;
      }
      
      .retro-btn {
          position: relative;
          width: 280px;
          height: 100px;
          background: var(--deep-space);
          border: 2px solid var(--retro-pink);
          border-radius: 8px;
          cursor: pointer;
          overflow: hidden;
          outline: none;
          transform-style: preserve-3d;
          box-shadow: 0 0 20px rgba(255, 0, 255, 0.3), 0 40px 80px rgba(0,0,0,0.8);
      }
      
      /* Layer 1: Retro Sun (Z: -80px) */
      .retro-sun {
          position: absolute;
          top: 10%; left: 50%;
          width: 120px; height: 120px;
          background: linear-gradient(to bottom, #ffcc00, var(--retro-pink));
          border-radius: 50%;
          transform: translate(-50%, 0) translateZ(-80px);
          box-shadow: 0 0 40px var(--retro-pink);
          z-index: -4;
      }
      
      /* Layer 2: Grid Floor (Z: -40px) */
      .grid-floor {
          position: absolute;
          bottom: -50%; left: -50%;
          width: 200%; height: 100%;
          background-image: 
              linear-gradient(transparent 0%, var(--retro-blue) 2%, transparent 5%),
              linear-gradient(90deg, transparent 0%, var(--retro-blue) 2%, transparent 5%);
          background-size: 40px 40px;
          transform: perspective(100px) rotateX(60deg) translateZ(-40px);
          z-index: -3;
          animation: grid-move 2s linear infinite;
          opacity: 0.5;
      }
      
      @keyframes grid-move {
          from { background-position: 0 0; }
          to { background-position: 0 40px; }
      }
      
      /* Layer 3: Floating Text (Z: 60px) */
      .content-layer {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transform: translateZ(60px);
          z-index: 10;
      }
      
      .btn-text {
          font-size: 28px;
          font-weight: 900;
          color: #fff;
          letter-spacing: 5px;
          text-shadow: 
              3px 3px var(--retro-pink),
              -3px -3px var(--retro-blue);
          animation: color-vibrate 0.3s infinite alternate;
      }
      
      @keyframes color-vibrate {
          0% { text-shadow: 2px 2px var(--retro-pink), -2px -2px var(--retro-blue); }
          100% { text-shadow: -2px -2px var(--retro-pink), 2px 2px var(--retro-blue); }
      }
      
      /* CRT Scanlines overlay */
      .scanlines {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), 
                      linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          background-size: 100% 4px, 3px 100%;
          z-index: 15;
          pointer-events: none;
      }
      
      /* Hover Effects */
      .retro-btn:hover {
          border-color: var(--retro-blue);
          box-shadow: 0 0 50px rgba(0, 255, 255, 0.4);
      }
      
      .retro-btn:active {
          transform: translateZ(-20px) scale(0.95);
      }`,
                    js: `const wrap = document.getElementById('retroWrap');
      const sun = document.querySelector('.retro-sun');
      const grid = document.querySelector('.grid-floor');
      const content = document.querySelector('.content-layer');
      
      document.addEventListener('mousemove', (e) => {
          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;
      
          // Normalize coordinates (-1 to 1)
          const x = (clientX - innerWidth / 2) / (innerWidth / 2);
          const y = (clientY - innerHeight / 2) / (innerHeight / 2);
      
          // 1. Box Rotation (Tilt)
          wrap.style.transform = \`rotateX(\${y * -30}deg) rotateY(\${x * 30}deg)\`;
      
          // 2. Multi-Level Parallax
          // Sun (Deepest) moves with mouse
          sun.style.transform = \`translate(calc(-50% + \${x * 15}px), \${y * 15}px) translateZ(-80px)\`;
          
          // Grid floor (Middle)
          grid.style.transform = \`perspective(100px) rotateX(60deg) translateZ(-40px) translate(\${x * -10}px, \${y * -10}px)\`;
          
          // Text (Front) moves strongly opposite to create window depth
          content.style.transform = \`translate(\${x * -50}px, \${y * -50}px) translateZ(60px)\`;
      });
      
      // Smooth Reset
      wrap.addEventListener('mouseleave', () => {
          wrap.style.transition = "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)";
          wrap.style.transform = "rotateX(0deg) rotateY(0deg)";
          
          sun.style.transform = "translate(-50%, 0) translateZ(-80px)";
          content.style.transform = "translate(0, 0) translateZ(60px)";
      });
      
      wrap.addEventListener('mouseenter', () => {
          wrap.style.transition = "transform 0.1s ease-out";
      });`
                }
            },
            {
                id: "v4",
                name: "Variant 4",
                code: {
                    html: `<div class="scene">
          <div class="abyss-wrap" id="abyssWrap">
              <button class="abyss-btn" id="abyssBtn">
                  <!-- Layer 1: Sun Rays from Surface (Deepest) -->
                  <div class="ocean-surface"></div>
                  
                  <!-- Layer 2: Bioluminescent Particles (Middle) -->
                  <div class="bubble-field">
                      <div class="bubble b1"></div>
                      <div class="bubble b2"></div>
                      <div class="bubble b3"></div>
                      <div class="bubble b4"></div>
                      <div class="bubble b5"></div>
                  </div>
                  
                  <!-- Layer 3: Floating Submerged Text (Front) -->
                  <div class="content-layer">
                      <span class="btn-text">DIVE DEEP</span>
                      <span class="depth-meter">DEPTH: 10,000M</span>
                  </div>
      
                  <!-- Layer 4: Water Refraction Overlay -->
                  <div class="refraction-overlay"></div>
                  
                  <!-- Surface Shine -->
                  <div class="water-glare"></div>
              </button>
          </div>
      </div>`,
                    css: `:root {
          --deep-navy: #010b13;
          --abyss-cyan: #00d4ff;
          --abyss-teal: #00ffa3;
          --bubble-glow: rgba(0, 212, 255, 0.4);
      }
      
      body {
          background-color: #050505;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-family: 'Inter', sans-serif;
          perspective: 1200px;
      }
      
      .scene {
          width: 400px;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
      }
      
      .abyss-wrap {
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.1s ease-out;
      }
      
      .abyss-btn {
          position: relative;
          width: 280px;
          height: 90px;
          background: var(--deep-navy);
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 20px;
          cursor: pointer;
          overflow: hidden;
          outline: none;
          transform-style: preserve-3d;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8), inset 0 0 20px rgba(0, 0, 0, 0.5);
      }
      
      /* Layer 1: Sunlight Rays (Z: -70px) */
      .ocean-surface {
          position: absolute;
          top: -100%; left: -50%;
          width: 200%; height: 200%;
          background: conic-gradient(from 180deg at 50% 0%, 
              transparent 40%, 
              var(--abyss-cyan) 45%, 
              transparent 50%, 
              var(--abyss-teal) 55%, 
              transparent 60%
          );
          opacity: 0.15;
          transform: translateZ(-70px);
          filter: blur(20px);
          animation: rays 10s linear infinite;
          z-index: -4;
      }
      
      @keyframes rays {
          to { transform: translateZ(-70px) rotate(360deg); }
      }
      
      /* Layer 2: Bubbles (Z: -30px) */
      .bubble {
          position: absolute;
          background: var(--bubble-glow);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          transform: translateZ(-30px);
          z-index: -3;
      }
      .b1 { width: 8px; height: 8px; left: 10%; bottom: -10%; animation: rise 4s infinite 0s; }
      .b2 { width: 12px; height: 12px; left: 30%; bottom: -10%; animation: rise 6s infinite 1s; }
      .b3 { width: 6px; height: 6px; left: 60%; bottom: -10%; animation: rise 5s infinite 2.5s; }
      .b4 { width: 10px; height: 10px; right: 15%; bottom: -10%; animation: rise 7s infinite 0.5s; }
      
      @keyframes rise {
          0% { transform: translateZ(-30px) translateY(0) scale(1); opacity: 0; }
          50% { opacity: 0.6; }
          100% { transform: translateZ(-30px) translateY(-120px) scale(1.5); opacity: 0; }
      }
      
      /* Layer 3: Floating Text (Z: 50px) */
      .content-layer {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transform: translateZ(50px);
          z-index: 10;
      }
      
      .btn-text {
          font-size: 24px;
          font-weight: 800;
          color: #fff;
          letter-spacing: 6px;
          text-shadow: 0 0 15px var(--abyss-cyan);
          animation: sway 4s ease-in-out infinite;
      }
      
      .depth-meter {
          font-size: 9px;
          color: var(--abyss-teal);
          letter-spacing: 3px;
          margin-top: 6px;
          opacity: 0.7;
      }
      
      @keyframes sway {
          0%, 100% { transform: translateX(-2px); }
          50% { transform: translateX(2px); }
      }
      
      /* Water Refraction Detail */
      .refraction-overlay {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: url('https://www.transparenttextures.com/patterns/water.png'); /* Subtle water texture */
          opacity: 0.05;
          z-index: 5;
          pointer-events: none;
      }
      
      /* Hover States */
      .abyss-btn:hover {
          border-color: var(--abyss-cyan);
          box-shadow: 0 0 40px rgba(0, 212, 255, 0.2), 0 40px 80px rgba(0,0,0,1);
      }
      
      .abyss-btn:hover .ocean-surface {
          opacity: 0.3;
      }
      
      .abyss-btn:active {
          transform: translateZ(-15px);
      }`,
                    js: `const wrap = document.getElementById('abyssWrap');
      const surface = document.querySelector('.ocean-surface');
      const bubbles = document.querySelector('.bubble-field');
      const content = document.querySelector('.content-layer');
      
      document.addEventListener('mousemove', (e) => {
          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;
      
          // Normalize coordinates (-1 to 1)
          const x = (clientX - innerWidth / 2) / (innerWidth / 2);
          const y = (clientY - innerHeight / 2) / (innerHeight / 2);
      
          // 1. Box Rotation (Tilt)
          wrap.style.transform = \`rotateX(\${y * -25}deg) rotateY(\${x * 25}deg)\`;
      
          // 2. Parallax Depth Displacement
          // Surface Rays (Deepest) move with mouse
          surface.style.transform = \`translate(calc(-50% + \${x * 20}px), \${y * 20}px) translateZ(-70px) rotate(0deg)\`;
          
          // Bubbles move slightly opposite
          bubbles.style.transform = \`translate(\${x * -15}px, \${y * -15}px)\`;
          
          // Text (Front) moves strongly opposite to create fluid window depth
          content.style.transform = \`translate(\${x * -45}px, \${y * -45}px) translateZ(50px)\`;
      });
      
      // Smooth Reset on Leave
      wrap.addEventListener('mouseleave', () => {
          wrap.style.transition = "transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)";
          wrap.style.transform = "rotateX(0deg) rotateY(0deg)";
          
          surface.style.transform = "translate(-50%, -100%) translateZ(-70px) rotate(0deg)";
          content.style.transform = "translate(0, 0) translateZ(50px)";
      });
      
      wrap.addEventListener('mouseenter', () => {
          wrap.style.transition = "transform 0.1s ease-out";
      });`
                }
            },
            {
                id: "v5",
                name: "Variant 5",
                code: {
                    html: `<div class="scene">
          <div class="magma-wrap" id="magmaWrap">
              <button class="magma-btn" id="magmaBtn">
                  <!-- Layer 1: Molten Lava Lake (Deepest) -->
                  <div class="lava-lake"></div>
                  
                  <!-- Layer 2: Floating Embers (Middle) -->
                  <div class="ember-field">
                      <div class="ember e1"></div>
                      <div class="ember e2"></div>
                      <div class="ember e3"></div>
                      <div class="ember e4"></div>
                  </div>
                  
                  <!-- Layer 3: Warning Text (Front) -->
                  <div class="content-layer">
                      <span class="btn-text">IGNITE CORE</span>
                      <span class="temp-readout">TEMP: 1200°C</span>
                  </div>
      
                  <!-- Layer 4: Heat Shimmer & Cracks -->
                  <div class="heat-distortion"></div>
                  
                  <!-- Surface Glare -->
                  <div class="fire-glare"></div>
              </button>
          </div>
      </div>`,
                    css: `:root {
          --lava-hot: #ff4d00;
          --lava-deep: #801000;
          --obsidian: #0a0a0a;
          --ember-color: #ffcc00;
      }
      
      body {
          background-color: #050505;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-family: 'Inter', sans-serif;
          perspective: 1200px;
      }
      
      .scene {
          width: 400px;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
      }
      
      .magma-wrap {
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.1s ease-out;
      }
      
      .magma-btn {
          position: relative;
          width: 280px;
          height: 90px;
          background: var(--obsidian);
          border: 2px solid #222;
          border-radius: 12px;
          cursor: pointer;
          overflow: hidden;
          outline: none;
          transform-style: preserve-3d;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 1), inset 0 0 30px rgba(255, 60, 0, 0.1);
      }
      
      /* Layer 1: Lava Lake (Z: -90px) */
      .lava-lake {
          position: absolute;
          top: -50%; left: -50%; width: 200%; height: 200%;
          background: radial-gradient(circle at center, var(--lava-hot) 0%, var(--lava-deep) 40%, #000 80%);
          transform: translateZ(-90px);
          filter: blur(15px);
          animation: pulse-heat 4s ease-in-out infinite alternate;
          z-index: -4;
      }
      
      @keyframes pulse-heat {
          from { opacity: 0.4; transform: translateZ(-90px) scale(1); }
          to { opacity: 0.8; transform: translateZ(-90px) scale(1.2); }
      }
      
      /* Layer 2: Embers (Z: -30px) */
      .ember {
          position: absolute;
          background: var(--ember-color);
          width: 4px; height: 4px;
          border-radius: 50%;
          filter: blur(1px) drop-shadow(0 0 5px var(--lava-hot));
          transform: translateZ(-30px);
          z-index: -3;
      }
      .e1 { top: 20%; left: 10%; animation: rise-drift 3s infinite; }
      .e2 { top: 60%; left: 40%; animation: rise-drift 4s infinite 1s; }
      .e3 { bottom: 10%; right: 20%; animation: rise-drift 5s infinite 0.5s; }
      .e4 { top: 40%; right: 40%; animation: rise-drift 3.5s infinite 2s; }
      
      @keyframes rise-drift {
          0% { transform: translateZ(-30px) translate(0, 50px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateZ(-30px) translate(15px, -50px); opacity: 0; }
      }
      
      /* Layer 3: Content (Z: 60px) */
      .content-layer {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transform: translateZ(60px);
          z-index: 10;
      }
      
      .btn-text {
          font-size: 26px;
          font-weight: 900;
          color: #fff;
          letter-spacing: 4px;
          text-shadow: 0 0 20px var(--lava-hot), 2px 2px #000;
      }
      
      .temp-readout {
          font-size: 10px;
          color: var(--lava-hot);
          letter-spacing: 3px;
          font-family: monospace;
          margin-top: 5px;
          background: rgba(0,0,0,0.5);
          padding: 2px 8px;
          border-radius: 4px;
      }
      
      /* Heat Distortion Texture */
      .heat-distortion {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: url('https://www.transparenttextures.com/patterns/carbon-fibre.png');
          opacity: 0.1;
          z-index: 5;
          mix-blend-mode: overlay;
      }
      
      /* Hover States */
      .magma-btn:hover {
          border-color: var(--lava-hot);
          box-shadow: 0 0 50px rgba(255, 60, 0, 0.4), 0 40px 80px rgba(0,0,0,1);
      }
      
      .magma-btn:active {
          transform: translateZ(-20px);
      }`,
                    js: `const wrap = document.getElementById('magmaWrap');
      const lava = document.querySelector('.lava-lake');
      const embers = document.querySelector('.ember-field');
      const content = document.querySelector('.content-layer');
      
      document.addEventListener('mousemove', (e) => {
          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;
      
          // Normalize coordinates (-1 to 1)
          const x = (clientX - innerWidth / 2) / (innerWidth / 2);
          const y = (clientY - innerHeight / 2) / (innerHeight / 2);
      
          // 1. Box Rotation (Tilt)
          wrap.style.transform = \`rotateX(\${y * -25}deg) rotateY(\${x * 25}deg)\`;
      
          // 2. Parallax Depth Displacement
          // Lava (Deepest) moves slowly with mouse
          lava.style.transform = \`translate(calc(-50% + \${x * 25}px), calc(-50% + \${y * 25}px)) translateZ(-90px)\`;
          
          // Embers move slightly
          embers.style.transform = \`translate(\${x * -15}px, \${y * -15}px)\`;
          
          // Text (Front) moves strongly opposite
          content.style.transform = \`translate(\${x * -55}px, \${y * -55}px) translateZ(60px)\`;
      });
      
      // Smooth Reset
      wrap.addEventListener('mouseleave', () => {
          wrap.style.transition = "transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)";
          wrap.style.transform = "rotateX(0deg) rotateY(0deg)";
          
          lava.style.transform = "translate(-50%, -50%) translateZ(-90px)";
          content.style.transform = "translate(0, 0) translateZ(60px)";
      });
      
      wrap.addEventListener('mouseenter', () => {
          wrap.style.transition = "transform 0.1s ease-out";
      });`
                }
            },
            {
                id: "v6",
                name: "Variant 6",
                code: {
                    html: `<div class="scene">
          <div class="nature-wrap" id="natureWrap">
              <button class="nature-btn" id="natureBtn">
                  <!-- Layer 1: Dense Foliage Glow (Deepest) -->
                  <div class="forest-bg"></div>
                  
                  <!-- Layer 2: Bio-Luminescent Spores (Middle) -->
                  <div class="spore-field">
                      <div class="spore s1"></div>
                      <div class="spore s2"></div>
                      <div class="spore s3"></div>
                      <div class="spore s4"></div>
                  </div>
                  
                  <!-- Layer 3: Organic Text (Front) -->
                  <div class="content-layer">
                      <span class="btn-text">NEXUS</span>
                      <div class="life-sign">
                          <div class="pulse-dot"></div>
                          <span class="pulse-text">LIFE-FORM DETECTED</span>
                      </div>
                  </div>
      
                  <!-- Layer 4: Leaf Refraction Texture -->
                  <div class="leaf-overlay"></div>
                  
                  <!-- Surface Glare -->
                  <div class="moss-glare"></div>
              </button>
          </div>
      </div>`,
                    css: `:root {
          --emerald: #00ff88;
          --lime: #ccff00;
          --deep-moss: #041a0d;
          --spore-glow: rgba(204, 255, 0, 0.4);
      }
      
      body {
          background-color: #050505;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-family: 'Syne', sans-serif;
          perspective: 1200px;
      }
      
      .scene {
          width: 400px;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
      }
      
      .nature-wrap {
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.1s ease-out;
      }
      
      .nature-btn {
          position: relative;
          width: 280px;
          height: 95px;
          background: var(--deep-moss);
          border: 1px solid rgba(0, 255, 136, 0.2);
          border-radius: 18px;
          cursor: pointer;
          overflow: hidden;
          outline: none;
          transform-style: preserve-3d;
          box-shadow: 0 35px 70px rgba(0, 0, 0, 0.8), inset 0 0 20px rgba(0, 255, 136, 0.1);
      }
      
      /* Layer 1: Forest Background (Z: -75px) */
      .forest-bg {
          position: absolute;
          top: -50%; left: -50%; width: 200%; height: 200%;
          background: radial-gradient(circle at center, var(--emerald) 0%, #0a2e1a 40%, #000 80%);
          transform: translateZ(-75px);
          filter: blur(25px);
          opacity: 0.3;
          animation: organic-pulse 5s ease-in-out infinite alternate;
          z-index: -4;
      }
      
      @keyframes organic-pulse {
          from { opacity: 0.2; transform: translateZ(-75px) scale(1); }
          to { opacity: 0.5; transform: translateZ(-75px) scale(1.15); }
      }
      
      /* Layer 2: Spores (Z: -35px) */
      .spore {
          position: absolute;
          width: 5px; height: 5px;
          background: var(--lime);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--lime);
          transform: translateZ(-35px);
          z-index: -3;
      }
      .s1 { top: 20%; left: 15%; animation: drift 4s infinite ease-in-out; }
      .s2 { top: 60%; left: 45%; animation: drift 6s infinite ease-in-out 1s; }
      .s3 { bottom: 20%; right: 20%; animation: drift 5s infinite ease-in-out 0.5s; }
      .s4 { top: 30%; right: 30%; animation: drift 7s infinite ease-in-out 2s; }
      
      @keyframes drift {
          0%, 100% { transform: translateZ(-35px) translate(0, 0); opacity: 0.4; }
          50% { transform: translateZ(-35px) translate(15px, -20px); opacity: 1; }
      }
      
      /* Layer 3: Content (Z: 65px) */
      .content-layer {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transform: translateZ(65px);
          z-index: 10;
      }
      
      .btn-text {
          font-size: 28px;
          font-weight: 800;
          color: #fff;
          letter-spacing: 8px;
          text-shadow: 0 0 15px var(--emerald);
      }
      
      .life-sign {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 6px;
          background: rgba(0, 255, 136, 0.05);
          padding: 3px 12px;
          border-radius: 20px;
          border: 1px solid rgba(0, 255, 136, 0.1);
      }
      
      .pulse-dot {
          width: 6px; height: 6px;
          background: var(--lime);
          border-radius: 50%;
          animation: heart-beat 1.5s infinite;
      }
      
      @keyframes heart-beat {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
      }
      
      .pulse-text {
          font-size: 9px;
          color: var(--emerald);
          letter-spacing: 2px;
          font-weight: 600;
      }
      
      /* Leaf Detail Overlay */
      .leaf-overlay {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background-image: url('https://www.transparenttextures.com/patterns/natural-paper.png');
          opacity: 0.1;
          z-index: 5;
          pointer-events: none;
      }
      
      /* Hover States */
      .nature-btn:hover {
          border-color: var(--emerald);
          box-shadow: 0 0 40px rgba(0, 255, 136, 0.15), 0 45px 90px rgba(0,0,0,0.9);
      }
      
      .nature-btn:active {
          transform: translateZ(-20px);
      }`,
                    js: `const wrap = document.getElementById('natureWrap');
      const forest = document.querySelector('.forest-bg');
      const spores = document.querySelector('.spore-field');
      const content = document.querySelector('.content-layer');
      
      document.addEventListener('mousemove', (e) => {
          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;
      
          const x = (clientX - innerWidth / 2) / (innerWidth / 2);
          const y = (clientY - innerHeight / 2) / (innerHeight / 2);
      
          // 1. Box Rotation (Tilt)
          wrap.style.transform = \`rotateX(\${y * -25}deg) rotateY(\${x * 25}deg)\`;
      
          // 2. Nature Parallax Logic
          // Background Forest (Deepest)
          forest.style.transform = \`translate(calc(-50% + \${x * 20}px), calc(-50% + \${y * 20}px)) translateZ(-75px)\`;
          
          // Spores Layer (Middle)
          spores.style.transform = \`translate(\${x * -15}px, \${y * -15}px)\`;
          
          // Content (Front) - Moves strongly opposite for organic depth
          content.style.transform = \`translate(\${x * -50}px, \${y * -50}px) translateZ(65px)\`;
      });
      
      // Smooth Reset
      wrap.addEventListener('mouseleave', () => {
          wrap.style.transition = "transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)";
          wrap.style.transform = "rotateX(0deg) rotateY(0deg)";
          
          forest.style.transform = "translate(-50%, -50%) translateZ(-75px)";
          content.style.transform = "translate(0, 0) translateZ(65px)";
      });
      
      wrap.addEventListener('mouseenter', () => {
          wrap.style.transition = "transform 0.1s ease-out";
      });`
                }
            },
            {
                id: "v7",
                name: "Variant 7",
                code: {
                    html: `<div class="scene">
          <div class="celestial-wrap" id="celestialWrap">
              <button class="celestial-btn" id="celestialBtn">
                  <!-- Layer 1: Golden Nebula/Clouds (Deepest) -->
                  <div class="cloud-bg"></div>
                  
                  <!-- Layer 2: Floating Gold Dust (Middle) -->
                  <div class="dust-field">
                      <div class="dust d1"></div>
                      <div class="dust d2"></div>
                      <div class="dust d3"></div>
                      <div class="dust d4"></div>
                  </div>
                  
                  <!-- Layer 3: Elegant Text (Front) -->
                  <div class="content-layer">
                      <span class="btn-text">ASCEND</span>
                      <div class="gold-separator"></div>
                      <span class="sub-label">PREMIUM ACCESS</span>
                  </div>
      
                  <!-- Layer 4: Marble/Light Reflection Texture -->
                  <div class="marble-overlay"></div>
                  
                  <!-- Divine Halo Surface Shine -->
                  <div class="halo-shine"></div>
              </button>
          </div>
      </div>`,
                    css: `:root {
          --gold-bright: #ffdf91;
          --gold-dark: #b38b2d;
          --celestial-white: #ffffff;
          --ethereal-bg: #0f1115;
      }
      
      body {
          background-color: #050505;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-family: 'Cinzel', serif; /* Elegant Serif font */
          perspective: 1200px;
      }
      
      .scene {
          width: 400px;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
      }
      
      .celestial-wrap {
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.1s ease-out;
      }
      
      .celestial-btn {
          position: relative;
          width: 280px;
          height: 95px;
          background: linear-gradient(135deg, #1a1c20, #0a0b0d);
          border: 1px solid rgba(179, 139, 45, 0.3);
          border-radius: 4px; /* Sharp professional edges */
          cursor: pointer;
          overflow: hidden;
          outline: none;
          transform-style: preserve-3d;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.9);
      }
      
      /* Layer 1: Celestial Clouds (Z: -100px) */
      .cloud-bg {
          position: absolute;
          top: -50%; left: -50%; width: 200%; height: 200%;
          background: radial-gradient(circle at center, rgba(179, 139, 45, 0.2) 0%, transparent 60%);
          transform: translateZ(-100px);
          filter: blur(30px);
          animation: ether-float 8s ease-in-out infinite alternate;
          z-index: -4;
      }
      
      @keyframes ether-float {
          from { transform: translateZ(-100px) translate(-10%, -10%); opacity: 0.3; }
          to { transform: translateZ(-100px) translate(10%, 10%); opacity: 0.6; }
      }
      
      /* Layer 2: Gold Dust (Z: -40px) */
      .dust {
          position: absolute;
          width: 2px; height: 2px;
          background: var(--gold-bright);
          border-radius: 50%;
          box-shadow: 0 0 8px var(--gold-bright);
          transform: translateZ(-40px);
          z-index: -3;
      }
      .d1 { top: 20%; left: 20%; animation: twinkle 3s infinite; }
      .d2 { top: 70%; left: 50%; animation: twinkle 4s infinite 1s; }
      .d3 { bottom: 20%; right: 25%; animation: twinkle 5s infinite 0.5s; }
      .d4 { top: 40%; right: 15%; animation: twinkle 3.5s infinite 2s; }
      
      @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: translateZ(-40px) scale(1); }
          50% { opacity: 1; transform: translateZ(-40px) scale(1.5); }
      }
      
      /* Layer 3: Content (Z: 70px) */
      .content-layer {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transform: translateZ(70px);
          z-index: 10;
      }
      
      .btn-text {
          font-size: 26px;
          font-weight: 400;
          color: #fff;
          letter-spacing: 12px;
          background: linear-gradient(to bottom, #fff, var(--gold-bright));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
      }
      
      .gold-separator {
          width: 40px;
          height: 1px;
          background: var(--gold-dark);
          margin: 10px 0;
          transition: width 0.4s ease;
      }
      
      .sub-label {
          font-size: 8px;
          color: var(--gold-bright);
          letter-spacing: 4px;
          opacity: 0.6;
      }
      
      /* Marble Overlay / Light Sweep */
      .marble-overlay {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background-image: url('https://www.transparenttextures.com/patterns/black-paper.png');
          opacity: 0.2;
          z-index: 5;
          pointer-events: none;
      }
      
      /* Hover States */
      .celestial-btn:hover {
          border-color: var(--gold-bright);
          box-shadow: 0 0 40px rgba(179, 139, 45, 0.2), 0 50px 100px rgba(0,0,0,1);
      }
      
      .celestial-btn:hover .gold-separator {
          width: 100px;
      }
      
      .celestial-btn:active {
          transform: translateZ(-20px);
      }`,
                    js: `const wrap = document.getElementById('celestialWrap');
      const cloud = document.querySelector('.cloud-bg');
      const dust = document.querySelector('.dust-field');
      const content = document.querySelector('.content-layer');
      
      document.addEventListener('mousemove', (e) => {
          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;
      
          const x = (clientX - innerWidth / 2) / (innerWidth / 2);
          const y = (clientY - innerHeight / 2) / (innerHeight / 2);
      
          // 1. Smooth Elegant Rotation
          wrap.style.transform = \`rotateX(\${y * -20}deg) rotateY(\${x * 20}deg)\`;
      
          // 2. Parallax: Luxurious Depth
          // Clouds move slowly in the back
          cloud.style.transform = \`translate(calc(-50% + \${x * 15}px), calc(-50% + \${y * 15}px)) translateZ(-100px)\`;
          
          // Gold dust middle layer
          dust.style.transform = \`translate(\${x * -10}px, \${y * -10}px)\`;
          
          // Content moves strongly opposite (Extreme Window Effect)
          content.style.transform = \`translate(\${x * -60}px, \${y * -60}px) translateZ(70px)\`;
      });
      
      // Smooth Reset
      wrap.addEventListener('mouseleave', () => {
          wrap.style.transition = "transform 1s cubic-bezier(0.19, 1, 0.22, 1)";
          wrap.style.transform = "rotateX(0deg) rotateY(0deg)";
          
          cloud.style.transform = "translate(-50%, -50%) translateZ(-100px)";
          content.style.transform = "translate(0, 0) translateZ(70px)";
      });
      
      wrap.addEventListener('mouseenter', () => {
          wrap.style.transition = "transform 0.1s ease-out";
      });`
                }
            },
            {
                id: "v8",
                name: "Variant 8",
                code: {
                    html: `<div class="scene">
          <div class="glitch-wrap" id="glitchWrap">
              <button class="glitch-btn" id="glitchBtn">
                  <!-- Layer 1: Digital Noise Static (Deepest) -->
                  <div class="noise-bg"></div>
                  
                  <!-- Layer 2: Floating Code Fragments (Middle) -->
                  <div class="code-fragments">
                      <span class="frag f1">010110</span>
                      <span class="frag f2">ERR_NULL</span>
                      <span class="frag f3">VOX_7</span>
                      <span class="frag f4">>RUN</span>
                  </div>
                  
                  <!-- Layer 3: Glitched Text (Front) -->
                  <div class="content-layer">
                      <span class="btn-text" data-text="SYSTEM_VOID">SYSTEM_VOID</span>
                      <span class="error-code">404 // REALITY_BREACH</span>
                  </div>
      
                  <!-- Layer 4: CRT Scanlines & Screen Glitch -->
                  <div class="glitch-overlay"></div>
                  
                  <!-- RGB Displacement Surface -->
                  <div class="rgb-flicker"></div>
              </button>
          </div>
      </div>`,
                    css: `:root {
          --neon-pink: #ff0055;
          --neon-cyan: #00f2ff;
          --neon-green: #00ff41;
          --void-black: #050505;
      }
      
      body {
          background-color: #000;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-family: 'Fira Code', monospace; /* Hacker/Code font */
          perspective: 1200px;
      }
      
      .scene {
          width: 400px;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
      }
      
      .glitch-wrap {
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.1s ease-out;
      }
      
      .glitch-btn {
          position: relative;
          width: 280px;
          height: 95px;
          background: var(--void-black);
          border: 1px solid #222;
          border-radius: 2px; /* Brutalist sharp edges */
          cursor: pointer;
          overflow: hidden;
          outline: none;
          transform-style: preserve-3d;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 1);
      }
      
      /* Layer 1: Digital Noise (Z: -110px) */
      .noise-bg {
          position: absolute;
          top: -50%; left: -50%; width: 200%; height: 200%;
          background: url('https://www.transparenttextures.com/patterns/p6-static.png');
          background-color: #111;
          transform: translateZ(-110px);
          opacity: 0.2;
          z-index: -4;
      }
      
      /* Layer 2: Code Fragments (Z: -50px) */
      .frag {
          position: absolute;
          font-size: 10px;
          color: var(--neon-green);
          opacity: 0.4;
          transform: translateZ(-50px);
          z-index: -3;
      }
      .f1 { top: 20%; left: 10%; animation: drift-v 3s infinite; }
      .f2 { top: 60%; right: 10%; animation: drift-v 4s infinite 1s; }
      .f3 { bottom: 10%; left: 40%; animation: drift-v 2s infinite 0.5s; }
      .f4 { top: 10%; right: 40%; animation: drift-v 5s infinite; }
      
      @keyframes drift-v {
          0%, 100% { transform: translateZ(-50px) translateY(0); opacity: 0.2; }
          50% { transform: translateZ(-50px) translateY(-10px); opacity: 0.6; }
      }
      
      /* Layer 3: Main Glitch Text (Z: 80px) */
      .content-layer {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transform: translateZ(80px);
          z-index: 10;
      }
      
      .btn-text {
          font-size: 28px;
          font-weight: 900;
          color: #fff;
          letter-spacing: 2px;
          position: relative;
          text-shadow: 2px 0 var(--neon-pink), -2px 0 var(--neon-cyan);
      }
      
      /* RGB Glitch Animation */
      .glitch-btn:hover .btn-text {
          animation: text-glitch 0.3s cubic-bezier(.25, .46, .45, .94) both infinite;
      }
      
      @keyframes text-glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-3px, 2px); }
          40% { transform: translate(-3px, -2px); }
          60% { transform: translate(3px, 2px); }
          80% { transform: translate(3px, -2px); }
          100% { transform: translate(0); }
      }
      
      .error-code {
          font-size: 9px;
          color: var(--neon-pink);
          letter-spacing: 1px;
          margin-top: 5px;
          background: rgba(255, 0, 85, 0.1);
      }
      
      /* Surface Detail: RGB Flicker */
      .rgb-flicker {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), 
                      linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          background-size: 100% 2px, 3px 100%;
          z-index: 15;
          pointer-events: none;
          opacity: 0.5;
      }
      
      /* Hover States */
      .glitch-btn:hover {
          border-color: var(--neon-pink);
          box-shadow: -5px 0 var(--neon-pink), 5px 0 var(--neon-cyan);
      }
      
      .glitch-btn:active {
          transform: translateZ(-20px) scale(0.98);
          background: var(--neon-pink);
      }`,
                    js: `const wrap = document.getElementById('glitchWrap');
      const noise = document.querySelector('.noise-bg');
      const fragments = document.querySelector('.code-fragments');
      const content = document.querySelector('.content-layer');
      
      document.addEventListener('mousemove', (e) => {
          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;
      
          const x = (clientX - innerWidth / 2) / (innerWidth / 2);
          const y = (clientY - innerHeight / 2) / (innerHeight / 2);
      
          // 1. Erratic Glitch Rotation
          wrap.style.transform = \`rotateX(\${y * -30}deg) rotateY(\${x * 30}deg)\`;
      
          // 2. Parallax: Chaotic Depth
          // Deep Noise Static
          noise.style.transform = \`translate(calc(-50% + \${x * 30}px), \${y * 30}px) translateZ(-110px)\`;
          
          // Middle Code Fragments
          fragments.style.transform = \`translate(\${x * -20}px, \${y * -20}px)\`;
          
          // Front Content (Extreme Offset)
          content.style.transform = \`translate(\${x * -70}px, \${y * -70}px) translateZ(80px)\`;
      });
      
      // Random Flicker on Hover
      wrap.addEventListener('mouseover', () => {
          const flicker = setInterval(() => {
              wrap.style.opacity = Math.random() > 0.9 ? '0.7' : '1';
          }, 100);
          
          wrap.addEventListener('mouseleave', () => {
              clearInterval(flicker);
              wrap.style.opacity = '1';
              
              // Reset Logic
              wrap.style.transition = "transform 0.4s cubic-bezier(0.17, 0.88, 0.32, 1.28)";
              wrap.style.transform = "rotateX(0deg) rotateY(0deg)";
              content.style.transform = "translate(0, 0) translateZ(80px)";
          }, { once: true });
      });
      
      wrap.addEventListener('mouseenter', () => {
          wrap.style.transition = "transform 0.05s linear";
      });`
                }
            },
            {
                id: "v9",
                name: "Variant 9",
                code: {
                    html: `<div class="scene">
          <div class="helios-wrap" id="heliosWrap">
              <button class="helios-btn" id="heliosBtn">
                  <!-- Layer 1: Boiling Sun Surface (Deepest) -->
                  <div class="sun-surface"></div>
                  
                  <!-- Layer 2: Plasma Arcs & Flares (Middle) -->
                  <div class="plasma-field">
                      <div class="flare f1"></div>
                      <div class="flare f2"></div>
                      <div class="flare f3"></div>
                  </div>
                  
                  <!-- Layer 3: High-Heat Text (Front) -->
                  <div class="content-layer">
                      <span class="btn-text">HELIOS</span>
                      <div class="temp-indicator">
                          <span class="pulse-icon"></span>
                          <span class="temp-val">CORE TEMP: MAX</span>
                      </div>
                  </div>
      
                  <!-- Layer 4: Heat Haze / Distortion Overlay -->
                  <div class="heat-haze"></div>
                  
                  <!-- White Hot Surface Shine -->
                  <div class="corona-glare"></div>
              </button>
          </div>
      </div>`,
                    css: `:root {
          --sun-white: #fffdf0;
          --sun-gold: #ffcc00;
          --sun-orange: #ff4d00;
          --sun-deep: #3d0a00;
      }
      
      body {
          background-color: #050505;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-family: 'Space Grotesk', sans-serif;
          perspective: 1500px;
      }
      
      .scene {
          width: 400px;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
      }
      
      .helios-wrap {
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.1s ease-out;
      }
      
      .helios-btn {
          position: relative;
          width: 280px;
          height: 95px;
          background: var(--sun-deep);
          border: 1px solid rgba(255, 204, 0, 0.3);
          border-radius: 12px;
          cursor: pointer;
          overflow: hidden;
          outline: none;
          transform-style: preserve-3d;
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.9), 0 0 20px rgba(255, 77, 0, 0.2);
      }
      
      /* Layer 1: Sun Surface (Z: -120px) */
      .sun-surface {
          position: absolute;
          top: -50%; left: -50%; width: 200%; height: 200%;
          background: radial-gradient(circle at center, 
              var(--sun-gold) 0%, 
              var(--sun-orange) 30%, 
              var(--sun-deep) 70%);
          transform: translateZ(-120px);
          filter: blur(20px);
          animation: boil 6s ease-in-out infinite alternate;
          z-index: -4;
      }
      
      @keyframes boil {
          from { opacity: 0.5; transform: translateZ(-120px) scale(1) rotate(0deg); }
          to { opacity: 1; transform: translateZ(-120px) scale(1.3) rotate(15deg); }
      }
      
      /* Layer 2: Plasma Flares (Z: -50px) */
      .flare {
          position: absolute;
          background: linear-gradient(to top, transparent, var(--sun-white));
          width: 2px; height: 40px;
          opacity: 0.3;
          transform: translateZ(-50px);
          z-index: -3;
          filter: blur(2px);
      }
      .f1 { top: 10%; left: 20%; animation: flare-up 3s infinite; }
      .f2 { bottom: 10%; right: 30%; animation: flare-up 4s infinite 1s; }
      .f3 { top: 40%; left: 70%; animation: flare-up 2.5s infinite 0.5s; }
      
      @keyframes flare-up {
          0% { transform: translateZ(-50px) translateY(40px) scaleY(0); opacity: 0; }
          50% { opacity: 0.8; scaleY(1.5); }
          100% { transform: translateZ(-50px) translateY(-40px) scaleY(0); opacity: 0; }
      }
      
      /* Layer 3: Content (Z: 90px) */
      .content-layer {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transform: translateZ(90px);
          z-index: 10;
      }
      
      .btn-text {
          font-size: 30px;
          font-weight: 900;
          color: #fff;
          letter-spacing: 10px;
          text-shadow: 0 0 20px var(--sun-gold), 0 0 40px var(--sun-orange);
      }
      
      .temp-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 6px;
          background: rgba(255, 77, 0, 0.15);
          padding: 2px 12px;
          border-radius: 4px;
          border: 1px solid rgba(255, 204, 0, 0.2);
      }
      
      .pulse-icon {
          width: 6px; height: 6px;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 0 10px #fff;
          animation: heart-pulse 0.8s infinite;
      }
      
      @keyframes heart-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.8); opacity: 0.5; }
      }
      
      .temp-val {
          font-size: 9px;
          color: #fff;
          font-weight: 700;
          letter-spacing: 1px;
      }
      
      /* Heat Haze Texture */
      .heat-haze {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: url('https://www.transparenttextures.com/patterns/carbon-fibre.png');
          opacity: 0.05;
          z-index: 5;
          mix-blend-mode: overlay;
      }
      
      /* Hover States */
      .helios-btn:hover {
          border-color: var(--sun-gold);
          box-shadow: 0 0 60px rgba(255, 77, 0, 0.4), 0 40px 100px rgba(0,0,0,1);
      }
      
      .helios-btn:active {
          transform: translateZ(-30px);
      }`,
                    js: `const wrap = document.getElementById('heliosWrap');
      const surface = document.querySelector('.sun-surface');
      const plasma = document.querySelector('.plasma-field');
      const content = document.querySelector('.content-layer');
      
      document.addEventListener('mousemove', (e) => {
          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;
      
          const x = (clientX - innerWidth / 2) / (innerWidth / 2);
          const y = (clientY - innerHeight / 2) / (innerHeight / 2);
      
          // 1. Extreme Heat Rotation (3D Tilt)
          wrap.style.transform = \`rotateX(\${y * -28}deg) rotateY(\${x * 28}deg)\`;
      
          // 2. Parallax: Intense Solar Depth
          // Surface boiling moves slowly with mouse
          surface.style.transform = \`translate(calc(-50% + \${x * 30}px), calc(-50% + \${y * 30}px)) translateZ(-120px)\`;
          
          // Plasma arcs move middle-ground
          plasma.style.transform = \`translate(\${x * -20}px, \${y * -20}px)\`;
          
          // Content floats far in front
          content.style.transform = \`translate(\${x * -75}px, \${y * -75}px) translateZ(90px)\`;
      });
      
      // Smooth Reset
      wrap.addEventListener('mouseleave', () => {
          wrap.style.transition = "transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)";
          wrap.style.transform = "rotateX(0deg) rotateY(0deg)";
          
          surface.style.transform = "translate(-50%, -50%) translateZ(-120px)";
          content.style.transform = "translate(0, 0) translateZ(90px)";
      });
      
      wrap.addEventListener('mouseenter', () => {
          wrap.style.transition = "transform 0.1s ease-out";
      });`
                }
            },
            {
                id: "v10",
                name: "Variant 10",
                code: {
                    html: `<div class="scene">
          <div class="singularity-wrap" id="singularityWrap">
              <button class="singularity-btn" id="singularityBtn">
                  <!-- Layer 1: The Event Horizon Vortex (Deepest) -->
                  <div class="vortex-layer"></div>
                  
                  <!-- Layer 2: Accretion Disk (Middle-Deep) -->
                  <div class="accretion-disk"></div>
                  
                  <!-- Layer 3: Floating Spaghettified Particles (Middle) -->
                  <div class="gravity-particles">
                      <div class="particle p1"></div>
                      <div class="particle p2"></div>
                      <div class="particle p3"></div>
                      <div class="particle p4"></div>
                  </div>
                  
                  <!-- Layer 4: Distorted Content (Front) -->
                  <div class="content-layer">
                      <span class="btn-text">SINGULARITY</span>
                      <span class="coord-text">POS: 0.001 // EVENT_HORIZON</span>
                  </div>
      
                  <!-- Layer 5: Chromatic Refraction Edge -->
                  <div class="prism-edge"></div>
                  
                  <!-- Final Obsidian Shine -->
                  <div class="obsidian-glare"></div>
              </button>
          </div>
      </div>`,
                    css: `:root {
          --void-color: #000000;
          --horizon-cyan: #00f2ff;
          --horizon-violet: #7000ff;
          --particle-white: rgba(255, 255, 255, 0.8);
      }
      
      body {
          background-color: #030303;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-family: 'Inter', sans-serif;
          perspective: 2000px; /* Enhanced perspective */
      }
      
      .scene {
          width: 400px;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
      }
      
      .singularity-wrap {
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.15s ease-out;
      }
      
      .singularity-btn {
          position: relative;
          width: 300px;
          height: 100px;
          background: #050505;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          cursor: pointer;
          overflow: hidden;
          outline: none;
          transform-style: preserve-3d;
          box-shadow: 0 50px 100px rgba(0, 0, 0, 1);
      }
      
      /* Layer 1: The Void Vortex (Z: -150px) */
      .vortex-layer {
          position: absolute;
          top: 50%; left: 50%;
          width: 250px; height: 250px;
          background: radial-gradient(circle, var(--void-color) 20%, #1a0033 60%, transparent 100%);
          transform: translate(-50%, -50%) translateZ(-150px);
          z-index: -5;
      }
      
      /* Layer 2: Accretion Disk (Z: -100px) */
      .accretion-disk {
          position: absolute;
          top: 50%; left: 50%;
          width: 400px; height: 400px;
          background: conic-gradient(from 0deg, transparent, var(--horizon-violet), var(--horizon-cyan), transparent 50%);
          transform: translate(-50%, -50%) translateZ(-100px) rotate(0deg);
          filter: blur(40px);
          opacity: 0.4;
          animation: rotate-disk 5s linear infinite;
          z-index: -4;
      }
      
      @keyframes rotate-disk {
          to { transform: translate(-50%, -50%) translateZ(-100px) rotate(360deg); }
      }
      
      /* Layer 3: Particles (Z: -50px) */
      .particle {
          position: absolute;
          width: 2px; height: 20px;
          background: var(--particle-white);
          transform: translateZ(-50px);
          opacity: 0.3;
          z-index: -3;
      }
      .p1 { top: 10%; left: 20%; animation: pull 2s infinite; }
      .p2 { bottom: 20%; right: 15%; animation: pull 2.5s infinite 0.5s; }
      .p3 { top: 50%; left: 10%; animation: pull 3s infinite 1s; }
      .p4 { top: 30%; right: 40%; animation: pull 1.5s infinite; }
      
      @keyframes pull {
          0% { transform: translateZ(-50px) scale(1) translate(100px, 0); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateZ(-50px) scale(0) translate(0, 0); opacity: 0; }
      }
      
      /* Layer 4: Content (Z: 100px) */
      .content-layer {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transform: translateZ(100px); /* Extreme front float */
          z-index: 10;
      }
      
      .btn-text {
          font-size: 28px;
          font-weight: 900;
          color: #fff;
          letter-spacing: 12px;
          text-shadow: 0 0 20px var(--horizon-cyan);
      }
      
      .coord-text {
          font-size: 8px;
          color: var(--horizon-cyan);
          margin-top: 10px;
          opacity: 0.5;
          letter-spacing: 2px;
      }
      
      /* Layer 5: Prism Edge */
      .prism-edge {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          border: 2px solid transparent;
          background: linear-gradient(90deg, var(--horizon-cyan), var(--horizon-violet)) border-box;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
          opacity: 0.2;
      }
      
      /* Hover & Active States */
      .singularity-btn:hover {
          border-color: rgba(255, 255, 255, 0.4);
          box-shadow: 0 0 60px rgba(112, 0, 255, 0.3), 0 60px 120px rgba(0,0,0,1);
      }
      
      .singularity-btn:active {
          transform: translateZ(-40px);
      }`,
                    js: `const wrap = document.getElementById('singularityWrap');
      const vortex = document.querySelector('.vortex-layer');
      const disk = document.querySelector('.accretion-disk');
      const content = document.querySelector('.content-layer');
      
      document.addEventListener('mousemove', (e) => {
          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;
      
          // Normalize coordinates (-1 to 1)
          const x = (clientX - innerWidth / 2) / (innerWidth / 2);
          const y = (clientY - innerHeight / 2) / (innerHeight / 2);
      
          // 1. Smooth Extreme Tilt
          wrap.style.transform = \`rotateX(\${y * -30}deg) rotateY(\${x * 30}deg)\`;
      
          // 2. Parallax: Singularity Logic
          // The Void Vortex (Deepest) moves with the mouse to feel like a deep hole
          vortex.style.transform = \`translate(calc(-50% + \${x * 40}px), calc(-50% + \${y * 40}px)) translateZ(-150px)\`;
          
          // Accretion disk moves middle-ground
          disk.style.transform = \`translate(calc(-50% + \${x * 20}px), calc(-50% + \${y * 20}px)) translateZ(-100px) rotate(\${Date.now() / 20}deg)\`;
          
          // Front Content moves strongly opposite (Extreme Window Effect)
          content.style.transform = \`translate(\${x * -85}px, \${y * -85}px) translateZ(100px)\`;
      });
      
      // Smooth Cinematic Reset
      wrap.addEventListener('mouseleave', () => {
          wrap.style.transition = "transform 1.2s cubic-bezier(0.19, 1, 0.22, 1)";
          wrap.style.transform = "rotateX(0deg) rotateY(0deg)";
          
          vortex.style.transform = "translate(-50%, -50%) translateZ(-150px)";
          content.style.transform = "translate(0, 0) translateZ(100px)";
      });
      
      wrap.addEventListener('mouseenter', () => {
          wrap.style.transition = "transform 0.1s ease-out";
      });`
                }
            },
            {
                id: "v11",
                name: "Variant 11",
                code: {
                    html: `<div class="scene">
          <div class="ice-wrap" id="iceWrap">
              <button class="ice-btn" id="iceBtn">
                  <!-- Layer 1: Frozen Blue Core (Deepest) -->
                  <div class="ice-core"></div>
                  
                  <!-- Layer 2: Floating Ice Shards (Middle) -->
                  <div class="shard-field">
                      <div class="shard s1"></div>
                      <div class="shard s2"></div>
                      <div class="shard s3"></div>
                  </div>
                  
                  <!-- Layer 3: Crystalline Text (Front) -->
                  <div class="content-layer">
                      <span class="btn-text">CRYSTALLIZE</span>
                      <span class="temp-status">STATUS: FROZEN // -40°C</span>
                  </div>
      
                  <!-- Layer 4: Frost Refraction & Scratches -->
                  <div class="frost-overlay"></div>
                  
                  <!-- Surface Reflection (Glassy) -->
                  <div class="crystal-glare"></div>
              </button>
          </div>
      </div>`,
                    css: `:root {
          --ice-white: #e0f7fa;
          --ice-blue: #00d2ff;
          --deep-arctic: #011627;
          --shard-glow: rgba(0, 210, 255, 0.3);
      }
      
      body {
          background-color: #030303;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-family: 'Inter', sans-serif;
          perspective: 1500px;
      }
      
      .scene {
          width: 400px;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
      }
      
      .ice-wrap {
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.1s ease-out;
      }
      
      .ice-btn {
          position: relative;
          width: 290px;
          height: 95px;
          background: var(--deep-arctic);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 16px;
          cursor: pointer;
          overflow: hidden;
          outline: none;
          transform-style: preserve-3d;
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.8), inset 0 0 30px rgba(0, 210, 255, 0.05);
      }
      
      /* Layer 1: Frozen Core (Z: -130px) */
      .ice-core {
          position: absolute;
          top: -50%; left: -50%; width: 200%; height: 200%;
          background: radial-gradient(circle at center, #004d7a 0%, #011627 70%);
          transform: translateZ(-130px);
          filter: blur(20px);
          z-index: -5;
      }
      
      /* Layer 2: Ice Shards (Z: -60px) */
      .shard {
          position: absolute;
          background: rgba(255, 255, 255, 0.2);
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); /* Diamond shape */
          transform: translateZ(-60px);
          z-index: -3;
          filter: blur(1px);
      }
      .s1 { width: 15px; height: 30px; left: 10%; top: 20%; animation: drift 5s infinite; }
      .s2 { width: 20px; height: 40px; right: 15%; bottom: 10%; animation: drift 7s infinite 1s; }
      .s3 { width: 10px; height: 20px; left: 45%; top: 60%; animation: drift 4s infinite 0.5s; }
      
      @keyframes drift {
          0%, 100% { transform: translateZ(-60px) translate(0, 0) rotate(0deg); opacity: 0.3; }
          50% { transform: translateZ(-60px) translate(10px, -15px) rotate(45deg); opacity: 0.7; }
      }
      
      /* Layer 3: Content (Z: 110px) */
      .content-layer {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transform: translateZ(110px);
          z-index: 10;
      }
      
      .btn-text {
          font-size: 26px;
          font-weight: 900;
          color: #fff;
          letter-spacing: 6px;
          text-shadow: 0 0 15px var(--ice-blue), 0 0 30px rgba(255,255,255,0.5);
      }
      
      .temp-status {
          font-size: 9px;
          color: var(--ice-blue);
          letter-spacing: 2px;
          margin-top: 8px;
          font-family: monospace;
          opacity: 0.7;
      }
      
      /* Frost Refraction Detail */
      .frost-overlay {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background-image: url('https://www.transparenttextures.com/patterns/p6-static.png'); /* Grainy ice texture */
          opacity: 0.1;
          z-index: 5;
          pointer-events: none;
      }
      
      /* Hover States */
      .ice-btn:hover {
          border-color: rgba(255, 255, 255, 0.4);
          box-shadow: 0 0 50px rgba(0, 210, 255, 0.2), 0 45px 90px rgba(0,0,0,1);
      }
      
      .ice-btn:active {
          transform: translateZ(-25px);
      }`,
                    js: `const wrap = document.getElementById('iceWrap');
      const core = document.querySelector('.ice-core');
      const shards = document.querySelector('.shard-field');
      const content = document.querySelector('.content-layer');
      
      document.addEventListener('mousemove', (e) => {
          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;
      
          // Normalize coordinates (-1 to 1)
          const x = (clientX - innerWidth / 2) / (innerWidth / 2);
          const y = (clientY - innerHeight / 2) / (innerHeight / 2);
      
          // 1. Crystal Box Rotation (Tilt)
          wrap.style.transform = \`rotateX(\${y * -25}deg) rotateY(\${x * 25}deg)\`;
      
          // 2. Parallax: Frozen Depth Logic
          // Deep Core (Z: -130px) moves with mouse to feel like it's far inside
          core.style.transform = \`translate(calc(-50% + \${x * 20}px), calc(-50% + \${y * 20}px)) translateZ(-130px)\`;
          
          // Middle Shards (Z: -60px)
          shards.style.transform = \`translate(\${x * -15}px, \${y * -15}px)\`;
          
          // Front Content (Z: 110px) moves strongly opposite (The Window Effect)
          content.style.transform = \`translate(\${x * -80}px, \${y * -80}px) translateZ(110px)\`;
      });
      
      // Smooth Reset
      wrap.addEventListener('mouseleave', () => {
          wrap.style.transition = "transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)";
          wrap.style.transform = "rotateX(0deg) rotateY(0deg)";
          
          core.style.transform = "translate(-50%, -50%) translateZ(-130px)";
          content.style.transform = "translate(0, 0) translateZ(110px)";
      });
      
      wrap.addEventListener('mouseenter', () => {
          wrap.style.transition = "transform 0.1s ease-out";
      });`
                }
            }
        ]
    },
    {
        id: "comp-yh1dlt",
        name: "New Component",
        category: "Buttons",
        tags: ["glow", "neon", "hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777044139107,
        code: {
            html: `<!-- The Toxic Gooey Filter -->
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display:none;">
    <defs>
      <filter id="toxic-goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -8" result="goo" />
        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
      </filter>
    </defs>
  </svg>
  
  <div class="toxic-container">
      <button class="toxic-morph-btn" id="toxicBtn">
          <!-- Corrosive Liquid Layers -->
          <div class="acid-wrap">
              <div class="t-blob tb-1"></div>
              <div class="t-blob tb-2"></div>
              <div class="t-blob tb-3"></div>
              <!-- The Acidic Core -->
              <div class="acid-core" id="acidCore"></div>
          </div>
          
          <!-- Sizzling Particles -->
          <div class="sizzle-layer" id="sizzleLayer"></div>
          
          <!-- Button Overlay -->
          <div class="toxic-content">
              <span class="btn-label">HAZARD LEVEL</span>
              <div class="radiation-icon">☢</div>
          </div>
      </button>
  </div>`,
            css: `:root {
      --neon-green: #39ff14;
      --toxic-purple: #9d00ff;
      --sludge-dark: #0a0f0a;
      --acid-glow: rgba(57, 255, 20, 0.4);
  }
  
  body {
      background-color: #030503;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      font-family: 'Syne', sans-serif;
  }
  
  .toxic-container {
      position: relative;
  }
  
  .toxic-morph-btn {
      position: relative;
      width: 280px;
      height: 90px;
      background: transparent;
      border: none;
      cursor: pointer;
      outline: none;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  
  /* Gooey Wrapper */
  .acid-wrap {
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
      filter: url('#toxic-goo');
      z-index: -1;
  }
  
  .t-blob {
      position: absolute;
      background: linear-gradient(135deg, var(--neon-green), var(--sludge-dark));
      border-radius: 50%;
      transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  }
  
  .tb-1 { width: 100px; height: 100px; left: -5px; top: -5px; }
  .tb-2 { width: 100px; height: 100px; right: -5px; top: -5px; }
  .tb-3 { width: 270px; height: 80px; left: 5px; top: 5px; border-radius: 40px; }
  
  /* Interactive Acid Core */
  .acid-core {
      position: absolute;
      width: 110px;
      height: 110px;
      background: radial-gradient(circle, #fff 0%, var(--neon-green) 50%, transparent 80%);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s;
      mix-blend-mode: hard-light;
  }
  
  /* Sizzling Particles Overlay */
  .sizzle-layer {
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 2;
  }
  
  .sizzle {
      position: absolute;
      width: 3px;
      height: 3px;
      background: var(--neon-green);
      border-radius: 50%;
      box-shadow: 0 0 10px var(--neon-green);
      animation: sizzle-anim 1s linear forwards;
  }
  
  @keyframes sizzle-anim {
      0% { transform: translateY(0) scale(1); opacity: 1; }
      100% { transform: translateY(-40px) scale(0); opacity: 0; }
  }
  
  /* Content Styling */
  .toxic-content {
      position: relative;
      z-index: 10;
      text-align: center;
  }
  
  .btn-label {
      font-size: 18px;
      font-weight: 800;
      color: #000;
      letter-spacing: 5px;
      transition: all 0.4s;
  }
  
  .radiation-icon {
      font-size: 14px;
      color: #000;
      margin-top: 4px;
      animation: spin 3s linear infinite;
  }
  
  @keyframes spin {
      to { transform: rotate(360deg); }
  }
  
  /* Hover States */
  .toxic-morph-btn:hover .acid-core {
      opacity: 1;
  }
  
  .toxic-morph-btn:hover .btn-label {
      letter-spacing: 8px;
      transform: scale(1.1);
  }
  
  .toxic-morph-btn:hover .t-blob {
      background: var(--neon-green);
      box-shadow: 0 0 25px var(--acid-glow);
  }
  
  /* Active State: Acid Splash */
  .toxic-morph-btn:active {
      transform: scale(0.93);
  }`,
            js: `const tBtn = document.getElementById('toxicBtn');
  const aCore = document.getElementById('acidCore');
  const tBlobs = document.querySelectorAll('.t-blob');
  const sLayer = document.getElementById('sizzleLayer');
  
  tBtn.addEventListener('mousemove', (e) => {
      const rect = tBtn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      // Core follows mouse with gooey physics
      aCore.style.left = \`\${x}px\`;
      aCore.style.top = \`\${y}px\`;
  
      // Sludge Distort Logic
      tBlobs.forEach((blob, i) => {
          const factor = (i + 1) * 0.12;
          const moveX = (x - rect.width / 2) * factor;
          const moveY = (y - rect.height / 2) * factor;
          
          // Viscous movement: Add a delayed wobble
          const wobble = Math.sin(Date.now() / 150 + i) * 3;
          blob.style.transform = \`translate(\${moveX}px, \${moveY + wobble}px)\`;
      });
  
      // Create "Sizzle" particles on move
      if (Math.random() > 0.7) {
          spawnSizzle(x, y);
      }
  });
  
  function spawnSizzle(x, y) {
      const p = document.createElement('div');
      p.className = 'sizzle';
      p.style.left = (x + (Math.random() - 0.5) * 40) + 'px';
      p.style.top = y + 'px';
      sLayer.appendChild(p);
      setTimeout(() => p.remove(), 1000);
  }
  
  tBtn.addEventListener('mouseleave', () => {
      tBlobs.forEach(blob => {
          blob.style.transform = \`translate(0, 0)\`;
      });
  });
  
  // Click Interaction: Corrosive Burst
  tBtn.addEventListener('mousedown', () => {
      for(let i=0; i<10; i++) {
          setTimeout(() => spawnSizzle(Math.random() * 280, 50), i * 20);
      }
  });`
        },
        variants: [

        ]
    },
    {
        id: "comp-pqdni3",
        name: "New Component",
        category: "Buttons",
        tags: ["glow", "hover", "3d"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777044031019,
        code: {
            html: `<div class="hud-container">
      <div class="hud-wrap" id="hudWrap">
          <!-- Corner Brackets (Hardware Frame) -->
          <div class="frame-corner top-left"></div>
          <div class="frame-corner top-right"></div>
          <div class="frame-corner bottom-left"></div>
          <div class="frame-corner bottom-right"></div>
  
          <button class="hud-btn" id="hudBtn">
              <!-- Internal Grid System -->
              <div class="hud-grid"></div>
              
              <!-- Moving Data Telemetry -->
              <div class="telemetry-left">
                  <span class="data-row">TRK: 88.2</span>
                  <span class="data-row">SYS: ACT</span>
              </div>
              <div class="telemetry-right" id="telemetryData">
                  00
              </div>
  
              <!-- Central Core -->
              <div class="hud-core"></div>
              
              <!-- Scanning Laser -->
              <div class="hud-scan"></div>
  
              <span class="btn-text">INITIALIZE LINK</span>
              
              <!-- Glass Overlay -->
              <div class="hud-glass"></div>
          </button>
      </div>
  </div>`,
            css: `:root {
      --hud-cyan: #00f2ff;
      --hud-blue: #0066ff;
      --bg-dark: #02040a;
  }
  
  body {
      background-color: var(--bg-dark);
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      font-family: 'Space Grotesk', sans-serif;
      perspective: 1000px;
  }
  
  .hud-container {
      position: relative;
  }
  
  .hud-wrap {
      position: relative;
      padding: 15px;
      transform-style: preserve-3d;
      transition: transform 0.1s ease-out;
  }
  
  /* External Hardware Frame (Corners) */
  .frame-corner {
      position: absolute;
      width: 20px;
      height: 20px;
      border: 2px solid var(--hud-cyan);
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      z-index: 2;
      opacity: 0.5;
  }
  .top-left { top: 0; left: 0; border-right: none; border-bottom: none; }
  .top-right { top: 0; right: 0; border-left: none; border-bottom: none; }
  .bottom-left { bottom: 0; left: 0; border-right: none; border-top: none; }
  .bottom-right { bottom: 0; right: 0; border-left: none; border-top: none; }
  
  .hud-btn {
      position: relative;
      width: 300px;
      height: 90px;
      background: rgba(0, 102, 255, 0.05);
      border: 1px solid rgba(0, 242, 255, 0.2);
      border-radius: 4px;
      cursor: pointer;
      overflow: hidden;
      outline: none;
      display: flex;
      justify-content: center;
      align-items: center;
      transform-style: preserve-3d;
  }
  
  /* Internal HUD Grid */
  .hud-grid {
      position: absolute;
      width: 200%;
      height: 200%;
      background-image: 
          linear-gradient(rgba(0, 242, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 242, 255, 0.1) 1px, transparent 1px);
      background-size: 20px 20px;
      top: -50%; left: -50%;
      transform: translateZ(-20px);
      z-index: -1;
  }
  
  /* Telemetry Data HUD */
  .telemetry-left, .telemetry-right {
      position: absolute;
      font-size: 8px;
      color: var(--hud-cyan);
      font-family: monospace;
      pointer-events: none;
      opacity: 0.4;
      transition: opacity 0.3s;
  }
  .telemetry-left { left: 10px; top: 10px; text-align: left; }
  .telemetry-right { right: 10px; bottom: 10px; font-size: 14px; }
  
  /* Central Glowing Core */
  .hud-core {
      position: absolute;
      width: 100px;
      height: 100px;
      background: radial-gradient(circle, rgba(0, 242, 255, 0.2) 0%, transparent 70%);
      transform: translateZ(10px);
      pointer-events: none;
  }
  
  /* Horizontal Scanning Line */
  .hud-scan {
      position: absolute;
      top: -100%;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, transparent, var(--hud-cyan), transparent);
      opacity: 0.1;
      z-index: 1;
  }
  
  .btn-text {
      position: relative;
      font-size: 18px;
      font-weight: 800;
      color: #fff;
      letter-spacing: 5px;
      text-shadow: 0 0 10px var(--hud-cyan);
      z-index: 10;
  }
  
  /* Hover State Interactions */
  .hud-wrap:hover .frame-corner {
      width: 40px;
      height: 40px;
      opacity: 1;
      box-shadow: 0 0 15px var(--hud-cyan);
  }
  .hud-wrap:hover .top-left { transform: translate(-10px, -10px); }
  .hud-wrap:hover .top-right { transform: translate(10px, -10px); }
  .hud-wrap:hover .bottom-left { transform: translate(-10px, 10px); }
  .hud-wrap:hover .bottom-right { transform: translate(10px, 10px); }
  
  .hud-btn:hover .hud-scan {
      animation: scan-move 2s linear infinite;
  }
  
  @keyframes scan-move {
      0% { top: -100%; }
      100% { top: 100%; }
  }
  
  .hud-btn:hover .telemetry-left, 
  .hud-btn:hover .telemetry-right {
      opacity: 1;
  }`,
            js: `const hudWrap = document.getElementById('hudWrap');
  const hudBtn = document.getElementById('hudBtn');
  const telemetry = document.getElementById('telemetryData');
  
  // 1. Advanced 3D Tilt & Light Logic
  hudWrap.addEventListener('mousemove', (e) => {
      const rect = hudBtn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      // Calculate rotation
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (centerY - y) / 10;
      const rotateY = (x - centerX) / 10;
  
      hudWrap.style.transform = \`rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`;
  
      // Update Internal Glow (Core follows mouse)
      const core = document.querySelector('.hud-core');
      core.style.left = \`\${x - 50}px\`;
      core.style.top = \`\${y - 50}px\`;
  });
  
  hudWrap.addEventListener('mouseleave', () => {
      hudWrap.style.transform = \`rotateX(0deg) rotateY(0deg)\`;
  });
  
  // 2. Real-time Telemetry Simulation (Changing Numbers)
  setInterval(() => {
      const randomVal = Math.floor(Math.random() * 99);
      telemetry.innerText = randomVal < 10 ? \`0\${randomVal}\` : randomVal;
  }, 150);
  
  // 3. Click "Data Burst"
  hudBtn.addEventListener('mousedown', () => {
      hudBtn.style.backgroundColor = 'rgba(0, 242, 255, 0.2)';
      hudBtn.style.transform = 'translateZ(-10px) scale(0.95)';
  });
  
  hudBtn.addEventListener('mouseup', () => {
      hudBtn.style.backgroundColor = 'rgba(0, 102, 255, 0.05)';
      hudBtn.style.transform = 'translateZ(0) scale(1)';
  });`
        },
        variants: [
            {
                id: "v1",
                name: "Variant 1",
                code: {
                    html: `<div class="combat-container">
          <div class="combat-wrap" id="combatWrap">
              <!-- Sharp Combat Brackets -->
              <div class="bracket top-left"></div>
              <div class="bracket top-right"></div>
              <div class="bracket bottom-left"></div>
              <div class="bracket bottom-right"></div>
      
              <button class="combat-btn" id="combatBtn">
                  <!-- Tactical Grid -->
                  <div class="tactical-grid"></div>
                  
                  <!-- Combat Telemetry -->
                  <div class="threat-level">
                      <span class="label">THREAT</span>
                      <span class="value" id="threatVal">LOW</span>
                  </div>
                  <div class="ammo-data" id="ammoCount">
                      99%
                  </div>
      
                  <!-- Red Plasma Core -->
                  <div class="combat-core"></div>
                  
                  <!-- Rapid Scan Beam -->
                  <div class="combat-scan"></div>
      
                  <span class="btn-text">ENGAGE TARGET</span>
                  
                  <!-- Warning Flicker Overlay -->
                  <div class="warning-layer"></div>
              </button>
          </div>
      </div>`,
                    css: `:root {
          --combat-red: #ff0000;
          --combat-orange: #ff4d00;
          --bg-dark: #050101;
      }
      
      body {
          background-color: var(--bg-dark);
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-family: 'Space Grotesk', sans-serif;
          perspective: 1200px;
      }
      
      .combat-container {
          position: relative;
      }
      
      .combat-wrap {
          position: relative;
          padding: 15px;
          transform-style: preserve-3d;
          transition: transform 0.1s ease-out;
      }
      
      /* Tactical Brackets (Frame) */
      .bracket {
          position: absolute;
          width: 15px;
          height: 15px;
          border: 3px solid var(--combat-red);
          transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
          z-index: 2;
          filter: drop-shadow(0 0 5px var(--combat-red));
      }
      .top-left { top: 0; left: 0; border-right: none; border-bottom: none; }
      .top-right { top: 0; right: 0; border-left: none; border-bottom: none; }
      .bottom-left { bottom: 0; left: 0; border-right: none; border-top: none; }
      .bottom-right { bottom: 0; right: 0; border-left: none; border-top: none; }
      
      .combat-btn {
          position: relative;
          width: 300px;
          height: 90px;
          background: rgba(255, 0, 0, 0.05);
          border: 1px solid rgba(255, 0, 0, 0.3);
          border-radius: 2px; /* Sharp Edges */
          cursor: pointer;
          overflow: hidden;
          outline: none;
          display: flex;
          justify-content: center;
          align-items: center;
          transform-style: preserve-3d;
      }
      
      /* Tactical Background Grid */
      .tactical-grid {
          position: absolute;
          width: 200%;
          height: 200%;
          background-image: 
              radial-gradient(circle, rgba(255, 0, 0, 0.1) 1px, transparent 1px);
          background-size: 15px 15px;
          top: -50%; left: -50%;
          transform: translateZ(-30px);
      }
      
      /* Combat Stats HUD */
      .threat-level, .ammo-data {
          position: absolute;
          color: var(--combat-red);
          font-family: 'Courier New', monospace;
          font-weight: 900;
          pointer-events: none;
          font-size: 10px;
      }
      .threat-level { left: 12px; top: 12px; display: flex; flex-direction: column; }
      .ammo-data { right: 12px; bottom: 12px; font-size: 16px; border-bottom: 2px solid var(--combat-red); }
      
      /* Internal Red Glow Core */
      .combat-core {
          position: absolute;
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, rgba(255, 0, 0, 0.3) 0%, transparent 70%);
          transform: translateZ(15px);
          pointer-events: none;
      }
      
      /* Fast Red Scanline */
      .combat-scan {
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent, var(--combat-red), transparent);
          opacity: 0.2;
          z-index: 1;
      }
      
      .btn-text {
          position: relative;
          font-size: 20px;
          font-weight: 900;
          color: #fff;
          letter-spacing: 6px;
          text-shadow: 0 0 15px var(--combat-red);
          z-index: 10;
      }
      
      /* Hover States */
      .combat-wrap:hover .bracket {
          width: 50px;
          height: 50px;
      }
      .combat-wrap:hover .top-left { transform: translate(-5px, -5px); }
      .combat-wrap:hover .top-right { transform: translate(5px, -5px); }
      .combat-wrap:hover .bottom-left { transform: translate(-5px, 5px); }
      .combat-wrap:hover .bottom-right { transform: translate(5px, 5px); }
      
      .combat-btn:hover .combat-scan {
          animation: rapid-scan 0.8s linear infinite;
      }
      
      @keyframes rapid-scan {
          0% { top: -100%; }
          100% { top: 100%; }
      }
      
      /* Damaged UI Flicker */
      .combat-btn:hover .warning-layer {
          position: absolute;
          inset: 0;
          background: rgba(255, 0, 0, 0.1);
          animation: flicker 0.2s infinite;
          pointer-events: none;
          z-index: 5;
      }
      
      @keyframes flicker {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
      }
      
      .combat-btn:active {
          background: var(--combat-red);
          transform: translateZ(-20px) scale(0.95);
      }
      .combat-btn:active .btn-text { color: #000; text-shadow: none; }`,
                    js: `const wrap = document.getElementById('combatWrap');
      const btn = document.getElementById('combatBtn');
      const threat = document.getElementById('threatVal');
      const ammo = document.getElementById('ammoCount');
      
      // 1. Tactical Tilt Logic
      wrap.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
      
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotX = (centerY - y) / 8;
          const rotY = (x - centerX) / 8;
      
          wrap.style.transform = \`rotateX(\${rotX}deg) rotateY(\${rotY}deg)\`;
      
          // Move Core
          const core = document.querySelector('.combat-core');
          core.style.left = \`\${x - 60}px\`;
          core.style.top = \`\${y - 60}px\`;
      });
      
      wrap.addEventListener('mouseleave', () => {
          wrap.style.transform = \`rotateX(0deg) rotateY(0deg)\`;
      });
      
      // 2. Real-time Combat Telemetry
      setInterval(() => {
          // Threat Level Flip
          const levels = ["LOW", "MED", "HIGH", "CRITICAL"];
          if (Math.random() > 0.9) {
              threat.innerText = levels[Math.floor(Math.random() * levels.length)];
              threat.style.color = threat.innerText === "CRITICAL" ? "#fff" : "var(--combat-red)";
          }
      
          // Ammo % Countdown
          let currentAmmo = parseInt(ammo.innerText);
          if (currentAmmo > 10) {
              ammo.innerText = (currentAmmo - (Math.random() > 0.9 ? 1 : 0)) + "%";
          }
      }, 200);
      
      // 3. Engage Sequence (Click)
      btn.addEventListener('click', () => {
          console.log("Target Locked. Engaging...");
          // Add temporary glitch on click
          btn.style.filter = "invert(1)";
          setTimeout(() => btn.style.filter = "none", 100);
      });`
                }
            },
            {
                id: "v2",
                name: "Variant 2",
                code: {
                    html: `<div class="bios-container">
          <div class="bios-wrap" id="biosWrap">
              <!-- Bio-Metric Brackets -->
              <div class="b-bracket top-l"></div>
              <div class="b-bracket top-r"></div>
              <div class="b-bracket bot-l"></div>
              <div class="b-bracket bot-r"></div>
      
              <button class="bios-btn" id="biosBtn">
                  <!-- Digital Rain / Matrix Grid -->
                  <div class="matrix-grid"></div>
                  
                  <!-- Live Biometric Telemetry -->
                  <div class="bio-stats">
                      <span class="stat-line">BPM: <span id="bpmVal">72</span></span>
                      <span class="stat-line">LINK: STABLE</span>
                  </div>
                  
                  <!-- Encryption Stream -->
                  <div class="crypto-stream" id="cryptoStream">
                      XF-992
                  </div>
      
                  <!-- Central Neural Core -->
                  <div class="bios-core"></div>
                  
                  <!-- Vertical Scan Ray -->
                  <div class="bios-scan"></div>
      
                  <div class="btn-content">
                      <span class="btn-text">ACCESS BIOS</span>
                      <div class="pulse-line"></div>
                  </div>
                  
                  <!-- Terminal Flicker -->
                  <div class="terminal-flicker"></div>
              </button>
          </div>
      </div>`,
                    css: `:root {
          --bios-green: #00ff41; /* Classic Matrix Green */
          --bios-dark: #0d0208;
          --bios-glow: rgba(0, 255, 65, 0.2);
      }
      
      body {
          background-color: #000;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-family: 'JetBrains Mono', monospace; /* Developer/Terminal font */
          perspective: 1200px;
      }
      
      .bios-container {
          position: relative;
      }
      
      .bios-wrap {
          position: relative;
          padding: 12px;
          transform-style: preserve-3d;
          transition: transform 0.1s ease-out;
      }
      
      /* Bio-Brackets (Frame) */
      .b-bracket {
          position: absolute;
          width: 12px;
          height: 12px;
          border: 2px solid var(--bios-green);
          z-index: 2;
          transition: all 0.4s ease;
      }
      .top-l { top: 0; left: 0; border-right: none; border-bottom: none; }
      .top-r { top: 0; right: 0; border-left: none; border-bottom: none; }
      .bot-l { bottom: 0; left: 0; border-right: none; border-top: none; }
      .bot-r { bottom: 0; right: 0; border-left: none; border-top: none; }
      
      .bios-btn {
          position: relative;
          width: 300px;
          height: 90px;
          background: var(--bios-dark);
          border: 1px solid rgba(0, 255, 65, 0.3);
          border-radius: 2px;
          cursor: pointer;
          overflow: hidden;
          outline: none;
          display: flex;
          justify-content: center;
          align-items: center;
          transform-style: preserve-3d;
      }
      
      /* Matrix Background Grid */
      .matrix-grid {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
              linear-gradient(rgba(0, 255, 65, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 65, 0.05) 1px, transparent 1px);
          background-size: 10px 10px;
          z-index: -1;
      }
      
      /* Bio-Telemetry Labels */
      .bio-stats, .crypto-stream {
          position: absolute;
          color: var(--bios-green);
          font-size: 9px;
          letter-spacing: 1px;
          pointer-events: none;
          text-transform: uppercase;
      }
      .bio-stats { left: 10px; top: 10px; display: flex; flex-direction: column; text-align: left; }
      .crypto-stream { right: 10px; bottom: 10px; font-weight: bold; border: 1px solid var(--bios-green); padding: 2px 4px; }
      
      /* Neural Green Core */
      .bios-core {
          position: absolute;
          width: 130px;
          height: 130px;
          background: radial-gradient(circle, rgba(0, 255, 65, 0.15) 0%, transparent 70%);
          transform: translateZ(10px);
          pointer-events: none;
      }
      
      /* Scanning Beam (Vertical) */
      .bios-scan {
          position: absolute;
          left: -100%;
          top: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, var(--bios-green), transparent);
          opacity: 0.1;
          z-index: 1;
      }
      
      .btn-content {
          text-align: center;
          z-index: 10;
          transform: translateZ(30px);
      }
      
      .btn-text {
          font-size: 19px;
          font-weight: 800;
          color: #fff;
          letter-spacing: 5px;
          text-shadow: 0 0 10px var(--bios-green);
      }
      
      .pulse-line {
          width: 40px;
          height: 2px;
          background: var(--bios-green);
          margin: 4px auto;
          animation: heartbeat 1.5s infinite;
      }
      
      @keyframes heartbeat {
          0%, 100% { transform: scaleX(1); opacity: 1; }
          50% { transform: scaleX(2.5); opacity: 0.5; }
      }
      
      /* Hover State Interactions */
      .bios-wrap:hover .b-bracket { width: 30px; height: 30px; border-color: #fff; }
      .bios-wrap:hover .top-l { transform: translate(-8px, -8px); }
      .bios-wrap:hover .top-r { transform: translate(8px, -8px); }
      .bios-wrap:hover .bot-l { transform: translate(-8px, 8px); }
      .bios-wrap:hover .bot-r { transform: translate(8px, 8px); }
      
      .bios-btn:hover .bios-scan {
          animation: side-scan 1.5s linear infinite;
      }
      
      @keyframes side-scan {
          0% { left: -100%; }
          100% { left: 100%; }
      }
      
      /* Terminal Flicker Effect */
      .terminal-flicker {
          position: absolute;
          inset: 0;
          background: rgba(0, 255, 65, 0.02);
          pointer-events: none;
          z-index: 5;
          animation: flicker 0.1s infinite;
      }
      
      @keyframes flicker {
          0% { opacity: 0.1; }
          100% { opacity: 0.2; }
      }
      
      .bios-btn:active {
          transform: translateZ(-10px) scale(0.96);
          box-shadow: inset 0 0 20px var(--bios-green);
      }`,
                    js: `const wrap = document.getElementById('biosWrap');
      const btn = document.getElementById('biosBtn');
      const bpm = document.getElementById('bpmVal');
      const crypto = document.getElementById('cryptoStream');
      
      // 1. BIOS Parallax Tilt
      wrap.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
      
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotX = (centerY - y) / 12;
          const rotY = (x - centerX) / 12;
      
          wrap.style.transform = \`rotateX(\${rotX}deg) rotateY(\${rotY}deg)\`;
      
          // Update Core Position
          const core = document.querySelector('.bios-core');
          core.style.left = \`\${x - 65}px\`;
          core.style.top = \`\${y - 65}px\`;
      });
      
      wrap.addEventListener('mouseleave', () => {
          wrap.style.transform = \`rotateX(0deg) rotateY(0deg)\`;
      });
      
      // 2. Real-time Bio Telemetry
      setInterval(() => {
          // BPM (Heart Rate) Simulation
          let currentBpm = parseInt(bpm.innerText);
          let flux = Math.floor(Math.random() * 5) - 2; // -2 to +2
          bpm.innerText = currentBpm + flux;
      
          // Crypto Code Stream Simulation
          const chars = "ABC0123456789XF";
          let newCode = "";
          for(let i=0; i<5; i++) {
              newCode += chars[Math.floor(Math.random() * chars.length)];
          }
          crypto.innerText = newCode;
      }, 300);
      
      // 3. System Access (Click)
      btn.addEventListener('click', () => {
          const originalText = btn.querySelector('.btn-text').innerText;
          btn.querySelector('.btn-text').innerText = "LINKING...";
          
          setTimeout(() => {
              btn.querySelector('.btn-text').innerText = originalText;
          }, 1000);
      });`
                }
            }
        ]
    },
    {
        id: "comp-pqdni3",
        name: "New Component",
        category: "Buttons",
        tags: ["glow", "hover", "3d"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777044031019,
        code: {
            html: `<div class="hud-container">
      <div class="hud-wrap" id="hudWrap">
          <!-- Corner Brackets (Hardware Frame) -->
          <div class="frame-corner top-left"></div>
          <div class="frame-corner top-right"></div>
          <div class="frame-corner bottom-left"></div>
          <div class="frame-corner bottom-right"></div>
  
          <button class="hud-btn" id="hudBtn">
              <!-- Internal Grid System -->
              <div class="hud-grid"></div>
              
              <!-- Moving Data Telemetry -->
              <div class="telemetry-left">
                  <span class="data-row">TRK: 88.2</span>
                  <span class="data-row">SYS: ACT</span>
              </div>
              <div class="telemetry-right" id="telemetryData">
                  00
              </div>
  
              <!-- Central Core -->
              <div class="hud-core"></div>
              
              <!-- Scanning Laser -->
              <div class="hud-scan"></div>
  
              <span class="btn-text">INITIALIZE LINK</span>
              
              <!-- Glass Overlay -->
              <div class="hud-glass"></div>
          </button>
      </div>
  </div>`,
            css: `:root {
      --hud-cyan: #00f2ff;
      --hud-blue: #0066ff;
      --bg-dark: #02040a;
  }
  
  body {
      background-color: var(--bg-dark);
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      font-family: 'Space Grotesk', sans-serif;
      perspective: 1000px;
  }
  
  .hud-container {
      position: relative;
  }
  
  .hud-wrap {
      position: relative;
      padding: 15px;
      transform-style: preserve-3d;
      transition: transform 0.1s ease-out;
  }
  
  /* External Hardware Frame (Corners) */
  .frame-corner {
      position: absolute;
      width: 20px;
      height: 20px;
      border: 2px solid var(--hud-cyan);
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      z-index: 2;
      opacity: 0.5;
  }
  .top-left { top: 0; left: 0; border-right: none; border-bottom: none; }
  .top-right { top: 0; right: 0; border-left: none; border-bottom: none; }
  .bottom-left { bottom: 0; left: 0; border-right: none; border-top: none; }
  .bottom-right { bottom: 0; right: 0; border-left: none; border-top: none; }
  
  .hud-btn {
      position: relative;
      width: 300px;
      height: 90px;
      background: rgba(0, 102, 255, 0.05);
      border: 1px solid rgba(0, 242, 255, 0.2);
      border-radius: 4px;
      cursor: pointer;
      overflow: hidden;
      outline: none;
      display: flex;
      justify-content: center;
      align-items: center;
      transform-style: preserve-3d;
  }
  
  /* Internal HUD Grid */
  .hud-grid {
      position: absolute;
      width: 200%;
      height: 200%;
      background-image: 
          linear-gradient(rgba(0, 242, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 242, 255, 0.1) 1px, transparent 1px);
      background-size: 20px 20px;
      top: -50%; left: -50%;
      transform: translateZ(-20px);
      z-index: -1;
  }
  
  /* Telemetry Data HUD */
  .telemetry-left, .telemetry-right {
      position: absolute;
      font-size: 8px;
      color: var(--hud-cyan);
      font-family: monospace;
      pointer-events: none;
      opacity: 0.4;
      transition: opacity 0.3s;
  }
  .telemetry-left { left: 10px; top: 10px; text-align: left; }
  .telemetry-right { right: 10px; bottom: 10px; font-size: 14px; }
  
  /* Central Glowing Core */
  .hud-core {
      position: absolute;
      width: 100px;
      height: 100px;
      background: radial-gradient(circle, rgba(0, 242, 255, 0.2) 0%, transparent 70%);
      transform: translateZ(10px);
      pointer-events: none;
  }
  
  /* Horizontal Scanning Line */
  .hud-scan {
      position: absolute;
      top: -100%;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, transparent, var(--hud-cyan), transparent);
      opacity: 0.1;
      z-index: 1;
  }
  
  .btn-text {
      position: relative;
      font-size: 18px;
      font-weight: 800;
      color: #fff;
      letter-spacing: 5px;
      text-shadow: 0 0 10px var(--hud-cyan);
      z-index: 10;
  }
  
  /* Hover State Interactions */
  .hud-wrap:hover .frame-corner {
      width: 40px;
      height: 40px;
      opacity: 1;
      box-shadow: 0 0 15px var(--hud-cyan);
  }
  .hud-wrap:hover .top-left { transform: translate(-10px, -10px); }
  .hud-wrap:hover .top-right { transform: translate(10px, -10px); }
  .hud-wrap:hover .bottom-left { transform: translate(-10px, 10px); }
  .hud-wrap:hover .bottom-right { transform: translate(10px, 10px); }
  
  .hud-btn:hover .hud-scan {
      animation: scan-move 2s linear infinite;
  }
  
  @keyframes scan-move {
      0% { top: -100%; }
      100% { top: 100%; }
  }
  
  .hud-btn:hover .telemetry-left, 
  .hud-btn:hover .telemetry-right {
      opacity: 1;
  }`,
            js: `const hudWrap = document.getElementById('hudWrap');
  const hudBtn = document.getElementById('hudBtn');
  const telemetry = document.getElementById('telemetryData');
  
  // 1. Advanced 3D Tilt & Light Logic
  hudWrap.addEventListener('mousemove', (e) => {
      const rect = hudBtn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      // Calculate rotation
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (centerY - y) / 10;
      const rotateY = (x - centerX) / 10;
  
      hudWrap.style.transform = \`rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`;
  
      // Update Internal Glow (Core follows mouse)
      const core = document.querySelector('.hud-core');
      core.style.left = \`\${x - 50}px\`;
      core.style.top = \`\${y - 50}px\`;
  });
  
  hudWrap.addEventListener('mouseleave', () => {
      hudWrap.style.transform = \`rotateX(0deg) rotateY(0deg)\`;
  });
  
  // 2. Real-time Telemetry Simulation (Changing Numbers)
  setInterval(() => {
      const randomVal = Math.floor(Math.random() * 99);
      telemetry.innerText = randomVal < 10 ? \`0\${randomVal}\` : randomVal;
  }, 150);
  
  // 3. Click "Data Burst"
  hudBtn.addEventListener('mousedown', () => {
      hudBtn.style.backgroundColor = 'rgba(0, 242, 255, 0.2)';
      hudBtn.style.transform = 'translateZ(-10px) scale(0.95)';
  });
  
  hudBtn.addEventListener('mouseup', () => {
      hudBtn.style.backgroundColor = 'rgba(0, 102, 255, 0.05)';
      hudBtn.style.transform = 'translateZ(0) scale(1)';
  });`
        },
        variants: [
            {
                id: "v1",
                name: "Variant 1",
                code: {
                    html: `<div class="combat-container">
          <div class="combat-wrap" id="combatWrap">
              <!-- Sharp Combat Brackets -->
              <div class="bracket top-left"></div>
              <div class="bracket top-right"></div>
              <div class="bracket bottom-left"></div>
              <div class="bracket bottom-right"></div>
      
              <button class="combat-btn" id="combatBtn">
                  <!-- Tactical Grid -->
                  <div class="tactical-grid"></div>
                  
                  <!-- Combat Telemetry -->
                  <div class="threat-level">
                      <span class="label">THREAT</span>
                      <span class="value" id="threatVal">LOW</span>
                  </div>
                  <div class="ammo-data" id="ammoCount">
                      99%
                  </div>
      
                  <!-- Red Plasma Core -->
                  <div class="combat-core"></div>
                  
                  <!-- Rapid Scan Beam -->
                  <div class="combat-scan"></div>
      
                  <span class="btn-text">ENGAGE TARGET</span>
                  
                  <!-- Warning Flicker Overlay -->
                  <div class="warning-layer"></div>
              </button>
          </div>
      </div>`,
                    css: `:root {
          --combat-red: #ff0000;
          --combat-orange: #ff4d00;
          --bg-dark: #050101;
      }
      
      body {
          background-color: var(--bg-dark);
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-family: 'Space Grotesk', sans-serif;
          perspective: 1200px;
      }
      
      .combat-container {
          position: relative;
      }
      
      .combat-wrap {
          position: relative;
          padding: 15px;
          transform-style: preserve-3d;
          transition: transform 0.1s ease-out;
      }
      
      /* Tactical Brackets (Frame) */
      .bracket {
          position: absolute;
          width: 15px;
          height: 15px;
          border: 3px solid var(--combat-red);
          transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
          z-index: 2;
          filter: drop-shadow(0 0 5px var(--combat-red));
      }
      .top-left { top: 0; left: 0; border-right: none; border-bottom: none; }
      .top-right { top: 0; right: 0; border-left: none; border-bottom: none; }
      .bottom-left { bottom: 0; left: 0; border-right: none; border-top: none; }
      .bottom-right { bottom: 0; right: 0; border-left: none; border-top: none; }
      
      .combat-btn {
          position: relative;
          width: 300px;
          height: 90px;
          background: rgba(255, 0, 0, 0.05);
          border: 1px solid rgba(255, 0, 0, 0.3);
          border-radius: 2px; /* Sharp Edges */
          cursor: pointer;
          overflow: hidden;
          outline: none;
          display: flex;
          justify-content: center;
          align-items: center;
          transform-style: preserve-3d;
      }
      
      /* Tactical Background Grid */
      .tactical-grid {
          position: absolute;
          width: 200%;
          height: 200%;
          background-image: 
              radial-gradient(circle, rgba(255, 0, 0, 0.1) 1px, transparent 1px);
          background-size: 15px 15px;
          top: -50%; left: -50%;
          transform: translateZ(-30px);
      }
      
      /* Combat Stats HUD */
      .threat-level, .ammo-data {
          position: absolute;
          color: var(--combat-red);
          font-family: 'Courier New', monospace;
          font-weight: 900;
          pointer-events: none;
          font-size: 10px;
      }
      .threat-level { left: 12px; top: 12px; display: flex; flex-direction: column; }
      .ammo-data { right: 12px; bottom: 12px; font-size: 16px; border-bottom: 2px solid var(--combat-red); }
      
      /* Internal Red Glow Core */
      .combat-core {
          position: absolute;
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, rgba(255, 0, 0, 0.3) 0%, transparent 70%);
          transform: translateZ(15px);
          pointer-events: none;
      }
      
      /* Fast Red Scanline */
      .combat-scan {
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent, var(--combat-red), transparent);
          opacity: 0.2;
          z-index: 1;
      }
      
      .btn-text {
          position: relative;
          font-size: 20px;
          font-weight: 900;
          color: #fff;
          letter-spacing: 6px;
          text-shadow: 0 0 15px var(--combat-red);
          z-index: 10;
      }
      
      /* Hover States */
      .combat-wrap:hover .bracket {
          width: 50px;
          height: 50px;
      }
      .combat-wrap:hover .top-left { transform: translate(-5px, -5px); }
      .combat-wrap:hover .top-right { transform: translate(5px, -5px); }
      .combat-wrap:hover .bottom-left { transform: translate(-5px, 5px); }
      .combat-wrap:hover .bottom-right { transform: translate(5px, 5px); }
      
      .combat-btn:hover .combat-scan {
          animation: rapid-scan 0.8s linear infinite;
      }
      
      @keyframes rapid-scan {
          0% { top: -100%; }
          100% { top: 100%; }
      }
      
      /* Damaged UI Flicker */
      .combat-btn:hover .warning-layer {
          position: absolute;
          inset: 0;
          background: rgba(255, 0, 0, 0.1);
          animation: flicker 0.2s infinite;
          pointer-events: none;
          z-index: 5;
      }
      
      @keyframes flicker {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
      }
      
      .combat-btn:active {
          background: var(--combat-red);
          transform: translateZ(-20px) scale(0.95);
      }
      .combat-btn:active .btn-text { color: #000; text-shadow: none; }`,
                    js: `const wrap = document.getElementById('combatWrap');
      const btn = document.getElementById('combatBtn');
      const threat = document.getElementById('threatVal');
      const ammo = document.getElementById('ammoCount');
      
      // 1. Tactical Tilt Logic
      wrap.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
      
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotX = (centerY - y) / 8;
          const rotY = (x - centerX) / 8;
      
          wrap.style.transform = \`rotateX(\${rotX}deg) rotateY(\${rotY}deg)\`;
      
          // Move Core
          const core = document.querySelector('.combat-core');
          core.style.left = \`\${x - 60}px\`;
          core.style.top = \`\${y - 60}px\`;
      });
      
      wrap.addEventListener('mouseleave', () => {
          wrap.style.transform = \`rotateX(0deg) rotateY(0deg)\`;
      });
      
      // 2. Real-time Combat Telemetry
      setInterval(() => {
          // Threat Level Flip
          const levels = ["LOW", "MED", "HIGH", "CRITICAL"];
          if (Math.random() > 0.9) {
              threat.innerText = levels[Math.floor(Math.random() * levels.length)];
              threat.style.color = threat.innerText === "CRITICAL" ? "#fff" : "var(--combat-red)";
          }
      
          // Ammo % Countdown
          let currentAmmo = parseInt(ammo.innerText);
          if (currentAmmo > 10) {
              ammo.innerText = (currentAmmo - (Math.random() > 0.9 ? 1 : 0)) + "%";
          }
      }, 200);
      
      // 3. Engage Sequence (Click)
      btn.addEventListener('click', () => {
          console.log("Target Locked. Engaging...");
          // Add temporary glitch on click
          btn.style.filter = "invert(1)";
          setTimeout(() => btn.style.filter = "none", 100);
      });`
                }
            },
            {
                id: "v2",
                name: "Variant 2",
                code: {
                    html: `<div class="bios-container">
          <div class="bios-wrap" id="biosWrap">
              <!-- Bio-Metric Brackets -->
              <div class="b-bracket top-l"></div>
              <div class="b-bracket top-r"></div>
              <div class="b-bracket bot-l"></div>
              <div class="b-bracket bot-r"></div>
      
              <button class="bios-btn" id="biosBtn">
                  <!-- Digital Rain / Matrix Grid -->
                  <div class="matrix-grid"></div>
                  
                  <!-- Live Biometric Telemetry -->
                  <div class="bio-stats">
                      <span class="stat-line">BPM: <span id="bpmVal">72</span></span>
                      <span class="stat-line">LINK: STABLE</span>
                  </div>
                  
                  <!-- Encryption Stream -->
                  <div class="crypto-stream" id="cryptoStream">
                      XF-992
                  </div>
      
                  <!-- Central Neural Core -->
                  <div class="bios-core"></div>
                  
                  <!-- Vertical Scan Ray -->
                  <div class="bios-scan"></div>
      
                  <div class="btn-content">
                      <span class="btn-text">ACCESS BIOS</span>
                      <div class="pulse-line"></div>
                  </div>
                  
                  <!-- Terminal Flicker -->
                  <div class="terminal-flicker"></div>
              </button>
          </div>
      </div>`,
                    css: `:root {
          --bios-green: #00ff41; /* Classic Matrix Green */
          --bios-dark: #0d0208;
          --bios-glow: rgba(0, 255, 65, 0.2);
      }
      
      body {
          background-color: #000;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-family: 'JetBrains Mono', monospace; /* Developer/Terminal font */
          perspective: 1200px;
      }
      
      .bios-container {
          position: relative;
      }
      
      .bios-wrap {
          position: relative;
          padding: 12px;
          transform-style: preserve-3d;
          transition: transform 0.1s ease-out;
      }
      
      /* Bio-Brackets (Frame) */
      .b-bracket {
          position: absolute;
          width: 12px;
          height: 12px;
          border: 2px solid var(--bios-green);
          z-index: 2;
          transition: all 0.4s ease;
      }
      .top-l { top: 0; left: 0; border-right: none; border-bottom: none; }
      .top-r { top: 0; right: 0; border-left: none; border-bottom: none; }
      .bot-l { bottom: 0; left: 0; border-right: none; border-top: none; }
      .bot-r { bottom: 0; right: 0; border-left: none; border-top: none; }
      
      .bios-btn {
          position: relative;
          width: 300px;
          height: 90px;
          background: var(--bios-dark);
          border: 1px solid rgba(0, 255, 65, 0.3);
          border-radius: 2px;
          cursor: pointer;
          overflow: hidden;
          outline: none;
          display: flex;
          justify-content: center;
          align-items: center;
          transform-style: preserve-3d;
      }
      
      /* Matrix Background Grid */
      .matrix-grid {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
              linear-gradient(rgba(0, 255, 65, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 65, 0.05) 1px, transparent 1px);
          background-size: 10px 10px;
          z-index: -1;
      }
      
      /* Bio-Telemetry Labels */
      .bio-stats, .crypto-stream {
          position: absolute;
          color: var(--bios-green);
          font-size: 9px;
          letter-spacing: 1px;
          pointer-events: none;
          text-transform: uppercase;
      }
      .bio-stats { left: 10px; top: 10px; display: flex; flex-direction: column; text-align: left; }
      .crypto-stream { right: 10px; bottom: 10px; font-weight: bold; border: 1px solid var(--bios-green); padding: 2px 4px; }
      
      /* Neural Green Core */
      .bios-core {
          position: absolute;
          width: 130px;
          height: 130px;
          background: radial-gradient(circle, rgba(0, 255, 65, 0.15) 0%, transparent 70%);
          transform: translateZ(10px);
          pointer-events: none;
      }
      
      /* Scanning Beam (Vertical) */
      .bios-scan {
          position: absolute;
          left: -100%;
          top: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, var(--bios-green), transparent);
          opacity: 0.1;
          z-index: 1;
      }
      
      .btn-content {
          text-align: center;
          z-index: 10;
          transform: translateZ(30px);
      }
      
      .btn-text {
          font-size: 19px;
          font-weight: 800;
          color: #fff;
          letter-spacing: 5px;
          text-shadow: 0 0 10px var(--bios-green);
      }
      
      .pulse-line {
          width: 40px;
          height: 2px;
          background: var(--bios-green);
          margin: 4px auto;
          animation: heartbeat 1.5s infinite;
      }
      
      @keyframes heartbeat {
          0%, 100% { transform: scaleX(1); opacity: 1; }
          50% { transform: scaleX(2.5); opacity: 0.5; }
      }
      
      /* Hover State Interactions */
      .bios-wrap:hover .b-bracket { width: 30px; height: 30px; border-color: #fff; }
      .bios-wrap:hover .top-l { transform: translate(-8px, -8px); }
      .bios-wrap:hover .top-r { transform: translate(8px, -8px); }
      .bios-wrap:hover .bot-l { transform: translate(-8px, 8px); }
      .bios-wrap:hover .bot-r { transform: translate(8px, 8px); }
      
      .bios-btn:hover .bios-scan {
          animation: side-scan 1.5s linear infinite;
      }
      
      @keyframes side-scan {
          0% { left: -100%; }
          100% { left: 100%; }
      }
      
      /* Terminal Flicker Effect */
      .terminal-flicker {
          position: absolute;
          inset: 0;
          background: rgba(0, 255, 65, 0.02);
          pointer-events: none;
          z-index: 5;
          animation: flicker 0.1s infinite;
      }
      
      @keyframes flicker {
          0% { opacity: 0.1; }
          100% { opacity: 0.2; }
      }
      
      .bios-btn:active {
          transform: translateZ(-10px) scale(0.96);
          box-shadow: inset 0 0 20px var(--bios-green);
      }`,
                    js: `const wrap = document.getElementById('biosWrap');
      const btn = document.getElementById('biosBtn');
      const bpm = document.getElementById('bpmVal');
      const crypto = document.getElementById('cryptoStream');
      
      // 1. BIOS Parallax Tilt
      wrap.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
      
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotX = (centerY - y) / 12;
          const rotY = (x - centerX) / 12;
      
          wrap.style.transform = \`rotateX(\${rotX}deg) rotateY(\${rotY}deg)\`;
      
          // Update Core Position
          const core = document.querySelector('.bios-core');
          core.style.left = \`\${x - 65}px\`;
          core.style.top = \`\${y - 65}px\`;
      });
      
      wrap.addEventListener('mouseleave', () => {
          wrap.style.transform = \`rotateX(0deg) rotateY(0deg)\`;
      });
      
      // 2. Real-time Bio Telemetry
      setInterval(() => {
          // BPM (Heart Rate) Simulation
          let currentBpm = parseInt(bpm.innerText);
          let flux = Math.floor(Math.random() * 5) - 2; // -2 to +2
          bpm.innerText = currentBpm + flux;
      
          // Crypto Code Stream Simulation
          const chars = "ABC0123456789XF";
          let newCode = "";
          for(let i=0; i<5; i++) {
              newCode += chars[Math.floor(Math.random() * chars.length)];
          }
          crypto.innerText = newCode;
      }, 300);
      
      // 3. System Access (Click)
      btn.addEventListener('click', () => {
          const originalText = btn.querySelector('.btn-text').innerText;
          btn.querySelector('.btn-text').innerText = "LINKING...";
          
          setTimeout(() => {
              btn.querySelector('.btn-text').innerText = originalText;
          }, 1000);
      });`
                }
            }
        ]
    },
    {
        id: "comp-qsjrj8",
        name: "New Component",
        category: "Buttons",
        tags: ["hover", "3d"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777044031019,
        code: {
            html: `<!-- SVG Filter for the Liquid Fusion Core -->
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display:none;">
    <defs>
      <filter id="fusion-goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" result="goo" />
        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
      </filter>
    </defs>
  </svg>
  
  <div class="fusion-scene">
      <div class="fusion-magnetic-area" id="magArea">
          <div class="fusion-wrap" id="fusionWrap">
              <!-- Hardware HUD Frame -->
              <div class="hud-bracket t-l"></div>
              <div class="hud-bracket t-r"></div>
              <div class="hud-bracket b-l"></div>
              <div class="hud-bracket b-r"></div>
  
              <button class="fusion-btn" id="fusionBtn">
                  <!-- Layer 1: Deep Space Grid (Z: -100px) -->
                  <div class="layer grid-layer"></div>
                  
                  <!-- Layer 2: Liquid Energy Nucleus (Z: -50px) -->
                  <div class="layer liquid-layer">
                      <div class="goo-wrap">
                          <div class="blob main-blob"></div>
                          <div class="blob mini-blob" id="chaseBlob"></div>
                      </div>
                  </div>
                  
                  <!-- Layer 3: Floating Data Particles (Z: 0px) -->
                  <div class="layer particle-field" id="particleField"></div>
                  
                  <!-- Layer 4: Content HUD (Z: 60px) -->
                  <div class="content-layer">
                      <div class="telemetry">
                          <span class="t-label">SYNC:</span>
                          <span class="t-value" id="syncVal">98.2%</span>
                      </div>
                      <span class="btn-text">NEXUS LINK</span>
                      <div class="status-bar"><div class="bar-fill"></div></div>
                  </div>
  
                  <!-- Surface Glass Reflect -->
                  <div class="glass-surface"></div>
              </button>
          </div>
      </div>
  </div>`,
            css: `:root {
      --nexus-cyan: #00f2ff;
      --nexus-purple: #7000ff;
      --bg-dark: #020308;
  }
  
  body {
      background-color: var(--bg-dark);
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      font-family: 'Space Grotesk', sans-serif;
      perspective: 2000px;
      overflow: hidden;
  }
  
  .fusion-magnetic-area {
      padding: 100px; /* Magnetic trigger zone */
      display: flex;
      justify-content: center;
      align-items: center;
  }
  
  .fusion-wrap {
      position: relative;
      transform-style: preserve-3d;
      transition: transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  
  /* HUD Brackets */
  .hud-bracket {
      position: absolute;
      width: 20px;
      height: 20px;
      border: 2px solid var(--nexus-cyan);
      z-index: 10;
      transition: all 0.4s ease;
      opacity: 0.3;
  }
  .t-l { top: -10px; left: -10px; border-right: 0; border-bottom: 0; }
  .t-r { top: -10px; right: -10px; border-left: 0; border-bottom: 0; }
  .b-l { bottom: -10px; left: -10px; border-right: 0; border-top: 0; }
  .b-r { bottom: -10px; right: -10px; border-left: 0; border-top: 0; }
  
  .fusion-btn {
      position: relative;
      width: 320px;
      height: 100px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(0, 242, 255, 0.1);
      border-radius: 12px;
      cursor: pointer;
      overflow: hidden;
      transform-style: preserve-3d;
      box-shadow: 0 50px 100px rgba(0,0,0,0.8);
  }
  
  /* Layers Base */
  .layer { position: absolute; inset: 0; pointer-events: none; }
  
  /* 3D Grid (Z: -100px) */
  .grid-layer {
      background-image: 
          linear-gradient(rgba(0, 242, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 242, 255, 0.1) 1px, transparent 1px);
      background-size: 20px 20px;
      transform: translateZ(-100px) scale(1.5);
  }
  
  /* Liquid Core (Z: -50px) */
  .goo-wrap {
      width: 100%; height: 100%;
      filter: url('#fusion-goo');
      transform: translateZ(-50px);
  }
  .blob {
      position: absolute;
      background: linear-gradient(45deg, var(--nexus-cyan), var(--nexus-purple));
      border-radius: 50%;
  }
  .main-blob { width: 200px; height: 60px; left: 60px; top: 20px; border-radius: 30px; }
  .mini-blob { width: 80px; height: 80px; transform: translate(-50%, -50%); opacity: 0; }
  
  /* Content Layer (Z: 60px) */
  .content-layer {
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transform: translateZ(60px);
  }
  
  .btn-text {
      font-size: 22px;
      font-weight: 900;
      color: #fff;
      letter-spacing: 8px;
      text-shadow: 0 0 20px var(--nexus-cyan);
  }
  
  .telemetry {
      position: absolute;
      top: 10px; right: 15px;
      font-family: monospace;
      font-size: 10px;
      color: var(--nexus-cyan);
  }
  
  .status-bar {
      width: 120px; height: 2px;
      background: rgba(255,255,255,0.1);
      margin-top: 10px;
      overflow: hidden;
  }
  .bar-fill {
      width: 60%; height: 100%;
      background: var(--nexus-cyan);
      animation: loading 2s ease-in-out infinite alternate;
  }
  
  @keyframes loading {
      from { width: 20%; } to { width: 90%; }
  }
  
  /* Hover States */
  .fusion-wrap:hover .hud-bracket { opacity: 1; width: 40px; height: 40px; }
  .fusion-wrap:hover .t-l { transform: translate(-10px, -10px); }
  .fusion-wrap:hover .t-r { transform: translate(10px, -10px); }
  .fusion-wrap:hover .b-l { transform: translate(-10px, 10px); }
  .fusion-wrap:hover .b-r { transform: translate(10px, 10px); }
  
  .fusion-btn:hover .mini-blob { opacity: 1; }
  
  .fusion-btn:active {
      transform: translateZ(-20px) scale(0.95);
  }`,
            js: `const magArea = document.getElementById('magArea');
  const wrap = document.getElementById('fusionWrap');
  const btn = document.getElementById('fusionBtn');
  const chaseBlob = document.getElementById('chaseBlob');
  const syncVal = document.getElementById('syncVal');
  
  // 1. Magnetic + 3D Parallax Logic
  magArea.addEventListener('mousemove', (e) => {
      const rect = magArea.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
  
      // Magnetic Pull for the wrapper
      wrap.style.transform = \`translate(\${x * 0.2}px, \${y * 0.2}px) rotateX(\${-y * 0.05}deg) rotateY(\${x * 0.05}deg)\`;
  
      // Liquid Chase Logic inside the button
      const btnRect = btn.getBoundingClientRect();
      const bx = e.clientX - btnRect.left;
      const by = e.clientY - btnRect.top;
      chaseBlob.style.left = \`\${bx}px\`;
      chaseBlob.style.top = \`\${by}px\`;
  
      // Internal Layer Parallax
      const grid = document.querySelector('.grid-layer');
      const content = document.querySelector('.content-layer');
      
      grid.style.transform = \`translateZ(-100px) translate(\${x * 0.05}px, \${y * 0.05}px) scale(1.5)\`;
      content.style.transform = \`translateZ(60px) translate(\${-x * 0.1}px, \${-y * 0.1}px)\`;
  });
  
  magArea.addEventListener('mouseleave', () => {
      wrap.style.transform = \`translate(0,0) rotateX(0) rotateY(0)\`;
      chaseBlob.style.opacity = '0';
  });
  
  // 2. Data Telemetry Simulation
  setInterval(() => {
      const val = (95 + Math.random() * 4).toFixed(1);
      syncVal.innerText = \`\${val}%\`;
  }, 500);
  
  // 3. Particle Field Generator (Simple Logic)
  const field = document.getElementById('particleField');
  for(let i=0; i<15; i++) {
      const dot = document.createElement('div');
      dot.style.cssText = \`
          position: absolute;
          width: 2px; height: 2px;
          background: white;
          border-radius: 50%;
          left: \${Math.random() * 100}%;
          top: \${Math.random() * 100}%;
          opacity: 0.3;
      \`;
      field.appendChild(dot);
  }`
        },
        variants: [
            {
                id: "v1",
                name: "Variant 1",
                code: {
                    html: `<!-- SVG Filter for the Molten Gold Gooey Effect -->
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display:none;">
        <defs>
          <filter id="singularity-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -12" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
      
      <div class="fusion-scene">
          <div class="magnetic-area" id="magArea">
              <div class="variant-wrap" id="variantWrap">
                  <!-- Tactical Industrial Frame -->
                  <div class="tactical-bracket t-l"></div>
                  <div class="tactical-bracket t-r"></div>
                  <div class="tactical-bracket b-l"></div>
                  <div class="tactical-bracket b-r"></div>
      
                  <button class="variant-btn" id="variantBtn">
                      <!-- Layer 1: Amber Dot Matrix (Z: -120px) -->
                      <div class="layer matrix-bg"></div>
                      
                      <!-- Layer 2: Molten Core (Z: -60px) -->
                      <div class="layer liquid-layer">
                          <div class="goo-container">
                              <div class="blob sun-core"></div>
                              <div class="blob graviton" id="graviton"></div>
                          </div>
                      </div>
                      
                      <!-- Layer 3: Ember Particles (Z: 0px) -->
                      <div class="layer ember-field" id="emberField"></div>
                      
                      <!-- Layer 4: Command HUD (Z: 80px) -->
                      <div class="content-layer">
                          <div class="telemetry-top">
                              <span class="label">CORE_TEMP:</span>
                              <span class="value" id="tempVal">5800K</span>
                          </div>
                          <span class="btn-text">IGNITE DRIVE</span>
                          <div class="wave-container">
                              <div class="wave"></div>
                              <div class="wave"></div>
                          </div>
                      </div>
      
                      <!-- Heat Distortion Overlay -->
                      <div class="heat-surface"></div>
                  </button>
              </div>
          </div>
      </div>`,
                    css: `:root {
          --amber-hot: #ffaa00;
          --amber-deep: #ff4400;
          --void-bg: #050200;
      }
      
      body {
          background-color: #000;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-family: 'Inter', sans-serif;
          perspective: 2500px;
      }
      
      .magnetic-area {
          padding: 120px;
          display: flex;
          justify-content: center;
          align-items: center;
      }
      
      .variant-wrap {
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.1s ease-out;
      }
      
      /* Tactical Brackets */
      .tactical-bracket {
          position: absolute;
          width: 25px;
          height: 25px;
          border: 3px solid var(--amber-hot);
          z-index: 10;
          transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
          filter: drop-shadow(0 0 5px var(--amber-hot));
      }
      .t-l { top: -15px; left: -15px; border-right: 0; border-bottom: 0; }
      .t-r { top: -15px; right: -15px; border-left: 0; border-bottom: 0; }
      .b-l { bottom: -15px; left: -15px; border-right: 0; border-top: 0; }
      .b-r { bottom: -15px; right: -15px; border-left: 0; border-top: 0; }
      
      .variant-btn {
          position: relative;
          width: 320px;
          height: 100px;
          background: #111;
          border: 1px solid rgba(255, 170, 0, 0.2);
          border-radius: 4px; /* Industrial sharp edges */
          cursor: pointer;
          overflow: hidden;
          transform-style: preserve-3d;
          box-shadow: 0 40px 80px rgba(0,0,0,0.9);
      }
      
      .layer { position: absolute; inset: 0; pointer-events: none; }
      
      /* Dot Matrix (Z: -120px) */
      .matrix-bg {
          background-image: radial-gradient(var(--amber-hot) 0.5px, transparent 0.5px);
          background-size: 12px 12px;
          transform: translateZ(-120px) scale(1.8);
          opacity: 0.15;
      }
      
      /* Molten Liquid (Z: -60px) */
      .goo-container {
          width: 100%; height: 100%;
          filter: url('#singularity-goo');
          transform: translateZ(-60px);
      }
      .blob {
          position: absolute;
          background: linear-gradient(135deg, var(--amber-hot), var(--amber-deep));
          border-radius: 50%;
      }
      .sun-core { width: 180px; height: 180px; left: 70px; top: -40px; }
      .graviton { width: 90px; height: 90px; transform: translate(-50%, -50%); opacity: 0; background: #fff; }
      
      /* Content Layer (Z: 80px) */
      .content-layer {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transform: translateZ(80px);
      }
      
      .btn-text {
          font-size: 24px;
          font-weight: 900;
          color: #fff;
          letter-spacing: 10px;
          text-shadow: 0 0 20px var(--amber-hot);
      }
      
      .telemetry-top {
          position: absolute;
          top: 12px; left: 15px;
          font-family: monospace;
          font-size: 9px;
          color: var(--amber-hot);
          display: flex; gap: 5px;
      }
      
      /* Animated Audio-like Waves */
      .wave-container {
          display: flex; gap: 3px; height: 10px; margin-top: 10px;
      }
      .wave {
          width: 2px; height: 100%; background: var(--amber-hot);
          animation: wave-pulse 0.6s ease-in-out infinite alternate;
      }
      .wave:nth-child(2) { animation-delay: 0.3s; }
      
      @keyframes wave-pulse {
          from { height: 2px; } to { height: 12px; }
      }
      
      /* Hover/Active States */
      .variant-wrap:hover .tactical-bracket { width: 60px; height: 60px; }
      .variant-wrap:hover .t-l { transform: translate(-5px, -5px); }
      .variant-wrap:hover .t-r { transform: translate(5px, -5px); }
      .variant-wrap:hover .b-l { transform: translate(-5px, 5px); }
      .variant-wrap:hover .b-r { transform: translate(5px, 5px); }
      
      .variant-btn:hover .graviton { opacity: 1; }
      .variant-btn:active { transform: translateZ(-30px); }`,
                    js: `const magArea = document.getElementById('magArea');
      const wrap = document.getElementById('variantWrap');
      const btn = document.getElementById('variantBtn');
      const graviton = document.getElementById('graviton');
      const tempVal = document.getElementById('tempVal');
      
      magArea.addEventListener('mousemove', (e) => {
          const rect = magArea.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
      
          // 1. Magnetic Pull & Tilt
          wrap.style.transform = \`translate(\${x * 0.15}px, \${y * 0.15}px) rotateX(\${-y * 0.04}deg) rotateY(\${x * 0.04}deg)\`;
      
          // 2. Gravitational Core Logic
          const btnRect = btn.getBoundingClientRect();
          const bx = e.clientX - btnRect.left;
          const by = e.clientY - btnRect.top;
          
          graviton.style.left = \`\${bx}px\`;
          graviton.style.top = \`\${by}px\`;
      
          // 3. Parallax Layers
          const matrix = document.querySelector('.matrix-bg');
          const content = document.querySelector('.content-layer');
          
          matrix.style.transform = \`translateZ(-120px) translate(\${x * 0.08}px, \${y * 0.08}px) scale(1.8)\`;
          content.style.transform = \`translateZ(80px) translate(\${-x * 0.12}px, \${-y * 0.12}px)\`;
      });
      
      magArea.addEventListener('mouseleave', () => {
          wrap.style.transform = \`translate(0,0) rotateX(0) rotateY(0)\`;
          graviton.style.opacity = '0';
      });
      
      // Real-time Temperature Fluctuations
      setInterval(() => {
          const temp = (5500 + Math.random() * 500).toFixed(0);
          tempVal.innerText = \`\${temp}K\`;
      }, 200);
      
      // Particle Creation (Embers)
      const field = document.getElementById('emberField');
      for(let i=0; i<20; i++) {
          const ember = document.createElement('div');
          ember.style.cssText = \`
              position: absolute; width: 1.5px; height: 1.5px;
              background: orange; border-radius: 50%;
              left: \${Math.random() * 100}%; top: \${Math.random() * 100}%;
              opacity: \${Math.random()};
          \`;
          field.appendChild(ember);
      }`
                }
            },
            {
                id: "v2",
                name: "Variant 2",
                code: {
                    html: "",
                    css: "",
                    js: ""
                }
            },
            {
                id: "v3",
                name: "Variant 3",
                code: {
                    html: "",
                    css: "",
                    js: ""
                }
            },
            {
                id: "v4",
                name: "Variant 4",
                code: {
                    html: "",
                    css: "",
                    js: ""
                }
            }
        ]
    },


    {
        id: "comp-5i0xwo",
        name: "New Component",
        category: "Buttons",
        tags: ["hover", "3d"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777044031019,
        code: {
            html: `<div class="crystal-container">
      <div class="crystal-scene" id="crystalScene">
          <!-- Background Refraction Panel (Deepest) -->
          <div class="glass-layer panel-back"></div>
          
          <!-- Floating HUD Geometry -->
          <div class="geometry-wrap" id="geoWrap">
              <div class="wireframe"></div>
              <div class="floating-data">
                  <span class="byte">0x1F4</span>
                  <span class="byte">REF_09</span>
              </div>
          </div>
  
          <button class="crystal-btn" id="crystalBtn">
              <!-- Ray-Tracing Light (The light that follows mouse) -->
              <div class="refraction-ray" id="ray"></div>
              
              <!-- Internal Crystal Grid -->
              <div class="crystal-grid"></div>
  
              <div class="btn-core-content">
                  <span class="btn-text">CRYSTAL LINK</span>
                  <div class="nano-loader">
                      <div class="loader-line"></div>
                  </div>
              </div>
  
              <!-- Front Glass Polish -->
              <div class="glass-layer panel-front"></div>
          </button>
  
          <!-- Floating HUD Elements outside the button -->
          <div class="hud-tag top-left-tag">OS_REFRACTION</div>
          <div class="hud-tag bottom-right-tag">v7.2.4_STABLE</div>
      </div>
  </div>`,
            css: `:root {
      --glass-color: rgba(255, 255, 255, 0.03);
      --crystal-cyan: #00e5ff;
      --crystal-blue: #2979ff;
      --text-white: #f0f0f0;
  }
  
  body {
      background-color: #030508;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      font-family: 'Space Grotesk', sans-serif;
      perspective: 2000px;
  }
  
  .crystal-container {
      position: relative;
      padding: 100px;
  }
  
  .crystal-scene {
      position: relative;
      transform-style: preserve-3d;
      transition: transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  
  /* Glass Layers for Depth */
  .glass-layer {
      position: absolute;
      inset: -10px;
      background: var(--glass-color);
      backdrop-filter: blur(15px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      pointer-events: none;
      border-radius: 20px;
  }
  .panel-back { transform: translateZ(-80px); opacity: 0.5; }
  .panel-front { transform: translateZ(40px); border: 1px solid rgba(255, 255, 255, 0.2); inset: 0; }
  
  .crystal-btn {
      position: relative;
      width: 320px;
      height: 100px;
      background: rgba(255, 255, 255, 0.02);
      border: none;
      border-radius: 12px;
      cursor: pointer;
      overflow: hidden;
      transform-style: preserve-3d;
      outline: none;
  }
  
  /* Ray-Tracing Refraction Effect */
  .refraction-ray {
      position: absolute;
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, rgba(0, 229, 255, 0.15) 0%, transparent 70%);
      transform: translate(-50%, -50%);
      pointer-events: none;
      mix-blend-mode: screen;
      z-index: 1;
  }
  
  /* 3D Geometry HUD (Z: -40px) */
  .geometry-wrap {
      position: absolute;
      width: 100%; height: 100%;
      transform: translateZ(-40px);
      pointer-events: none;
  }
  .wireframe {
      position: absolute;
      inset: 10px;
      border: 1px dashed rgba(0, 229, 255, 0.2);
      border-radius: 10px;
  }
  .floating-data {
      position: absolute;
      right: -40px; top: -20px;
      display: flex; flex-direction: column;
      color: var(--crystal-cyan);
      font-size: 8px; font-family: monospace;
      opacity: 0.4;
  }
  
  /* Button UI */
  .btn-core-content {
      position: relative;
      z-index: 5;
      transform: translateZ(60px);
  }
  .btn-text {
      font-size: 22px;
      font-weight: 800;
      color: var(--text-white);
      letter-spacing: 10px;
      text-shadow: 0 0 20px rgba(0, 229, 255, 0.5);
  }
  
  /* Nano Loader line */
  .nano-loader {
      width: 150px; height: 1px;
      background: rgba(255, 255, 255, 0.1);
      margin: 8px auto;
  }
  .loader-line {
      width: 30%; height: 100%;
      background: var(--crystal-cyan);
      box-shadow: 0 0 10px var(--crystal-cyan);
      animation: flow 2s ease-in-out infinite alternate;
  }
  @keyframes flow { from { transform: translateX(0); width: 10%; } to { transform: translateX(100px); width: 40%; } }
  
  /* External HUD Tags */
  .hud-tag {
      position: absolute;
      font-size: 9px;
      color: rgba(255, 255, 255, 0.3);
      letter-spacing: 2px;
  }
  .top-left-tag { top: -40px; left: -20px; border-left: 2px solid var(--crystal-cyan); padding-left: 5px; }
  .bottom-right-tag { bottom: -40px; right: -20px; border-right: 2px solid var(--crystal-cyan); padding-right: 5px; }
  
  /* Interactions */
  .crystal-scene:hover .panel-back { transform: translateZ(-120px); opacity: 0.8; }
  .crystal-scene:hover .panel-front { transform: translateZ(60px); }
  .crystal-btn:active { transform: translateZ(-20px) scale(0.98); }`,
            js: `const scene = document.getElementById('crystalScene');
  const btn = document.getElementById('crystalBtn');
  const ray = document.getElementById('ray');
  const geo = document.getElementById('geoWrap');
  
  document.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const sceneRect = scene.getBoundingClientRect();
      
      // Mouse relative to Button Center
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // 1. Ray Tracing (Light Follows Mouse inside button)
      ray.style.left = \`\${x}px\`;
      ray.style.top = \`\${y}px\`;
  
      // 2. 3D Tilt Logic
      const centerX = sceneRect.width / 2;
      const centerY = sceneRect.height / 2;
      const rotateX = (centerY - (e.clientY - sceneRect.top)) / 15;
      const rotateY = ((e.clientX - sceneRect.left) - centerX) / 15;
  
      scene.style.transform = \`rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`;
  
      // 3. Dynamic Parallax for internal HUD
      const geoX = (e.clientX - window.innerWidth / 2) * 0.05;
      const geoY = (e.clientY - window.innerHeight / 2) * 0.05;
      geo.style.transform = \`translateZ(-40px) translate(\${geoX}px, \${geoY}px)\`;
  });
  
  scene.addEventListener('mouseleave', () => {
      scene.style.transform = \`rotateX(0deg) rotateY(0deg)\`;
      geo.style.transform = \`translateZ(-40px) translate(0,0)\`;
  });
  
  // Subtle Data Change Logic
  setInterval(() => {
      const bytes = document.querySelectorAll('.byte');
      bytes.forEach(b => {
          if(Math.random() > 0.8) {
              b.innerText = '0x' + Math.floor(Math.random()*999).toString(16).toUpperCase();
          }
      });
  }, 500);`
        },
        variants: [
            {
                id: "v1",
                name: "Variant 1",
                code: {
                    html: `<div class="crystal-container">
          <div class="obsidian-scene" id="obsidianScene">
              <!-- Deep Void Layer (Deepest) -->
              <div class="obsidian-layer panel-back"></div>
              
              <!-- Internal Energy Core -->
              <div class="energy-wrap" id="energyWrap">
                  <div class="core-pulse"></div>
                  <div class="data-stream">
                      <span class="bit">LN_01</span>
                      <span class="bit">SH_V8</span>
                  </div>
              </div>
      
              <button class="obsidian-btn" id="obsidianBtn">
                  <!-- Neon Light Trap (Follows Mouse) -->
                  <div class="light-trap" id="lightTrap"></div>
                  
                  <!-- Tech Grid Overlay -->
                  <div class="tech-overlay"></div>
      
                  <div class="btn-core-content">
                      <span class="btn-text">VOID_LINK</span>
                      <div class="energy-line">
                          <div class="flow-dot"></div>
                      </div>
                  </div>
      
                  <!-- Front Polished Face -->
                  <div class="obsidian-layer panel-front"></div>
              </button>
      
              <!-- External HUD Metrics -->
              <div class="obsidian-tag top-right-tag">SECURE_CHANNEL_9</div>
              <div class="obsidian-tag bottom-left-tag">CORE_TEMP_42K</div>
          </div>
      </div>`,
                    css: `:root {
          --obsidian-black: #0a0a0a;
          --neon-magenta: #ff007f;
          --neon-glow: rgba(255, 0, 127, 0.4);
          --glass-edge: rgba(255, 255, 255, 0.1);
      }
      
      body {
          background-color: #050505;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-family: 'Space Grotesk', sans-serif;
          perspective: 2000px;
      }
      
      .crystal-container {
          position: relative;
          padding: 100px;
      }
      
      .obsidian-scene {
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
      }
      
      /* Multi-Layered Obsidian Glass */
      .obsidian-layer {
          position: absolute;
          inset: -5px;
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-edge);
          pointer-events: none;
          border-radius: 4px; /* Industrial sharp look */
      }
      .panel-back { transform: translateZ(-100px); opacity: 0.6; }
      .panel-front { 
          transform: translateZ(50px); 
          border: 1px solid rgba(255, 0, 127, 0.2); 
          background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%);
          inset: 0; 
      }
      
      .obsidian-btn {
          position: relative;
          width: 320px;
          height: 100px;
          background: var(--obsidian-black);
          border: none;
          border-radius: 4px;
          cursor: pointer;
          overflow: hidden;
          transform-style: preserve-3d;
          outline: none;
      }
      
      /* Neon Light Trap Refraction */
      .light-trap {
          position: absolute;
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, var(--neon-glow) 0%, transparent 70%);
          transform: translate(-50%, -50%);
          pointer-events: none;
          mix-blend-mode: color-dodge;
          z-index: 1;
      }
      
      /* Energy Core HUD (Z: -50px) */
      .energy-wrap {
          position: absolute;
          width: 100%; height: 100%;
          transform: translateZ(-50px);
          pointer-events: none;
      }
      .core-pulse {
          position: absolute;
          inset: 20px;
          border: 1px solid rgba(255, 0, 127, 0.1);
          box-shadow: inset 0 0 20px rgba(255, 0, 127, 0.05);
      }
      .data-stream {
          position: absolute;
          left: -50px; top: -10px;
          color: var(--neon-magenta);
          font-size: 8px; font-family: monospace;
          opacity: 0.5;
      }
      
      /* Button Content */
      .btn-core-content {
          position: relative;
          z-index: 5;
          transform: translateZ(80px);
      }
      .btn-text {
          font-size: 24px;
          font-weight: 900;
          color: #fff;
          letter-spacing: 12px;
          text-shadow: 0 0 20px var(--neon-magenta);
      }
      
      .energy-line {
          width: 100px; height: 1px;
          background: rgba(255, 0, 127, 0.2);
          margin: 6px auto;
          position: relative;
      }
      .flow-dot {
          position: absolute;
          width: 4px; height: 4px;
          background: var(--neon-magenta);
          border-radius: 50%;
          top: -1.5px;
          box-shadow: 0 0 10px var(--neon-magenta);
          animation: flow-run 2s infinite linear;
      }
      @keyframes flow-run { 0% { left: 0; } 100% { left: 100%; } }
      
      /* External HUD Tags */
      .obsidian-tag {
          position: absolute;
          font-size: 8px;
          color: var(--neon-magenta);
          letter-spacing: 3px;
          font-weight: bold;
          opacity: 0.6;
      }
      .top-right-tag { top: -45px; right: -20px; border-bottom: 1px solid var(--neon-magenta); }
      .bottom-left-tag { bottom: -45px; left: -20px; border-top: 1px solid var(--neon-magenta); }
      
      /* Interactions */
      .obsidian-scene:hover .panel-back { transform: translateZ(-150px); opacity: 1; border-color: var(--neon-magenta); }
      .obsidian-scene:hover .panel-front { transform: translateZ(70px); border-color: rgba(255, 0, 127, 0.5); }
      .obsidian-btn:active { transform: translateZ(-10px) scale(0.97); }`,
                    js: `const scene = document.getElementById('obsidianScene');
      const btn = document.getElementById('obsidianBtn');
      const trap = document.getElementById('lightTrap');
      const energy = document.getElementById('energyWrap');
      
      document.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const sceneRect = scene.getBoundingClientRect();
          
          // Mouse relative to Button Center
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          // 1. Light Trap Follow
          trap.style.left = \`\${x}px\`;
          trap.style.top = \`\${y}px\`;
      
          // 2. 3D Tilt Logic
          const centerX = sceneRect.width / 2;
          const centerY = sceneRect.height / 2;
          const rotateX = (centerY - (e.clientY - sceneRect.top)) / 12;
          const rotateY = ((e.clientX - sceneRect.left) - centerX) / 12;
      
          scene.style.transform = \`rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`;
      
          // 3. Parallax Energy Core
          const energyX = (e.clientX - window.innerWidth / 2) * 0.04;
          const energyY = (e.clientY - window.innerHeight / 2) * 0.04;
          energy.style.transform = \`translateZ(-50px) translate(\${energyX}px, \${energyY}px)\`;
      });
      
      scene.addEventListener('mouseleave', () => {
          scene.style.transform = \`rotateX(0deg) rotateY(0deg)\`;
          energy.style.transform = \`translateZ(-50px) translate(0,0)\`;
      });
      
      // Random Bit Shift Logic
      setInterval(() => {
          const bits = document.querySelectorAll('.bit');
          bits.forEach(bit => {
              if(Math.random() > 0.9) {
                  bit.innerText = 'SH_' + Math.floor(Math.random()*9).toString();
              }
          });
      }, 400);`
                }
            },
            {
                id: "v2",
                name: "Variant 2",
                code: {
                    html: `<div class="crystal-container">
          <div class="oracle-scene" id="oracleScene">
              <!-- Emerald Nebula Layer (Deepest) -->
              <div class="oracle-layer panel-back"></div>
              
              <!-- Floating Golden Runes / Data -->
              <div class="runes-wrap" id="runesWrap">
                  <div class="rune-stream">
                      <span class="rune">Ω_9</span>
                      <span class="rune">Σ_X</span>
                  </div>
                  <div class="hex-grid"></div>
              </div>
      
              <button class="oracle-btn" id="oracleBtn">
                  <!-- Golden Ray-Tracing Light -->
                  <div class="gold-ray" id="goldRay"></div>
                  
                  <!-- Internal Emerald Refraction -->
                  <div class="emerald-refraction"></div>
      
                  <div class="btn-core-content">
                      <span class="btn-text">ORACLE_LINK</span>
                      <div class="pulse-ring"></div>
                  </div>
      
                  <!-- Front Frosted Face -->
                  <div class="oracle-layer panel-front"></div>
              </button>
      
              <!-- External Oracle HUD -->
              <div class="oracle-tag top-left-tag">CRYPT_ACTIVE</div>
              <div class="oracle-tag bottom-right-tag">DIVINE_ENCRYPTION_v3</div>
          </div>
      </div>`,
                    css: `:root {
          --oracle-emerald: #00ff88;
          --oracle-gold: #ffcc00;
          --deep-forest: #041a0d;
          --gold-glow: rgba(255, 204, 0, 0.3);
      }
      
      body {
          background-color: #020806;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-family: 'Syne', sans-serif;
          perspective: 2000px;
      }
      
      .crystal-container {
          position: relative;
          padding: 100px;
      }
      
      .oracle-scene {
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
      }
      
      /* Multi-Layered Emerald Glass */
      .oracle-layer {
          position: absolute;
          inset: -10px;
          background: rgba(0, 255, 136, 0.03);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(0, 255, 136, 0.1);
          pointer-events: none;
          border-radius: 30px;
      }
      .panel-back { 
          transform: translateZ(-110px); 
          background: radial-gradient(circle, rgba(0, 255, 136, 0.1) 0%, transparent 70%);
          opacity: 0.6; 
      }
      .panel-front { 
          transform: translateZ(50px); 
          border: 1px solid rgba(255, 204, 0, 0.2); 
          background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%);
          inset: 0; 
      }
      
      .oracle-btn {
          position: relative;
          width: 320px;
          height: 100px;
          background: var(--deep-forest);
          border: none;
          border-radius: 12px;
          cursor: pointer;
          overflow: hidden;
          transform-style: preserve-3d;
          outline: none;
      }
      
      /* Golden Ray-Tracing Refraction */
      .gold-ray {
          position: absolute;
          width: 280px;
          height: 280px;
          background: radial-gradient(circle, var(--gold-glow) 0%, transparent 70%);
          transform: translate(-50%, -50%);
          pointer-events: none;
          mix-blend-mode: overlay;
          z-index: 1;
      }
      
      /* Golden Runes HUD (Z: -60px) */
      .runes-wrap {
          position: absolute;
          width: 100%; height: 100%;
          transform: translateZ(-60px);
          pointer-events: none;
      }
      .rune-stream {
          position: absolute;
          left: -40px; top: -30px;
          display: flex; flex-direction: column;
          color: var(--oracle-gold);
          font-size: 10px; font-family: serif;
          opacity: 0.5;
          font-weight: bold;
      }
      
      /* Internal Emerald Shimmer */
      .emerald-refraction {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.05), transparent);
          animation: sweep 4s infinite linear;
      }
      @keyframes sweep { from { transform: translateX(-100%) skewX(-20deg); } to { transform: translateX(200%) skewX(-20deg); } }
      
      /* Button Content */
      .btn-core-content {
          position: relative;
          z-index: 5;
          transform: translateZ(90px);
      }
      .btn-text {
          font-size: 22px;
          font-weight: 800;
          color: #fff;
          letter-spacing: 12px;
          text-shadow: 0 0 15px var(--oracle-emerald);
      }
      
      .pulse-ring {
          width: 50px; height: 50px;
          border: 2px solid var(--oracle-gold);
          border-radius: 50%;
          margin: 5px auto;
          opacity: 0.3;
          animation: ring-pulse 2s infinite ease-out;
      }
      @keyframes ring-pulse { 0% { transform: scale(0.5); opacity: 0.8; } 100% { transform: scale(2); opacity: 0; } }
      
      /* External HUD Tags */
      .oracle-tag {
          position: absolute;
          font-size: 8px;
          color: var(--oracle-emerald);
          letter-spacing: 4px;
          font-weight: 600;
          opacity: 0.4;
      }
      .top-left-tag { top: -50px; left: -20px; border-bottom: 2px solid var(--oracle-gold); }
      .bottom-right-tag { bottom: -50px; right: -20px; border-top: 2px solid var(--oracle-gold); }
      
      /* Interactions */
      .oracle-scene:hover .panel-back { transform: translateZ(-160px); opacity: 1; }
      .oracle-scene:hover .panel-front { transform: translateZ(80px); border-color: var(--oracle-gold); }
      .oracle-btn:active { transform: translateZ(-15px) scale(0.96); }`,
                    js: `const scene = document.getElementById('oracleScene');
      const btn = document.getElementById('oracleBtn');
      const ray = document.getElementById('goldRay');
      const runes = document.getElementById('runesWrap');
      
      document.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const sceneRect = scene.getBoundingClientRect();
          
          // Mouse relative to Button Center for Ray-Tracing
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          ray.style.left = \`\${x}px\`;
          ray.style.top = \`\${y}px\`;
      
          // 3D Tilt Logic
          const centerX = sceneRect.width / 2;
          const centerY = sceneRect.height / 2;
          const rotateX = (centerY - (e.clientY - sceneRect.top)) / 15;
          const rotateY = ((e.clientX - sceneRect.left) - centerX) / 15;
      
          scene.style.transform = \`rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`;
      
          // Parallax Internal Runes
          const rx = (e.clientX - window.innerWidth / 2) * 0.06;
          const ry = (e.clientY - window.innerHeight / 2) * 0.06;
          runes.style.transform = \`translateZ(-60px) translate(\${rx}px, \${ry}px)\`;
      });
      
      scene.addEventListener('mouseleave', () => {
          scene.style.transform = \`rotateX(0deg) rotateY(0deg)\`;
          runes.style.transform = \`translateZ(-60px) translate(0,0)\`;
      });
      
      // Random Rune Shift Logic
      setInterval(() => {
          const runeElems = document.querySelectorAll('.rune');
          const symbols = ["Ω", "Σ", "Ψ", "Δ", "Θ"];
          runeElems.forEach(r => {
              if(Math.random() > 0.85) {
                  r.innerText = symbols[Math.floor(Math.random()*symbols.length)] + '_' + Math.floor(Math.random()*9);
              }
          });
      }, 600);`
                }
            }
        ]
    },
    {
        id: "comp-onhjv8",
        name: "New Component",
        category: "Buttons",
        tags: ["hover", "3d"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777044031019,
        code: {
            html: `<div class="neural-scene">
      <div class="magnetic-wrap" id="magWrap">
          <div class="neural-container" id="neuralContainer">
              <!-- Hardware HUD Frame -->
              <div class="hud-frame">
                  <div class="bracket b-tl"></div>
                  <div class="bracket b-tr"></div>
                  <div class="bracket b-bl"></div>
                  <div class="bracket b-br"></div>
              </div>
  
              <button class="neural-btn" id="neuralBtn">
                  <!-- Layer 1: The Neural Canvas (Particles + Lines) -->
                  <canvas id="neuralCanvas"></canvas>
                  
                  <!-- Layer 2: Liquid Refraction Overlay -->
                  <div class="liquid-overlay"></div>
  
                  <!-- Layer 3: HUD Content -->
                  <div class="btn-content">
                      <div class="top-data">
                          <span class="id-tag">ID: 88-ALPHA</span>
                          <div class="pulse-indicator"></div>
                      </div>
                      
                      <span class="main-text">NEURAL LINK</span>
                      
                      <div class="bottom-stats">
                          <span class="stat-item">LATENCY: <span id="latVal">4ms</span></span>
                          <div class="progress-track"><div class="progress-bar"></div></div>
                      </div>
                  </div>
  
                  <!-- Top Glass Glare -->
                  <div class="glass-glare"></div>
              </button>
          </div>
      </div>
  </div>`,
            css: `:root {
      --indigo: #6366f1;
      --cyan: #22d3ee;
      --void: #020617;
      --glass: rgba(255, 255, 255, 0.03);
  }
  
  body {
      background-color: #000;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      font-family: 'Space Grotesk', sans-serif;
      perspective: 2000px;
      overflow: hidden;
  }
  
  .magnetic-wrap {
      padding: 120px;
      transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  }
  
  .neural-container {
      position: relative;
      transform-style: preserve-3d;
      transition: transform 0.1s ease-out;
  }
  
  /* HUD Hardware Brackets */
  .bracket {
      position: absolute;
      width: 25px; height: 25px;
      border: 2px solid var(--indigo);
      opacity: 0.3;
      transition: all 0.4s ease;
      z-index: 5;
  }
  .b-tl { top: -15px; left: -15px; border-right: 0; border-bottom: 0; }
  .b-tr { top: -15px; right: -15px; border-left: 0; border-bottom: 0; }
  .b-bl { bottom: -15px; left: -15px; border-right: 0; border-top: 0; }
  .b-br { bottom: -15px; right: -15px; border-left: 0; border-top: 0; }
  
  .neural-btn {
      position: relative;
      width: 320px;
      height: 110px;
      background: var(--void);
      border: 1px solid rgba(99, 102, 241, 0.2);
      border-radius: 12px;
      cursor: pointer;
      overflow: hidden;
      transform-style: preserve-3d;
      box-shadow: 0 40px 80px rgba(0, 0, 0, 0.8);
  }
  
  /* Canvas background */
  #neuralCanvas {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      opacity: 0.6;
  }
  
  /* Liquid Refraction Overlay */
  .liquid-overlay {
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at var(--mx) var(--my), rgba(34, 211, 238, 0.15) 0%, transparent 60%);
      z-index: 2;
      pointer-events: none;
  }
  
  .btn-content {
      position: relative;
      height: 100%;
      padding: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      z-index: 10;
      transform: translateZ(60px);
      pointer-events: none;
  }
  
  .main-text {
      font-size: 24px;
      font-weight: 900;
      color: #fff;
      letter-spacing: 10px;
      text-shadow: 0 0 15px var(--indigo);
  }
  
  .top-data, .bottom-stats {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 9px;
      color: var(--cyan);
      letter-spacing: 2px;
  }
  
  .pulse-indicator {
      width: 6px; height: 6px;
      background: var(--cyan);
      border-radius: 50%;
      box-shadow: 0 0 10px var(--cyan);
      animation: pulse-bio 1.5s infinite;
  }
  
  @keyframes pulse-bio { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 1; transform: scale(1.5); } }
  
  .progress-track { width: 80px; height: 2px; background: rgba(255,255,255,0.1); }
  .progress-bar { width: 40%; height: 100%; background: var(--indigo); animation: load 3s infinite; }
  
  @keyframes load { 0% { width: 0%; } 100% { width: 100%; } }
  
  /* Interactions */
  .neural-container:hover .bracket {
      width: 50px; height: 50px; opacity: 1; border-color: var(--cyan);
  }
  .neural-container:hover .neural-btn {
      border-color: var(--cyan);
      box-shadow: 0 0 40px rgba(34, 211, 238, 0.2);
  }
  
  .neural-btn:active { transform: translateZ(-20px) scale(0.96); }`,
            js: `const magWrap = document.getElementById('magWrap');
  const container = document.getElementById('neuralContainer');
  const btn = document.getElementById('neuralBtn');
  const canvas = document.getElementById('neuralCanvas');
  const ctx = canvas.getContext('2d');
  
  // 1. Particle System (Neural Logic)
  let particles = [];
  function initCanvas() {
      canvas.width = btn.offsetWidth;
      canvas.height = btn.offsetHeight;
  }
  initCanvas();
  
  class Particle {
      constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.vx = (Math.random() - 0.5) * 0.5;
          this.vy = (Math.random() - 0.5) * 0.5;
      }
      update(mx, my) {
          this.x += this.vx; this.y += this.vy;
          if(this.x < 0 || this.x > canvas.width) this.vx *= -1;
          if(this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
  }
  
  for(let i=0; i<40; i++) particles.push(new Particle());
  
  function animateCanvas(mx, my) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
          p.update();
          ctx.fillStyle = '#22d3ee';
          ctx.beginPath(); ctx.arc(p.x, p.y, 1.5, 0, Math.PI*2); ctx.fill();
          
          // Draw lines between particles
          for(let j=i+1; j<particles.length; j++) {
              const dx = p.x - particles[j].x;
              const dy = p.y - particles[j].y;
              const dist = Math.sqrt(dx*dx + dy*dy);
              if(dist < 50) {
                  ctx.strokeStyle = \`rgba(99, 102, 241, \${1 - dist/50})\`;
                  ctx.lineWidth = 0.5;
                  ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke();
              }
          }
      });
      requestAnimationFrame(() => animateCanvas(mx, my));
  }
  animateCanvas(0,0);
  
  // 2. Multi-Logic Movement (Magnetic + 3D Tilt + Light Track)
  document.addEventListener('mousemove', (e) => {
      const rect = magWrap.getBoundingClientRect();
      const bx = btn.getBoundingClientRect();
      
      // Relative mouse position
      const x = e.clientX - (rect.left + rect.width/2);
      const y = e.clientY - (rect.top + rect.height/2);
      
      // Magnetic Pull for wrapper
      magWrap.style.transform = \`translate(\${x * 0.2}px, \${y * 0.2}px)\`;
      
      // 3D Tilt for container
      const rotX = -y * 0.05;
      const rotY = x * 0.05;
      container.style.transform = \`rotateX(\${rotX}deg) rotateY(\${rotY}deg)\`;
  
      // Liquid Light Tracking
      const mx = e.clientX - bx.left;
      const my = e.clientY - bx.top;
      btn.style.setProperty('--mx', \`\${mx}px\`);
      btn.style.setProperty('--my', \`\${my}px\`);
  });
  
  // Reset logic
  magWrap.addEventListener('mouseleave', () => {
      magWrap.style.transform = 'translate(0,0)';
      container.style.transform = 'rotateX(0) rotateY(0)';
  });
  
  // Telemetry update
  setInterval(() => {
      document.getElementById('latVal').innerText = Math.floor(Math.random() * 8 + 2) + 'ms';
  }, 1000);`
        },
        variants: [

        ]
    },
    {
        id: "comp-w55m5a",
        name: "New Component",
        category: "Buttons",
        tags: ["glow", "hover", "3d"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777044031019,
        code: {
            html: `<div class="aeon-scene">
      <div class="aeon-container" id="aeonContainer">
          <!-- The Background Energy (Z-Space) -->
          <div class="energy-void"></div>
          
          <!-- Logic 1: Canvas Spore System -->
          <canvas id="sporeCanvas"></canvas>
  
          <button class="aeon-btn" id="aeonBtn">
              <!-- Logic 2: Mechanical Shards (Split Effect) -->
              <div class="shard shard-left"></div>
              <div class="shard shard-right"></div>
  
              <!-- Logic 3: The Internal Core -->
              <div class="core-content">
                  <div class="core-glow"></div>
                  <span class="btn-text">ACTIVATE AEON</span>
                  <div class="telemetry-box">
                      <span id="volt">0.0V</span>
                      <span id="load">IDLE</span>
                  </div>
              </div>
  
              <!-- Logic 4: Fresnel Glass Surface -->
              <div class="fresnel-glass"></div>
          </button>
      </div>
  </div>`,
            css: `:root {
      --aeon-gold: #ffcc00;
      --aeon-cyan: #00f2ff;
      --aeon-white: #ffffff;
      --panel-dark: #121212;
  }
  
  body {
      background-color: #030303;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      font-family: 'Syne', sans-serif;
      perspective: 2000px;
      overflow: hidden;
  }
  
  .aeon-container {
      position: relative;
      width: 320px;
      height: 110px;
      transform-style: preserve-3d;
  }
  
  /* Mechanical Shards (The Outer Shell) */
  .shard {
      position: absolute;
      top: 0;
      width: 50%;
      height: 100%;
      background: #1a1a1a;
      border: 1px solid rgba(255, 255, 255, 0.1);
      z-index: 10;
      transition: transform 0.6s cubic-bezier(0.85, 0, 0.15, 1);
      pointer-events: none;
  }
  .shard-left { left: 0; border-right: none; border-radius: 12px 0 0 12px; }
  .shard-right { right: 0; border-left: none; border-radius: 0 12px 12px 0; }
  
  .aeon-btn {
      position: relative;
      width: 100%;
      height: 100%;
      background: #000;
      border: none;
      cursor: pointer;
      overflow: hidden;
      transform-style: preserve-3d;
      outline: none;
      border-radius: 12px;
  }
  
  /* Internal Glowing Core */
  .core-content {
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 5;
      transform: translateZ(20px);
  }
  
  .core-glow {
      position: absolute;
      width: 150px;
      height: 60px;
      background: radial-gradient(circle, var(--aeon-gold) 0%, transparent 70%);
      opacity: 0.2;
      transition: opacity 0.4s;
  }
  
  .btn-text {
      font-size: 20px;
      font-weight: 800;
      color: #fff;
      letter-spacing: 5px;
      text-shadow: 0 0 15px var(--aeon-gold);
  }
  
  .telemetry-box {
      display: flex;
      gap: 20px;
      font-family: monospace;
      font-size: 8px;
      color: var(--aeon-cyan);
      margin-top: 10px;
      opacity: 0.6;
  }
  
  /* Canvas & Void */
  #sporeCanvas {
      position: absolute;
      inset: 0;
      z-index: 2;
      pointer-events: none;
  }
  
  .fresnel-glass {
      position: absolute;
      inset: 0;
      background: linear-gradient(var(--angle, 135deg), rgba(255,255,255,0.1), transparent);
      z-index: 15;
      pointer-events: none;
  }
  
  /* HOVER ANIMATION: The Transformation */
  .aeon-container:hover .shard-left { transform: translateX(-90%) rotateY(-20deg); opacity: 0.5; }
  .aeon-container:hover .shard-right { transform: translateX(90%) rotateY(20deg); opacity: 0.5; }
  .aeon-container:hover .core-glow { opacity: 0.8; animation: pulse-core 1s infinite alternate; }
  
  @keyframes pulse-core {
      from { transform: scale(1); filter: blur(5px); }
      to { transform: scale(1.3); filter: blur(15px); }
  }`,
            js: `const container = document.getElementById('aeonContainer');
  const canvas = document.getElementById('sporeCanvas');
  const ctx = canvas.getContext('2d');
  const volt = document.getElementById('volt');
  const load = document.getElementById('load');
  
  // --- Logic 1: Particle Spores (Gravity Based) ---
  canvas.width = 320; canvas.height = 110;
  let particles = [];
  let tiltX = 0, tiltY = 0;
  
  class Spore {
      constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * 2;
          this.color = Math.random() > 0.5 ? '#ffcc00' : '#00f2ff';
      }
      draw() {
          ctx.fillStyle = this.color;
          ctx.shadowBlur = 5; ctx.shadowColor = this.color;
          ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI*2); ctx.fill();
      }
      update() {
          // Spores move based on button tilt (Gravity simulation)
          this.x += tiltY * 0.5;
          this.y += tiltX * 0.5;
          if(this.x < 0) this.x = canvas.width;
          if(this.x > canvas.width) this.x = 0;
          if(this.y < 0) this.y = canvas.height;
          if(this.y > canvas.height) this.y = 0;
      }
  }
  
  for(let i=0; i<30; i++) particles.push(new Spore());
  
  function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      requestAnimationFrame(animate);
  }
  animate();
  
  // --- Logic 2: Velocity Glitch & 3D Tilt ---
  let lastMouseX = 0, lastMouseY = 0;
  
  document.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
  
      // 1. Standard 3D Tilt
      tiltX = -y / 10;
      tiltY = x / 10;
      container.style.transform = \`rotateX(\${tiltX}deg) rotateY(\${tiltY}deg)\`;
  
      // 2. Velocity Glitch (Mouse speed detection)
      const deltaX = Math.abs(e.clientX - lastMouseX);
      const deltaY = Math.abs(e.clientY - lastMouseY);
      const speed = deltaX + deltaY;
  
      if (speed > 100) { // Fast movement glitch
          container.style.filter = \`hue-rotate(\${speed}deg) skew(\${speed/10}deg)\`;
          load.innerText = "OVERLOAD";
          load.style.color = "red";
      } else {
          container.style.filter = "none";
          load.innerText = "STABLE";
          load.style.color = "var(--aeon-cyan)";
      }
  
      // 3. Fresnel Reflection Angle
      const angle = Math.atan2(y, x) * (180 / Math.PI);
      document.querySelector('.fresnel-glass').style.setProperty('--angle', \`\${angle}deg\`);
  
      // Telemetry update
      volt.innerText = (Math.random() * 12 + 100).toFixed(1) + "V";
  
      lastMouseX = e.clientX; lastMouseY = e.clientY;
  });
  
  // Reset on Leave
  container.addEventListener('mouseleave', () => {
      container.style.transform = \`rotateX(0deg) rotateY(0deg)\`;
      tiltX = 0; tiltY = 0;
  });`
        },
        variants: [
            {
                id: "v1",
                name: "Variant 1",
                code: {
                    html: `<div class="aeon-scene">
          <div class="void-container" id="voidContainer">
              <!-- The Background Deep Space -->
              <div class="void-energy"></div>
              
              <!-- Logic 1: Dark Matter Particle System -->
              <canvas id="voidCanvas"></canvas>
      
              <button class="void-btn" id="voidBtn">
                  <!-- Logic 2: Rotating Mechanical Shards -->
                  <div class="v-shard shard-l"></div>
                  <div class="v-shard shard-r"></div>
      
                  <!-- Logic 3: The Void Core -->
                  <div class="void-content">
                      <div class="void-pulse"></div>
                      <span class="btn-text">VOID BREACH</span>
                      <div class="telemetry-box">
                          <span id="depth">0.00 LY</span>
                          <span id="status" class="status-ok">STABLE</span>
                      </div>
                  </div>
      
                  <!-- Logic 4: Polarized Reflection -->
                  <div class="polarized-glass"></div>
              </button>
          </div>
      </div>`,
                    css: `:root {
          --void-violet: #8b5cf6;
          --void-cyan: #06b6d4;
          --void-deep: #1e1b4b;
          --void-black: #020617;
      }
      
      body {
          background-color: #010103;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-family: 'Space Grotesk', sans-serif;
          perspective: 2000px;
          overflow: hidden;
      }
      
      .void-container {
          position: relative;
          width: 320px;
          height: 110px;
          transform-style: preserve-3d;
      }
      
      /* Mechanical Shards: Rotating Iris Reveal */
      .v-shard {
          position: absolute;
          top: 0;
          width: 50%;
          height: 100%;
          background: #0f172a;
          border: 1px solid rgba(139, 92, 246, 0.3);
          z-index: 10;
          transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
          box-shadow: inset 0 0 20px rgba(0,0,0,1);
      }
      .shard-l { left: 0; border-radius: 12px 0 0 12px; transform-origin: left center; }
      .shard-r { right: 0; border-radius: 0 12px 12px 0; transform-origin: right center; }
      
      .void-btn {
          position: relative;
          width: 100%;
          height: 100%;
          background: var(--void-black);
          border: none;
          cursor: pointer;
          overflow: hidden;
          transform-style: preserve-3d;
          outline: none;
          border-radius: 12px;
      }
      
      /* Internal Void Core */
      .void-content {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 5;
          transform: translateZ(30px);
      }
      
      .void-pulse {
          position: absolute;
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, var(--void-violet) 0%, transparent 70%);
          opacity: 0.3;
          transition: opacity 0.4s;
      }
      
      .btn-text {
          font-size: 20px;
          font-weight: 900;
          color: #fff;
          letter-spacing: 6px;
          text-shadow: 0 0 20px var(--void-violet);
      }
      
      .telemetry-box {
          display: flex;
          gap: 15px;
          font-family: monospace;
          font-size: 9px;
          color: var(--void-cyan);
          margin-top: 10px;
      }
      
      /* Canvas & Reflection */
      #voidCanvas {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
      }
      
      .polarized-glass {
          position: absolute;
          inset: 0;
          background: linear-gradient(var(--ray-angle, 45deg), rgba(255,255,255,0.05), transparent);
          z-index: 15;
          pointer-events: none;
      }
      
      /* HOVER: Mechanical Rotation Reveal */
      .void-container:hover .shard-l { transform: scaleX(0.2) rotateY(-80deg); opacity: 0.3; }
      .void-container:hover .shard-r { transform: scaleX(0.2) rotateY(80deg); opacity: 0.3; }
      .void-container:hover .void-pulse { opacity: 0.9; animation: void-breathing 1.5s infinite ease-in-out; }
      
      @keyframes void-breathing {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.5); filter: brightness(1.8) blur(5px); }
      }
      
      /* Click Sensation */
      .void-btn:active { transform: scale(0.95) translateZ(-10px); }`,
                    js: `const container = document.getElementById('voidContainer');
      const canvas = document.getElementById('voidCanvas');
      const ctx = canvas.getContext('2d');
      const depth = document.getElementById('depth');
      const status = document.getElementById('status');
      
      // --- Logic 1: Dark Matter Particles (Attraction Logic) ---
      canvas.width = 320; canvas.height = 110;
      let particles = [];
      let mx = 160, my = 55;
      
      class DarkMatter {
          constructor() {
              this.reset();
          }
          reset() {
              this.x = Math.random() * canvas.width;
              this.y = Math.random() * canvas.height;
              this.size = Math.random() * 1.5;
              this.speed = Math.random() * 0.5 + 0.1;
          }
          draw() {
              ctx.fillStyle = "#8b5cf6";
              ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI*2); ctx.fill();
          }
          update(mouseX, mouseY) {
              // Particles slowly gravitate toward mouse inside button
              const dx = mouseX - this.x;
              const dy = mouseY - this.y;
              this.x += dx * 0.02;
              this.y += dy * 0.02;
              
              if (Math.abs(dx) < 5 && Math.abs(dy) < 5) this.reset();
          }
      }
      
      for(let i=0; i<40; i++) particles.push(new DarkMatter());
      
      function animate() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          particles.forEach(p => { p.update(mx, my); p.draw(); });
          requestAnimationFrame(animate);
      }
      animate();
      
      // --- Logic 2: Negative Glitch & Advanced Telemetry ---
      let lastX = 0, lastY = 0;
      
      document.addEventListener('mousemove', (e) => {
          const rect = container.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          mx = x; my = y;
      
          // 1. Perspective Tilt
          const tiltX = -(y - rect.height/2) / 8;
          const tiltY = (x - rect.width/2) / 8;
          container.style.transform = \`rotateX(\${tiltX}deg) rotateY(\${tiltY}deg)\`;
      
          // 2. Velocity "Void Breach" Glitch (Negative Inversion)
          const speed = Math.abs(e.clientX - lastX) + Math.abs(e.clientY - lastY);
          if (speed > 120) {
              container.style.filter = "invert(1) contrast(2)";
              status.innerText = "BREACH";
              status.style.color = "#ff0000";
          } else {
              container.style.filter = "none";
              status.innerText = "STABLE";
              status.style.color = "var(--void-cyan)";
          }
      
          // 3. Ray Reflection Angle
          const angle = Math.atan2(y - rect.height/2, x - rect.width/2) * (180 / Math.PI);
          document.querySelector('.polarized-glass').style.setProperty('--ray-angle', \`\${angle}deg\`);
      
          // Dynamic Telemetry (Light Years)
          depth.innerText = (Math.random() * 1000).toFixed(2) + " LY";
      
          lastX = e.clientX; lastY = e.clientY;
      });
      
      container.addEventListener('mouseleave', () => {
          container.style.transform = \`rotateX(0deg) rotateY(0deg)\`;
          mx = 160; my = 55;
      });`
                }
            },
            {
                id: "v2",
                name: "Variant 2",
                code: {
                    html: `<div class="aeon-scene">
          <div class="cryo-container" id="cryoContainer">
              <!-- The Background Arctic Void -->
              <div class="cryo-bg"></div>
              
              <!-- Logic 1: Floating Ice Crystal System -->
              <canvas id="iceCanvas"></canvas>
      
              <button class="cryo-btn" id="cryoBtn">
                  <!-- Logic 2: Vertical Sliding Vault Shards -->
                  <div class="c-shard shard-top"></div>
                  <div class="c-shard shard-bottom"></div>
      
                  <!-- Logic 3: The Frozen Core -->
                  <div class="cryo-content">
                      <div class="ice-shimmer"></div>
                      <span class="btn-text">CRYO_INIT</span>
                      <div class="telemetry-box">
                          <span id="temp">-273.1°C</span>
                          <span id="load-status">OPTIMAL</span>
                      </div>
                  </div>
      
                  <!-- Logic 4: Frosted Glass Refraction -->
                  <div class="frosted-glass"></div>
              </button>
          </div>
      </div>`,
                    css: `:root {
          --arctic-blue: #00d2ff;
          --frost-white: #e0f7fa;
          --deep-abyss: #011627;
          --ice-glow: rgba(0, 210, 255, 0.4);
      }
      
      body {
          background-color: #02040a;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-family: 'Inter', sans-serif;
          perspective: 2000px;
      }
      
      .cryo-container {
          position: relative;
          width: 320px;
          height: 110px;
          transform-style: preserve-3d;
      }
      
      /* Mechanical Shards: Vertical Vault Reveal */
      .c-shard {
          position: absolute;
          left: 0;
          width: 100%;
          height: 50%;
          background: #0f1c2e;
          border: 1px solid rgba(0, 210, 255, 0.2);
          z-index: 10;
          transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
          pointer-events: none;
          box-shadow: inset 0 0 15px rgba(0,0,0,0.8);
      }
      .shard-top { top: 0; border-radius: 12px 12px 0 0; border-bottom: none; }
      .shard-bottom { bottom: 0; border-radius: 0 0 12px 12px; border-top: none; }
      
      .cryo-btn {
          position: relative;
          width: 100%;
          height: 100%;
          background: var(--deep-abyss);
          border: none;
          cursor: pointer;
          overflow: hidden;
          transform-style: preserve-3d;
          outline: none;
          border-radius: 12px;
      }
      
      /* Internal Frozen Core */
      .cryo-content {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 5;
          transform: translateZ(25px);
      }
      
      .ice-shimmer {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, var(--ice-glow) 0%, transparent 80%);
          opacity: 0.2;
          transition: opacity 0.4s;
      }
      
      .btn-text {
          font-size: 22px;
          font-weight: 900;
          color: var(--frost-white);
          letter-spacing: 4px;
          text-shadow: 0 0 15px var(--arctic-blue);
      }
      
      .telemetry-box {
          display: flex;
          gap: 20px;
          font-family: monospace;
          font-size: 9px;
          color: var(--arctic-blue);
          margin-top: 10px;
          opacity: 0.8;
      }
      
      /* Canvas & Glass */
      #iceCanvas {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
      }
      
      .frosted-glass {
          position: absolute;
          inset: 0;
          background: linear-gradient(var(--frost-angle, 135deg), rgba(255,255,255,0.1), transparent);
          backdrop-filter: blur(2px);
          z-index: 15;
          pointer-events: none;
      }
      
      /* HOVER: Vertical Vault Reveal */
      .cryo-container:hover .shard-top { transform: translateY(-85%) rotateX(20deg); opacity: 0.4; }
      .cryo-container:hover .shard-bottom { transform: translateY(85%) rotateX(-20deg); opacity: 0.4; }
      .cryo-container:hover .ice-shimmer { opacity: 0.8; animation: ice-pulse 2s infinite alternate; }
      
      @keyframes ice-pulse {
          from { filter: blur(5px); opacity: 0.4; }
          to { filter: blur(15px); opacity: 0.9; }
      }
      
      /* Click State */
      .cryo-btn:active { transform: scale(0.96) translateZ(-10px); }`,
                    js: `const container = document.getElementById('cryoContainer');
      const canvas = document.getElementById('iceCanvas');
      const ctx = canvas.getContext('2d');
      const loadStatus = document.getElementById('load-status');
      const tempDisp = document.getElementById('temp');
      
      // --- Logic 1: Ice Crystals (Snowflake Sway Logic) ---
      canvas.width = 320; canvas.height = 110;
      let crystals = [];
      
      class Crystal {
          constructor() {
              this.reset();
          }
          reset() {
              this.x = Math.random() * canvas.width;
              this.y = Math.random() * canvas.height;
              this.size = Math.random() * 2 + 1;
              this.speed = Math.random() * 0.5 + 0.2;
              this.sway = Math.random() * 2;
              this.angle = Math.random() * Math.PI * 2;
          }
          draw() {
              ctx.fillStyle = "rgba(224, 247, 250, 0.6)";
              ctx.beginPath();
              ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
              ctx.fill();
          }
          update() {
              this.angle += 0.02;
              this.y += this.speed;
              this.x += Math.sin(this.angle) * 0.5; // Swaying motion
      
              if (this.y > canvas.height) this.reset();
          }
      }
      
      for (let i = 0; i < 25; i++) crystals.push(new Crystal());
      
      function animate() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          crystals.forEach(c => { c.update(); c.draw(); });
          requestAnimationFrame(animate);
      }
      animate();
      
      // --- Logic 2: Frost Fracture Glitch & Tilt ---
      let lastX = 0, lastY = 0;
      
      document.addEventListener('mousemove', (e) => {
          const rect = container.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
      
          // 1. Perspective 3D Tilt
          const tiltX = -(y - rect.height / 2) / 10;
          const tiltY = (x - rect.width / 2) / 10;
          container.style.transform = \`rotateX(\${tiltX}deg) rotateY(\${tiltY}deg)\`;
      
          // 2. Velocity "Frost Fracture" Logic
          const delta = Math.abs(e.clientX - lastX) + Math.abs(e.clientY - lastY);
          if (delta > 100) {
              container.style.filter = "contrast(1.5) brightness(1.5) blur(1px)";
              loadStatus.innerText = "CRACKING";
              loadStatus.style.color = "#ffffff";
          } else {
              container.style.filter = "none";
              loadStatus.innerText = "OPTIMAL";
              loadStatus.style.color = "var(--arctic-blue)";
          }
      
          // 3. Frost Refraction Angle
          const angle = Math.atan2(y - rect.height / 2, x - rect.width / 2) * (180 / Math.PI);
          document.querySelector('.frosted-glass').style.setProperty('--frost-angle', \`\${angle}deg\`);
      
          // Dynamic Temp Fluctuations
          const currentTemp = (-273.1 + Math.random() * 0.5).toFixed(1);
          tempDisp.innerText = currentTemp + "°C";
      
          lastX = e.clientX; lastY = e.clientY;
      });
      
      container.addEventListener('mouseleave', () => {
          container.style.transform = \`rotateX(0deg) rotateY(0deg)\`;
      });`
                }
            }
        ]
    },
    {
        id: "comp-i7696b",
        name: "New Component",
        category: "Buttons",
        tags: ["glow", "hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777044031019,
        code: {
            html: `<div class="magnetic-wrap" id="magneticArea">
      <div class="btn-container" id="btnContainer">
          <!-- Underglow behind the glass -->
          <div class="btn-glow"></div>
          
          <button class="solar-btn">
              <!-- Liquid layer inside -->
              <div class="liquid"></div>
              <span class="btn-text">Initialize Core</span>
          </button>
      </div>
  </div>`,
            css: `:root {
      --glow-color: #ff8c00;
      --secondary-glow: #ff4500;
      --bg-dark: #0a0a0a;
      --glass-bg: rgba(255, 255, 255, 0.05);
      --border-color: rgba(255, 140, 0, 0.3);
  }
  
  body {
      background-color: var(--bg-dark);
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      font-family: 'Segoe UI', sans-serif;
  }
  
  .magnetic-wrap {
      padding: 100px;
  }
  
  .btn-container {
      position: relative;
      transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  }
  
  .solar-btn {
      position: relative;
      padding: 20px 50px;
      font-size: 18px;
      font-weight: 700;
      color: #fff;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      background: var(--glass-bg);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      cursor: pointer;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      outline: none;
      z-index: 1;
      overflow: hidden;
      transition: all 0.4s ease;
  }
  
  /* The Liquid Fill Effect */
  .liquid {
      position: absolute;
      top: 100%; /* Hidden at bottom */
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, var(--glow-color), var(--secondary-glow));
      transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
      z-index: -1;
  }
  
  /* Background Aura */
  .btn-glow {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 130%;
      height: 130%;
      background: radial-gradient(circle, var(--glow-color) 0%, transparent 70%);
      transform: translate(-50%, -50%) scale(0.6);
      opacity: 0;
      filter: blur(30px);
      z-index: -2;
      transition: all 0.6s ease;
  }
  
  /* Hover Actions */
  .btn-container:hover .solar-btn {
      border-color: var(--glow-color);
      box-shadow: 0 0 20px rgba(255, 140, 0, 0.2);
      color: #000; /* Text turns dark when liquid fills */
  }
  
  .btn-container:hover .liquid {
      top: 0; /* Liquid rises up */
  }
  
  .btn-container:hover .btn-glow {
      opacity: 0.5;
      transform: translate(-50%, -50%) scale(1.1);
  }
  
  .btn-text {
      position: relative;
      z-index: 2;
  }
  
  /* Click Feel */
  .solar-btn:active {
      transform: scale(0.92);
  }`,
            js: `const wrap = document.getElementById('magneticArea');
  const btn = document.getElementById('btnContainer');
  
  // Magnetic Effect Logic
  wrap.addEventListener('mousemove', (e) => {
      const rect = wrap.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
  
      // Smooth magnetic pull (30% intensity)
      btn.style.transform = \`translate(\${x * 0.3}px, \${y * 0.3}px)\`;
  });
  
  wrap.addEventListener('mouseleave', () => {
      // Return to center
      btn.style.transform = \`translate(0px, 0px)\`;
  });
  
  // Adding a subtle tilt effect to the internal button surface
  btn.addEventListener('mousemove', (e) => {
      const bRect = btn.getBoundingClientRect();
      const bX = e.clientX - bRect.left - bRect.width / 2;
      const bY = e.clientY - bRect.top - bRect.height / 2;
      
      // Tilt the button slightly based on mouse position within the button
      const buttonElement = btn.querySelector('.solar-btn');
      buttonElement.style.transform = \`rotateX(\${-bY * 0.1}deg) rotateY(\${bX * 0.1}deg)\`;
  });
  
  btn.addEventListener('mouseleave', () => {
      const buttonElement = btn.querySelector('.solar-btn');
      buttonElement.style.transform = \`rotateX(0deg) rotateY(0deg)\`;
  });`
        },
        variants: [
            {
                id: "v1",
                name: "Variant 1",
                code: {
                    html: `<div class="magnetic-wrap" id="magneticArea">
          <div class="btn-container" id="btnContainer">
              <!-- Pulse Aura -->
              <div class="btn-glow"></div>
              
              <button class="cyber-btn">
                  <!-- Animated Grid Background -->
                  <div class="grid-layer"></div>
                  <!-- Scanning Line -->
                  <div class="scan-line"></div>
                  <span class="btn-text" data-text="ACCESS GRANTED">ACCESS GRANTED</span>
              </button>
          </div>
      </div>`,
                    css: `:root {
          --primary-neon: #ff00ff; /* Cyber Pink */
          --secondary-neon: #00ffff; /* Cyber Cyan */
          --bg-dark: #050505;
          --glass-bg: rgba(255, 0, 255, 0.03);
      }
      
      body {
          background-color: var(--bg-dark);
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-family: 'Orbitron', sans-serif; /* Use a tech font if possible */
      }
      
      .magnetic-wrap {
          padding: 100px;
      }
      
      .btn-container {
          position: relative;
          transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
      }
      
      .cyber-btn {
          position: relative;
          padding: 20px 50px;
          font-size: 18px;
          font-weight: 800;
          color: var(--secondary-neon);
          letter-spacing: 3px;
          background: var(--glass-bg);
          border: 2px solid var(--secondary-neon);
          border-radius: 12px;
          cursor: pointer;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          outline: none;
          z-index: 1;
          overflow: hidden;
          transition: all 0.3s ease;
          text-shadow: 0 0 10px var(--secondary-neon);
      }
      
      /* Background Grid Effect */
      .grid-layer {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background-image: 
              linear-gradient(var(--secondary-neon) 1px, transparent 1px),
              linear-gradient(90deg, var(--secondary-neon) 1px, transparent 1px);
          background-size: 15px 15px;
          opacity: 0.1;
          z-index: -1;
      }
      
      /* Scanning Line Animation */
      .scan-line {
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
              to bottom,
              transparent,
              var(--primary-neon),
              transparent
          );
          opacity: 0;
          z-index: 0;
      }
      
      /* Neon Underglow */
      .btn-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 140%;
          height: 140%;
          background: radial-gradient(circle, var(--primary-neon) 0%, transparent 70%);
          transform: translate(-50%, -50%) scale(0.7);
          opacity: 0.2;
          filter: blur(40px);
          z-index: -2;
          animation: pulse 2s infinite;
      }
      
      @keyframes pulse {
          0% { opacity: 0.2; transform: translate(-50%, -50%) scale(0.7); }
          50% { opacity: 0.4; transform: translate(-50%, -50%) scale(0.9); }
          100% { opacity: 0.2; transform: translate(-50%, -50%) scale(0.7); }
      }
      
      /* Hover States */
      .btn-container:hover .cyber-btn {
          border-color: var(--primary-neon);
          color: var(--primary-neon);
          text-shadow: 0 0 15px var(--primary-neon);
          box-shadow: inset 0 0 20px rgba(255, 0, 255, 0.2);
      }
      
      .btn-container:hover .scan-line {
          opacity: 0.5;
          animation: scan 1.5s linear infinite;
      }
      
      @keyframes scan {
          0% { top: -100%; }
          100% { top: 100%; }
      }
      
      /* Glitch Effect on Text */
      .btn-container:active .btn-text {
          animation: glitch 0.2s infinite;
      }
      
      @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-3px, 3px); }
          40% { transform: translate(-3px, -3px); }
          60% { transform: translate(3px, 3px); }
          80% { transform: translate(3px, -3px); }
          100% { transform: translate(0); }
      }`,
                    js: `const wrap = document.getElementById('magneticArea');
      const container = document.getElementById('btnContainer');
      
      // Magnetic Logic
      wrap.addEventListener('mousemove', (e) => {
          const rect = wrap.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) * 0.4;
          const y = (e.clientY - rect.top - rect.height / 2) * 0.4;
      
          container.style.transform = \`translate(\${x}px, \${y}px)\`;
      });
      
      wrap.addEventListener('mouseleave', () => {
          container.style.transform = \`translate(0px, 0px)\`;
      });
      
      // Sound Click Effect (Optional - Browser blocks auto-sound)
      container.addEventListener('mousedown', () => {
          // Add a quick flicker effect on click
          const btn = container.querySelector('.cyber-btn');
          btn.style.borderColor = '#fff';
          btn.style.boxShadow = '0 0 50px #fff';
          
          setTimeout(() => {
              btn.style.borderColor = 'var(--primary-neon)';
              btn.style.boxShadow = 'inset 0 0 20px rgba(255, 0, 255, 0.2)';
          }, 100);
      });`
                }
            },
            {
                id: "v2",
                name: "Variant 2",
                code: {
                    html: `<div class="magnetic-wrap" id="magneticArea">
          <div class="btn-container" id="btnContainer">
              <!-- Deep Ambient Glow -->
              <div class="btn-glow"></div>
              
              <button class="void-btn">
                  <!-- Canvas for interactive particles -->
                  <canvas id="particleCanvas"></canvas>
                  <span class="btn-text">Enter the Void</span>
              </button>
          </div>
      </div>`,
                    css: `:root {
          --void-cyan: #06b6d4;
          --void-deep: #0891b2;
          --bg-dark: #020617;
          --glass-bg: rgba(6, 182, 212, 0.05);
      }
      
      body {
          background-color: var(--bg-dark);
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-family: 'Inter', sans-serif;
      }
      
      .magnetic-wrap {
          padding: 100px;
      }
      
      .btn-container {
          position: relative;
          transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
      }
      
      .void-btn {
          position: relative;
          padding: 20px 50px;
          font-size: 18px;
          font-weight: 600;
          color: #fff;
          letter-spacing: 2px;
          text-transform: uppercase;
          background: var(--glass-bg);
          border: 1px solid rgba(6, 182, 212, 0.3);
          border-radius: 12px;
          cursor: pointer;
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          outline: none;
          z-index: 1;
          overflow: hidden;
          transition: all 0.4s ease;
          display: flex;
          justify-content: center;
          align-items: center;
      }
      
      /* Internal Canvas Styling */
      #particleCanvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none; /* Mouse events pass through to button logic */
          z-index: 0;
      }
      
      .btn-text {
          position: relative;
          z-index: 2;
          pointer-events: none;
          transition: letter-spacing 0.3s ease;
      }
      
      /* Background Deep Glow */
      .btn-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 150%;
          height: 150%;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%);
          transform: translate(-50%, -50%) scale(0.8);
          opacity: 0;
          filter: blur(40px);
          z-index: -1;
          transition: all 0.6s ease;
      }
      
      /* Hover States */
      .btn-container:hover .void-btn {
          border-color: var(--void-cyan);
          box-shadow: 0 0 30px rgba(6, 182, 212, 0.15),
                      inset 0 0 15px rgba(6, 182, 212, 0.1);
      }
      
      .btn-container:hover .btn-text {
          letter-spacing: 4px;
          color: var(--void-cyan);
      }
      
      .btn-container:hover .btn-glow {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1.1);
      }
      
      /* Click Scale */
      .void-btn:active {
          transform: scale(0.95);
      }`,
                    js: `const wrap = document.getElementById('magneticArea');
      const container = document.getElementById('btnContainer');
      const canvas = document.getElementById('particleCanvas');
      const ctx = canvas.getContext('2d');
      
      let particles = [];
      const particleCount = 40;
      
      // Resize canvas to match button
      function resize() {
          canvas.width = canvas.offsetWidth;
          canvas.height = canvas.offsetHeight;
      }
      window.addEventListener('resize', resize);
      resize();
      
      // Particle Class
      class Particle {
          constructor() {
              this.reset();
          }
          reset() {
              this.x = Math.random() * canvas.width;
              this.y = Math.random() * canvas.height;
              this.vx = (Math.random() - 0.5) * 0.5;
              this.vy = (Math.random() - 0.5) * 0.5;
              this.size = Math.random() * 1.5;
          }
          update() {
              this.x += this.vx;
              this.y += this.vy;
              if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                  this.reset();
              }
          }
          draw() {
              ctx.fillStyle = 'rgba(6, 182, 212, 0.5)';
              ctx.beginPath();
              ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
              ctx.fill();
          }
      }
      
      for (let i = 0; i < particleCount; i++) particles.push(new Particle());
      
      function animate() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          particles.forEach(p => {
              p.update();
              p.draw();
          });
          requestAnimationFrame(animate);
      }
      animate();
      
      // Magnetic Logic
      wrap.addEventListener('mousemove', (e) => {
          const rect = wrap.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
          const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
          container.style.transform = \`translate(\${x}px, \${y}px)\`;
      });
      
      wrap.addEventListener('mouseleave', () => {
          container.style.transform = \`translate(0px, 0px)\`;
      });`
                }
            },
            {
                id: "v3",
                name: "Variant 3",
                code: {
                    html: `<div class="magnetic-wrap" id="magneticArea">
          <div class="btn-container" id="btnContainer">
              <!-- Floating Aura -->
              <div class="btn-glow"></div>
              
              <button class="prism-btn">
                  <!-- Refraction Layers (RGB) -->
                  <span class="refract red"></span>
                  <span class="refract green"></span>
                  <span class="refract blue"></span>
                  
                  <span class="btn-text">Refract Reality</span>
              </button>
          </div>
      </div>`,
                    css: `:root {
          --bg-dark: #030303;
          --glass-white: rgba(255, 255, 255, 0.05);
          --red-split: rgba(255, 0, 0, 0.5);
          --green-split: rgba(0, 255, 0, 0.5);
          --blue-split: rgba(0, 0, 255, 0.5);
      }
      
      body {
          background-color: var(--bg-dark);
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-family: 'Inter', sans-serif;
      }
      
      .magnetic-wrap {
          padding: 120px;
      }
      
      .btn-container {
          position: relative;
          transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
      }
      
      .prism-btn {
          position: relative;
          padding: 20px 50px;
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 2px;
          text-transform: uppercase;
          background: var(--glass-white);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          cursor: pointer;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          outline: none;
          z-index: 1;
          overflow: hidden;
          transition: all 0.3s ease;
      }
      
      /* RGB Refraction Layers */
      .refract {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          pointer-events: none;
          transition: transform 0.1s ease-out;
          mix-blend-mode: screen; /* Layers blend like light */
          z-index: -1;
      }
      
      .red { background: radial-gradient(circle at center, var(--red-split), transparent 70%); opacity: 0; }
      .green { background: radial-gradient(circle at center, var(--green-split), transparent 70%); opacity: 0; }
      .blue { background: radial-gradient(circle at center, var(--blue-split), transparent 70%); opacity: 0; }
      
      .btn-text {
          position: relative;
          z-index: 2;
          text-shadow: 0 0 10px rgba(255,255,255,0.2);
      }
      
      /* Background Glow */
      .btn-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 140%;
          height: 140%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          transform: translate(-50%, -50%) scale(0.8);
          opacity: 0;
          filter: blur(50px);
          z-index: -2;
          transition: all 0.6s ease;
      }
      
      /* Hover States */
      .btn-container:hover .prism-btn {
          border-color: rgba(255, 255, 255, 0.4);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
      }
      
      .btn-container:hover .refract {
          opacity: 0.6;
      }
      
      .btn-container:hover .btn-glow {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1.1);
      }
      
      /* Click Effect */
      .prism-btn:active {
          transform: scale(0.96);
      }`,
                    js: `const wrap = document.getElementById('magneticArea');
      const container = document.getElementById('btnContainer');
      const layers = document.querySelectorAll('.refract');
      
      // Magnetic Logic
      wrap.addEventListener('mousemove', (e) => {
          const rect = wrap.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
      
          // Magnetic Pull for the whole container
          container.style.transform = \`translate(\${x * 0.3}px, \${y * 0.3}px)\`;
      
          // RGB Refraction Shift Logic
          // Mouse move hone par har layer alag direction mein displace hogi
          layers.forEach((layer, index) => {
              const speed = (index + 1) * 15; // Red moves slow, Blue moves fast
              const shiftX = (x / rect.width) * speed;
              const shiftY = (y / rect.height) * speed;
              
              layer.style.transform = \`translate(\${shiftX}px, \${shiftY}px)\`;
          });
      });
      
      wrap.addEventListener('mouseleave', () => {
          // Reset positions
          container.style.transform = \`translate(0px, 0px)\`;
          layers.forEach(layer => {
              layer.style.transform = \`translate(0px, 0px)\`;
          });
      });`
                }
            }
        ]
    },
    {
        id: "comp-9d51tc",
        name: "New Component",
        category: "Buttons",
        tags: ["glow", "hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777084168416,
        code: {
            html: `<div class="universal-wrapper">
      <button class="quantum-btn">
          <div class="plasma-glow"></div>
          <div class="inner-glass"></div>
          <span class="btn-content">EXPLORE CORE</span>
      </button>
  </div>`,
            css: `.universal-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      perspective: 1200px;
      padding: 20px;
      box-sizing: border-box;
  }
  
  .quantum-btn {
      --primary-color: #00f2ff;
      --secondary-color: #7000ff;
      position: relative;
      width: 100%;
      max-width: 280px; /* Sabse best professional size */
      min-height: 60px;
      padding: 10px 25px; /* Text ko andar dabake rakhega */
      
      background: #0a0a0f;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden; /* Ye ensure karega ki plasma bahar na dikhe */
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  
  .inner-glass {
      position: absolute;
      inset: 2px;
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(8px);
      border-radius: 10px;
      z-index: 2;
      border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .plasma-glow {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 150%; /* Failne ke liye space */
      height: 300%;
      background: conic-gradient(
          from 0deg,
          transparent,
          var(--primary-color),
          var(--secondary-color),
          transparent 50%
      );
      animation: rotate-plasma 3s linear infinite;
      transform: translate(-50%, -50%);
      z-index: 1;
      opacity: 0.6;
  }
  
  .btn-content {
      position: relative;
      z-index: 5;
      color: #ffffff;
      font-size: clamp(0.85rem, 3vw, 1rem); /* Responsive text */
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      white-space: nowrap; /* Text ko ek line mein rakhega */
      pointer-events: none;
      text-shadow: 0 0 8px rgba(0, 242, 255, 0.5);
  }
  
  /* Hover Effects */
  .quantum-btn:hover {
      transform: translateY(-5px) rotateX(10deg);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.6), 
                  0 0 15px var(--primary-color);
  }
  
  .quantum-btn:hover .plasma-glow {
      opacity: 1;
      animation-duration: 1.5s;
  }
  
  .quantum-btn:active {
      transform: translateY(0) scale(0.96);
  }
  
  @keyframes rotate-plasma {
      0% { transform: translate(-50%, -50%) rotate(0deg); }
      100% { transform: translate(-50%, -50%) rotate(360deg); }
  }`,
            js: `const btn = document.querySelector('.quantum-btn');
  const wrapper = document.querySelector('.universal-wrapper');
  
  wrapper.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
  
      // Smooth 3D tilt
      btn.style.transform = \`rotateX(\${-y / 15}deg) rotateY(\${x / 15}deg) translateY(-5px)\`;
  });
  
  wrapper.addEventListener('mouseleave', () => {
      btn.style.transform = \`rotateX(0deg) rotateY(0deg) translateY(0)\`;
      btn.style.transition = "all 0.5s ease";
  });`
        },
        variants: [
            {
                id: "v1",
                name: "Variant 1",
                code: {
                    html: `<div class="universal-wrapper">
          <button class="quantum-btn-gold">
              <div class="plasma-glow"></div>
              <div class="inner-glass"></div>
              <span class="btn-content">ACTIVATE CORE</span>
          </button>
      </div>`,
                    css: `/* Zero-Error Setup */
      .universal-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1200px;
          padding: 30px;
          box-sizing: border-box;
          background: transparent;
      }
      
      .quantum-btn-gold {
          --gold: #ffcc00;
          --orange: #ff4d00;
          position: relative;
          width: 100%;
          max-width: 280px; 
          min-height: 65px;
          padding: 12px 30px;
          
          background: #0f0b00; /* Deep gold-black base */
          border: none;
          border-radius: 14px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 10px 20px rgba(0,0,0,0.4);
      }
      
      /* Moving Plasma Background */
      .plasma-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200%; 
          height: 400%;
          background: conic-gradient(
              from 0deg,
              transparent,
              var(--gold),
              var(--orange),
              transparent 50%
          );
          animation: rotate-plasma 1.8s linear infinite;
          transform: translate(-50%, -50%);
          z-index: 1;
          opacity: 0.8;
      }
      
      /* Glass Layer */
      .inner-glass {
          position: absolute;
          inset: 2px;
          background: rgba(20, 15, 0, 0.85); /* Darker glass for gold contrast */
          backdrop-filter: blur(10px);
          border-radius: 12px;
          z-index: 2;
          border: 1px solid rgba(255, 204, 0, 0.2);
          box-shadow: inset 0 0 15px rgba(255, 204, 0, 0.1);
      }
      
      /* Professional Text Logic */
      .btn-content {
          position: relative;
          z-index: 5;
          color: var(--gold);
          font-size: clamp(0.9rem, 3vw, 1.05rem);
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          white-space: nowrap;
          pointer-events: none;
          text-shadow: 0 0 10px rgba(255, 204, 0, 0.6);
      }
      
      /* Interactions */
      .quantum-btn-gold:hover {
          transform: translateY(-6px) rotateX(12deg);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6), 
                      0 0 25px rgba(255, 204, 0, 0.4);
      }
      
      .quantum-btn-gold:hover .plasma-glow {
          animation-duration: 0.8s; /* Energy Increase */
          opacity: 1;
      }
      
      .quantum-btn-gold:active {
          transform: translateY(-2px) scale(0.97);
      }
      
      @keyframes rotate-plasma {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
      }`,
                    js: `const btn = document.querySelector('.quantum-btn-gold');
      const wrapper = document.querySelector('.universal-wrapper');
      
      wrapper.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
      
          // Direct 3D manipulation
          btn.style.transform = \`rotateX(\${-y / 12}deg) rotateY(\${x / 12}deg) translateY(-6px)\`;
      });
      
      wrapper.addEventListener('mouseleave', () => {
          btn.style.transform = \`rotateX(0deg) rotateY(0deg) translateY(0)\`;
          btn.style.transition = "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      });`
                }
            },
            {
                id: "v2",
                name: "Variant 2",
                code: {
                    html: `<div class="universal-wrapper">
          <button class="quantum-btn-emerald">
              <div class="plasma-glow"></div>
              <div class="inner-glass"></div>
              <span class="btn-content">PHANTOM LINK</span>
          </button>
      </div>`,
                    css: `/* Zero-Error Setup */
      .universal-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1200px;
          padding: 30px;
          box-sizing: border-box;
          background: transparent;
      }
      
      .quantum-btn-emerald {
          --emerald: #00ff88;
          --phantom-blue: #0066ff;
          position: relative;
          width: 100%;
          max-width: 280px; 
          min-height: 65px;
          padding: 12px 30px;
          
          background: #000d08; /* Dark emerald-black base */
          border: none;
          border-radius: 14px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 10px 20px rgba(0,0,0,0.5);
          animation: button-breathe 3s ease-in-out infinite;
      }
      
      /* Moving Plasma Background */
      .plasma-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 220%; 
          height: 450%;
          background: conic-gradient(
              from 0deg,
              transparent,
              var(--emerald),
              var(--phantom-blue),
              transparent 45%
          );
          animation: rotate-plasma 2.2s linear infinite;
          transform: translate(-50%, -50%);
          z-index: 1;
          opacity: 0.7;
      }
      
      /* Glass Layer */
      .inner-glass {
          position: absolute;
          inset: 2px;
          background: rgba(0, 10, 5, 0.9); /* Dark glass for contrast */
          backdrop-filter: blur(12px);
          border-radius: 12px;
          z-index: 2;
          border: 1px solid rgba(0, 255, 136, 0.15);
          box-shadow: inset 0 0 20px rgba(0, 255, 136, 0.05);
      }
      
      /* Professional Text Logic */
      .btn-content {
          position: relative;
          z-index: 5;
          color: var(--emerald);
          font-size: clamp(0.9rem, 3vw, 1.05rem);
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          white-space: nowrap;
          pointer-events: none;
          text-shadow: 0 0 12px rgba(0, 255, 136, 0.6);
          transition: letter-spacing 0.3s ease;
      }
      
      /* Interactions */
      .quantum-btn-emerald:hover {
          transform: translateY(-8px) rotateX(15deg);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.7), 
                      0 0 30px rgba(0, 255, 136, 0.3);
      }
      
      .quantum-btn-emerald:hover .btn-content {
          letter-spacing: 4px;
          color: #fff;
      }
      
      .quantum-btn-emerald:hover .plasma-glow {
          animation-duration: 1s; /* Toxic Energy Flow */
          opacity: 1;
      }
      
      .quantum-btn-emerald:active {
          transform: translateY(-2px) scale(0.95);
      }
      
      @keyframes rotate-plasma {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
      }
      
      @keyframes button-breathe {
          0%, 100% { box-shadow: 0 10px 20px rgba(0,0,0,0.5), 0 0 5px rgba(0, 255, 136, 0.1); }
          50% { box-shadow: 0 10px 20px rgba(0,0,0,0.5), 0 0 15px rgba(0, 255, 136, 0.2); }
      }`,
                    js: `const btn = document.querySelector('.quantum-btn-emerald');
      const wrapper = document.querySelector('.universal-wrapper');
      
      wrapper.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
      
          // Direct 3D manipulation
          btn.style.transform = \`rotateX(\${-y / 10}deg) rotateY(\${x / 10}deg) translateY(-8px)\`;
      });
      
      wrapper.addEventListener('mouseleave', () => {
          btn.style.transform = \`rotateX(0deg) rotateY(0deg) translateY(0)\`;
          btn.style.transition = "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      });`
                }
            },
            {
                id: "v3",
                name: "Variant 3",
                code: {
                    html: `<div class="universal-wrapper">
          <button class="quantum-btn-crimson">
              <div class="plasma-glow"></div>
              <div class="inner-glass"></div>
              <span class="btn-content">IGNITE CORE</span>
          </button>
      </div>`,
                    css: `/* Zero-Error Setup */
      .universal-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1200px;
          padding: 30px;
          box-sizing: border-box;
          background: transparent;
      }
      
      .quantum-btn-crimson {
          --crimson: #ff0044;
          --white-heat: #ffffff;
          --deep-space: #120005;
          position: relative;
          width: 100%;
          max-width: 280px; 
          min-height: 65px;
          padding: 12px 30px;
          
          background: var(--deep-space);
          border: none;
          border-radius: 14px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 10px 30px rgba(0,0,0,0.6);
      }
      
      /* Moving Plasma Background - Triple Color Helix */
      .plasma-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 250%; 
          height: 500%;
          background: conic-gradient(
              from 0deg,
              transparent,
              var(--crimson),
              var(--white-heat),
              var(--crimson),
              transparent 60%
          );
          animation: rotate-plasma 1.2s linear infinite; /* Faster than previous variants */
          transform: translate(-50%, -50%);
          z-index: 1;
          opacity: 0.75;
      }
      
      /* Glass Layer with Red Refraction */
      .inner-glass {
          position: absolute;
          inset: 2px;
          background: rgba(18, 0, 5, 0.92);
          backdrop-filter: blur(15px);
          border-radius: 12px;
          z-index: 2;
          border: 1px solid rgba(255, 0, 68, 0.2);
          box-shadow: inset 0 0 25px rgba(255, 0, 68, 0.1);
      }
      
      /* Professional Text Logic */
      .btn-content {
          position: relative;
          z-index: 5;
          color: #fff;
          font-size: clamp(0.9rem, 3vw, 1.05rem);
          font-weight: 900;
          letter-spacing: 3px;
          text-transform: uppercase;
          white-space: nowrap;
          pointer-events: none;
          text-shadow: 0 0 15px rgba(255, 0, 68, 0.8);
          transition: transform 0.3s ease, text-shadow 0.3s ease;
      }
      
      /* Interactions */
      .quantum-btn-crimson:hover {
          transform: translateY(-10px) rotateX(15deg) scale(1.02);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8), 
                      0 0 40px rgba(255, 0, 68, 0.4);
      }
      
      .quantum-btn-crimson:hover .btn-content {
          transform: scale(1.1);
          text-shadow: 0 0 25px var(--white-heat);
      }
      
      .quantum-btn-crimson:hover .plasma-glow {
          animation-duration: 0.6s; /* Critical Energy Overload */
          opacity: 1;
      }
      
      .quantum-btn-crimson:active {
          transform: translateY(-2px) scale(0.94);
          filter: brightness(1.5);
      }
      
      @keyframes rotate-plasma {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
      }`,
                    js: `const btn = document.querySelector('.quantum-btn-crimson');
      const wrapper = document.querySelector('.universal-wrapper');
      
      wrapper.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
      
          // Smooth & Precise 3D movement
          btn.style.transform = \`rotateX(\${-y / 10}deg) rotateY(\${x / 10}deg) translateY(-10px) scale(1.02)\`;
      });
      
      wrapper.addEventListener('mouseleave', () => {
          btn.style.transform = \`rotateX(0deg) rotateY(0deg) translateY(0) scale(1)\`;
          btn.style.transition = "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      });`
                }
            }
        ]
    },
    {
        id: "comp-ylnnao",
        name: "New Component",
        category: "Buttons",
        tags: ["hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777084168416,
        code: {
            html: `<div class="universal-wrapper">
      <svg style="position: absolute; width: 0; height: 0;">
          <defs>
              <filter id="liquid-goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
              </filter>
          </defs>
      </svg>
      
      <button class="morph-container">
          <div class="liquid-wrapper">
              <div class="drop d1"></div>
              <div class="drop d2"></div>
              <div class="drop d3"></div>
              <div class="drop d4"></div>
          </div>
          <span class="btn-text">MORPH SYSTEM</span>
      </button>
  </div>`,
            css: `.universal-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      box-sizing: border-box;
  }
  
  .morph-container {
      --bg-color: #050505;
      --accent: #00f2ff;
      position: relative;
      width: 100%;
      max-width: 260px;
      height: 65px;
      background: var(--bg-color);
      border: none;
      border-radius: 50px;
      cursor: pointer;
      overflow: hidden; /* Ye liquid ko bahar nahi jane dega */
      display: flex;
      justify-content: center;
      align-items: center;
      transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 10px 25px rgba(0,0,0,0.5);
  }
  
  /* Liquid Layer */
  .liquid-wrapper {
      position: absolute;
      inset: 0;
      filter: url('#liquid-goo'); /* SVG Magic */
      background: var(--bg-color);
      z-index: 1;
  }
  
  .drop {
      position: absolute;
      background: linear-gradient(45deg, #00f2ff, #7000ff);
      border-radius: 50%;
      animation: flow infinite ease-in-out;
  }
  
  /* Alag-alag drops for heavy liquid effect */
  .d1 { width: 45px; height: 45px; top: 10%; left: 10%; animation-duration: 3s; }
  .d2 { width: 60px; height: 60px; top: 20%; left: 40%; animation-duration: 5s; animation-delay: -1s; background: #ff0077; }
  .d3 { width: 40px; height: 40px; top: 40%; left: 70%; animation-duration: 4s; animation-delay: -2s; }
  .d4 { width: 55px; height: 55px; top: 30%; left: 20%; animation-duration: 6s; background: #00ff88; }
  
  .btn-text {
      position: relative;
      z-index: 10; /* Text sabse upar */
      color: white;
      font-weight: 900;
      letter-spacing: 2px;
      text-transform: uppercase;
      font-size: clamp(0.85rem, 3vw, 1rem);
      white-space: nowrap;
      pointer-events: none;
      mix-blend-mode: difference; /* Isse text liquid ke upar contrast banayega */
  }
  
  /* Animations */
  @keyframes flow {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(120px, 10px) scale(1.2); }
      66% { transform: translate(-40px, -20px) scale(0.8); }
  }
  
  .morph-container:hover {
      transform: scale(1.08) translateY(-5px);
  }
  
  .morph-container:hover .drop {
      filter: brightness(1.5);
      animation-duration: 1.5s; /* Hover pe fast move */
  }
  
  .morph-container:active {
      transform: scale(0.96);
  }`,
            js: `const btn = document.querySelector('.morph-container');
  
  // Subtle tilt for realism
  btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      btn.style.transform = \`scale(1.08) translateY(-5px) rotateX(\${-y/10}deg) rotateY(\${x/10}deg)\`;
  });
  
  btn.addEventListener('mouseleave', () => {
      btn.style.transform = \`scale(1) translateY(0) rotateX(0deg) rotateY(0deg)\`;
      btn.style.transition = "all 0.5s ease";
  });`
        },
        variants: [
            {
                id: "v1",
                name: "Variant 1",
                code: {
                    html: `<div class="universal-wrapper">
          <svg style="position: absolute; width: 0; height: 0;">
              <defs>
                  <filter id="toxic-goo">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                  </filter>
              </defs>
          </svg>
          
          <button class="toxic-container">
              <div class="liquid-wrapper">
                  <div class="drop b1"></div>
                  <div class="drop b2"></div>
                  <div class="drop b3"></div>
                  <div class="drop b4"></div>
              </div>
              <span class="btn-text">EMERGENCY CORE</span>
          </button>
      </div>`,
                    css: "",
                    js: ""
                }
            },
            {
                id: "v2",
                name: "Variant 2",
                code: {
                    html: "",
                    css: "",
                    js: ""
                }
            },
            {
                id: "v3",
                name: "Variant 3",
                code: {
                    html: "",
                    css: "",
                    js: ""
                }
            }
        ]
    },
    {
        id: "comp-7fyobv",
        name: "New Component",
        category: "Buttons",
        tags: ["hover", "3d"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<div class="universal-wrapper">
      <button class="hologram-btn" id="holo-trigger">
          <div class="shimmer-layer"></div>
          <div class="parallax-bg"></div>
          <div class="reflection-layer"></div>
          <span class="btn-text">INITIALIZE SYSTEM</span>
      </button>
  </div>`,
            css: `.universal-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      perspective: 1000px;
      background: transparent;
  }
  
  .hologram-btn {
      --primary: #00d4ff;
      --secondary: #9400ff;
      position: relative;
      width: 100%;
      max-width: 280px;
      height: 65px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      cursor: pointer;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      backdrop-filter: blur(15px);
      transition: transform 0.2s ease-out, box-shadow 0.3s ease;
      transform-style: preserve-3d;
  }
  
  /* Layer 1: Moving Shimmer */
  .shimmer-layer {
      position: absolute;
      inset: 0;
      background: linear-gradient(
          -45deg, 
          transparent 40%, 
          rgba(255, 255, 255, 0.3) 50%, 
          transparent 60%
      );
      background-size: 200% 100%;
      animation: shimmer-sweep 4s infinite linear;
      z-index: 1;
  }
  
  /* Layer 2: Parallax Background Grid */
  .parallax-bg {
      position: absolute;
      width: 120%;
      height: 120%;
      background-image: 
          radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0);
      background-size: 20px 20px;
      opacity: 0.2;
      z-index: 0;
      transform: translateZ(-20px); /* 3D Depth */
  }
  
  /* Layer 3: Reactive Reflection */
  .reflection-layer {
      position: absolute;
      inset: 0;
      background: radial-gradient(
          circle at var(--x, 50%) var(--y, 50%), 
          rgba(255, 255, 255, 0.4) 0%, 
          transparent 60%
      );
      z-index: 2;
      mix-blend-mode: overlay;
  }
  
  .btn-text {
      position: relative;
      z-index: 10;
      color: white;
      font-weight: 900;
      letter-spacing: 3px;
      text-transform: uppercase;
      font-size: clamp(0.8rem, 3vw, 0.95rem);
      text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
      transform: translateZ(30px); /* Text sabse upar float karega */
  }
  
  /* Hover Effects */
  .hologram-btn:hover {
      border-color: var(--primary);
      box-shadow: 
          0 20px 40px rgba(0, 0, 0, 0.4),
          0 0 20px rgba(0, 212, 255, 0.2);
  }
  
  @keyframes shimmer-sweep {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
  }`,
            js: `const btn = document.getElementById('holo-trigger');
  
  btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Mouse percentage for CSS Variables
      const xPct = (x / rect.width) * 100;
      const yPct = (y / rect.height) * 100;
      
      btn.style.setProperty('--x', \`\${xPct}%\`);
      btn.style.setProperty('--y', \`\${yPct}%\`);
      
      // Tilt calculation
      const rotateX = ((y / rect.height) - 0.5) * -30;
      const rotateY = ((x / rect.width) - 0.5) * 30;
      
      btn.style.transform = \`rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`;
      
      // Parallax BG Shift
      const bg = btn.querySelector('.parallax-bg');
      bg.style.transform = \`translateZ(-20px) translateX(\${(xPct - 50) / 5}px) translateY(\${(yPct - 50) / 5}px)\`;
  });
  
  btn.addEventListener('mouseleave', () => {
      btn.style.transform = \`rotateX(0deg) rotateY(0deg)\`;
      btn.style.transition = 'all 0.5s ease-out';
      const bg = btn.querySelector('.parallax-bg');
      bg.style.transform = \`translateZ(-20px) translateX(0) translateY(0)\`;
  });`
        },
        variants: [
            {
                id: "v1",
                name: "Variant 1",
                code: {
                    html: `<div class="universal-wrapper">
          <button class="hologram-btn-v2" id="hyper-trigger">
              <div class="shimmer-layer"></div>
              <div class="data-lines"></div>
              <div class="reactive-glare"></div>
              <span class="btn-text">HYPER DRIVE</span>
          </button>
      </div>`,
                    css: `.universal-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1200px;
          background: transparent;
          padding: 20px;
      }
      
      .hologram-btn-v2 {
          --glow-color: #ff00c8;
          --accent-color: #7000ff;
          position: relative;
          width: 100%;
          max-width: 280px;
          height: 65px;
          background: #05000a; /* Ultra dark base */
          border-radius: 8px;
          border: 1px solid rgba(112, 0, 255, 0.3);
          cursor: pointer;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.15s ease-out, border 0.3s ease;
          transform-style: preserve-3d;
      }
      
      /* Layer 1: Fast Shimmer */
      .shimmer-layer {
          position: absolute;
          inset: 0;
          background: linear-gradient(
              90deg, 
              transparent 20%, 
              rgba(255, 255, 255, 0.15) 50%, 
              transparent 80%
          );
          background-size: 200% 100%;
          animation: sweep 2.5s infinite linear;
          z-index: 1;
      }
      
      /* Layer 2: Parallax Data Lines */
      .data-lines {
          position: absolute;
          width: 150%;
          height: 150%;
          background: repeating-linear-gradient(
              90deg,
              transparent,
              transparent 20px,
              rgba(112, 0, 255, 0.1) 21px,
              transparent 22px
          );
          z-index: 0;
          transform: translateZ(-30px);
      }
      
      /* Layer 3: Reactive Sharp Glare */
      .reactive-glare {
          position: absolute;
          inset: 0;
          background: radial-gradient(
              circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
              rgba(255, 0, 200, 0.3) 0%, 
              transparent 70%
          );
          z-index: 2;
          mix-blend-mode: color-dodge;
      }
      
      /* Professional Text Logic */
      .btn-text {
          position: relative;
          z-index: 10;
          color: #fff;
          font-weight: 800;
          letter-spacing: 4px;
          text-transform: uppercase;
          font-size: clamp(0.85rem, 3vw, 1rem);
          text-shadow: 0 0 15px var(--glow-color);
          transform: translateZ(50px); /* Massive floating effect */
          pointer-events: none;
      }
      
      /* Hover State */
      .hologram-btn-v2:hover {
          border-color: var(--glow-color);
          box-shadow: 
              0 20px 40px rgba(0, 0, 0, 0.6),
              0 0 30px rgba(112, 0, 255, 0.3);
      }
      
      @keyframes sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
      }`,
                    js: `const hyperBtn = document.getElementById('hyper-trigger');
      
      hyperBtn.addEventListener('mousemove', (e) => {
          const rect = hyperBtn.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          // Update Lighting Position
          hyperBtn.style.setProperty('--mouse-x', \`\${(x / rect.width) * 100}%\`);
          hyperBtn.style.setProperty('--mouse-y', \`\${(y / rect.height) * 100}%\`);
          
          // Smooth 3D Rotation
          const rx = ((y / rect.height) - 0.5) * -40; // Tilt intensity
          const ry = ((x / rect.width) - 0.5) * 40;
          
          hyperBtn.style.transform = \`rotateX(\${rx}deg) rotateY(\${ry}deg) scale(1.05)\`;
          
          // Parallax Lines Shift
          const lines = hyperBtn.querySelector('.data-lines');
          lines.style.transform = \`translateZ(-30px) translateX(\${(x - rect.width/2)/8}px)\`;
      });
      
      hyperBtn.addEventListener('mouseleave', () => {
          hyperBtn.style.transform = \`rotateX(0deg) rotateY(0deg) scale(1)\`;
          hyperBtn.style.transition = 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
          const lines = hyperBtn.querySelector('.data-lines');
          lines.style.transform = \`translateZ(-30px) translateX(0)\`;
      });`
                }
            },
            {
                id: "v2",
                name: "Variant 2",
                code: {
                    html: `<div class="universal-wrapper">
          <button class="hologram-btn-v3" id="neutron-trigger">
              <div class="energy-grid"></div>
              <div class="core-flare"></div>
              <div class="glass-glimmer"></div>
              <span class="btn-text">NEUTRON CORE</span>
          </button>
      </div>`,
                    css: `.universal-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1500px;
          background: transparent;
          padding: 20px;
      }
      
      .hologram-btn-v3 {
          --core-cyan: #00ffff;
          --star-white: #ffffff;
          position: relative;
          width: 100%;
          max-width: 280px;
          height: 65px;
          background: #000508; /* Deep abyss blue */
          border-radius: 4px; /* Sharp professional edges */
          border: 1px solid rgba(0, 255, 255, 0.2);
          cursor: pointer;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.2s cubic-bezier(0.2, 0, 0.2, 1);
          transform-style: preserve-3d;
      }
      
      /* Layer 1: Rotating Energy Grid */
      .energy-grid {
          position: absolute;
          width: 200%;
          height: 200%;
          background-image: 
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 15px 15px;
          z-index: 0;
          transform: translateZ(-40px) rotate(15deg);
          animation: grid-move 10s linear infinite;
      }
      
      /* Layer 2: Center Core Flare */
      .core-flare {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(
              circle at var(--n-x, 50%) var(--n-y, 50%), 
              rgba(0, 255, 255, 0.2) 0%, 
              transparent 50%
          );
          z-index: 1;
          mix-blend-mode: screen;
      }
      
      /* Layer 3: Reactive Glass Glimmer */
      .glass-glimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(
              125deg, 
              transparent 30%, 
              rgba(255, 255, 255, 0.1) 45%, 
              rgba(255, 255, 255, 0.2) 50%, 
              rgba(255, 255, 255, 0.1) 55%, 
              transparent 70%
          );
          background-size: 200% 200%;
          z-index: 2;
          pointer-events: none;
      }
      
      /* High-Energy Text */
      .btn-text {
          position: relative;
          z-index: 10;
          color: var(--star-white);
          font-weight: 900;
          letter-spacing: 5px;
          text-transform: uppercase;
          font-size: clamp(0.85rem, 3vw, 0.95rem);
          text-shadow: 0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.3);
          transform: translateZ(60px);
      }
      
      /* Hover States */
      .hologram-btn-v3:hover {
          border-color: var(--core-cyan);
          box-shadow: 0 0 30px rgba(0, 255, 255, 0.2), inset 0 0 15px rgba(0, 255, 255, 0.1);
      }
      
      .hologram-btn-v3:hover .energy-grid {
          animation-duration: 3s; /* Grid speed up */
      }
      
      @keyframes grid-move {
          from { transform: translateZ(-40px) rotate(0deg); }
          to { transform: translateZ(-40px) rotate(360deg); }
      }`,
                    js: `const neutronBtn = document.getElementById('neutron-trigger');
      
      neutronBtn.addEventListener('mousemove', (e) => {
          const rect = neutronBtn.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          // Core Flare Position
          neutronBtn.style.setProperty('--n-x', \`\${(x / rect.width) * 100}%\`);
          neutronBtn.style.setProperty('--n-y', \`\${(y / rect.height) * 100}%\`);
          
          // Rotation Calculation
          const rotateX = ((y / rect.height) - 0.5) * -45;
          const rotateY = ((x / rect.width) - 0.5) * 45;
          
          neutronBtn.style.transform = \`rotateX(\${rotateX}deg) rotateY(\${rotateY}deg) scale(1.08)\`;
          
          // Dynamic Glimmer Shift
          const glimmer = neutronBtn.querySelector('.glass-glimmer');
          glimmer.style.backgroundPosition = \`\${(x / rect.width) * 100}% \${(y / rect.height) * 100}%\`;
      });
      
      neutronBtn.addEventListener('mouseleave', () => {
          neutronBtn.style.transform = \`rotateX(0deg) rotateY(0deg) scale(1)\`;
          neutronBtn.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
      });`
                }
            }
        ]
    },
    {
        id: "comp-3glmc5",
        name: "New Component",
        category: "Buttons",
        tags: ["glow", "hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<div class="universal-wrapper">
      <button class="mercury-btn">
          <div class="metal-surface"></div>
          <div class="liquid-shimmer"></div>
          <span class="btn-text">MERCURY CORE</span>
      </button>
  </div>`,
            css: `.universal-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      padding: 40px;
  }
  
  .mercury-btn {
      position: relative;
      width: 100%;
      max-width: 260px;
      height: 75px;
      background: #111;
      border: none;
      /* Organic Shape: Non-perfect rounded corners */
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 
          0 20px 40px rgba(0,0,0,0.4),
          inset 0 -5px 15px rgba(255,255,255,0.05);
      overflow: hidden;
      animation: morph-liquid 8s ease-in-out infinite;
  }
  
  .metal-surface {
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, #222 0%, #444 50%, #111 100%);
      z-index: 1;
  }
  
  .liquid-shimmer {
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      /* Chrome Reflection Effect */
      background: radial-gradient(
          circle at var(--m-x, 50%) var(--m-y, 50%), 
          rgba(255, 255, 255, 0.15) 0%, 
          transparent 50%
      );
      z-index: 2;
      pointer-events: none;
  }
  
  .btn-text {
      position: relative;
      z-index: 5;
      color: #fff;
      font-weight: 700;
      letter-spacing: 4px;
      text-transform: uppercase;
      font-size: 0.9rem;
      /* Subtle Metallic Glow */
      text-shadow: 0 0 10px rgba(255,255,255,0.3);
      pointer-events: none;
  }
  
  /* Animations & Hover */
  @keyframes morph-liquid {
      0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
      50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  }
  
  .mercury-btn:hover {
      transform: scale(1.1) translateY(-5px);
      box-shadow: 0 30px 60px rgba(0,0,0,0.5);
      /* Speed up morph on hover */
      animation-duration: 3s;
  }
  
  .mercury-btn:active {
      transform: scale(0.95);
  }`,
            js: `const mBtn = document.querySelector('.mercury-btn');
  
  mBtn.addEventListener('mousemove', (e) => {
      const rect = mBtn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Update Light Reflection
      mBtn.style.setProperty('--m-x', \`\${(x / rect.width) * 100}%\`);
      mBtn.style.setProperty('--m-y', \`\${(y / rect.height) * 100}%\`);
      
      // Distort shape based on mouse position
      const xMove = (x - rect.width / 2) / 10;
      const yMove = (y - rect.height / 2) / 10;
      mBtn.style.transform = \`translate(\${xMove}px, \${yMove}px) scale(1.1)\`;
  });
  
  mBtn.addEventListener('mouseleave', () => {
      mBtn.style.transform = \`translate(0, 0) scale(1)\`;
  });`
        },
        variants: [

        ]
    },


    {
        id: "comp-rzk77f",
        name: "New Component",
        category: "Buttons",
        tags: ["neon", "hover", "3d"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<div class="universal-wrapper">
      <button class="reactor-btn" id="reactor-core">
          <div class="void-bg"></div>
          <div class="liquid-wave"></div>
          <div class="neon-border"></div>
          <div class="particles">
              <span></span><span></span><span></span>
          </div>
          <span class="btn-text">START REACTOR</span>
      </button>
  </div>`,
            css: `.universal-wrapper {
      width: 100%; height: 100%;
      display: flex; justify-content: center; align-items: center;
      perspective: 1000px; background: transparent;
  }
  
  .reactor-btn {
      --cyan: #00f2ff;
      --purple: #7000ff;
      position: relative;
      width: 100%; max-width: 280px; height: 70px;
      background: rgba(255, 255, 255, 0.03);
      border: none; border-radius: 12px;
      cursor: pointer; overflow: hidden;
      display: flex; justify-content: center; align-items: center;
      backdrop-filter: blur(15px);
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 15px 35px rgba(0,0,0,0.5);
      transform-style: preserve-3d;
  }
  
  /* 1. Neon Pulse Border */
  .neon-border {
      position: absolute; inset: 0;
      border: 2px solid transparent;
      border-radius: 12px;
      background: linear-gradient(90deg, var(--cyan), var(--purple)) border-box;
      -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
      mask-composite: exclude;
      opacity: 0.3;
  }
  
  /* 2. Liquid Wave Animation */
  .liquid-wave {
      position: absolute; bottom: -100%; left: -50%;
      width: 200%; height: 200%;
      background: linear-gradient(45deg, var(--cyan), var(--purple));
      opacity: 0.15; border-radius: 40%;
      animation: wave-rotate 10s linear infinite;
      z-index: 1; transition: 0.6s ease;
  }
  
  /* 3. Particle Motion */
  .particles span {
      position: absolute; width: 4px; height: 4px;
      background: var(--cyan); border-radius: 50%;
      filter: blur(1px); animation: particles-up 3s infinite linear;
      z-index: 2; opacity: 0;
  }
  .particles span:nth-child(1) { left: 20%; animation-delay: 0s; }
  .particles span:nth-child(2) { left: 50%; animation-delay: 1s; }
  .particles span:nth-child(3) { left: 80%; animation-delay: 2s; }
  
  /* Text with Depth */
  .btn-text {
      position: relative; z-index: 10;
      color: #fff; font-weight: 900; letter-spacing: 4px;
      text-transform: uppercase; font-size: 0.9rem;
      text-shadow: 0 0 10px rgba(0, 242, 255, 0.5);
      transform: translateZ(40px);
  }
  
  /* Hover States (The Magic) */
  .reactor-btn:hover {
      transform: translateY(-10px) rotateX(15deg) scale(1.05);
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 242, 255, 0.3);
  }
  
  .reactor-btn:hover .liquid-wave {
      bottom: -50%; opacity: 0.4;
      animation-duration: 4s;
  }
  
  .reactor-btn:hover .neon-border {
      opacity: 1; filter: drop-shadow(0 0 8px var(--cyan));
  }
  
  .reactor-btn:hover .particles span { opacity: 0.8; }
  
  /* Animations */
  @keyframes wave-rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
  }
  
  @keyframes particles-up {
      0% { transform: translateY(50px) scale(0); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateY(-50px) scale(1.5); opacity: 0; }
  }`,
            js: `const reactor = document.getElementById('reactor-core');
  
  reactor.addEventListener('mousemove', (e) => {
      const rect = reactor.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Magnetic Tilt Logic
      const rotateX = ((y / rect.height) - 0.5) * -30;
      const rotateY = ((x / rect.width) - 0.5) * 30;
      
      reactor.style.transform = \`translateY(-10px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg) scale(1.05)\`;
  });
  
  reactor.addEventListener('mouseleave', () => {
      reactor.style.transform = \`translateY(0) rotateX(0deg) rotateY(0deg) scale(1)\`;
  });
  
  // Click Interaction (Shockwave)
  reactor.addEventListener('mousedown', () => {
      reactor.style.transform = \`scale(0.95) translateY(0)\`;
  });`
        },
        variants: [
            {
                id: "v1",
                name: "Variant 1",
                code: {
                    html: `<div class="universal-wrapper">
          <button class="eclipse-btn" id="eclipse-trigger">
              <div class="obsidian-glass"></div>
              <div class="scan-line"></div>
              <div class="energy-nodes">
                  <span></span><span></span><span></span>
              </div>
              <div class="glow-ring"></div>
              <span class="btn-text">ACCESS GRANTED</span>
          </button>
      </div>`,
                    css: `.universal-wrapper {
          width: 100%; height: 100%;
          display: flex; justify-content: center; align-items: center;
          perspective: 1200px; background: transparent;
      }
      
      .eclipse-btn {
          --gold: #ffcc00;
          --dark: #0a0a0a;
          position: relative;
          width: 100%; max-width: 280px; height: 70px;
          background: var(--dark);
          border: 1px solid rgba(255, 204, 0, 0.1);
          border-radius: 4px; /* Sharp technical look */
          cursor: pointer; overflow: hidden;
          display: flex; justify-content: center; align-items: center;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          box-shadow: 0 10px 30px rgba(0,0,0,0.8);
          transform-style: preserve-3d;
      }
      
      /* Layer 1: Frosted Obsidian Glass */
      .obsidian-glass {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.05), transparent);
          backdrop-filter: blur(10px);
          z-index: 1;
      }
      
      /* Layer 2: Moving Scan Line */
      .scan-line {
          position: absolute; top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, 
              transparent, 
              rgba(255, 204, 0, 0.2), 
              var(--gold), 
              rgba(255, 204, 0, 0.2), 
              transparent);
          z-index: 2;
          transition: 0.6s ease;
          opacity: 0.5;
      }
      
      /* Layer 3: Floating Energy Nodes */
      .energy-nodes span {
          position: absolute; width: 2px; height: 2px;
          background: var(--gold); border-radius: 50%;
          box-shadow: 0 0 10px var(--gold);
          z-index: 3; opacity: 0;
      }
      .energy-nodes span:nth-child(1) { top: 20%; left: 10%; animation: node-pulse 2s infinite; }
      .energy-nodes span:nth-child(2) { top: 50%; right: 15%; animation: node-pulse 2s infinite 0.5s; }
      .energy-nodes span:nth-child(3) { bottom: 20%; left: 40%; animation: node-pulse 2s infinite 1s; }
      
      /* Text with Gold Glow */
      .btn-text {
          position: relative; z-index: 10;
          color: var(--gold); font-weight: 800; letter-spacing: 5px;
          text-transform: uppercase; font-size: 0.85rem;
          text-shadow: 0 0 15px rgba(255, 204, 0, 0.4);
          transform: translateZ(50px);
      }
      
      /* Hover Mechanics */
      .eclipse-btn:hover {
          transform: translateY(-8px) rotateX(10deg) scale(1.03);
          border-color: var(--gold);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7), 0 0 25px rgba(255, 204, 0, 0.2);
      }
      
      .eclipse-btn:hover .scan-line {
          left: 100%;
          transition: 1s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .eclipse-btn:hover .energy-nodes span { opacity: 1; }
      
      /* Animations */
      @keyframes node-pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(2.5); opacity: 1; }
      }`,
                    js: `const btn = document.getElementById('eclipse-trigger');
      
      btn.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          // Smooth 3D tilt tracking
          const rX = ((y / rect.height) - 0.5) * -25;
          const rY = ((x / rect.width) - 0.5) * 25;
          
          btn.style.transform = \`translateY(-8px) rotateX(\${rX}deg) rotateY(\${rY}deg) scale(1.03)\`;
      });
      
      btn.addEventListener('mouseleave', () => {
          btn.style.transform = \`translateY(0) rotateX(0deg) rotateY(0deg) scale(1)\`;
          btn.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
      });
      
      // Click Interaction
      btn.addEventListener('mousedown', () => {
          btn.style.transform = \`scale(0.97) translateY(0)\`;
          btn.style.backgroundColor = '#111';
      });`
                }
            }
        ]
    },
    {
        id: "comp-3bprri",
        name: "New Component",
        category: "Buttons",
        tags: ["hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<div class="universal-wrapper">
      <button class="fluid-btn" id="fluid-trigger">
          <div class="fluid-container">
              <div class="liquid-blob"></div>
              <div class="liquid-blob"></div>
              <div class="liquid-blob"></div>
          </div>
          <div class="glass-overlay"></div>
          <div class="text-container">
              <span class="text-primary">INITIALIZE ENGINE</span>
              <span class="text-secondary">READY TO LAUNCH</span>
          </div>
          <div class="sparkles"></div>
      </button>
  </div>`,
            css: `.universal-wrapper {
      width: 100%; height: 100%;
      display: flex; justify-content: center; align-items: center;
      perspective: 1000px; background: transparent;
  }
  
  .fluid-btn {
      --primary-fluid: #00ffaa;
      --secondary-fluid: #0066ff;
      position: relative;
      width: 100%; max-width: 300px; height: 80px;
      background: #050505;
      border-radius: 16px; border: none;
      cursor: pointer; overflow: hidden;
      display: flex; justify-content: center; align-items: center;
      transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  }
  
  /* 1. WebGL-style Fluid Background */
  .fluid-container {
      position: absolute; inset: 0;
      filter: blur(15px) contrast(20); /* The secret to liquid-fluid look */
      background: #000; z-index: 1;
  }
  
  .liquid-blob {
      position: absolute; width: 80px; height: 80px;
      background: var(--primary-fluid);
      border-radius: 50%;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      animation: move-fluid 6s infinite alternate;
  }
  
  .liquid-blob:nth-child(2) {
      background: var(--secondary-fluid);
      width: 100px; height: 100px;
      animation-delay: -2s; animation-duration: 8s;
  }
  
  .liquid-blob:nth-child(3) {
      background: #fff;
      width: 60px; height: 60px;
      animation-delay: -4s; animation-duration: 4s;
  }
  
  /* 2. Glass Refraction Overlay */
  .glass-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(135deg, rgba(255,255,255,0.1), transparent);
      backdrop-filter: blur(2px);
      z-index: 2; border: 1px solid rgba(255,255,255,0.1);
      border-radius: 16px;
  }
  
  /* 3. Advanced Text Swap Animation */
  .text-container {
      position: relative; z-index: 10;
      height: 30px; overflow: hidden;
      pointer-events: none;
  }
  
  .text-container span {
      display: block; color: #fff;
      font-weight: 900; letter-spacing: 5px;
      text-transform: uppercase; font-size: 0.95rem;
      transition: transform 0.6s cubic-bezier(0.7, 0, 0.3, 1);
      text-shadow: 0 0 15px rgba(0, 255, 170, 0.5);
  }
  
  .text-secondary { transform: translateY(20px); opacity: 0; }
  
  /* 4. Hover State Interactions */
  .fluid-btn:hover {
      transform: translateY(-5px) scale(1.05);
      box-shadow: 0 20px 40px rgba(0, 255, 170, 0.2);
  }
  
  .fluid-btn:hover .text-primary { transform: translateY(-40px); opacity: 0; }
  .fluid-btn:hover .text-secondary { transform: translateY(-30px); opacity: 1; }
  
  .fluid-btn:hover .fluid-container { filter: blur(10px) contrast(15); }
  
  /* Animations */
  @keyframes move-fluid {
      0% { transform: translate(-100%, -50%) scale(1); }
      50% { transform: translate(20%, 20%) scale(1.5); }
      100% { transform: translate(50%, -80%) scale(1.2); }
  }`,
            js: `const btn = document.getElementById('fluid-trigger');
  const blobs = document.querySelectorAll('.liquid-blob');
  
  btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Physics: Blobs react to cursor position
      blobs.forEach((blob, index) => {
          const speed = (index + 1) * 0.1;
          const tx = (x - rect.width / 2) * speed;
          const ty = (y - rect.height / 2) * speed;
          blob.style.transform = \`translate(calc(-50% + \${tx}px), calc(-50% + \${ty}px)) scale(\${1 + speed})\`;
      });
  
      // 3D Tilt
      const rX = ((y / rect.height) - 0.5) * -20;
      const rY = ((x / rect.width) - 0.5) * 20;
      btn.style.transform = \`translateY(-5px) scale(1.05) rotateX(\${rX}deg) rotateY(\${rY}deg)\`;
  });
  
  btn.addEventListener('mouseleave', () => {
      btn.style.transform = \`translateY(0) scale(1) rotateX(0deg) rotateY(0deg)\`;
      blobs.forEach(blob => {
          blob.style.transform = \`translate(-50%, -50%) scale(1)\`;
          blob.style.transition = "transform 0.8s ease-out";
      });
  });`
        },
        variants: [

        ]
    },
    {
        id: "comp-omc6oj",
        name: "New Component",
        category: "Buttons",
        tags: ["glow", "hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093203298,
        code: {
            html: `<div class="universal-wrapper">
      <button class="quantum-fluid-btn">
          <div class="fluid-canvas">
              <div class="plasma p1"></div>
              <div class="plasma p2"></div>
              <div class="plasma p3"></div>
          </div>
          
          <div class="glass-shield"></div>
          
          <div class="text-wrapper">
              <span class="text-top">SYSTEM ONLINE</span>
              <span class="text-bottom">EXECUTE CORE</span>
          </div>
          
          <div class="border-glow"></div>
      </button>
  </div>`,
            css: `.universal-wrapper {
      width: 100%; height: 100%;
      display: flex; justify-content: center; align-items: center;
      perspective: 1000px; padding: 20px;
  }
  
  .quantum-fluid-btn {
      --primary: #00ffcc;
      --secondary: #0077ff;
      position: relative;
      padding: 18px 45px; /* Spacious padding taaki text na kate */
      min-width: 260px;
      background: #000;
      border: none; border-radius: 15px;
      cursor: pointer; overflow: hidden;
      display: flex; justify-content: center; align-items: center;
      transition: all 0.6s cubic-bezier(0.2, 1, 0.2, 1);
      box-shadow: 0 15px 35px rgba(0,0,0,0.5);
  }
  
  /* 1. Realistic Fluid Background (Metaballs) */
  .fluid-canvas {
      position: absolute; inset: 0;
      filter: blur(12px) contrast(20);
      background: #000; z-index: 1;
      opacity: 0.7;
  }
  
  .plasma {
      position: absolute; width: 80px; height: 80px;
      border-radius: 50%;
      transform: translate(-50%, -50%);
  }
  .p1 { background: var(--primary); top: 20%; left: 30%; animation: orbit 8s infinite linear; }
  .p2 { background: var(--secondary); top: 70%; left: 80%; animation: orbit 12s infinite linear reverse; }
  .p3 { background: #fff; top: 50%; left: 50%; width: 40px; height: 40px; animation: orbit 5s infinite ease-in-out; }
  
  /* 2. Modern Text Reveal (Vertical Slide + Blur) */
  .text-wrapper {
      position: relative; z-index: 10;
      height: 1.5rem; /* Text ki height fix */
      display: flex; flex-direction: column;
      align-items: center;
      transition: transform 0.6s cubic-bezier(0.8, 0, 0.2, 1);
  }
  
  .text-wrapper span {
      display: block; line-height: 1.5rem;
      color: #fff; font-weight: 900; letter-spacing: 4px;
      text-transform: uppercase; font-size: 1rem;
      white-space: nowrap; /* No wrapping */
      transition: all 0.6s cubic-bezier(0.8, 0, 0.2, 1);
  }
  
  .text-bottom {
      opacity: 0; filter: blur(10px);
      transform: translateY(10px) scale(0.8);
  }
  
  /* 3. Hover Effects */
  .quantum-fluid-btn:hover {
      transform: translateY(-8px) scale(1.05) rotateX(10deg);
      box-shadow: 0 25px 50px rgba(0, 255, 204, 0.2);
  }
  
  .quantum-fluid-btn:hover .text-wrapper {
      transform: translateY(-1.5rem); /* Perfectly slides to next text */
  }
  
  .quantum-fluid-btn:hover .text-top {
      opacity: 0; filter: blur(10px);
      transform: translateY(-10px) scale(0.8);
  }
  
  .quantum-fluid-btn:hover .text-bottom {
      opacity: 1; filter: blur(0);
      transform: translateY(0) scale(1);
  }
  
  .quantum-fluid-btn:hover .fluid-canvas {
      filter: blur(8px) contrast(15);
      opacity: 1;
  }
  
  /* Animations */
  @keyframes orbit {
      0% { transform: rotate(0deg) translate(40px) rotate(0deg); }
      100% { transform: rotate(360deg) translate(40px) rotate(-360deg); }
  }
  
  .border-glow {
      position: absolute; inset: 0;
      border-radius: 15px;
      border: 1px solid rgba(255,255,255,0.1);
      z-index: 5; pointer-events: none;
      transition: 0.4s;
  }
  
  .quantum-fluid-btn:hover .border-glow {
      border-color: var(--primary);
      box-shadow: inset 0 0 15px rgba(0, 255, 204, 0.2);
  }`,
            js: `const btn = document.querySelector('.quantum-fluid-btn');
  const plasmas = document.querySelectorAll('.plasma');
  
  btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      // Fluid Physics: Move plasmas toward mouse
      plasmas.forEach((p, idx) => {
          const factor = (idx + 1) * 0.15;
          const dx = (x - rect.width / 2) * factor;
          const dy = (y - rect.height / 2) * factor;
          p.style.left = \`calc(\${50 + (dx/rect.width)*100}% )\`;
          p.style.top = \`calc(\${50 + (dy/rect.height)*100}% )\`;
      });
  
      // 3D Perspective Tilt
      const rotateX = ((y / rect.height) - 0.5) * -25;
      const rotateY = ((x / rect.width) - 0.5) * 25;
      btn.style.transform = \`translateY(-8px) scale(1.05) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`;
  });
  
  btn.addEventListener('mouseleave', () => {
      btn.style.transform = \`translateY(0) scale(1) rotateX(0deg) rotateY(0deg)\`;
      plasmas.forEach(p => {
          p.style.transition = "all 0.8s ease-out";
          // Reset to auto-orbit positions
      });
  });`
        },
        variants: [

        ]
    },
    {
        id: "comp-pf03cb",
        name: "New Component",
        category: "Buttons",
        tags: ["neon", "hover", "3d"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<div class="universal-wrapper">
      <button class="prism-btn">
          <div class="prism-cube">
              <div class="face front">
                  <span class="face-text">ANALYZING DATA</span>
              </div>
              <div class="face bottom">
                  <span class="face-text">PROCESS COMPLETE</span>
              </div>
          </div>
          <div class="prism-shadow"></div>
      </button>
  </div>`,
            css: `.universal-wrapper {
      width: 100%; height: 100%;
      display: flex; justify-content: center; align-items: center;
      perspective: 1200px; /* Strong 3D depth */
      background: transparent;
  }
  
  .prism-btn {
      position: relative;
      width: 100%; max-width: 300px; height: 70px;
      background: transparent;
      border: none; cursor: pointer;
      transform-style: preserve-3d;
      transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  
  .prism-cube {
      position: absolute; inset: 0;
      transform-style: preserve-3d;
      transition: transform 0.8s cubic-bezier(0.6, 0, 0.2, 1);
  }
  
  .face {
      position: absolute; inset: 0;
      display: flex; justify-content: center; align-items: center;
      backface-visibility: hidden;
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      /* Glassmorphism */
      background: rgba(15, 15, 15, 0.9);
      backdrop-filter: blur(15px);
      box-sizing: border-box;
  }
  
  .face-text {
      color: #fff; font-weight: 900; letter-spacing: 3px;
      text-transform: uppercase; font-size: 0.9rem;
      white-space: nowrap;
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  }
  
  /* 3D Face Positioning */
  .front {
      transform: rotateX(0deg) translateZ(35px);
      border-left: 4px solid #00f2ff; /* Neon Accent */
  }
  
  .bottom {
      transform: rotateX(-90deg) translateZ(35px);
      background: linear-gradient(135deg, #00f2ff, #7000ff);
      border: none;
  }
  
  .bottom .face-text {
      color: #000; text-shadow: none;
  }
  
  /* Hover States */
  .prism-btn:hover .prism-cube {
      transform: rotateX(90deg); /* Full Flip */
  }
  
  .prism-btn:hover {
      transform: translateY(-10px) rotateY(10deg);
  }
  
  /* Realistic Floating Shadow */
  .prism-shadow {
      position: absolute; bottom: -20px; left: 10%;
      width: 80%; height: 10px;
      background: rgba(0, 0, 0, 0.5);
      filter: blur(10px);
      border-radius: 50%;
      transform: translateZ(-50px);
      transition: 0.6s;
  }
  
  .prism-btn:hover .prism-shadow {
      transform: translateZ(-50px) scale(1.2);
      opacity: 0.3;
  }`,
            js: `const prism = document.querySelector('.prism-btn');
  const cube = document.querySelector('.prism-cube');
  
  prism.addEventListener('mousemove', (e) => {
      const rect = prism.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      // Subtle Tilt while rotating
      const rY = ((x / rect.width) - 0.5) * 30;
      const rX = ((y / rect.height) - 0.5) * -15;
  
      // Hum rotateX(90deg) ko base rakhkar thoda tilt add karenge
      // Agar hover hai to cube rotated hai, isliye mouse move logic change hoga
      if (window.getComputedStyle(cube).transform !== 'none') {
          prism.style.transform = \`translateY(-10px) rotateY(\${rY}deg) rotateX(\${rX}deg)\`;
      }
  });
  
  prism.addEventListener('mouseleave', () => {
      prism.style.transform = \`translateY(0) rotateY(0deg) rotateX(0deg)\`;
  });`
        },
        variants: [
            {
                id: "v1",
                name: "Variant 1",
                code: {
                    html: `<div class="universal-wrapper">
          <button class="helix-btn">
              <div class="helix-cube">
                  <div class="face front">
                      <div class="text-slice">QUANTUM DATA</div>
                  </div>
                  <div class="face bottom">
                      <div class="text-slice">NEURAL LINK</div>
                  </div>
                  <div class="face-edge left"></div>
                  <div class="face-edge right"></div>
              </div>
              <div class="glow-floor"></div>
          </button>
      </div>`,
                    css: `.universal-wrapper {
          width: 100%; height: 100%;
          display: flex; justify-content: center; align-items: center;
          perspective: 1500px;
      }
      
      .helix-btn {
          position: relative;
          width: 280px; height: 75px;
          background: transparent; border: none;
          cursor: pointer; transform-style: preserve-3d;
      }
      
      .helix-cube {
          position: absolute; inset: 0;
          transform-style: preserve-3d;
          transition: transform 0.9s cubic-bezier(0.7, 0, 0.2, 1);
      }
      
      .face {
          position: absolute; inset: 0;
          display: flex; justify-content: center; align-items: center;
          backface-visibility: hidden;
          border-radius: 2px; /* Professional sharp tech look */
          background: #080808;
          border: 1px solid rgba(0, 255, 255, 0.2);
          overflow: hidden;
      }
      
      /* Chrome Edge Effect */
      .face::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.1), transparent);
          transform: translateX(-100%);
          transition: 0.6s;
      }
      
      .front { transform: rotateX(0deg) translateZ(37.5px); }
      .bottom { 
          transform: rotateX(-90deg) translateZ(37.5px); 
          background: #00f2ff;
      }
      
      /* Helix Text Animation */
      .text-slice {
          color: #fff; font-weight: 900; letter-spacing: 6px;
          text-transform: uppercase; font-size: 0.9rem;
          transition: all 0.8s cubic-bezier(0.5, 0, 0.1, 1);
      }
      
      .bottom .text-slice { color: #000; }
      
      /* Side Chrome Panels */
      .face-edge {
          position: absolute; width: 75px; height: 75px;
          background: #111; top: 0;
          border: 1px solid rgba(0, 255, 255, 0.1);
      }
      .left { left: 0; transform: rotateY(-90deg) translateZ(37.5px); }
      .right { right: 0; transform: rotateY(90deg) translateZ(37.5px); }
      
      /* Hover States: The Interaction */
      .helix-btn:hover .helix-cube {
          transform: rotateX(90deg) rotateZ(5deg); /* Slight twist on rotate */
      }
      
      .helix-btn:hover .text-slice {
          letter-spacing: 12px; /* Expanding effect */
          filter: blur(1px);
          transform: scale(1.1);
      }
      
      .helix-btn:hover .face::before { transform: translateX(100%); }
      
      /* Ambient Glow Floor */
      .glow-floor {
          position: absolute; bottom: -30px; left: 10%;
          width: 80%; height: 20px;
          background: radial-gradient(circle, rgba(0, 242, 255, 0.4), transparent 70%);
          filter: blur(10px); opacity: 0;
          transition: 0.6s; transform: translateZ(-50px);
      }
      
      .helix-btn:hover .glow-floor { opacity: 1; transform: translateZ(-50px) scale(1.5); }`,
                    js: `const btn = document.querySelector('.helix-btn');
      const cube = document.querySelector('.helix-cube');
      
      btn.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
      
          // Advanced 3D Parallax Tilt
          const rY = ((x / rect.width) - 0.5) * 40;
          const rX = ((y / rect.height) - 0.5) * -40;
      
          // Combine base hover rotation with mouse tracking
          if (window.getComputedStyle(cube).transform !== 'none') {
              cube.style.transform = \`rotateX(90deg) rotateZ(5deg) rotateY(\${rY/2}deg) rotateX(\${rX/2}deg)\`;
          }
      });
      
      btn.addEventListener('mouseleave', () => {
          cube.style.transform = \`rotateX(0deg) rotateZ(0deg)\`;
          cube.style.transition = "transform 1s cubic-bezier(0.2, 0.8, 0.2, 1)";
      });`
                }
            },
            {
                id: "v2",
                name: "Variant 2",
                code: {
                    html: `<div class="universal-wrapper">
          <button class="monolith-btn">
              <div class="monolith-cube">
                  <div class="face front">
                      <div class="grid-bg"></div>
                      <div class="split-text">
                          <span class="top">SECURE LINK</span>
                          <span class="bottom">SECURE LINK</span>
                      </div>
                  </div>
                  <div class="face bottom">
                      <div class="plasma-bg"></div>
                      <div class="split-text">
                          <span class="top">ACCESS GRANTED</span>
                          <span class="bottom">ACCESS GRANTED</span>
                      </div>
                  </div>
              </div>
              <div class="dust-particles">
                  <i></i><i></i><i></i><i></i>
              </div>
          </button>
      </div>`,
                    css: `.universal-wrapper {
          width: 100%; height: 100%;
          display: flex; justify-content: center; align-items: center;
          perspective: 2000px;
      }
      
      .monolith-btn {
          position: relative;
          width: 300px; height: 80px;
          background: transparent; border: none;
          cursor: pointer; transform-style: preserve-3d;
      }
      
      .monolith-cube {
          position: absolute; inset: 0;
          transform-style: preserve-3d;
          transition: transform 1.2s cubic-bezier(0.19, 1, 0.22, 1);
      }
      
      .face {
          position: absolute; inset: 0;
          display: flex; justify-content: center; align-items: center;
          backface-visibility: hidden;
          background: #030303;
          border: 2px solid #1a1a1a;
          overflow: hidden;
      }
      
      /* Industrial Grid Background */
      .grid-bg {
          position: absolute; inset: 0;
          background-image: 
              linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 10px 10px;
          z-index: 1;
      }
      
      /* Split-Level Text Animation */
      .split-text {
          position: relative; z-index: 10;
          display: flex; flex-direction: column;
          font-weight: 900; letter-spacing: 8px;
          font-size: 1rem; color: #fff;
      }
      
      .split-text span {
          display: block;
          height: 0.75rem; overflow: hidden;
          transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1);
      }
      
      .split-text .top { line-height: 1.5rem; }
      .split-text .bottom { line-height: 0; }
      
      .front { transform: rotateX(0deg) translateZ(40px); border-top: 3px solid #00f2ff; }
      .bottom { 
          transform: rotateX(-90deg) translateZ(40px); 
          background: #000; border-top: 3px solid #ff0055;
      }
      
      /* Hover Physics */
      .monolith-btn:hover .monolith-cube {
          transform: rotateX(90deg);
      }
      
      .monolith-btn:hover .split-text .top { transform: translateX(10px); }
      .monolith-btn:hover .split-text .bottom { transform: translateX(-10px); }
      
      /* Plasma Core for Bottom Face */
      .plasma-bg {
          position: absolute; width: 100%; height: 100%;
          background: radial-gradient(circle, #ff005533 0%, transparent 70%);
          animation: pulse-core 2s infinite alternate;
      }
      
      @keyframes pulse-core {
          from { opacity: 0.3; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1.2); }
      }
      
      /* Dust Particles (Interactive) */
      .dust-particles i {
          position: absolute; width: 3px; height: 3px;
          background: #00f2ff; border-radius: 50%;
          opacity: 0; transition: 0.5s;
      }
      .dust-particles i:nth-child(1) { top: -10px; left: 10%; }
      .dust-particles i:nth-child(2) { bottom: -10px; right: 20%; }
      .dust-particles i:nth-child(3) { top: 50%; left: -20px; }
      .dust-particles i:nth-child(4) { bottom: 20%; right: -20px; }
      
      .monolith-btn:hover i { opacity: 0.6; transform: scale(2); }`,
                    js: `const mBtn = document.querySelector('.monolith-btn');
      const mCube = document.querySelector('.monolith-cube');
      
      mBtn.addEventListener('mousemove', (e) => {
          const rect = mBtn.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
      
          // Heavy Metal Inertia (Slow, powerful tilt)
          const rY = ((x / rect.width) - 0.5) * 25;
          const rX = ((y / rect.height) - 0.5) * -25;
      
          if (window.getComputedStyle(mCube).transform !== 'none') {
              mCube.style.transform = \`rotateX(90deg) rotateY(\${rY/2}deg) rotateX(\${rX/2}deg)\`;
          } else {
              mCube.style.transform = \`rotateY(\${rY}deg) rotateX(\${rX}deg)\`;
          }
      });
      
      mBtn.addEventListener('mouseleave', () => {
          mCube.style.transition = "transform 1.5s cubic-bezier(0.19, 1, 0.22, 1)";
          mCube.style.transform = \`rotateX(0deg) rotateY(0deg)\`;
      });`
                }
            }
        ]
    },
    {
        id: "comp-oom6gz",
        name: "New Component",
        category: "Buttons",
        tags: ["glow", "hover", "3d"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<div class="universal-wrapper">
      <svg style="position: absolute; width: 0; height: 0;" select-none>
          <defs>
              <filter id="singularity-warp">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -12" result="goo" />
                  <feDisplacementMap in="SourceGraphic" in2="goo" scale="20" xChannelSelector="R" yChannelSelector="G" />
              </filter>
          </defs>
      </svg>
  
      <button class="singularity-btn" id="warp-core">
          <div class="vortex-layer">
              <div class="ring r1"></div>
              <div class="ring r2"></div>
              <div class="ring r3"></div>
          </div>
          
          <div class="event-horizon"></div>
          
          <div class="text-morph">
              <span class="char-gate" data-text="INITIALIZE">INITIALIZE</span>
          </div>
  
          <div class="aura-glow"></div>
      </button>
  </div>`,
            css: `:root {
      --core-color: #7000ff;
      --edge-light: #00f2ff;
  }
  
  .universal-wrapper {
      width: 100%; height: 100vh;
      display: flex; justify-content: center; align-items: center;
      background: #020202; overflow: hidden;
  }
  
  .singularity-btn {
      position: relative;
      width: 320px; height: 90px;
      background: #000; border: none;
      border-radius: 50px; cursor: pointer;
      outline: none; transform-style: preserve-3d;
      transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  /* 1. The Vortex: Rotating Gravity Rings */
  .vortex-layer {
      position: absolute; inset: 0;
      filter: url(#singularity-warp); /* Applying the SVG Warp */
      z-index: 1; opacity: 0.6;
  }
  
  .ring {
      position: absolute; border-radius: 50%;
      border: 2px solid var(--core-color);
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      animation: rotate-vortex linear infinite;
  }
  
  .r1 { width: 120px; height: 40px; animation-duration: 3s; border-color: var(--edge-light); }
  .r2 { width: 180px; height: 60px; animation-duration: 5s; animation-direction: reverse; }
  .r3 { width: 240px; height: 80px; animation-duration: 8s; opacity: 0.5; }
  
  /* 2. Event Horizon: The Dark Center */
  .event-horizon {
      position: absolute; inset: 0;
      background: radial-gradient(circle at var(--gx, 50%) var(--gy, 50%), 
                  transparent 20%, #000 60%);
      z-index: 5;
  }
  
  /* 3. Text Morph Logic: Letter-by-Letter Drift */
  .text-morph {
      position: relative; z-index: 10;
      font-weight: 900; letter-spacing: 12px;
      color: #fff; font-size: 1.1rem;
      pointer-events: none;
  }
  
  .char-gate {
      display: inline-block;
      transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
  
  /* 4. Hover State: Gravitational Collapse */
  .singularity-btn:hover {
      transform: scale(1.1) rotateX(15deg);
  }
  
  .singularity-btn:hover .r1, 
  .singularity-btn:hover .r2, 
  .singularity-btn:hover .r3 {
      width: 20px; height: 20px; /* Collapsing into center */
      opacity: 1; filter: brightness(2);
      transition: all 0.8s cubic-bezier(0.6, 0, 0.4, 1);
  }
  
  .singularity-btn:hover .char-gate {
      letter-spacing: 2px;
      filter: blur(2px) skewX(20deg);
      opacity: 0.7;
      /* After 0.4s, change text via JS */
  }
  
  /* 5. Aura Glow: Reactive Environment */
  .aura-glow {
      position: absolute; inset: -20px;
      background: radial-gradient(circle at var(--gx, 50%) var(--gy, 50%), 
                  var(--core-color) 0%, transparent 70%);
      opacity: 0; z-index: -1;
      transition: opacity 0.5s;
      filter: blur(30px);
  }
  
  .singularity-btn:hover .aura-glow { opacity: 0.4; }
  
  @keyframes rotate-vortex {
      from { transform: translate(-50%, -50%) rotate(0deg); }
      to { transform: translate(-50%, -50%) rotate(360deg); }
  }`,
            js: `const core = document.getElementById('warp-core');
  const charText = core.querySelector('.char-gate');
  
  // Mouse Interaction: Magnetic Gravitational Pull
  core.addEventListener('mousemove', (e) => {
      const rect = core.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      // Set CSS variables for radial gradient follow
      core.style.setProperty('--gx', \`\${x}px\`);
      core.style.setProperty('--gy', \`\${y}px\`);
  
      // 3D Tilt calculation with high inertia
      const rX = ((y / rect.height) - 0.5) * -30;
      const rY = ((x / rect.width) - 0.5) * 30;
      
      // Suction effect: move button slightly towards mouse
      const dx = (x - rect.width / 2) * 0.2;
      const dy = (y - rect.height / 2) * 0.2;
  
      core.style.transform = \`translate(\${dx}px, \${dy}px) rotateX(\${rX}deg) rotateY(\${rY}deg) scale(1.1)\`;
  });
  
  // Text Morphing on Hover
  let isHovered = false;
  core.addEventListener('mouseenter', () => {
      isHovered = true;
      setTimeout(() => {
          if(isHovered) {
              charText.style.opacity = '0';
              charText.style.filter = 'blur(10px)';
              setTimeout(() => {
                  charText.innerText = "LAUNCHING...";
                  charText.style.opacity = '1';
                  charText.style.filter = 'blur(0px)';
              }, 300);
          }
      }, 400);
  });
  
  core.addEventListener('mouseleave', () => {
      isHovered = false;
      charText.innerText = "INITIALIZE";
      core.style.transform = \`translate(0, 0) rotateX(0deg) rotateY(0deg) scale(1)\`;
      core.style.transition = "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
  });
  
  // Click Interaction: The "Big Bang" Flash
  core.addEventListener('mousedown', () => {
      document.body.style.backgroundColor = '#fff';
      core.style.transform = 'scale(0.8) rotateX(0deg)';
      setTimeout(() => {
          document.body.style.backgroundColor = '#020202';
          document.body.style.transition = 'background 0.5s';
      }, 100);
  });`
        },
        variants: [
            {
                id: "v1",
                name: "Variant 1",
                code: {
                    html: `<div class="universal-wrapper">
          <svg style="position: absolute; width: 0; height: 0;">
              <defs>
                  <filter id="chrono-distort">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                      <feColorMatrix in="blur" mode="matrix" values="1.2 0 0 0 0  0 1.2 0 0 0  0 0 1.5 0 0  0 0 0 1 0" />
                  </filter>
              </defs>
          </svg>
      
          <button class="chronos-btn" id="chronos-core">
              <div class="time-stream">
                  <div class="wave w1"></div>
                  <div class="wave w2"></div>
                  <div class="wave w3"></div>
              </div>
      
              <div class="crystal-core"></div>
      
              <div class="chrono-text">
                  <span class="word-reveal" data-alt="TIME STOPPED">CHRONOS ENGINE</span>
              </div>
      
              <div class="stasis-field"></div>
          </button>
      </div>`,
                    css: `:root {
          --stasis-speed: 1s;
          --chrono-glow: #00e5ff;
          --deep-void: #0a0a0a;
      }
      
      .universal-wrapper {
          width: 100%; height: 100vh;
          display: flex; justify-content: center; align-items: center;
          background: #020202; perspective: 1500px;
      }
      
      .chronos-btn {
          position: relative;
          width: 340px; height: 95px;
          background: var(--deep-void);
          border: 1px solid rgba(0, 229, 255, 0.2);
          border-radius: 4px; /* Sharp industrial finish */
          cursor: pointer; overflow: hidden;
          transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
      }
      
      /* 1. Time Stream: Animated Waves */
      .time-stream {
          position: absolute; inset: 0;
          filter: url(#chrono-distort);
          opacity: 0.5;
      }
      
      .wave {
          position: absolute; inset: -50%;
          border: 2px solid var(--chrono-glow);
          border-radius: 40%;
          animation: flow var(--stasis-speed) infinite linear;
      }
      
      .w1 { opacity: 0.3; animation-duration: 8s; }
      .w2 { opacity: 0.2; animation-duration: 12s; animation-delay: -2s; }
      .w3 { opacity: 0.1; animation-duration: 15s; animation-delay: -5s; }
      
      /* 2. Crystal Core: Inner Reflection */
      .crystal-core {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(0, 229, 255, 0.1), transparent 50%);
          z-index: 2; pointer-events: none;
      }
      
      /* 3. Text Reveal: Letter Spacing + Opacity */
      .chrono-text {
          position: relative; z-index: 10;
          color: #fff; font-weight: 900; letter-spacing: 5px;
          text-transform: uppercase; font-size: 1rem;
          transition: 0.5s;
      }
      
      .word-reveal {
          display: block;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
      }
      
      /* 4. Hover State: THE FREEZE */
      .chronos-btn:hover {
          --stasis-speed: 50s; /* Extreme slowdown */
          border-color: var(--chrono-glow);
          box-shadow: 0 0 50px rgba(0, 229, 255, 0.3), inset 0 0 20px rgba(0, 229, 255, 0.2);
          transform: translateY(-10px) scale(1.05);
      }
      
      .chronos-btn:hover .time-stream {
          opacity: 1;
          filter: saturate(2) brightness(1.5); /* Colors pop when frozen */
      }
      
      .chronos-btn:hover .word-reveal {
          letter-spacing: 15px;
          color: var(--chrono-glow);
          text-shadow: 0 0 20px var(--chrono-glow);
      }
      
      /* 5. Stasis Field: Outer Distortion */
      .stasis-field {
          position: absolute; inset: 0;
          background: radial-gradient(circle at var(--mx, 50%) var(--my, 50%), 
                      rgba(0, 229, 255, 0.2) 0%, transparent 60%);
          z-index: 5; mix-blend-mode: screen;
      }
      
      @keyframes flow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
      }`,
                    js: `const chronos = document.getElementById('chronos-core');
      const textElement = chronos.querySelector('.word-reveal');
      const originalText = textElement.innerText;
      const altText = textElement.getAttribute('data-alt');
      
      chronos.addEventListener('mousemove', (e) => {
          const rect = chronos.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
      
          // Follow light
          chronos.style.setProperty('--mx', \`\${x}px\`);
          chronos.style.setProperty('--my', \`\${y}px\`);
      
          // High-Precision 3D Tilt
          const rotateX = ((y / rect.height) - 0.5) * -20;
          const rotateY = ((x / rect.width) - 0.5) * 20;
          
          chronos.style.transform = \`translateY(-10px) scale(1.05) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`;
      });
      
      // Text Morph on Stasis
      chronos.addEventListener('mouseenter', () => {
          setTimeout(() => {
              textElement.style.opacity = '0';
              textElement.style.transform = 'scale(1.2) blur(10px)';
              
              setTimeout(() => {
                  textElement.innerText = altText;
                  textElement.style.opacity = '1';
                  textElement.style.transform = 'scale(1) blur(0px)';
              }, 300);
          }, 200);
      });
      
      chronos.addEventListener('mouseleave', () => {
          textElement.innerText = originalText;
          chronos.style.transform = \`translateY(0) scale(1) rotateX(0deg) rotateY(0deg)\`;
      });
      
      // Click: Time Shatter (Glitch)
      chronos.addEventListener('mousedown', () => {
          chronos.style.filter = 'invert(1) hue-rotate(180deg)';
          setTimeout(() => {
              chronos.style.filter = 'none';
          }, 150);
      });`
                }
            },
            {
                id: "v2",
                name: "Variant 2",
                code: {
                    html: `<div class="universal-wrapper">
          <button class="nuclear-btn" id="nuclear-core">
              <div class="core-plasma"></div>
              
              <div class="noise-overlay"></div>
              
              <div class="warning-bars">
                  <span class="bar"></span>
                  <span class="bar"></span>
              </div>
      
              <div class="text-container">
                  <span class="status-text">STABLE CORE</span>
                  <span class="action-text">INITIATE MELTDOWN</span>
              </div>
      
              <div class="heat-haze"></div>
          </button>
      </div>`,
                    css: `:root {
          --warning-red: #ff3c00;
          --plasma-yellow: #ffcc00;
          --transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .universal-wrapper {
          width: 100%; height: 100vh;
          display: flex; justify-content: center; align-items: center;
          background: #050505;
      }
      
      .nuclear-btn {
          position: relative;
          width: 320px; height: 85px;
          background: #111;
          border: 2px solid #222;
          border-radius: 0; /* Industrial sharp edges */
          cursor: pointer; overflow: hidden;
          transition: var(--transition);
      }
      
      /* 1. Core Plasma: Liquid Energy */
      .core-plasma {
          position: absolute; inset: 0;
          background: linear-gradient(90deg, #111, var(--plasma-yellow), #111);
          background-size: 200% 100%;
          opacity: 0.1;
          transition: var(--transition);
      }
      
      /* 2. Noise Overlay: Gives a "Hardware" feel */
      .noise-overlay {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.05;
          mix-blend-mode: overlay;
          pointer-events: none;
      }
      
      /* 3. Text Logic: Emergency Reveal */
      .text-container {
          position: relative; z-index: 10;
          display: flex; flex-direction: column;
          align-items: center;
          transition: transform 0.5s cubic-bezier(0.8, 0, 0.2, 1);
      }
      
      .status-text, .action-text {
          height: 85px; line-height: 85px;
          font-weight: 900; letter-spacing: 5px;
          text-transform: uppercase; color: #fff;
      }
      
      .action-text { color: var(--warning-red); opacity: 0; filter: blur(10px); }
      
      /* 4. Meltdown State (Hover) */
      .nuclear-btn:hover {
          border-color: var(--warning-red);
          box-shadow: 0 0 40px rgba(255, 60, 0, 0.4);
          transform: scale(1.05);
      }
      
      .nuclear-btn:hover .core-plasma {
          opacity: 0.6;
          animation: plasma-surge 0.8s infinite linear;
          background: linear-gradient(90deg, #000, var(--warning-red), #000);
          background-size: 200% 100%;
      }
      
      .nuclear-btn:hover .text-container {
          transform: translateY(-85px);
      }
      
      .nuclear-btn:hover .action-text {
          opacity: 1; filter: blur(0);
          text-shadow: 0 0 15px var(--warning-red);
      }
      
      /* 5. Warning Bars: Industrial Alert */
      .warning-bars .bar {
          position: absolute; left: 0; width: 100%; height: 4px;
          background: repeating-linear-gradient(45deg, #000, #000 10px, var(--plasma-yellow) 10px, var(--plasma-yellow) 20px);
          transition: var(--transition);
      }
      .warning-bars .bar:first-child { top: 0; }
      .warning-bars .bar:last-child { bottom: 0; }
      
      .nuclear-btn:hover .bar {
          background: repeating-linear-gradient(45deg, #000, #000 10px, var(--warning-red) 10px, var(--warning-red) 20px);
          animation: bar-slide 0.5s infinite linear;
      }
      
      @keyframes plasma-surge {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
      }
      
      @keyframes bar-slide {
          from { background-position: 0 0; }
          to { background-position: 28px 0; }
      }`,
                    js: `const btn = document.getElementById('nuclear-core');
      
      btn.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
      
          // Intensity increase based on mouse closeness to center
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const dist = Math.hypot(x - centerX, y - centerY);
          const intensity = Math.max(0, 1 - dist / 200);
      
          // Dynamic Jitter Effect (Vibration)
          if (intensity > 0.5) {
              const jitterX = (Math.random() - 0.5) * intensity * 5;
              const jitterY = (Math.random() - 0.5) * intensity * 5;
              btn.style.transform = \`scale(1.05) translate(\${jitterX}px, \${jitterY}px)\`;
          }
      
          // Light tracking
          btn.style.background = \`radial-gradient(circle at \${x}px \${y}px, #222 0%, #111 70%)\`;
      });
      
      btn.addEventListener('mouseleave', () => {
          btn.style.transform = \`scale(1) translate(0, 0)\`;
          btn.style.background = \`#111\`;
      });
      
      // Click: Total Meltdown (Screen Shake)
      btn.addEventListener('mousedown', () => {
          btn.style.transform = 'scale(0.9) rotate(2deg)';
          document.body.style.animation = 'shake 0.2s infinite';
          setTimeout(() => {
              document.body.style.animation = 'none';
          }, 400);
      });`
                }
            },
            {
                id: "v3",
                name: "Variant 3",
                code: {
                    html: `<div class="universal-wrapper">
          <button class="hologram-rig" id="holo-trigger">
              <div class="projector-base">
                  <div class="lens-glow"></div>
              </div>
              
              <div class="hologram-display">
                  <div class="scanlines"></div>
                  <div class="glitch-layers">
                      <span>PROJECTING...</span>
                      <span>PROJECTING...</span>
                      <span>PROJECTING...</span>
                  </div>
                  <div class="data-bits"></div>
              </div>
      
              <div class="beam-container">
                  <div class="beam"></div>
              </div>
          </button>
      </div>`,
                    css: `:root {
          --holo-cyan: #00f2ff;
          --holo-blue: #0066ff;
      }
      
      .universal-wrapper {
          width: 100%; height: 100vh;
          display: flex; justify-content: center; align-items: center;
          perspective: 2000px; background: #010101;
      }
      
      .hologram-rig {
          position: relative;
          width: 300px; height: 100px;
          background: transparent; border: none;
          cursor: pointer; transform-style: preserve-3d;
      }
      
      /* 1. The Projector (The "Real" Object) */
      .projector-base {
          position: absolute; bottom: 0; width: 100%; height: 10px;
          background: #111; border-radius: 5px;
          box-shadow: 0 0 20px rgba(0,0,0,1);
          transform: translateZ(-20px);
      }
      
      .lens-glow {
          position: absolute; top: -5px; left: 50%;
          width: 60%; height: 10px; background: var(--holo-cyan);
          transform: translateX(-50%); filter: blur(8px);
          opacity: 0.5;
      }
      
      /* 2. The Hologram (Floating in Z-Space) */
      .hologram-display {
          position: absolute; bottom: 30px; left: 0; width: 100%; height: 70px;
          background: rgba(0, 242, 255, 0.05);
          border: 1px solid rgba(0, 242, 255, 0.2);
          display: flex; justify-content: center; align-items: center;
          backdrop-filter: blur(2px);
          transform: translateZ(100px); /* Massive depth leap */
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow: hidden;
      }
      
      /* 3. Scanlines & Glitch Effect */
      .scanlines {
          position: absolute; inset: 0;
          background: repeating-linear-gradient(
              0deg, transparent, transparent 2px, rgba(0, 242, 255, 0.1) 3px
          );
          animation: scan 4s linear infinite;
      }
      
      .glitch-layers {
          position: relative; color: #fff;
          font-weight: 900; letter-spacing: 8px; font-size: 1rem;
      }
      
      .glitch-layers span {
          position: absolute; top: 0; left: 0; width: 100%;
          opacity: 0.8;
      }
      
      /* 4. Beam of Light (Connecting Base to Display) */
      .beam-container {
          position: absolute; bottom: 10px; left: 50%;
          width: 100%; height: 150px;
          transform: translateX(-50%) translateZ(0);
          pointer-events: none;
      }
      
      .beam {
          width: 100%; height: 100%;
          background: conic-gradient(from 180deg at 50% 100%, 
                      transparent 150deg, var(--holo-cyan) 180deg, transparent 210deg);
          opacity: 0.1; filter: blur(15px);
          transform-origin: bottom;
      }
      
      /* 5. Hover State: Synchronization */
      .hologram-rig:hover .hologram-display {
          transform: translateZ(150px) translateY(-20px) rotateX(-5deg);
          background: rgba(0, 242, 255, 0.15);
          border-color: var(--holo-cyan);
          box-shadow: 0 0 30px rgba(0, 242, 255, 0.3);
      }
      
      .hologram-rig:hover .beam {
          opacity: 0.3; transform: scaleX(1.2);
      }
      
      @keyframes scan {
          from { background-position: 0 0; }
          to { background-position: 0 100%; }
      }`,
                    js: `const rig = document.getElementById('holo-trigger');
      const display = rig.querySelector('.hologram-display');
      
      rig.addEventListener('mousemove', (e) => {
          const rect = rig.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
      
          // Perspective Tilt
          const rY = ((x / rect.width) - 0.5) * 45;
          const rX = ((y / rect.height) - 0.5) * -45;
      
          // Apply tilt to the whole rig
          rig.style.transform = \`rotateY(\${rY}deg) rotateX(\${rX}deg)\`;
      
          // Interactive Jitter on high-speed move
          if(Math.abs(rY) > 15) {
              display.style.filter = \`hue-rotate(\${rY}deg) brightness(1.2)\`;
              display.style.transform = \`translateZ(160px) translateX(\${rY/5}px) skewX(\${rY/10}deg)\`;
          }
      });
      
      rig.addEventListener('mouseleave', () => {
          rig.style.transform = \`rotateY(0deg) rotateX(0deg)\`;
          display.style.transform = \`translateZ(100px)\`;
          display.style.filter = \`none\`;
          rig.style.transition = "all 0.8s cubic-bezier(0.2, 1, 0.2, 1)";
      });
      
      // Click: Projection Flash
      rig.addEventListener('mousedown', () => {
          display.style.opacity = '0.5';
          setTimeout(() => display.style.opacity = '1', 50);
      });`
                }
            },
            {
                id: "v4",
                name: "Variant 4",
                code: {
                    html: `<div class="universal-wrapper">
          <button class="malware-rig" id="glitch-trigger">
              <div class="base-unit">
                  <div class="spark-fx"></div>
              </div>
              
              <div class="glitch-display">
                  <div class="glitch-layer r">ERROR_OVERRIDE</div>
                  <div class="glitch-layer g">ERROR_OVERRIDE</div>
                  <div class="glitch-layer b">ERROR_OVERRIDE</div>
                  
                  <div class="noise-grid"></div>
                  <div class="critical-warning">UNSTABLE_CORE</div>
              </div>
      
              <div class="flicker-beam"></div>
          </button>
      </div>`,
                    css: `:root {
          --glitch-red: #ff003c;
          --glitch-cyan: #00f2ff;
      }
      
      .universal-wrapper {
          width: 100%; height: 100vh;
          display: flex; justify-content: center; align-items: center;
          perspective: 2500px; background: #030000;
      }
      
      .malware-rig {
          position: relative;
          width: 320px; height: 120px;
          background: transparent; border: none;
          cursor: crosshair; transform-style: preserve-3d;
      }
      
      /* 1. The Glitch Display (Floating Interface) */
      .glitch-display {
          position: absolute; bottom: 40px; width: 100%; height: 80px;
          background: rgba(255, 0, 60, 0.05);
          border: 1px solid rgba(255, 0, 60, 0.2);
          display: flex; flex-direction: column;
          justify-content: center; align-items: center;
          transform: translateZ(120px);
          transition: transform 0.2s;
          overflow: hidden;
      }
      
      /* 2. RGB Split Effect */
      .glitch-layer {
          position: absolute;
          font-weight: 950; letter-spacing: 10px; font-size: 1.2rem;
          color: white; mix-blend-mode: screen;
      }
      
      .glitch-layer.r { color: var(--glitch-red); transform: translateX(2px); animation: glitch-anim 0.2s infinite; }
      .glitch-layer.g { color: #00ff00; transform: translateX(-2px); animation: glitch-anim 0.3s infinite reverse; }
      .glitch-layer.b { color: var(--glitch-cyan); transform: translateY(1px); }
      
      /* 3. Random Noise Grid */
      .noise-grid {
          position: absolute; inset: 0;
          background: repeating-conic-gradient(from 0deg, #ff003c 0deg 10deg, transparent 10deg 20deg) 0 0 / 5px 5px;
          opacity: 0.1;
          z-index: -1;
      }
      
      /* 4. Critical Warning Text */
      .critical-warning {
          position: absolute; bottom: 5px;
          font-size: 0.6rem; color: var(--glitch-red);
          font-family: monospace; letter-spacing: 2px;
          animation: flash 0.1s infinite;
      }
      
      /* 5. Hover Mechanics: Total Instability */
      .malware-rig:hover .glitch-display {
          transform: translateZ(180px) rotateX(10deg) skewX(-15deg);
          border-color: var(--glitch-red);
          box-shadow: 0 0 40px rgba(255, 0, 60, 0.4);
      }
      
      .malware-rig:hover .flicker-beam {
          opacity: 0.6;
          animation: beam-jitter 0.05s infinite;
      }
      
      /* 6. High-End Keyframes */
      @keyframes glitch-anim {
          0% { clip-path: inset(10% 0 30% 0); transform: translate(-5px); }
          20% { clip-path: inset(60% 0 10% 0); transform: translate(5px); }
          40% { clip-path: inset(40% 0 50% 0); transform: translate(-2px); }
          60% { clip-path: inset(80% 0 5% 0); transform: translate(2px); }
          100% { clip-path: inset(10% 0 30% 0); transform: translate(-5px); }
      }
      
      @keyframes flash {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
      }
      
      @keyframes beam-jitter {
          0% { transform: scaleX(1) translateX(0); }
          50% { transform: scaleX(1.5) translateX(5px); }
          100% { transform: scaleX(0.8) translateX(-5px); }
      }`,
                    js: `const trigger = document.getElementById('glitch-trigger');
      const layers = document.querySelectorAll('.glitch-layer');
      
      trigger.addEventListener('mousemove', (e) => {
          const rect = trigger.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
      
          // Aggressive Tilt
          const rY = ((x / rect.width) - 0.5) * 60;
          const rX = ((y / rect.height) - 0.5) * -60;
      
          trigger.style.transform = \`rotateY(\${rY}deg) rotateX(\${rX}deg)\`;
      
          // Random Character Corruption
          if (Math.random() > 0.8) {
              const chars = "ABC0123\$#@%";
              layers.forEach(l => {
                  const original = "ERROR_OVERRIDE";
                  const corrupted = original.split('').map(c => 
                      Math.random() > 0.9 ? chars[Math.floor(Math.random() * chars.length)] : c
                  ).join('');
                  l.innerText = corrupted;
              });
          }
      });
      
      trigger.addEventListener('mouseleave', () => {
          trigger.style.transform = \`rotateY(0deg) rotateX(0deg)\`;
          layers.forEach(l => l.innerText = "ERROR_OVERRIDE");
      });
      
      // Click: System Crash Visual
      trigger.addEventListener('mousedown', () => {
          trigger.style.filter = "contrast(500%) invert(1)";
          setTimeout(() => {
              trigger.style.filter = "none";
          }, 100);
      });`
                }
            }
        ]
    },
    {
        id: "comp-44o9fd",
        name: "New Component",
        category: "Buttons",
        tags: ["hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<div class="universal-wrapper">
      <svg style="position: absolute; width: 0; height: 0;" class="bio-shader" select-none>
          <defs>
              <filter id="bio-membrane-shader">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
                  
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15" result="membrane" />
                  
                  <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" result="noise" />
                  <feDisplacementMap in="membrane" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
              </filter>
          </defs>
      </svg>
  
      <div class="bio-container">
          <button class="bio-cell" id="bio-subject">
              <div class="cytoplasm"></div>
              <div class="nucleus"></div>
              
              <div class="text-core">
                  <span class="text-char" style="--i:0">I</span>
                  <span class="text-char" style="--i:1">N</span>
                  <span class="text-char" style="--i:2">I</span>
                  <span class="text-char" style="--i:3">T</span>
                  <span class="text-char" style="--i:4">I</span>
                  <span class="text-char" style="--i:5">A</span>
                  <span class="text-char" style="--i:6">T</span>
                  <span class="text-char" style="--i:7">E</span>
              </div>
          </div>
      </div>
  </div>`,
            css: `:root {
      --wet-cyan: #00ffff;
      --deep-bio-purple: #1e003c;
      --transition-slow: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  }
  
  .universal-wrapper {
      width: 100%; height: 100vh;
      display: flex; justify-content: center; align-items: center;
      background: #020005; overflow: hidden; perspective: 1000px;
  }
  
  .bio-container {
      position: relative;
      filter: url(#bio-membrane-shader); /* Applying Physics Engine */
  }
  
  .bio-cell {
      position: relative;
      width: 320px; height: 90px;
      background: transparent; border: none;
      cursor: none; /* Pointer is replaced by JS Detection */
      transition: var(--transition-slow);
  }
  
  /* 1. Cytoplasm: The Jelly-like substance */
  .cytoplasm {
      position: absolute; inset: -20px;
      background: linear-gradient(135deg, var(--wet-cyan), var(--deep-bio-purple));
      border-radius: 50px;
      opacity: 0.9;
      transition: var(--transition-slow);
  }
  
  /* 2. Nucleus: The Dark center for contrast */
  .nucleus {
      position: absolute; inset: 20px;
      background: rgba(0,0,0,0.8);
      border-radius: 40px;
      filter: blur(5px);
      transition: var(--transition-slow);
  }
  
  /* 3. Quantum Cell-Splitting Text Logic (Letter by Letter Drift) */
  .text-core {
      position: relative; z-index: 10;
      display: flex; gap: 5px; justify-content: center;
      pointer-events: none;
  }
  
  .text-char {
      color: #fff; font-weight: 900; letter-spacing: 5px;
      text-transform: uppercase; font-size: 1rem;
      white-space: nowrap;
      text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
      transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1), 
                  opacity 0.6s ease;
  }
  
  /* 4. Biological Interactions (CSS Fallback) */
  .bio-cell:hover .cytoplasm {
      inset: -30px;
      transform: scale(1.1);
  }
  
  .bio-cell:active .cytoplasm {
      transform: scale(0.95);
      background: #fff;
  }`,
            js: `const cell = document.getElementById('bio-subject');
  const chars = cell.querySelectorAll('.text-char');
  const transitionCore = '0.8s cubic-bezier(0.19, 1, 0.22, 1)';
  
  // Dynamic Surface Tension Simulation
  window.addEventListener('mousemove', (e) => {
      const rect = cell.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      // Detect Mouse Proximity (Biological Awareness)
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const dist = Math.hypot(x - centerX, y - centerY);
      const detectionRadius = 150; // Senses mouse from 150px away
  
      // 3D Perspective Tilt with High Inertia
      const rX = ((y / rect.height) - 0.5) * -40;
      const rY = ((x / rect.width) - 0.5) * 40;
  
      // Fluid Distort (Shape changes dynamically)
      const dx = (x - centerX) * 0.15;
      const dy = (y - centerY) * 0.15;
  
      if (dist < detectionRadius) {
          // High Intensity State (Avoidance behavior)
          cell.style.transform = \`translate(\${dx}px, \${dy}px) rotateX(\${rX}deg) rotateY(\${rY}deg) scale(1.05)\`;
          cell.style.transition = 'none'; // Physics calculated in real-time
  
          // Quantum Text Drift (Characters move dynamically away from cursor)
          chars.forEach((char, idx) => {
              const charRect = char.getBoundingClientRect();
              const charCenterX = charRect.left + charRect.width / 2;
              const charCenterY = charRect.top + charRect.height / 2;
              
              // Text to mouse distance (per character logic)
              const textToMouseX = (e.clientX - charCenterX) * -0.05;
              const textToMouseY = (e.clientY - charCenterY) * -0.05;
              
              // Add slight per-character offset based on index (Helix split)
              const indexOffset = Math.sin(idx * 0.5) * 5; 
              
              char.style.transform = \`translate(\${textToMouseX}px, \${textToMouseY + indexOffset}px) scale(\${1 + intensity/100})\`;
              char.style.filter = \`blur(\${intensity/10}px)\`;
          });
      } else {
          // Calm State (Slow drift back)
          cell.style.transform = \`translate(0, 0) rotateX(0deg) rotateY(0deg) scale(1)\`;
          cell.style.transition = transitionCore;
          chars.forEach(char => {
              char.style.transform = \`translate(0, 0) scale(1)\`;
              char.style.filter = 'blur(0)';
              char.style.transition = transitionCore;
          });
      }
  });
  
  cell.addEventListener('mousedown', () => {
      cell.style.filter = "invert(1) contrast(500%)";
      setTimeout(() => cell.style.filter = "none", 100);
  });`
        },
        variants: [

        ]
    },
    {
        id: "comp-h2n807",
        name: "New Component",
        category: "Buttons",
        tags: ["hover", "3d"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<div class="universal-wrapper">
      <button class="tachyon-btn" id="gpu-trigger">
          <div id="canvas-container"></div>
          <span class="btn-text">ACTIVATE SHIELD</span>
      </button>
  </div>`,
            css: `:root {
      --shield-cyan: #00ffff;
  }
  
  .universal-wrapper {
      width: 100%; height: 100vh;
      display: flex; justify-content: center; align-items: center;
      background: #000; overflow: hidden; perspective: 1000px;
  }
  
  .tachyon-btn {
      position: relative;
      width: 300px; height: 90px;
      background: transparent; border: none;
      border-radius: 50px; cursor: pointer;
      transform-style: preserve-3d;
      transition: transform 0.2s ease;
  }
  
  /* Three.js Canvas Container */
  #canvas-container {
      position: absolute; inset: 0;
      width: 100%; height: 100%;
      border-radius: 50px;
      overflow: hidden;
      z-index: 1;
      mask-image: radial-gradient(white, black); /* For sharp edges */
  }
  
  /* 3D Text Logic */
  .btn-text {
      position: relative; z-index: 10;
      color: #fff; font-weight: 900; letter-spacing: 6px;
      text-transform: uppercase; font-size: 1rem;
      text-shadow: 0 0 15px rgba(0, 255, 255, 0.8);
      transform: translateZ(50px); /* Massive depth */
      transition: 0.5s ease;
  }
  
  .tachyon-btn:hover {
      box-shadow: 0 0 50px rgba(0, 255, 255, 0.3);
  }
  
  .tachyon-btn:hover .btn-text {
      letter-spacing: 12px;
      filter: blur(1px);
  }`,
            js: `// --- SHADER DEFINITIONS (GLSL) ---
  // 1. Vertex Shader (Handles geometry displacement)
  const vertexShader = \`
      varying vec2 vUv;
      varying float vDistortion;
      uniform float uTime;
      uniform vec2 uMouse;
  
      // Classic Perlin Noise function
      vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
      vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
      vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}
  
      float cnoise(vec3 P){
          vec3 i0 = floor(P), i1 = i0 + vec3(1.0);
          vec3 f0 = frac(P), f1 = f0 - vec3(1.0);
          f0 = fade(f0); f1 = fade(f1);
          vec4 j = vec4(0.0, 1.0, 0.0, 1.0);
          vec4 p0 = i0.z + j, p1 = i1.z + j;
          p0 = p0 + i0.y + j.xyxy; p1 = p1 + i1.y + j.xyxy;
          p0 = p0 + i0.x + j.xxzz; p1 = p1 + i1.x + j.xxzz;
          p0 = permute(permute(p0)) + i0.z; p1 = permute(permute(p1)) + i1.z;
          p0 = permute(p0); p1 = permute(p1);
          vec4 a = frac(mod(p0 * 3.14159, 1.0) * 2.0 - 1.0);
          vec4 b = frac(mod(p1 * 3.14159, 1.0) * 2.0 - 1.0);
          vec4 c = frac(mod(p0 * 1.57079, 1.0) * 2.0 - 1.0);
          vec4 d = frac(mod(p1 * 0.78539, 1.0) * 2.0 - 1.0);
          return mix(mix(a,b,f0.x), mix(c,d,f1.x), f0.y);
      }
  
      void main() {
          vUv = uv;
          
          // Calculate dynamic noise based on time
          float noise = cnoise(vec3(uv * 3.0, uTime * 0.2));
          
          // Calculate distance to mouse for interaction distortion
          float dist = distance(uv, uMouse);
          float interaction = 1.0 - smoothstep(0.0, 0.5, dist);
          
          // Final displacement: noise + mouse pull
          vDistortion = noise * (1.0 + interaction * 2.0);
          
          vec3 newPosition = position + normal * vDistortion * 5.0;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
  \`;
  
  // 2. Fragment Shader (Handles pixel coloring and chromatic aberration)
  const fragmentShader = \`
      varying vec2 vUv;
      varying float vDistortion;
      uniform float uTime;
  
      void main() {
          // Base plasma colors
          vec3 colorCyan = vec3(0.0, 1.0, 1.0);
          vec3 colorPurple = vec3(0.5, 0.0, 1.0);
          vec3 colorBlack = vec3(0.0);
  
          // RGB Split (Chromatic Aberration) based on distortion
          float rOffset = vDistortion * 0.02;
          float gOffset = vDistortion * 0.01;
          float bOffset = vDistortion * 0.03;
  
          float r = texture2D(uTime * colorCyan.r, vUv + rOffset).r;
          float g = texture2D(uTime * colorPurple.g, vUv + gOffset).g;
          float b = texture2D(uTime * colorBlack.b, vUv + bOffset).b;
  
          // Final composite color
          vec3 finalColor = vec3(r, g, b);
          
          // Glow effect
          finalColor += colorCyan * (vDistortion * 0.5);
  
          gl_FragColor = vec4(finalColor, 1.0);
      }
  \`;
  
  // --- THREE.JS SETUP ---
  const container = document.getElementById('canvas-container');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 300 / 90, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(300, 90);
  container.appendChild(renderer.domElement);
  
  // Create geometry (Plane with many segments for smooth displacement)
  const geometry = new THREE.PlaneGeometry(300, 90, 64, 64);
  
  // Define Uniforms (Variables passed to Shaders)
  const uniforms = {
      uTime: { value: 0.0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) }
  };
  
  // Create Shader Material
  const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      wireframe: false, // Turn true to see the underlying physics mesh
  });
  
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  camera.position.z = 150;
  
  // Mouse tracking
  const btn = document.getElementById('gpu-trigger');
  btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height; // Normalize and invert Y
      uniforms.uMouse.value.set(x, y);
  
      // 3D Tilt
      const rX = ((y - 0.5) * 30);
      const rY = ((x - 0.5) * 30);
      btn.style.transform = \`rotateX(\${rX}deg) rotateY(\${rY}deg) scale(1.05)\`;
  });
  
  btn.addEventListener('mouseleave', () => {
      btn.style.transform = \`rotateX(0deg) rotateY(0deg) scale(1)\`;
      uniforms.uMouse.value.set(0.5, 0.5); // Reset mouse distortion
  });
  
  // Animation Loop
  const clock = new THREE.Clock();
  const animate = () => {
      requestAnimationFrame(animate);
      uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
  };
  
  animate();`
        },
        variants: [

        ]
    },
    {
        id: "comp-gcaj06",
        name: "New Component",
        category: "Buttons",
        tags: ["glow", "hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Quantum Particle Button</title>
      
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
      
      <style>
          /* 2. CSS (The Style Engine) */
          :root {
              --bg-color: #050505;
              --accent: #00f2ff;
          }
  
          body, html {
              margin: 0; padding: 0;
              width: 100%; height: 100%;
              background-color: var(--bg-color);
              overflow: hidden;
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
  
          .canvas-wrapper {
              position: absolute; inset: 0;
              display: flex; justify-content: center; align-items: center;
          }
  
          #webgl-engine {
              position: absolute; top: 0; left: 0;
              pointer-events: none; /* Interaction logic is on the button */
          }
  
          .quantum-btn {
              position: relative;
              width: 320px; height: 90px;
              background: transparent;
              border: 2px solid rgba(0, 242, 255, 0.3);
              border-radius: 4px;
              cursor: pointer;
              z-index: 10;
              overflow: hidden;
              transition: border 0.5s ease;
          }
  
          .btn-text {
              color: #fff;
              font-weight: 900;
              font-size: 1.1rem;
              letter-spacing: 8px;
              text-transform: uppercase;
              position: relative;
              z-index: 15;
              pointer-events: none;
              mix-blend-mode: difference;
          }
  
          .quantum-btn:hover {
              border-color: var(--accent);
          }
  
          .glow-aura {
              position: absolute; inset: 0;
              background: radial-gradient(circle, var(--accent) 0%, transparent 70%);
              opacity: 0; transition: opacity 0.5s;
              pointer-events: none;
          }
  
          .quantum-btn:hover .glow-aura { opacity: 0.2; }
      </style>
  </head>
  <body>
  
      <div class="canvas-wrapper">
          <canvas id="webgl-engine"></canvas>
          <button class="quantum-btn" id="btn-trigger">
              <span class="btn-text">DISSOLVE</span>
              <div class="glow-aura"></div>
          </button>
      </div>
  
      <script>
          // 3. JS (The Physics Engine)
          const canvas = document.getElementById('webgl-engine');
          const trigger = document.getElementById('btn-trigger');
          
          // Basic Setup
          const scene = new THREE.Scene();
          const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
          const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
          renderer.setSize(window.innerWidth, window.innerHeight);
          
          // --- Particle Logic ---
          const particleCount = 5000;
          const positions = new Float32Array(particleCount * 3);
          const originalPositions = new Float32Array(particleCount * 3);
          
          // Create Particle Geometry in a Button Shape
          for (let i = 0; i < particleCount; i++) {
              // Randomly distributing particles within the button area
              const x = (Math.random() - 0.5) * 320;
              const y = (Math.random() - 0.5) * 90;
              const z = (Math.random() - 0.5) * 20;
  
              positions[i * 3] = x;
              positions[i * 3 + 1] = y;
              positions[i * 3 + 2] = z;
  
              originalPositions[i * 3] = x;
              originalPositions[i * 3 + 1] = y;
              originalPositions[i * 3 + 2] = z;
          }
  
          const geometry = new THREE.BufferGeometry();
          geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  
          const material = new THREE.PointsMaterial({
              color: 0x00f2ff,
              size: 1.5,
              transparent: true,
              opacity: 0.8,
              blending: THREE.AdditiveBlending
          });
  
          const particleSystem = new THREE.Points(geometry, material);
          scene.add(particleSystem);
          camera.position.z = 300;
  
          // --- Interaction Logic ---
          let isHovered = false;
  
          trigger.addEventListener('mouseenter', () => {
              isHovered = true;
              // GSAP Dissolve Animation
              gsap.to(material, { opacity: 1, duration: 0.5 });
          });
  
          trigger.addEventListener('mouseleave', () => {
              isHovered = false;
              // Particles return to home
              gsap.to(material, { opacity: 0.8, duration: 0.5 });
          });
  
          // Frame Loop
          function animate() {
              requestAnimationFrame(animate);
              
              const currentPositions = geometry.attributes.position.array;
              
              for (let i = 0; i < particleCount; i++) {
                  const i3 = i * 3;
  
                  if (isHovered) {
                      // Explode particles outwards
                      currentPositions[i3] += (Math.random() - 0.5) * 10;
                      currentPositions[i3+1] += (Math.random() - 0.5) * 10;
                      currentPositions[i3+2] += (Math.random() - 0.5) * 10;
                  } else {
                      // Smoothly pull particles back to original position
                      currentPositions[i3] += (originalPositions[i3] - currentPositions[i3]) * 0.1;
                      currentPositions[i3+1] += (originalPositions[i3+1] - currentPositions[i3+1]) * 0.1;
                      currentPositions[i3+2] += (originalPositions[i3+2] - currentPositions[i3+2]) * 0.1;
                  }
              }
              
              geometry.attributes.position.needsUpdate = true;
              renderer.render(scene, camera);
          }
  
          window.addEventListener('resize', () => {
              camera.aspect = window.innerWidth / window.innerHeight;
              camera.updateProjectionMatrix();
              renderer.setSize(window.innerWidth, window.innerHeight);
          });
  
          animate();
      </script>
  </body>
  </html>`,
            css: "",
            js: ""
        },
        variants: [

        ]
    },
    {
        id: "comp-jhwaln",
        name: "New Component",
        category: "Buttons",
        tags: ["hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Quantum Singularity Engine</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  </head>
  <body>
      <div id="ui-overlay">
          <button id="hyper-btn">
              <span class="label">CORE_ENGAGE</span>
              <div class="glitch-scanner"></div>
          </button>
      </div>
      <canvas id="stage"></canvas>
  </body>
  </html>`,
            css: `body, html { 
      margin: 0; padding: 0; width: 100%; height: 100%; 
      background: #000; overflow: hidden; 
  }
  
  #stage { 
      position: absolute; top: 0; left: 0; z-index: 1; 
  }
  
  #ui-overlay {
      position: absolute; inset: 0;
      display: flex; justify-content: center; align-items: center;
      z-index: 10; pointer-events: none;
  }
  
  #hyper-btn {
      position: relative;
      width: 350px; height: 110px;
      background: transparent; border: none;
      cursor: pointer; pointer-events: auto;
      display: flex; justify-content: center; align-items: center;
  }
  
  .label {
      color: #fff; font-family: 'Courier New', monospace;
      font-weight: 900; font-size: 1.4rem; letter-spacing: 15px;
      text-shadow: 0 0 20px rgba(0, 255, 255, 0.8);
      z-index: 20; transition: all 0.5s;
  }
  
  #hyper-btn:hover .label {
      letter-spacing: 25px;
      color: #00f2ff;
      transform: scale(1.1);
  }
  
  .glitch-scanner {
      position: absolute; width: 100%; height: 2px;
      background: #00f2ff; opacity: 0;
      box-shadow: 0 0 15px #00f2ff;
  }
  
  #hyper-btn:hover .glitch-scanner {
      animation: scan 1s infinite linear;
      opacity: 0.5;
  }
  
  @keyframes scan {
      0% { top: 0%; }
      100% { top: 100%; }
  }`,
            js: `// --- SHADER CODE (The "Mind-Blowing" Math) ---
  const vShader = \`
      varying vec2 vUv;
      varying float vNoise;
      uniform float uTime;
      uniform vec2 uMouse;
  
      // Perlin Noise Algorithm for Organic Movement
      float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
      vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
      vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
      float snoise(vec3 v){
          const vec2 C = vec2(1.0/6.0, 1.0/3.0);
          const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
          vec3 i  = floor(v + dot(v, C.yyy));
          vec3 x0 = v - i + dot(i, C.xxx);
          vec3 g = step(x0.yzx, x0.xyz);
          vec3 l = 1.0 - g;
          vec3 i1 = min(g.xyz, l.zxy);
          vec3 i2 = max(g.xyz, l.zxy);
          vec3 x1 = x0 - i1 + C.xxx;
          vec3 x2 = x0 - i2 + C.yyy;
          vec3 x3 = x0 - D.yyy;
          i = mod289(i);
          vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
          return 42.0 * dot(x3, x3); // Simplified for performance
      }
  
      void main() {
          vUv = uv;
          float noise = snoise(vec3(uv * 3.0, uTime * 0.4));
          vNoise = noise;
          
          vec3 newPos = position;
          float dist = distance(uv, uMouse);
          
          // The "Wormhole" Displacement logic
          if(dist < 0.5) {
              newPos.z += (0.5 - dist) * 100.0;
          }
          
          newPos.z += noise * 15.0;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
      }
  \`;
  
  const fShader = \`
      varying vec2 vUv;
      varying float vNoise;
      uniform float uTime;
  
      void main() {
          vec3 colorA = vec3(0.0, 0.9, 1.0); // Cyan
          vec3 colorB = vec3(0.6, 0.0, 1.0); // Purple
          
          vec3 finalColor = mix(colorA, colorB, vUv.y + vNoise);
          
          // Add "Glitch" RGB pulses
          float pulse = sin(uTime * 10.0) * 0.1;
          finalColor.r += pulse;
          
          gl_FragColor = vec4(finalColor, 0.85);
      }
  \`;
  
  // --- THREE.JS INITIALIZATION ---
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('stage'), antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  // Create the High-Density Neural Mesh
  const geometry = new THREE.PlaneGeometry(400, 150, 64, 64);
  const material = new THREE.ShaderMaterial({
      vertexShader: vShader,
      fragmentShader: fShader,
      uniforms: {
          uTime: { value: 0 },
          uMouse: { value: new THREE.Vector2(0.5, 0.5) }
      },
      transparent: true,
      side: THREE.DoubleSide
  });
  
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  camera.position.z = 250;
  
  // --- GSAP INTERACTION ENGINE ---
  const btn = document.getElementById('hyper-btn');
  
  btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      
      // Update Shader Uniforms
      material.uniforms.uMouse.value.set(x, y);
      
      // 3D Rotation with GSAP
      gsap.to(mesh.rotation, {
          y: (x - 0.5) * 1.2,
          x: (y - 0.5) * -1.2,
          duration: 0.5
      });
  });
  
  btn.addEventListener('mouseleave', () => {
      gsap.to(mesh.rotation, { x: 0, y: 0, duration: 1.5, ease: "elastic.out(1, 0.3)" });
      material.uniforms.uMouse.value.set(0.5, 0.5);
  });
  
  btn.addEventListener('mousedown', () => {
      gsap.to(camera.position, { z: 180, duration: 0.2 }); // Zoom into the void
      gsap.to(material.uniforms.uTime, { value: "+=10", duration: 0.5 }); // Speed up time
  });
  
  btn.addEventListener('mouseup', () => {
      gsap.to(camera.position, { z: 250, duration: 0.5, ease: "back.out" });
  });
  
  // Animation Loop
  function animate(time) {
      requestAnimationFrame(animate);
      material.uniforms.uTime.value = time * 0.002;
      renderer.render(scene, camera);
  }
  animate();
  
  window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
  });`
        },
        variants: [

        ]
    },
    {
        id: "comp-quwx54",
        name: "New Component",
        category: "Buttons",
        tags: ["hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Supernova Entanglement Engine</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/postprocessing/EffectComposer.js"></script>
  </head>
  <body>
      <div id="quantum-ui">
          <button id="singularity-trigger">
              <span class="void-text" data-text="COLLAPSE_REALITY">COLLAPSE_REALITY</span>
              <div class="energy-border"></div>
          </button>
      </div>
      <canvas id="void-canvas"></canvas>
  </body>
  </html>`,
            css: `body, html { margin: 0; background: #000; overflow: hidden; height: 100vh; cursor: crosshair; }
  
  #quantum-ui {
      position: absolute; inset: 0;
      display: flex; justify-content: center; align-items: center;
      z-index: 100; pointer-events: none;
  }
  
  #singularity-trigger {
      background: transparent; border: none; padding: 40px 80px;
      cursor: pointer; pointer-events: auto; position: relative;
  }
  
  .void-text {
      color: #fff; font-family: 'Orbitron', sans-serif;
      font-weight: 900; font-size: 1.5rem; letter-spacing: 10px;
      text-transform: uppercase; mix-blend-mode: difference;
      transition: letter-spacing 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  }
  
  #singularity-trigger:hover .void-text {
      letter-spacing: 25px;
      text-shadow: 0 0 30px #fff;
  }
  
  .energy-border {
      position: absolute; inset: 0;
      border: 1px solid rgba(255,255,255,0.1);
      transition: all 0.5s;
  }
  
  #singularity-trigger:hover .energy-border {
      border-color: #00f2ff;
      box-shadow: 0 0 50px rgba(0, 242, 255, 0.5);
      transform: scale(1.1) rotate(2deg);
  }`,
            js: `const canvas = document.getElementById('void-canvas');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  // --- 1. THE PARTICLE ACCRETION DISK ---
  const particleCount = 15000;
  const posArray = new Float32Array(particleCount * 3);
  const velocityArray = new Float32Array(particleCount * 3);
  
  for(let i=0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 1500;
      velocityArray[i] = (Math.random() - 0.5) * 2;
  }
  
  const partGeo = new THREE.BufferGeometry();
  partGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  
  const partMat = new THREE.PointsMaterial({
      size: 2,
      color: 0x00f2ff,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
  });
  
  const particles = new THREE.Points(partGeo, partMat);
  scene.add(particles);
  camera.position.z = 800;
  
  // --- 2. THE SINGULARITY MESH (THE BUTTON BODY) ---
  const meshGeo = new THREE.IcosahedronGeometry(120, 15);
  const meshMat = new THREE.MeshPhongMaterial({
      color: 0x000000,
      emissive: 0x5500ff,
      wireframe: true,
      shininess: 100
  });
  const singularityMesh = new THREE.Mesh(meshGeo, meshMat);
  scene.add(singularityMesh);
  
  const light = new THREE.PointLight(0xffffff, 2, 1000);
  scene.add(light);
  
  // --- 3. THE PHYSICS INTERACTION ---
  let mouseX = 0, mouseY = 0;
  let targetX = 0, targetY = 0;
  let isExploded = false;
  
  window.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX - window.innerWidth / 2);
      mouseY = (e.clientY - window.innerHeight / 2);
  });
  
  const btn = document.getElementById('singularity-trigger');
  
  btn.addEventListener('mouseenter', () => {
      gsap.to(partMat, { color: 0xff0055, size: 4, duration: 0.8 });
      gsap.to(singularityMesh.scale, { x: 1.5, y: 1.5, z: 1.5, duration: 0.5, ease: "expo.out" });
  });
  
  btn.addEventListener('mouseleave', () => {
      gsap.to(partMat, { color: 0x00f2ff, size: 2, duration: 0.8 });
      gsap.to(singularityMesh.scale, { x: 1, y: 1, z: 1, duration: 1, ease: "elastic.out(1, 0.3)" });
  });
  
  // THE SUPERNOVA CLICK
  btn.addEventListener('mousedown', () => {
      isExploded = true;
      gsap.to(singularityMesh.rotation, { y: "+=20", duration: 0.5, ease: "power4.in" });
      gsap.to(camera.position, { z: 400, duration: 0.3 });
      
      // Reset after 1 second
      setTimeout(() => {
          isExploded = false;
          gsap.to(camera.position, { z: 800, duration: 1.5, ease: "expo.out" });
      }, 1000);
  });
  
  // --- 4. THE CORE LOOP (The Unthinkable Part) ---
  function animate() {
      requestAnimationFrame(animate);
  
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
  
      // Singularity Movement
      singularityMesh.rotation.y += 0.01;
      singularityMesh.rotation.x += 0.005;
      singularityMesh.position.x = targetX * 0.5;
      singularityMesh.position.y = -targetY * 0.5;
  
      // Particle Physics Logic
      const positions = partGeo.attributes.position.array;
      for(let i=0; i < particleCount; i++) {
          const i3 = i * 3;
          
          if(isExploded) {
              // Supernova: Particles fly away
              positions[i3] += (positions[i3] - singularityMesh.position.x) * 0.1;
              positions[i3+1] += (positions[i3+1] - singularityMesh.position.y) * 0.1;
          } else {
              // Gravitational Pull: Particles orbit the button
              const dx = positions[i3] - singularityMesh.position.x;
              const dy = positions[i3+1] - singularityMesh.position.y;
              const dist = Math.sqrt(dx*dx + dy*dy);
              
              positions[i3] -= dx / dist * 2;
              positions[i3+1] -= dy / dist * 2;
              positions[i3+2] += Math.sin(Date.now() * 0.001 + i) * 0.5;
          }
      }
      partGeo.attributes.position.needsUpdate = true;
  
      renderer.render(scene, camera);
  }
  
  animate();
  
  window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
  });`
        },
        variants: [

        ]
    },
    {
        id: "comp-i0v86i",
        name: "New Component",
        category: "Buttons",
        tags: [],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Level 17: Entropy Horizon</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  </head>
  <body>
      <div id="interface-layer">
          <div id="btn-trigger">
              <span class="core-text">BEYOND_VOID</span>
          </div>
      </div>
      <canvas id="entropy-canvas"></canvas>
  </body>
  </html>`,
            css: `body, html { margin: 0; background: #000; overflow: hidden; height: 100vh; }
  
  #interface-layer {
      position: absolute; inset: 0;
      display: flex; justify-content: center; align-items: center;
      z-index: 100;
  }
  
  #btn-trigger {
      width: 380px; height: 100px;
      cursor: pointer; display: flex;
      justify-content: center; align-items: center;
      background: rgba(255, 255, 255, 0.01);
      border: 1px solid rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(5px);
  }
  
  .core-text {
      color: #fff; font-family: 'Courier New', monospace;
      font-size: 1.3rem; letter-spacing: 20px; font-weight: 100;
      pointer-events: none; mix-blend-mode: exclusion;
  }
  
  canvas { position: absolute; top: 0; left: 0; }`,
            js: `const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 3000);
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('entropy-canvas'), antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  // --- 1. THE FRACTAL PARTICLE CLOUD ---
  const particleCount = 45000; // 45k points for ultra-dense feel
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(particleCount * 3);
  const targets = new Float32Array(particleCount * 3); // Home positions
  
  for(let i=0; i < particleCount; i++) {
      const i3 = i * 3;
      // Distribute particles in a rectangular volume (The Button Shape)
      const x = (Math.random() - 0.5) * 400;
      const y = (Math.random() - 0.5) * 110;
      const z = (Math.random() - 0.5) * 50;
  
      pos[i3] = targets[i3] = x;
      pos[i3+1] = targets[i3+1] = y;
      pos[i3+2] = targets[i3+2] = z;
  }
  
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({
      size: 1.2,
      color: 0xffffff,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
  });
  
  const points = new THREE.Points(geo, mat);
  scene.add(points);
  camera.position.z = 600;
  
  // --- 2. THE ENTROPY LOGIC ---
  let mouse = { x: 0, y: 0 };
  let isHovered = false;
  let explosionActive = false;
  
  window.addEventListener('mousemove', (e) => {
      mouse.x = (e.clientX - window.innerWidth / 2);
      mouse.y = -(e.clientY - window.innerHeight / 2);
  });
  
  const btn = document.getElementById('btn-trigger');
  
  btn.addEventListener('mouseenter', () => { isHovered = true; gsap.to(mat, { color: 0x00ffff, duration: 1 }); });
  btn.addEventListener('mouseleave', () => { isHovered = false; gsap.to(mat, { color: 0xffffff, duration: 1 }); });
  
  btn.addEventListener('mousedown', () => {
      explosionActive = true;
      gsap.to(camera.position, { z: 200, duration: 0.5, ease: "power4.in" });
      setTimeout(() => {
          explosionActive = false;
          gsap.to(camera.position, { z: 600, duration: 1.5, ease: "expo.out" });
      }, 800);
  });
  
  // --- 3. THE GPU PHYSICS LOOP ---
  function render(time) {
      requestAnimationFrame(render);
      
      const positions = geo.attributes.position.array;
      const t = time * 0.001;
  
      for(let i=0; i < particleCount; i++) {
          const i3 = i * 3;
          
          if(explosionActive) {
              // Level 17 Kinetic Blast
              positions[i3] *= 1.15;
              positions[i3+1] *= 1.15;
              positions[i3+2] *= 1.15;
          } else if(isHovered) {
              // Fractal Entropy (Disorder)
              positions[i3] += Math.sin(t + i) * 2;
              positions[i3+1] += Math.cos(t * 0.5 + i) * 2;
              
              // Interaction with mouse "Magnetism"
              const dx = positions[i3] - mouse.x;
              const dy = positions[i3+1] - mouse.y;
              const d = Math.sqrt(dx*dx + dy*dy);
              if(d < 200) {
                  positions[i3] += dx / d * 5;
                  positions[i3+1] += dy / d * 5;
              }
          } else {
              // Return to Order (Home Position)
              positions[i3] += (targets[i3] - positions[i3]) * 0.1;
              positions[i3+1] += (targets[i3+1] - positions[i3+1]) * 0.1;
              positions[i3+2] += (targets[i3+2] - positions[i3+2]) * 0.1;
          }
      }
  
      geo.attributes.position.needsUpdate = true;
      points.rotation.y += 0.002;
      renderer.render(scene, camera);
  }
  
  render(0);`
        },
        variants: [

        ]
    },
    {
        id: "comp-7etrxh",
        name: "New Component",
        category: "Buttons",
        tags: [],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Level 17.1: Nebula Ribbon</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  </head>
  <body>
      <div id="ui-container">
          <button id="warp-trigger">
              <span class="warp-text">WARP_DRIVE</span>
          </button>
      </div>
      <canvas id="nebula-canvas"></canvas>
  </body>
  </html>`,
            css: `body, html { margin: 0; background: #000; overflow: hidden; height: 100vh; }
  
  #ui-container {
      position: absolute; inset: 0;
      display: flex; justify-content: center; align-items: center;
      z-index: 100;
  }
  
  #warp-trigger {
      width: 400px; height: 120px;
      background: transparent; border: none;
      cursor: pointer; position: relative;
  }
  
  .warp-text {
      color: #00f2ff; font-family: 'Arial Black', sans-serif;
      font-size: 1.5rem; letter-spacing: 15px;
      text-shadow: 0 0 10px rgba(0, 242, 255, 0.5);
      pointer-events: none;
  }
  
  canvas { position: absolute; top: 0; left: 0; filter: blur(1px) contrast(1.2); }`,
            js: `const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 2000);
  const renderer = new THREE.WebGLRenderer({ 
      canvas: document.getElementById('nebula-canvas'), 
      antialias: true, 
      alpha: true 
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  // --- 1. THE RIBBON PARTICLES ---
  const particleCount = 25000;
  const geometry = new THREE.BufferGeometry();
  const pos = new Float32Array(particleCount * 3);
  const targets = new Float32Array(particleCount * 3);
  
  for(let i=0; i < particleCount; i++) {
      const i3 = i * 3;
      // Base "Button" Structure
      pos[i3] = targets[i3] = (Math.random() - 0.5) * 400;
      pos[i3+1] = targets[i3+1] = (Math.random() - 0.5) * 120;
      pos[i3+2] = targets[i3+2] = (Math.random() - 0.5) * 40;
  }
  
  geometry.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  
  // Custom Texture for "Ribbon" Look
  const material = new THREE.PointsMaterial({
      size: 2.5,
      color: 0x00f2ff,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false
  });
  
  const points = new THREE.Points(geometry, material);
  scene.add(points);
  camera.position.z = 500;
  
  // --- 2. THE VORTEX PHYSICS ---
  let mouse = { x: 0, y: 0 };
  let isHovered = false;
  
  window.addEventListener('mousemove', (e) => {
      mouse.x = (e.clientX - window.innerWidth / 2);
      mouse.y = -(e.clientY - window.innerHeight / 2);
  });
  
  const btn = document.getElementById('warp-trigger');
  btn.addEventListener('mouseenter', () => isHovered = true);
  btn.addEventListener('mouseleave', () => isHovered = false);
  
  function render(time) {
      requestAnimationFrame(render);
      const positions = geometry.attributes.position.array;
      const t = time * 0.002;
  
      for(let i=0; i < particleCount; i++) {
          const i3 = i * 3;
          
          if(isHovered) {
              // VORTEX LOGIC: Particles orbit the cursor
              const dx = positions[i3] - mouse.x;
              const dy = positions[i3+1] - mouse.y;
              const angle = Math.atan2(dy, dx) + 0.1; // Orbit speed
              const dist = Math.sqrt(dx*dx + dy*dy);
              
              // Spiral towards mouse
              const targetDist = dist * 0.95; 
              positions[i3] = mouse.x + Math.cos(angle) * targetDist;
              positions[i3+1] = mouse.y + Math.sin(angle) * targetDist;
              positions[i3+2] += Math.sin(t + i) * 2;
              
          } else {
              // RE-MATERIALIZE: Return to button shape
              positions[i3] += (targets[i3] - positions[i3]) * 0.05;
              positions[i3+1] += (targets[i3+1] - positions[i3+1]) * 0.05;
              positions[i3+2] += (targets[i3+2] - positions[i3+2]) * 0.05;
          }
      }
  
      geometry.attributes.position.needsUpdate = true;
      points.rotation.z += 0.001; // Global slow rotation
      renderer.render(scene, camera);
  }
  
  render(0);`
        },
        variants: [

        ]
    },
    {
        id: "comp-1659qy",
        name: "New Component",
        category: "Buttons",
        tags: ["hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Level 17.2: GPGPU Quantum Fluid</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  </head>
  <body>
      <div id="ui-overlay">
          <button id="singular-btn">
              <span class="void-text">FUSE_REALITY</span>
          </button>
      </div>
      <canvas id="gpgpu-canvas"></canvas>
  </body>
  </html>`,
            css: `body, html { margin: 0; background: #000; overflow: hidden; height: 100vh; cursor: crosshair;}
  
  #ui-overlay {
      position: absolute; inset: 0;
      display: flex; justify-content: center; align-items: center;
      z-index: 100;
  }
  
  #singular-btn {
      width: 380px; height: 110px;
      background: transparent; border: none;
      cursor: pointer; position: relative;
      pointer-events: auto;
  }
  
  .void-text {
      color: #fff; font-family: 'Arial Black', sans-serif;
      font-size: 1.3rem; letter-spacing: 10px;
      text-transform: uppercase; font-weight: 900;
      mix-blend-mode: difference; /* Text color reacts to particles */
      text-shadow: 0 0 10px rgba(255,255,255,0.5);
      transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  }
  
  #singular-btn:hover .void-text {
      letter-spacing: 20px;
      color: #00f2ff;
  }
  
  canvas { position: absolute; top: 0; left: 0; z-index: 1; }`,
            js: `// --- 1. SHADER SCRIPTS (Raw GPU Math) ---
  const vertexShader = \`
      varying vec2 vUv;
      void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
  \`;
  
  // Compute Shader (This runs for every pixel on the simulation texture)
  const computeShader = \`
      varying vec2 vUv;
      uniform sampler2D tOldPos; // Previous Particle Positions (stored in texture)
      uniform sampler2D tOriginalPos; // The Button Shape (Home Positions)
      uniform vec2 uMouse;
      uniform float uTime;
      uniform float uHoverIntensity;
  
      void main() {
          vec3 currPos = texture2D(tOldPos, vUv).rgb;
          vec3 originalPos = texture2D(tOriginalPos, vUv).rgb;
          
          // Fluid Motion Logic
          vec3 finalPos = currPos;
          
          // Return-to-Home Force (Surface Tension)
          vec3 returnForce = (originalPos - currPos) * (0.01 + uHoverIntensity * 0.1);
          finalPos += returnForce;
          
          // Mouse Repulsion (Thermodynamic Chaos)
          float distToMouse = distance(currPos.xy, uMouse);
          if(distToMouse < 200.0) {
              vec3 repulsion = normalize(currPos - vec3(uMouse, 0.0)) * (200.0 - distToMouse) * (0.2 + uHoverIntensity * 0.5);
              
              // Add fractal noise to repulsion for chaos
              repulsion.x += sin(uTime + currPos.y * 0.1) * 2.0;
              repulsion.y += cos(uTime + currPos.x * 0.1) * 2.0;
              
              finalPos += repulsion;
          }
  
          // Limit the Z-Depth to keep it usable
          finalPos.z += sin(uTime * 0.5 + currPos.x * 0.01) * 0.5;
  
          gl_FragColor = vec4(finalPos, 1.0);
      }
  \`;
  
  // Render Shader (This actually draws the particles)
  const renderShader = \`
      uniform sampler2D tPos; // Current positions read from compute texture
      void main() {
          vec3 pos = texture2D(tPos, gl_PointCoord.xy).rgb;
          
          // Particle appearance: A cyan glow
          vec3 colorA = vec3(0.0, 1.0, 1.0);
          float alpha = 1.0 - length(gl_PointCoord - vec2(0.5)) * 2.0;
          if(alpha < 0.0) discard; // Hard edges for point particles
  
          gl_FragColor = vec4(colorA, alpha * 0.7);
      }
  \`;
  
  // --- 2. THREE.JS Setup ---
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-window.innerWidth/2, window.innerWidth/2, window.innerHeight/2, -window.innerHeight/2, 0.1, 2000);
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('gpgpu-canvas'), antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.z = 1000;
  
  // --- 3. GPGPU Setup (The Heart) ---
  // Define Simulation Size (Controls particle count: e.g., 512x512 = 262,144 particles)
  const simWidth = 512;
  const simHeight = 512;
  const particleCount = simWidth * simHeight;
  
  // Create Initial Data Textures
  const data = new Float32Array(particleCount * 4); // RGBA
  const originalData = new Float32Array(particleCount * 4);
  
  for (let i = 0; i < particleCount; i++) {
      const i4 = i * 4;
      // Distribute particles into a rectangular button shape
      data[i4] = originalData[i4] = (Math.random() - 0.5) * 380;
      data[i4+1] = originalData[i4+1] = (Math.random() - 0.5) * 110;
      data[i4+2] = originalData[i4+2] = (Math.random() - 0.5) * 10;
      data[i4+3] = originalData[i4+3] = 1.0; // Alpha/unused
  }
  
  const tOriginal = new THREE.DataTexture(originalData, simWidth, simHeight, THREE.RGBAFormat, THREE.FloatType);
  tOriginal.needsUpdate = true;
  
  // Define Render Targets (The ping-pong textures used for storage)
  let rtOld = new THREE.WebGLRenderTarget(simWidth, simHeight, { format: THREE.RGBAFormat, type: THREE.FloatType });
  let rtCurr = rtOld.clone();
  
  // Seed initial data
  renderer.renderPass(tOriginal, rtOld);
  
  // --- 4. Render Materials & Scene Construction ---
  // Simulation Material (GPGPU Physics)
  const computeMaterial = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: computeShader,
      uniforms: {
          tOldPos: { value: rtOld.texture },
          tOriginalPos: { value: tOriginal },
          uMouse: { value: new THREE.Vector2(0, 0) },
          uTime: { value: 0 },
          uHoverIntensity: { value: 0.0 }
      }
  });
  
  // A full-screen quad scene for the computation step
  const computeScene = new THREE.Scene();
  const computeCamera = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0.1, 10);
  const computeQuad = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), computeMaterial);
  computeScene.add(computeQuad);
  computeCamera.position.z = 1;
  
  // Render Scene: The Points geometry
  const geometry = new THREE.BufferGeometry();
  const uvs = new Float32Array(particleCount * 2);
  for (let i = 0; i < particleCount; i++) {
      const i2 = i * 2;
      uvs[i2] = (i % simWidth) / simWidth;
      uvs[i2+1] = Math.floor(i / simWidth) / simHeight;
  }
  geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  // We use a dummy position, the actual position comes from UV-reading the texture in shader
  geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(particleCount * 3), 3)); 
  
  const renderMaterial = new THREE.ShaderMaterial({
      vertexShader: \`
          varying vec2 vUv;
          varying float vDepth;
          uniform sampler2D tPos; // Current simulation texture
  
          void main() {
              vUv = uv;
              vec3 pos = texture2D(tPos, uv).rgb;
              vDepth = pos.z;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
              gl_PointSize = 2.0;
          }
      \`,
      fragmentShader: \`
          varying float vDepth;
          void main() {
              vec3 colorCyan = vec3(0.0, 1.0, 1.0);
              vec3 colorBlack = vec3(0.0);
              
              // Render darker particles when they dissolve into the void (low depth)
              vec3 finalColor = mix(colorBlack, colorCyan, vDepth / 10.0 + 0.5);
              
              // Point shape (circular)
              float alpha = 1.0 - length(gl_PointCoord - vec2(0.5)) * 2.0;
              if(alpha < 0.0) discard;
              
              gl_FragColor = vec4(finalColor, alpha * 0.7);
          }
      \`,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
  });
  
  const points = new THREE.Points(geometry, renderMaterial);
  scene.add(points);
  
  // --- 5. Interactions & Render Loop ---
  let mouse = new THREE.Vector2(0,0);
  window.addEventListener('mousemove', (e) => {
      mouse.x = (e.clientX - window.innerWidth / 2);
      mouse.y = -(e.clientY - window.innerHeight / 2);
  });
  
  const btn = document.getElementById('singular-btn');
  btn.addEventListener('mouseenter', () => gsap.to(computeMaterial.uniforms.uHoverIntensity, { value: 1.0, duration: 1 }));
  btn.addEventListener('mouseleave', () => gsap.to(computeMaterial.uniforms.uHoverIntensity, { value: 0.0, duration: 1.5, ease: "power2.inOut" }));
  
  function animate(time) {
      requestAnimationFrame(animate);
  
      // GPGPU Pass (Computing Physics)
      computeMaterial.uniforms.tOldPos.value = rtOld.texture;
      computeMaterial.uniforms.uMouse.value.copy(mouse);
      computeMaterial.uniforms.uTime.value = time * 0.001;
      renderer.setRenderTarget(rtCurr); // Compute into current RT
      renderer.render(computeScene, computeCamera);
  
      // Set Render Material to use the newly computed positions
      renderMaterial.uniforms.tPos.value = rtCurr.texture;
      
      // Render Pass (Drawing Particles)
      renderer.setRenderTarget(null); // Render to screen
      renderer.render(scene, camera);
  
      // Ping-Pong: Swap old and current textures for the next frame
      let temp = rtOld;
      rtOld = rtCurr;
      rtCurr = temp;
  }
  
  animate(0);
  
  window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.left = -window.innerWidth/2;
      camera.right = window.innerWidth/2;
      camera.top = window.innerHeight/2;
      camera.bottom = -window.innerHeight/2;
      camera.updateProjectionMatrix();
  });`
        },
        variants: [

        ]
    },
    {
        id: "comp-tfpjuf",
        name: "New Component",
        category: "Buttons",
        tags: ["neon", "hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Omniverse Singularity | Level 18</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js"></script>
  </head>
  <body>
      <div id="master-container">
          <div id="canvas-overlay"></div>
          <button id="omniverse-btn">
              <span class="btn-text" data-text="ASCEND_NOW">ASCEND_NOW</span>
              <div class="audio-visualizer"></div>
          </button>
      </div>
  </body>
  </html>`,
            css: `:root {
      --bg: #000;
      --neon: #00ffcc;
  }
  
  body, html { 
      margin: 0; padding: 0; width: 100%; height: 100%; 
      background: var(--bg); overflow: hidden; 
  }
  
  #master-container {
      width: 100vw; height: 100vh;
      display: flex; justify-content: center; align-items: center;
  }
  
  #canvas-overlay {
      position: absolute; inset: 0; z-index: 1;
  }
  
  #omniverse-btn {
      position: relative; z-index: 10;
      width: 400px; height: 120px;
      background: transparent; border: none;
      cursor: pointer; pointer-events: auto;
  }
  
  .btn-text {
      color: #fff; font-family: 'Inter', sans-serif;
      font-weight: 900; font-size: 1.6rem; letter-spacing: 20px;
      text-transform: uppercase; mix-blend-mode: difference;
      z-index: 20;
  }
  
  /* 1000x Advance Glitch Effect */
  .btn-text::after {
      content: attr(data-text);
      position: absolute; left: 0; top: 0;
      width: 100%; height: 100%;
      opacity: 0; color: #ff00ff;
  }
  
  #omniverse-btn:hover .btn-text::after {
      opacity: 0.8;
      animation: glitch 0.2s infinite;
      transform: translate(5px, -5px);
  }
  
  @keyframes glitch {
      0% { clip-path: inset(10% 0 30% 0); }
      50% { clip-path: inset(60% 0 10% 0); }
      100% { clip-path: inset(20% 0 50% 0); }
  }`,
            js: `// --- 1. SPATIAL AUDIO ENGINE (Howler.js) ---
  const sound = new Howl({
      src: ['https://assets.mixkit.co/sfx/preview/mixkit-sci-fi-subtle-machine-hum-2580.mp3'],
      loop: true, volume: 0.5
  });
  sound.play();
  
  // --- 2. THREE.JS GPU CORE ---
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('canvas-overlay').appendChild(renderer.domElement);
  
  // Metaball Fluid Shader
  const shaderMat = new THREE.ShaderMaterial({
      uniforms: {
          uTime: { value: 0 },
          uMouse: { value: new THREE.Vector2(0, 0) },
          uIntensity: { value: 0.1 }
      },
      vertexShader: \`
          varying vec2 vUv;
          void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
      \`,
      fragmentShader: \`
          varying vec2 vUv;
          uniform float uTime;
          uniform vec2 uMouse;
          uniform float uIntensity;
  
          void main() {
              vec2 p = vUv - 0.5;
              float dist = length(p - (uMouse - 0.5));
              float color = 0.01 / dist * uIntensity;
              vec3 finalColor = vec3(color * 0.2, color, color * 0.8);
              gl_FragColor = vec4(finalColor, color);
          }
      \`,
      transparent: true,
      blending: THREE.AdditiveBlending
  });
  
  const sphere = new THREE.Mesh(new THREE.IcosahedronGeometry(150, 32), shaderMat);
  scene.add(sphere);
  camera.position.z = 400;
  
  // --- 3. MULTI-LIBRARY INTERACTION LOGIC ---
  const btn = document.getElementById('omniverse-btn');
  
  btn.addEventListener('mousemove', (e) => {
      const x = e.clientX / window.innerWidth;
      const y = 1 - (e.clientY / window.innerHeight);
      
      // Update Shader
      shaderMat.uniforms.uMouse.value.set(x, y);
      
      // Sync Audio Pitch with Mouse Speed
      const speed = Math.abs(e.movementX) + Math.abs(e.movementY);
      sound.rate(1 + (speed * 0.01));
  
      // GSAP Parallax Tilt
      gsap.to(sphere.rotation, {
          y: (x - 0.5) * 4,
          x: (y - 0.5) * -4,
          duration: 0.5
      });
  });
  
  btn.addEventListener('mouseenter', () => {
      gsap.to(shaderMat.uniforms.uIntensity, { value: 0.8, duration: 1, ease: "power4.out" });
      gsap.to(document.body, { backgroundColor: "#110022", duration: 1 });
  });
  
  btn.addEventListener('mouseleave', () => {
      gsap.to(shaderMat.uniforms.uIntensity, { value: 0.1, duration: 1.5 });
      gsap.to(document.body, { backgroundColor: "#000", duration: 1 });
  });
  
  // The "Big Bang" Click
  btn.addEventListener('mousedown', () => {
      gsap.to(camera.position, { z: 100, duration: 0.3, ease: "expo.in" });
      sound.rate(4.0); // Extreme pitch shift
  });
  
  btn.addEventListener('mouseup', () => {
      gsap.to(camera.position, { z: 400, duration: 1, ease: "elastic.out(1, 0.3)" });
      sound.rate(1.0);
  });
  
  // Render Loop
  function animate(time) {
      requestAnimationFrame(animate);
      shaderMat.uniforms.uTime.value = time * 0.001;
      sphere.rotation.z += 0.005;
      renderer.render(scene, camera);
  }
  animate();`
        },
        variants: [

        ]
    },
    {
        id: "comp-rn8h0g",
        name: "New Component",
        category: "Buttons",
        tags: ["hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Quantum Flux Engine</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
      
      <style>
          body, html { margin: 0; padding: 0; background: #000; overflow: hidden; height: 100vh; }
          #canvas-container { position: absolute; inset: 0; z-index: 1; }
          
          #ui-layer {
              position: absolute; inset: 0; z-index: 10;
              display: flex; justify-content: center; align-items: center;
              pointer-events: none;
          }
  
          .advanced-btn {
              padding: 30px 60px;
              background: transparent;
              border: 1px solid rgba(0, 255, 255, 0.3);
              color: #00f2ff;
              font-family: 'Courier New', monospace;
              font-weight: 900;
              font-size: 1.2rem;
              letter-spacing: 10px;
              cursor: pointer;
              pointer-events: auto;
              text-transform: uppercase;
              transition: all 0.3s;
              position: relative;
          }
  
          .advanced-btn:hover {
              background: rgba(0, 255, 255, 0.1);
              box-shadow: 0 0 30px rgba(0, 255, 255, 0.4);
          }
      </style>
  </head>
  <body>
      <div id="canvas-container"></div>
      <div id="ui-layer">
          <button class="advanced-btn" id="trigger">Quantum_Engage</button>
      </div>
  
      <script>
          // --- JAVASCRIPT ENGINE ---
          let scene, camera, renderer, particles, count = 10000;
          let mouseX = 0, mouseY = 0;
          let isEngaged = false;
  
          function init() {
              scene = new THREE.Scene();
              camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000);
              camera.position.z = 1000;
  
              const geometry = new THREE.BufferGeometry();
              const positions = new Float32Array(count * 3);
              const colors = new Float32Array(count * 3);
  
              for (let i = 0; i < count; i++) {
                  // Initial distribution in a "Button-like" box
                  positions[i * 3] = (Math.random() - 0.5) * 400;
                  positions[i * 3 + 1] = (Math.random() - 0.5) * 150;
                  positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
  
                  colors[i * 3] = 0; // R
                  colors[i * 3 + 1] = 0.9; // G
                  colors[i * 3 + 2] = 1; // B
              }
  
              geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
              geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  
              const material = new THREE.PointsMaterial({
                  size: 3,
                  vertexColors: true,
                  blending: THREE.AdditiveBlending,
                  transparent: true,
                  opacity: 0.8
              });
  
              particles = new THREE.Points(geometry, material);
              scene.add(particles);
  
              renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
              renderer.setPixelRatio(window.devicePixelRatio);
              renderer.setSize(window.innerWidth, window.innerHeight);
              document.getElementById('canvas-container').appendChild(renderer.domElement);
  
              document.addEventListener('mousemove', onMouseMove);
              window.addEventListener('resize', onWindowResize);
              
              const btn = document.getElementById('trigger');
              btn.addEventListener('mousedown', () => {
                  isEngaged = true;
                  gsap.to(material, { size: 10, duration: 0.3 });
              });
              btn.addEventListener('mouseup', () => {
                  isEngaged = false;
                  gsap.to(material, { size: 3, duration: 1 });
              });
  
              animate();
          }
  
          function onMouseMove(event) {
              mouseX = (event.clientX - window.innerWidth / 2) * 2;
              mouseY = (event.clientY - window.innerHeight / 2) * 2;
          }
  
          function onWindowResize() {
              camera.aspect = window.innerWidth / window.innerHeight;
              camera.updateProjectionMatrix();
              renderer.setSize(window.innerWidth, window.innerHeight);
          }
  
          function animate() {
              requestAnimationFrame(animate);
              render();
          }
  
          function render() {
              const time = Date.now() * 0.001;
              const pos = particles.geometry.attributes.position.array;
  
              for (let i = 0; i < count; i++) {
                  const i3 = i * 3;
                  
                  if (isEngaged) {
                      // Warp Speed logic
                      pos[i3] *= 1.05;
                      pos[i3 + 1] *= 1.05;
                      if(Math.abs(pos[i3]) > 1000) pos[i3] = (Math.random() - 0.5) * 10;
                  } else {
                      // Organic Floating
                      pos[i3] += Math.sin(time + i) * 0.5;
                      pos[i3 + 1] += Math.cos(time + i) * 0.5;
                      
                      // Mouse Attraction
                      pos[i3] += (mouseX / 5 - pos[i3]) * 0.02;
                      pos[i3 + 1] += (-mouseY / 5 - pos[i3 + 1]) * 0.02;
                  }
              }
  
              particles.geometry.attributes.position.needsUpdate = true;
              particles.rotation.y += 0.001;
              renderer.render(scene, camera);
          }
  
          init();
      </script>
  </body>
  </html>`,
            css: "",
            js: ""
        },
        variants: [

        ]
    },
    {
        id: "comp-5li1t6",
        name: "New Component",
        category: "Buttons",
        tags: [],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Level 21: Neural Distortion</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  </head>
  <body>
      <div id="ui-wrapper">
          <button id="neural-trigger">
              <span class="glitch-text" data-text="BEYOND_REALITY">BEYOND_REALITY</span>
          </button>
      </div>
      <canvas id="neural-canvas"></canvas>
  </body>
  </html>`,
            css: `body, html { margin: 0; background: #000; overflow: hidden; height: 100vh; cursor: none; }
  
  #ui-wrapper {
      position: absolute; inset: 0;
      display: flex; justify-content: center; align-items: center;
      z-index: 100; pointer-events: none;
  }
  
  #neural-trigger {
      background: transparent; border: 1px solid rgba(255,255,255,0.1);
      padding: 40px 90px; cursor: pointer; pointer-events: auto;
      position: relative; transition: all 0.5s;
  }
  
  .glitch-text {
      color: #fff; font-family: 'Inter', sans-serif;
      font-weight: 900; font-size: 1.4rem; letter-spacing: 15px;
      position: relative; z-index: 2; mix-blend-mode: exclusion;
  }
  
  canvas { position: absolute; top: 0; left: 0; z-index: 1; }`,
            js: `// --- SHADERS: THE MATHEMATICAL SOUL ---
  const vertexShader = \`
      varying vec2 vUv;
      varying float vDistortion;
      uniform float uTime;
      uniform vec2 uMouse;
      uniform float uStrength;
  
      void main() {
          vUv = uv;
          vec3 pos = position;
          
          // Advanced Vertex Displacement
          float dist = distance(uv, uMouse);
          float decay = smoothstep(0.6, 0.0, dist);
          
          // Sinusoidal Nerve Waves
          float noise = sin(pos.x * 0.01 + uTime) * cos(pos.y * 0.01 + uTime) * 20.0;
          pos.z += noise + (decay * uStrength * 100.0);
          
          vDistortion = decay;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
  \`;
  
  const fragmentShader = \`
      varying vec2 vUv;
      varying float vDistortion;
      uniform float uTime;
  
      void main() {
          // Dynamic RGB Splitting
          float r = vUv.x + (vDistortion * 0.1);
          float g = vUv.y;
          float b = vUv.x - (vDistortion * 0.1);
          
          vec3 color = vec3(r * 0.2, g * 0.8, b * 1.0);
          
          // Add "Noise Grain"
          float grain = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453);
          color += grain * 0.05;
  
          gl_FragColor = vec4(color, 0.9);
      }
  \`;
  
  // --- ENGINE INITIALIZATION ---
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('neural-canvas'), antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  // Neural Plane (High Resolution)
  const geo = new THREE.PlaneGeometry(600, 250, 100, 100);
  const mat = new THREE.ShaderMaterial({
      vertexShader, fragmentShader,
      uniforms: {
          uTime: { value: 0 },
          uMouse: { value: new THREE.Vector2(0.5, 0.5) },
          uStrength: { value: 0 }
      },
      transparent: true, side: THREE.DoubleSide
  });
  
  const plane = new THREE.Mesh(geo, mat);
  scene.add(plane);
  camera.position.z = 400;
  
  // Mouse Logic
  let mousePos = { x: 0.5, y: 0.5 };
  window.addEventListener('mousemove', (e) => {
      mousePos.x = e.clientX / window.innerWidth;
      mousePos.y = 1.0 - (e.clientY / window.innerHeight);
      
      gsap.to(mat.uniforms.uMouse.value, { x: mousePos.x, y: mousePos.y, duration: 0.5 });
      
      // Parallax Tilt
      gsap.to(plane.rotation, {
          y: (mousePos.x - 0.5) * 0.8,
          x: (mousePos.y - 0.5) * -0.8,
          duration: 0.5
      });
  });
  
  // Button Interaction
  const btn = document.getElementById('neural-trigger');
  btn.addEventListener('mouseenter', () => {
      gsap.to(mat.uniforms.uStrength, { value: 1.5, duration: 0.6, ease: "power4.out" });
  });
  btn.addEventListener('mouseleave', () => {
      gsap.to(mat.uniforms.uStrength, { value: 0, duration: 1, ease: "elastic.out(1, 0.3)" });
  });
  
  // Render Loop
  function animate(time) {
      requestAnimationFrame(animate);
      mat.uniforms.uTime.value = time * 0.002;
      renderer.render(scene, camera);
  }
  animate();
  
  window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
  });`
        },
        variants: [

        ]
    },
    {
        id: "comp-ryey7n",
        name: "New Component",
        category: "Buttons",
        tags: ["hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Level 22: Mercury Engine</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  </head>
  <body>
      <div id="liquid-stage">
          <button id="portal-btn">
              <span class="depth-text">MERCURY_VOID</span>
          </button>
      </div>
      <canvas id="liquid-canvas"></canvas>
  </body>
  </html>`,
            css: `body, html { margin: 0; background: #050505; overflow: hidden; height: 100vh; font-family: 'Inter', sans-serif; }
  
  #liquid-stage {
      position: absolute; inset: 0;
      display: flex; justify-content: center; align-items: center;
      z-index: 10; pointer-events: none;
  }
  
  #portal-btn {
      width: 450px; height: 130px;
      background: transparent; border: none;
      cursor: pointer; pointer-events: auto;
      position: relative; overflow: hidden;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .depth-text {
      color: #fff; font-weight: 900; font-size: 1.8rem;
      letter-spacing: 18px; text-transform: uppercase;
      mix-blend-mode: exclusion; transition: letter-spacing 0.8s;
  }
  
  #portal-btn:hover .depth-text {
      letter-spacing: 28px;
      filter: blur(2px);
  }
  
  canvas { position: absolute; top: 0; left: 0; z-index: 1; }`,
            js: `// --- THE SHADER: LIQUID METAL LOGIC ---
  const vertexShader = \`
      varying vec2 vUv;
      void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
  \`;
  
  const fragmentShader = \`
      precision highp float;
      varying vec2 vUv;
      uniform float uTime;
      uniform vec2 uMouse;
      uniform float uHover;
  
      // Advanced Noise for Fluid
      float noise(vec2 p) {
          return sin(p.x * 10.0 + uTime) * sin(p.y * 10.0 + uTime);
      }
  
      void main() {
          vec2 p = vUv - 0.5;
          vec2 m = uMouse - 0.5;
          
          // Raymarching-style Liquid Distortion
          float d = length(p - m);
          float ripple = sin(d * 20.0 - uTime * 5.0) * 0.05 * uHover;
          
          vec2 uv = vUv + ripple;
          
          // Metallic Color Logic
          float colorShift = noise(uv * 2.0);
          vec3 baseColor = vec3(0.1, 0.1, 0.1); // Base Void
          vec3 mercuryColor = vec3(0.8, 0.8, 0.9); // Metallic Silver
          
          vec3 finalColor = mix(baseColor, mercuryColor, ripple * 50.0 + 0.1);
          finalColor += (1.0 - length(p)) * 0.2; // Vignette
          
          gl_FragColor = vec4(finalColor, 1.0);
      }
  \`;
  
  // --- ENGINE BOOTUP ---
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('liquid-canvas'), antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  const geo = new THREE.PlaneGeometry(2, 2);
  const mat = new THREE.ShaderMaterial({
      vertexShader, fragmentShader,
      uniforms: {
          uTime: { value: 0 },
          uMouse: { value: new THREE.Vector2(0.5, 0.5) },
          uHover: { value: 0 }
      }
  });
  
  const quad = new THREE.Mesh(geo, mat);
  scene.add(quad);
  
  // Mouse Trapping
  window.addEventListener('mousemove', (e) => {
      gsap.to(mat.uniforms.uMouse.value, {
          x: e.clientX / window.innerWidth,
          y: 1.0 - (e.clientY / window.innerHeight),
          duration: 0.5
      });
  });
  
  const btn = document.getElementById('portal-btn');
  btn.addEventListener('mouseenter', () => {
      gsap.to(mat.uniforms.uHover, { value: 1.0, duration: 1.2, ease: "power4.out" });
  });
  
  btn.addEventListener('mouseleave', () => {
      gsap.to(mat.uniforms.uHover, { value: 0.0, duration: 1.5, ease: "expo.inOut" });
  });
  
  // The Click "Plunge"
  btn.addEventListener('mousedown', () => {
      gsap.to(camera.zoom, { value: 1.5, duration: 0.4, onUpdate: () => camera.updateProjectionMatrix() });
  });
  btn.addEventListener('mouseup', () => {
      gsap.to(camera.zoom, { value: 1.0, duration: 1.0, ease: "elastic.out(1, 0.3)", onUpdate: () => camera.updateProjectionMatrix() });
  });
  
  function animate(time) {
      requestAnimationFrame(animate);
      mat.uniforms.uTime.value = time * 0.001;
      renderer.render(scene, camera);
  }
  animate();
  
  window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
  });`
        },
        variants: [
            {
                id: "v1",
                name: "Variant 1",
                code: {
                    html: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Level 22.1 | Chrome Refraction</title>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
      </head>
      <body>
          <div id="ui-core">
              <button id="chrome-btn">
                  <span class="void-label">REFRACT_VOID</span>
              </button>
          </div>
          <canvas id="chrome-canvas"></canvas>
      </body>
      </html>`,
                    css: `body, html { margin: 0; background: #000; overflow: hidden; height: 100vh; }
      
      #ui-core {
          position: absolute; inset: 0;
          display: flex; justify-content: center; align-items: center;
          z-index: 10; pointer-events: none;
      }
      
      #chrome-btn {
          width: 480px; height: 140px;
          background: transparent; border: 1px solid rgba(255,255,255,0.05);
          cursor: pointer; pointer-events: auto;
          position: relative; overflow: hidden;
      }
      
      .void-label {
          color: #fff; font-family: 'Montserrat', sans-serif;
          font-weight: 100; font-size: 1.4rem; letter-spacing: 25px;
          text-transform: uppercase; z-index: 20;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
      }
      
      #chrome-btn:hover .void-label {
          letter-spacing: 35px;
          font-weight: 400;
          text-shadow: 0 0 20px rgba(255,255,255,0.5);
      }
      
      canvas { position: absolute; top: 0; left: 0; z-index: 1; filter: contrast(1.1) brightness(1.2); }`,
                    js: `// --- ADVANCED MERCURY SHADER ---
      const vShader = \`
          varying vec2 vUv;
          void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
      \`;
      
      const fShader = \`
          precision highp float;
          varying vec2 vUv;
          uniform float uTime;
          uniform vec2 uMouse;
          uniform float uHover;
      
          void main() {
              vec2 uv = vUv;
              vec2 m = uMouse;
              
              // 1. Double Wave Distortion (Viscosity)
              float d = distance(uv, m);
              float wave = sin(d * 15.0 - uTime * 2.0) * 0.02 * uHover;
              float wave2 = cos(uv.y * 10.0 + uTime) * 0.01 * uHover;
              
              // 2. Chromatic Aberration (RGB Split)
              float r = texture2D(uMouse.x > 0.5 ? vec2(0.0) : vec2(0.0), uv + wave).r; // Dummy logic for split
              vec2 distUv = uv + wave + wave2;
              
              // 3. Specular Lighting (The Glossy Look)
              float light = smoothstep(0.4, 0.0, distance(distUv, m));
              vec3 color = vec3(0.05); // Deep Dark Base
              
              // Liquid Metal Reflection
              vec3 mercury = vec3(0.9, 0.93, 1.0); 
              color = mix(color, mercury, light * uHover + (wave * 10.0));
              
              // Adding Edge Highlights
              float edge = smoothstep(0.48, 0.5, abs(vUv.y - 0.5));
              color += edge * 0.1;
      
              gl_FragColor = vec4(color, 1.0);
          }
      \`;
      
      // --- BOOTUP ---
      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('chrome-canvas'), antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      
      const material = new THREE.ShaderMaterial({
          vertexShader: vShader,
          fragmentShader: fShader,
          uniforms: {
              uTime: { value: 0 },
              uMouse: { value: new THREE.Vector2(0.5, 0.5) },
              uHover: { value: 0 }
          }
      });
      
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
      scene.add(mesh);
      
      // Interactions
      window.addEventListener('mousemove', (e) => {
          gsap.to(material.uniforms.uMouse.value, {
              x: e.clientX / window.innerWidth,
              y: 1.0 - (e.clientY / window.innerHeight),
              duration: 0.8,
              ease: "power2.out"
          });
      });
      
      const btn = document.getElementById('chrome-btn');
      btn.addEventListener('mouseenter', () => gsap.to(material.uniforms.uHover, { value: 1.0, duration: 1.5 }));
      btn.addEventListener('mouseleave', () => gsap.to(material.uniforms.uHover, { value: 0.0, duration: 2.0 }));
      
      // Render Loop
      function animate(t) {
          requestAnimationFrame(animate);
          material.uniforms.uTime.value = t * 0.001;
          renderer.render(scene, camera);
      }
      animate(0);
      
      window.addEventListener('resize', () => renderer.setSize(window.innerWidth, window.innerHeight));`
                }
            },
            {
                id: "v2",
                name: "Variant 2",
                code: {
                    html: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Level 22.2 | Obsidian Engine</title>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
      </head>
      <body>
          <div id="ui-container">
              <button id="obsidian-btn">
                  <span class="btn-label">OBSIDIAN_CORE</span>
              </button>
          </div>
          <div id="canvas-wrapper"></div>
      </body>
      </html>`,
                    css: `body, html { margin: 0; background: #000; overflow: hidden; height: 100vh; }
      
      #ui-container {
          position: absolute; inset: 0;
          display: flex; justify-content: center; align-items: center;
          z-index: 100; pointer-events: none;
      }
      
      #obsidian-btn {
          width: 420px; height: 120px;
          background: transparent; border: 1px solid rgba(255, 255, 255, 0.1);
          cursor: pointer; pointer-events: auto;
          position: relative; overflow: hidden;
          backdrop-filter: blur(15px);
      }
      
      .btn-label {
          color: #fff; font-family: 'Arial Black', sans-serif;
          font-size: 1.4rem; letter-spacing: 15px;
          text-transform: uppercase; z-index: 2;
          mix-blend-mode: difference;
      }
      
      #canvas-wrapper { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }`,
                    js: `// --- INITIALIZATION ---
      const container = document.getElementById('canvas-wrapper');
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);
      
      // --- THE LIQUID GEOMETRY ---
      // Using a high-poly plane for smooth liquid waves
      const geometry = new THREE.PlaneGeometry(600, 300, 100, 100);
      const material = new THREE.MeshPhongMaterial({
          color: 0x111111,
          emissive: 0x002233,
          specular: 0xffffff,
          shininess: 100,
          wireframe: false,
          flatShading: false
      });
      
      const liquid = new THREE.Mesh(geometry, material);
      liquid.rotation.x = -Math.PI / 4; // Tilted for depth
      scene.add(liquid);
      
      // Lighting for that "Liquid Metal" reflection
      const light1 = new THREE.PointLight(0x00ffff, 1, 1000);
      light1.position.set(100, 100, 100);
      scene.add(light1);
      
      const light2 = new THREE.PointLight(0xff00ff, 0.5, 1000);
      light2.position.set(-100, -100, 100);
      scene.add(light2);
      
      camera.position.z = 400;
      
      // --- INTERACTION LOGIC ---
      let mouse = { x: 0, y: 0 };
      let targetMouse = { x: 0, y: 0 };
      let hoverState = 0;
      
      window.addEventListener('mousemove', (e) => {
          targetMouse.x = (e.clientX - window.innerWidth / 2) / 100;
          targetMouse.y = -(e.clientY - window.innerHeight / 2) / 100;
      });
      
      const btn = document.getElementById('obsidian-btn');
      btn.addEventListener('mouseenter', () => gsap.to(window, { hoverState: 1, duration: 1 }));
      btn.addEventListener('mouseleave', () => gsap.to(window, { hoverState: 0, duration: 1.5 }));
      
      // --- ANIMATION LOOP ---
      function animate(time) {
          requestAnimationFrame(animate);
          
          // Smooth mouse follow
          mouse.x += (targetMouse.x - mouse.x) * 0.1;
          mouse.y += (targetMouse.y - mouse.y) * 0.1;
      
          const positions = liquid.geometry.attributes.position.array;
          const t = time * 0.002;
      
          for (let i = 0; i < positions.length; i += 3) {
              const x = positions[i];
              const y = positions[i+1];
              
              // Advanced Wave Math: Perlin-like motion
              const wave1 = Math.sin(x * 0.01 + t) * 15;
              const wave2 = Math.cos(y * 0.01 + t * 0.5) * 10;
              
              // Mouse Interaction: Vertices react to cursor distance
              const dx = x/100 - mouse.x;
              const dy = y/100 - mouse.y;
              const dist = Math.sqrt(dx*dx + dy*dy);
              const attraction = Math.max(0, (2 - dist) * 20) * (window.hoverState || 0);
      
              positions[i+2] = wave1 + wave2 + attraction;
          }
      
          liquid.geometry.attributes.position.needsUpdate = true;
          
          // Subtle parallax tilt
          liquid.rotation.y = mouse.x * 0.1;
          liquid.rotation.x = -Math.PI / 4 + (mouse.y * 0.1);
      
          renderer.render(scene, camera);
      }
      
      animate(0);
      
      window.addEventListener('resize', () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
      });`
                }
            }
        ]
    },
    {
        id: "comp-r1nvvh",
        name: "New Component",
        category: "Buttons",
        tags: [],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Level 23 | Kinetic Fabric Engine</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  </head>
  <body>
      <div id="ui-layer">
          <button id="fabric-btn">
              <span class="text-core">FABRIC_REALITY</span>
          </button>
      </div>
      <div id="world"></div>
  </body>
  </html>`,
            css: `body, html { margin: 0; background: #020202; overflow: hidden; height: 100vh; }
  
  #ui-layer {
      position: absolute; inset: 0;
      display: flex; justify-content: center; align-items: center;
      z-index: 100; pointer-events: none;
  }
  
  #fabric-btn {
      width: 400px; height: 120px;
      background: transparent; border: none;
      cursor: pointer; pointer-events: auto;
      position: relative;
  }
  
  .text-core {
      color: #fff; font-family: 'Inter', sans-serif;
      font-weight: 900; font-size: 1.5rem; letter-spacing: 12px;
      text-transform: uppercase; mix-blend-mode: difference;
      pointer-events: none;
  }
  
  #world { position: absolute; inset: 0; z-index: 1; }`,
            js: `const container = document.getElementById('world');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);
  
  // --- 1. THE FABRIC GEOMETRY ---
  const segments = 40; // High resolution mesh
  const geometry = new THREE.PlaneGeometry(600, 250, segments, segments);
  const material = new THREE.MeshPhongMaterial({
      color: 0x222222,
      emissive: 0x00ffff,
      emissiveIntensity: 0.2,
      side: THREE.DoubleSide,
      wireframe: true, // Kinetic look
      transparent: true,
      opacity: 0.6
  });
  
  const fabric = new THREE.Mesh(geometry, material);
  scene.add(fabric);
  
  // Light setup
  const pointLight = new THREE.PointLight(0x00f2ff, 2, 800);
  scene.add(pointLight);
  camera.position.z = 400;
  
  // --- 2. PHYSICS LOGIC ---
  let mouse = new THREE.Vector2(-1000, -1000);
  let targetMouse = new THREE.Vector2(0, 0);
  
  window.addEventListener('mousemove', (e) => {
      targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  });
  
  // For Verlet simulation
  const originalPos = geometry.attributes.position.array.slice();
  const velocities = new Float32Array(geometry.attributes.position.array.length).fill(0);
  
  const btn = document.getElementById('fabric-btn');
  let isHovered = false;
  
  btn.addEventListener('mouseenter', () => { isHovered = true; material.wireframe = false; });
  btn.addEventListener('mouseleave', () => { isHovered = false; material.wireframe = true; });
  
  // --- 3. THE KINETIC LOOP ---
  function animate(time) {
      requestAnimationFrame(animate);
      
      // Smooth mouse lerping
      mouse.lerp(targetMouse, 0.1);
      
      const pos = geometry.attributes.position.array;
      pointLight.position.set(mouse.x * 300, mouse.y * 300, 100);
  
      for (let i = 0; i < pos.length; i += 3) {
          // Vertex world position calculation
          const vx = pos[i];
          const vy = pos[i+1];
          
          // Raycasting distance from mouse to vertex
          const dx = vx - (mouse.x * 400);
          const dy = vy - (mouse.y * 200);
          const dist = Math.sqrt(dx*dx + dy*dy);
          
          // Elasticity force
          const force = Math.max(0, (150 - dist) / 150);
          
          if (isHovered) {
              // "Sucking" effect into the 3rd dimension
              pos[i+2] += (force * 80 - pos[i+2]) * 0.1;
          } else {
              // Natural wave return
              const homeZ = originalPos[i+2] + Math.sin(vx * 0.01 + time * 0.002) * 10;
              pos[i+2] += (homeZ - pos[i+2]) * 0.05;
          }
      }
  
      geometry.attributes.position.needsUpdate = true;
      fabric.rotation.y = mouse.x * 0.2;
      fabric.rotation.x = -mouse.y * 0.2;
  
      renderer.render(scene, camera);
  }
  
  animate(0);
  
  window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
  });`
        },
        variants: [

        ]
    },
    {
        id: "comp-szqagq",
        name: "New Component",
        category: "Buttons",
        tags: [],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Level 25 | Schrödinger Paradox</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.18.0/matter.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  </head>
  <body>
      <div id="quantum-ui">
          <button id="paradox-btn">
              <span class="state-text" data-text="COLLAPSE_STATE">COLLAPSE_STATE</span>
          </button>
      </div>
      <canvas id="atomic-canvas"></canvas>
  </body>
  </html>`,
            css: `body, html { margin: 0; background: #000; overflow: hidden; height: 100vh; cursor: none; }
  
  #quantum-ui {
      position: absolute; inset: 0;
      display: flex; justify-content: center; align-items: center;
      z-index: 100;
  }
  
  #paradox-btn {
      padding: 40px 80px; background: transparent; border: none;
      cursor: pointer; position: relative;
  }
  
  .state-text {
      color: #fff; font-family: 'Courier New', monospace;
      font-size: 1.8rem; font-weight: 900; letter-spacing: 15px;
      text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
      mix-blend-mode: exclusion;
  }
  
  canvas { position: absolute; top: 0; left: 0; z-index: 1; filter: contrast(1.5) hue-rotate(90deg); }`,
            js: `// --- 1. MATTER.JS PHYSICS SETUP ---
  const { Engine, Render, World, Bodies, Mouse, MouseConstraint } = Matter;
  const engine = Engine.create();
  const world = engine.world;
  
  // --- 2. THREE.JS ATOMIC RENDERING ---
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 2000);
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('atomic-canvas'), antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  // Create thousands of atomic particles
  const particleCount = 15000;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(particleCount * 3);
  const targets = new Float32Array(particleCount * 3);
  
  for(let i=0; i<particleCount; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * window.innerWidth;
      pos[i3+1] = (Math.random() - 0.5) * window.innerHeight;
      pos[i3+2] = (Math.random() - 0.5) * 100;
  
      // Define the "Button Shape" in particle space
      targets[i3] = (Math.random() - 0.5) * 450;
      targets[i3+1] = (Math.random() - 0.5) * 120;
      targets[i3+2] = (Math.random() - 0.5) * 50;
  }
  
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const material = new THREE.PointsMaterial({
      size: 2, color: 0x00ffff, blending: THREE.AdditiveBlending, transparent: true, opacity: 0.8
  });
  const atomicPoints = new THREE.Points(geo, material);
  scene.add(atomicPoints);
  camera.position.z = 500;
  
  // --- 3. THE COLLAPSE LOGIC ---
  let mouse = { x: 0, y: 0 };
  let isCollapsed = false;
  
  window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX - window.innerWidth / 2;
      mouse.y = -(e.clientY - window.innerHeight / 2);
  });
  
  const btn = document.getElementById('paradox-btn');
  const text = document.querySelector('.state-text');
  
  btn.addEventListener('mousedown', () => {
      isCollapsed = true;
      text.innerHTML = "0x" + Math.random().toString(16).substr(2, 8).toUpperCase();
      gsap.to(material, { size: 10, color: 0xff00ff, duration: 0.2 });
  });
  
  btn.addEventListener('mouseup', () => {
      isCollapsed = false;
      text.innerHTML = "COLLAPSE_STATE";
      gsap.to(material, { size: 2, color: 0x00ffff, duration: 0.5 });
  });
  
  // --- 4. ENGINE LOOP (GOD MODE) ---
  function animate(t) {
      requestAnimationFrame(animate);
      Engine.update(engine);
      
      const positions = geo.attributes.position.array;
      const time = t * 0.001;
  
      for(let i=0; i<particleCount; i++) {
          const i3 = i * 3;
          
          if(isCollapsed) {
              // Chaotic state: Physics take over
              positions[i3] += (Math.random() - 0.5) * 50;
              positions[i3+1] -= 10; // Gravity simulation
          } else {
              // Return to order: Elastic magnetism
              const tx = targets[i3];
              const ty = targets[i3+1];
              
              // Mouse Repulsion
              const dx = positions[i3] - mouse.x;
              const dy = positions[i3+1] - mouse.y;
              const d = Math.sqrt(dx*dx + dy*dy);
              
              if(d < 150) {
                  positions[i3] += dx / d * 10;
                  positions[i3+1] += dy / d * 10;
              }
  
              positions[i3] += (tx - positions[i3]) * 0.08;
              positions[i3+1] += (ty - positions[i3+1]) * 0.08;
          }
      }
  
      geo.attributes.position.needsUpdate = true;
      atomicPoints.rotation.z += 0.001;
      renderer.render(scene, camera);
  }
  
  animate(0);`
        },
        variants: [

        ]
    },
    {
        id: "comp-fvgu95",
        name: "New Component",
        category: "Buttons",
        tags: ["hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Level 26 | Singularity Fracture</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  </head>
  <body>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display:none;">
          <defs>
              <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                  <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
              </filter>
          </defs>
      </svg>
  
      <div id="god-interface">
          <button id="fracture-btn">
              <span class="glitch-text" data-text="VOID_ENGINE">VOID_ENGINE</span>
              <div class="liquid-bg"></div>
          </button>
      </div>
      <canvas id="core-canvas"></canvas>
  </body>
  </html>`,
            css: `@import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@700&display=swap');
  
  body, html { margin: 0; background: #000; overflow: hidden; height: 100vh; cursor: crosshair; }
  
  #god-interface {
      position: absolute; inset: 0;
      display: flex; justify-content: center; align-items: center;
      z-index: 100;
  }
  
  #fracture-btn {
      background: transparent; border: none;
      padding: 50px 100px; cursor: pointer;
      position: relative; overflow: visible;
      filter: url('#goo'); /* Applying the Liquid Filter */
  }
  
  .glitch-text {
      color: #00f2ff;
      font-family: 'Syncopate', sans-serif;
      font-size: 2.5rem;
      letter-spacing: 20px;
      position: relative;
      z-index: 10;
      transition: all 0.4s;
      display: block;
  }
  
  /* Advanced Text Animation Logic */
  #fracture-btn:hover .glitch-text {
      color: #fff;
      letter-spacing: 40px;
      transform: scale(1.1);
      animation: textJitter 0.1s infinite;
  }
  
  @keyframes textJitter {
      0% { transform: translate(2px, -2px); }
      50% { transform: translate(-2px, 2px); }
      100% { transform: translate(0); }
  }
  
  .liquid-bg {
      position: absolute; inset: 0;
      background: linear-gradient(45deg, #00f2ff, #7000ff);
      border-radius: 50px;
      z-index: -1;
      opacity: 0.3;
      transition: 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  }
  
  #fracture-btn:hover .liquid-bg {
      opacity: 1;
      transform: scale(1.5) rotate(5deg);
      filter: blur(20px);
  }
  
  canvas { position: absolute; inset: 0; z-index: 1; }`,
            js: `// --- INITIALIZING THE QUANTUM WORLD ---
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 2000);
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('core-canvas'), antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  // --- ATOMIC FIELD GENERATION ---
  const count = 20000;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const velocities = new Float32Array(count);
  
  for(let i=0; i<count; i++) {
      positions[i*3] = (Math.random() - 0.5) * 2000;
      positions[i*3+1] = (Math.random() - 0.5) * 2000;
      positions[i*3+2] = (Math.random() - 0.5) * 2000;
      velocities[i] = Math.random() * 2 + 1;
  }
  
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const material = new THREE.PointsMaterial({
      size: 2,
      color: 0x7000ff,
      transparent: true,
      blending: THREE.AdditiveBlending
  });
  
  const points = new THREE.Points(geometry, material);
  scene.add(points);
  camera.position.z = 800;
  
  // --- DYNAMIC INTERACTION ---
  let mouse = { x: 0, y: 0 };
  window.addEventListener('mousemove', (e) => {
      mouse.x = (e.clientX - window.innerWidth/2);
      mouse.y = -(e.clientY - window.innerHeight/2);
      
      // Parallax effect for the 3D particles
      gsap.to(points.rotation, {
          x: mouse.y * 0.001,
          y: mouse.x * 0.001,
          duration: 1
      });
  });
  
  // Button Interaction Logic
  const btn = document.getElementById('fracture-btn');
  btn.addEventListener('mouseenter', () => {
      gsap.to(material, { size: 5, color: 0x00f2ff, duration: 0.5 });
      gsap.to(camera.position, { z: 600, duration: 1.5, ease: "expo.out" });
  });
  
  btn.addEventListener('mouseleave', () => {
      gsap.to(material, { size: 2, color: 0x7000ff, duration: 1 });
      gsap.to(camera.position, { z: 800, duration: 1.5 });
  });
  
  // --- RENDER LOOP ---
  function animate() {
      requestAnimationFrame(animate);
      
      const posAttr = geometry.attributes.position;
      for(let i=0; i<count; i++) {
          // Atomic drift
          posAttr.array[i*3+1] += velocities[i];
          if(posAttr.array[i*3+1] > 1000) posAttr.array[i*3+1] = -1000;
      }
      posAttr.needsUpdate = true;
      
      renderer.render(scene, camera);
  }
  animate();
  
  window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
  });`
        },
        variants: [

        ]
    },
    {
        id: "comp-jvogs2",
        name: "New Component",
        category: "Buttons",
        tags: ["hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Level 28 | Chronos Engine</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.18.0/matter.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  </head>
  <body>
      <div id="god-ui">
          <button id="chronos-btn">
              <span class="label">WARP_REALITY</span>
          </button>
      </div>
      <canvas id="physics-canvas"></canvas>
  </body>
  </html>`,
            css: `@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;700&display=swap');
  
  body, html { margin: 0; background: #000; overflow: hidden; height: 100vh; cursor: none; }
  
  #god-ui {
      position: absolute; inset: 0;
      display: flex; justify-content: center; align-items: center;
      z-index: 100; pointer-events: none;
  }
  
  #chronos-btn {
      padding: 50px 100px; background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.1);
      cursor: pointer; pointer-events: auto;
      position: relative; overflow: visible;
  }
  
  .label {
      color: #fff; font-family: 'Space Grotesk', sans-serif;
      font-size: 1.5rem; letter-spacing: 20px; font-weight: 300;
      text-transform: uppercase; transition: 0.5s;
      mix-blend-mode: difference;
  }
  
  #chronos-btn:hover .label {
      letter-spacing: 35px;
      font-weight: 700;
      color: #00ffcc;
      text-shadow: 10px 0 0 rgba(255,0,0,0.5), -10px 0 0 rgba(0,0,255,0.5); /* RGB Split */
  }
  
  canvas { position: absolute; inset: 0; z-index: 1; }`,
            js: `// --- 1. MATTER.JS (PHYSICS SETUP) ---
  const { Engine, World, Bodies, Composite } = Matter;
  const engine = Engine.create();
  engine.gravity.y = 0; // Space-like zero gravity
  
  // --- 2. THREE.JS (GPU RENDERER) ---
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 2000);
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('physics-canvas'), antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  // --- 3. THE KINETIC PARTICLES ---
  const count = 8000;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  const dynamics = []; // Physics data for each particle
  
  for(let i=0; i<count; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * window.innerWidth;
      pos[i3+1] = (Math.random() - 0.5) * window.innerHeight;
      pos[i3+2] = (Math.random() - 0.5) * 500;
      
      dynamics.push({
          velocity: new THREE.Vector3((Math.random()-0.5)*2, (Math.random()-0.5)*2, 0),
          home: new THREE.Vector3(pos[i3], pos[i3+1], pos[i3+2])
      });
  }
  
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({
      size: 2, color: 0xffffff, transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending
  });
  const points = new THREE.Points(geo, mat);
  scene.add(points);
  camera.position.z = 800;
  
  // --- 4. THE GOD-MODE CLICK EFFECT ---
  const btn = document.getElementById('chronos-btn');
  let isWarping = false;
  let mouse = { x: 0, y: 0 };
  
  window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX - window.innerWidth/2;
      mouse.y = -(e.clientY - window.innerHeight/2);
  });
  
  btn.addEventListener('mousedown', () => {
      isWarping = true;
      gsap.to(engine, { timingScale: 0.1, duration: 0.5 }); // TIME SLOW-DOWN
      gsap.to(mat, { size: 15, color: 0x00ffcc, duration: 0.2 });
      
      // Impact Blast
      dynamics.forEach(d => {
          d.velocity.multiplyScalar(20);
      });
  });
  
  btn.addEventListener('mouseup', () => {
      isWarping = false;
      gsap.to(engine, { timingScale: 1.0, duration: 1 }); // TIME RETURN
      gsap.to(mat, { size: 2, color: 0xffffff, duration: 1 });
  });
  
  // --- 5. RENDER & PHYSICS LOOP ---
  function animate(t) {
      requestAnimationFrame(animate);
      
      const pArr = geo.attributes.position.array;
      for(let i=0; i<count; i++) {
          const i3 = i * 3;
          const d = dynamics[i];
          
          // Apply Physics & Magnetism
          if(!isWarping) {
              // Magnetic return to home position
              pArr[i3] += (d.home.x - pArr[i3]) * 0.05;
              pArr[i3+1] += (d.home.y - pArr[i3+1]) * 0.05;
              
              // Mouse Interaction (Magnetic Path)
              const dx = pArr[i3] - mouse.x;
              const dy = pArr[i3+1] - mouse.y;
              const dist = Math.sqrt(dx*dx + dy*dy);
              if(dist < 200) {
                  pArr[i3] += dx/dist * 5;
                  pArr[i3+1] += dy/dist * 5;
              }
          } else {
              // Chaos Motion
              pArr[i3] += d.velocity.x;
              pArr[i3+1] += d.velocity.y;
              d.velocity.multiplyScalar(0.96); // Friction
          }
      }
      
      geo.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
  }
  
  animate(0);`
        },
        variants: [

        ]
    },
    {
        id: "comp-1lrfer",
        name: "New Component",
        category: "Buttons",
        tags: ["glow", "hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Level 29 | Entangled Singularity</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  </head>
  <body>
      <div id="ui-overlay">
          <button id="singularity-trigger">
              <span class="label">QUANTUM_COLLAPSE</span>
              <div class="glow-layer"></div>
          </button>
      </div>
      <canvas id="god-canvas"></canvas>
  </body>
  </html>`,
            css: `@import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@700&display=swap');
  
  body, html { margin: 0; background: #000; overflow: hidden; height: 100vh; cursor: crosshair; }
  
  #ui-overlay {
      position: absolute; inset: 0;
      display: flex; justify-content: center; align-items: center;
      z-index: 100; pointer-events: none;
  }
  
  #singularity-trigger {
      background: rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(0, 255, 255, 0.2);
      padding: 60px 100px;
      cursor: pointer;
      pointer-events: auto;
      position: relative;
      overflow: hidden;
      backdrop-filter: blur(20px);
  }
  
  .label {
      color: #fff;
      font-family: 'Syncopate', sans-serif;
      font-size: 1.2rem;
      letter-spacing: 18px;
      position: relative;
      z-index: 2;
      transition: 0.5s;
  }
  
  .glow-layer {
      position: absolute; inset: 0;
      background: radial-gradient(circle, rgba(0, 255, 255, 0.2) 0%, transparent 70%);
      opacity: 0; transition: 0.5s;
  }
  
  #singularity-trigger:hover .label { letter-spacing: 25px; color: #00f2ff; }
  #singularity-trigger:hover .glow-layer { opacity: 1; transform: scale(1.5); }
  
  canvas { position: absolute; inset: 0; z-index: 1; }`,
            js: `// --- 1. THE ARCHITECTURE ---
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('god-canvas'), antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  // --- 2. INSTANCED NEURAL MESH (10k Particles) ---
  const count = 10000;
  const geometry = new THREE.SphereGeometry(1, 6, 6);
  const material = new THREE.MeshPhongMaterial({ color: 0x00f2ff, emissive: 0x00f2ff, emissiveIntensity: 0.5 });
  const instancedMesh = new THREE.InstancedMesh(geometry, material, count);
  
  const dummy = new THREE.Object3D();
  const physicsData = [];
  
  for (let i = 0; i < count; i++) {
      const pos = new THREE.Vector3((Math.random() - 0.5) * 1000, (Math.random() - 0.5) * 1000, (Math.random() - 0.5) * 1000);
      dummy.position.copy(pos);
      dummy.updateMatrix();
      instancedMesh.setMatrixAt(i, dummy.matrix);
      
      physicsData.push({
          position: pos.clone(),
          velocity: new THREE.Vector3(),
          speed: Math.random() * 0.02 + 0.01
      });
  }
  scene.add(instancedMesh);
  
  // Lighting
  const light = new THREE.PointLight(0x00ffff, 2, 1000);
  scene.add(light);
  camera.position.z = 600;
  
  // --- 3. INTERACTION & WARP LOGIC ---
  let mouse = new THREE.Vector2(0, 0);
  let targetMouse = new THREE.Vector2(0, 0);
  let isCollapsing = false;
  
  window.addEventListener('mousemove', (e) => {
      targetMouse.x = (e.clientX - window.innerWidth / 2);
      targetMouse.y = -(e.clientY - window.innerHeight / 2);
  });
  
  const btn = document.getElementById('singularity-trigger');
  btn.addEventListener('mousedown', () => {
      isCollapsing = true;
      gsap.to(camera.position, { z: 400, duration: 0.5, ease: "power4.inOut" });
  });
  btn.addEventListener('mouseup', () => {
      isCollapsing = false;
      gsap.to(camera.position, { z: 600, duration: 1, ease: "elastic.out(1, 0.3)" });
  });
  
  // --- 4. THE GOD-MODE RENDER LOOP ---
  function animate(time) {
      requestAnimationFrame(animate);
      
      mouse.lerp(targetMouse, 0.05);
      light.position.set(mouse.x, mouse.y, 200);
  
      for (let i = 0; i < count; i++) {
          const p = physicsData[i];
          
          if (isCollapsing) {
              // Sucking particles into the button (Singularity)
              const dir = new THREE.Vector3(0, 0, 0).sub(p.position).normalize();
              p.velocity.addScaledVector(dir, 2);
          } else {
              // Magnetic drift around mouse
              const dist = p.position.distanceTo(new THREE.Vector3(mouse.x, mouse.y, 0));
              if (dist < 200) {
                  const repel = new THREE.Vector3().subVectors(p.position, new THREE.Vector3(mouse.x, mouse.y, 0)).normalize();
                  p.velocity.addScaledVector(repel, 0.5);
              }
          }
          
          p.velocity.multiplyScalar(0.95); // Friction
          p.position.add(p.velocity);
          
          // Elastic return to random floating
          p.position.x += Math.sin(time * 0.001 + i) * 0.2;
          p.position.y += Math.cos(time * 0.001 + i) * 0.2;
  
          dummy.position.copy(p.position);
          dummy.updateMatrix();
          instancedMesh.setMatrixAt(i, dummy.matrix);
      }
      
      instancedMesh.instanceMatrix.needsUpdate = true;
      renderer.render(scene, camera);
  }
  
  animate(0);`
        },
        variants: [

        ]
    },
    {
        id: "comp-f6w0sr",
        name: "New Component",
        category: "Buttons",
        tags: ["hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Level 30 | Kernel Overlord</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  </head>
  <body>
      <div id="kernel-ui">
          <button id="master-trigger">
              <span class="glitch-label" data-text="EXECUTE_KERNEL">EXECUTE_KERNEL</span>
              <div id="binary-stream"></div>
          </button>
      </div>
      <canvas id="singularity-canvas"></canvas>
  </body>
  </html>`,
            css: `@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&display=swap');
  
  body, html { margin: 0; background: #000; overflow: hidden; height: 100vh; cursor: none; }
  
  #kernel-ui {
      position: absolute; inset: 0;
      display: flex; justify-content: center; align-items: center;
      z-index: 100;
  }
  
  #master-trigger {
      background: transparent; border: 2px solid rgba(0, 255, 100, 0.2);
      padding: 60px 110px; cursor: pointer; position: relative;
      overflow: hidden; backdrop-filter: blur(5px);
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  
  .glitch-label {
      color: #00ff66; font-family: 'Fira Code', monospace;
      font-size: 1.5rem; letter-spacing: 12px; font-weight: 900;
      position: relative; z-index: 5; text-shadow: 0 0 10px rgba(0, 255, 100, 0.5);
  }
  
  #master-trigger:hover {
      border-color: #00ff66;
      box-shadow: 0 0 40px rgba(0, 255, 100, 0.3);
      transform: scale(1.05);
  }
  
  /* Binary Stream Animation */
  #binary-stream {
      position: absolute; inset: 0; font-family: 'Fira Code'; font-size: 8px;
      color: rgba(0, 255, 100, 0.1); white-space: pre; pointer-events: none;
      line-height: 8px; overflow: hidden;
  }
  
  canvas { position: absolute; inset: 0; z-index: 1; filter: contrast(1.2) saturate(1.5); }`,
            js: `// --- 1. CORE SINGULARITY (Three.js) ---
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 2000);
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('singularity-canvas'), antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  // --- 2. ATOMIC CLOUD (20k Particles) ---
  const count = 20000;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  
  for(let i=0; i<count; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 2000;
      pos[i3+1] = (Math.random() - 0.5) * 2000;
      pos[i3+2] = (Math.random() - 0.5) * 2000;
      
      // Cyber Green Palette
      colors[i3] = 0; // R
      colors[i3+1] = Math.random(); // G
      colors[i3+2] = 0.4; // B
  }
  
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  
  const mat = new THREE.PointsMaterial({ size: 2, vertexColors: true, blending: THREE.AdditiveBlending, transparent: true, opacity: 0.6 });
  const cloud = new THREE.Points(geo, mat);
  scene.add(cloud);
  camera.position.z = 800;
  
  // --- 3. BINARY STREAM LOGIC ---
  const stream = document.getElementById('binary-stream');
  function generateBinary() {
      let b = "";
      for(let i=0; i<500; i++) b += (Math.random() > 0.5 ? "1" : "0");
      stream.innerText = b.repeat(10);
  }
  setInterval(generateBinary, 50);
  
  // --- 4. INTERACTION & GLITCH ENGINE ---
  let mouse = { x: 0, y: 0 };
  window.addEventListener('mousemove', (e) => {
      mouse.x = (e.clientX - window.innerWidth/2);
      mouse.y = -(e.clientY - window.innerHeight/2);
      
      gsap.to(cloud.rotation, { x: mouse.y * 0.001, y: mouse.x * 0.001, duration: 1.5 });
  });
  
  const btn = document.getElementById('master-trigger');
  btn.addEventListener('mousedown', () => {
      // TRIGGER KERNEL PANIC
      gsap.to(camera.position, { z: 400, duration: 0.1 });
      gsap.to('body', { filter: 'invert(1) hue-rotate(180deg)', duration: 0.05, yoyo: true, repeat: 5 });
      mat.size = 15;
  });
  
  btn.addEventListener('mouseup', () => {
      gsap.to(camera.position, { z: 800, duration: 1, ease: "expo.out" });
      mat.size = 2;
  });
  
  // --- 5. RENDER LOOP ---
  function animate(t) {
      requestAnimationFrame(animate);
      
      const positions = geo.attributes.position.array;
      for(let i=0; i<count; i++) {
          const i3 = i * 3;
          // Turbulence effect
          positions[i3+2] += Math.sin(t * 0.001 + positions[i3]) * 2;
      }
      geo.attributes.position.needsUpdate = true;
      
      renderer.render(scene, camera);
  }
  animate(0);`
        },
        variants: [

        ]
    },
    {
        id: "comp-pqz2p4",
        name: "New Component",
        category: "Buttons",
        tags: ["hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Level 31 | Dimensional Collapse</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  </head>
  <body>
      <div id="reality-anchor">
          <button id="dimension-btn">
              <span class="glitch-txt" data-text="VOID_COLLAPSE">VOID_COLLAPSE</span>
              <div class="scanlines"></div>
          </button>
      </div>
      <canvas id="warp-canvas"></canvas>
  </body>
  </html>`,
            css: `@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');
  
  body, html { margin: 0; background: #000; overflow: hidden; height: 100vh; cursor: crosshair; }
  
  #reality-anchor {
      position: absolute; inset: 0;
      display: flex; justify-content: center; align-items: center;
      z-index: 100;
  }
  
  #dimension-btn {
      background: transparent; border: 1px solid rgba(255, 255, 255, 0.05);
      padding: 60px 120px; cursor: pointer; position: relative;
      overflow: hidden; backdrop-filter: blur(30px) brightness(1.5);
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .glitch-txt {
      color: #fff; font-family: 'Major Mono Display', monospace;
      font-size: 1.8rem; letter-spacing: 20px; position: relative; z-index: 5;
      mix-blend-mode: difference;
  }
  
  .scanlines {
      position: absolute; inset: 0;
      background: repeating-linear-gradient(0deg, transparent, rgba(0, 255, 255, 0.05) 2px, transparent 4px);
      pointer-events: none; opacity: 0.3;
  }
  
  #dimension-btn:hover {
      border-color: #ff00ff;
      box-shadow: 0 0 60px rgba(255, 0, 255, 0.2), inset 0 0 20px rgba(0, 255, 255, 0.2);
      transform: perspective(1000px) rotateX(10deg) rotateY(-10deg);
  }
  
  #dimension-btn:active { transform: scale(0.9) rotate(0deg); filter: hue-rotate(90deg); }
  
  canvas { position: absolute; inset: 0; z-index: 1; pointer-events: none; }`,
            js: `// --- 1. CORE ARCHITECTURE ---
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('warp-canvas'), antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  // --- 2. THE NEURAL GEOMETRY (50k Atoms) ---
  const count = 50000;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  const originalPos = new Float32Array(count * 3);
  
  for(let i=0; i<count; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 2500;
      pos[i3+1] = (Math.random() - 0.5) * 2500;
      pos[i3+2] = (Math.random() - 0.5) * 2500;
      originalPos.set([pos[i3], pos[i3+1], pos[i3+2]], i3);
  }
  
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const material = new THREE.PointsMaterial({
      size: 1.5, color: 0xffffff, transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending
  });
  const points = new THREE.Points(geo, material);
  scene.add(points);
  camera.position.z = 1000;
  
  // --- 3. INTERACTION & DISPLACEMENT ---
  let mouse = { x: 0, y: 0 };
  window.addEventListener('mousemove', (e) => {
      mouse.x = (e.clientX - window.innerWidth / 2) * 1.5;
      mouse.y = -(e.clientY - window.innerHeight / 2) * 1.5;
  });
  
  // --- 4. RENDER LOOP (THE GOD MATH) ---
  function animate(t) {
      requestAnimationFrame(animate);
      
      const pArr = geo.attributes.position.array;
      const time = t * 0.001;
  
      for(let i=0; i<count; i++) {
          const i3 = i * 3;
          
          // Non-Euclidean Warp Math
          const dx = pArr[i3] - mouse.x;
          const dy = pArr[i3+1] - mouse.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          
          if(dist < 300) {
              const force = (300 - dist) / 300;
              pArr[i3] += dx / dist * force * 10; // Repel
              pArr[i3+1] += dy / dist * force * 10;
              pArr[i3+2] += force * 20; // Push to Z
          }
  
          // Home Elasticity (Smooth Return)
          pArr[i3] += (originalPos[i3] - pArr[i3]) * 0.02;
          pArr[i3+1] += (originalPos[i3+1] - pArr[i3+1]) * 0.02;
          pArr[i3+2] += (originalPos[i3+2] - pArr[i3+2]) * 0.02;
          
          // Fractal Noise
          pArr[i3+1] += Math.sin(time + pArr[i3] * 0.01) * 0.5;
      }
  
      geo.attributes.position.needsUpdate = true;
      points.rotation.y += 0.0005;
      renderer.render(scene, camera);
  }
  
  animate(0);
  
  window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
  });`
        },
        variants: [

        ]
    },
    {
        id: "new-component-n6qj11",
        name: "New Component",
        category: "Buttons",
        tags: ["hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Level 33 | Monolith Engine</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/tween.js/18.6.4/tween.umd.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
  </head>
  <body>
      <div id="monolith-container">
          <button id="god-btn">
              <div id="shape-shifter"></div>
              <span class="btn-label">INITIATE_COLLAPSE</span>
          </button>
      </div>
      <canvas id="world-canvas"></canvas>
  </body>
  </html>`,
            css: `@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap');
  
  body, html { margin: 0; background: #000; overflow: hidden; height: 100vh; }
  
  #monolith-container {
      position: absolute; inset: 0;
      display: flex; justify-content: center; align-items: center;
      z-index: 100;
  }
  
  #god-btn {
      width: 350px; height: 350px; /* Circular Base */
      background: transparent; border: none;
      cursor: pointer; position: relative;
      display: flex; justify-content: center; align-items: center;
  }
  
  /* The Shape Shifter Layer (Morphing Geometry via CSS & JS) */
  #shape-shifter {
      position: absolute; inset: 0;
      border: 2px solid #00f2ff;
      background: rgba(0, 242, 255, 0.05);
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; /* Initial Blob Shape */
      animation: morph 8s linear infinite;
      transition: all 0.5s ease;
      backdrop-filter: blur(10px);
  }
  
  @keyframes morph {
      0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; transform: rotate(0deg); }
      33% { border-radius: 50% 50% 20% 80% / 25% 80% 20% 75%; }
      66% { border-radius: 67% 33% 47% 53% / 37% 48% 52% 63%; }
  }
  
  .btn-label {
      color: #fff; font-family: 'Space Mono', monospace;
      font-size: 1rem; letter-spacing: 5px; z-index: 10;
      pointer-events: none; text-shadow: 0 0 20px #00f2ff;
  }
  
  #god-btn:hover #shape-shifter {
      background: rgba(255, 255, 255, 0.1);
      border-color: #ffffff;
      box-shadow: 0 0 100px rgba(0, 242, 255, 0.4);
      transform: scale(1.1);
  }
  
  canvas { position: absolute; inset: 0; z-index: 1; pointer-events: none; }`,
            js: `/**
   * LEVEL 33 CORE: Integrating Three.js + GSAP + TWEEN + Confetti + Custom GLSL
   */
  
  // 1. SCENE ARCHITECTURE
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('world-canvas'), antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  // 2. THE VOLUMETRIC TORUS-FIELD (Instanced Mesh)
  const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
  const material = new THREE.MeshPhongMaterial({ 
      color: 0x00f2ff, 
      wireframe: true,
      emissive: 0x00f2ff,
      emissiveIntensity: 0.5
  });
  
  const monolith = new THREE.Mesh(geometry, material);
  scene.add(monolith);
  
  // Particles for Spatial Depth
  const pGeo = new THREE.BufferGeometry();
  const pCount = 5000;
  const pPos = new Float32Array(pCount * 3);
  for(let i=0; i<pCount*3; i++) pPos[i] = (Math.random() - 0.5) * 2000;
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  const pMat = new THREE.PointsMaterial({ size: 2, color: 0xffffff, transparent: true, opacity: 0.3 });
  const pField = new THREE.Points(pGeo, pMat);
  scene.add(pField);
  
  camera.position.z = 100;
  
  // 3. MOTION SYNC ENGINE
  let mouse = { x: 0, y: 0 };
  window.addEventListener('mousemove', (e) => {
      mouse.x = (e.clientX - window.innerWidth/2) * 0.1;
      mouse.y = (e.clientY - window.innerHeight/2) * 0.1;
      
      // Smooth Camera Sway
      gsap.to(camera.position, { x: mouse.x, y: -mouse.y, duration: 1.5 });
  });
  
  // 4. THE GOD-MODE CLICK (Multi-Library Trigger)
  const btn = document.getElementById('god-btn');
  btn.addEventListener('click', (e) => {
      // A. Confetti Explosion (Physics Library 1)
      confetti({
          particleCount: 150, spread: 70, origin: { y: 0.6 },
          colors: ['#00f2ff', '#ffffff', '#7000ff']
      });
  
      // B. GSAP Hyper-Scale (Animation Library 2)
      gsap.to(monolith.scale, { x: 5, y: 5, z: 5, duration: 0.5, yoyo: true, repeat: 1 });
      
      // C. Tween.js Rotation Warp (Animation Library 3)
      new TWEEN.Tween(monolith.rotation)
          .to({ x: monolith.rotation.x + Math.PI*2, y: monolith.rotation.y + Math.PI*2 }, 1000)
          .easing(TWEEN.Easing.Elastic.Out)
          .start();
  
      // D. CSS Shape Shift (DOM Library)
      const shifter = document.getElementById('shape-shifter');
      shifter.style.borderRadius = "0%"; // Instant Square Morph
      setTimeout(() => shifter.style.borderRadius = "", 1000);
  });
  
  // 5. RENDER CORE
  function animate(time) {
      requestAnimationFrame(animate);
      TWEEN.update(time);
      
      monolith.rotation.z += 0.01;
      monolith.rotation.x += 0.005;
      
      // Pulse based on time
      const s = 1 + Math.sin(time * 0.002) * 0.1;
      monolith.scale.set(s, s, s);
      
      renderer.render(scene, camera);
  }
  animate();
  
  // Handle Resize
  window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
  });`
        },
        variants: [

        ]
    },
    {
        id: "comp-55ee30",
        name: "New Component",
        category: "Buttons",
        tags: ["hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Level 34 | Quantum Assembler</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  </head>
  <body>
      <div id="assembler-ui">
          <button id="quantum-btn">
              <span class="label">ASSEMBLE_CORE</span>
          </button>
      </div>
      <canvas id="gl-canvas"></canvas>
  </body>
  </html>`,
            css: `@import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@700&display=swap');
  
  body, html { margin: 0; background: #000; overflow: hidden; height: 100vh; }
  
  #assembler-ui {
      position: absolute; inset: 0;
      display: flex; justify-content: center; align-items: center;
      z-index: 100;
  }
  
  #quantum-btn {
      width: 300px; height: 300px;
      background: transparent; border: none;
      cursor: pointer; position: relative;
      display: flex; justify-content: center; align-items: center;
  }
  
  .label {
      color: #fff; font-family: 'Syncopate', sans-serif;
      font-size: 0.9rem; letter-spacing: 10px; z-index: 10;
      pointer-events: none; mix-blend-mode: exclusion;
      transition: letter-spacing 0.5s ease;
  }
  
  #quantum-btn:hover .label { letter-spacing: 20px; color: #00ffcc; }
  
  canvas { position: absolute; inset: 0; z-index: 1; }`,
            js: `// --- 1. SHADER CODE (GLSL) ---
  // This runs directly on the GPU for god-level performance
  const _VERTEX = \`
      varying vec2 vUv;
      varying vec3 vNormal;
      uniform float uTime;
      void main() {
          vUv = uv;
          vNormal = normal;
          vec3 newPos = position + normal * sin(position.y * 10.0 + uTime) * 2.0;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
      }
  \`;
  
  const _FRAGMENT = \`
      varying vec2 vUv;
      varying vec3 vNormal;
      uniform float uTime;
      void main() {
          vec3 color = 0.5 + 0.5 * cos(uTime + vNormal + vec3(0,2,4));
          gl_FragColor = vec4(color, 0.8);
      }
  \`;
  
  // --- 2. ENGINE SETUP ---
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('gl-canvas'), antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  // --- 3. THE MORPHING CORE ---
  const geometry = new THREE.IcosahedronGeometry(20, 50);
  const material = new THREE.ShaderMaterial({
      vertexShader: _VERTEX,
      fragmentShader: _FRAGMENT,
      uniforms: { uTime: { value: 0 } },
      wireframe: true,
      transparent: true
  });
  
  const core = new THREE.Mesh(geometry, material);
  scene.add(core);
  
  // 40,000 Particle Swarm
  const pGeo = new THREE.BufferGeometry();
  const pCount = 40000;
  const pPos = new Float32Array(pCount * 3);
  for(let i=0; i<pCount*3; i++) pPos[i] = (Math.random() - 0.5) * 1500;
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  const pMat = new THREE.PointsMaterial({ size: 1, color: 0x00ffcc, transparent: true, opacity: 0.2 });
  const swarm = new THREE.Points(pGeo, pMat);
  scene.add(swarm);
  
  camera.position.z = 100;
  
  // --- 4. INTERACTION ---
  let targetRotation = 0;
  window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      gsap.to(core.rotation, { y: x * 5, x: x * 2, duration: 1 });
  });
  
  const btn = document.getElementById('quantum-btn');
  btn.addEventListener('mouseenter', () => {
      gsap.to(material.uniforms.uTime, { value: 10, duration: 2 });
      gsap.to(core.scale, { x: 1.5, y: 1.5, z: 1.5, duration: 1, ease: "expo.out" });
  });
  
  btn.addEventListener('mouseleave', () => {
      gsap.to(core.scale, { x: 1, y: 1, z: 1, duration: 1.5, ease: "elastic.out(1, 0.3)" });
  });
  
  // --- 5. LOOP ---
  function animate(t) {
      requestAnimationFrame(animate);
      material.uniforms.uTime.value = t * 0.002;
      swarm.rotation.y += 0.001;
      renderer.render(scene, camera);
  }
  animate(0);
  
  window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
  });`
        },
        variants: [

        ]
    },
    {
        id: "comp-dhejqe",
        name: "New Component",
        category: "Buttons",
        tags: ["hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Level 35 | Kinetic Singularity</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  </head>
  <body>
      <div id="interaction-layer">
          <button id="kinetic-btn">
              <span class="glitch-txt" data-text="KINETIC_SYNC">KINETIC_SYNC</span>
              <div class="touch-ripple"></div>
          </button>
      </div>
      <canvas id="singularity-canvas"></canvas>
  </body>
  </html>`,
            css: `@import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@700&display=swap');
  
  body, html { margin: 0; background: #000; overflow: hidden; height: 100vh; cursor: crosshair; }
  
  #interaction-layer {
      position: absolute; inset: 0;
      display: flex; justify-content: center; align-items: center;
      z-index: 100;
  }
  
  #kinetic-btn {
      padding: 60px 120px; background: transparent;
      border: 1px solid rgba(0, 255, 255, 0.2);
      cursor: pointer; position: relative; overflow: hidden;
      backdrop-filter: blur(15px); transition: 0.4s;
  }
  
  .glitch-txt {
      color: #fff; font-family: 'Syncopate', sans-serif;
      font-size: 1.5rem; letter-spacing: 20px; position: relative;
      z-index: 10; transition: all 0.3s;
  }
  
  /* Touch Effect: Ripple */
  .touch-ripple {
      position: absolute; background: radial-gradient(circle, #00f2ff, transparent);
      width: 0; height: 0; border-radius: 50%;
      transform: translate(-50%, -50%); pointer-events: none; opacity: 0;
  }
  
  #kinetic-btn:hover .glitch-txt {
      letter-spacing: 30px; text-shadow: 2px 0 red, -2px 0 blue; /* Chromatic Aberration */
  }
  
  canvas { position: absolute; inset: 0; z-index: 1; pointer-events: none; }`,
            js: `// --- 1. THE 3D CORE ---
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('singularity-canvas'), antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  // --- 2. THE KINETIC PARTICLES (50k Swarm) ---
  const count = 50000;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  const vel = new Float32Array(count * 3);
  
  for(let i=0; i<count*3; i++) {
      pos[i] = (Math.random() - 0.5) * 1500;
      vel[i] = 0;
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({ size: 2, color: 0x00f2ff, transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending });
  const particles = new THREE.Points(geo, mat);
  scene.add(particles);
  
  camera.position.z = 800;
  
  // --- 3. THE TOUCH & MOUSE INTERACTION ENGINE ---
  let mouse = { x: 0, y: 0, active: false };
  const btn = document.getElementById('kinetic-btn');
  const ripple = document.querySelector('.touch-ripple');
  
  // Tracking Touch/Mouse Pressure
  window.addEventListener('mousemove', (e) => {
      mouse.x = (e.clientX - window.innerWidth/2);
      mouse.y = -(e.clientY - window.innerHeight/2);
      
      // Parallax for text
      gsap.to('.glitch-txt', {
          x: (e.clientX - window.innerWidth/2) * 0.05,
          y: (e.clientY - window.innerHeight/2) * 0.05,
          duration: 0.5
      });
  });
  
  // IMPACT EFFECT (Click/Touch)
  btn.addEventListener('mousedown', (e) => {
      mouse.active = true;
      
      // UI Ripple
      const rect = btn.getBoundingClientRect();
      ripple.style.left = \`\${e.clientX - rect.left}px\`;
      ripple.style.top = \`\${e.clientY - rect.top}px\`;
      gsap.fromTo(ripple, { width: 0, height: 0, opacity: 0.8 }, { width: 500, height: 500, opacity: 0, duration: 0.8 });
      
      // 3D Warp
      gsap.to(camera.position, { z: 400, duration: 0.3, ease: "expo.out" });
      gsap.to(mat, { size: 10, opacity: 1, duration: 0.1 });
  });
  
  btn.addEventListener('mouseup', () => {
      mouse.active = false;
      gsap.to(camera.position, { z: 800, duration: 1.5, ease: "elastic.out(1, 0.3)" });
      gsap.to(mat, { size: 2, opacity: 0.4, duration: 1 });
  });
  
  // --- 4. RENDER LOOP (Physics Calculation) ---
  function animate(t) {
      requestAnimationFrame(animate);
      
      const pArr = geo.attributes.position.array;
      for(let i=0; i<count; i++) {
          const i3 = i * 3;
          
          // Distance from mouse/touch point
          const dx = pArr[i3] - mouse.x;
          const dy = pArr[i3+1] - mouse.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          
          if(dist < 200) {
              const force = (200 - dist) / 200;
              if(mouse.active) {
                  // Sucking effect on click
                  pArr[i3] -= dx * 0.1;
                  pArr[i3+1] -= dy * 0.1;
              } else {
                  // Repel effect on hover
                  pArr[i3] += dx / dist * force * 10;
                  pArr[i3+1] += dy / dist * force * 10;
              }
          }
          
          // Constant drift
          pArr[i3] += Math.sin(t * 0.001 + i) * 0.2;
          pArr[i3+1] += Math.cos(t * 0.001 + i) * 0.2;
      }
      
      geo.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
  }
  animate(0);`
        },
        variants: [

        ]
    },
    {
        id: "comp-q8ajj7",
        name: "New Component",
        category: "Buttons",
        tags: ["hover", "3d"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Level 36 | Refractive Engine</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  </head>
  <body>
      <div id="ui-hub">
          <div id="glass-container">
              <button id="refract-btn">
                  <svg class="liquid-border" viewBox="0 0 300 120">
                      <path d="M10,60 Q10,10 60,10 L240,10 Q290,10 290,60 Q290,110 240,110 L60,110 Q10,110 10,60" />
                  </svg>
                  <span class="deep-text">REFRACT_CORE</span>
              </button>
          </div>
      </div>
      <canvas id="optics-canvas"></canvas>
  </body>
  </html>`,
            css: `@import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@700&display=swap');
  
  body, html { margin: 0; background: #020202; overflow: hidden; height: 100vh; font-family: 'Syncopate', sans-serif; }
  
  #ui-hub {
      position: absolute; inset: 0;
      display: flex; justify-content: center; align-items: center;
      z-index: 100; perspective: 1500px;
  }
  
  #glass-container { transform-style: preserve-3d; }
  
  #refract-btn {
      width: 320px; height: 130px; background: rgba(255, 255, 255, 0.02);
      border: none; cursor: pointer; position: relative;
      display: flex; justify-content: center; align-items: center;
      backdrop-filter: blur(25px); border-radius: 20px;
      transition: transform 0.1s linear;
  }
  
  .liquid-border {
      position: absolute; inset: -10px; width: calc(100% + 20px); height: calc(100% + 20px);
      fill: none; stroke: rgba(0, 242, 255, 0.5); stroke-width: 2;
      filter: drop-shadow(0 0 10px #00f2ff);
  }
  
  .deep-text {
      color: #fff; font-size: 1.1rem; letter-spacing: 12px;
      z-index: 10; pointer-events: none;
      text-shadow: 0 5px 15px rgba(0,0,0,0.5);
      transform: translateZ(50px); /* 3D Depth */
  }
  
  #refract-btn:hover .deep-text { letter-spacing: 18px; color: #00f2ff; }
  
  canvas { position: absolute; inset: 0; z-index: 1; pointer-events: none; }`,
            js: `// --- 1. THREE.JS PARTICLE OPTICS ---
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('optics-canvas'), antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  // Create thousands of light-trace particles
  const count = 15000;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  for(let i=0; i<count*3; i++) pos[i] = (Math.random() - 0.5) * 2000;
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  
  const mat = new THREE.PointsMaterial({ 
      size: 2, color: 0x00f2ff, transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending 
  });
  const particles = new THREE.Points(geo, mat);
  scene.add(particles);
  camera.position.z = 800;
  
  // --- 2. SVG PATH MORPHING ---
  const path = document.querySelector('.liquid-border path');
  let step = 0;
  function updatePath() {
      step += 0.05;
      const warp = Math.sin(step) * 15;
      // Modifying the Bezier curves of the SVG dynamically
      const d = \`M10,60 Q\${10+warp},\${10-warp} 60,10 L240,10 Q\${290-warp},\${10+warp} 290,60 Q\${290+warp},\${110+warp} 240,110 L60,110 Q\${10-warp},\${110-warp} 10,60\`;
      path.setAttribute('d', d);
      requestAnimationFrame(updatePath);
  }
  updatePath();
  
  // --- 3. 3D TILT & REFRACTION LOGIC ---
  const btn = document.getElementById('refract-btn');
  window.addEventListener('mousemove', (e) => {
      const x = (e.clientX - window.innerWidth/2) / (window.innerWidth/2);
      const y = (e.clientY - window.innerHeight/2) / (window.innerHeight/2);
  
      // Rotate Button in 3D
      gsap.to(btn, {
          rotationY: x * 30,
          rotationX: -y * 30,
          duration: 0.5
      });
  
      // Move Particles inversely (Simulating Refraction shift)
      gsap.to(particles.rotation, {
          y: x * 0.5,
          x: y * 0.5,
          duration: 1
      });
  });
  
  // Click Interaction (Shockwave)
  btn.addEventListener('mousedown', () => {
      gsap.to(btn, { scale: 0.9, duration: 0.1 });
      gsap.to(mat, { size: 8, opacity: 0.8, duration: 0.2 });
  });
  
  btn.addEventListener('mouseup', () => {
      gsap.to(btn, { scale: 1, duration: 0.5, ease: "elastic.out(1, 0.3)" });
      gsap.to(mat, { size: 2, opacity: 0.3, duration: 1 });
  });
  
  // Render Loop
  function render() {
      particles.position.z += 0.5;
      if(particles.position.z > 500) particles.position.z = 0;
      renderer.render(scene, camera);
      requestAnimationFrame(render);
  }
  render();`
        },
        variants: [

        ]
    },
    {
        id: "comp-3av7sp",
        name: "New Component",
        category: "Buttons",
        tags: ["glow", "hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Level 37 | Plasma Membrane</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  </head>
  <body>
      <div id="membrane-wrapper">
          <button id="plasma-btn">
              <span class="neural-text">NEURAL_SYNC</span>
              <div class="heat-glow"></div>
          </button>
      </div>
      <canvas id="plasma-canvas"></canvas>
  </body>
  </html>`,
            css: `@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@900&display=swap');
  
  body, html { margin: 0; background: #000205; overflow: hidden; height: 100vh; cursor: crosshair; }
  
  #membrane-wrapper {
      position: absolute; inset: 0;
      display: flex; justify-content: center; align-items: center;
      z-index: 100;
  }
  
  #plasma-btn {
      width: 320px; height: 120px; background: transparent;
      border: none; cursor: pointer; position: relative;
      display: flex; justify-content: center; align-items: center;
  }
  
  .neural-text {
      color: #00ffcc; font-family: 'Exo 2', sans-serif;
      font-size: 1.4rem; letter-spacing: 15px; font-weight: 900;
      z-index: 10; text-shadow: 0 0 15px rgba(0, 255, 204, 0.5);
      pointer-events: none;
  }
  
  /* The God-Level Touch Effect */
  .heat-glow {
      position: absolute; inset: 0;
      background: radial-gradient(circle at var(--x) var(--y), rgba(0, 255, 204, 0.4) 0%, transparent 60%);
      border: 2px solid rgba(0, 255, 204, 0.1);
      border-radius: 60px; pointer-events: none; opacity: 0;
      transition: opacity 0.3s;
  }
  
  #plasma-btn:hover .heat-glow { opacity: 1; }
  
  #plasma-btn:active .neural-text {
      transform: scale(0.9) skewX(10deg);
      color: #ff00ff; /* Energy shift on click */
  }
  
  canvas { position: absolute; inset: 0; z-index: 1; filter: contrast(1.5) blur(1px); }`,
            js: `// --- 1. CORE THREE.JS SETUP ---
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 2000);
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('plasma-canvas'), antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  // --- 2. PLASMA FIELD (30k Particles with Wave Logic) ---
  const count = 30000;
  const geometry = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  const initialPos = new Float32Array(count * 3);
  
  for(let i=0; i<count*3; i++) {
      pos[i] = initialPos[i] = (Math.random() - 0.5) * 1600;
  }
  geometry.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  
  const material = new THREE.PointsMaterial({
      size: 2, color: 0x00ffcc, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending
  });
  const plasmaCloud = new THREE.Points(geometry, material);
  scene.add(plasmaCloud);
  camera.position.z = 800;
  
  // --- 3. DYNAMIC TOUCH MAPPING ---
  const btn = document.getElementById('plasma-btn');
  const heatGlow = document.querySelector('.heat-glow');
  let mouse = { x: 0, y: 0 };
  let isPressing = false;
  
  window.addEventListener('mousemove', (e) => {
      // Tracking for CSS Heat Map
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      btn.style.setProperty('--x', \`\${x}px\`);
      btn.style.setProperty('--y', \`\${y}px\`);
  
      // Normalized mouse for WebGL
      mouse.x = (e.clientX - window.innerWidth/2);
      mouse.y = -(e.clientY - window.innerHeight/2);
      
      // Smooth Camera Sway
      gsap.to(camera.position, { x: mouse.x * 0.1, y: mouse.y * 0.1, duration: 2 });
  });
  
  btn.addEventListener('mousedown', () => {
      isPressing = true;
      gsap.to(material, { size: 8, color: 0xff00ff, duration: 0.2 });
      gsap.to(camera.position, { z: 500, duration: 0.3 });
  });
  
  window.addEventListener('mouseup', () => {
      isPressing = false;
      gsap.to(material, { size: 2, color: 0x00ffcc, duration: 1 });
      gsap.to(camera.position, { z: 800, duration: 2, ease: "elastic.out(1, 0.3)" });
  });
  
  // --- 4. THE RENDER LOOP (Organic Physics) ---
  function animate(time) {
      requestAnimationFrame(animate);
      
      const pArr = geometry.attributes.position.array;
      const t = time * 0.002;
  
      for(let i=0; i<count; i++) {
          const i3 = i * 3;
          
          // Simplex-like Wave Motion
          const wave = Math.sin(t + pArr[i3]*0.01) * 2;
          pArr[i3+1] += wave * 0.5;
  
          // Pointer Influence
          const dx = pArr[i3] - mouse.x;
          const dy = pArr[i3+1] - mouse.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          
          if(dist < 250) {
              const pull = isPressing ? -15 : 8; // Sucking or Repelling
              pArr[i3] += dx / dist * pull;
              pArr[i3+1] += dy / dist * pull;
          }
  
          // Return to Equilibrium
          pArr[i3] += (initialPos[i3] - pArr[i3]) * 0.03;
          pArr[i3+1] += (initialPos[i3+1] - pArr[i3+1]) * 0.03;
      }
  
      geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
  }
  animate(0);`
        },
        variants: [

        ]
    },
    {
        id: "comp-14hd69",
        name: "New Component",
        category: "Buttons",
        tags: ["hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Level 38 | Hyper-Hologram</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  </head>
  <body>
      <div id="hologram-stage">
          <button id="hyper-btn">
              <span class="nano-text">QUANTUM_BREACH</span>
              <div class="glass-glare"></div>
          </button>
      </div>
      <canvas id="subatomic-canvas"></canvas>
  </body>
  </html>`,
            css: `@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');
  
  body, html { margin: 0; background: #000; overflow: hidden; height: 100vh; cursor: none; }
  
  #hologram-stage {
      position: absolute; inset: 0;
      display: flex; justify-content: center; align-items: center;
      z-index: 100;
  }
  
  #hyper-btn {
      width: 350px; height: 120px; background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(0, 255, 255, 0.1);
      cursor: pointer; position: relative;
      display: flex; justify-content: center; align-items: center;
      backdrop-filter: blur(40px) saturate(2);
      border-radius: 5px; overflow: hidden;
      transition: 0.4s cubic-bezier(0.2, 1, 0.2, 1);
  }
  
  .nano-text {
      color: #fff; font-family: 'Major Mono Display', monospace;
      font-size: 1.5rem; letter-spacing: 15px; z-index: 10;
      mix-blend-mode: overlay; text-shadow: 0 0 20px #00f2ff;
  }
  
  /* Sub-Atomic Glare Effect */
  .glass-glare {
      position: absolute; inset: 0;
      background: linear-gradient(135deg, transparent, rgba(255,255,255,0.1), transparent);
      transform: translateX(-100%); transition: 0.6s;
  }
  
  #hyper-btn:hover .glass-glare { transform: translateX(100%); }
  #hyper-btn:hover {
      border-color: #00f2ff;
      box-shadow: 0 0 50px rgba(0, 242, 255, 0.2);
      transform: scale(1.05) rotateX(10deg);
  }
  
  canvas { position: absolute; inset: 0; z-index: 1; filter: contrast(1.8) hue-rotate(-20deg); }`,
            js: `// --- 1. THE ARCHITECTURE ---
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('subatomic-canvas'), antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  // --- 2. THE NEURAL SWARM (70,000 Atoms) ---
  const count = 70000;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  const dynamics = new Float32Array(count); // Individual atom speed
  
  for(let i=0; i<count; i++) {
      pos[i*3] = (Math.random() - 0.5) * 2000;
      pos[i*3+1] = (Math.random() - 0.5) * 2000;
      pos[i*3+2] = (Math.random() - 0.5) * 1000;
      dynamics[i] = Math.random() * 2 + 0.5;
  }
  
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({
      size: 1.2, color: 0x00f2ff, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending
  });
  const swarm = new THREE.Points(geo, mat);
  scene.add(swarm);
  camera.position.z = 800;
  
  // --- 3. THE GOD-TIER INTERACTION ---
  let mouse = { x: 0, y: 0 };
  let ripple = 0;
  
  window.addEventListener('mousemove', (e) => {
      mouse.x = (e.clientX - window.innerWidth/2);
      mouse.y = -(e.clientY - window.innerHeight/2);
      
      // Parallax Tilt for the swarm
      gsap.to(swarm.rotation, { x: mouse.y * 0.0005, y: mouse.x * 0.0005, duration: 1 });
  });
  
  const btn = document.getElementById('hyper-btn');
  btn.addEventListener('mousedown', () => {
      ripple = 50; // Activate shockwave
      gsap.to(mat, { size: 10, color: 0xff0055, duration: 0.2 });
      gsap.to(camera.position, { z: 400, duration: 0.5, ease: "power4.in" });
  });
  
  window.addEventListener('mouseup', () => {
      gsap.to(mat, { size: 1.2, color: 0x00f2ff, duration: 1 });
      gsap.to(camera.position, { z: 800, duration: 1.5, ease: "elastic.out(1, 0.3)" });
  });
  
  // --- 4. RENDER LOOP (The Quantum Simulation) ---
  function animate(t) {
      requestAnimationFrame(animate);
      
      const positions = geo.attributes.position.array;
      const time = t * 0.001;
      
      if (ripple > 0) ripple *= 0.95; // Decay of the shockwave
  
      for(let i=0; i<count; i++) {
          const i3 = i * 3;
          
          // Simplex-inspired atomic drift
          positions[i3+1] += Math.sin(time + positions[i3]*0.01) * 0.5;
          
          // Impact Logic
          const dx = positions[i3] - mouse.x;
          const dy = positions[i3+1] - mouse.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          
          if (dist < 200 + ripple * 5) {
              const force = (ripple > 1) ? ripple * 0.5 : 2;
              positions[i3] += dx / dist * force;
              positions[i3+1] += dy / dist * force;
          }
      }
      
      geo.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
  }
  animate(0);`
        },
        variants: [

        ]
    },
    {
        id: "comp-eoj2h8",
        name: "New Component",
        category: "Buttons",
        tags: ["hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Level 39 | Singularity Core</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  </head>
  <body>
      <div id="core-wrap">
          <button id="singularity-btn">
              <span class="core-text">CORE_v39</span>
              <div class="magnetic-field"></div>
          </button>
      </div>
      <canvas id="physics-canvas"></canvas>
  </body>
  </html>`,
            css: `@import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@700&display=swap');
  
  body, html { margin: 0; background: #000; overflow: hidden; height: 100vh; cursor: crosshair; }
  
  #core-wrap {
      position: absolute; inset: 0;
      display: flex; justify-content: center; align-items: center;
      z-index: 100;
  }
  
  #singularity-btn {
      width: 280px; height: 280px;
      background: transparent; border: none;
      cursor: pointer; position: relative;
      border-radius: 50%; display: flex;
      justify-content: center; align-items: center;
  }
  
  .core-text {
      color: #fff; font-family: 'Syncopate', sans-serif;
      font-size: 1rem; letter-spacing: 10px; z-index: 10;
      pointer-events: none; transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  }
  
  .magnetic-field {
      position: absolute; inset: -20px;
      border: 2px solid #00f2ff; border-radius: 50%;
      opacity: 0.3; transition: 0.8s;
      box-shadow: 0 0 30px #00f2ff, inset 0 0 30px #00f2ff;
  }
  
  #singularity-btn:hover .magnetic-field {
      opacity: 1; transform: scale(1.1) rotate(180deg);
      border-style: dashed;
  }
  
  #singularity-btn:hover .core-text {
      letter-spacing: 25px; color: #00f2ff;
      text-shadow: 0 0 20px #00f2ff;
  }
  
  canvas { position: absolute; inset: 0; z-index: 1; pointer-events: none; }`,
            js: `// --- 1. ENGINE SETUP ---
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 2000);
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('physics-canvas'), antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  // --- 2. ATOMIC SWARM (90,000 Particles) ---
  const count = 90000;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  const originalPos = new Float32Array(count * 3);
  
  for(let i=0; i<count*3; i++) {
      pos[i] = originalPos[i] = (Math.random() - 0.5) * 1800;
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  
  const mat = new THREE.PointsMaterial({
      size: 1.5, color: 0x00f2ff, transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending
  });
  const swarm = new THREE.Points(geo, mat);
  scene.add(swarm);
  camera.position.z = 800;
  
  // --- 3. PHYSICS & INTERACTION ---
  let mouse = { x: 0, y: 0 };
  let isHovered = false;
  let isClicked = false;
  
  window.addEventListener('mousemove', (e) => {
      mouse.x = (e.clientX - window.innerWidth/2);
      mouse.y = -(e.clientY - window.innerHeight/2);
      gsap.to(camera.position, { x: mouse.x*0.1, y: mouse.y*0.1, duration: 2 });
  });
  
  const btn = document.getElementById('singularity-btn');
  btn.addEventListener('mouseenter', () => isHovered = true);
  btn.addEventListener('mouseleave', () => isHovered = false);
  btn.addEventListener('mousedown', () => {
      isClicked = true;
      gsap.to(camera.position, { z: 400, duration: 0.4 });
  });
  window.addEventListener('mouseup', () => {
      isClicked = false;
      gsap.to(camera.position, { z: 800, duration: 1.5, ease: "elastic.out(1, 0.3)" });
  });
  
  // --- 4. RENDER LOOP (Singularity Logic) ---
  function animate(t) {
      requestAnimationFrame(animate);
      
      const pArr = geo.attributes.position.array;
      const time = t * 0.001;
  
      for(let i=0; i<count; i++) {
          const i3 = i * 3;
          
          // Target calculation (Center of button)
          const dx = pArr[i3] - 0;
          const dy = pArr[i3+1] - 0;
          const dist = Math.sqrt(dx*dx + dy*dy);
          
          if (isHovered || isClicked) {
              // Sucking particles into the center (Singularity)
              const force = isClicked ? 0.05 : 0.01;
              pArr[i3] -= dx * force;
              pArr[i3+1] -= dy * force;
              
              // Re-spawn particles if they get too close to center
              if(dist < 10) {
                  pArr[i3] = (Math.random() - 0.5) * 1800;
                  pArr[i3+1] = (Math.random() - 0.5) * 1800;
              }
          } else {
              // Natural drift & Return to home
              pArr[i3] += (originalPos[i3] - pArr[i3]) * 0.02;
              pArr[i3+1] += (originalPos[i3+1] - pArr[i3+1]) * 0.02;
              
              // Wave motion
              pArr[i3+1] += Math.sin(time + pArr[i3]*0.01) * 0.3;
          }
      }
      
      geo.attributes.position.needsUpdate = true;
      swarm.rotation.z += 0.001;
      renderer.render(scene, camera);
  }
  animate(0);`
        },
        variants: [
            {
                id: "v1",
                name: "Variant 1",
                code: {
                    html: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Level 39.2 | Fractal Void</title>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
      </head>
      <body>
          <div id="fractal-stage">
              <button id="void-btn">
                  <div class="echo-layer"></div>
                  <span class="fractal-text">FRACTAL_v39.2</span>
                  <svg class="morph-svg" viewBox="0 0 100 100">
                      <polygon id="poly" points="50,5 95,95 5,95" />
                  </svg>
              </button>
          </div>
          <canvas id="void-canvas"></canvas>
      </body>
      </html>`,
                    css: `@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@900&display=swap');
      
      body, html { margin: 0; background: #000; overflow: hidden; height: 100vh; cursor: none; }
      
      #fractal-stage {
          position: absolute; inset: 0;
          display: flex; justify-content: center; align-items: center;
          z-index: 100;
      }
      
      #void-btn {
          width: 300px; height: 150px; background: transparent;
          border: none; cursor: pointer; position: relative;
          display: flex; justify-content: center; align-items: center;
      }
      
      .fractal-text {
          color: #fff; font-family: 'Orbitron', sans-serif;
          font-size: 1.2rem; letter-spacing: 10px; z-index: 10;
          pointer-events: none; text-shadow: 0 0 20px #ff00ff;
      }
      
      .morph-svg {
          position: absolute; inset: 0; width: 100%; height: 100%;
          fill: none; stroke: #ff00ff; stroke-width: 1;
          filter: drop-shadow(0 0 15px #ff00ff);
          transition: 0.5s ease-in-out;
      }
      
      .echo-layer {
          position: absolute; inset: 0; border: 1px solid rgba(255, 0, 255, 0.2);
          transform: scale(1.2); opacity: 0; transition: 0.3s;
      }
      
      #void-btn:hover .echo-layer { opacity: 1; transform: scale(1.5); }
      #void-btn:hover .fractal-text { color: #00f2ff; text-shadow: 0 0 20px #00f2ff; }
      #void-btn:hover .morph-svg { stroke: #00f2ff; filter: drop-shadow(0 0 15px #00f2ff); }
      
      canvas { position: absolute; inset: 0; z-index: 1; pointer-events: none; }`,
                    js: `// --- 1. THE ARCHITECTURE ---
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
      const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('void-canvas'), antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      
      // --- 2. MULTI-COLOR NEURAL SWARM (80k Particles) ---
      const count = 80000;
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const originalPos = new Float32Array(count * 3);
      
      for(let i=0; i<count; i++) {
          const i3 = i * 3;
          pos[i3] = originalPos[i3] = (Math.random() - 0.5) * 1800;
          pos[i3+1] = originalPos[i3+1] = (Math.random() - 0.5) * 1800;
          pos[i3+2] = originalPos[i3+2] = (Math.random() - 0.5) * 500;
          
          // Initial color: Pink/Cyan mix
          colors[i3] = Math.random();
          colors[i3+1] = 0;
          colors[i3+2] = 1;
      }
      
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      
      const mat = new THREE.PointsMaterial({
          size: 2, vertexColors: true, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending
      });
      const swarm = new THREE.Points(geo, mat);
      scene.add(swarm);
      camera.position.z = 900;
      
      // --- 3. INTERACTION & SHAPE MORPH ---
      let mouse = { x: 0, y: 0 };
      const poly = document.getElementById('poly');
      const shapes = [
          "50,5 95,95 5,95", // Triangle
          "5,5 95,5 95,95 5,95", // Square
          "50,5 95,35 80,95 20,95 5,35", // Pentagon
          "50,5 95,25 95,75 50,95 5,75 5,25" // Hexagon
      ];
      
      window.addEventListener('mousemove', (e) => {
          mouse.x = (e.clientX - window.innerWidth / 2);
          mouse.y = -(e.clientY - window.innerHeight / 2);
          
          // Dynamic SVG Morphing based on mouse X
          const index = Math.floor((e.clientX / window.innerWidth) * shapes.length);
          poly.setAttribute('points', shapes[index]);
      });
      
      const btn = document.getElementById('void-btn');
      btn.addEventListener('mousedown', () => {
          gsap.to(camera.position, { z: 500, duration: 0.5 });
          // Color Flash
          const cols = geo.attributes.color.array;
          for(let i=0; i<count*3; i++) cols[i] = Math.random();
          geo.attributes.color.needsUpdate = true;
      });
      
      window.addEventListener('mouseup', () => {
          gsap.to(camera.position, { z: 900, duration: 1.5, ease: "elastic.out(1, 0.3)" });
      });
      
      // --- 4. THE FRACTAL RENDER LOOP ---
      function animate(t) {
          requestAnimationFrame(animate);
          
          const pArr = geo.attributes.position.array;
          const time = t * 0.001;
      
          for(let i=0; i<count; i++) {
              const i3 = i * 3;
              
              // Target tracking with noise
              const dx = pArr[i3] - mouse.x;
              const dy = pArr[i3+1] - mouse.y;
              const dist = Math.sqrt(dx*dx + dy*dy);
              
              if (dist < 300) {
                  // "Orbital" motion instead of simple sucking
                  pArr[i3] += Math.sin(time + dist) * 2;
                  pArr[i3+1] += Math.cos(time + dist) * 2;
                  pArr[i3] -= dx * 0.01; // Soft pull
                  pArr[i3+1] -= dy * 0.01;
              } else {
                  // Fractal return
                  pArr[i3] += (originalPos[i3] - pArr[i3]) * 0.05;
                  pArr[i3+1] += (originalPos[i3+1] - pArr[i3+1]) * 0.05;
              }
          }
          
          geo.attributes.position.needsUpdate = true;
          swarm.rotation.y += 0.002;
          renderer.render(scene, camera);
      }
      animate(0);`
                }
            },
            {
                id: "v2",
                name: "Variant 2",
                code: {
                    html: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Level 39.3 | Kinetic Lattice</title>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
      </head>
      <body>
          <div id="lattice-stage">
              <button id="kinetic-btn">
                  <span class="ghost r">KINETIC_v39.3</span>
                  <span class="ghost g">KINETIC_v39.3</span>
                  <span class="ghost b">KINETIC_v39.3</span>
                  <span class="main-text">KINETIC_v39.3</span>
                  <div class="border-glow"></div>
              </button>
          </div>
          <canvas id="lattice-canvas"></canvas>
      </body>
      </html>`,
                    css: `@import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@700&display=swap');
      
      body, html { margin: 0; background: #050505; overflow: hidden; height: 100vh; cursor: crosshair; }
      
      #lattice-stage {
          position: absolute; inset: 0;
          display: flex; justify-content: center; align-items: center;
          z-index: 100;
      }
      
      #kinetic-btn {
          width: 320px; height: 100px; background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(0, 255, 255, 0.3); cursor: pointer;
          position: relative; overflow: visible; display: flex;
          justify-content: center; align-items: center;
          backdrop-filter: blur(10px); transition: 0.3s;
      }
      
      .main-text, .ghost {
          color: #fff; font-family: 'Syncopate', sans-serif;
          font-size: 1rem; letter-spacing: 12px; position: absolute;
          z-index: 10; pointer-events: none; transition: 0.5s;
      }
      
      .ghost { opacity: 0; mix-blend-mode: screen; }
      .r { color: #ff0055; }
      .g { color: #00ffaa; }
      .b { color: #0088ff; }
      
      /* Trigger Chromatic Ghosting on Hover */
      #kinetic-btn:hover .r { opacity: 0.8; transform: translate(-8px, -4px); }
      #kinetic-btn:hover .g { opacity: 0.8; transform: translate(8px, 4px); }
      #kinetic-btn:hover .b { opacity: 0.8; transform: translate(0px, 8px); }
      #kinetic-btn:hover .main-text { letter-spacing: 18px; }
      
      .border-glow {
          position: absolute; inset: -2px;
          border: 1px solid #00f2ff; opacity: 0;
          box-shadow: 0 0 30px #00f2ff; transition: 0.4s;
      }
      #kinetic-btn:hover .border-glow { opacity: 1; transform: scale(1.05, 1.2); }
      
      canvas { position: absolute; inset: 0; z-index: 1; pointer-events: none; }`,
                    js: `@import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@700&display=swap');
      
      body, html { margin: 0; background: #050505; overflow: hidden; height: 100vh; cursor: crosshair; }
      
      #lattice-stage {
          position: absolute; inset: 0;
          display: flex; justify-content: center; align-items: center;
          z-index: 100;
      }
      
      #kinetic-btn {
          width: 320px; height: 100px; background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(0, 255, 255, 0.3); cursor: pointer;
          position: relative; overflow: visible; display: flex;
          justify-content: center; align-items: center;
          backdrop-filter: blur(10px); transition: 0.3s;
      }
      
      .main-text, .ghost {
          color: #fff; font-family: 'Syncopate', sans-serif;
          font-size: 1rem; letter-spacing: 12px; position: absolute;
          z-index: 10; pointer-events: none; transition: 0.5s;
      }
      
      .ghost { opacity: 0; mix-blend-mode: screen; }
      .r { color: #ff0055; }
      .g { color: #00ffaa; }
      .b { color: #0088ff; }
      
      /* Trigger Chromatic Ghosting on Hover */
      #kinetic-btn:hover .r { opacity: 0.8; transform: translate(-8px, -4px); }
      #kinetic-btn:hover .g { opacity: 0.8; transform: translate(8px, 4px); }
      #kinetic-btn:hover .b { opacity: 0.8; transform: translate(0px, 8px); }
      #kinetic-btn:hover .main-text { letter-spacing: 18px; }
      
      .border-glow {
          position: absolute; inset: -2px;
          border: 1px solid #00f2ff; opacity: 0;
          box-shadow: 0 0 30px #00f2ff; transition: 0.4s;
      }
      #kinetic-btn:hover .border-glow { opacity: 1; transform: scale(1.05, 1.2); }
      
      canvas { position: absolute; inset: 0; z-index: 1; pointer-events: none; }`
                }
            }
        ]
    },
    {
        id: "comp-8nvwsn",
        name: "New Component",
        category: "Buttons",
        tags: ["hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Level 40 | Entropy Solver</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  </head>
  <body>
      <div id="warp-stage">
          <button id="fluid-btn">
              <span class="fluid-text">ENTROPY_v40</span>
              <div class="hologram-border"></div>
          </button>
      </div>
      <canvas id="fluid-canvas"></canvas>
  </body>
  </html>`,
            css: `@import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@700&display=swap');
  
  body, html { margin: 0; background: #000; overflow: hidden; height: 100vh; cursor: crosshair; font-family: 'Syncopate', sans-serif; }
  
  #warp-stage {
      position: absolute; inset: 0;
      display: flex; justify-content: center; align-items: center;
      z-index: 100; pointer-events: none;
  }
  
  #fluid-btn {
      padding: 60px 120px; background: transparent;
      border: none; cursor: pointer; position: relative;
      pointer-events: auto; /* Enable interaction only for the button */
      transition: 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  }
  
  .fluid-text {
      color: #fff; font-size: 1.2rem; letter-spacing: 15px;
      z-index: 10; pointer-events: none; mix-blend-mode: exclusion;
      transition: letter-spacing 0.5s ease;
  }
  
  #fluid-btn:hover .fluid-text { letter-spacing: 25px; color: #00f2ff; }
  
  /* The "Holographic" boundary */
  .hologram-border {
      position: absolute; inset: 0;
      border: 2px solid rgba(255, 255, 255, 0.05);
      background: rgba(255, 255, 255, 0.01);
      box-shadow: 0 0 50px rgba(0, 242, 255, 0.1), inset 0 0 20px rgba(255,0,255,0.1);
      backdrop-filter: blur(5px);
      border-radius: 5px; transition: 0.4s;
  }
  
  #fluid-btn:hover .hologram-border {
      border-color: #00f2ff;
      box-shadow: 0 0 80px rgba(0, 242, 255, 0.3), inset 0 0 40px rgba(0, 242, 255, 0.2);
  }
  
  canvas { position: absolute; inset: 0; z-index: 1; filter: contrast(1.1) saturate(1.2); }`,
            js: `// --- INITIALIZING THE QUANTUM FLUID SOLVER ---
  const scene = new THREE.Scene();
  const camera = new THREE.Camera();
  camera.position.z = 1;
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('fluid-canvas'), antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  let mouse = { x: 0, y: 0, dx: 0, dy: 0, px: 0, py: 0 };
  let firstFrame = true;
  
  // --- GLSL SHADERS (The Navier-Stokes Physics) ---
  const _VS = \`varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position, 1.0); }\`;
  
  // Advection Shader: How fluid moves itself
  const _ADVECTION = \`
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D uVelocity;
      uniform sampler2D uSource;
      uniform vec2 uTexelSize;
      uniform float uDt;
      void main() {
          vec2 coord = vUv - uDt * texture2D(uVelocity, vUv).xy * uTexelSize;
          gl_FragColor = texture2D(uSource, coord);
      }
  \`;
  
  // Boundary Shader: How the button affects flow
  const _BOUNDARY = \`
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D uInput;
      uniform vec4 uBoundary; // x,y is center, z,w is size
      void main() {
          vec2 diff = vUv - uBoundary.xy;
          if(abs(diff.x) < uBoundary.z && abs(diff.y) < uBoundary.w) {
              gl_FragColor = vec4(0.0); // Fluid cannot enter the button
          } else {
              gl_FragColor = texture2D(uInput, vUv);
          }
      }
  \`;
  
  // Color Shader: Multicolored Dye Injection
  const _COLOR = \`
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D uInput;
      uniform vec2 uPointer;
      uniform vec3 uColor;
      uniform float uRadius;
      void main() {
          float d = distance(vUv, uPointer);
          float splat = exp(-d * d / uRadius);
          vec3 col = texture2D(uInput, vUv).rgb + splat * uColor;
          gl_FragColor = vec4(col, 1.0);
      }
  \`;
  
  // --- SIMULATION HELPERS ---
  function createFBO() {
      return new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight, {
          type: THREE.FloatType, format: THREE.RGBAFormat, depthBuffer: false, stencilBuffer: false,
      });
  }
  
  // Frame Buffer Objects to store velocity and colors
  let velocityBox = createFBO();
  let colorBox = createFBO();
  let tempBox = createFBO();
  
  // Creating the Physics Meshes
  function createPhysicsMesh(shader) {
      return new THREE.Mesh(
          new THREE.PlaneGeometry(2, 2),
          new THREE.ShaderMaterial({ vertexShader: _VS, fragmentShader: shader, uniforms: { uDt: { value: 0.016 }, uTexelSize: { value: new THREE.Vector2(1/window.innerWidth, 1/window.innerHeight) }, uInput: { value: null }, uSource: { value: null }, uVelocity: { value: null }, uPointer: { value: new THREE.Vector2() }, uColor: { value: new THREE.Vector3() }, uRadius: { value: 0.001 }, uBoundary: { value: new THREE.Vector4(0.5, 0.5, 0.1, 0.05) } }, depthTest: false, depthWrite: false })
      );
  }
  
  const advectionMesh = createPhysicsMesh(_ADVECTION);
  const boundaryMesh = createPhysicsMesh(_BOUNDARY);
  const colorMesh = createPhysicsMesh(_COLOR);
  
  // --- INTERACTION ENGINE ---
  window.addEventListener('mousemove', (e) => {
      // Calculating velocity of the mouse
      if(firstFrame) { mouse.px = e.clientX; mouse.py = e.clientY; firstFrame = false; }
      mouse.dx = e.clientX - mouse.px;
      mouse.dy = e.clientY - mouse.py;
      mouse.px = e.clientX;
      mouse.py = e.clientY;
      mouse.x = e.clientX / window.innerWidth;
      mouse.y = 1.0 - e.clientY / window.innerHeight;
  });
  
  // Click Interaction (Shockwave)
  const btn = document.getElementById('fluid-btn');
  btn.addEventListener('mousedown', () => {
      gsap.to(camera.position, { z: 0.8, duration: 0.3 });
      injectDye(new THREE.Vector3(1, 1, 1), 0.02); // White flash dye
  });
  btn.addEventListener('mouseup', () => {
      gsap.to(camera.position, { z: 1, duration: 1, ease: "elastic.out" });
  });
  
  // Inject Color into fluid
  function injectDye(color, radius) {
      colorMesh.material.uniforms.uInput.value = colorBox.texture;
      colorMesh.material.uniforms.uPointer.value.set(mouse.x, mouse.y);
      colorMesh.material.uniforms.uColor.value.copy(color);
      colorMesh.material.uniforms.uRadius.value = radius;
      renderer.setRenderTarget(tempBox);
      renderer.render(colorMesh, camera);
      let swap = colorBox; colorBox = tempBox; tempBox = swap;
  }
  
  // --- MAIN SIMULATION LOOP (The Render-to-Texture Engine) ---
  function animate(time) {
      requestAnimationFrame(animate);
  
      // 1. ADVECTION (Fluid moves)
      advectionMesh.material.uniforms.uSource.value = colorBox.texture;
      advectionMesh.material.uniforms.uVelocity.value = velocityBox.texture;
      renderer.setRenderTarget(tempBox);
      renderer.render(advectionMesh, camera);
      let swap = colorBox; colorBox = tempBox; tempBox = swap;
  
      // 2. DYE INJECTION (Mouse interaction)
      if(Math.abs(mouse.dx) > 1 || Math.abs(mouse.dy) > 1) {
          // Multi-color cycle based on time
          const r = Math.sin(time * 0.001) * 0.5 + 0.5;
          const g = Math.cos(time * 0.001) * 0.5 + 0.5;
          const b = Math.sin(time * 0.002) * 0.5 + 0.5;
          injectDye(new THREE.Vector3(r, g, b), 0.001);
      }
  
      // 3. BOUNDARY ENFORCEMENT (Apply the button solid constraint)
      boundaryMesh.material.uniforms.uInput.value = colorBox.texture;
      renderer.setRenderTarget(tempBox);
      renderer.render(boundaryMesh, camera);
      swap = colorBox; colorBox = tempBox; tempBox = swap;
  
      // 4. FINAL OUTPUT
      renderer.setRenderTarget(null);
      renderer.render(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.MeshBasicMaterial({ map: colorBox.texture })), camera);
  }
  
  animate(0);`
        },
        variants: [

        ]
    },
    {
        id: "comp-nccoi2",
        name: "New Component",
        category: "Buttons",
        tags: ["hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Level 43 | Neural Mesh</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@700&display=swap');
          body, html { margin: 0; padding: 0; background: #000; overflow: hidden; height: 100vh; font-family: 'Syncopate', sans-serif; }
          #ui-layer { position: absolute; inset: 0; display: flex; justify-content: center; align-items: center; z-index: 10; pointer-events: none; }
          #god-btn {
              padding: 40px 80px; background: rgba(255, 255, 255, 0.05);
              border: 1px solid rgba(0, 255, 255, 0.3); border-radius: 4px;
              color: #fff; font-size: 1.5rem; letter-spacing: 15px;
              cursor: pointer; pointer-events: auto; position: relative;
              backdrop-filter: blur(10px); transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
          }
          #god-btn:hover { background: rgba(0, 255, 255, 0.1); border-color: #00f2ff; letter-spacing: 25px; box-shadow: 0 0 50px rgba(0, 242, 255, 0.2); }
          canvas { position: absolute; top: 0; left: 0; z-index: 1; outline: none; }
      </style>
  </head>
  <body>
      <div id="ui-layer">
          <button id="god-btn">NEURAL_v43</button>
      </div>
      <script>
          // --- CORE ENGINE ---
          let scene, camera, renderer, particles, lines;
          const count = 200; // Node count
          const nodes = [];
          const mouse = { x: 0, y: 0, active: false };
  
          function init() {
              scene = new THREE.Scene();
              camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
              camera.position.z = 800;
  
              renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
              renderer.setSize(window.innerWidth, window.innerHeight);
              renderer.setPixelRatio(window.devicePixelRatio);
              document.body.appendChild(renderer.domElement);
  
              // Create Neural Nodes
              const geo = new THREE.BufferGeometry();
              const pos = new Float32Array(count * 3);
              for(let i=0; i<count; i++) {
                  const node = {
                      x: (Math.random() - 0.5) * window.innerWidth * 1.5,
                      y: (Math.random() - 0.5) * window.innerHeight * 1.5,
                      z: (Math.random() - 0.5) * 500,
                      vx: (Math.random() - 0.5) * 2,
                      vy: (Math.random() - 0.5) * 2
                  };
                  nodes.push(node);
                  pos[i*3] = node.x; pos[i*3+1] = node.y; pos[i*3+2] = node.z;
              }
              geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
              
              const mat = new THREE.PointsMaterial({ size: 4, color: 0x00f2ff, transparent: true, opacity: 0.8 });
              particles = new THREE.Points(geo, mat);
              scene.add(particles);
  
              // Create Connection Lines
              const lineMat = new THREE.LineBasicMaterial({ color: 0x00f2ff, transparent: true, opacity: 0.2 });
              const lineGeo = new THREE.BufferGeometry();
              lines = new THREE.LineSegments(lineGeo, lineMat);
              scene.add(lines);
  
              animate();
          }
  
          window.addEventListener('mousemove', (e) => {
              mouse.x = (e.clientX - window.innerWidth / 2);
              mouse.y = -(e.clientY - window.innerHeight / 2);
          });
  
          const btn = document.getElementById('god-btn');
          btn.addEventListener('mousedown', () => { 
              mouse.active = true;
              gsap.to(camera.position, { z: 500, duration: 0.5 });
          });
          window.addEventListener('mouseup', () => { 
              mouse.active = false;
              gsap.to(camera.position, { z: 800, duration: 1.5, ease: "elastic.out(1, 0.3)" });
          });
  
          function animate() {
              requestAnimationFrame(animate);
  
              const positions = particles.geometry.attributes.position.array;
              const linePositions = [];
  
              for(let i=0; i<count; i++) {
                  const i3 = i * 3;
                  let node = nodes[i];
  
                  // Constant Drift
                  node.x += node.vx;
                  node.y += node.vy;
  
                  // Bounce off boundaries
                  if(Math.abs(node.x) > window.innerWidth) node.vx *= -1;
                  if(Math.abs(node.y) > window.innerHeight) node.vy *= -1;
  
                  // Mouse Magnetism
                  const dx = node.x - mouse.x;
                  const dy = node.y - mouse.y;
                  const dist = Math.sqrt(dx*dx + dy*dy);
  
                  if(dist < 300) {
                      const force = (300 - dist) / 300;
                      if(mouse.active) {
                          node.x -= dx * 0.1; // Suck in
                          node.y -= dy * 0.1;
                      } else {
                          node.x += dx * 0.02; // Soft push
                          node.y += dy * 0.02;
                      }
                  }
  
                  positions[i3] = node.x;
                  positions[i3+1] = node.y;
  
                  // Calculate Lines (Connection logic)
                  for(let j=i+1; j<count; j++) {
                      const dx2 = nodes[i].x - nodes[j].x;
                      const dy2 = nodes[i].y - nodes[j].y;
                      const dist2 = Math.sqrt(dx2*dx2 + dy2*dy2);
  
                      if(dist2 < 150) {
                          linePositions.push(nodes[i].x, nodes[i].y, nodes[i].z);
                          linePositions.push(nodes[j].x, nodes[j].y, nodes[j].z);
                      }
                  }
              }
  
              particles.geometry.attributes.position.needsUpdate = true;
              lines.geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
              
              renderer.render(scene, camera);
          }
  
          window.addEventListener('resize', () => {
              camera.aspect = window.innerWidth / window.innerHeight;
              camera.updateProjectionMatrix();
              renderer.setSize(window.innerWidth, window.innerHeight);
          });
  
          init();
      </script>
  </body>
  </html>`,
            css: "",
            js: ""
        },
        variants: [

        ]
    },
    {
        id: "comp-rtd0xc",
        name: "New Component",
        category: "Buttons",
        tags: ["hover", "3d"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Level 45 | God-Level Hybrid</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
      <style>
          body { margin: 0; background: #000; overflow: hidden; cursor: crosshair; }
          #btn-container { position: absolute; inset: 0; display: flex; justify-content: center; align-items: center; z-index: 100; pointer-events: none; }
          #core-btn {
              padding: 30px 60px; background: none; border: 2px solid #00f2ff;
              color: #00f2ff; font-family: sans-serif; font-weight: 900;
              font-size: 1.5rem; letter-spacing: 10px; cursor: pointer;
              pointer-events: auto; backdrop-filter: blur(10px);
              text-transform: uppercase; transition: 0.3s;
          }
          #core-btn:hover { background: #00f2ff; color: #000; box-shadow: 0 0 50px #00f2ff; }
      </style>
  </head>
  <body>
      <div id="btn-container"><button id="core-btn">Quantum_v45</button></div>
      <canvas id="webgl"></canvas>
  
  <script>
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#webgl'), antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  // --- THE GOD-LEVEL INSTANCING ---
  const particleCount = 5000;
  const geometry = new THREE.IcosahedronGeometry(0.1, 0); // Low poly for speed
  const material = new THREE.MeshPhongMaterial({ color: 0x00f2ff, emissive: 0x00f2ff });
  
  // InstancedMesh: Memory-efficient way to render 5000 objects in 1 draw call
  const mesh = new THREE.InstancedMesh(geometry, material, particleCount);
  const dummy = new THREE.Object3D();
  
  for (let i = 0; i < particleCount; i++) {
      dummy.position.set((Math.random()-0.5)*20, (Math.random()-0.5)*20, (Math.random()-0.5)*20);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
  }
  scene.add(mesh);
  
  const light = new THREE.PointLight(0xffffff, 1);
  scene.add(light);
  camera.position.z = 10;
  
  // --- DYNAMIC INTERACTION ---
  let mouse = new THREE.Vector2();
  window.addEventListener('mousemove', (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      gsap.to(camera.position, { x: mouse.x * 2, y: mouse.y * 2, duration: 1 });
  });
  
  document.querySelector('#core-btn').addEventListener('click', () => {
      // Explosion Physics
      for (let i = 0; i < particleCount; i++) {
          gsap.to(dummy.position, {
              x: (Math.random()-0.5)*50, y: (Math.random()-0.5)*50, z: (Math.random()-0.5)*50,
              duration: 2, ease: "expo.out",
              onUpdate: () => {
                  dummy.updateMatrix();
                  mesh.setMatrixAt(i, dummy.matrix);
                  mesh.instanceMatrix.needsUpdate = true;
              }
          });
      }
  });
  
  function animate() {
      requestAnimationFrame(animate);
      mesh.rotation.y += 0.002;
      renderer.render(scene, camera);
  }
  animate();
  </script>
  </body>
  </html>`,
            css: "",
            js: ""
        },
        variants: [

        ]
    },
    {
        id: "comp-8xlf0m",
        name: "New Component",
        category: "Buttons",
        tags: ["hover", "3d"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Level 47 | Hyper-Object</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@700&display=swap');
          
          body, html { margin: 0; padding: 0; background: #000; overflow: hidden; height: 100vh; font-family: 'Syncopate', sans-serif; }
          
          #ui-wrapper {
              position: absolute; inset: 0;
              display: flex; justify-content: center; align-items: center;
              z-index: 100; pointer-events: none;
          }
  
          #god-btn {
              padding: 35px 70px;
              background: rgba(0, 242, 255, 0.05);
              border: 1px solid #00f2ff;
              color: #fff; font-size: 1.1rem;
              letter-spacing: 12px; cursor: pointer;
              pointer-events: auto; position: relative;
              backdrop-filter: blur(15px);
              text-transform: uppercase;
              transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
          }
  
          #god-btn:hover {
              letter-spacing: 20px;
              background: #00f2ff;
              color: #000;
              box-shadow: 0 0 80px rgba(0, 242, 255, 0.4);
          }
  
          canvas { position: absolute; top: 0; left: 0; z-index: 1; }
      </style>
  </head>
  <body>
  
      <div id="ui-wrapper">
          <button id="god-btn">HYPER_OBJECT_v47</button>
      </div>
      <canvas id="stage"></canvas>
  
      <script>
          let scene, camera, renderer, mesh, dummy;
          const count = 2000;
          const mouse = new THREE.Vector2();
          const targetMouse = new THREE.Vector2();
  
          function init() {
              scene = new THREE.Scene();
              camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
              camera.position.z = 15;
  
              renderer = new THREE.WebGLRenderer({ 
                  canvas: document.getElementById('stage'),
                  antialias: true, 
                  alpha: true 
              });
              renderer.setSize(window.innerWidth, window.innerHeight);
              renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  
              // Instanced Mesh: 2000 cubes in ONE draw call
              const geometry = new THREE.BoxGeometry(0.15, 0.15, 0.15);
              const material = new THREE.MeshPhongMaterial({ 
                  color: 0x00f2ff,
                  emissive: 0x001111,
                  shininess: 100
              });
  
              mesh = new THREE.InstancedMesh(geometry, material, count);
              dummy = new THREE.Object3D();
  
              // Arrangement in 3D Space (Torus Knot pattern)
              for (let i = 0; i < count; i++) {
                  const angle = (i / count) * Math.PI * 2;
                  const radius = 6 + Math.random() * 2;
                  dummy.position.set(
                      Math.cos(angle) * radius,
                      Math.sin(angle) * radius,
                      (Math.random() - 0.5) * 5
                  );
                  dummy.rotation.set(Math.random(), Math.random(), 0);
                  dummy.updateMatrix();
                  mesh.setMatrixAt(i, dummy.matrix);
              }
              scene.add(mesh);
  
              // Lighting
              const light = new THREE.PointLight(0x00f2ff, 2, 50);
              light.position.set(0, 0, 10);
              scene.add(light);
              scene.add(new THREE.AmbientLight(0x404040));
  
              window.addEventListener('mousemove', (e) => {
                  targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
                  targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
              });
  
              animate();
          }
  
          // Interaction Logic
          const btn = document.getElementById('god-btn');
          let isClicking = false;
  
          btn.addEventListener('mousedown', () => {
              isClicking = true;
              gsap.to(camera.position, { z: 10, duration: 0.6, ease: "expo.out" });
          });
  
          window.addEventListener('mouseup', () => {
              isClicking = false;
              gsap.to(camera.position, { z: 15, duration: 1.2, ease: "elastic.out(1, 0.3)" });
          });
  
          function animate() {
              requestAnimationFrame(animate);
  
              mouse.lerp(targetMouse, 0.05);
              
              const time = Date.now() * 0.001;
              const matrix = new THREE.Matrix4();
  
              for (let i = 0; i < count; i++) {
                  mesh.getMatrixAt(i, matrix);
                  const pos = new THREE.Vector3().setFromMatrixPosition(matrix);
                  
                  // Physics: Distance from Mouse
                  const dist = pos.distanceTo(new THREE.Vector3(mouse.x * 15, mouse.y * 10, 0));
                  
                  dummy.position.copy(pos);
                  
                  if (dist < 5) {
                      const force = (5 - dist) / 5;
                      if (isClicking) {
                          // Implode: Pull towards center of mouse
                          dummy.position.lerp(new THREE.Vector3(mouse.x * 15, mouse.y * 10, 0), force * 0.2);
                      } else {
                          // Scatter: Push away from mouse
                          const dir = new THREE.Vector3().subVectors(pos, new THREE.Vector3(mouse.x * 15, mouse.y * 10, 0)).normalize();
                          dummy.position.add(dir.multiplyScalar(force * 0.5));
                      }
                  }
  
                  // Wave Motion (The "Living" part)
                  dummy.position.z += Math.sin(time + i) * 0.01;
                  dummy.rotation.y += 0.01;
                  
                  dummy.updateMatrix();
                  mesh.setMatrixAt(i, dummy.matrix);
              }
  
              mesh.instanceMatrix.needsUpdate = true;
              mesh.rotation.z += 0.001;
              
              renderer.render(scene, camera);
          }
  
          init();
  
          window.addEventListener('resize', () => {
              camera.aspect = window.innerWidth / window.innerHeight;
              camera.updateProjectionMatrix();
              renderer.setSize(window.innerWidth, window.innerHeight);
          });
      </script>
  </body>
  </html>`,
            css: "",
            js: ""
        },
        variants: [

        ]
    },
    {
        id: "comp-mc1c9u",
        name: "New Component",
        category: "Buttons",
        tags: ["glow", "hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Level 48 | Singularity Engine</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  </head>
  <body>
      <div id="app-container">
          <div id="ui-overlay">
              <button id="main-portal">
                  <span class="text-glitch" data-text="QUANTUM_v48">QUANTUM_v48</span>
                  <div class="inner-glow"></div>
              </button>
          </div>
          <canvas id="webgl-canvas"></canvas>
      </div>
  </body>
  </html>`,
            css: `@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@900&display=swap');
  
  body, html {
      margin: 0; padding: 0;
      background: #000; overflow: hidden;
      height: 100vh; width: 100vw;
      font-family: 'Orbitron', sans-serif;
  }
  
  #app-container { position: relative; width: 100%; height: 100%; }
  
  #ui-overlay {
      position: absolute; inset: 0;
      display: flex; justify-content: center; align-items: center;
      z-index: 10; pointer-events: none;
  }
  
  #main-portal {
      background: rgba(255, 255, 255, 0.01);
      border: 1px solid rgba(0, 242, 255, 0.3);
      padding: 50px 100px;
      cursor: pointer; pointer-events: auto;
      position: relative; overflow: hidden;
      backdrop-filter: blur(20px);
      transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }
  
  .text-glitch {
      color: #00f2ff; font-size: 1.5rem;
      letter-spacing: 15px; position: relative;
      text-shadow: 0 0 10px rgba(0, 242, 255, 0.5);
  }
  
  #main-portal:hover {
      border-color: #ff00ff;
      box-shadow: 0 0 50px rgba(255, 0, 255, 0.2);
      transform: perspective(1000px) rotateX(10deg);
  }
  
  #main-portal:hover .text-glitch {
      color: #fff; letter-spacing: 25px;
      text-shadow: 0 0 20px #ff00ff, 0 0 40px #00f2ff;
  }
  
  .inner-glow {
      position: absolute; inset: 0;
      background: radial-gradient(circle, rgba(0,242,255,0.1) 0%, transparent 70%);
      opacity: 0; transition: 0.5s;
  }
  
  #main-portal:hover .inner-glow { opacity: 1; }
  
  #webgl-canvas { position: absolute; inset: 0; z-index: 1; }`,
            js: `// --- QUANTUM ENGINE CORE ---
  let scene, camera, renderer, particles, starPoints;
  const particleCount = 5000;
  const mouse = new THREE.Vector2(-100, -100);
  const target = new THREE.Vector3(0, 0, 0);
  
  function initEngine() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 2000);
      camera.position.z = 1000;
  
      renderer = new THREE.WebGLRenderer({
          canvas: document.getElementById('webgl-canvas'),
          antialias: true,
          alpha: true
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
  
      createQuantumField();
      addLights();
      setupEvents();
      renderLoop();
  }
  
  function createQuantumField() {
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(particleCount * 3);
      const velocities = [];
  
      for(let i=0; i<particleCount; i++) {
          // Engineering: Random distribution in a sphere
          const r = 800;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos((Math.random() * 2) - 1);
          
          pos[i*3] = r * Math.sin(phi) * Math.cos(theta);
          pos[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
          pos[i*3+2] = r * Math.cos(phi);
  
          velocities.push(new THREE.Vector3(
              (Math.random() - 0.5) * 2,
              (Math.random() - 0.5) * 2,
              (Math.random() - 0.5) * 2
          ));
      }
  
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      
      // Shader Material for God-Level Colors
      const mat = new THREE.PointsMaterial({
          size: 3,
          color: 0x00f2ff,
          transparent: true,
          opacity: 0.6,
          blending: THREE.AdditiveBlending
      });
  
      particles = new THREE.Points(geo, mat);
      particles.userData.velocities = velocities;
      particles.userData.originalPos = new Float32Array(pos);
      scene.add(particles);
  }
  
  function addLights() {
      const p1 = new THREE.PointLight(0x00f2ff, 2, 1000);
      p1.position.set(200, 200, 500);
      scene.add(p1);
  }
  
  function setupEvents() {
      window.addEventListener('mousemove', (e) => {
          // Convert screen to 3D space
          mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
          
          const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
          vector.unproject(camera);
          const dir = vector.sub(camera.position).normalize();
          const distance = -camera.position.z / dir.z;
          target.copy(camera.position).add(dir.multiplyScalar(distance));
      });
  
      const btn = document.getElementById('main-portal');
      btn.addEventListener('mousedown', () => {
          // IMPLOSION LOGIC
          gsap.to(particles.material, { size: 15, duration: 0.4 });
          gsap.to(camera.position, { z: 600, duration: 0.8, ease: "power4.inOut" });
          particles.userData.isImploding = true;
      });
  
      window.addEventListener('mouseup', () => {
          // EXPLOSION LOGIC
          gsap.to(particles.material, { size: 3, duration: 1 });
          gsap.to(camera.position, { z: 1000, duration: 2, ease: "elastic.out(1, 0.3)" });
          particles.userData.isImploding = false;
      });
  }
  
  function renderLoop() {
      requestAnimationFrame(renderLoop);
      
      const posAttr = particles.geometry.attributes.position;
      const vels = particles.userData.velocities;
      const originals = particles.userData.originalPos;
  
      for(let i=0; i<particleCount; i++) {
          let x = posAttr.getX(i);
          let y = posAttr.getY(i);
          let z = posAttr.getZ(i);
  
          const distToMouse = new THREE.Vector3(x, y, z).distanceTo(target);
  
          if(particles.userData.isImploding) {
              // Suck into the button singularity
              x += (target.x - x) * 0.15;
              y += (target.y - y) * 0.15;
              z += (target.z - z) * 0.15;
          } else {
              if(distToMouse < 200) {
                  // High-Tech Repulsion
                  const force = (200 - distToMouse) * 0.05;
                  x += (x - target.x) * force * 0.1;
                  y += (y - target.y) * force * 0.1;
              } else {
                  // Return to original orbit
                  x += (originals[i*3] - x) * 0.02;
                  y += (originals[i*3+1] - y) * 0.02;
                  z += (originals[i*3+2] - z) * 0.02;
              }
          }
  
          // Add some "Noise" movement
          x += vels[i].x;
          y += vels[i].y;
          z += vels[i].z;
  
          posAttr.setXYZ(i, x, y, z);
      }
  
      posAttr.needsUpdate = true;
      particles.rotation.y += 0.001;
      particles.rotation.x += 0.0005;
  
      renderer.render(scene, camera);
  }
  
  initEngine();
  
  window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
  });`
        },
        variants: [

        ]
    },

    {
        id: "comp-q3r7d8",
        name: "New Component",
        category: "Buttons",
        tags: [],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Level 49 | Void Rip</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  </head>
  <body style="margin:0; background:#000; overflow:hidden;">
      <div id="ui" style="position:absolute; inset:0; display:flex; justify-content:center; align-items:center; z-index:100; pointer-events:none;">
          <button id="rip-btn" style="padding:40px 80px; background:transparent; border:2px solid #ff00ff; color:#fff; font-family:monospace; font-size:1.5rem; letter-spacing:15px; cursor:pointer; pointer-events:auto; backdrop-filter:blur(10px); transition:0.5s; text-shadow: 0 0 10px #ff00ff;">
              VOID_RIP_v49
          </button>
      </div>
      <canvas id="rip-canvas"></canvas>
  </body>
  </html>`,
            css: "",
            js: `let scene, camera, renderer, mesh, clock;
  const segments = 60; // 60x60 grid = 3600 vertices
  const mouse = new THREE.Vector2(-100, -100);
  const raycaster = new THREE.Raycaster();
  
  function init() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 30;
  
      renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('rip-canvas'), antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
  
      // Create the Deformable Fabric
      const geometry = new THREE.PlaneGeometry(80, 50, segments, segments);
      const material = new THREE.MeshBasicMaterial({ 
          color: 0xff00ff, 
          wireframe: true, 
          transparent: true, 
          opacity: 0.3 
      });
  
      mesh = new THREE.Mesh(geometry, material);
      // Store original positions for spring physics
      mesh.userData.originals = geometry.attributes.position.array.slice();
      scene.add(mesh);
  
      clock = new THREE.Clock();
  
      window.addEventListener('mousemove', (e) => {
          mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      });
  
      // Interaction Click
      const btn = document.getElementById('rip-btn');
      btn.addEventListener('mousedown', () => {
          gsap.to(mesh.scale, { x: 1.5, y: 1.5, duration: 0.5, ease: "expo.out" });
          material.color.setHex(0x00f2ff);
      });
      window.addEventListener('mouseup', () => {
          gsap.to(mesh.scale, { x: 1, y: 1, duration: 1, ease: "elastic.out(1, 0.3)" });
          material.color.setHex(0xff00ff);
      });
  
      animate();
  }
  
  function animate() {
      requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      const pos = mesh.geometry.attributes.position;
      const orig = mesh.userData.originals;
  
      // Raycasting to find where the mouse touches the mesh
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(mesh);
      let intersectPoint = null;
      if (intersects.length > 0) intersectPoint = intersects[0].point;
  
      for (let i = 0; i < pos.count; i++) {
          const i3 = i * 3;
          let x = orig[i3];
          let y = orig[i3 + 1];
          let z = orig[i3 + 2];
  
          // 1. Sine Wave Ripple (Ambient motion)
          const wave = Math.sin(x * 0.1 + time) * Math.cos(y * 0.1 + time) * 2;
          
          // 2. Mouse Distortion (The "Rip" effect)
          if (intersectPoint) {
              const dist = new THREE.Vector3(x, y, 0).distanceTo(intersectPoint);
              if (dist < 15) {
                  const power = (15 - dist) / 15;
                  // Pull vertices towards or away
                  z += power * 10; 
              }
          }
  
          pos.setZ(i, z + wave);
      }
  
      pos.needsUpdate = true;
      mesh.rotation.y = mouse.x * 0.1;
      mesh.rotation.x = -mouse.y * 0.1;
  
      renderer.render(scene, camera);
  }
  
  init();
  
  window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
  });`
        },
        variants: [
            {
                id: "v1",
                name: "Variant 1",
                code: {
                    html: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Level 49.1 | Fractured Reality</title>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
          <style>
              body { margin: 0; background: #000; overflow: hidden; }
              #ui {
                  position: absolute; inset: 0; display: flex; 
                  justify-content: center; align-items: center; z-index: 10;
              }
              button {
                  padding: 30px 60px; background: rgba(0,0,0,0.8);
                  border: 1px solid #00f2ff; color: #00f2ff;
                  font-family: 'Orbitron', sans-serif; font-size: 1.2rem;
                  letter-spacing: 10px; cursor: pointer; position: relative;
                  box-shadow: 0 0 20px rgba(0, 242, 255, 0.2);
                  transition: 0.3s;
              }
              button:hover { background: #00f2ff; color: #000; box-shadow: 0 0 50px #00f2ff; }
          </style>
      </head>
      <body>
          <div id="ui"><button>FRACTURE_v49.1</button></div>
          <canvas id="canvas"></canvas>
      </body>
      </html>`,
                    css: "",
                    js: `let scene, camera, renderer, shards = [];
      const count = 1000; // Number of glass shards
      const mouse = new THREE.Vector2();
      
      function init() {
          scene = new THREE.Scene();
          camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
          camera.position.z = 30;
      
          renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas'), antialias: true });
          renderer.setSize(window.innerWidth, window.innerHeight);
      
          // Light that follows the mouse
          const light = new THREE.PointLight(0x00f2ff, 2, 50);
          scene.add(light);
      
          // Create Shards
          const geometry = new THREE.PlaneGeometry(0.5, 0.5);
          for(let i=0; i<count; i++) {
              const material = new THREE.MeshPhongMaterial({ 
                  color: 0x00f2ff, side: THREE.DoubleSide, 
                  transparent: true, opacity: 0.6, shininess: 100 
              });
              const shard = new THREE.Mesh(geometry, material);
              
              // Random Position in a Grid
              shard.position.x = (Math.random() - 0.5) * 60;
              shard.position.y = (Math.random() - 0.5) * 40;
              shard.position.z = (Math.random() - 0.5) * 5;
              
              shard.userData.originalRot = shard.rotation.clone();
              scene.add(shard);
              shards.push(shard);
          }
      
          window.addEventListener('mousemove', (e) => {
              mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
              mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
              light.position.set(mouse.x * 30, mouse.y * 20, 10);
          });
      
          animate();
      }
      
      function animate() {
          requestAnimationFrame(animate);
      
          shards.forEach(shard => {
              const dx = shard.position.x - (mouse.x * 30);
              const dy = shard.position.y - (mouse.y * 20);
              const dist = Math.sqrt(dx*dx + dy*dy);
      
              if(dist < 10) {
                  // High-Tech Rotation: Shards face the mouse light
                  shard.lookAt(new THREE.Vector3(mouse.x * 30, mouse.y * 20, 10));
                  shard.scale.set(1.5, 1.5, 1.5);
                  shard.material.opacity = 1;
              } else {
                  shard.rotation.x += 0.01;
                  shard.rotation.y += 0.01;
                  shard.scale.set(1, 1, 1);
                  shard.material.opacity = 0.4;
              }
          });
      
          renderer.render(scene, camera);
      }
      
      init();`
                }
            }
        ]
    },
    {
        id: "comp-ms2vur",
        name: "New Component",
        category: "Buttons",
        tags: [],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Level 50 | Golden Singularity</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  </head>
  <body style="margin:0; background:#000205; overflow:hidden;">
      <div id="ui-portal" style="position:absolute; inset:0; display:flex; justify-content:center; align-items:center; z-index:100; pointer-events:none;">
          <button id="singularity-btn" style="padding:50px 100px; background:rgba(0,0,0,0.2); border:1px solid gold; color:gold; font-family:'Space Mono', monospace; font-size:1.8rem; letter-spacing:20px; cursor:pointer; pointer-events:auto; backdrop-filter:blur(30px); position:relative; box-shadow:0 0 30px rgba(255,215,0,0.1); text-transform:uppercase; transition:0.5s;">
              GOLD_v50
          </button>
      </div>
      <canvas id="singularity-canvas"></canvas>
  </body>
  </html>`,
            css: "",
            js: `let scene, camera, renderer, globe, particles, clock;
  const mouse = new THREE.Vector2();
  const targetMouse = new THREE.Vector2();
  
  function init() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
      camera.position.z = 40;
  
      renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('singularity-canvas'), antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
  
      clock = new THREE.Clock();
  
      // --- GEOMETRY 1: THE CORE WEB ---
      const geo = new THREE.IcosahedronGeometry(15, 10);
      const mat = new THREE.MeshPhongMaterial({
          color: 0xffd700,
          wireframe: true,
          transparent: true,
          opacity: 0.2,
          emissive: 0xffd700,
          emissiveIntensity: 0.5
      });
      globe = new THREE.Mesh(geo, mat);
      scene.add(globe);
  
      // --- GEOMETRY 2: KINETIC DUST (5,000 Particles) ---
      const pGeo = new THREE.BufferGeometry();
      const pPos = new Float32Array(5000 * 3);
      for(let i=0; i<5000*3; i++) pPos[i] = (Math.random() - 0.5) * 100;
      pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
      
      const pMat = new THREE.PointsMaterial({ size: 0.1, color: 0xffd700, transparent: true, opacity: 0.8 });
      particles = new THREE.Points(pGeo, pMat);
      scene.add(particles);
  
      // Lighting
      const pointLight = new THREE.PointLight(0xffd700, 2, 100);
      scene.add(pointLight);
      scene.add(new THREE.AmbientLight(0x404040));
  
      // Listeners
      window.addEventListener('mousemove', (e) => {
          targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
          targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      });
  
      const btn = document.getElementById('singularity-btn');
      btn.addEventListener('mousedown', () => {
          // Quantum Explode Effect
          gsap.to(globe.scale, { x: 2, y: 2, z: 2, duration: 0.3, ease: "power4.out" });
          gsap.to(mat, { opacity: 0.8, duration: 0.2 });
          gsap.to(camera.position, { z: 60, duration: 0.5 });
      });
  
      window.addEventListener('mouseup', () => {
          gsap.to(globe.scale, { x: 1, y: 1, z: 1, duration: 1.5, ease: "elastic.out(1, 0.3)" });
          gsap.to(mat, { opacity: 0.2, duration: 1 });
          gsap.to(camera.position, { z: 40, duration: 1, ease: "power2.out" });
      });
  
      animate();
  }
  
  function animate() {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();
  
      mouse.lerp(targetMouse, 0.05);
  
      // Dynamic Rotation based on Mouse
      globe.rotation.y += 0.002 + mouse.x * 0.05;
      globe.rotation.x += 0.001 + mouse.y * 0.05;
      
      particles.rotation.y -= 0.001;
  
      // Pulse effect
      const scale = 1 + Math.sin(time * 2) * 0.05;
      globe.scale.set(scale, scale, scale);
  
      // Vertex Manipulation (The Wave)
      const position = globe.geometry.attributes.position;
      const vector = new THREE.Vector3();
  
      for (let i = 0; i < position.count; i++) {
          vector.fromBufferAttribute(position, i);
          // Distance from mouse center in 3D
          const mouse3D = new THREE.Vector3(mouse.x * 20, mouse.y * 20, 10);
          const d = vector.distanceTo(mouse3D);
          
          if(d < 10) {
              const force = (10 - d) / 10;
              vector.multiplyScalar(1 + force * 0.02);
              position.setXYZ(i, vector.x, vector.y, vector.z);
          }
      }
      position.needsUpdate = true;
  
      renderer.render(scene, camera);
  }
  
  init();
  
  window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
  });`
        },
        variants: [

        ]
    },
    {
        id: "comp-jxpo5n",
        name: "New Component",
        category: "Buttons",
        tags: [],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Level 51 | Shape Shifter</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  </head>
  <body style="margin:0; background:#020205; overflow:hidden; cursor:none;">
      <div id="ui-layer" style="position:absolute; inset:0; display:flex; justify-content:center; align-items:center; z-index:100; pointer-events:none;">
          <button id="morph-btn" style="padding:45px 90px; background:transparent; border:none; color:#fff; font-family:'Syncopate', sans-serif; font-size:1.4rem; letter-spacing:12px; cursor:pointer; pointer-events:auto; position:relative; font-weight:900;">
              MORPH_OS_v51
              <div id="btn-blur" style="position:absolute; inset:0; background:rgba(255,255,255,0.05); backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.2); z-index:-1; border-radius:50px;"></div>
          </button>
      </div>
      <div id="custom-cursor" style="position:absolute; width:20px; height:20px; border:2px solid white; border-radius:50%; pointer-events:none; z-index:1000; mix-blend-mode:difference; transition: transform 0.1s;"></div>
      <canvas id="morph-canvas"></canvas>
  </body>
  </html>`,
            css: "",
            js: `let scene, camera, renderer, morphMesh, clock;
  const mouse = new THREE.Vector2();
  const cursor = document.getElementById('custom-cursor');
  
  function init() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 25;
  
      renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('morph-canvas'), antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
  
      clock = new THREE.Clock();
  
      // --- 1. THE AMORPHOUS GEOMETRY ---
      // Humne Sphere use kiya hai lekin hum iske vertices ko "Noise" se displace karenge
      const geo = new THREE.IcosahedronGeometry(10, 64); // High density for smooth morph
      
      // --- 2. THE IRIDESCENT SHADER (God-Level Color) ---
      const mat = new THREE.ShaderMaterial({
          uniforms: {
              uTime: { value: 0 },
              uMouse: { value: new THREE.Vector2() }
          },
          vertexShader: \`
              varying vec3 vNormal;
              varying vec3 vPosition;
              uniform float uTime;
              
              // Simplex Noise Function
              vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
              vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
              vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
              float snoise(vec3 v) {
                  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
                  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
                  vec3 i  = floor(v + dot(v, C.yyy) );
                  vec3 x0 = v - i + dot(i, C.xxx) ;
                  vec3 g = step(x0.yzx, x0.xyz);
                  vec3 l = 1.0 - g;
                  vec3 i1 = min( g.xyz, l.zxy );
                  vec3 i2 = max( g.xyz, l.zxy );
                  vec3 x1 = x0 - i1 + C.xxx;
                  vec3 x2 = x0 - i2 + C.yyy;
                  vec3 x3 = x0 - D.yyy;
                  i = mod289(i); 
                  vec4 p = permute( permute( permute( i.z + vec4(0.0, i1.z, i2.z, 1.0 )) + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
                  vec4 j = p - 49.0 * floor(p * (1.0/49.0));
                  vec4 x_ = floor(j * (1.0/7.0));
                  vec4 y_ = floor(j - 7.0 * x_ );
                  vec4 x = x_ * (1.0/7.0) + 0.5/7.0;
                  vec4 y = y_ * (1.0/7.0) + 0.5/7.0;
                  vec4 h = 1.0 - abs(x) - abs(y);
                  vec4 b0 = vec4( x.xy, y.xy );
                  vec4 b1 = vec4( x.zw, y.zw );
                  vec4 s0 = floor(b0)*2.0 + 1.0;
                  vec4 s1 = floor(b1)*2.0 + 1.0;
                  vec4 sh = -step(h, vec4(0.0));
                  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
                  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
                  vec3 p0 = vec3(a0.xy,h.x);
                  vec3 p1 = vec3(a0.zw,h.y);
                  vec3 p2 = vec3(a1.xy,h.z);
                  vec3 p3 = vec3(a1.zw,h.w);
                  vec4 norm = 1.79284291400159 - 0.85373472095314 * vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3));
                  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
                  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
                  m = m * m;
                  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
              }
  
              void main() {
                  vNormal = normal;
                  float noise = snoise(position * 0.1 + uTime * 0.5);
                  vec3 newPos = position + normal * noise * 2.5;
                  vPosition = newPos;
                  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
              }
          \`,
          fragmentShader: \`
              varying vec3 vNormal;
              varying vec3 vPosition;
              uniform float uTime;
              void main() {
                  // Iridescent effect based on normal and view direction
                  vec3 viewDir = normalize(vec3(0.0, 0.0, 25.0) - vPosition);
                  float fresnel = pow(1.0 - dot(vNormal, viewDir), 3.0);
                  vec3 color = 0.5 + 0.5 * cos(uTime + vPosition.xyy * 0.1 + vec3(0,2,4));
                  gl_FragColor = vec4(color + fresnel, 0.8);
              }
          \`,
          transparent: true
      });
  
      morphMesh = new THREE.Mesh(geo, mat);
      scene.add(morphMesh);
  
      // Interaction
      window.addEventListener('mousemove', (e) => {
          mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
          
          // Custom cursor movement
          gsap.to(cursor, { x: e.clientX - 10, y: e.clientY - 10, duration: 0.1 });
      });
  
      const btn = document.getElementById('morph-btn');
      btn.addEventListener('mouseenter', () => {
          gsap.to(camera.position, { z: 20, duration: 1 });
          gsap.to(cursor, { scale: 3, duration: 0.3 });
      });
      btn.addEventListener('mouseleave', () => {
          gsap.to(camera.position, { z: 25, duration: 1 });
          gsap.to(cursor, { scale: 1, duration: 0.3 });
      });
  
      animate();
  }
  
  function animate() {
      requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      morphMesh.material.uniforms.uTime.value = time;
      
      morphMesh.rotation.y += 0.005;
      morphMesh.position.x = mouse.x * 2;
      morphMesh.position.y = mouse.y * 2;
  
      renderer.render(scene, camera);
  }
  
  init();
  
  window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
  });`
        },
        variants: [

        ]
    },
    {
        id: "comp-19vx9n",
        name: "New Component",
        category: "Buttons",
        tags: ["hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Level 53 | Neural Core</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@900&display=swap');
          body { margin: 0; background: #010409; overflow: hidden; }
          #ui {
              position: absolute; inset: 0; display: flex; 
              justify-content: center; align-items: center; z-index: 100;
          }
          #neural-btn {
              padding: 45px 95px; background: rgba(0, 0, 0, 0.4);
              border: 2px solid #00ff88; color: #00ff88;
              font-family: 'Exo 2', sans-serif; font-size: 1.3rem;
              letter-spacing: 12px; cursor: pointer; position: relative;
              backdrop-filter: blur(25px); transition: 0.4s;
              text-transform: uppercase; box-shadow: 0 0 30px rgba(0, 255, 136, 0.1);
          }
          #neural-btn:hover {
              color: #fff; border-color: #fff;
              text-shadow: 0 0 15px #00ff88, 0 0 30px #00ff88;
              box-shadow: 0 0 60px rgba(0, 255, 136, 0.4);
              transform: scale(1.05);
          }
      </style>
  </head>
  <body>
      <div id="ui"><button id="neural-btn">NEURAL_CORE_v53</button></div>
      <canvas id="neural-canvas"></canvas>
  
  <script>
  let scene, camera, renderer, lines, nodes, clock;
  const nodeCount = 150;
  const mouse = new THREE.Vector3(0, 0, 0);
  const targetMouse = new THREE.Vector2(0, 0);
  
  function init() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
      camera.position.z = 50;
  
      renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('neural-canvas'), antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
  
      clock = new THREE.Clock();
  
      // --- 1. THE NODES (Brain Cells) ---
      const nodeGeo = new THREE.SphereGeometry(0.2, 8, 8);
      const nodeMat = new THREE.MeshBasicMaterial({ color: 0x00ff88 });
      nodes = new THREE.Group();
      
      for(let i=0; i<nodeCount; i++) {
          const mesh = new THREE.Mesh(nodeGeo, nodeMat);
          mesh.position.set((Math.random()-0.5)*100, (Math.random()-0.5)*60, (Math.random()-0.5)*40);
          mesh.userData.velocity = new THREE.Vector3((Math.random()-0.5)*0.1, (Math.random()-0.5)*0.1, 0);
          mesh.userData.original = mesh.position.clone();
          nodes.add(mesh);
      }
      scene.add(nodes);
  
      // --- 2. THE SYNAPSES (Neural Connections) ---
      const lineMat = new THREE.LineBasicMaterial({ color: 0x00ff88, transparent: true, opacity: 0.2 });
      const lineGeo = new THREE.BufferGeometry();
      lines = new THREE.LineSegments(lineGeo, lineMat);
      scene.add(lines);
  
      // Interaction
      window.addEventListener('mousemove', (e) => {
          targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
          targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      });
  
      const btn = document.getElementById('neural-btn');
      btn.addEventListener('click', () => {
          // Shockwave Logic
          nodes.children.forEach(node => {
              const force = new THREE.Vector3().subVectors(node.position, new THREE.Vector3(0,0,0)).normalize();
              gsap.to(node.position, {
                  x: node.position.x + force.x * 20,
                  y: node.position.y + force.y * 20,
                  duration: 0.5, ease: "expo.out",
                  onComplete: () => {
                      gsap.to(node.position, { x: node.userData.original.x, y: node.userData.original.y, duration: 1.5, ease: "elastic.out(1, 0.3)" });
                  }
              });
          });
      });
  
      animate();
  }
  
  function animate() {
      requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      mouse.lerp(new THREE.Vector3(targetMouse.x * 40, targetMouse.y * 25, 0), 0.1);
  
      const linePositions = [];
      const colors = [];
  
      nodes.children.forEach((node, i) => {
          // Organic Drift
          node.position.add(node.userData.velocity);
          
          // Boundaries
          if(Math.abs(node.position.x) > 50) node.userData.velocity.x *= -1;
          if(Math.abs(node.position.y) > 30) node.userData.velocity.y *= -1;
  
          // Mouse Elasticity (The Stretch)
          const distToMouse = node.position.distanceTo(mouse);
          if(distToMouse < 15) {
              const pull = (15 - distToMouse) * 0.02;
              node.position.lerp(mouse, pull);
          }
  
          // Connect with other nodes
          nodes.children.forEach((other, j) => {
              if(i <= j) return;
              const dist = node.position.distanceTo(other.position);
              if(dist < 12) {
                  linePositions.push(node.position.x, node.position.y, node.position.z);
                  linePositions.push(other.position.x, other.position.y, other.position.z);
              }
          });
      });
  
      lines.geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      lines.geometry.attributes.position.needsUpdate = true;
      
      renderer.render(scene, camera);
  }
  
  init();
  
  window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
  });
  </script>
  </body>
  </html>`,
            css: "",
            js: ""
        },
        variants: [

        ]
    },
    {
        id: "comp-2v9jxm",
        name: "New Component",
        category: "Buttons",
        tags: [],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Quantum Level 54 | Chronos Fracture</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  </head>
  <body style="margin: 0; background: #000; overflow: hidden; cursor: none;">
      <div id="quantum-ui" style="position: absolute; inset: 0; z-index: 10; display: flex; justify-content: center; align-items: center; pointer-events: none;">
          <div id="interaction-anchor" style="pointer-events: auto; width: 400px; height: 150px; background: transparent;"></div>
      </div>
      <canvas id="singularity-core"></canvas>
  </body>
  </html>`,
            css: "",
            js: `// --- SHADER CODE (Temporal Text Decay Logic) ---
  const vertexShader = \`
      varying vec2 vUv;
      varying vec3 vPosition;
      uniform float uTime;
      uniform vec2 uMouse;
      uniform float uClick;
  
      void main() {
          vUv = uv;
          vPosition = position;
          
          // Non-linear Vertex Displacement (Beyond Limit Shape Shift)
          float d = distance(uv, uMouse * 0.5 + 0.5);
          float strength = (0.5 - d) * uClick * 20.0;
          vec3 newPos = position + normal * strength * sin(uTime * 10.0 + position.y);
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
      }
  \`;
  
  const fragmentShader = \`
      varying vec2 vUv;
      varying vec3 vPosition;
      uniform float uTime;
      uniform vec2 uMouse;
      uniform sampler2D uTextTexture;
      uniform float uHover;
  
      void main() {
          // Spatial Distortion based on Time (uTime) and Mouse (uMouse)
          vec2 distortedUv = vUv + uHover * 0.05 * vec2(
              sin(vUv.y * 20.0 + uTime),
              cos(vUv.x * 20.0 + uTime)
          );
          
          // Sampling Text Texture with decay effect
          vec4 text = texture2D(uTextTexture, distortedUv);
          
          // Chromatic Aberration (Split RGB edges)
          float red = texture2D(uTextTexture, distortedUv + uHover * 0.01).r;
          float green = texture2D(uTextTexture, distortedUv).g;
          float blue = texture2D(uTextTexture, distortedUv - uHover * 0.01).b;
          
          vec3 col = vec3(red, green, blue);
          
          // Edge Decay based on Mouse proximity
          float d = distance(vUv, uMouse * 0.5 + 0.5);
          float edgeDecay = smoothstep(0.0, 0.4 + uHover * 0.2, d);
          
          col *= (1.0 - edgeDecay) * (1.0 + uHover); // Glow on hover
          
          gl_FragColor = vec4(col, text.a);
          if(gl_FragColor.a < 0.1) discard; // Hard edges
      }
  \`;
  
  // --- ENGINE SETUP ---
  let scene, camera, renderer, raycaster, portal, textMesh;
  const mouse = new THREE.Vector2();
  const clock = new THREE.Clock();
  
  function init() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 10;
  
      renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('singularity-core'), antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  
      raycaster = new THREE.Raycaster();
  
      // 1. Create Temporal Text Texture (Beyond Limit Rendering)
      const textCanvas = document.createElement('canvas');
      textCanvas.width = 1024; textCanvas.height = 256;
      const ctx = textCanvas.getContext('2d');
      ctx.font = '900 120px "Orbitron", "Exo 2", sans-serif';
      ctx.fillStyle = '#ffffff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('QUANTUM_v54', 512, 128);
      ctx.strokeStyle = '#00f2ff'; ctx.lineWidth = 4;
      ctx.strokeText('QUANTUM_v54', 512, 128);
      const textTexture = new THREE.CanvasTexture(textCanvas);
  
      // 2. The Fracture Plane Geometry (Tessellated for dynamic warping)
      const geo = new THREE.PlaneGeometry(12, 4, 32, 16);
      
      // 3. Custom Shader Material (Beyond Limit)
      const mat = new THREE.ShaderMaterial({
          vertexShader, fragmentShader,
          uniforms: {
              uTime: { value: 0 }, uMouse: { value: new THREE.Vector2() },
              uTextTexture: { value: textTexture }, uHover: { value: 0 },
              uClick: { value: 0 }
          },
          transparent: true, side: THREE.DoubleSide
      });
  
      textMesh = new THREE.Mesh(geo, mat);
      scene.add(textMesh);
  
      // Dynamic Interaction Logic
      const anchor = document.getElementById('interaction-anchor');
      let isHovering = false;
  
      window.addEventListener('mousemove', (e) => {
          // Normalizing mouse for raw shader consumption
          mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
          
          // Raycasting for pixel-perfect hover checks in 3D space
          raycaster.setFromCamera(mouse, camera);
          const intersects = raycaster.intersectObject(textMesh);
          if(intersects.length > 0) {
              if(!isHovering) { isHovering = true; gsap.to(mat.uniforms.uHover, { value: 1, duration: 0.5 }); }
              mat.uniforms.uMouse.value.lerp(intersects[0].uv.subScalar(0.5), 0.1);
          } else {
              if(isHovering) { isHovering = false; gsap.to(mat.uniforms.uHover, { value: 0, duration: 0.5 }); }
          }
      });
  
      window.addEventListener('mousedown', () => {
          // FRACTURE LOGIC (Engineering)
          gsap.to(mat.uniforms.uClick, { value: 1, duration: 0.2 });
          gsap.to(camera.position, { z: 8, duration: 0.1, yoyo: true, repeat: 1 }); // Hard Impact screen shake
      });
      window.addEventListener('mouseup', () => {
          gsap.to(mat.uniforms.uClick, { value: 0, duration: 1.5, ease: "elastic.out(1, 0.3)" });
      });
  
      animate();
  }
  
  function animate() {
      requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      textMesh.material.uniforms.uTime.value = time;
      
      // Ambient mesh warp
      textMesh.rotation.y = mouse.x * 0.05 + Math.sin(time * 0.2) * 0.02;
      textMesh.rotation.x = -mouse.y * 0.05;
  
      renderer.render(scene, camera);
  }
  
  init();
  
  window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
  });`
        },
        variants: [

        ]
    },
    {
        id: "comp-alj5n6",
        name: "New Component",
        category: "Buttons",
        tags: ["hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Level 56 | Neural Shatter</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@700&display=swap');
          body, html { margin: 0; padding: 0; background: #000; overflow: hidden; height: 100vh; cursor: none; }
          #ui-layer {
              position: absolute; inset: 0; display: flex; 
              justify-content: center; align-items: center; z-index: 10; pointer-events: none;
          }
          #god-btn {
              padding: 40px 100px; background: transparent; border: 1px solid rgba(0,255,136,0.5);
              color: #00ff88; font-family: 'Syncopate', sans-serif; font-size: 1.5rem;
              letter-spacing: 20px; cursor: pointer; pointer-events: auto;
              backdrop-filter: blur(40px); position: relative; transition: 0.4s cubic-bezier(0.2, 1, 0.3, 1);
          }
          #god-btn:hover { letter-spacing: 35px; background: #00ff88; color: #000; box-shadow: 0 0 100px rgba(0,255,136,0.4); }
          canvas { position: absolute; inset: 0; z-index: 1; pointer-events: none; }
          #cursor {
              position: fixed; width: 40px; height: 40px; border: 1px solid #00ff88;
              border-radius: 50%; pointer-events: none; z-index: 1000; mix-blend-mode: difference;
          }
      </style>
  </head>
  <body>
      <div id="cursor"></div>
      <div id="ui-layer"><button id="god-btn">SHATTER_v56</button></div>
      <canvas id="core-canvas"></canvas>
  </body>
  </html>`,
            css: "",
            js: `let scene, camera, renderer, particles, points;
  const count = 15000; // 15,000 Dynamic Entities
  const mouse = new THREE.Vector2();
  const targetMouse = new THREE.Vector2();
  
  function init() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 3000);
      camera.position.z = 1000;
  
      renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('core-canvas'), antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  
      // --- GEOMETRY: THE LIQUID NEURAL CLOUD ---
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      const vel = new Float32Array(count * 3);
      const originals = new Float32Array(count * 3);
  
      for (let i = 0; i < count; i++) {
          // Engineering: Spherical Distribution
          const r = 400 + Math.random() * 200;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos((Math.random() * 2) - 1);
          
          pos[i*3] = r * Math.sin(phi) * Math.cos(theta);
          pos[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
          pos[i*3+2] = r * Math.cos(phi);
          
          originals[i*3] = pos[i*3];
          originals[i*3+1] = pos[i*3+1];
          originals[i*3+2] = pos[i*3+2];
      }
  
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      
      // Shader-based Materials for High Performance
      const mat = new THREE.PointsMaterial({
          size: 2, color: 0x00ff88, transparent: true, opacity: 0.6,
          blending: THREE.AdditiveBlending, depthWrite: false
      });
  
      particles = new THREE.Points(geo, mat);
      scene.add(particles);
  
      // --- REALISTIC INTERACTION LOGIC ---
      window.addEventListener('mousemove', (e) => {
          targetMouse.x = (e.clientX - window.innerWidth / 2);
          targetMouse.y = -(e.clientY - window.innerHeight / 2);
          gsap.to('#cursor', { x: e.clientX - 20, y: e.clientY - 20, duration: 0.2 });
      });
  
      const btn = document.getElementById('god-btn');
      btn.addEventListener('mousedown', () => {
          // SHATTER EFFECT: Push all 15k particles away with Expo ease
          const positions = particles.geometry.attributes.position.array;
          for (let i = 0; i < count; i++) {
              const i3 = i * 3;
              gsap.to(positions, {
                  [i3]: positions[i3] * 5,
                  [i3+1]: positions[i3+1] * 5,
                  duration: 0.6, ease: "expo.out"
              });
          }
          gsap.to(camera.position, { z: 1500, duration: 0.4 });
      });
  
      window.addEventListener('mouseup', () => {
          // RE-ASSEMBLY: Magnetic return to original shape
          const positions = particles.geometry.attributes.position.array;
          for (let i = 0; i < count; i++) {
              const i3 = i * 3;
              gsap.to(positions, {
                  [i3]: originals[i3],
                  [i3+1]: originals[i3+1],
                  duration: 2, ease: "elastic.out(1, 0.3)"
              });
          }
          gsap.to(camera.position, { z: 1000, duration: 1.5, ease: "power2.inOut" });
      });
  
      animate();
  }
  
  function animate() {
      requestAnimationFrame(animate);
      
      mouse.x += (targetMouse.x - mouse.x) * 0.05;
      mouse.y += (targetMouse.y - mouse.y) * 0.05;
  
      particles.rotation.y += 0.002;
      particles.rotation.x += 0.001;
  
      // Fluid Neural Motion Logic
      const positions = particles.geometry.attributes.position.array;
      const time = Date.now() * 0.001;
  
      for (let i = 0; i < count; i++) {
          const i3 = i * 3;
          // Adding Simplex-style Noise Wave
          positions[i3+2] += Math.sin(time + positions[i3] * 0.01) * 0.5;
          
          // Dynamic Mouse Gravity
          const dx = mouse.x - positions[i3];
          const dy = mouse.y - positions[i3+1];
          const dist = Math.sqrt(dx*dx + dy*dy);
          
          if(dist < 300) {
              const force = (300 - dist) * 0.01;
              positions[i3] -= dx * force * 0.1;
              positions[i3+1] -= dy * force * 0.1;
          }
      }
      particles.geometry.attributes.position.needsUpdate = true;
  
      renderer.render(scene, camera);
  }
  
  init();
  
  // Window Resize Handling
  window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
  });`
        },
        variants: [

        ]
    },
    {
        id: "comp-m5kwpc",
        name: "New Component",
        category: "Buttons",
        tags: ["hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Level 57 | Morphing Relic</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@900&display=swap');
          body, html { margin: 0; padding: 0; background: #050505; overflow: hidden; height: 100vh; }
          
          #ui-portal {
              position: absolute; inset: 0; display: flex; 
              justify-content: center; align-items: center; z-index: 100;
              pointer-events: none;
          }
  
          #morph-trigger {
              padding: 50px 100px; background: rgba(255, 255, 255, 0.01);
              border: 2px solid rgba(255, 255, 255, 0.2); color: #fff;
              font-family: 'Orbitron', sans-serif; font-size: 1.5rem;
              letter-spacing: 15px; cursor: pointer; pointer-events: auto;
              backdrop-filter: blur(20px); transition: 0.5s;
              text-transform: uppercase; overflow: hidden;
          }
  
          #morph-trigger:hover {
              border-color: #ff00ff; color: #ff00ff;
              box-shadow: 0 0 80px rgba(255, 0, 255, 0.3);
              letter-spacing: 25px;
          }
  
          #canvas-container { position: absolute; inset: 0; z-index: 1; }
      </style>
  </head>
  <body>
  
      <div id="ui-portal">
          <button id="morph-trigger">EVOLVE_v57</button>
      </div>
      <div id="canvas-container"></div>
  
      <script>
          let scene, camera, renderer, mainMesh, particles, clock;
          const geometries = [
              new THREE.IcosahedronGeometry(10, 15),
              new THREE.TorusKnotGeometry(7, 2, 128, 32),
              new THREE.BoxGeometry(12, 12, 12, 32, 32),
              new THREE.OctahedronGeometry(10, 0)
          ];
          let currentGeoIndex = 0;
  
          function init() {
              scene = new THREE.Scene();
              camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
              camera.position.z = 35;
  
              renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
              renderer.setSize(window.innerWidth, window.innerHeight);
              renderer.setPixelRatio(window.devicePixelRatio);
              document.getElementById('canvas-container').appendChild(renderer.domElement);
  
              clock = new THREE.Clock();
  
              // --- THE CORE MESH (The Relic) ---
              const material = new THREE.MeshPhysicalMaterial({
                  color: 0xffffff, metalness: 0.9, roughness: 0.1,
                  transmission: 0.5, thickness: 2, transparent: true,
                  wireframe: true, emissive: 0xff00ff, emissiveIntensity: 0.2
              });
  
              mainMesh = new THREE.Mesh(geometries[0], material);
              scene.add(mainMesh);
  
              // --- PARTICLE BACKGROUND (Dynamic Neural Network) ---
              const pGeo = new THREE.BufferGeometry();
              const pCount = 5000;
              const pPos = new Float32Array(pCount * 3);
              for(let i=0; i<pCount*3; i++) pPos[i] = (Math.random() - 0.5) * 200;
              pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
              
              const pMat = new THREE.PointsMaterial({ size: 0.1, color: 0xff00ff, transparent: true, opacity: 0.5 });
              particles = new THREE.Points(pGeo, pMat);
              scene.add(particles);
  
              // Lighting
              const light1 = new THREE.PointLight(0x00f2ff, 2, 100);
              light1.position.set(20, 20, 20);
              scene.add(light1);
  
              const light2 = new THREE.PointLight(0xff00ff, 2, 100);
              light2.position.set(-20, -20, 20);
              scene.add(light2);
  
              // Interaction
              const btn = document.getElementById('morph-trigger');
              
              btn.addEventListener('click', () => {
                  // 1. CHANGE SHAPE (Geometry Swap)
                  currentGeoIndex = (currentGeoIndex + 1) % geometries.length;
                  
                  // 2. EXPLOSION EFFECT
                  gsap.to(mainMesh.scale, { x: 3, y: 3, z: 3, duration: 0.3, ease: "expo.out" });
                  gsap.to(mainMesh.rotation, { x: "+=5", y: "+=5", duration: 0.5 });
                  
                  setTimeout(() => {
                      mainMesh.geometry = geometries[currentGeoIndex];
                      gsap.to(mainMesh.scale, { x: 1, y: 1, z: 1, duration: 1, ease: "elastic.out(1, 0.3)" });
                  }, 300);
  
                  // 3. COLOR SHIFT
                  const newColor = currentGeoIndex % 2 === 0 ? 0x00f2ff : 0xff00ff;
                  gsap.to(material.emissive, { r: new THREE.Color(newColor).r, g: new THREE.Color(newColor).g, b: new THREE.Color(newColor).b, duration: 0.5 });
              });
  
              animate();
          }
  
          function animate() {
              requestAnimationFrame(animate);
              const time = clock.getElapsedTime();
  
              mainMesh.rotation.y += 0.01;
              mainMesh.rotation.z += 0.005;
  
              // Simplex-style deformation on Vertices
              const pos = mainMesh.geometry.attributes.position;
              for (let i = 0; i < pos.count; i++) {
                  const x = pos.getX(i);
                  const y = pos.getY(i);
                  const z = pos.getZ(i);
                  
                  // Pulsating effect
                  const wave = Math.sin(time + x * 0.5) * 0.2;
                  pos.setZ(i, z + wave);
              }
              pos.needsUpdate = true;
  
              particles.rotation.y += 0.001;
  
              renderer.render(scene, camera);
          }
  
          init();
  
          window.addEventListener('resize', () => {
              camera.aspect = window.innerWidth / window.innerHeight;
              camera.updateProjectionMatrix();
              renderer.setSize(window.innerWidth, window.innerHeight);
          });
      </script>
  </body>
  </html>`,
            css: "",
            js: ""
        },
        variants: [

        ]
    },
    {
        id: "comp-9ix65j",
        name: "New Component",
        category: "Buttons",
        tags: [],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777098773998,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Level 58 | Liquid Metal Aurora</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@700&display=swap');
          body { margin: 0; background: #000; overflow: hidden; cursor: none; }
          #ui-portal {
              position: absolute; inset: 0; display: flex; 
              justify-content: center; align-items: center; z-index: 100;
          }
          #liquid-btn {
              padding: 50px 100px; background: transparent; border: none;
              color: #fff; font-family: 'Syncopate', sans-serif; font-size: 1.5rem;
              letter-spacing: 20px; cursor: pointer; pointer-events: auto;
              text-transform: uppercase; text-shadow: 0 0 20px rgba(255,255,255,0.5);
              transition: 0.5s; z-index: 101;
          }
          #cursor {
              position: fixed; width: 20px; height: 20px; background: #fff;
              border-radius: 50%; pointer-events: none; z-index: 1000;
              mix-blend-mode: difference; box-shadow: 0 0 30px #fff;
          }
      </style>
  </head>
  <body>
      <div id="cursor"></div>
      <div id="ui-portal"><button id="liquid-btn">AURORA_v58</button></div>
      <canvas id="stage"></canvas>
  
  <script>
  let scene, camera, renderer, blob, clock;
  const mouse = new THREE.Vector2();
  const targetMouse = new THREE.Vector2();
  
  const vertexShader = \`
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec2 vUv;
      uniform float uTime;
      void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
      }
  \`;
  
  const fragmentShader = \`
      uniform float uTime;
      uniform vec2 uMouse;
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      
      void main() {
          vec3 normal = normalize(vNormal);
          vec3 viewDir = normalize(vViewPosition);
          
          // Fresnel effect for realistic liquid reflection
          float fresnel = pow(1.0 - dot(normal, viewDir), 3.0);
          
          // Aurora Color Logic (Cyclic RGB)
          vec3 col1 = vec3(0.0, 1.0, 0.8); // Cyan
          vec3 col2 = vec3(0.8, 0.0, 1.0); // Purple
          vec3 color = mix(col1, col2, sin(uTime + normal.x * 2.0) * 0.5 + 0.5);
          
          // Specular highlight
          float spec = pow(max(dot(reflect(-viewDir, normal), vec3(0.0, 0.0, 1.0)), 0.0), 64.0);
          
          gl_FragColor = vec4(color + fresnel + spec, 1.0);
      }
  \`;
  
  function init() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
      camera.position.z = 20;
  
      renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('stage'), antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
  
      clock = new THREE.Clock();
  
      // --- THE LIQUID BLOB ---
      const geo = new THREE.SphereGeometry(8, 128, 128);
      const mat = new THREE.ShaderMaterial({
          vertexShader, fragmentShader,
          uniforms: { uTime: { value: 0 }, uMouse: { value: new THREE.Vector2() } }
      });
  
      blob = new THREE.Mesh(geo, mat);
      scene.add(blob);
  
      // Interaction
      window.addEventListener('mousemove', (e) => {
          targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
          targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
          gsap.to('#cursor', { x: e.clientX - 10, y: e.clientY - 10, duration: 0.1 });
      });
  
      const btn = document.getElementById('liquid-btn');
      btn.addEventListener('mouseenter', () => {
          gsap.to(blob.scale, { x: 1.5, y: 1.2, z: 1.5, duration: 0.8, ease: "elastic.out(1, 0.3)" });
          gsap.to('#liquid-btn', { letterSpacing: "40px", duration: 0.5 });
      });
  
      btn.addEventListener('mousedown', () => {
          gsap.to(blob.scale, { x: 0.5, y: 0.5, z: 2.0, duration: 0.2 });
      });
  
      window.addEventListener('mouseup', () => {
          gsap.to(blob.scale, { x: 1, y: 1, z: 1, duration: 1, ease: "elastic.out(1, 0.2)" });
      });
  
      animate();
  }
  
  function animate() {
      requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      blob.material.uniforms.uTime.value = time;
      
      // Dynamic Warp (Engineer Level)
      const pos = blob.geometry.attributes.position;
      for (let i = 0; i < pos.count; i++) {
          const x = pos.getX(i);
          const y = pos.getY(i);
          const z = pos.getZ(i);
          
          // Multi-layered Noise for realistic fluid
          const noise = Math.sin(x * 0.3 + time * 2.0) * Math.cos(y * 0.3 + time * 1.5) * 0.5;
          const mouseImp = Math.exp(-Math.pow(distance(targetMouse, new THREE.Vector2(x, y)), 2) / 2.0);
          
          pos.setZ(i, z + noise);
      }
      pos.needsUpdate = true;
  
      blob.rotation.y += 0.005;
      renderer.render(scene, camera);
  }
  
  function distance(v1, v2) { return Math.sqrt(Math.pow(v1.x - v2.x, 2) + Math.pow(v1.y - v2.y, 2)); }
  
  init();
  </script>
  </body>
  </html>`,
            css: "",
            js: ""
        },
        variants: [

        ]
    },
    {
        id: "comp-jkl3q9",
        name: "New Component",
        category: "Buttons",
        tags: ["glow", "hover"],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Level 60 | Obsidian Nova</title>
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <div id="cursor-glow"></div>
      <div class="ui-wrapper">
          <button id="main-portal">NOVA_v60</button>
      </div>
      <canvas id="webgl-canvas"></canvas>
  
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
      <script src="script.js"></script>
  </body>
  </html>`,
            css: `@import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@700&display=swap');
  
  * { margin: 0; padding: 0; box-sizing: border-box; }
  
  body {
      background: #000;
      overflow: hidden;
      height: 100vh;
      cursor: none;
  }
  
  .ui-wrapper {
      position: absolute;
      inset: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10;
  }
  
  #main-portal {
      padding: 35px 80px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(0, 255, 255, 0.3);
      color: #00f2ff;
      font-family: 'Syncopate', sans-serif;
      font-size: 1.2rem;
      letter-spacing: 15px;
      cursor: pointer;
      backdrop-filter: blur(15px);
      transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
      text-transform: uppercase;
  }
  
  #main-portal:hover {
      letter-spacing: 25px;
      background: #00f2ff;
      color: #000;
      box-shadow: 0 0 50px rgba(0, 242, 255, 0.6);
  }
  
  #cursor-glow {
      position: fixed;
      width: 200px;
      height: 200px;
      background: radial-gradient(circle, rgba(0,242,255,0.15) 0%, transparent 70%);
      pointer-events: none;
      z-index: 5;
      transform: translate(-50%, -50%);
  }
  
  canvas {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1;
  }`,
            js: `let scene, camera, renderer, mesh, particles, clock;
  const mouse = new THREE.Vector2();
  
  function init() {
      // 1. Scene Setup
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 30;
  
      renderer = new THREE.WebGLRenderer({
          canvas: document.getElementById('webgl-canvas'),
          antialias: true,
          alpha: true
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
  
      clock = new THREE.Clock();
  
      // 2. The Core Object (Morphing Geometry)
      const geometry = new THREE.IcosahedronGeometry(10, 64);
      const material = new THREE.MeshPhysicalMaterial({
          color: 0x00f2ff,
          wireframe: true,
          emissive: 0x00f2ff,
          emissiveIntensity: 0.5,
          transparent: true,
          opacity: 0.3
      });
  
      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
  
      // 3. Background Quantum Particles
      const pGeo = new THREE.BufferGeometry();
      const pCount = 3000;
      const pPos = new Float32Array(pCount * 3);
      for (let i = 0; i < pCount * 3; i++) {
          pPos[i] = (Math.random() - 0.5) * 100;
      }
      pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
      const pMat = new THREE.PointsMaterial({ size: 0.1, color: 0x00f2ff, transparent: true, opacity: 0.5 });
      particles = new THREE.Points(pGeo, pMat);
      scene.add(particles);
  
      // 4. Lights
      const light = new THREE.PointLight(0x00f2ff, 2, 50);
      light.position.set(10, 10, 10);
      scene.add(light);
  
      // 5. Interaction Logic
      window.addEventListener('mousemove', (e) => {
          mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
          
          // Move UI Glow
          gsap.to('#cursor-glow', { x: e.clientX, y: e.clientY, duration: 0.5 });
      });
  
      const btn = document.getElementById('main-portal');
      btn.addEventListener('mousedown', () => {
          gsap.to(mesh.scale, { x: 2, y: 0.5, z: 2, duration: 0.3, ease: "expo.out" });
          gsap.to(material, { opacity: 1, emissiveIntensity: 2, duration: 0.2 });
      });
  
      window.addEventListener('mouseup', () => {
          gsap.to(mesh.scale, { x: 1, y: 1, z: 1, duration: 1.2, ease: "elastic.out(1, 0.3)" });
          gsap.to(material, { opacity: 0.3, emissiveIntensity: 0.5, duration: 0.8 });
      });
  
      animate();
  }
  
  function animate() {
      requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
  
      // Subtle Auto-Rotation
      mesh.rotation.y += 0.005;
      mesh.rotation.x += 0.003;
  
      // Displacement Logic (Bioluminescence Effect)
      const positions = mesh.geometry.attributes.position;
      for (let i = 0; i < positions.count; i++) {
          const x = positions.getX(i);
          const y = positions.getY(i);
          const wave = Math.sin(time * 2 + x * 0.5) * 0.2;
          positions.setZ(i, positions.getZ(i) + wave * 0.01); 
      }
      positions.needsUpdate = true;
  
      // Follow Mouse Parallax
      scene.rotation.y = mouse.x * 0.2;
      scene.rotation.x = -mouse.y * 0.2;
  
      particles.rotation.y -= 0.001;
  
      renderer.render(scene, camera);
  }
  
  // Handle Window Resize
  window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
  });
  
  init();`
        },
        variants: [

        ]
    },
    {
        id: "comp-jlqib4",
        name: "New Component",
        category: "Buttons",
        tags: [],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Level 61 | Kinetic Spine</title>
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <div id="interaction-label">HOLD TO SPLIT SYNC</div>
      <canvas id="canvas-v61"></canvas>
  
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
      <script src="script.js"></script>
  </body>
  </html>`,
            css: `body {
      margin: 0; background: #010208; overflow: hidden;
      font-family: 'Courier New', monospace; cursor: crosshair;
  }
  
  #interaction-label {
      position: absolute; bottom: 50px; width: 100%;
      text-align: center; color: #00ffcc;
      letter-spacing: 10px; font-weight: bold;
      pointer-events: none; z-index: 10;
      text-shadow: 0 0 10px #00ffcc;
      opacity: 0.6;
  }
  
  canvas { display: block; }`,
            js: `let scene, camera, renderer, tube, clock;
  const points = [];
  const mouse = new THREE.Vector3(0, 0, 0);
  
  function init() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 50;
  
      renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas-v61'), antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
  
      clock = new THREE.Clock();
  
      // 1. Create a Dynamic Curve (The Spine)
      for (let i = 0; i < 10; i++) {
          points.push(new THREE.Vector3(i * 5 - 25, Math.sin(i * 0.5) * 5, 0));
      }
  
      const curve = new THREE.CatmullRomCurve3(points);
      const geometry = new THREE.TubeGeometry(curve, 100, 2, 20, false);
      
      // 2. Iridescent Bio-Material
      const material = new THREE.MeshPhysicalMaterial({
          color: 0x00ffcc,
          emissive: 0x001111,
          metalness: 0.9,
          roughness: 0.1,
          wireframe: true,
          flatShading: false
      });
  
      tube = new THREE.Mesh(geometry, material);
      scene.add(tube);
  
      // 3. Floating Particles (Neural Dust)
      const pGeo = new THREE.BufferGeometry();
      const pPos = new Float32Array(2000 * 3);
      for(let i=0; i<6000; i++) pPos[i] = (Math.random() - 0.5) * 200;
      pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
      const pMat = new THREE.PointsMaterial({ size: 0.2, color: 0x00ffcc });
      scene.add(new THREE.Points(pGeo, pMat));
  
      // Listeners
      window.addEventListener('mousemove', (e) => {
          mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      });
  
      window.addEventListener('mousedown', () => {
          // Shatter Effect: Morph tube into spheres logic
          gsap.to(tube.scale, { x: 0.1, y: 5, z: 0.1, duration: 0.4, ease: "expo.out" });
          gsap.to(material, { opacity: 0.2, duration: 0.2 });
      });
  
      window.addEventListener('mouseup', () => {
          gsap.to(tube.scale, { x: 1, y: 1, z: 1, duration: 1.5, ease: "elastic.out(1, 0.3)" });
          gsap.to(material, { opacity: 1, duration: 1 });
      });
  
      animate();
  }
  
  function animate() {
      requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
  
      // Move Spine Vertices based on Mouse and Time
      const positions = tube.geometry.attributes.position;
      for (let i = 0; i < positions.count; i++) {
          const x = positions.getX(i);
          const y = positions.getY(i);
          const z = positions.getZ(i);
  
          // Sinusoidal "Living" Motion
          const distortion = Math.sin(time + x * 0.5) * 2;
          positions.setY(i, y + distortion * 0.05);
          
          // Mouse Attraction
          if (Math.abs(x - mouse.x * 50) < 10) {
              positions.setX(i, x + mouse.x);
          }
      }
      positions.needsUpdate = true;
  
      tube.rotation.y = time * 0.2;
      tube.rotation.z = Math.sin(time * 0.5) * 0.1;
  
      renderer.render(scene, camera);
  }
  
  window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
  });
  
  init();`
        },
        variants: [

        ]
    },
    {
        id: "comp-axld3k",
        name: "New Component",
        category: "Buttons",
        tags: [],
        authorId: "system",
        authorName: "BJU-VERSE",
        createdAt: 1777093115159,
        code: {
            html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Level 62 | Fractal Entropy</title>
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <div id="terminal-overlay">SYSTEM_ERROR: ENTROPY_DETECTED...</div>
      <canvas id="entropy-canvas"></canvas>
  
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
      <script src="script.js"></script>
  </body>
  </html>`,
            css: `body {
      margin: 0; background: #000; overflow: hidden;
      font-family: 'Courier New', monospace; cursor: none;
  }
  
  #terminal-overlay {
      position: absolute; top: 20px; left: 20px;
      color: #ff3300; font-size: 0.8rem; letter-spacing: 2px;
      z-index: 100; pointer-events: none;
  }
  
  canvas { display: block; filter: contrast(1.2) brightness(1.1); }
  
  /* Custom cursor for entropy feel */
  #custom-cursor {
      position: fixed; width: 10px; height: 10px;
      background: #ff3300; border-radius: 50%;
      pointer-events: none; z-index: 999;
  }`,
            js: `let scene, camera, renderer, crystal, particles, clock;
  const mouse = new THREE.Vector2();
  
  function init() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 40;
  
      renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('entropy-canvas'), antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
  
      clock = new THREE.Clock();
  
      // 1. Create the Fractal Shard (The Main 'Non-Button')
      const geo = new THREE.TetrahedronGeometry(10, 0); // Raw Sharp Shape
      const mat = new THREE.MeshPhongMaterial({
          color: 0x222222,
          emissive: 0xff3300,
          flatShading: true,
          shininess: 100,
          wireframe: true
      });
  
      crystal = new THREE.Mesh(geo, mat);
      scene.add(crystal);
  
      // 2. The Particle Chaos (Entropy System)
      const pCount = 5000;
      const pGeo = new THREE.BufferGeometry();
      const pPos = new Float32Array(pCount * 3);
      for(let i=0; i<pCount*3; i++) pPos[i] = (Math.random() - 0.5) * 150;
      
      pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
      const pMat = new THREE.PointsMaterial({ size: 0.1, color: 0xff3300, transparent: true, opacity: 0.8 });
      particles = new THREE.Points(pGeo, pMat);
      scene.add(particles);
  
      // 3. Lighting (Atmospheric)
      const light = new THREE.PointLight(0xff3300, 2, 100);
      light.position.set(0, 0, 10);
      scene.add(light);
  
      // Listeners
      window.addEventListener('mousemove', (e) => {
          mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
          
          // Tilt the crystal based on mouse
          gsap.to(crystal.rotation, { x: -mouse.y * 2, y: mouse.x * 2, duration: 1 });
      });
  
      window.addEventListener('mousedown', () => {
          // ENTROPY EXPLOSION
          gsap.to(crystal.scale, { x: 5, y: 5, z: 5, duration: 0.1 });
          gsap.to(mat, { opacity: 0, duration: 0.2 });
          gsap.to(particles.rotation, { x: "+=10", y: "+=10", duration: 1, ease: "expo.out" });
          
          // Reverse after 1 sec
          setTimeout(() => {
              gsap.to(crystal.scale, { x: 1, y: 1, z: 1, duration: 1.5, ease: "elastic.out(1, 0.3)" });
              gsap.to(mat, { opacity: 1, duration: 1 });
          }, 1000);
      });
  
      animate();
  }
  
  function animate() {
      requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
  
      // Subtle breathing animation
      crystal.position.y = Math.sin(time) * 2;
      
      // Entropy Field Logic: Particles react to mouse
      const positions = particles.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
          // Particles rotate around center
          const x = positions[i];
          const z = positions[i+2];
          positions[i] = x * Math.cos(0.001) - z * Math.sin(0.001);
          positions[i+2] = x * Math.sin(0.001) + z * Math.cos(0.001);
          
          // Mouse avoidance
          if (Math.abs(x - mouse.x * 50) < 5) {
              positions[i+1] += 1; // Particles fly up near mouse
          }
      }
      particles.geometry.attributes.position.needsUpdate = true;
  
      renderer.render(scene, camera);
  }
  
  window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
  });
  
  init();`
        },
        variants: [

        ]
    },



];
