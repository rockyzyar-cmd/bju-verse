// @ts-nocheck
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center p-8 font-sans">
          <div className="bg-[#0a0a0a] border border-red-500/30 p-10 rounded-[32px] w-full max-w-lg shadow-[0_0_50px_rgba(239,68,68,0.1)] text-center">
            <div className="w-16 h-16 bg-red-500/20 border border-red-500/50 rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-2xl text-red-500 font-black">!</span>
            </div>
            <h2 className="text-2xl font-black text-white mb-4 uppercase italic tracking-tighter">System Failure Detected</h2>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed font-mono">
              The matrix has encountered a critical rendering error. Access to the requested node has been suspended.
            </p>
            <div className="bg-black/40 border border-white/5 p-4 rounded-xl text-left mb-8 overflow-auto max-h-40">
              <code className="text-xs text-red-400 font-mono italic">
                {this.state.error?.message}
              </code>
            </div>
            <button 
              onClick={() => window.location.href = '/dashboard'}
              className="w-full px-8 py-3 rounded-xl bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-red-500 transition-all shadow-[0_4px_15px_rgba(255,255,255,0.1)]"
            >
              Return to Safe Zone
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
