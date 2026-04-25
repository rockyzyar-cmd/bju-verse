
import React from 'react';
import { usePerformanceMonitor } from '../../hooks/usePerformanceMonitor';
import { Cpu, Zap, Activity } from 'lucide-react';

const PerformanceOverlay = () => {
  const { fps } = usePerformanceMonitor();
  
  return (
    <div className="fixed top-4 right-4 z-[9999] pointer-events-none">
      <div className="flex items-center gap-4 px-4 py-2 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
        <div className="flex items-center gap-2">
          <Activity className="h-3 w-3 text-cyan-500 animate-pulse" />
          <span className="text-[10px] font-black text-white tracking-widest uppercase">Engine</span>
        </div>
        <div className="h-3 w-[1px] bg-white/20" />
        <div className="flex items-center gap-2">
          <span className={`text-xs font-black ${fps > 55 ? 'text-emerald-500' : fps > 30 ? 'text-orange-500' : 'text-red-500'}`}>
            {fps} FPS
          </span>
        </div>
        <div className="h-3 w-[1px] bg-white/20" />
        <div className="flex items-center gap-2">
           <Cpu className="h-3 w-3 text-purple-500" />
           <span className="text-[10px] font-bold text-zinc-400">0.4ms GL</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOverlay;
