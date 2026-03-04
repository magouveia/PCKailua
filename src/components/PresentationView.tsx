import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Slide } from '../services/ai';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, X, Layers, ThumbsDown, AlertTriangle, CheckCircle, TrendingUp, Star, Calendar, Rocket, Check, Palmtree, Armchair, Scale, Lock, Trophy, ArrowLeftRight, Gift, Ban, Percent, Share2, Printer, Utensils, Coffee, Package, Wrench, Sparkles } from 'lucide-react';

// ... (existing code)


interface PresentationViewProps {
  slides: Slide[];
  onClose: () => void;
}

export const PresentationView: React.FC<PresentationViewProps> = ({ slides, onClose }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  const currentSlide = slides[currentSlideIndex];

  const nextSlide = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copiado para a área de transferência!");
  };

  const handlePrint = () => {
    window.print();
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  // Common Background Elements
  const BackgroundElements = () => (
    <>
      {/* Dot Pattern */}
      <div className="absolute inset-0 bg-dot-pattern pointer-events-none" />
    </>
  );

  // Helper for card icons
  const getCardIcon = (index: number) => {
    switch (index) {
      case 0: return <ThumbsDown className="text-white" size={24} />;
      case 1: return <AlertTriangle className="text-white" size={24} />;
      case 2: return <CheckCircle className="text-white" size={24} />;
      case 3: return <TrendingUp className="text-white" size={24} />;
      case 4: return <Star className="text-white" size={24} />;
      default: return <CheckCircle className="text-white" size={24} />;
    }
  };

  // Helper for card colors
  const getCardColor = (index: number) => {
    switch (index) {
      case 0: return 'bg-red-500';
      case 1: return 'bg-yellow-500';
      case 2: return 'bg-green-500';
      case 3: return 'bg-blue-500';
      case 4: return 'bg-amber-600';
      default: return 'bg-gray-500';
    }
  };

  // Layout renderers
  const renderContent = () => {
    switch (currentSlide.layout) {
      case 'title':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center p-12 relative z-10 pb-24">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <img 
                src="https://imgur.com/vXQWtfI.png" 
                alt="Kailua Logo" 
                className="h-32 w-auto object-contain mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-serif font-bold text-brand-dark mb-8 leading-tight"
            >
              {currentSlide.title}
            </motion.h1>

            <div className="flex items-center gap-4 w-full max-w-2xl justify-center mb-12">
              <div className="h-[1px] bg-brand-gray flex-1 opacity-50"></div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-sm md:text-base text-brand-stone uppercase tracking-[0.2em] font-sans"
              >
                {currentSlide.content[0] || "CRITÉRIOS, REGRAS E PERCURSOS"}
              </motion.div>
              <div className="h-[1px] bg-brand-gray flex-1 opacity-50"></div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="border border-brand-stone/30 px-8 py-3 text-xs md:text-sm text-brand-stone uppercase tracking-widest"
            >
              DOCUMENTO OFICIAL 2026
            </motion.div>
          </div>
        );
      case 'index':
        return (
          <div className="flex flex-col h-full p-12 md:p-24 relative z-10 overflow-y-auto">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-12 text-center shrink-0"
            >
              Índice
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-5xl mx-auto w-full">
              {currentSlide.content.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="flex items-baseline gap-3 border-b border-brand-stone/20 pb-2"
                >
                  <span className="text-brand-tan font-mono text-lg font-bold">{(i + 3).toString().padStart(2, '0')}</span>
                  <span className="text-lg md:text-xl text-brand-dark font-serif italic">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'cards':
        return (
          <div className="flex flex-col h-full p-8 md:p-12 relative z-10">
            <div className="flex items-baseline gap-4 mb-8 border-b border-brand-tan/30 pb-4">
               <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl font-serif font-bold text-brand-dark"
              >
                {currentSlide.title}
              </motion.h2>
              <span className="text-brand-stone uppercase tracking-widest text-sm">ESCALA DE DESEMPENHO</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 h-full">
              {currentSlide.content.map((item, i) => {
                // Parse content: "Title | Subtitle | Description | Consequence"
                const parts = item.split('|').map(s => s.trim());
                const title = parts[0] || item;
                const subtitle = parts[1] || '';
                const description = parts[2] || '';
                const consequence = parts[3] || '';

                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full border-t-4 border-transparent relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
                    style={{ borderTopColor: i === 0 ? '#ef4444' : i === 1 ? '#eab308' : i === 2 ? '#22c55e' : i === 3 ? '#3b82f6' : '#d97706' }}
                  >
                    <div className={`w-12 h-12 rounded-full ${getCardColor(i)} flex items-center justify-center mb-4 shadow-md`}>
                      {getCardIcon(i)}
                    </div>
                    
                    <h3 className="text-xl font-bold text-brand-dark mb-1">{title}</h3>
                    <div className="text-xs font-bold text-brand-tan uppercase tracking-wider mb-4">{subtitle}</div>
                    
                    <p className="text-brand-stone text-sm italic mb-6 flex-grow">"{description}"</p>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <div className="text-xs font-bold text-brand-dark mb-1">Consequência:</div>
                      <p className="text-xs text-brand-gray leading-relaxed">{consequence}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="mt-6 flex justify-between items-center text-xs text-brand-stone/60 font-sans">
               <div className="flex items-center gap-2">
                 <div className="w-4 h-4 rounded-full bg-brand-stone/20 flex items-center justify-center text-[10px]">i</div>
                 A avaliação é realizada anualmente para todos os colaboradores.
               </div>
               <div>Critérios de Elegibilidade v.2026</div>
            </div>
          </div>
        );
      case 'salary-progression':
        return (
          <div className="flex flex-col h-full p-6 md:p-10 relative z-10">
            <div className="flex items-baseline gap-4 mb-4 border-b border-brand-tan/30 pb-2">
               <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl md:text-3xl font-serif font-bold text-brand-dark"
              >
                {currentSlide.title}
              </motion.h2>
              <span className="text-brand-stone uppercase tracking-widest text-xs hidden md:inline">MECANISMOS DE VALORIZAÇÃO E CRESCIMENTO</span>
              <div className="flex-1"></div>
              <span className="text-brand-tan uppercase tracking-widest text-[10px]">REGULAMENTO 2026</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full overflow-y-auto md:overflow-visible pb-4 md:pb-0">
              {/* Card 1: Atualização Anual */}
              {currentSlide.content[0] && (() => {
                const parts = currentSlide.content[0].split('|').map(s => s.trim());
                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-5 flex flex-col relative overflow-hidden"
                  >
                    <div className="absolute top-2 right-4 text-5xl font-serif font-bold text-brand-cream opacity-50 pointer-events-none">01</div>
                    <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center mb-4 text-brand-tan">
                      <Calendar size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-brand-dark mb-1">{parts[0]}</h3>
                    <div className="text-[10px] font-bold text-brand-tan uppercase tracking-wider mb-3">{parts[1]}</div>
                    <p className="text-brand-stone text-sm mb-4 leading-relaxed">{parts[2]}</p>
                    
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2 text-xs text-brand-dark">
                        <Check size={14} className="mt-0.5 text-brand-stone" />
                        <span>{parts[3]}</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-brand-dark">
                        <Check size={14} className="mt-0.5 text-brand-stone" />
                        <span>{parts[4]}</span>
                      </li>
                    </ul>

                    <div className="mt-auto pt-3 border-t border-gray-100 text-[10px] text-brand-stone italic flex items-center gap-2">
                       <div className="w-3 h-3 rounded-full bg-brand-stone/20 flex items-center justify-center text-[8px] not-italic font-bold">i</div>
                       {parts[5]}
                    </div>
                  </motion.div>
                );
              })()}

              {/* Card 2: Fim de Nível */}
              {currentSlide.content[1] && (() => {
                const parts = currentSlide.content[1].split('|').map(s => s.trim());
                // parts[3], [4], [5] are the bars: "Label:Value"
                const bar1 = parts[3].split(':');
                const bar2 = parts[4].split(':');
                const bar3 = parts[5].split(':');

                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-xl shadow-lg p-5 flex flex-col relative overflow-hidden"
                  >
                    <div className="absolute top-2 right-4 text-5xl font-serif font-bold text-brand-cream opacity-50 pointer-events-none">02</div>
                    <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center mb-4 text-brand-tan">
                      <TrendingUp size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-brand-dark mb-1">{parts[0]}</h3>
                    <div className="text-[10px] font-bold text-brand-tan uppercase tracking-wider mb-3">{parts[1]}</div>
                    <p className="text-brand-stone text-sm mb-4 leading-relaxed">{parts[2]}</p>
                    
                    <div className="space-y-3">
                      <div className="bg-green-50 p-2 rounded-lg flex justify-between items-center border-l-4 border-green-500">
                        <span className="font-bold text-brand-dark text-xs">{bar1[0]}</span>
                        <span className="bg-green-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">{bar1[1]}</span>
                      </div>
                      <div className="bg-blue-50 p-2 rounded-lg flex justify-between items-center border-l-4 border-blue-500">
                        <span className="font-bold text-brand-dark text-xs">{bar2[0]}</span>
                        <span className="bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">{bar2[1]}</span>
                      </div>
                      <div className="bg-amber-50 p-2 rounded-lg flex justify-between items-center border-l-4 border-brand-tan">
                        <span className="font-bold text-brand-dark text-xs">{bar3[0]}</span>
                        <span className="bg-brand-tan text-white text-[10px] font-bold px-1.5 py-0.5 rounded">{bar3[1]}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}

              {/* Card 3: Aceleração */}
              {currentSlide.content[2] && (() => {
                const parts = currentSlide.content[2].split('|').map(s => s.trim());
                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-xl shadow-lg p-5 flex flex-col relative overflow-hidden"
                  >
                    <div className="absolute top-2 right-4 text-5xl font-serif font-bold text-brand-cream opacity-50 pointer-events-none">03</div>
                    <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center mb-4 text-brand-tan">
                      <Rocket size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-brand-dark mb-1">{parts[0]}</h3>
                    <div className="text-[10px] font-bold text-brand-tan uppercase tracking-wider mb-3">{parts[1]}</div>
                    <p className="text-brand-stone text-sm mb-4 leading-relaxed">{parts[2]}</p>
                    
                    <div className="bg-brand-dark text-brand-cream p-4 rounded-xl relative overflow-hidden">
                      <Star className="absolute -top-2 -right-2 text-brand-tan opacity-20" size={48} />
                      <div className="relative z-10">
                        <div className="text-brand-tan font-bold text-xs mb-0.5">Critério:</div>
                        <p className="text-xs mb-2 leading-relaxed">{parts[3].replace('Critério: ', '')}</p>
                        
                        <div className="text-brand-tan font-bold text-xs mb-0.5">Benefício:</div>
                        <p className="text-xs mb-2 leading-relaxed">{parts[4].replace('Benefício: ', '')}</p>
                        
                        <div className="text-[10px] text-brand-gray border-t border-brand-gray/20 pt-1 mt-1">
                          {parts[5]}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-auto pt-3 text-[10px] text-brand-stone/60 italic flex items-center gap-2">
                       <div className="w-3 h-3 flex items-center justify-center">⚡</div>
                       Foco na retenção de talentos críticos.
                    </div>
                  </motion.div>
                );
              })()}
            </div>
          </div>
        );
      case 'rules':
        return (
          <div className="flex flex-col h-full p-8 md:p-12 relative z-10">
            <div className="flex items-baseline gap-4 mb-8 border-b border-brand-tan/30 pb-4">
               <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-3xl md:text-4xl font-serif font-bold text-brand-dark"
              >
                {currentSlide.title}
              </motion.h2>
              <span className="text-brand-stone uppercase tracking-widest text-sm">DIRETRIZES DO PLANO</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 h-full">
              {currentSlide.content.map((item, i) => {
                const parts = item.split('|').map(s => s.trim());
                const title = parts[0];
                const subtitle = parts[1];
                const text = parts[2];
                const footer = parts[3]; // Optional footer

                // Config for each card
                const config = [
                  { color: 'border-gray-600', icon: <Armchair size={20} />, iconBg: 'bg-gray-600' },
                  { color: 'border-yellow-500', icon: <Scale size={20} />, iconBg: 'bg-yellow-500' },
                  { color: 'border-red-500', icon: <Lock size={20} />, iconBg: 'bg-red-500' },
                  { color: 'border-[#c49874]', icon: <Trophy size={20} />, iconBg: 'bg-[#c49874]' },
                  { color: 'border-blue-500', icon: <ArrowLeftRight size={20} />, iconBg: 'bg-blue-500' },
                ][i] || { color: 'border-gray-500', icon: <CheckCircle size={20} />, iconBg: 'bg-gray-500' };

                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className={`bg-white rounded-xl shadow-lg p-6 flex flex-col h-full border-t-8 ${config.color} relative overflow-hidden`}
                  >
                    <div className={`w-10 h-10 rounded-lg ${config.iconBg} flex items-center justify-center mb-4 text-white shadow-sm`}>
                      {config.icon}
                    </div>
                    
                    <h3 className="text-lg font-bold text-brand-dark mb-1 leading-tight">{title}</h3>
                    <div className="text-[10px] font-bold text-brand-stone/60 uppercase tracking-wider mb-4">{subtitle}</div>
                    
                    <p className="text-brand-stone text-xs md:text-sm leading-relaxed mb-4 flex-grow">{text}</p>
                    
                    {footer && (
                      <div className="pt-4 border-t border-gray-100 mt-auto">
                        <div className="flex gap-2 items-start">
                          {footer.includes('Benefício') && <Gift size={14} className="text-yellow-600 mt-0.5 shrink-0" />}
                          {footer.includes('Penalização') && <Ban size={14} className="text-red-500 mt-0.5 shrink-0" />}
                          {footer.includes('Prémio') && <Percent size={14} className="text-[#c49874] mt-0.5 shrink-0" />}
                          <p className="text-[10px] text-brand-gray leading-tight">
                            <span className="font-bold text-brand-dark">{footer.split(':')[0]}:</span>
                            {footer.split(':').slice(1).join(':')}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
            
            <div className="mt-6 flex justify-end items-center text-xs text-brand-stone/60 font-sans">
               <div className="flex items-center gap-2">
                 <CheckCircle size={12} className="text-brand-tan" />
                 Todas as regras aplicam-se a partir do ciclo de avaliação corrente.
               </div>
            </div>
          </div>
        );
      case 'career-structure':
        return (
          <div className="flex flex-col h-full p-6 md:p-8 relative z-10">
            <div className="flex items-baseline gap-4 mb-4 border-b border-brand-tan/30 pb-3">
               <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-3xl md:text-4xl font-serif font-bold text-brand-dark"
              >
                {currentSlide.title}
              </motion.h2>
              <span className="text-brand-stone uppercase tracking-widest text-sm">Áreas Operacionais</span>
              <div className="flex-1"></div>
              <div className="bg-brand-dark text-brand-cream px-3 py-1 rounded text-xs uppercase tracking-widest font-bold">Operacional</div>
            </div>

            <div className="bg-brand-dark text-brand-cream rounded-t-lg p-3 grid grid-cols-12 gap-4 text-xs font-bold uppercase tracking-wider items-center">
              <div className="col-span-3">Setor</div>
              <div className="col-span-3">Início da Carreira</div>
              <div className="col-span-3">Topo da Carreira</div>
              <div className="col-span-3 text-right">Níveis de Evolução</div>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2 mt-2">
              {currentSlide.content.map((item, i) => {
                const parts = item.split('|').map(s => s.trim());
                // Format: Sector | Subtitle | StartRole | StartLevel | EndRole | EndLevel | Progression
                const sector = parts[0];
                const subtitle = parts[1];
                const startRole = parts[2];
                const startLevel = parts[3];
                const endRole = parts[4];
                const endLevel = parts[5];
                const progression = parts[6];

                const getIcon = (sect: string) => {
                  if (sect.includes('Cozinha')) return <Utensils size={20} />;
                  if (sect.includes('Copa')) return <Coffee size={20} />;
                  if (sect.includes('Armazém')) return <Package size={20} />;
                  if (sect.includes('Manutenção')) return <Wrench size={20} />;
                  if (sect.includes('Higiene')) return <Sparkles size={20} />;
                  return <Layers size={20} />;
                };

                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="bg-white rounded-lg shadow-sm p-3 grid grid-cols-12 gap-4 items-center border-l-4 border-brand-tan hover:shadow-md transition-shadow"
                  >
                    {/* Sector */}
                    <div className="col-span-3 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center text-brand-tan shrink-0">
                        {getIcon(sector)}
                      </div>
                      <div>
                        <div className="font-bold text-brand-dark text-lg leading-tight">{sector}</div>
                        <div className="text-[10px] text-brand-stone uppercase tracking-wider">{subtitle}</div>
                      </div>
                    </div>

                    {/* Start */}
                    <div className="col-span-3">
                      <div className="text-brand-stone text-sm mb-1">{startRole}</div>
                      <span className="bg-brand-cream text-brand-dark text-[10px] font-bold px-2 py-1 rounded border border-brand-tan/20">
                        {startLevel}
                      </span>
                    </div>

                    {/* End */}
                    <div className="col-span-3">
                      <div className="text-brand-tan font-bold text-sm mb-1">{endRole}</div>
                      <span className="bg-brand-tan text-white text-[10px] font-bold px-2 py-1 rounded">
                        {endLevel}
                      </span>
                    </div>

                    {/* Progression */}
                    <div className="col-span-3 flex flex-col items-end">
                      <div className="text-xs font-mono text-brand-stone mb-1">{progression}</div>
                      <div className="w-full h-2 bg-brand-cream rounded-full overflow-hidden relative max-w-[140px]">
                        <div className="absolute inset-y-0 left-0 bg-brand-tan w-full opacity-50"></div>
                        <div className="absolute inset-y-0 left-0 bg-brand-tan w-1/3"></div>
                      </div>
                      <div className="text-[9px] text-brand-gray mt-1">Níveis de Progressão</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        );
      case 'section':
        return (
          <div className="flex flex-col items-center justify-center h-full p-12 md:p-24 text-center relative z-10">
             <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 text-brand-tan"
            >
              <div className="w-16 h-1 bg-brand-tan mb-2 mx-auto"></div>
              <div className="w-8 h-1 bg-brand-tan mx-auto"></div>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif font-bold mb-8 text-brand-dark"
            >
              {currentSlide.title}
            </motion.h2>

            <div className="max-w-3xl mx-auto">
              {currentSlide.content.map((point, i) => (
                <motion.p 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="text-xl md:text-2xl text-brand-stone font-serif italic leading-relaxed"
                >
                  {point}
                </motion.p>
              ))}
            </div>
          </div>
        );
      case 'table':
        return (
          <div className="flex flex-col h-full p-8 md:p-12 relative z-10">
            <div className="flex items-baseline gap-4 mb-6 border-b border-brand-tan/30 pb-4">
               <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-3xl md:text-4xl font-serif font-bold text-brand-dark uppercase"
              >
                {currentSlide.title}
              </motion.h2>
              <div className="flex-1"></div>
              <div className="bg-brand-dark text-brand-cream px-3 py-1 rounded text-xs uppercase tracking-widest font-bold">Carreira Técnica</div>
            </div>

            {/* Subtitle / Intro */}
            {currentSlide.content[0] && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 bg-brand-cream/50 p-4 rounded-lg border border-brand-tan/20"
              >
                <div className="text-xs font-bold text-brand-tan uppercase tracking-wider mb-1">
                  {currentSlide.content[0].split(':')[0]}
                </div>
                <div className="text-brand-dark font-medium flex gap-4">
                  {currentSlide.content[0].split(':')[1]?.split('|').map((part, i) => (
                    <div key={i} className="flex items-center gap-2">
                      {i > 0 && <div className="w-1 h-1 rounded-full bg-brand-tan"></div>}
                      <span>{part.trim()}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Table */}
            <div className="flex-1 overflow-hidden bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col">
              {/* Header */}
              <div className="bg-brand-dark text-white grid grid-cols-12 gap-4 p-4 text-xs font-bold uppercase tracking-wider">
                {currentSlide.content[1]?.split('|').map((header, i) => (
                  <div key={i} className={`${i === 0 ? 'col-span-2' : i === 1 ? 'col-span-4' : 'col-span-2'} ${i >= 2 ? 'text-center' : ''}`}>
                    {header.trim()}
                  </div>
                ))}
              </div>

              {/* Rows */}
              <div className="overflow-y-auto flex-1">
                {currentSlide.content.slice(2).map((row, rowIndex) => {
                  const cells = row.split('|').map(c => c.trim());
                  return (
                    <motion.div 
                      key={rowIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * rowIndex }}
                      className={`grid grid-cols-12 gap-4 p-4 border-b border-gray-50 text-sm items-center hover:bg-brand-cream/10 transition-colors ${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                    >
                      <div className="col-span-2 font-bold text-brand-tan">{cells[0]}</div>
                      <div className="col-span-4 font-medium text-brand-dark">{cells[1]}</div>
                      <div className="col-span-2 text-center">
                        <span className="bg-brand-dark/5 text-brand-dark px-2 py-1 rounded text-xs font-bold border border-brand-dark/10">
                          {cells[2]}
                        </span>
                      </div>
                      <div className="col-span-2 text-center text-brand-stone text-xs">{cells[3]}</div>
                      <div className="col-span-2 text-center font-mono text-xs text-brand-gray">{cells[4]}</div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      case 'quote':
        return (
          <div className="flex flex-col items-center justify-center h-full p-12 md:p-24 text-center relative z-10">
             <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-5xl md:text-7xl font-serif italic text-brand-dark leading-tight max-w-4xl"
            >
              "{currentSlide.content[0]}"
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-12 flex items-center gap-4"
            >
              <div className="w-12 h-[1px] bg-brand-tan"></div>
              <span className="text-lg text-brand-stone font-sans uppercase tracking-widest font-medium">
                {currentSlide.title}
              </span>
              <div className="w-12 h-[1px] bg-brand-tan"></div>
            </motion.div>
          </div>
        );
      default: // 'content'
        return (
          <div className="flex flex-col h-full p-12 md:p-24 relative z-10">
            <div className="flex items-end gap-6 mb-12 border-b border-brand-dark/10 pb-6">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl md:text-5xl font-serif font-bold text-brand-dark"
              >
                {currentSlide.title}
              </motion.h2>
              <div className="flex-1"></div>
              <div className="text-brand-tan">
                 <Layers size={24} />
              </div>
            </div>
            
            <ul className="space-y-6 max-w-4xl">
              {currentSlide.content.map((point, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-start text-xl md:text-2xl text-brand-stone font-sans font-light leading-relaxed"
                >
                  <span className="mr-6 text-brand-tan mt-2 h-2 w-2 bg-brand-tan rotate-45 flex-shrink-0"></span>
                  {point}
                </motion.li>
              ))}
            </ul>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-brand-dark flex flex-col">
      {/* Controls */}
      <div className="absolute top-4 right-4 z-50 flex gap-2 opacity-0 hover:opacity-100 transition-opacity">
        <button onClick={onClose} className="p-2 bg-brand-dark/10 text-brand-dark rounded-full hover:bg-brand-dark/20" title="Fechar Apresentação">
          <X size={20} />
        </button>
        <button onClick={handleShare} className="p-2 bg-brand-dark/10 text-brand-dark rounded-full hover:bg-brand-dark/20" title="Partilhar Link">
          <Share2 size={20} />
        </button>
        <button onClick={handlePrint} className="p-2 bg-brand-dark/10 text-brand-dark rounded-full hover:bg-brand-dark/20" title="Imprimir / Salvar PDF">
          <Printer size={20} />
        </button>
        <button onClick={toggleFullscreen} className="p-2 bg-brand-dark/10 text-brand-dark rounded-full hover:bg-brand-dark/20" title="Ecrã Inteiro">
          {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
        </button>
      </div>

      {/* Slide Area */}
      <div className="flex-1 relative overflow-hidden flex items-center justify-center bg-brand-dark p-4 md:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlideIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full h-full max-w-[1600px] aspect-video mx-auto shadow-2xl bg-brand-cream relative overflow-hidden"
          >
            <BackgroundElements />
            {renderContent()}
            
            {/* Footer / Page Number */}
            <div className="absolute bottom-8 left-8 text-brand-stone/50 font-sans text-xs tracking-widest">
              {currentSlideIndex + 1} — {slides.length}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Bar */}
      <div className="h-16 bg-brand-dark flex items-center justify-between px-8 border-t border-white/10">
        <button 
          onClick={prevSlide} 
          disabled={currentSlideIndex === 0}
          className="flex items-center gap-2 text-brand-cream disabled:opacity-30 hover:text-brand-tan transition-colors font-sans uppercase tracking-wider text-sm"
        >
          <ChevronLeft size={16} /> Anterior
        </button>
        
        <div className="flex gap-1">
          {slides.map((_, idx) => (
            <div 
              key={idx}
              className={`h-1 w-8 transition-colors ${idx === currentSlideIndex ? 'bg-brand-tan' : 'bg-white/20'}`}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide} 
          disabled={currentSlideIndex === slides.length - 1}
          className="flex items-center gap-2 text-brand-cream disabled:opacity-30 hover:text-brand-tan transition-colors font-sans uppercase tracking-wider text-sm"
        >
          Próximo <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};
