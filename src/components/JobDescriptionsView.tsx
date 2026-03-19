import React, { useState } from 'react';
import { ArrowLeft, FileText, ChevronRight, Utensils, Coffee, Package, Wrench, Sparkles, ConciergeBell, Wine, ClipboardCheck, HeartHandshake, Briefcase, Building, Layers, Award, CheckCircle2, Ban } from 'lucide-react';
import { functionalProfilesData, Sector, FunctionalProfile } from '../data/functionalProfiles';

const getSectorIcon = (sect: string, size = 24) => {
  if (sect.includes('Food') || sect.includes('Cozinha')) return <Utensils size={size} />;
  if (sect.includes('Copa')) return <Coffee size={size} />;
  if (sect.includes('Armazém')) return <Package size={size} />;
  if (sect.includes('Manutenção')) return <Wrench size={size} />;
  if (sect.includes('Housekeeping') || sect.includes('Higiene')) return <Sparkles size={size} />;
  if (sect.includes('Mesas')) return <ConciergeBell size={size} />;
  if (sect.includes('Drinks') || sect.includes('Bar')) return <Wine size={size} />;
  if (sect.includes('Controlo')) return <ClipboardCheck size={size} />;
  if (sect.includes('Felicidade')) return <HeartHandshake size={size} />;
  if (sect.includes('Direção Operacional') || sect.includes('Operação da Frente')) return <Briefcase size={size} />;
  if (sect.includes('Corporativo')) return <Building size={size} />;
  return <Layers size={size} />;
};

interface JobDescriptionsViewProps {
  onBack: () => void;
  initialSectorName?: string;
}

