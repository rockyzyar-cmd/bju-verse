
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Sparkles } from 'lucide-react';

interface SearchFilterBarProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  theme: 'light' | 'dark';
}

const SearchFilterBar = React.memo(({ searchQuery, setSearchQuery, theme }: SearchFilterBarProps) => {
  return (
    <div className="relative mb-8 group">
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
      <div className={`relative flex items-center gap-4 p-2 rounded-2xl border ${
        theme === 'dark' ? 'bg-zinc-900/80 border-white/10' : 'bg-white/80 border-black/5'
      } backdrop-blur-xl`}>
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input
            type="text"
            placeholder="Search ultra-smooth components..."
            className="w-full bg-transparent border-none py-3 pl-12 pr-4 text-zinc-900 dark:text-white focus:ring-0 placeholder:text-zinc-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="hidden sm:flex items-center gap-2 px-4 py-2 border-l border-zinc-500/10">
          <Sparkles className="h-4 w-4 text-cyan-400" />
          <span className="text-sm font-medium text-zinc-400">Deep AI Search</span>
        </div>
      </div>
    </div>
  );
});

export default SearchFilterBar;
