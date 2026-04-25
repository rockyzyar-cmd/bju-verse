
import React from 'react';

const GridSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <div key={i} className="rounded-3xl border border-white/5 bg-zinc-900/50 aspect-[4/3] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
          <div className="absolute bottom-0 left-0 w-full p-5 space-y-3">
             <div className="h-4 w-2/3 bg-white/5 rounded-lg" />
             <div className="h-3 w-1/3 bg-white/5 rounded-lg" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridSkeleton;
