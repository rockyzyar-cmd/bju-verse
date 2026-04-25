import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Zap } from 'lucide-react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ComponentDetail from './pages/ComponentDetail';
import Landing from './pages/Landing';
import Settings from './pages/Settings';

import ErrorBoundary from './components/ErrorBoundary';

import { AnimatePresence, motion } from 'motion/react';
import { useLocation } from 'react-router-dom';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-slate-300 font-sans">
      <div className="relative">
        <div className="w-20 h-20 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.3)] animate-pulse">
          <Zap className="w-10 h-10 text-white fill-white" />
        </div>
        <div className="absolute inset-0 rounded-3xl border-2 border-cyan-500/20 animate-ping"></div>
      </div>
      <div className="mt-8 flex flex-col items-center gap-2">
        <div className="text-xl font-black tracking-tighter text-white uppercase italic">BJU-VERSE</div>
        <div className="flex items-center gap-3 text-[9px] font-mono text-cyan-500/60 uppercase tracking-widest">
          Initializing Engine...
        </div>
      </div>
    </div>
  );
  
  if (!user) return <Navigate to="/login" />;
  
  return <>{children}</>;
};

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <motion.div 
                key="dashboard"
                initial={{ opacity: 0, x: -10 }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="h-full w-full overflow-hidden flex flex-col"
              >
                <Dashboard />
              </motion.div>
            </ProtectedRoute>
          } />
          <Route path="/dashboard/:category" element={
            <ProtectedRoute>
              <motion.div 
                key={location.pathname}
                initial={{ opacity: 0, scale: 0.98 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="h-full w-full overflow-hidden flex flex-col"
              >
                <Dashboard />
              </motion.div>
            </ProtectedRoute>
          } />
          <Route path="/component/:id" element={
            <ProtectedRoute>
              <motion.div 
                key={location.pathname}
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="h-full w-full overflow-hidden flex flex-col"
              >
                <ComponentDetail />
              </motion.div>
            </ProtectedRoute>
          } />
          <Route path="/settings" element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          } />
          <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ErrorBoundary>
        <Router>
          <AnimatedRoutes />
        </Router>
      </ErrorBoundary>
    </AuthProvider>
  );
}
