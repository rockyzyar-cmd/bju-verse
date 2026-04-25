import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Zap, ChevronRight, Github, Layout, Code2, Globe, ShieldCheck, Sparkles, ChevronLeft, RefreshCw } from 'lucide-react';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans overflow-hidden relative selection:bg-cyan-500/30">
      {/* Immersive Background Nodes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-cyan-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-purple-600/10 blur-[180px] rounded-full"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>
      </div>

      {/* Global Header */}
      <header className="h-16 flex items-center justify-between px-8 backdrop-blur-md border-b border-white/5 relative z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]">
            <Zap className="w-5 h-5 text-white fill-white" />
          </div>
          <span className="text-xl font-black tracking-tighter text-white">BJU-VERSE</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-500">
          <a href="#matrix" className="hover:text-cyan-400 transition-colors">The Matrix</a>
          <a href="#nodes" className="hover:text-cyan-400 transition-colors">Node Registry</a>
          <a href="#protocols" className="hover:text-cyan-400 transition-colors">Protocols</a>
          <button onClick={() => navigate('/login')} className="px-6 py-2 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 transition-all font-bold">
            Initialize Access
          </button>
        </nav>
      </header>

      <main className="relative z-10 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Hero Text */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-[10px] font-mono uppercase tracking-[0.2em] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                v4.0 Immersive Core Active
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
                ENGINEER <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">THE FUTURE</span> <br />
                OF THE WEB.
              </h1>
              <p className="text-slate-500 text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-medium">
                The high-performance developer sandbox. Discover, build, and deploy hyper-optimized UI nodes in a unified matrix.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => navigate('/login')}
                  className="px-10 py-5 bg-white text-black font-black uppercase tracking-widest rounded-2xl hover:bg-cyan-500 transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)] flex items-center gap-3"
                >
                  Enter the Verse <ChevronRight className="w-5 h-5" />
                </button>
                <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all">
                  Documentation
                </button>
              </div>

              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050505] bg-slate-800 flex items-center justify-center overflow-hidden">
                       <img src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${i+10}`} alt="User" />
                     </div>
                  ))}
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-slate-500">
                  <span className="text-white">12,402+</span> Engine Instances Synced
                </div>
              </div>
            </motion.div>

            {/* Visual Teaser */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-[80px] -z-10"></div>
              <div className="bg-black/60 backdrop-blur-3xl border border-white/10 rounded-[40px] p-2 shadow-2xl overflow-hidden aspect-[4/3] flex flex-col">
                <div className="h-10 border-b border-white/5 flex items-center px-4 justify-between bg-black/40">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/30"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/30"></div>
                  </div>
                  <div className="text-[9px] font-mono text-cyan-500/50 uppercase tracking-widest">sandbox://matrix-view</div>
                  <div className="w-10"></div>
                </div>
                <div className="flex-1 p-8 grid grid-cols-2 gap-6 opacity-30">
                  <div className="h-full bg-white/5 rounded-3xl border border-white/5 animate-pulse"></div>
                  <div className="flex flex-col gap-6">
                    <div className="h-1/3 bg-white/5 rounded-3xl border border-white/5 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="h-2/3 bg-white/5 rounded-3xl border border-white/5 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
                <div className="h-16 border-t border-white/5 bg-black/40 px-6 flex items-center justify-between">
                   <div className="flex gap-4">
                     <div className="w-8 h-8 rounded bg-cyan-500/20 border border-cyan-500/30"></div>
                     <div className="w-8 h-8 rounded bg-purple-500/20 border border-purple-500/30"></div>
                     <div className="w-8 h-8 rounded bg-blue-500/20 border border-blue-500/30"></div>
                   </div>
                   <div className="w-32 h-2 bg-white/5 rounded"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Stats Section */}
      <section className="border-y border-white/5 bg-black/40 py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
           {[
             { label: 'Uptime', val: '99.99%', color: 'text-cyan-400' },
             { label: 'Nodes Indexed', val: '4.2M+', color: 'text-white' },
             { label: 'Sync Latency', val: '<2ms', color: 'text-purple-400' },
             { label: 'Verified Devs', val: '1.2M', color: 'text-white' }
           ].map((stat, i) => (
             <div key={i} className="flex flex-col gap-1">
               <span className={`text-3xl font-black tracking-tighter ${stat.color}`}>{stat.val}</span>
               <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{stat.label}</span>
             </div>
           ))}
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
           <FeatureCard 
            icon={Layout}
            title="Modular Matrix"
            description="Every component is built for scale and fully modular, supporting HTML, CSS, JS, and Tailwind V4."
          />
          <FeatureCard 
            icon={Code2}
            title="Engine Preview"
            description="View instant updates in a secure isolated iframe environment with near-zero latency protocols."
          />
          <FeatureCard 
            icon={ShieldCheck}
            title="Identity Cipher"
            description="Secure cross-sync infrastructure powered by Firebase Enterprise with instant guest accessibility."
          />
        </div>
      </section>

      {/* Performance Footer */}
      <footer className="h-10 bg-[#080808] border-t border-white/5 px-8 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-slate-500">
         <div className="flex gap-8">
            <span>&copy; 2024 BJU-VERSE SYSTEM</span>
            <span className="text-cyan-500">STATUS: REPOSITORY NOMINAL</span>
         </div>
         <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Security Cipher</span>
            <span className="hover:text-white cursor-pointer transition-colors">Access Logs</span>
         </div>
      </footer>
    </div>
  );
}

const FeatureCard = ({ icon: Icon, title, description }: any) => (
  <div className="p-10 rounded-[40px] bg-white/5 border border-white/5 hover:border-cyan-500/20 transition-all hover:bg-white/[0.07] group">
    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/5 group-hover:bg-cyan-600 group-hover:text-black transition-all">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">{title}</h3>
    <p className="text-slate-500 leading-relaxed font-medium">{description}</p>
  </div>
);
