import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ChevronLeft, 
  User, 
  Moon, 
  Sun, 
  Zap, 
  ShieldCheck, 
  Trash2, 
  Save,
  Check,
  Terminal
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Settings() {
  const { profile, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState(profile?.username || '');
  const [theme, setTheme] = useState(profile?.theme || 'dark');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await updateProfile({ username, theme });
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className={`min-h-screen ${profile?.theme === 'dark' ? 'bg-[#050505] text-slate-300' : 'bg-gray-50 text-black'} font-sans`}>
      <header className="h-14 flex items-center justify-between px-6 border-b border-white/10 backdrop-blur-md bg-black/40">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/dashboard')} className="p-1 hover:bg-white/5 rounded transition-colors group">
            <ChevronLeft className="w-5 h-5 text-slate-500 group-hover:text-cyan-400" />
          </button>
          <span className="text-white font-bold tracking-tight text-xs uppercase">Engine Core / Settings</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-[10px] font-mono text-cyan-400">
          <ShieldCheck className="w-3 h-3" /> SECURE SESSION
        </div>
      </header>

      <main className="max-w-2xl mx-auto py-12 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/20 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-600"></div>
          
          <div className="flex items-center gap-4 mb-10">
            <div className="w-16 h-16 rounded-2xl bg-slate-800 border-2 border-cyan-500/30 flex items-center justify-center text-2xl font-black text-white uppercase overflow-hidden">
               {profile?.username?.[0]}
            </div>
            <div>
              <h1 className="text-2xl font-black text-white">Identity Matrix</h1>
              <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mt-1">UID: {profile?.uid}</p>
            </div>
          </div>

          <form onSubmit={handleSave} className="space-y-8">
            <section>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 ml-1">Alias Mapping</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-3 focus:outline-none focus:border-cyan-500/50 transition-all text-xs text-white font-mono"
                  placeholder="New Alias..."
                />
              </div>
            </section>

            <section>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 ml-1">Preferred Core Theme</label>
              <div className="grid grid-cols-2 gap-4">
                <button 
                  type="button"
                  onClick={() => setTheme('dark')}
                  className={`flex items-center justify-center gap-3 p-4 rounded-xl border transition-all ${theme === 'dark' ? 'bg-cyan-500/10 border-cyan-500/50 text-cyan-400' : 'bg-white/5 border-white/10 text-slate-600 opacity-50 hover:opacity-100'}`}
                >
                  <Moon className="w-4 h-4" /> <span className="text-[10px] font-bold uppercase">Dark Core</span>
                </button>
                <button 
                  type="button"
                  onClick={() => setTheme('light')}
                  className={`flex items-center justify-center gap-3 p-4 rounded-xl border transition-all ${theme === 'light' ? 'bg-blue-500/10 border-blue-500/50 text-blue-600' : 'bg-white/5 border-white/10 text-slate-600 opacity-50 hover:opacity-100'}`}
                >
                  <Sun className="w-4 h-4" /> <span className="text-[10px] font-bold uppercase">Light Core</span>
                </button>
              </div>
            </section>

            <div className="pt-4 flex gap-4">
              <button 
                type="submit"
                disabled={saving}
                className="flex-1 bg-white text-black font-black uppercase tracking-widest py-3.5 rounded-xl transition-all hover:bg-cyan-500 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 shadow-xl"
              >
                {saving ? <Terminal className="w-4 h-4 animate-spin" /> : (saved ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />)}
                {saved ? 'Synchronized' : 'Commit Changes'}
              </button>
              <button 
                type="button"
                className="px-6 border border-red-500/20 rounded-xl hover:bg-red-500/10 transition-all text-red-500"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </form>

          <div className="mt-12 p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 flex gap-4 items-start">
             <Zap className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
             <p className="text-[10px] text-slate-400 leading-relaxed uppercase font-mono">
               System note: Changes to core protocols are instant. Your identity node is protected by the RSA-4096 Matrix Cipher.
             </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
