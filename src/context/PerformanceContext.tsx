
import React, { createContext, useContext, ReactNode } from 'react';
import { usePerformanceMonitor } from '../hooks/usePerformanceMonitor';

interface PerformanceContextType {
  fps: number;
  memory: any;
  isLowEnd: boolean;
}

const PerformanceContext = createContext<PerformanceContextType | undefined>(undefined);

export const PerformanceProvider = ({ children }: { children: ReactNode }) => {
  const { fps, memory } = usePerformanceMonitor();
  const isLowEnd = fps < 30;

  return (
    <PerformanceContext.Provider value={{ fps, memory, isLowEnd }}>
      {children}
    </PerformanceContext.Provider>
  );
};

export const usePerformance = () => {
  const context = useContext(PerformanceContext);
  if (context === undefined) {
    throw new Error('usePerformance must be used within a PerformanceProvider');
  }
  return context;
};
