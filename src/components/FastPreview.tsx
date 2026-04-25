import React, { useEffect, useRef } from 'react';

interface Props {
  html: string;
  css: string;
  js?: string;
  theme?: 'dark' | 'light';
  className?: string;
}

/**
 * FastPreview
 * A high-performance Shadow DOM based renderer.
 * Instantiates significantly faster than an iframe (virtually 0ms).
 * Best used for thumbnails, list items, and scroll-heavy views.
 */
export const FastPreview: React.FC<Props> = ({ html, css, js, theme = 'dark', className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shadowRootRef = useRef<ShadowRoot | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    if (!shadowRootRef.current) {
      shadowRootRef.current = containerRef.current.attachShadow({ mode: 'open' });
    }

    const shadow = shadowRootRef.current;
    
    // Exact mapping of body to root for perfect fidelity
    const processedCss = css
      .replace(/body\s*{/g, '#preview-root {')
      .replace(/body(?![a-zA-Z0-9_-])/g, '#preview-root')
      .replace(/position:\s*fixed/g, 'position: absolute');

    shadow.innerHTML = `
      <div id="preview-root" class="${theme}">
        ${html}
      </div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Syncopate:wght@400;700&family=Outfit:wght@300;400;500;600;700&display=swap');
        
        :host {
          display: block;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        #preview-root {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          color: ${theme === 'dark' ? 'white' : 'black'};
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          transform-style: preserve-3d;
          perspective: 1200px;
          overflow: hidden;
        }
        #preview-root.dark { color: white; }
        #preview-root.light { color: black; }
        
        *, *::before, *::after { box-sizing: border-box; }
        
        ${processedCss}
      </style>
    `;

    // Inject Tailwind Play CDN for components using utility classes
    const twScript = window.document.createElement('script');
    twScript.src = 'https://cdn.tailwindcss.com';
    shadow.appendChild(twScript);

    if (js && js.trim().length > 0) {
      try {
        const scriptId = 'script-' + Math.random().toString(36).substr(2, 9);
        containerRef.current.setAttribute('data-script-id', scriptId);

        const scopedJs = `
          (function() {
            const container = document.querySelector('[data-script-id="${scriptId}"]');
            if (!container || !container.shadowRoot) return;
            const shadow = container.shadowRoot;
            const root = shadow.getElementById('preview-root');
            
            const document = {
              getElementById: (id) => shadow.getElementById(id),
              querySelector: (s) => shadow.querySelector(s),
              querySelectorAll: (s) => shadow.querySelectorAll(s),
              addEventListener: (t, l) => shadow.addEventListener(t, l),
              removeEventListener: (t, l) => shadow.removeEventListener(t, l),
              createElement: (n) => window.document.createElement(n),
              body: root
            };
            
            try {
              ${js}
            } catch(e) {
              console.warn('Runtime Error in FastPreview:', e);
            }
          })()
        `;

        const script = window.document.createElement('script');
        script.textContent = scopedJs;
        shadow.appendChild(script);
      } catch (e) {
        console.warn('FastPreview JS Error:', e);
      }
    }
  }, [html, css, js, theme]);

  return (
    <div 
      ref={containerRef} 
      className={`w-full h-full ${className}`}
    />
  );
};
