import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  Zap, 
  Copy, 
  Download, 
  RefreshCw, 
  Maximize2, 
  Layers, 
  Terminal, 
  Braces, 
  Hash, 
  FileCode2,
  Check,
  Split,
  Eye,
  Settings2,
  Moon,
  Sun,
  Code2,
  Globe,
  X
} from 'lucide-react';
import { ShadowPreview } from '../components/ShadowPreview';
import { LivePreviewEngine } from '../components/LivePreviewEngine';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import 'prismjs/themes/prism-tomorrow.css';
import { getComponentById } from '../components-data';
import { UIComponent, ComponentCode, Variant } from '../types';
import JSZip from 'jszip';

export default function ComponentDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [component, setComponent] = useState<UIComponent | null>(null);
  const [activeVariant, setActiveVariant] = useState<string>('main');
  const [activeTab, setActiveTab] = useState<keyof ComponentCode>('html');
  const [editedCode, setEditedCode] = useState<ComponentCode | null>(null);
  const previewCode = useMemo(() => editedCode, [editedCode]);
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const data = getComponentById(id || '');
    if (data) {
      setComponent(data);
      setEditedCode(data.code);
      setActiveVariant('main');
    } else {
      navigate('/dashboard');
    }
  }, [id, navigate]);

  const handleVariantSwitch = (vId: string) => {
    if (!component) return;
    setActiveVariant(vId);
    
    // Ensure we are setting a fresh object if possible to trigger all observers
    if (vId === 'main') {
      setEditedCode({ ...component.code });
    } else {
      const variant = component.variants.find(v => v.id === vId);
      if (variant) {
        setEditedCode({ ...variant.code });
      }
    }
  };

  const handleCopy = () => {
    if (!editedCode) return;
    navigator.clipboard.writeText(editedCode[activeTab] || '');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = async () => {
    if (!editedCode) return;
    const zip = new JSZip();
    zip.file("index.html", `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${component?.name}</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    ${editedCode.html}
    <script src="script.js"></script>
</body>
</html>`);
    zip.file("style.css", editedCode.css);
    zip.file("script.js", editedCode.js);
    
    const content = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(content);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${component?.name.replace(/\s+/g, '_')}.zip`;
    a.click();
  };

  if (!component || !editedCode) return null;

  return (
    <div className={`flex flex-col h-screen ${theme === 'dark' ? 'bg-[#050505] text-slate-300' : 'bg-gray-50 text-black'} font-sans overflow-hidden`}>
      {/* Header / Topbar */}
      <header className={`h-14 shrink-0 flex items-center justify-between px-6 backdrop-blur-md border-b z-50 ${theme === 'dark' ? 'border-white/10 bg-black/40' : 'border-black/5 bg-white/80'}`}>
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-1 hover:bg-white/5 rounded transition-colors group">
            <ChevronLeft className="w-5 h-5 text-slate-500 group-hover:text-cyan-400" />
          </button>
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <Zap className="w-5 h-5 text-white fill-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-bold tracking-tight text-xs uppercase">{component.name}</span>
            <span className="text-[9px] text-slate-500 font-mono uppercase tracking-widest">Node ID: {component.id}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className={`hidden lg:flex items-center gap-2 px-3 py-1 border rounded text-[10px] font-mono ${theme === 'dark' ? 'bg-green-500/10 border-green-500/30 text-green-400' : 'bg-green-600/10 border-green-600/30 text-green-600'}`}>
            <Globe className="w-3 h-3" /> UNIVERSAL ENGINE: NPM/JS READY
          </div>
          <div className={`flex items-center gap-2 px-3 py-1 border rounded text-[10px] font-mono animate-pulse ${theme === 'dark' ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' : 'bg-blue-600/10 border-blue-600/30 text-blue-600'}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${theme === 'dark' ? 'bg-cyan-400' : 'bg-blue-600'}`}></span> LIVE SYNC: ON (2ms)
          </div>
          <button 
            onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
            className={`p-2 rounded-lg border ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-black/5 bg-black/5'} transition-all`}
          >
            {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
          <button onClick={handleDownload} className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-4 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-widest transition-all">
            Export Node
          </button>
          <button className="bg-cyan-600 hover:bg-cyan-500 text-black px-4 py-1.5 rounded-md text-[10px] font-black uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            Fork Structure
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Main Editor Hub */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 flex overflow-hidden">
            {/* Left: Preview Sandbox */}
            <section className="flex-1 flex flex-col bg-[#0d0d0d] relative overflow-hidden border-r border-white/5">
              <div className="h-10 border-b border-white/5 flex items-center px-4 justify-between bg-black/20">
                <span className="text-[11px] font-mono text-cyan-500">sandbox://preview/{component.id}</span>
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
              </div>
              
              <div className="flex-1 flex items-center justify-center bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:24px_24px] overflow-hidden relative">
                 <div 
                   className="w-full h-full shadow-[0_0_100px_rgba(0,0,0,0.5)] bg-[#0a0a0a] flex items-center justify-center transition-all duration-300 ease-out"
                 >
                   {previewCode ? (
                    <LivePreviewEngine 
                       key={activeVariant + theme}
                       html={previewCode.html}
                       css={previewCode.css}
                       js={previewCode.js}
                       theme={theme}
                       id="main-preview"
                       loading="eager"
                       className="w-full h-full"
                    />
                   ) : (
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-8 h-8 border-2 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin"></div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase">Syncing...</span>
                    </div>
                   )}
                 </div>
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-1 bg-black/60 backdrop-blur border border-white/10 rounded-full shadow-2xl z-20">
                <button 
                  onClick={() => setIsFullscreen(true)}
                  className="px-6 py-2 rounded-full bg-cyan-500 text-black text-[10px] uppercase font-black flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                >
                  <Maximize2 className="w-3.5 h-3.5" /> Full Environment Preview
                </button>
              </div>
            </section>

            {/* Right: Code Console */}
            <section className="w-[450px] bg-[#050505] border-l border-white/10 flex flex-col shrink-0">
              <div className="h-10 border-b border-white/5 flex bg-black">
                <EditorTab active={activeTab === 'html'} onClick={() => setActiveTab('html')} label="HTML" icon={FileCode2} />
                <EditorTab active={activeTab === 'css'} onClick={() => setActiveTab('css')} label="CSS" icon={Hash} />
                <EditorTab active={activeTab === 'js'} onClick={() => setActiveTab('js')} label="JS" icon={Terminal} />
                <EditorTab active={activeTab === 'tailwind'} onClick={() => setActiveTab('tailwind')} label="UTILITY" icon={Zap} />
              </div>
              
              <div className="flex-1 p-0 overflow-hidden relative font-mono">
                <Editor
                  value={editedCode[activeTab] || ''}
                  onValueChange={code => setEditedCode({ ...editedCode, [activeTab]: code })}
                  highlight={code => highlight(code, activeTab === 'html' ? languages.markup : activeTab === 'css' ? languages.css : languages.javascript, activeTab)}
                  padding={24}
                  className="min-h-full outline-none text-[12px]"
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    lineHeight: '1.6',
                    backgroundColor: 'transparent',
                  }}
                />
                <button 
                  onClick={handleCopy}
                  className="absolute top-4 right-4 p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all group shadow-xl"
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-slate-500 group-hover:text-white" />}
                </button>
              </div>

              <div className="p-4 border-t border-white/10 bg-black flex flex-col gap-2">
                <div className="flex gap-2">
                  <button onClick={handleCopy} className="flex-1 bg-white text-black py-2 rounded text-[11px] font-black uppercase tracking-widest hover:bg-cyan-500 transition-colors">Copy Segment</button>
                  <button onClick={handleDownload} className="px-3 py-2 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-all">
                    <Download className="w-4 h-4 text-slate-400" />
                  </button>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-500 mt-1 font-mono">
                  <span>SEGMENT: {activeTab.toUpperCase()} READY</span>
                  <span className="text-cyan-500">v2.4.0-stable</span>
                </div>
              </div>
            </section>
          </div>

          {/* Bottom: Variants System */}
          <footer className="h-56 border-t border-white/10 bg-[#080808] flex flex-col shrink-0 z-30">
            <div className="h-10 flex items-center px-8 justify-between bg-black/40 border-b border-white/5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono">Variant Matrix / Node Subsystem</span>
              <div className="flex gap-6 text-[10px] font-bold">
                 <span className="text-cyan-400 cursor-pointer hover:text-white transition-colors">GRID_MODE</span>
                 <span className="opacity-30 cursor-not-allowed">DIFF_ANALYSIS</span>
              </div>
            </div>
            <div className="flex-1 flex gap-8 px-10 items-center overflow-x-auto overflow-y-hidden py-6 min-w-0 transition-all scroll-smooth pb-14">
              <VariantItem 
                active={activeVariant === 'main'} 
                onClick={() => handleVariantSwitch('main')}
                name="V1: MASTER CORE"
                code={component.code}
                id="main-var"
              />
              {component.variants.map((v, i) => (
                <VariantItem 
                  key={v.id}
                  active={activeVariant === v.id}
                  onClick={() => handleVariantSwitch(v.id)}
                  name={`V${i+2}: ${v.name.toUpperCase()}`}
                  code={v.code}
                  id={v.id}
                />
              ))}
              {/* Spacer for scroll completion */}
              <div className="w-40 shrink-0 h-4"></div>
            </div>
          </footer>
        </div>
      </div>

      {/* Performance Footer */}
      <footer className="h-6 bg-cyan-600 text-black px-6 flex items-center justify-between text-[10px] font-bold shrink-0 uppercase">
        <div className="flex gap-6">
           <span>Status: Node Active</span>
           <span>Optimized Rendering: 0.04ms</span>
           <span>Preview isolated</span>
        </div>
        <div className="flex gap-4">
           <span>Engine v4.1 (Immersive)</span>
           <span className="font-mono">{new Date().toLocaleTimeString()}</span>
        </div>
      </footer>

      {/* Fullscreen Preview Portal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-[1000] bg-black flex flex-col animate-in fade-in duration-300">
          <div className="h-16 flex items-center justify-between px-8 border-b border-white/10 bg-black/80 backdrop-blur-md">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center">
                <Maximize2 className="w-6 h-6 text-black" />
              </div>
              <div>
                <h2 className="text-white font-bold uppercase tracking-widest leading-none">Global Preview</h2>
                <p className="text-[9px] text-slate-500 font-mono mt-1">NODE: {component.name} // VARIANT: {activeVariant}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button 
                onClick={() => setIsFullscreen(false)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-black uppercase text-[11px] hover:scale-105 active:scale-95 transition-all shadow-2xl"
              >
                <X className="w-4 h-4" /> Exit Environment
              </button>
            </div>
          </div>
          <div className={`flex-1 ${theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-white'} relative overflow-hidden flex items-center justify-center`}>
             {previewCode && (
               <LivePreviewEngine 
                  key={`fs-${activeVariant}-${theme}`}
                  html={previewCode.html}
                  css={previewCode.css}
                  js={previewCode.js}
                  theme={theme}
                  loading="eager"
               />
             )}
          </div>
        </div>
      )}
    </div>
  );
}

const EditorTab = ({ active, onClick, label, icon: Icon }: any) => (
  <button 
    onClick={onClick}
    className={`px-6 border-r border-white/10 flex items-center gap-2 transition-all ${active ? 'bg-[#0d0d0d] border-t-2 border-t-cyan-500' : 'opacity-40 hover:opacity-100'}`}
  >
    <Icon className="w-3.5 h-3.5 text-cyan-400" />
    <span className="text-xs font-bold text-white tracking-tight uppercase">{label}</span>
  </button>
);

const VariantItem = React.memo(({ active, onClick, name, code, id }: any) => {
  return (
    <div 
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
      className={`w-44 h-32 border rounded-xl flex flex-col p-1.5 shrink-0 cursor-pointer transition-all hover:scale-[1.02] active:scale-95 ${
        active ? 'bg-white/10 border-cyan-500 shadow-[0_0_25px_rgba(6,182,212,0.2)] scale-105 z-10' : 'bg-white/5 border-white/10 opacity-70 hover:opacity-100 hover:bg-white/[0.08]'
      }`}
    >
      <div className="flex-1 bg-black/60 rounded-lg flex items-center justify-center relative overflow-hidden group pointer-events-none">
         <div className="w-full h-full px-4">
             <LivePreviewEngine 
                html={code?.html || ''} 
                css={code?.css || ''} 
                js={code?.js || ''} 
                theme="dark"
                minimal={true}
                loading="lazy"
             />
         </div>
         {active && <div className="absolute inset-0 border-2 border-cyan-500/50 rounded-lg animate-pulse"></div>}
      </div>
      <div className="mt-2 px-1">
         <span className={`text-[9px] font-bold uppercase block truncate ${active ? 'text-cyan-400' : 'text-slate-400'}`}>{name}</span>
      </div>
    </div>
  );
});

const TabButton = ({ active, onClick, icon: Icon, label }: any) => (
  <button 
    onClick={onClick}
    className={`flex-1 flex items-center justify-center gap-2 border-r border-white/5 transition-all relative ${active ? 'bg-white/5 text-white' : 'text-gray-500 hover:text-gray-300'}`}
  >
    <Icon className={`w-3.5 h-3.5 ${active ? 'text-blue-500' : ''}`} />
    <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
    {active && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" />}
  </button>
);
