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
      <div className="flex items-center justify-between p-4 border-b border-brand-stone/20 bg-white shadow-sm z-20 relative">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-brand-stone/10 rounded-full transition-colors text-brand-stone hover:text-brand-dark"
            title="Voltar"
          >
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-xl font-bold text-brand-dark">Organograma</h2>
        </div>
        
        <div className="flex items-center gap-2 bg-brand-stone/5 p-1 rounded-lg border border-brand-stone/10">
          <button 
            onClick={handleZoomOut}
            className="p-2 hover:bg-white rounded-md transition-colors text-brand-stone hover:text-brand-dark shadow-sm"
            title="Reduzir"
          >
            <ZoomOut size={20} />
          </button>
          <button 
            onClick={handleReset}
            className="p-2 hover:bg-white rounded-md transition-colors text-brand-stone hover:text-brand-dark shadow-sm"
            title="Tamanho Original"
          >
            <Maximize size={20} />
          </button>
          <button 
            onClick={handleZoomIn}
            className="p-2 hover:bg-white rounded-md transition-colors text-brand-stone hover:text-brand-dark shadow-sm"
            title="Ampliar"
          >
            <ZoomIn size={20} />
          </button>
          <div className="px-3 py-1 text-sm font-medium text-brand-stone border-l border-brand-stone/20">
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
              src="https://imgur.com/HWTRg7y.png" 
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
