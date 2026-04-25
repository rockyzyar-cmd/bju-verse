import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, 
  Menu,
  ChevronRight, 
  Box, 
  Layout, 
  Type, 
  MousePointer2, 
  Layers, 
  Image as ImageIcon, 
  Heart, 
  Upload, 
  Download,
  Zap,
  Frame,
  Component,
  Ghost,
  ShieldCheck,
  ChevronLeft,
  Check,
  Terminal,
  Instagram,
  Cpu,
  Monitor,
  Activity,
  Sparkles,
  Command,
  Search,
  Grid,
  Sun,
  Moon,
  LogOut
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { allComponents } from '../components-data';
import { VirtuosoGrid } from 'react-virtuoso';
import { Category } from '../types';

import ComponentGridItem from '../components/dashboard/ComponentGridItem';
import SearchFilterBar from '../components/dashboard/SearchFilterBar';
import CategoryQuickBar from '../components/dashboard/CategoryQuickBar';
import PerformanceOverlay from '../components/dashboard/PerformanceOverlay';
import EmptyState from '../components/dashboard/EmptyState';
import { renderQueue } from '../lib/renderQueue';

const sidebarItems: { name: Category; icon: any }[] = [
  { name: 'Buttons', icon: MousePointer2 },
  { name: 'Forms', icon: Layout },
  { name: 'Inputs', icon: Type },
  { name: 'Sliders', icon: Layers },
  { name: 'Icons', icon: Component },
  { name: 'Social UI', icon: Zap },
  { name: 'Backgrounds', icon: ImageIcon },
  { name: 'Text', icon: Type },
  { name: 'Cards', icon: Box },
  { name: 'Animations', icon: Frame },
  { name: 'Hover Effects', icon: Frame },
  { name: 'Loaders', icon: Ghost },
  { name: 'Favorites', icon: Heart },
  { name: 'Saved', icon: Download },
  { name: 'Uploads', icon: Upload },
];

// Global state to persist scroll position across route changes
const getPersistedScroll = (category: string) => {
  const saved = sessionStorage.getItem(`v_scroll_idx_${category}`);
  return saved ? parseInt(saved, 10) : 0;
};

const setPersistedScroll = (category: string, index: number) => {
  sessionStorage.setItem(`v_scroll_idx_${category}`, index.toString());
};

const getPersistedSearch = (category: string) => {
  return sessionStorage.getItem(`v_search_${category}`) || '';
};

const setPersistedSearch = (category: string, query: string) => {
  sessionStorage.setItem(`v_search_${category}`, query);
};

