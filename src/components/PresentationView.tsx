import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Slide } from '../services/ai';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, X, Layers, ThumbsDown, AlertTriangle, CheckCircle, TrendingUp, Star, Calendar, Rocket, Check, Palmtree, Armchair, Scale, Lock, Trophy, ArrowLeftRight, Gift, Ban, Percent, Share2, Printer, Utensils, Coffee, Package, Wrench, Sparkles, ArrowLeft, Handshake, ArrowUp, Wine, ClipboardCheck, HeartHandshake, ConciergeBell, Briefcase, Building } from 'lucide-react';

// ... (existing code)


interface PresentationViewProps {
  slides: Slide[];
  onClose: () => void;
  onNavigateToSector?: (sectorName: string, slideIndex: number) => void;
  initialSlideIndex?: number;
  onSlideChange?: (index: number) => void;
}

export const PresentationView: React.FC<PresentationViewProps> = ({ 
  slides, 
  onClose, 
  onNavigateToSector,
  initialSlideIndex = 0,
  onSlideChange
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(initialSlideIndex);
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  const currentSlide = slides[currentSlideIndex];

  const nextSlide = () => {
    if (currentSlideIndex < slides.length - 1) {
      const nextIndex = currentSlideIndex + 1;
      setCurrentSlideIndex(nextIndex);
      onSlideChange?.(nextIndex);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      const prevIndex = currentSlideIndex - 1;
      setCurrentSlideIndex(prevIndex);
      onSlideChange?.(prevIndex);
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
      case 3: return <Star className="text-white" size={24} />;
      case 4: return <TrendingUp className="text-white" size={24} />;
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
          <div className="flex flex-col items-center justify-center h-full text-center p-8 relative z-10 pb-16">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <img 
                src="https://imgur.com/yykIOZ8.png" 
                alt="Kailua Logo" 
                className="h-24 w-auto object-contain mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-serif font-bold text-brand-dark mb-6 leading-tight"
            >
              {currentSlide.title}
            </motion.h1>

            <div className="flex items-center gap-4 w-full max-w-2xl justify-center mb-8">
              <div className="h-[1px] bg-brand-gray flex-1 opacity-50"></div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xs md:text-sm text-brand-stone uppercase tracking-[0.2em] font-sans"
              >
                {currentSlide.content[0] || "CRITÉRIOS, REGRAS E PERCURSOS"}
              </motion.div>
              <div className="h-[1px] bg-brand-gray flex-1 opacity-50"></div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="border border-brand-stone/30 px-8 py-3 text-xs md:text-sm text-brand-stone uppercase tracking-widest mb-8"
            >
              DOCUMENTO OFICIAL 2026
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-brand-stone text-sm md:text-base max-w-3xl text-center italic leading-relaxed"
            >
              2026 será dedicado à implementação e fase de testes, permitindo ajustes e melhorias contínuas, garantindo que em 2027 o modelo entra em pleno vigor de forma sólida e validada.
            </motion.p>
          </div>
        );
      case 'index':
        return (
          <div className="flex flex-col justify-center h-full p-8 md:p-16 relative z-10 overflow-y-auto">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-16 text-center shrink-0"
            >
              Índice
            </motion.h2>
            <div className="flex flex-col gap-6 max-w-2xl mx-auto w-full">
              {currentSlide.content.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="flex items-baseline gap-4 border-b border-brand-stone/20 pb-3"
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
          <div className="flex flex-col h-full p-6 md:p-8 relative z-10">
            <div className="flex items-baseline gap-4 mb-6 border-b border-brand-tan/30 pb-3">
               <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl md:text-3xl font-serif font-bold text-brand-dark"
              >
                {currentSlide.title}
              </motion.h2>
              <span className="text-brand-stone uppercase tracking-widest text-xs">ESCALA DE DESEMPENHO</span>
            </div>

            <div className="mb-6">
              <p className="text-brand-stone text-sm md:text-base leading-relaxed">
                A progressão de carreira está diretamente ligada ao resultado da avaliação de desempenho, de forma consistente, utilizando a seguinte escala interna:
              </p>
            </div>

            <div className={`grid grid-cols-1 ${currentSlide.content.length === 4 ? 'md:grid-cols-4' : 'md:grid-cols-5'} gap-3 mb-6`}>
              {currentSlide.content.map((item, i) => {
                // Parse content: "Title | Subtitle | Description | Consequence"
                const parts = item.split('|').map(s => s.trim());
                const title = parts[0] || item;
                const subtitle = parts[1] || '';
                const description = parts[2] || '';

                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="bg-white rounded-xl shadow-lg p-6 flex flex-col min-h-[320px] border-t-4 border-transparent relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
                    style={{ borderTopColor: i === 0 ? '#ef4444' : i === 1 ? '#eab308' : i === 2 ? '#22c55e' : i === 3 ? '#3b82f6' : '#d97706' }}
                  >
                    <div className={`w-10 h-10 rounded-full ${getCardColor(i)} flex items-center justify-center mb-3 shadow-md`}>
                      {getCardIcon(i)}
                    </div>
                    
                    <h3 className="text-lg font-bold text-brand-dark mb-1">{title}</h3>
                    <div className="text-[10px] font-bold text-brand-tan uppercase tracking-wider mb-3">{subtitle}</div>
                    
                    <p className="text-brand-stone text-sm flex-grow whitespace-pre-line leading-relaxed">{description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        );
      case 'salary-progression':
        return (
          <div className="flex flex-col h-full p-6 md:p-8 relative z-10">
            <div className="flex items-baseline gap-4 mb-4 border-b border-brand-tan/30 pb-2">
               <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl md:text-3xl font-serif font-bold text-brand-dark"
              >
                {currentSlide.title}
              </motion.h2>
              <span className="text-brand-stone uppercase tracking-widest text-[10px] hidden md:inline">MECANISMOS DE VALORIZAÇÃO E CRESCIMENTO</span>
              <div className="flex-1"></div>
              <span className="text-brand-tan uppercase tracking-widest text-[9px]">REGULAMENTO 2026</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 flex-1 overflow-y-auto md:overflow-visible pb-4 md:pb-0">
              {/* Card 1: Atualização Anual */}
              {currentSlide.content[0] && (() => {
                const parts = currentSlide.content[0].split('|').map(s => s.trim());
                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-4 flex flex-col relative overflow-hidden"
                  >
                    <div className="absolute top-2 right-4 text-4xl font-serif font-bold text-brand-cream opacity-50 pointer-events-none">01</div>
                    <div className="w-8 h-8 rounded-full bg-brand-cream flex items-center justify-center mb-3 text-brand-tan">
                      <Calendar size={16} />
                    </div>
                    <h3 className="text-base font-bold text-brand-dark mb-1">{parts[0]}</h3>
                    <div className="text-[10px] font-bold text-brand-tan uppercase tracking-wider mb-4">{parts[1]}</div>
                    <p className="text-brand-stone text-sm mb-4 leading-relaxed mt-1">{parts[2]}</p>
                    
                    <ul className="space-y-3 mb-4">
                      <li className="flex items-start gap-1.5 text-xs text-brand-dark">
                        <Check size={12} className="mt-0.5 text-brand-stone" />
                        <span>{parts[3]}</span>
                      </li>
                      <li className="flex items-start gap-1.5 text-xs text-brand-dark">
                        <Check size={12} className="mt-0.5 text-brand-stone" />
                        <span>{parts[4]}</span>
                      </li>
                    </ul>

                    <div className="mt-auto pt-2 border-t border-gray-100 text-[10px] text-brand-stone italic flex items-center gap-1.5">
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
                    className="bg-white rounded-xl shadow-lg p-4 flex flex-col relative overflow-hidden"
                  >
                    <div className="absolute top-2 right-4 text-4xl font-serif font-bold text-brand-cream opacity-50 pointer-events-none">02</div>
                    <div className="w-8 h-8 rounded-full bg-brand-cream flex items-center justify-center mb-3 text-brand-tan">
                      <TrendingUp size={16} />
                    </div>
                    <h3 className="text-base font-bold text-brand-dark mb-1">{parts[0]}</h3>
                    <div className="text-[10px] font-bold text-brand-tan uppercase tracking-wider mb-2">{parts[1]}</div>
                    <p className="text-brand-stone text-sm mb-3 leading-relaxed">{parts[2]}</p>
                    
                    <div className="space-y-2">
                      <div className="bg-blue-50 p-1.5 rounded-lg flex justify-between items-center border-l-4 border-blue-500">
                        <span className="font-bold text-brand-dark text-xs">{bar1[0]}</span>
                        <span className="bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">{bar1[1]}</span>
                      </div>
                      <div className="bg-green-50 p-1.5 rounded-lg flex justify-between items-center border-l-4 border-green-500">
                        <span className="font-bold text-brand-dark text-xs">{bar2[0]}</span>
                        <span className="bg-green-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">{bar2[1]}</span>
                      </div>
                      <div className="bg-amber-50 p-1.5 rounded-lg flex justify-between items-center border-l-4 border-brand-tan">
                        <span className="font-bold text-brand-dark text-xs">{bar3[0]}</span>
                        <span className="bg-brand-tan text-white text-[10px] font-bold px-1.5 py-0.5 rounded">{bar3[1]}</span>
                      </div>
                    </div>

                    {parts[6] && (
                      <div className="mt-auto pt-2 border-t border-gray-100 text-[10px] text-brand-stone italic flex items-start gap-1">
                        <span>{parts[6]}</span>
                      </div>
                    )}
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
                    className="bg-white rounded-xl shadow-lg p-4 flex flex-col relative overflow-hidden"
                  >
                    <div className="absolute top-2 right-4 text-4xl font-serif font-bold text-brand-cream opacity-50 pointer-events-none">03</div>
                    <div className="w-8 h-8 rounded-full bg-brand-cream flex items-center justify-center mb-3 text-brand-tan">
                      <Rocket size={16} />
                    </div>
                    <h3 className="text-base font-bold text-brand-dark mb-1">{parts[0]}</h3>
                    <div className="text-[10px] font-bold text-brand-tan uppercase tracking-wider mb-2">{parts[1]}</div>
                    <p className="text-brand-stone text-sm mb-3 leading-relaxed">{parts[2]}</p>
                    
                    <div className="bg-brand-dark text-brand-cream p-3 rounded-xl relative overflow-hidden">
                      <Star className="absolute -top-2 -right-2 text-brand-tan opacity-20" size={32} />
                      <div className="relative z-10">
                        {parts[3].startsWith('✓') ? (
                          <div className="flex items-start gap-1.5 mb-3">
                            <Check size={14} className="text-green-500 shrink-0 mt-0.5" />
                            <p className="text-xs leading-relaxed">{parts[3].replace('✓', '').trim()}</p>
                          </div>
                        ) : (
                          <>
                            <div className="text-brand-tan font-bold text-[11px] mb-0.5">Critério:</div>
                            <p className="text-xs mb-3 leading-relaxed">{parts[3].replace('Critério: ', '')}</p>
                          </>
                        )}
                        
                        <div className="flex items-start gap-1.5 mb-1.5">
                          <Gift size={14} className="text-yellow-500 shrink-0 mt-0.5" />
                          <p className="text-xs leading-relaxed">{parts[4].replace('Benefício: ', '')}</p>
                        </div>
                        
                        <div className="text-[10px] text-brand-gray border-t border-brand-gray/20 pt-1 mt-1">
                          {parts[5]}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-auto pt-2 text-[11px] text-brand-stone/80 font-medium italic flex items-start gap-1.5">
                       <div className="w-3 h-3 flex items-center justify-center mt-0.5">⚡</div>
                       <span>Todos podem progredir com o tempo. Os melhores progridem mais depressa.</span>
                    </div>
                  </motion.div>
                );
              })()}
            </div>

            {/* Horizontal Blocks */}
            {(currentSlide.content[3] || currentSlide.content[4]) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                {currentSlide.content[3] && (() => {
                  const parts = currentSlide.content[3].split('|').map(s => s.trim());
                  return (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="bg-white rounded-xl shadow-lg p-3 flex items-center gap-3 border-l-4 border-brand-dark"
                    >
                      <div className="w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center text-brand-cream shrink-0">
                        <Trophy size={16} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-bold text-brand-dark">{parts[0]}</h3>
                        <div className="text-[10px] font-bold text-brand-tan uppercase tracking-wider mb-1.5">{parts[1]}</div>
                        <div className="space-y-1">
                          {parts.slice(2).map((p, idx) => {
                            if (!p) return null;
                            const isCheck = p.startsWith('✓');
                            const isGift = p.startsWith('🎁');
                            const text = p.replace(/^(?:✓|🎁)\s*/, '');
                            
                            // Add extra top margin if this is the first gift after a checkmark
                            const isFirstGift = isGift && idx > 0 && parts[idx + 1].startsWith('✓');
                            
                            return (
                              <div key={idx} className={`flex items-start gap-1 text-[11px] text-brand-stone ${isFirstGift ? 'mt-2' : ''}`}>
                                {isCheck && <Check size={12} className="text-green-500 shrink-0 mt-0.5" />}
                                {isGift && <Gift size={12} className="text-yellow-500 shrink-0 mt-0.5" />}
                                {!isCheck && !isGift && <span className="w-3 shrink-0" />}
                                <span className={isGift ? "font-medium text-brand-dark" : ""}>
                                  {text.split('✓').map((segment, i) => (
                                    <React.Fragment key={i}>
                                      {i > 0 && <Check size={12} className="inline text-green-500 mx-0.5 align-text-bottom" />}
                                      {segment}
                                    </React.Fragment>
                                  ))}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  );
                })()}

                {currentSlide.content[4] && (() => {
                  const parts = currentSlide.content[4].split('|').map(s => s.trim());
                  return (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="bg-white rounded-xl shadow-lg p-3 flex items-center gap-3 border-l-4 border-brand-tan"
                    >
                      <div className="w-8 h-8 rounded-full bg-brand-tan flex items-center justify-center text-white shrink-0">
                        <Sparkles size={16} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-bold text-brand-dark">{parts[0]}</h3>
                        <div className="text-[10px] font-bold text-brand-tan uppercase tracking-wider mb-1">{parts[1]}</div>
                        <p className="text-[11px] text-brand-stone leading-relaxed">{parts[2]}</p>
                      </div>
                    </motion.div>
                  );
                })()}
              </div>
            )}
          </div>
        );
      case 'rules':
        return (
          <div className="flex flex-col h-full p-6 md:p-8 relative z-10">
            <div className="flex items-baseline gap-4 mb-6 border-b border-brand-tan/30 pb-3">
               <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl md:text-3xl font-serif font-bold text-brand-dark"
              >
                {currentSlide.title}
              </motion.h2>
              <span className="text-brand-stone uppercase tracking-widest text-xs">DIRETRIZES DO PLANO</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 h-full">
              {currentSlide.content.map((item, i) => {
                const parts = item.split('|').map(s => s.trim());
                const title = parts[0];
                const subtitle = parts[1];
                const text = parts[2];
                const footer = parts[3]; // Optional footer

                // Config for each card
                const config = [
                  { color: 'border-gray-600', icon: <Armchair size={18} />, iconBg: 'bg-gray-600' },
                  { color: 'border-yellow-500', icon: <Scale size={18} />, iconBg: 'bg-yellow-500' },
                  { color: 'border-red-500', icon: <Lock size={18} />, iconBg: 'bg-red-500' },
                  { color: 'border-blue-500', icon: <ArrowLeftRight size={18} />, iconBg: 'bg-blue-500' },
                  { color: 'border-[#c49874]', icon: <ArrowUp size={18} />, iconBg: 'bg-[#c49874]' },
                ][i] || { color: 'border-gray-500', icon: <CheckCircle size={18} />, iconBg: 'bg-gray-500' };

                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className={`bg-white rounded-xl shadow-lg p-4 flex flex-col min-h-[280px] border-t-8 ${config.color} relative overflow-hidden`}
                  >
                    {title === 'Mobilidade' && (
                      <div className="absolute top-4 right-[-24px] transform rotate-[30deg] border-2 border-green-500 text-green-500 font-bold text-[9px] py-0.5 px-6 uppercase tracking-widest opacity-80 bg-white">
                        Se Aplicável
                      </div>
                    )}
                    <div className={`w-8 h-8 rounded-lg ${config.iconBg} flex items-center justify-center mb-3 text-white shadow-sm`}>
                      {config.icon}
                    </div>
                    
                    <h3 className="text-base font-bold text-brand-dark mb-1 leading-tight">{title}</h3>
                    <div className="text-[9px] font-bold text-brand-stone/60 uppercase tracking-wider mb-3">{subtitle}</div>
                    
                    <div className="text-brand-stone text-sm leading-relaxed mb-3 flex-grow">
                      {text.split('\n').map((line, lineIndex) => (
                        <React.Fragment key={lineIndex}>
                          {line.trim().startsWith('✓') ? (
                            <div className="flex items-start gap-1 mt-1">
                              <Check size={12} className="text-green-500 shrink-0 mt-0.5" />
                              <span>{line.replace('✓', '').trim()}</span>
                            </div>
                          ) : (
                            <span className={lineIndex > 0 ? "block mt-1.5" : ""}>{line}</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                    
                    {footer && (
                      <div className="pt-3 border-t border-gray-100 mt-auto">
                        <div className="flex gap-1.5 items-start">
                          {footer.includes('Benefício') && <Gift size={12} className="text-yellow-600 mt-0.5 shrink-0" />}
                          {footer.includes('Contrapartida') && <Handshake size={12} className="text-yellow-600 mt-0.5 shrink-0" />}
                          {footer.includes('Penalização') && <Ban size={12} className="text-red-500 mt-0.5 shrink-0" />}
                          {footer.includes('Prémio') && <Percent size={12} className="text-[#c49874] mt-0.5 shrink-0" />}
                          <p className="text-xs text-brand-gray leading-tight">
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
            
            <div className="mt-4 flex justify-end items-center text-[10px] text-brand-stone/60 font-sans">
               <div className="flex items-center gap-1.5">
                 <CheckCircle size={10} className="text-brand-tan" />
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
                  if (sect.includes('Food') || sect.includes('Cozinha')) return <Utensils size={20} />;
                  if (sect.includes('Copa')) return <Coffee size={20} />;
                  if (sect.includes('Armazém')) return <Package size={20} />;
                  if (sect.includes('Manutenção')) return <Wrench size={20} />;
                  if (sect.includes('HouseKeeping') || sect.includes('Higiene')) return <Sparkles size={20} />;
                  if (sect.includes('Mesas')) return <ConciergeBell size={20} />;
                  if (sect.includes('Drinks') || sect.includes('Bar')) return <Wine size={20} />;
                  if (sect.includes('Controlo')) return <ClipboardCheck size={20} />;
                  if (sect.includes('Felicidade')) return <HeartHandshake size={20} />;
                  if (sect.includes('Direção Operacional')) return <Briefcase size={20} />;
                  if (sect.includes('Direção Corporativa')) return <Building size={20} />;
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
                    <div 
                      className={`col-span-3 flex items-center gap-3 ${onNavigateToSector ? 'cursor-pointer group' : ''}`}
                      onClick={() => onNavigateToSector && onNavigateToSector(sector, currentSlideIndex)}
                    >
                      <div className={`w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center text-brand-tan shrink-0 ${onNavigateToSector ? 'group-hover:bg-brand-tan group-hover:text-white transition-colors' : ''}`}>
                        {getIcon(sector)}
                      </div>
                      <div>
                        <div className={`font-bold text-brand-dark text-lg leading-tight ${onNavigateToSector ? 'group-hover:text-brand-tan transition-colors flex items-center gap-1' : ''}`}>
                          {sector}
                          {onNavigateToSector && (
                            <ArrowUp size={14} className="rotate-45 opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </div>
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
                      <div className={`text-brand-tan font-bold mb-1 leading-tight ${endRole.length > 40 ? 'text-[11px] tracking-tight' : 'text-sm'} ${sector.includes('Manutenção') ? 'whitespace-nowrap' : 'whitespace-pre-line'}`}>{endRole}</div>
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
                className="text-2xl md:text-3xl font-serif font-bold text-brand-dark uppercase"
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
                className="mb-4 bg-brand-cream/50 p-3 rounded-lg border border-brand-tan/20"
              >
                <div className="text-xs font-bold text-brand-tan uppercase tracking-wider mb-1">
                  {currentSlide.content[0].split(':')[0]}
                </div>
                <div className="text-brand-dark text-base font-medium flex gap-4">
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
            <div className="overflow-hidden bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col min-h-0">
              {/* Header */}
              <div className="bg-brand-dark text-white grid grid-cols-12 gap-3 px-4 py-2 text-xs font-bold uppercase tracking-wider shrink-0">
                {currentSlide.content[1]?.split('|').map((header, i) => {
                  const numCols = currentSlide.content[1].split('|').length;
                  let span = 'col-span-2';
                  if (numCols === 6) {
                    if (i === 0) span = 'col-span-2';
                    else if (i === 1) span = 'col-span-3';
                    else if (i === 2) span = 'col-span-1 text-center';
                    else if (i === 3) span = 'col-span-2 text-center';
                    else if (i === 4) span = 'col-span-2 text-center';
                    else if (i === 5) span = 'col-span-2 text-center';
                  } else {
                    if (i === 0) span = 'col-span-2';
                    else if (i === 1) span = 'col-span-4';
                    else if (i === 2) span = 'col-span-2 text-center';
                    else if (i === 3) span = 'col-span-2 text-center';
                    else if (i === 4) span = 'col-span-2 text-center';
                  }
                  return (
                    <div key={i} className={span}>
                      {header.trim()}
                    </div>
                  );
                })}
              </div>

              {/* Rows */}
              <div className="overflow-y-auto">
                {currentSlide.content.slice(2).map((row, rowIndex) => {
                  const cells = row.split('|').map(c => c.trim());
                  const numCols = cells.length;
                  return (
                    <motion.div 
                      key={rowIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * rowIndex }}
                      className={`grid grid-cols-12 gap-3 px-4 py-2 border-b border-gray-50 text-sm items-center hover:bg-brand-cream/10 transition-colors ${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                    >
                      {numCols === 6 ? (
                        <>
                          <div className="col-span-2 font-bold text-brand-tan leading-tight">
                            {cells[0].includes('(') ? (
                              <>
                                <div>{cells[0].split('(')[0].trim()}</div>
                                <div className="text-[10px] font-normal opacity-80 mt-1">({cells[0].split('(')[1]}</div>
                              </>
                            ) : (
                              cells[0]
                            )}
                          </div>
                          <div className="col-span-3 font-medium text-brand-dark whitespace-pre-line">{cells[1]}</div>
                          <div className="col-span-1 text-center">
                            <span className="bg-brand-dark/5 text-brand-dark px-2 py-1 rounded text-xs font-bold border border-brand-dark/10">
                              {cells[2]}
                            </span>
                          </div>
                          <div className="col-span-2 text-center text-brand-stone text-sm">{cells[3]}</div>
                          <div className="col-span-2 text-center font-mono text-sm text-brand-gray">{cells[4]}</div>
                          <div className="col-span-2 text-center font-mono text-sm font-bold text-brand-dark">{cells[5]}</div>
                        </>
                      ) : (
                        <>
                          <div className="col-span-2 font-bold text-brand-tan leading-tight">
                            {cells[0].includes('(') ? (
                              <>
                                <div>{cells[0].split('(')[0].trim()}</div>
                                <div className="text-[10px] font-normal opacity-80 mt-1">({cells[0].split('(')[1]}</div>
                              </>
                            ) : (
                              cells[0]
                            )}
                          </div>
                          <div className="col-span-4 font-medium text-brand-dark whitespace-pre-line">{cells[1]}</div>
                          <div className="col-span-2 text-center">
                            <span className="bg-brand-dark/5 text-brand-dark px-2 py-1 rounded text-sm font-bold border border-brand-dark/10">
                              {cells[2]}
                            </span>
                          </div>
                          <div className="col-span-2 text-center text-brand-stone text-sm">{cells[3]}</div>
                          <div className="col-span-2 text-center font-mono text-sm text-brand-gray">{cells[4]}</div>
                        </>
                      )}
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
              className="text-3xl md:text-5xl font-serif italic text-brand-dark leading-tight max-w-6xl whitespace-pre-line"
            >
              "{currentSlide.content[0]}"
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
      {/* Top Header */}
      <div className="h-16 flex items-center px-6 border-b border-white/10 shrink-0 z-50">
        <button 
          onClick={onClose} 
          className="flex items-center gap-2 px-4 py-2 bg-white/5 text-brand-cream rounded-full hover:bg-white/10 transition-colors border border-white/10 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-serif font-bold text-sm tracking-wide">Sair da Apresentação</span>
        </button>
        
        <div className="flex-1 text-center hidden md:block">
          <span className="text-brand-cream/40 text-[10px] uppercase tracking-[0.4em] font-sans">
            Kailua Journey • Plano de Carreira 2026
          </span>
        </div>

        <div className="flex items-center gap-4 w-[180px] justify-end">
           <div className="text-brand-cream/60 text-xs font-mono">
             {currentSlideIndex + 1} / {slides.length}
           </div>
        </div>
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
