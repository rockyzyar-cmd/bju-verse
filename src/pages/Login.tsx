import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInAnonymously, updateProfile } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'motion/react';
import { LogIn, UserPlus, Zap, Github, Twitter, ShieldCheck } from 'lucide-react';

// Map Firebase error codes to user-friendly messages
const getAuthErrorMessage = (code: string): string => {
  const errorMessages: Record<string, string> = {
    'auth/invalid-email': 'Invalid email address format.',
    'auth/user-disabled': 'This account has been disabled.',
    'auth/user-not-found': 'No account found with this email.',
    'auth/wrong-password': 'Incorrect password.',
    'auth/invalid-credential': 'Invalid email or password.',
    'auth/email-already-in-use': 'An account with this email already exists.',
    'auth/weak-password': 'Password should be at least 6 characters.',
    'auth/network-request-failed': 'Network error. Please check your connection.',
    'auth/too-many-requests': 'Too many attempts. Please try again later.',
    'auth/operation-not-allowed': 'This sign-in method is not enabled.',
  };
  return errorMessages[code] || 'Authentication failed. Please try again.';
};

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();

  // Redirect if already authenticated
  useEffect(() => {
    if (!authLoading && user) {
      navigate('/dashboard', { replace: true });
    }
  }, [user, authLoading, navigate]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      if (isLogin) {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // Verify we got a valid user with token
        if (userCredential.user) {
          const token = await userCredential.user.getIdToken();
          if (token) {
            navigate('/dashboard', { replace: true });
          } else {
            throw new Error('Failed to obtain authentication token');
          }
        }
      } else {
        if (!username.trim()) {
          setError('Username is required for registration.');
          setLoading(false);
          return;
        }
        const res = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(res.user, { displayName: username });
        navigate('/dashboard', { replace: true });
      }
    } catch (err: any) {
      console.error('[v0] Auth error:', err);
      const errorMessage = err.code ? getAuthErrorMessage(err.code) : err.message;
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleGuestLogin = async () => {
    setLoading(true);
    setError('');
    
    try {
      // Create a unique guest email and password
      const guestId = Math.random().toString(36).substring(7);
      const guestEmail = `guest_${guestId}@bjuverse.engine`;
      const guestPass = 'Guest@Matrix99';
      
      try {
        const res = await createUserWithEmailAndPassword(auth, guestEmail, guestPass);
        await updateProfile(res.user, { displayName: `Guest_${guestId}` });
        
        // Verify token before navigating
        const token = await res.user.getIdToken();
        if (token) {
          navigate('/dashboard', { replace: true });
        } else {
          throw new Error('Failed to create guest session');
        }
      } catch (createError: any) {
        // If email creation is disabled, try anonymous auth
        if (createError.code === 'auth/operation-not-allowed' || createError.code === 'auth/admin-restricted-operation') {
          const anonResult = await signInAnonymously(auth);
          const token = await anonResult.user.getIdToken();
          if (token) {
            navigate('/dashboard', { replace: true });
          }
        } else {
          throw createError;
        }
      }
    } catch (err: any) {
      console.error('[v0] Guest login error:', err);
      const errorMessage = err.code ? getAuthErrorMessage(err.code) : err.message;
      setError(errorMessage || 'Guest access unavailable. Please register or try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 font-sans text-slate-300 overflow-hidden relative">
      {/* Animated Immersive Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -bottom-24 -right-24 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[150px]" 
        />
        <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-10">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-2xl mb-4 shadow-2xl shadow-cyan-500/20"
          >
            <Zap className="w-8 h-8 text-white fill-white" />
          </motion.div>
          <h1 className="text-4xl font-black tracking-tighter mb-2 text-white">
            BJU-VERSE
          </h1>
          <p className="text-slate-500 text-[10px] font-mono uppercase tracking-[0.3em]">Developer UI Terminal</p>
        </div>

        <div className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-transparent opacity-50"></div>
          
          <div className="flex bg-white/5 p-1 rounded-xl mb-8 border border-white/5">
            <button 
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-widest rounded-lg transition-all ${isLogin ? 'bg-white/10 text-white border border-white/10' : 'text-slate-500 hover:text-white'}`}
            >
              Authorize
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-widest rounded-lg transition-all ${!isLogin ? 'bg-white/10 text-white border border-white/10' : 'text-slate-500 hover:text-white'}`}
            >
              Register
            </button>
          </div>

          <form onSubmit={handleAuth} className="space-y-4">
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 ml-1">Alias / Username</label>
                  <input 
                    type="text" 
                    required={!isLogin}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500/50 transition-all text-xs text-white font-mono"
                    placeholder="shaurya_dev"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 ml-1">Universal ID (Email)</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500/50 transition-all text-xs text-white font-mono"
                placeholder="dev@bjuverse.io"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 ml-1">Private Cipher (Password)</label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500/50 transition-all text-xs text-white font-mono"
                placeholder="••••••••"
              />
            </div>

            {error && <p className="text-red-500 text-[10px] mt-2 px-1 font-mono">{error}</p>}

            <button 
              disabled={loading}
              className="w-full bg-white text-black font-black uppercase tracking-widest py-3.5 rounded-xl transition-all hover:bg-cyan-500 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-xl"
            >
              {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : (isLogin ? <LogIn className="w-4 h-4" /> : <UserPlus className="w-4 h-4" />)}
              {isLogin ? 'Access Engine' : 'Deploy Identity'}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
            <div className="relative flex justify-center text-[9px] uppercase font-bold tracking-widest"><span className="bg-[#050505]/50 px-2 text-slate-600">Cross-Sync Identity</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 py-2.5 rounded-xl transition-all text-[10px] font-bold uppercase tracking-wider text-white">
              <Github className="w-4 h-4" /> GitHub
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 py-2.5 rounded-xl transition-all text-[10px] font-bold uppercase tracking-wider text-white">
              <Twitter className="w-4 h-4" /> Twitter
            </button>
          </div>

          <button 
            onClick={handleGuestLogin}
            className="w-full bg-white/5 border border-white/10 hover:bg-white/10 text-slate-400 py-3 rounded-xl transition-all text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-cyan-500" /> Isolated Guest Access
          </button>
        </div>
        
        <p className="mt-8 text-center text-[10px] text-slate-600 px-8 leading-relaxed font-medium uppercase tracking-tight">
          System protocols observed. Proceeding constitutes agreement to <span className="text-slate-400 hover:text-cyan-400 cursor-pointer">Service Invariants</span> & <span className="text-slate-400 hover:text-cyan-400 cursor-pointer">Privacy Layers</span>.
        </p>
      </motion.div>
    </div>
  );
}

function RefreshCw(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>
  );
}
