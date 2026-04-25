
import React from 'react';
import { motion } from 'framer-motion';
import { COMPONENT_CATEGORIES } from '../../constants';

interface CategoryQuickBarProps {
  currentCategory: string;
  setCurrentCategory: (cat: string) => void;
  theme: 'light' | 'dark';
}

const CategoryQuickBar = React.memo(({ currentCategory, setCurrentCategory, theme }: CategoryQuickBarProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-4 no-scrollbar">
      {COMPONENT_CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => setCurrentCategory(category)}
          className={`px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300 relative overflow-hidden group ${
            currentCategory === category
              ? 'text-white'
              : theme === 'dark'
                ? 'bg-zinc-900/50 text-zinc-500 border border-white/5 hover:border-cyan-500/30'
                : 'bg-white text-zinc-600 border border-black/5 hover:border-black/20 shadow-sm'
          }`}
        >
          {currentCategory === category && (
            <motion.div
              layoutId="activeCategory"
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{category}</span>
        </button>
      ))}
    </div>
  );
});

export default CategoryQuickBar;
