
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Zap } from 'lucide-react';

const EmptyState = ({ searchQuery }: { searchQuery: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex h-[60vh] items-center justify-center rounded-[40px] border-2 border-dashed border-zinc-500/10 bg-zinc-900/10 backdrop-blur-sm"
    >
      <div className="text-center px-6">
        <div className="relative mx-auto w-24 h-24 mb-6">
           <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-2xl animate-pulse" />
           <div className="relative flex h-full w-full items-center justify-center rounded-full bg-zinc-900 border border-white/10">
              <Zap className="h-10 w-10 text-cyan-500" />
           </div>
        </div>
        <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase mb-2">Null Sector Detected</h3>
        <p className="text-zinc-500 max-w-xs mx-auto text-sm font-medium">
          The registry could not find any nodes matching <span className="text-cyan-400">"{searchQuery}"</span>. 
          Try a different search protocol.
        </p>
      </div>
    </motion.div>
  );
};

export default EmptyState;
