
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Maximize2, User, Layers } from 'lucide-react';
import { UIComponent } from '../../types';
import { renderQueue } from '../../lib/renderQueue';
import { LivePreviewEngine } from '../LivePreviewEngine';

interface ComponentGridItemProps {
  component: UIComponent;
  theme: 'light' | 'dark';
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent) => void;
  onViewDetail: () => void;
}

const ComponentGridItem = React.memo(({ 
  component, 
  theme, 
  isFavorite, 
  onToggleFavorite, 
  onViewDetail 
}: ComponentGridItemProps) => {
  const [shouldRenderPreview, setShouldRenderPreview] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // Use the global render queue to stagger iframe initialization
        renderQueue.add(() => {
          setShouldRenderPreview(true);
        });
      } else {
        setShouldRenderPreview(false);
      }
    }, { 
      threshold: 0,
      rootMargin: '200px'
    });

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`group relative overflow-hidden rounded-3xl border transition-all duration-500 transform-gpu gpu-boost content-visibility-auto ${
        theme === 'dark' 
          ? 'bg-[#111] border-white/5 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]' 
          : 'bg-white border-black/5 hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(0,0,0,0.05)]'
      }`}
    >
      {/* Background Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-10" />

      {/* Preview Section */}
      <div 
        className="relative aspect-[4/3] w-full overflow-hidden bg-black/5 dark:bg-white/5 cursor-pointer"
        onClick={onViewDetail}
      >
        <div className="absolute inset-0 z-10 bg-transparent" />
        
        <AnimatePresence mode="wait">
          {shouldRenderPreview ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full w-full"
            >
              <LivePreviewEngine 
                html={component.code.html}
                css={component.code.css}
                js={component.code.js}
                theme={theme}
              />
            </motion.div>
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-zinc-900/5 dark:bg-zinc-100/5">
               <div className="relative">
                  <div className="h-12 w-12 rounded-full border-2 border-cyan-500/20 border-t-cyan-500 animate-spin" />
                  <Layers className="absolute inset-0 m-auto h-5 w-5 text-cyan-500/50" />
               </div>
            </div>
          )}
        </AnimatePresence>

        {/* Hover Actions Overlay */}
        <div className="absolute bottom-4 right-4 z-20 flex gap-2 translate-y-12 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            onClick={onToggleFavorite}
            className={`flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-md transition-colors ${
              isFavorite 
                ? 'bg-red-500 text-white' 
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={onViewDetail}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-white shadow-lg shadow-cyan-500/20 transition-transform hover:scale-110 active:scale-95"
          >
            <Maximize2 className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-5">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-semibold text-zinc-900 dark:text-white line-clamp-1">{component.name}</h3>
          <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-500 px-2 py-1 bg-cyan-500/10 rounded-full">
            {component.category}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
            <User className="h-3 w-3 text-white" />
          </div>
          <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">BJU-VERSE Engine</span>
        </div>
      </div>
    </div>
  );
});

export default ComponentGridItem;
