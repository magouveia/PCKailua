import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface OrganogramViewProps {
  onBack: () => void;
}

export const OrganogramView: React.FC<OrganogramViewProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-brand-dark flex flex-col">
      {/* Header */}
      <div className="h-16 flex items-center px-6 border-b border-white/10 shrink-0 z-50 bg-brand-dark/80 backdrop-blur-md relative">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 text-brand-cream rounded-full hover:bg-white/10 transition-colors border border-white/10 group"
            title="Voltar"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-serif font-bold text-sm tracking-wide">Voltar</span>
          </button>
          
          <div className="h-6 w-px bg-white/10 mx-2" />
          
          <h2 className="text-lg font-serif font-bold text-brand-cream tracking-tight">
            Organograma
          </h2>
        </div>

        <div className="flex-1 text-center hidden md:block">
          <span className="text-brand-cream/40 text-[10px] uppercase tracking-[0.4em] font-sans">
            Kailua Journey • Estrutura Organizacional
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex items-center justify-center overflow-auto">
        <img
          src="https://imgur.com/xCjqHAm.png"
          alt="Organograma"
          className="max-w-full h-auto rounded-lg shadow-lg"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
};
