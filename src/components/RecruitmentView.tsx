import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Home, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface RecruitmentViewProps {
  onBack: () => void;
  onHome: () => void;
}

const CHECKLIST_ITEMS = [
  "Postura profissional e atitude de trabalho.",
  "Iniciativa e vontade de aprender.",
  "Aceita orientações e correções.",
  "Respeito e colaboração com a equipa.",
  "Agilidade em tarefas simples.",
  "Acompanha o ritmo do serviço.",
  "Responsabilidade pelas tarefas.",
  "Atenção às instruções (não repete erros)."
];

export const RecruitmentView: React.FC<RecruitmentViewProps> = ({ onBack, onHome }) => {
  const [formData, setFormData] = useState({
    nome: '',
    area: '',
    data: '',
    responsavel: '',
    observacoes: '',
    decisao: '' as 'Selecionado' | 'Não selecionado' | ''
  });

  const [checklist, setChecklist] = useState<Record<number, 'Sim' | 'Não'>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChecklistChange = (index: number, value: 'Sim' | 'Não') => {
    setChecklist(prev => ({ ...prev, [index]: value }));
  };

  const isFormValid = () => {
    if (!formData.nome || !formData.area || !formData.data || !formData.responsavel || !formData.decisao) return false;
    if (Object.keys(checklist).length < CHECKLIST_ITEMS.length) return false;
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/recruitment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          checklist: CHECKLIST_ITEMS.map((item, index) => ({
            question: item,
            answer: checklist[index]
          }))
        })
      });

      if (!response.ok) throw new Error('Falha ao enviar formulário');

      setSubmitStatus('success');
      setTimeout(() => {
        onHome();
      }, 3000);
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
          
          <button 
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 text-brand-cream rounded-full hover:bg-white/10 transition-colors border border-white/10 group"
            title="Voltar"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-serif font-bold text-sm tracking-wide">
              Voltar
            </span>
          </button>
          
          <div className="h-6 w-px bg-white/10 mx-2" />
          
          <h2 className="text-lg font-serif font-bold text-brand-cream tracking-tight">
            Recrutamento
          </h2>
        </div>

        <div className="flex-1 text-center hidden md:block">
          <span className="text-brand-cream/40 text-[10px] uppercase tracking-[0.4em] font-sans">
            Kailua Journey • Recrutamento
          </span>
        </div>
      </div>

      {/* Main Form Content */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl w-full mx-auto relative z-10"
        >
          <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-brand-cream mb-2">
            Checklist
          </h1>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-cream/90 mb-4">
            DNA de Seleção
          </h2>
          <p className="text-brand-stone max-w-2xl mx-auto">
            Preenche os dados do candidato e avalia os critérios de seleção
          </p>
        </div>

        {submitStatus === 'success' ? (
          <div className="bg-green-900/40 border border-green-500/50 rounded-2xl p-12 text-center">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h2 className="text-2xl font-serif font-bold text-green-100 mb-2">Formulário Enviado!</h2>
            <p className="text-green-300">A voltar ao início...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-brand-cream rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
            {/* Header Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-brand-dark uppercase tracking-widest">Nome do Candidato</label>
                <input
                  type="text"
                  required
                  value={formData.nome}
                  onChange={e => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full bg-white border-2 border-brand-stone/20 rounded-xl px-4 py-3 text-brand-dark focus:border-brand-tan focus:ring-0 outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-brand-dark uppercase tracking-widest">Área/Função</label>
                <input
                  type="text"
                  required
                  value={formData.area}
                  onChange={e => setFormData({ ...formData, area: e.target.value })}
                  className="w-full bg-white border-2 border-brand-stone/20 rounded-xl px-4 py-3 text-brand-dark focus:border-brand-tan focus:ring-0 outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-brand-dark uppercase tracking-widest">Data</label>
                <input
                  type="date"
                  required
                  value={formData.data}
                  onChange={e => setFormData({ ...formData, data: e.target.value })}
                  className="w-full bg-white border-2 border-brand-stone/20 rounded-xl px-4 py-3 text-brand-dark focus:border-brand-tan focus:ring-0 outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-brand-dark uppercase tracking-widest">Responsável pela Avaliação</label>
                <input
                  type="text"
                  required
                  value={formData.responsavel}
                  onChange={e => setFormData({ ...formData, responsavel: e.target.value })}
                  className="w-full bg-white border-2 border-brand-stone/20 rounded-xl px-4 py-3 text-brand-dark focus:border-brand-tan focus:ring-0 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Checklist Table */}
            <div className="mb-10 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-brand-stone/30">
                    <th className="py-4 px-2 text-brand-dark font-serif font-bold text-lg">#</th>
                    <th className="py-4 px-2 text-brand-dark font-serif font-bold text-lg w-full">Verificação</th>
                    <th className="py-4 px-4 text-brand-dark font-bold text-sm uppercase text-center w-24">Sim</th>
                    <th className="py-4 px-4 text-brand-dark font-bold text-sm uppercase text-center w-24">Não</th>
                  </tr>
                </thead>
                <tbody>
                  {CHECKLIST_ITEMS.map((item, idx) => (
                    <tr key={idx} className="border-b border-brand-stone/10 hover:bg-brand-stone/5 transition-colors">
                      <td className="py-4 px-2 text-brand-stone font-bold">{idx + 1}</td>
                      <td className="py-4 px-2 text-brand-dark font-medium">{item}</td>
                      <td className="py-4 px-4 text-center">
                        <label className="cursor-pointer">
                          <input 
                            type="radio" 
                            name={`check-${idx}`} 
                            value="Sim"
                            className="w-5 h-5 text-brand-tan focus:ring-brand-tan"
                            onChange={() => handleChecklistChange(idx, 'Sim')}
                            required
                          />
                        </label>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <label className="cursor-pointer">
                          <input 
                            type="radio" 
                            name={`check-${idx}`} 
                            value="Não"
                            className="w-5 h-5 text-red-600 focus:ring-red-600"
                            onChange={() => handleChecklistChange(idx, 'Não')}
                            required
                          />
                        </label>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Rules Info */}
            <div className="bg-white/50 p-6 rounded-xl border border-brand-stone/20 mb-10">
              <h3 className="font-bold text-brand-dark mb-2 uppercase tracking-wide text-sm">Regras de decisão:</h3>
              <ul className="space-y-1">
                <li className="text-green-700 font-medium flex items-center gap-2">
                  <CheckCircle size={16} /> 8 Sim - Selecionado
                </li>
                <li className="text-red-700 font-medium flex items-center gap-2">
                  <AlertCircle size={16} /> 2 Não - Não selecionado
                </li>
              </ul>
            </div>

            {/* Observações */}
            <div className="mb-10 space-y-2">
              <label className="block text-xl font-serif font-bold text-brand-dark">Observações Rápidas</label>
              <textarea
                rows={4}
                value={formData.observacoes}
                onChange={e => setFormData({ ...formData, observacoes: e.target.value })}
                className="w-full bg-white border-2 border-brand-stone/20 rounded-xl px-4 py-3 text-brand-dark focus:border-brand-tan focus:ring-0 outline-none transition-colors resize-y"
              />
            </div>

            {/* Decisão Final */}
            <div className="bg-brand-dark/5 p-6 rounded-xl border-2 border-brand-stone/20 mb-10 flex flex-col items-center">
              <label className="block text-xl font-serif font-bold text-brand-dark mb-6 text-center">Decisão Final</label>
              <div className="flex flex-col sm:flex-row gap-8 justify-center w-full max-w-lg">
                <label className={`flex-1 flex items-center justify-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.decisao === 'Selecionado' ? 'border-green-600 bg-green-50' : 'border-brand-stone/20 bg-white hover:border-green-400'}`}>
                  <input
                    type="radio"
                    name="decisao"
                    value="Selecionado"
                    className="w-5 h-5 text-green-600 focus:ring-green-600"
                    onChange={() => setFormData({ ...formData, decisao: 'Selecionado' })}
                    required
                  />
                  <span className="font-bold text-brand-dark text-lg">Selecionado</span>
                </label>
                <label className={`flex-1 flex items-center justify-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.decisao === 'Não selecionado' ? 'border-red-600 bg-red-50' : 'border-brand-stone/20 bg-white hover:border-red-400'}`}>
                  <input
                    type="radio"
                    name="decisao"
                    value="Não selecionado"
                    className="w-5 h-5 text-red-600 focus:ring-red-600"
                    onChange={() => setFormData({ ...formData, decisao: 'Não selecionado' })}
                    required
                  />
                  <span className="font-bold text-brand-dark text-lg">Não selecionado</span>
                </label>
              </div>
            </div>

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg flex items-center gap-3">
                <AlertCircle size={20} />
                <span>Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !isFormValid()}
              className="w-full flex items-center justify-center p-5 bg-brand-tan hover:bg-brand-rust text-white font-bold rounded-xl transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed group text-lg"
            >
              {isSubmitting ? (
                <>Enviando...</>
              ) : (
                <>
                  <Send size={20} className="mr-3" />
                  Submeter e Enviar Formulário
                </>
              )}
            </button>
          </form>
        )}
        </motion.div>
      </div>
    </div>
  );
};