export const JobDescriptionsView: React.FC<JobDescriptionsViewProps> = ({ onBack, initialSectorName }) => {
  const [showIntro, setShowIntro] = useState(!initialSectorName);
  const [selectedSector, setSelectedSector] = useState<Sector | null>(() => {
    if (initialSectorName) {
      return functionalProfilesData.find(s => 
        s.name.toLowerCase() === initialSectorName.toLowerCase() ||
        s.name.includes(initialSectorName) ||
        initialSectorName.includes(s.name)
      ) || null;
    }
    return null;
  });
  const [selectedRole, setSelectedRole] = useState<FunctionalProfile | null>(null);

  const handleBack = () => {
    if (selectedRole) {
      setSelectedRole(null);
    } else if (selectedSector) {
      if (initialSectorName) {
        onBack();
      } else {
        setSelectedSector(null);
      }
    } else if (!showIntro) {
      setShowIntro(true);
    } else {
      onBack();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-brand-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-dark via-transparent to-brand-dark pointer-events-none" />

      {/* Header */}
      <div className="h-16 flex items-center px-6 border-b border-white/10 shrink-0 z-50 bg-brand-dark/80 backdrop-blur-md relative">
        <div className="flex items-center gap-4">
          <button 
            onClick={handleBack}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 text-brand-cream rounded-full hover:bg-white/10 transition-colors border border-white/10 group"
            title="Voltar"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-serif font-bold text-sm tracking-wide">
              {selectedRole ? 'Voltar aos Cargos' : selectedSector ? (initialSectorName ? 'Voltar à Apresentação' : 'Voltar aos Setores') : 'Voltar'}
            </span>
          </button>
          
          <div className="h-6 w-px bg-white/10 mx-2" />
          
          <h2 className="text-lg font-serif font-bold text-brand-cream tracking-tight">
            {selectedRole ? selectedRole.title : selectedSector ? selectedSector.name : 'Perfis Funcionais'}
          </h2>
        </div>

        <div className="flex-1 text-center hidden md:block">
          <span className="text-brand-cream/40 text-[10px] uppercase tracking-[0.4em] font-sans">
            Kailua Journey • Perfis Funcionais
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 z-10 relative">
        <div className="max-w-4xl mx-auto">
          
          {showIntro && !selectedSector && !selectedRole && (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center max-w-3xl mx-auto">
              <img 
                src="https://imgur.com/yykIOZ8.png" 
                alt="Kailua Logo" 
                className="h-24 mx-auto mb-8 object-contain mix-blend-screen opacity-90"
                referrerPolicy="no-referrer"
              />
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-brand-cream mb-8">
                Perfis Funcionais
              </h1>
              <p className="text-brand-stone text-lg md:text-xl font-light leading-relaxed mb-6">
                Em cada gesto, palavra e detalhe, deixamos a nossa marca. Seja qual for a função, todos contribuimos para a experiência do cliente através do cuidado com a nossa imagem, da limpeza e higiene, da comunicação atenta e de um serviço feito com excelência.
              </p>
              <p className="text-brand-cream text-xl md:text-2xl font-serif font-medium mb-12">
                É assim que se constroem experiências memoráveis e de confiança!
              </p>
              <button
                onClick={() => setShowIntro(false)}
                className="bg-brand-tan text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-brand-dark hover:text-brand-tan border border-transparent hover:border-brand-tan transition-all duration-300 shadow-lg hover:shadow-brand-tan/20 flex items-center gap-2"
              >
                Avançar <ChevronRight size={20} />
              </button>
            </div>
          )}

          {!showIntro && !selectedSector && !selectedRole && (
            <>
              <div className="mb-8 text-center">
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-cream mb-4">
                  Perfis Funcionais
                </h1>
                <p className="text-brand-stone text-lg max-w-2xl mx-auto font-light">
                  Seleciona um setor para consultar os perfis funcionais disponíveis.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...functionalProfilesData].sort((a, b) => a.name.localeCompare(b.name)).map((sector) => (
                  <button
                    key={sector.name}
                    onClick={() => setSelectedSector(sector)}
                    className="bg-brand-cream p-6 rounded-xl shadow-lg hover:shadow-brand-tan/20 transition-all duration-300 hover:-translate-y-1 flex items-center justify-between group text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-brand-tan/10 flex items-center justify-center text-brand-tan group-hover:bg-brand-tan group-hover:text-white transition-colors">
                        {getSectorIcon(sector.name)}
                      </div>
                      <span className="text-lg font-bold text-brand-dark group-hover:text-brand-tan transition-colors">
                        {sector.name}
                      </span>
                    </div>
                    <ChevronRight size={20} className="text-brand-tan opacity-50 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>

              {/* Guarantee Seal Block */}
              <div className="mt-8 bg-brand-cream rounded-xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full border border-brand-tan/20">
                <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-brand-tan/10 flex items-center justify-center overflow-hidden border-4 border-brand-tan/20">
                  <img 
                    src="https://imgur.com/PzI9Wbw.png" 
                    alt="Selo de Garantia" 
                    className="w-full h-full object-contain p-2"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 text-left">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-brand-stone">
                      <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                      <span>Higiene pessoal assegurada.</span>
                    </li>
                    <li className="flex items-start gap-3 text-brand-stone">
                      <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                      <span>Fragrância discreta.</span>
                    </li>
                    <li className="flex items-start gap-3 text-brand-stone">
                      <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                      <span>Cabelo preso.</span>
                    </li>
                    <li className="flex items-start gap-3 text-brand-stone">
                      <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                      <span>Unhas curtas e bem apresentadas.</span>
                    </li>
                    <li className="flex items-start gap-3 text-brand-stone">
                      <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                      <span>Uso exclusivo da respetiva farda e em estado exemplar.</span>
                    </li>
                    <li className="flex items-start gap-3 text-brand-stone">
                      <Ban className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                      <span>Calças, calções, saias sem rasgos.</span>
                    </li>
                    <li className="flex items-start gap-3 text-brand-stone">
                      <Ban className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                      <span>Roupa desportiva ou de banho.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}

          {selectedSector && !selectedRole && (
            <>
              <div className="mb-8 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-brand-tan/20 flex items-center justify-center text-brand-tan">
                  {getSectorIcon(selectedSector.name, 32)}
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-cream mb-2">
                    {selectedSector.name}
                  </h1>
                  <p className="text-brand-stone text-lg font-light">
                    Seleciona um perfil funcional para ver os detalhes.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedSector.roles.map((role) => (
                  <button
                    key={role.title}
                    onClick={() => setSelectedRole(role)}
                    className="bg-brand-cream p-6 rounded-xl shadow-lg hover:shadow-brand-tan/20 transition-all duration-300 hover:-translate-y-1 flex items-center justify-between group text-left"
                  >
                    <span className="text-lg font-bold text-brand-dark group-hover:text-brand-tan transition-colors">
                      {role.title}
                    </span>
                    <ChevronRight size={20} className="text-brand-tan opacity-50 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </>
          )}

          {selectedRole && (
            <div className="bg-brand-cream rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-brand-tan p-6 md:p-8 text-white flex justify-between items-start gap-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-serif font-bold mb-2">
                    {selectedRole.title}
                  </h1>
                  <p className="text-white/90 text-sm md:text-base font-light">
                    {selectedSector?.name}
                  </p>
                </div>
                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full p-1 backdrop-blur-sm shadow-inner">
                  <img 
                    src="https://imgur.com/PzI9Wbw.png" 
                    alt="Selo de Garantia" 
                    className="w-full h-full object-contain drop-shadow-md"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              
              <div className="p-6 md:p-8 space-y-8">
                <section>
                  <h3 className="text-xl font-bold text-brand-dark mb-3 border-b border-brand-stone/20 pb-2">
                    Missão
                  </h3>
                  <p className="text-brand-stone leading-relaxed">
                    {selectedRole.mission}
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-brand-dark mb-3 border-b border-brand-stone/20 pb-2">
                    Responsabilidades-chave
                  </h3>
                  <ul className="list-disc list-inside text-brand-stone space-y-2 ml-4">
                    {selectedRole.responsibilities.map((resp, idx) => (
                      <li key={idx} className="leading-relaxed">{resp}</li>
                    ))}
                  </ul>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <section>
                    <h3 className="text-xl font-bold text-brand-dark mb-3 border-b border-brand-stone/20 pb-2">
                      Competências Técnicas
                    </h3>
                    <ul className="list-disc list-inside text-brand-stone space-y-2 ml-4">
                      {selectedRole.technicalSkills.map((skill, idx) => (
                        <li key={idx} className="leading-relaxed">{skill}</li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-brand-dark mb-3 border-b border-brand-stone/20 pb-2">
                      Competências Comportamentais
                    </h3>
                    <ul className="list-disc list-inside text-brand-stone space-y-2 ml-4">
                      {selectedRole.behavioralSkills.map((skill, idx) => (
                        <li key={idx} className="leading-relaxed">{skill}</li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
