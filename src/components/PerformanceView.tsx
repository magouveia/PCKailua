import React, { useState } from 'react';
import { ArrowLeft, Home, ChevronRight, Utensils, Coffee, Package, Wrench, Sparkles, ConciergeBell, Wine, ClipboardCheck, HeartHandshake, Briefcase, Building, Layers, Goal, CheckCircle2, Send, Users } from 'lucide-react';
import { functionalProfilesData, Sector, FunctionalProfile } from '../data/functionalProfiles';
import { performanceIntro, performanceCriteriaData } from '../data/performanceCriteria';

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

interface PerformanceViewProps {
  onBack: () => void;
  onHome: () => void;
}

export const PerformanceView: React.FC<PerformanceViewProps> = ({ onBack, onHome }) => {
  const [showSectorSelection, setShowSectorSelection] = useState(false);
  const [selectedSector, setSelectedSector] = useState<Sector | null>(null);
  const [selectedRole, setSelectedRole] = useState<FunctionalProfile | null>(null);

  // Form state
  const [employeeName, setEmployeeName] = useState('');
  const [evaluatorName, setEvaluatorName] = useState('');
  const [evaluationType, setEvaluationType] = useState<'auto' | 'leader'>('leader');
  const [quarter, setQuarter] = useState<string>('1º Trimestre');
  const [scores, setScores] = useState<Record<string, number>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string, url?: string } | null>(null);

  const handleBack = () => {
    if (selectedRole) {
      setSelectedRole(null);
      setScores({});
      setEmployeeName('');
      setEvaluatorName('');
      setSubmitMessage(null);
    } else if (selectedSector) {
      setSelectedSector(null);
    } else if (showSectorSelection) {
      setShowSectorSelection(false);
    } else {
      onBack();
    }
  };

  const currentCriteria = selectedRole ? performanceCriteriaData.find(c => c.title === selectedRole.title) : null;

  const handleScoreChange = (category: string, index: number, score: number) => {
    setScores(prev => ({
      ...prev,
      [`${category}-${index}`]: score
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentCriteria) return;

    if (!employeeName.trim() || (evaluationType === 'leader' && !evaluatorName.trim())) {
      setSubmitMessage({ 
        type: 'error', 
        text: evaluationType === 'leader' ? 'Por favor, preenche o nome do colaborador e do líder.' : 'Por favor, preenche o nome do colaborador.' 
      });
      return;
    }

    const totalQuestions = 1 + currentCriteria.technical.length + currentCriteria.behavioral.length;
    const answeredQuestions = Object.keys(scores).length;

    if (answeredQuestions < totalQuestions) {
      setSubmitMessage({ 
        type: 'error', 
        text: `Por favor, avalia todos os critérios. Faltam ${totalQuestions - answeredQuestions} critérios por avaliar.` 
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch('/api/evaluate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          employeeName,
          evaluatorName: evaluationType === 'auto' ? 'Autoavaliação' : evaluatorName,
          evaluationType: evaluationType === 'auto' ? 'Autoavaliação' : 'Avaliação (Líder)',
          quarter,
          roleTitle: selectedRole?.title,
          sectorName: selectedSector?.name,
          scores,
          criteria: currentCriteria
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage({ 
          type: 'success', 
          text: data.message,
          url: data.previewUrl 
        });
        
        setTimeout(() => {
          onBack();
        }, 3500);
      } else {
        setSubmitMessage({ type: 'error', text: data.error || 'Erro ao enviar avaliação.' });
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitMessage({ type: 'error', text: 'Erro de ligação ao servidor.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderScoreButtons = (category: string, index: number) => (
    <div className="flex gap-2 mt-3">
      {[1, 2, 3, 4].map(score => (
        <button
          key={score}
          type="button"
          onClick={() => handleScoreChange(category, index, score)}
          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
            scores[`${category}-${index}`] === score 
              ? 'bg-brand-tan text-white shadow-md scale-110' 
              : 'bg-brand-tan/10 text-brand-tan hover:bg-brand-tan/20'
          }`}
        >
          {score}
        </button>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col h-screen bg-brand-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-dark via-transparent to-brand-dark pointer-events-none" />

      {/* Header */}
      <div className="h-16 flex items-center px-6 border-b border-white/10 shrink-0 z-50 bg-brand-dark/80 backdrop-blur-md relative">
        <div className="flex items-center gap-2">
          <button 
            onClick={onHome}
            className="flex items-center justify-center w-10 h-10 bg-white/5 text-brand-cream rounded-full hover:bg-white/10 transition-colors border border-white/10 group"
            title="Início"
          >
            <Home size={18} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
          
          {(!(!showSectorSelection && !selectedSector && !selectedRole)) && (
            <button 
              onClick={handleBack}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 text-brand-cream rounded-full hover:bg-white/10 transition-colors border border-white/10 group"
              title="Voltar"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-serif font-bold text-sm tracking-wide">
                {selectedRole ? 'Funções' : selectedSector ? 'Setores' : 'Voltar'}
              </span>
            </button>
          )}
          
          <div className="h-6 w-px bg-white/10 mx-2" />
          
          <h2 className="text-lg font-serif font-bold text-brand-cream tracking-tight">
            {selectedRole ? selectedRole.title : selectedSector ? selectedSector.name : 'Avaliação de Desempenho'}
          </h2>
        </div>

        <div className="flex-1 text-center hidden md:block">
          <span className="text-brand-cream/40 text-[10px] uppercase tracking-[0.4em] font-sans">
            Kailua Journey • Avaliação de Desempenho
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 z-10 relative">
        <div className="max-w-4xl mx-auto">
          
          {!showSectorSelection && !selectedSector && !selectedRole && (
            <>
              <div className="mb-8 text-center">
                <img 
                  src="https://imgur.com/yykIOZ8.png" 
                  alt="Kailua Logo" 
                  className="h-24 mx-auto mb-6 object-contain mix-blend-screen opacity-90"
                  referrerPolicy="no-referrer"
                />
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-cream mb-4">
                  Avaliação de Desempenho
                </h1>
                <p className="text-brand-stone text-lg max-w-4xl mx-auto font-light whitespace-pre-line mb-8">
                  {performanceIntro.objective}
                </p>
              </div>

              {/* Intro Tables */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-brand-cream rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-brand-dark mb-4 border-b border-brand-tan/20 pb-2">Escala de avaliação</h3>
                  <div className="space-y-3">
                    {performanceIntro.scale.map(s => (
                      <div key={s.level} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-tan/20 flex items-center justify-center text-brand-tan font-bold shrink-0">
                          {s.level}
                        </div>
                        <div>
                          <div className="font-bold text-brand-dark">{s.name}</div>
                          <div className="text-sm text-brand-stone">{s.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-brand-cream rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-brand-dark mb-4 border-b border-brand-tan/20 pb-2">Tipos de critérios avaliados</h3>
                  <div className="space-y-4">
                    {performanceIntro.criteriaTypes.map(c => (
                      <div key={c.type}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-bold text-brand-dark">{c.type}</span>
                          <span className="text-brand-tan font-bold bg-brand-tan/10 px-2 py-0.5 rounded text-sm">{c.weight}</span>
                        </div>
                        <div className="text-sm text-brand-stone">{c.description}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-brand-tan/20 text-sm text-brand-stone italic">
                    {performanceIntro.calculation}
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={() => setShowSectorSelection(true)}
                  className="bg-brand-tan text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest shadow-lg hover:bg-brand-dark hover:text-brand-tan border border-transparent hover:border-brand-tan transition-all duration-300 flex items-center gap-2"
                >
                  Avançar <ChevronRight size={20} />
                </button>
              </div>
            </>
          )}

          {showSectorSelection && !selectedSector && !selectedRole && (
            <>
              <h2 className="text-2xl font-serif font-bold text-brand-cream mb-2 text-center">
                Seleciona um setor
              </h2>
              <p className="text-brand-stone text-center mb-8">
                Seleciona um setor para consultar os questionários de avaliação de desempenho de cada função.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...functionalProfilesData].sort((a, b) => a.name.localeCompare(b.name)).map((sector) => (
                  <button
                    key={sector.name}
                    onClick={() => setSelectedSector(sector)}
                    className="bg-brand-cream p-6 rounded-xl shadow-lg hover:shadow-brand-tan/20 transition-all duration-300 hover:-translate-y-1 flex items-center justify-between group text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-brand-tan/10 flex items-center justify-center text-brand-tan group-hover:bg-brand-tan group-hover:text-white transition-colors shrink-0">
                        {getSectorIcon(sector.name)}
                      </div>
                      <span className="text-lg font-bold text-brand-dark group-hover:text-brand-tan transition-colors">
                        {sector.name}
                      </span>
                    </div>
                    <ChevronRight size={20} className="text-brand-tan opacity-50 group-hover:opacity-100 transition-opacity shrink-0" />
                  </button>
                ))}
              </div>
            </>
          )}

          {selectedSector && !selectedRole && (
            <div className="animate-fade-in">
              <div className="mb-8 text-center">
                <div className="w-20 h-20 rounded-full bg-brand-tan/10 flex items-center justify-center text-brand-tan mx-auto mb-4">
                  {getSectorIcon(selectedSector.name, 40)}
                </div>
                <h2 className="text-3xl font-serif font-bold text-brand-cream mb-2">
                  {selectedSector.name}
                </h2>
                <p className="text-brand-stone text-lg">
                  Seleciona a função para preencher o questionário de avaliação de desempenho.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedSector.roles.map((profile) => (
                  <button
                    key={profile.title}
                    onClick={() => setSelectedRole(profile)}
                    className="bg-brand-cream p-6 rounded-xl shadow-lg hover:shadow-brand-tan/20 transition-all duration-300 hover:-translate-y-1 flex items-center justify-between group text-left"
                  >
                    <span className="text-lg font-bold text-brand-dark group-hover:text-brand-tan transition-colors">
                      {profile.title}
                    </span>
                    <ChevronRight size={20} className="text-brand-tan opacity-50 group-hover:opacity-100 transition-opacity shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedRole && (
            <div className="animate-fade-in">
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-brand-tan/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-tan">
                  <Goal size={40} />
                </div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-cream mb-4">
                  {selectedRole.title}
                </h1>
                <p className="text-brand-stone text-lg font-light">
                  Questionário de Avaliação de Desempenho
                </p>
              </div>

              {currentCriteria ? (
                <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in">
                  {/* Identificação */}
                  <div className="bg-brand-cream rounded-2xl p-6 md:p-8 shadow-xl border border-brand-tan/10">
                    <h2 className="text-2xl font-serif font-bold text-brand-dark mb-6 border-b border-brand-tan/20 pb-4">Identificação</h2>
                    
                    <div className="mb-6 space-y-6">
                      {/* Trimestres */}
                      <div>
                        <label className="block text-brand-stone text-sm font-bold mb-3 uppercase tracking-wider">Período de Avaliação</label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {['1º Trimestre', '2º Trimestre', '3º Trimestre', '4º Trimestre'].map(q => (
                            <label key={q} className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-all ${quarter === q ? 'bg-brand-tan/10 border-brand-tan' : 'bg-white border-brand-stone/20 hover:border-brand-tan/50'}`}>
                              <input 
                                type="radio" 
                                name="quarter" 
                                value={q} 
                                checked={quarter === q}
                                onChange={(e) => setQuarter(e.target.value)}
                                className="w-4 h-4 text-brand-tan focus:ring-brand-tan/50" 
                              />
                              <span className="text-sm font-bold text-brand-dark">{q}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Tipo de Avaliação */}
                      <div>
                        <label className="block text-brand-stone text-sm font-bold mb-3 uppercase tracking-wider">Tipo de Avaliação</label>
                        <div className="flex flex-col md:flex-row gap-4">
                          <label className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all flex-1 ${evaluationType === 'auto' ? 'bg-brand-tan/10 border-brand-tan shadow-sm' : 'bg-white border-brand-stone/20 hover:border-brand-tan/50'}`}>
                            <input 
                              type="radio" 
                              name="evaluationType" 
                              value="auto" 
                              checked={evaluationType === 'auto'}
                              onChange={(e) => {
                                setEvaluationType('auto');
                                setEvaluatorName(''); // Clear evaluator name when switching to auto
                              }}
                              className="w-5 h-5 text-brand-tan focus:ring-brand-tan/50" 
                            />
                            <span className="text-base font-bold text-brand-dark">Autoavaliação</span>
                          </label>
                          <label className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all flex-1 ${evaluationType === 'leader' ? 'bg-brand-tan/10 border-brand-tan shadow-sm' : 'bg-white border-brand-stone/20 hover:border-brand-tan/50'}`}>
                            <input 
                              type="radio" 
                              name="evaluationType" 
                              value="leader" 
                              checked={evaluationType === 'leader'}
                              onChange={(e) => setEvaluationType('leader')}
                              className="w-5 h-5 text-brand-tan focus:ring-brand-tan/50" 
                            />
                            <span className="text-base font-bold text-brand-dark">Avaliação (pelo Líder)</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-brand-stone/10">
                      {evaluationType === 'leader' && (
                        <div className="md:col-span-2">
                          <label className="block text-brand-stone text-sm font-bold mb-2">Nome do Líder</label>
                          <input 
                            type="text" 
                            required
                            value={evaluatorName}
                            onChange={(e) => setEvaluatorName(e.target.value)}
                            className="w-full p-4 rounded-xl border border-brand-stone/20 bg-white focus:outline-none focus:ring-2 focus:ring-brand-tan/50 text-brand-dark font-medium"
                            placeholder="Insira o nome do líder..."
                          />
                        </div>
                      )}
                      <div className="md:col-span-2">
                        <label className="block text-brand-stone text-sm font-bold mb-2">Nome do Colaborador</label>
                        <input 
                          type="text" 
                          required
                          value={employeeName}
                          onChange={(e) => setEmployeeName(e.target.value)}
                          className="w-full p-4 rounded-xl border border-brand-stone/20 bg-white focus:outline-none focus:ring-2 focus:ring-brand-tan/50 text-brand-dark font-medium"
                          placeholder="Insira o nome do colaborador..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Best Practices for Leaders */}
                  {evaluationType === 'leader' && (
                    <div className="bg-brand-cream rounded-2xl p-6 md:p-8 shadow-xl border border-brand-tan/10 mb-8 animate-fade-in relative overflow-hidden">
                      <div className="absolute inset-0 bg-dot-pattern opacity-5 pointer-events-none" />
                      <h2 className="text-2xl font-serif font-bold text-center mb-6 text-brand-dark">
                        Boas práticas para uma avaliação consistente
                      </h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 rounded-xl overflow-hidden shadow-lg mb-8">
                        {/* Level 1 */}
                        <div className="bg-brand-dark p-6 text-white flex flex-col">
                          <div className="text-5xl font-bold mb-3 opacity-90 tracking-tighter">1</div>
                          <div className="mb-4">
                            <h3 className="font-bold text-sm uppercase tracking-wide leading-tight">INCUMPRIDOR</h3>
                            <p className="text-xs font-medium opacity-90 mt-1">(não faz / faz mal / cria problemas)</p>
                          </div>
                          <ul className="text-xs opacity-90 space-y-1.5 list-disc ml-4 mb-6 flex-1 font-medium">
                            <li>Não cumpre o critério</li>
                            <li>Comete erros frequentes</li>
                            <li>Precisa de correção constante</li>
                            <li>Impacta negativamente a operação</li>
                          </ul>
                          <div className="bg-black/15 p-3 rounded-lg text-xs font-semibold flex gap-2 items-start mt-auto">
                            <span className="text-white shrink-0">✔</span>
                            <span>Usar quando: "Não posso confiar que isto esteja bem feito"</span>
                          </div>
                        </div>

                        {/* Level 2 */}
                        <div className="bg-brand-stone p-6 text-white flex flex-col md:border-l border-white/10">
                          <div className="text-5xl font-bold mb-3 opacity-90 tracking-tighter">2</div>
                          <div className="mb-4">
                            <h3 className="font-bold text-sm uppercase tracking-wide leading-tight">CUMPRIDOR</h3>
                            <p className="text-xs font-medium opacity-90 mt-1">(faz o mínimo, mas sem consistência)</p>
                          </div>
                          <ul className="text-xs opacity-90 space-y-1.5 list-disc ml-4 mb-6 flex-1 font-medium">
                            <li>Cumpre de forma irregular</li>
                            <li>Precisa de supervisão</li>
                            <li>Falha quando há pressão</li>
                            <li>Não antecipa nem resolve</li>
                          </ul>
                          <div className="bg-black/15 p-3 rounded-lg text-xs font-semibold flex gap-2 items-start mt-auto">
                            <span className="text-white shrink-0">✔</span>
                            <span>Usar quando: "Às vezes faz bem, mas não é fiável"</span>
                          </div>
                        </div>

                        {/* Level 3 */}
                        <div className="bg-brand-gray p-6 text-white flex flex-col md:border-l border-white/10">
                          <div className="text-5xl font-bold mb-3 opacity-90 tracking-tighter">3</div>
                          <div className="mb-4">
                            <h3 className="font-bold text-sm uppercase tracking-wide leading-tight">BOM</h3>
                            <p className="text-xs font-medium opacity-90 mt-1">(faz bem e de forma consistente)</p>
                          </div>
                          <ul className="text-xs opacity-90 space-y-1.5 list-disc ml-4 mb-6 flex-1 font-medium">
                            <li>Cumpre sempre o que é esperado</li>
                            <li>Trabalha com autonomia</li>
                            <li>Mantém qualidade mesmo com pressão</li>
                            <li>Não precisa de ser acompanhado</li>
                          </ul>
                          <div className="bg-black/15 p-3 rounded-lg text-xs font-semibold flex gap-2 items-start mt-auto">
                            <span className="text-white shrink-0">✔</span>
                            <span>Usar quando: "Posso confiar — está sempre bem feito"</span>
                          </div>
                        </div>

                        {/* Level 4 */}
                        <div className="bg-brand-tan p-6 text-white flex flex-col md:border-l border-white/10">
                          <div className="text-5xl font-bold mb-3 opacity-90 tracking-tighter">4</div>
                          <div className="mb-4">
                            <h3 className="font-bold text-sm uppercase tracking-wide leading-tight">EXCELENTE</h3>
                            <p className="text-xs font-medium opacity-90 mt-1">(faz melhor do que o esperado e melhora a operação)</p>
                          </div>
                          <ul className="text-xs opacity-90 space-y-1.5 list-disc ml-4 mb-6 flex-1 font-medium">
                            <li>Vai além do que é pedido</li>
                            <li>Antecipa problemas e resolve antes de acontecerem</li>
                            <li>Melhora processos, organização ou resultados</li>
                            <li>Puxa pelo nível da equipa</li>
                          </ul>
                          <div className="bg-black/15 p-3 rounded-lg text-xs font-semibold flex gap-2 items-start mt-auto">
                            <span className="text-white shrink-0">✔</span>
                            <span>Usar quando: "Sem esta pessoa, a operação piorava"</span>
                          </div>
                        </div>
                      </div>

                      {/* Dicas Finais */}
                      <div className="bg-brand-tan/10 rounded-xl p-6 border border-brand-tan/20">
                        <h4 className="text-lg font-bold text-brand-dark text-left mb-6">📌 Dicas finais</h4>
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-brand-tan text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm">1</div>
                            <p className="text-sm text-brand-dark leading-relaxed"><strong className="uppercase tracking-wider">Não avaliar por simpatia</strong> (avalia o trabalho, não a pessoa)</p>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-brand-tan text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm">2</div>
                            <p className="text-sm text-brand-dark leading-relaxed"><strong className="uppercase tracking-wider">Não usar momentos isolados</strong> (um erro ou um bom dia não define a avaliação)</p>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-brand-tan text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm">3</div>
                            <p className="text-sm text-brand-dark leading-relaxed"><strong className="uppercase tracking-wider">Se tens dúvidas entre dois níveis</strong> (escolhe o mais baixo)</p>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-brand-tan text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm">4</div>
                            <p className="text-sm text-brand-dark leading-relaxed"><strong className="uppercase tracking-wider">O "3" é o normal</strong> ("4" é raro e tem de ser genuinamente merecido)</p>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-brand-tan text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm">5</div>
                            <p className="text-sm text-brand-dark leading-relaxed"><strong className="uppercase tracking-wider">Para "4" tem de haver provas</strong> (tens de conseguir dar exemplos)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Organizational Criteria */}
                  <div className="bg-brand-cream rounded-2xl p-6 md:p-8 shadow-xl border border-brand-tan/10">
                    <div className="flex items-center gap-3 mb-6 border-b border-brand-tan/20 pb-4">
                      <div className="w-10 h-10 rounded-full bg-brand-tan/20 flex items-center justify-center text-brand-tan shrink-0">
                        <Building size={20} />
                      </div>
                      <h2 className="text-2xl font-serif font-bold text-brand-dark">Critério Organizacional</h2>
                      <span className="ml-auto bg-brand-tan/10 text-brand-tan px-3 py-1 rounded-full text-sm font-bold">{performanceIntro.criteriaTypes[0].weight}</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-brand-stone/10">
                      <p className="text-brand-stone leading-relaxed text-lg mb-4">
                        {currentCriteria.organizational}
                      </p>
                      {renderScoreButtons('org', 0)}
                    </div>
                  </div>

                  {/* Technical Criteria */}
                  <div className="bg-brand-cream rounded-2xl p-6 md:p-8 shadow-xl border border-brand-tan/10">
                    <div className="flex items-center gap-3 mb-6 border-b border-brand-tan/20 pb-4">
                      <div className="w-10 h-10 rounded-full bg-brand-tan/20 flex items-center justify-center text-brand-tan shrink-0">
                        <Wrench size={20} />
                      </div>
                      <h2 className="text-2xl font-serif font-bold text-brand-dark">Critérios Técnicos</h2>
                      <span className="ml-auto bg-brand-tan/10 text-brand-tan px-3 py-1 rounded-full text-sm font-bold">{performanceIntro.criteriaTypes[1].weight}</span>
                    </div>
                    <div className="space-y-4">
                      {currentCriteria.technical.map((item, index) => (
                        <div key={index} className="bg-white p-4 rounded-xl border border-brand-stone/10">
                          <div className="flex items-start gap-3 text-brand-stone mb-4">
                            <CheckCircle2 className="text-brand-tan shrink-0 mt-1" size={20} />
                            <span className="leading-relaxed">{item}</span>
                          </div>
                          {renderScoreButtons('tech', index)}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Behavioral Criteria */}
                  <div className="bg-brand-cream rounded-2xl p-6 md:p-8 shadow-xl border border-brand-tan/10">
                    <div className="flex items-center gap-3 mb-6 border-b border-brand-tan/20 pb-4">
                      <div className="w-10 h-10 rounded-full bg-brand-tan/20 flex items-center justify-center text-brand-tan shrink-0">
                        <Users size={20} />
                      </div>
                      <h2 className="text-2xl font-serif font-bold text-brand-dark">Critérios Comportamentais</h2>
                      <span className="ml-auto bg-brand-tan/10 text-brand-tan px-3 py-1 rounded-full text-sm font-bold">{performanceIntro.criteriaTypes[2].weight}</span>
                    </div>
                    <div className="space-y-4">
                      {currentCriteria.behavioral.map((item, index) => (
                        <div key={index} className="bg-white p-4 rounded-xl border border-brand-stone/10">
                          <div className="flex items-start gap-3 text-brand-stone mb-4">
                            <CheckCircle2 className="text-brand-tan shrink-0 mt-1" size={20} />
                            <span className="leading-relaxed">{item}</span>
                          </div>
                          {renderScoreButtons('comp', index)}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center pt-8 gap-4">
                    {submitMessage && (
                      <div className={`p-4 rounded-xl w-full max-w-md text-center ${submitMessage.type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'}`}>
                        <p className="font-bold mb-1">{submitMessage.text}</p>
                        {submitMessage.url && (
                          <a href={submitMessage.url} target="_blank" rel="noreferrer" className="text-sm underline text-green-900 hover:text-green-700">
                            Ver o email enviado (Modo Teste)
                          </a>
                        )}
                      </div>
                    )}
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`bg-brand-tan text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest border border-transparent transition-all duration-300 shadow-lg flex items-center gap-3
                        ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-brand-dark hover:text-brand-tan hover:border-brand-tan hover:shadow-brand-tan/20'}
                      `}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          A enviar...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Enviar Avaliação
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="bg-brand-cream rounded-2xl p-8 text-center shadow-xl">
                  <p className="text-brand-stone text-lg">
                    Os critérios de avaliação para esta função ainda não foram disponibilizados.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
