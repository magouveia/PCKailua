import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

interface JobDescriptionsViewProps {
  onBack: () => void;
}

export const JobDescriptionsView: React.FC<JobDescriptionsViewProps> = ({ onBack }) => {
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
          <h2 className="text-xl font-bold text-brand-dark">Descritivo de Funções</h2>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 z-10 relative">
        <div className="w-24 h-24 bg-brand-tan/10 rounded-full flex items-center justify-center text-brand-tan mb-6 shadow-lg border border-brand-tan/20">
          <FileText size={48} />
        </div>
        <h2 className="text-3xl font-serif font-bold text-brand-cream mb-4">Em Construção</h2>
        <p className="text-brand-stone text-center max-w-md text-lg">
          A secção de Descritivo de Funções está a ser desenvolvida e estará disponível em breve.
        </p>
      </div>
    </div>
  );
};