export default function Dashboard() {
  const { profile, logout, updateProfile } = useAuth();
  const { category: currentCategory = 'Buttons' } = useParams<{ category: string }>();
  const [searchQuery, setSearchQuery] = useState(() => getPersistedSearch(currentCategory));
  const [deferredSearchQuery, setDeferredSearchQuery] = useState(searchQuery);
  const [isSearching, startTransition] = React.useTransition();
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const navigate = useNavigate();

  const virtuosoRef = useRef<any>(null);
  const isFirstMount = useRef(true);

  // High-frequency render protection
  useEffect(() => {
    return () => {
      renderQueue.cancelAll();
    };
  }, [currentCategory]);

  // Sync search query when category changes
  useEffect(() => {
    setSearchQuery(getPersistedSearch(currentCategory));
  }, [currentCategory]);

  // Debounced search using concurrent startTransition to keep UI ultra-responsive
  React.useEffect(() => {
    setPersistedSearch(currentCategory, searchQuery);
    const timer = setTimeout(() => {
      startTransition(() => {
        setDeferredSearchQuery(searchQuery);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, [searchQuery, currentCategory]);

  // High-performance search index
  const indexedComponents = useMemo(() => {
    return allComponents.map(c => ({
      ...c,
      _searchKey: `${c.name} ${c.tags.join(' ')} ${c.category} ${c.authorName}`.toLowerCase()
    }));
  }, []);

  const filteredComponents = useMemo(() => {
    const q = deferredSearchQuery.toLowerCase().trim();
    
    // Optimized set checks
    const profileData = profile;
    const favs = new Set(profileData?.favoritesIds || []);
    const saved = new Set(profileData?.savedIds || []);
    const userId = profileData?.uid;
    const isFavorites = currentCategory === 'Favorites';
    const isSaved = currentCategory === 'Saved';
    const isUploads = currentCategory === 'Uploads';

    // Fast path: No search query
    if (!q) {
      if (isFavorites) return indexedComponents.filter(c => favs.has(c.id));
      if (isSaved) return indexedComponents.filter(c => saved.has(c.id));
      if (isUploads) return indexedComponents.filter(c => c.authorId === userId);
      
      return indexedComponents.filter(c => c.category === currentCategory);
    }

    const results = [];
    const len = indexedComponents.length;
    
    for (let i = 0; i < len; i++) {
      const c = indexedComponents[i];
      
      // Cheaper categorical filtering
      const matchCategory = isFavorites ? favs.has(c.id) :
                           isSaved ? saved.has(c.id) :
                           isUploads ? (c.authorId === userId) :
                           c.category === currentCategory;
      
      if (!matchCategory) continue;

      if (c._searchKey.indexOf(q) !== -1) {
         results.push(c);
      }
    }

    // Faster sort using Collator
    const collator = new Intl.Collator(undefined, { sensitivity: 'base', usage: 'sort' });
    return results.sort((a, b) => {
      const aName = a.name.toLowerCase();
      const bName = b.name.toLowerCase();
      const aStart = aName.startsWith(q);
      const bStart = bName.startsWith(q);
      if (aStart && !bStart) return -1;
      if (!aStart && bStart) return 1;
      return collator.compare(aName, bName);
    });
  }, [deferredSearchQuery, currentCategory, profile, indexedComponents]);

  const [isDeployModalOpen, setIsDeployModalOpen] = useState(false);
  const [isPassPromptOpen, setIsPassPromptOpen] = useState(false);
  const [adminPass, setAdminPass] = useState('');
  const [deployStep, setDeployStep] = useState(1);
  const [newComponent, setNewComponent] = useState({
    name: '',
    category: 'Buttons' as Category,
    tags: '',
    html: '',
    css: '',
    js: ''
  });

  const handleDeploy = () => {
    setIsPassPromptOpen(true);
  };

  const handleVerifyPass = () => {
    if (adminPass === 'BUNNY@96.96') {
      setIsPassPromptOpen(false);
      setIsDeployModalOpen(true);
      setAdminPass('');
    } else {
      alert('ACCESS DENIED: INVALID CIPHER.');
      setAdminPass('');
    }
  };

  const handleSubmitDeployment = async () => {
    alert('COMPONENT SUCCESSFULLY DEPLOYED TO THE MATRIX. SYNCING NODES...');
    setIsDeployModalOpen(false);
    setDeployStep(1);
    setNewComponent({
      name: '',
      category: 'Buttons' as Category,
      tags: '',
      html: '',
      css: '',
      js: ''
    });
  };

  const handleToggleFavorite = async (e: React.MouseEvent, componentId: string) => {
    e.stopPropagation();
    if (!profile) return;
    
    const isFav = profile.favoritesIds?.includes(componentId);
    const newFavs = isFav 
      ? profile.favoritesIds?.filter(id => id !== componentId) 
      : [...(profile.favoritesIds || []), componentId];
    
    await updateProfile({ favoritesIds: newFavs });
  };

  const isAdmin = profile?.isAdmin || profile?.email === 'rockyzyar@gmail.com' || profile?.email === 'shauryabis672@gmail.com';

  return (
    <div className={`flex flex-col min-h-screen ${theme === 'dark' ? 'bg-[#050505] text-slate-300' : 'bg-gray-50 text-black'} font-sans transition-colors duration-300 overflow-hidden relative`}>
      {/* Admin Pass Prompt */}
      <AnimatePresence>
        {isPassPromptOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-6 backdrop-blur-3xl bg-black/90"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-[#0a0a0a] border border-cyan-500/30 p-10 rounded-[32px] w-full max-w-md shadow-[0_0_50px_rgba(6,182,212,0.2)] text-center"
            >
              <Terminal className="w-12 h-12 text-cyan-500 mx-auto mb-6" />
              <h2 className="text-xl font-black text-white mb-2 uppercase italic tracking-tighter">Enter Admin Cipher</h2>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-8 font-mono">Restricted access protocol active.</p>
              
              <input 
                type="password"
                value={adminPass}
                onChange={e => setAdminPass(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleVerifyPass()}
                autoFocus
                placeholder="PROX-CIPHER..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-center text-xl font-mono text-cyan-400 tracking-[0.5em] focus:outline-none focus:border-cyan-500 transition-all mb-6"
              />

              <div className="flex gap-4">
                <button 
                  onClick={() => setIsPassPromptOpen(false)}
                  className="flex-1 px-6 py-3 rounded-xl border border-white/10 text-slate-400 text-[10px] font-bold uppercase hover:bg-white/5 transition-all"
                >
                  Abort
                </button>
                <button 
                  onClick={handleVerifyPass}
                  className="flex-1 px-6 py-3 rounded-xl bg-cyan-600 text-black text-[10px] font-black uppercase tracking-widest hover:bg-cyan-500 transition-all"
                >
                  Verify
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Deployment Modal */}
      <AnimatePresence>
        {isDeployModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-2xl bg-black/80"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-[#111] border border-cyan-500/30 w-full max-w-4xl rounded-[40px] overflow-hidden shadow-[0_0_100px_rgba(6,182,212,0.1)]"
            >
              <div className="flex h-[600px]">
                {/* Modal Sidebar */}
                <div className="w-64 bg-black/40 border-r border-white/5 p-8 flex flex-col justify-between shrink-0">
                  <div>
                    <div className="w-12 h-12 bg-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                      <Zap className="w-6 h-6 text-black fill-black" />
                    </div>
                    <h2 className="text-xl font-black text-white leading-tight mb-2">DEPLOY NEW NODE</h2>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Matrix Core / v4.2</p>
                    
                    <div className="mt-12 space-y-4">
                      {[1, 2, 3].map(step => (
                        <div key={step} className="flex items-center gap-3">
                          <div className={`w-6 h-6 rounded-full border text-[10px] font-bold flex items-center justify-center transition-all ${deployStep >= step ? 'bg-cyan-500 border-cyan-500 text-black' : 'border-white/10 text-slate-600'}`}>
                            {step}
                          </div>
                          <span className={`text-[10px] font-bold uppercase tracking-widest ${deployStep === step ? 'text-white' : 'text-slate-600'}`}>
                            {step === 1 ? 'Metadata' : step === 2 ? 'Structure' : 'Finish'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button onClick={() => setIsDeployModalOpen(false)} className="text-[10px] text-slate-500 hover:text-white uppercase font-bold flex items-center gap-2 transition-colors">
                    <ChevronLeft className="w-3 h-3" /> Abort Mission
                  </button>
                </div>

                {/* Modal Content */}
                <div className="flex-1 p-12 flex flex-col overflow-y-auto">
                  {deployStep === 1 ? (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase">1. Protocol Metadata</h3>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Node Name</label>
                          <input 
                            value={newComponent.name}
                            onChange={e => setNewComponent({...newComponent, name: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-all text-xs text-white placeholder:text-slate-700" 
                            placeholder="e.g. Cyber Glitch Button" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Protocol Group</label>
                          <select 
                            value={newComponent.category}
                            onChange={e => setNewComponent({...newComponent, category: e.target.value as Category})}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-all text-xs text-white appearance-none"
                          >
                            <option value="Buttons">Buttons</option>
                            <option value="Forms">Forms</option>
                            <option value="Inputs">Inputs</option>
                            <option value="Sliders">Sliders</option>
                            <option value="Icons">Icons</option>
                            <option value="Social UI">Social UI</option>
                            <option value="Backgrounds">Backgrounds</option>
                            <option value="Text">Text</option>
                            <option value="Cards">Cards</option>
                            <option value="Animations">Animations</option>
                            <option value="Hover Effects">Hover Effects</option>
                            <option value="Loaders">Loaders</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Tags (Matrix Separated)</label>
                        <input 
                          value={newComponent.tags}
                          onChange={e => setNewComponent({...newComponent, tags: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-all text-xs text-white placeholder:text-slate-700" 
                          placeholder="modern, dark, neon..." 
                        />
                      </div>
                    </div>
                  ) : deployStep === 2 ? (
                    <div className="space-y-6 flex-1 flex flex-col min-h-0">
                      <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase">2. Matrix Architecture</h3>
                      <div className="grid grid-cols-3 gap-4 flex-1 min-h-0">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center justify-between">
                            <label className="text-[10px] font-bold text-slate-500 uppercase">HTML</label>
                            <span className="text-[9px] text-cyan-500/50 font-mono">index.segment</span>
                          </div>
                          <textarea 
                            value={newComponent.html}
                            onChange={e => setNewComponent({...newComponent, html: e.target.value})}
                            className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-cyan-500 text-[11px] font-mono text-cyan-400 resize-none" 
                            placeholder="<!-- HTML NODE -->"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center justify-between">
                            <label className="text-[10px] font-bold text-slate-500 uppercase">CSS</label>
                            <span className="text-[9px] text-purple-500/50 font-mono">style.layer</span>
                          </div>
                          <textarea 
                            value={newComponent.css}
                            onChange={e => setNewComponent({...newComponent, css: e.target.value})}
                            className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-cyan-500 text-[11px] font-mono text-purple-400 resize-none" 
                            placeholder="/* STYLING PROTOCOL */"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center justify-between">
                            <label className="text-[10px] font-bold text-slate-500 uppercase">JS</label>
                            <span className="text-[9px] text-yellow-500/50 font-mono">logic.core</span>
                          </div>
                          <textarea 
                            value={newComponent.js}
                            onChange={e => setNewComponent({...newComponent, js: e.target.value})}
                            className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-cyan-500 text-[11px] font-mono text-yellow-400 resize-none" 
                            placeholder="// EXECUTION SCRIPT"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-center">
                      <div className="w-24 h-24 bg-green-500/20 border border-green-500/50 rounded-full flex items-center justify-center mb-8 relative">
                         <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-10"></div>
                         <Check className="w-12 h-12 text-green-500" />
                      </div>
                      <h3 className="text-3xl font-black text-white italic mb-4 tracking-tighter uppercase">OPTIMIZATION COMPLETE</h3>
                      <p className="text-slate-400 text-sm max-w-md mx-auto mb-10 leading-relaxed">
                        The component <span className="text-white font-bold">"{newComponent.name || 'UNNAMED_NODE'}"</span> has been verified for the BJU-VERSE enterprise grid. Initiating sync will propagate this node globally.
                      </p>
                      <div className="bg-black/40 border border-white/5 p-8 rounded-3xl w-full max-w-sm text-left shadow-2xl">
                        <div className="flex justify-between mb-4 border-b border-white/5 pb-2">
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Identity</span>
                          <span className="text-[10px] font-bold text-white uppercase">{newComponent.name || 'Protocol_NULL'}</span>
                        </div>
                        <div className="flex justify-between mb-4 border-b border-white/5 pb-2">
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Mapping</span>
                          <span className="text-[10px] font-bold text-cyan-500 uppercase">{newComponent.category}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Integrity</span>
                          <span className="px-2 py-0.5 bg-green-500/10 text-green-500 text-[9px] rounded font-black">SECURE</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-8 flex justify-between items-center bg-black/20 p-4 rounded-2xl border border-white/5 shrink-0">
                    <span className="text-[10px] font-mono text-slate-600 uppercase">Encryption: AES-256 Active</span>
                    <div className="flex gap-3">
                      {deployStep > 1 && (
                        <button 
                          onClick={() => setDeployStep(s => s - 1)}
                          className="px-6 py-2 rounded-xl border border-white/10 text-slate-400 hover:text-white transition-colors text-[10px] font-bold uppercase"
                        >
                          Legacy Step
                        </button>
                      )}
                      <button 
                        onClick={() => {
                          if (deployStep < 3) setDeployStep(s => s + 1);
                          else handleSubmitDeployment();
                        }}
                        className="px-8 py-2 rounded-xl bg-cyan-600 text-black text-[10px] font-black uppercase tracking-widest hover:bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
                      >
                        {deployStep === 3 ? 'Initiate Sync' : 'Proceed System'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Topbar */}
      <header className={`h-14 shrink-0 flex items-center justify-between px-6 backdrop-blur-md border-b z-50 ${theme === 'dark' ? 'border-white/10 bg-black/40' : 'border-black/5 bg-white/80'}`}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <Zap className="w-5 h-5 text-white fill-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-bold tracking-tight text-sm">BJU-VERSE</span>
            <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">Enterprise Engine</span>
          </div>
        </div>

        <div className="flex-1 max-w-xl px-12">
          <div className="relative group">
            <Search className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 transition-colors ${theme === 'dark' ? 'text-slate-500 group-focus-within:text-cyan-400' : 'text-slate-400 group-focus-within:text-blue-600'}`} />
            <input 
              type="text" 
              placeholder="Search 200,000+ UI components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full ${theme === 'dark' ? 'bg-white/5 border-white/10 focus:border-cyan-500/50 text-white' : 'bg-black/5 border-black/5 focus:border-blue-500/30 text-black'} border rounded-full py-2 px-10 text-[11px] focus:outline-none transition-all shadow-inner tracking-tight font-medium`}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-500 hover:text-white uppercase px-1.5 py-0.5"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className={`hidden sm:flex items-center gap-2 px-3 py-1 border rounded text-[10px] font-mono animate-pulse ${theme === 'dark' ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' : 'bg-blue-600/10 border-blue-600/30 text-blue-600'}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${theme === 'dark' ? 'bg-cyan-400' : 'bg-blue-600'}`}></span> ENGINE: 144FPS
          </div>
          <button 
            onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
            className={`p-2 rounded-lg border ${theme === 'dark' ? 'border-white/10 bg-white/5 hover:bg-white/10' : 'border-black/5 bg-black/5 hover:bg-black/10'} transition-all`}
          >
            {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
          <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/20 overflow-hidden cursor-pointer" onClick={() => navigate('/settings')}>
            <div className="w-full h-full bg-gradient-to-b from-slate-400 to-slate-600 flex items-center justify-center text-[10px] font-bold text-white uppercase">
              {profile?.username?.[0] || 'U'}
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className={`w-56 h-full shrink-0 border-r flex flex-col ${theme === 'dark' ? 'border-white/5 bg-black/20' : 'border-black/5 bg-white'}`}>
          <div className="p-4 flex flex-col gap-0.5 overflow-y-auto">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 px-2">Categories</p>
            {sidebarItems.map((item) => {
              if (item.name === 'Uploads' && !isAdmin) return null;
              if (item.name === 'Favorites' || item.name === 'Saved' || item.name === 'Uploads') return null; // These go in personal
              
              const isActive = currentCategory === item.name;
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => navigate(`/dashboard/${item.name}`)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs transition-all active:scale-95 ${
                    isActive 
                      ? (theme === 'dark' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-blue-600/10 text-blue-700 border border-blue-500/20') 
                      : (theme === 'dark' ? 'text-slate-400 hover:bg-white/5 border border-transparent' : 'text-gray-500 hover:bg-black/5 border border-transparent')
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? (theme === 'dark' ? 'text-cyan-400' : 'text-blue-600') : 'text-slate-600'}`} />
                  <span className="font-medium tracking-tight">{item.name}</span>
                  <span className={`ml-auto text-[9px] font-bold opacity-30 ${isActive ? 'opacity-50' : ''}`}>
                    {allComponents.filter(c => c.category === item.name).length}
                  </span>
                </button>
              );
            })}
            
            <div className="my-4 border-t border-white/5"></div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 px-2">Personal</p>
            <SidebarAction theme={theme} active={currentCategory === 'Favorites'} onClick={() => navigate('/dashboard/Favorites')} label="Favorites" icon={Heart} />
            <SidebarAction theme={theme} active={currentCategory === 'Saved'} onClick={() => navigate('/dashboard/Saved')} label="Saved" icon={Download} />
            
            {isAdmin && (
              <div className="mt-4 p-2 bg-red-500/5 border border-red-500/10 rounded-lg group cursor-pointer" onClick={() => navigate('/dashboard/Uploads')}>
                <p className="text-[9px] text-red-500/60 uppercase mb-2">Admin Access</p>
                <div className="flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                   <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
                   <span className="text-[11px] font-mono text-slate-400">Uploads</span>
                </div>
                <p className="text-[8px] mt-1 text-slate-600 italic">shaurya@gmail.com only</p>
              </div>
            )}
          </div>

          <div className="mt-auto p-4">
            <div className={`p-3 rounded-xl border ${theme === 'dark' ? 'bg-gradient-to-r from-cyan-900/40 to-purple-900/40 border-white/10' : 'bg-blue-50 border-blue-100'}`}>
              <p className={`text-[10px] font-bold ${theme === 'dark' ? 'text-white' : 'text-blue-900'}`}>Go Enterprise</p>
              <p className={`text-[9px] mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-blue-700'}`}>Unlock 200k+ assets & private storage.</p>
            </div>
            <button 
              onClick={logout}
              className="w-full mt-4 flex items-center justify-center gap-2 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-red-500 hover:bg-red-500/5 transition-all"
            >
              <LogOut className="w-3 h-3" /> Terminate Session
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col bg-[#080808] relative min-h-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-50"></div>
      
      {/* Dynamic Background decor for ultra-smooth depth */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-cyan-500/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full" />
      </div>

      <header className="p-8 pb-0 shrink-0 relative z-10">
        <PerformanceOverlay />
        <div className="mb-0">
          <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-4">
             <Activity className="h-3 w-3 text-cyan-500" />
             <span className="text-cyan-500">core_engine</span>
             <span className="opacity-30">/</span>
             <span>ui_registry</span>
             <span className="opacity-30">/</span>
             <span className="text-white">{currentCategory}</span>
          </div>

          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 mb-12">
            <div>
              <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter text-white mb-4">
                EXPLORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">PREMIUM</span> NODES
              </h2>
              <p className="text-zinc-500 text-lg max-w-2xl font-medium leading-relaxed">
                Experience high-frequency UI components powered by the BJU-VERSE rendering core. 
                Optimized for zero-lag interaction and real-time GPU scheduling.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end mr-4">
                 <span className="text-[10px] font-black text-cyan-500 uppercase tracking-widest">Active Sessions</span>
                 <span className="text-2xl font-black text-white">1,248</span>
              </div>
              <button 
                onClick={handleDeploy}
                className="group relative flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl text-[13px] font-black uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.1)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Plus className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Deploy New Component</span>
              </button>
            </div>
          </div>

          <SearchFilterBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} theme={theme} />
          
          <div className="mt-8">
            <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-4">System Categories</p>
            <div className="flex items-center gap-4">
               <CategoryQuickBar currentCategory={currentCategory} setCurrentCategory={(cat) => navigate(`/dashboard/${cat}`)} theme={theme} />
            </div>
          </div>
        </div>
      </header>

      <section className="flex-1 px-8 pb-8 overflow-hidden relative z-10">
        <AnimatePresence mode="wait">
          {filteredComponents.length === 0 ? (
            <EmptyState searchQuery={searchQuery} />
          ) : (
            <motion.div
              key={currentCategory + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full w-full"
            >
                <VirtuosoGrid
                  ref={virtuosoRef}
                  key={currentCategory} // Only remount on category change
                  useWindowScroll={false}
                  initialTopIndex={getPersistedScroll(currentCategory)}
                  components={{
                    List: React.forwardRef(({ ...props }: any, ref) => (
                      <div ref={ref} {...props} className={props.className} />
                    )),
                    Item: ({ ...props }: any) => (
                      <div {...props} />
                    )
                  }}
                  rangeChanged={(range) => {
                    // Optimized: only save state periodically
                  }}
                  onScroll={(e: any) => {
                    // Optimized: minimal interaction during scroll
                  }}
                  overscan={100}
                  increaseViewportBy={200}
                  scrollSeekConfiguration={{
                    enter: (velocity) => Math.abs(velocity) > 2000,
                    exit: (velocity) => Math.abs(velocity) < 100
                  }}
                  style={{ height: '100%', width: '100%', outline: 'none' }}
                  totalCount={filteredComponents.length}
                  listClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 pt-4 pb-64"
                  itemContent={(index) => {
                    const comp = filteredComponents[index];
                    return (
                      <ComponentGridItem 
                        key={comp.id}
                        component={comp} 
                        theme={theme}
                        isFavorite={profile?.favoritesIds?.includes(comp.id)}
                        onToggleFavorite={(e) => handleToggleFavorite(e, comp.id)}
                        onViewDetail={() => navigate(`/component/${comp.id}`)}
                      />
                    );
                  }}
                  scrollSeekPlaceholder={(index) => (
                    <div className="aspect-[4/3] rounded-3xl bg-white/5 animate-shimmer border border-white/5" />
                  )}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </section>
        </main>
      </div>

      {/* Performance Footer */}
      <footer className={`h-6 shrink-0 px-6 flex items-center justify-between text-[10px] font-bold uppercase transition-colors ${theme === 'dark' ? 'bg-cyan-600 text-black' : 'bg-blue-700 text-white'}`}>
        <div className="flex gap-6">
           <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-current animate-ping"></span> Status: High Priority Optimized</span>
           <span className="opacity-80">Nodes: 214,082 Active</span>
           <span className="opacity-80">Execution: Worker-Isolated</span>
        </div>
        <div className="flex gap-4">
           <span>BJU-VERSE CLOUD SYNC: ACTIVE</span>
           <span className="font-mono">T: {new Date().toLocaleTimeString()}</span>
        </div>
      </footer>
    </div>
  );
}

const SidebarAction = ({ theme, active, onClick, label, icon: Icon }: any) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs transition-all ${
      active 
        ? (theme === 'dark' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' : 'bg-purple-500/10 text-purple-700 border border-purple-500/20') 
        : (theme === 'dark' ? 'text-slate-400 hover:bg-white/5 border border-transparent' : 'text-gray-500 hover:bg-black/5 border border-transparent')
    }`}
  >
    <Icon className={`w-3.5 h-3.5 ${active ? 'text-purple-400' : 'text-slate-600'}`} />
    <span className="font-medium tracking-tight">{label}</span>
  </button>
);

// Removed old ComponentCard implementation for modularity
