
import { useState, useEffect, useCallback } from 'react';

export function usePerformanceMonitor() {
  const [fps, setFps] = useState(60);
  const [memory, setMemory] = useState<any>(null);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let frameId: number;

    const measure = () => {
      frameCount++;
      const now = performance.now();
      
      if (now - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
        
        // @ts-ignore
        if (performance.memory) {
          // @ts-ignore
          setMemory(performance.memory);
        }
      }
      
      frameId = requestAnimationFrame(measure);
    };

    frameId = requestAnimationFrame(measure);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return { fps, memory };
}
