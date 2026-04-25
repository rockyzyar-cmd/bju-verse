import React, { useRef, useMemo, useEffect } from 'react';

interface Props {
  html: string;
  css: string;
  js: string;
  theme?: 'dark' | 'light';
  className?: string;
  id?: string;
  loading?: 'lazy' | 'eager';
  minimal?: boolean;
}

/**
 * LivePreviewEngine
 * High-fidelity isolated rendering using iframes.
 * Optimized for direct srcDoc injection to achieve near-instant boot times.
 */
export const LivePreviewEngine: React.FC<Props> = React.memo(({ 
  html, 
  css, 
  js, 
  theme = 'dark', 
  className = '', 
  loading = 'lazy',
  minimal = false
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // srcDoc recomputes when theme changes to ensure fresh container
  const srcDoc = useMemo(() => {
    // Mega Library Suite: God-Level Features
    const libs = `
      <script src="https://cdn.tailwindcss.com"></script>
      
      <!-- Animation Super-Suite -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/Draggable.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/MotionPathPlugin.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/TextPlugin.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.2/velocity.min.js"></script>
      
      <!-- 3D & Graphics God-Level -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.158.0/three.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/three@0.158.0/examples/js/controls/OrbitControls.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/three@0.158.0/examples/js/loaders/GLTFLoader.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/three-stdlib@2.28.9/dist/three-stdlib.umd.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/three-gpu-pathtracer@0.0.18/build/index.umd.cjs"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/7.3.2/pixi.min.js"></script>
      <script src="https://cdn.babylonjs.com/babylon.js"></script>
      <script src="https://unpkg.com/ogl"></script>
      <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"></script>
      
      <!-- Physics & Math -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/cannon-es@0.20.0/dist/cannon-es.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/ammo.js@0.0.10/ammo.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/maath@0.10.7/dist/maath.umd.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/detect-gpu@5.0.37/dist/detect-gpu.umd.js"></script>
      
      <!-- Creative Coding & Interaction -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js"></script>
      <script src="https://unpkg.com/lucide@latest"></script>
      <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/gpu.js@2.16.0/dist/gpu-browser.min.js"></script>
      
      <!-- Specialized Utilities -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/lenis@1.0.28/dist/lenis.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/popmotion@11.0.5/dist/popmotion.global.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/stats.js@0.17.0/build/stats.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/lil-gui@0.19.1/dist/lil-gui.umd.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/gl-matrix@3.4.3/gl-matrix-min.js"></script>
      <script src="https://cdn.socket.io/4.7.2/socket.io.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/leva@0.9.34/dist/leva.umd.min.js"></script>
      <script src="https://unpkg.com/troika-three-text"></script>
      <script src="https://cdn.jsdelivr.net/npm/three-mesh-bvh@0.6.8/build/index.umd.cjs"></script>
    `;

    return `
    <!DOCTYPE html>
    <html class="${theme}">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <style id="_styles">${css}</style>
        <style>
          :root { 
            color-scheme: ${theme};
          }
          html, body {
            height: 100%;
            margin: 0;
            padding: 0;
            overflow: hidden;
            pointer-events: auto !important;
            cursor: auto !important;
            display: flex;
            align-items: center;
            justify-content: center;
            background: transparent;
          }
          body { 
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            color: ${theme === 'dark' ? 'white' : 'black'};
            perspective: 2000px;
            -webkit-font-smoothing: antialiased;
            pointer-events: auto !important;
            width: 100%;
            height: 100%;
          }
          #_root { 
            width: 550px;
            height: 400px;
            flex-shrink: 0;
            display: flex; 
            flex-direction: column;
            justify-content: center; 
            align-items: center; 
            transform-origin: center;
            box-sizing: border-box;
            padding: 12px;
            pointer-events: auto !important;
            position: relative;
            opacity: 0;
            transition: opacity 0.1s ease-out;
            will-change: transform, opacity;
          }
          * { box-sizing: border-box; }
          canvas { display: block; max-width: 100%; max-height: 100%; outline: none; }
          
          /* Hardened Interactive Controls */
          button, a, [role="button"], input[type="submit"], input[type="button"], label, summary, [tabindex]:not([tabindex="-1"]) {
            cursor: pointer !important;
            pointer-events: auto !important;
            transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s ease;
          }
          
          button:active, a:active, [role="button"]:active {
            transform: scale(0.95);
            opacity: 0.8;
          }

          /* Prevent text selection when interacting with buttons but allow it elsewhere */
          button, [role="button"], a {
            user-select: none;
          }
          
          ::-webkit-scrollbar { display: none; }
        </style>
        <script>
          // GOD-MODE SCALING LOGIC (OPTIMIZED)
          let rafId = null;
          const updateScale = () => {
            if (rafId) cancelAnimationFrame(rafId);
            
            rafId = requestAnimationFrame(() => {
              const root = document.getElementById('_root');
              if (!root) return;

              const baseWidth = 550;
              const baseHeight = 400;
              const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
              const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

              if (viewportWidth === 0 || viewportHeight === 0) return;

              // Proportional scale with safe multiplier - Maxed for "Bada" look
              const scaleX = viewportWidth / baseWidth;
              const scaleY = viewportHeight / baseHeight;
              const scale = Math.min(scaleX, scaleY) * 1.35; 
              
              root.style.transform = 'scale(' + scale + ')';
              root.style.opacity = '1';
            });
          };

          const resizeObserver = new ResizeObserver(updateScale);
          
          window.addEventListener('DOMContentLoaded', () => {
            resizeObserver.observe(document.documentElement);
            updateScale();
            
            // Critical timing for layout engine settle
            [20, 100, 300, 700].forEach(ms => setTimeout(updateScale, ms));
          });
          
          window.addEventListener('load', updateScale);
          window.addEventListener('resize', updateScale);
          
          // Ensure click events aren't swallowed
          window.addEventListener('click', () => {}, true);
        </script>
      </head>
      <body>
        <div id="_root">${html}</div>
        ${libs}
        <script id="_run">${js}</script>
        <script>
          // "GOD-MODE" PERFORMANCE ENGINE v4
          const _registry = { timers: [], frames: [], listeners: [], observers: [] };
          
          window._raw = {
            setInterval: window.setInterval.bind(window),
            setTimeout: window.setTimeout.bind(window),
            requestAnimationFrame: window.requestAnimationFrame.bind(window),
            addEventListener: window.addEventListener.bind(window)
          };

          window.setInterval = (fn, delay, ...args) => {
            const id = window._raw.setInterval(fn, delay, ...args);
            _registry.timers.push({ id, type: 'interval' });
            return id;
          };

          window.setTimeout = (fn, delay, ...args) => {
            const id = window._raw.setTimeout(fn, delay, ...args);
            _registry.timers.push({ id, type: 'timeout' });
            return id;
          };

          window.requestAnimationFrame = (fn) => {
            const id = window._raw.requestAnimationFrame(fn);
            _registry.frames.push(id);
            return id;
          };

          window.addEventListener = (type, fn, options) => {
            _registry.listeners.push({ type, fn, options });
            window._raw.addEventListener(type, fn, options);
          };

          const cleanup = () => {
             try {
               _registry.timers.forEach(t => t.type === 'interval' ? clearInterval(t.id) : clearTimeout(t.id));
               _registry.timers = [];
               _registry.frames.forEach(id => cancelAnimationFrame(id));
               _registry.frames = [];
               _registry.listeners.forEach(l => window.removeEventListener(l.type, l.fn, l.options));
               _registry.listeners = [];
               _registry.observers.forEach(o => o.disconnect());
               _registry.observers = [];

               // Library-specific cleanup
               if (window.gsap) gsap.killTweensOf("*");
               if (window.Howler) Howler.unload();
               // Stop all Tone.js oscillators/loops if it exists
               if (window.Tone && window.Tone.Transport) {
                 window.Tone.Transport.stop();
                 window.Tone.Transport.cancel();
               }
               // Stop Matter.js engines
               if (window.Matter && window.Matter.Engine) {
                  // This is tricky without the engine instance, so we rely on script replacement
               }
               
               document.body.style = "";
               const root = document.getElementById('_root');
               if (root) root.innerHTML = "";
             } catch(e) {}
          };

          const update = (data) => {
            if (!data) return;
            
            // Only cleanup if HTML changed to prevent flickering and state loss on CSS/JS edits
            const root = document.getElementById('_root');
            const htmlChanged = data.html !== undefined && data.html !== root.innerHTML;
            
            if (htmlChanged) {
              cleanup();
              root.innerHTML = data.html;
            }
            
            if (data.css !== undefined) {
              const styleTag = document.getElementById('_styles');
              if (styleTag.textContent !== data.css) {
                styleTag.textContent = data.css;
              }
            }
            
            if (data.js !== undefined || htmlChanged) {
              const old = document.getElementById('_run');
              const s = document.createElement('script');
              s.id = '_run'; 
              s.textContent = '(function() { try { ' + (data.js || '') + ' } catch(err) { console.error("Runtime Error:", err); } })();';
              if (old) old.replaceWith(s); else document.body.appendChild(s);
            }
            
            if (window.lucide) window.lucide.createIcons();
          };

          window.addEventListener('message', (e) => {
            if (e.data === 'PING') {
              window.parent.postMessage('PONG', '*');
              return;
            }
            update(e.data);
          });
          if (window.lucide) window.lucide.createIcons();
          window.addEventListener('beforeunload', cleanup);
          // Notify parent we are ready for initial data
          window.parent.postMessage('READY', '*');
        </script>
      </body>
    </html>`;
  }, [theme]); 

  const lastState = useRef({ html, css, js });
  const isReady = useRef(false);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data === 'READY' && e.source === iframeRef.current?.contentWindow) {
        isReady.current = true;
        if (iframeRef.current?.contentWindow) {
          iframeRef.current.contentWindow.postMessage({ html, css, js }, '*');
        }
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [html, css, js]); // Re-bind with latest props or use a ref

  useEffect(() => {
    if (isReady.current && iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage({ html, css, js }, '*');
    }
  }, [html, css, js]);

  return (
    <iframe
      ref={iframeRef}
      srcDoc={srcDoc}
      className={`w-full h-full border-none bg-transparent ${className} transition-opacity duration-300 pointer-events-auto`}
      sandbox="allow-scripts allow-modals allow-pointer-lock allow-popups allow-same-origin"
      loading={loading}
      title="Hacker-Level Live Preview"
      style={{ pointerEvents: 'auto' }}
    />
  );
});
