import React, { useState } from 'react';
import { ArrowLeft, ZoomIn, ZoomOut, Maximize } from 'lucide-react';

interface OrganogramViewProps {
  onBack: () => void;
}

export const OrganogramView: React.FC<OrganogramViewProps> = ({ onBack }) => {
  const [scale, setScale] = useState(1);

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.5));
  const handleReset = () => setScale(1);

  return (
    <div className="flex flex-col h-screen bg-brand-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-dark via-transparent to-brand-dark pointer-events-none" />

      {/* Header */}
      <div className="h-16 flex items-center px-6 border-b border-white/10 shrink-0 z-50 bg-brand-dark/80 backdrop-blur-md relative">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 text-brand-cream rounded-full hover:bg-white/10 transition-colors border border-white/10 group"
            title="Voltar"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-serif font-bold text-sm tracking-wide">Voltar ao Início</span>
          </button>
          
          <div className="h-6 w-px bg-white/10 mx-2" />
          
          <h2 className="text-lg font-serif font-bold text-brand-cream tracking-tight">Organograma</h2>
        </div>

        <div className="flex-1 text-center hidden md:block">
          <span className="text-brand-cream/40 text-[10px] uppercase tracking-[0.4em] font-sans">
            Kailua Journey • Organograma
          </span>
        </div>
        
        <div className="flex items-center gap-2 bg-white/5 p-1 rounded-lg border border-white/10 shrink-0">
          <button 
            onClick={handleZoomOut}
            className="p-2 hover:bg-white/10 rounded-md transition-colors text-brand-cream/60 hover:text-brand-cream"
            title="Reduzir"
          >
            <ZoomOut size={20} />
          </button>
          <button 
            onClick={handleReset}
            className="p-2 hover:bg-white/10 rounded-md transition-colors text-brand-cream/60 hover:text-brand-cream"
            title="Tamanho Original"
          >
            <Maximize size={20} />
          </button>
          <button 
            onClick={handleZoomIn}
            className="p-2 hover:bg-white/10 rounded-md transition-colors text-brand-cream/60 hover:text-brand-cream"
            title="Ampliar"
          >
            <ZoomIn size={20} />
          </button>
          <div className="px-3 py-1 text-xs font-mono text-brand-cream/40 border-l border-white/10">
            {Math.round(scale * 100)}%
          </div>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="flex-1 overflow-auto relative z-10">
        <div className="min-h-full min-w-max w-full flex items-center justify-center p-16">
          <div 
            className="transition-transform duration-200 ease-out origin-top"
            style={{ transform: `scale(${scale})` }}
          >
            <img 
              src="https://imgur.com/zHG8oas.png" 
              alt="Organograma" 
              className="max-w-none shadow-xl rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
