import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Users, ArrowRight, FileText, Goal } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: 'career' | 'organogram' | 'job-descriptions' | 'performance' | 'org-chart') => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-dark via-transparent to-brand-dark pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center z-10"
      >
        <img 
          src="https://imgur.com/yykIOZ8.png" 
          alt="Kailua Logo" 
          className="h-24 mx-auto mb-6 object-contain mix-blend-screen opacity-90"
          referrerPolicy="no-referrer"
        />
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-cream mb-4">
          Kailua Journey
        </h1>
        <p className="text-brand-stone text-lg max-w-4xl mx-auto font-light md:whitespace-nowrap">
          O caminho para crescer e evoluir...
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl w-full z-10 px-4">
        {/* Organogram Card (Now Block 1) */}
        <motion.button
          onClick={() => onNavigate('organogram')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="group relative aspect-square bg-brand-cream rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-2xl hover:shadow-brand-tan/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white to-brand-cream opacity-100 transition-opacity duration-500 group-hover:opacity-90" />
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-tan/30 rounded-2xl transition-colors duration-500" />
          
          <div className="relative z-10 mb-4 w-16 h-16 shrink-0 rounded-full bg-brand-tan/10 flex items-center justify-center group-hover:bg-brand-tan group-hover:text-white transition-colors duration-500 text-brand-tan">
            <Users size={32} />
          </div>
          
          <h2 className="relative z-10 text-xl md:text-2xl font-serif font-bold text-brand-dark mb-2 group-hover:text-brand-tan transition-colors duration-300">
            Organograma
          </h2>
          
          <p className="relative z-10 text-brand-stone text-xs md:text-sm mb-6 max-w-[200px] opacity-80 group-hover:opacity-100 transition-opacity">
            Estrutura organizacional e departamentos.
          </p>

          <div className="relative z-10 flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-dark group-hover:gap-4 transition-all duration-300">
            Visualizar <ArrowRight size={14} />
          </div>
        </motion.button>

        {/* Career Plan Card (Now Block 2) */}
        <motion.button
          onClick={() => onNavigate('career')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="group relative aspect-square bg-brand-cream rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-2xl hover:shadow-brand-tan/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white to-brand-cream opacity-100 transition-opacity duration-500 group-hover:opacity-90" />
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-tan/30 rounded-2xl transition-colors duration-500" />
          
          <div className="relative z-10 mb-4 w-16 h-16 shrink-0 rounded-full bg-brand-tan/10 flex items-center justify-center group-hover:bg-brand-tan group-hover:text-white transition-colors duration-500 text-brand-tan">
            <TrendingUp size={32} />
          </div>
          
          <h2 className="relative z-10 text-xl md:text-2xl font-serif font-bold text-brand-dark mb-2 group-hover:text-brand-tan transition-colors duration-300">
            Plano de Carreira
          </h2>
          
          <p className="relative z-10 text-brand-stone text-xs md:text-sm mb-6 max-w-[200px] opacity-80 group-hover:opacity-100 transition-opacity">
            Critérios de progressão e benefícios.
          </p>

          <div className="relative z-10 flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-dark group-hover:gap-4 transition-all duration-300">
            Aceder <ArrowRight size={14} />
          </div>
        </motion.button>

        {/* Job Descriptions Card (Block 3) */}
        <motion.button
          onClick={() => onNavigate('job-descriptions')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="group relative aspect-square bg-brand-cream rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-2xl hover:shadow-brand-tan/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white to-brand-cream opacity-100 transition-opacity duration-500 group-hover:opacity-90" />
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-tan/30 rounded-2xl transition-colors duration-500" />
          
          <div className="relative z-10 mb-4 w-16 h-16 shrink-0 rounded-full bg-brand-tan/10 flex items-center justify-center group-hover:bg-brand-tan group-hover:text-white transition-colors duration-500 text-brand-tan">
            <FileText size={32} />
          </div>
          
          <h2 className="relative z-10 text-xl md:text-2xl font-serif font-bold text-brand-dark mb-2 group-hover:text-brand-tan transition-colors duration-300">
            Perfis Funcionais
          </h2>
          
          <p className="relative z-10 text-brand-stone text-xs md:text-sm mb-6 max-w-[200px] opacity-80 group-hover:opacity-100 transition-opacity">
            Responsabilidades, requisitos e expetativas de cada função
          </p>

          <div className="relative z-10 flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-dark group-hover:gap-4 transition-all duration-300">
            Aceder <ArrowRight size={14} />
          </div>
        </motion.button>

        {/* Performance Review Card (Block 4) */}
        <motion.button
          onClick={() => onNavigate('performance')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="group relative aspect-square bg-brand-cream rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-2xl hover:shadow-brand-tan/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white to-brand-cream opacity-100 transition-opacity duration-500 group-hover:opacity-90" />
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-tan/30 rounded-2xl transition-colors duration-500" />
          
          {/* Stamp "A DECORRER" */}
          <div className="absolute top-6 right-6 rotate-12 z-20 pointer-events-none opacity-70 mix-blend-multiply">
            <div className="border-2 border-yellow-600/80 px-2 py-0.5 rounded-sm transform scale-90">
              <span className="text-yellow-600/90 font-stamp text-sm md:text-base font-bold tracking-widest uppercase whitespace-nowrap">
                A decorrer
              </span>
            </div>
          </div>

          <div className="relative z-10 mb-4 w-16 h-16 shrink-0 rounded-full bg-brand-tan/10 flex items-center justify-center group-hover:bg-brand-tan group-hover:text-white transition-colors duration-500 text-brand-tan">
            <Goal size={32} />
          </div>
          
          <h2 className="relative z-10 text-xl md:text-2xl font-serif font-bold text-brand-dark mb-2 group-hover:text-brand-tan transition-colors duration-300">
            Avaliação de Desempenho
          </h2>
          
          <p className="relative z-10 text-brand-stone text-xs md:text-sm mb-6 max-w-[200px] opacity-80 group-hover:opacity-100 transition-opacity">
            Medir, alinhar e desenvolver
          </p>

          <div className="relative z-10 flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-dark group-hover:gap-4 transition-all duration-300">
            Aceder <ArrowRight size={14} />
          </div>
        </motion.button>
      </div>

      <div className="mt-16 text-brand-stone/30 text-xs uppercase tracking-widest font-sans">
        © 2026 Kailua Group
      </div>
    </div>
  );
};
