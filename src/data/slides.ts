import { Slide } from '../services/ai';

export const hardcodedSlides: Slide[] = [
  {
    id: "slide-1",
    title: "Plano de Progressão de Carreira",
    content: [],
    layout: "title",
    notes: "Bem-vindos à apresentação do novo Plano de Progressão de Carreira. Este documento define as regras claras e transparentes para o crescimento profissional dentro da nossa organização."
  },
  {
    id: "slide-2",
    title: "Índice",
    content: [
      "Critérios de Avaliação",
      "Condições e Regras de Aplicação",
      "Como Funciona a Progressão Salarial",
      "Estrutura de Carreira por Setor"
    ],
    layout: "index",
    notes: "Nesta apresentação, vamos abordar os pilares fundamentais do nosso modelo de carreira, desde a avaliação de desempenho até aos caminhos específicos de cada departamento."
  },
  {
    id: "slide-3",
    title: "Critérios de Avaliação",
    content: [
      "Incumpridor | ABAIXO DO MÍNIMO | Não elegível para progressão funcional ou salarial.\n\nAnálise de opções para cessação de contrato.",
      "Cumpridor | CONDIÇÃO MÍNIMA | Não permite progressão de carreira.\n\nDefinição de um plano de melhoria com acompanhamento.",
      "Bom | Elegível para Progressão | Permite a progressão vertical (mudança de função e nível).\n\nTempo mínimo no nível cumprido.\n\nExistência de vaga.",
      "Excelente | Elegível para progressão acelerada | Permite a progressão vertical acelerada (mudança de função e nível).\n\nTempo mínimo no nível cumprido.\n\nExistência de vaga."
    ],
    layout: "cards",
    notes: "A nossa escala de avaliação tem 4 níveis. É fundamental perceber que a progressão só é possível a partir do nível 'Bom'. O nível 'Cumpridor' garante a permanência, mas não a subida."
  },
  {
    id: "slide-4",
    title: "Condições e Regras de Aplicação",
    content: [
      "Condição de Vaga | DISPONIBILIDADE | A progressão não é automática, depende de vaga.\n\nNa ausência de vaga, mantém o nível e função e fica sinalizado para futura progressão. | Contrapartida: Se atingir o teto máximo do nível, por cada fim de nível, beneficiará da atualização salarial alinhada com a evolução do SMN + 2 dias de férias + GB (se avaliação Excelente).",
      "Regra de Coerência | DESEMPENHO CONSISTENTE | A progressão não ocorre pela inexistência de interesse em progredir. | Contrapartida: Se atingir o teto máximo do nível, por cada fim de nível, beneficiará da atualização salarial alinhada com a evolução do SMN + 1 dia de férias + 1% atualização (se avaliação Excelente).",
      "Regra de Consistência | BLOQUEIO | A progressão exige consistência, não apenas um pico de desempenho no final de nível. | Penalização: Com avaliação Incumpridor ou Cumpridor dentro de um nível, bloqueia a progressão mais 1 ano no nível.",
      "Mobilidade | FLEXIBILIDADE | A mobilidade entre empresas do grupo é possível e incentivada, conforme a necessidade operacional e perfil do colaborador.",
      "Acesso à Liderança/Direção | RECRUTAMENTO ESPECÍFICO | O acesso a estas funções depende de:\n✓ Avaliação de desempenho\n✓ Aprovação em Processo Interno de recrutamento especifico"
    ],
    layout: "rules",
    notes: "Estas são as regras de ouro. Destaco a dependência de vagas e a possibilidade de mobilidade entre empresas do grupo, o que aumenta as tuas oportunidades."
  },
  {
    id: "slide-5",
    title: "Como Funciona a Progressão Salarial",
    content: [
      "Atualização Estrutural | Base Estrutural para regra | Atualização salarial anual alinhada com a evolução do SMN. | Condicionada à sustentabilidade financeira da empresa. | Indexada à inflação anual na inexistência de atualização do SMN. | Aplicável a todos (exceto avaliação Incumpridor).",
      "Fim de Nível | MÉRITO & DESEMPENHO | Percentuais de aumento aplicados ao concluir o tempo de permanência no nível: | Cumpridor: +1% (Horizontal) | Bom: +4% (Vertical) | Excelente: +8% (Vertical)* | * É permitida a atualização salarial anual com base no desempenho em qualquer avaliação anual Excelente. No entanto, com exceção do fim de nivel, é necessária a validação da Liderança Superior.",
      "Aceleração | PERFORMANCE EXCECIONAL | Mecanismo de 'Fast Track' para talentos de alto rendimento. | ✓ Avaliação Excelente em todos os anos de um nível. | Benefício: Encurtamento do tempo mínimo no nível seguinte. | Exemplo: Redução de 24 para 12 meses.",
      "Topo de Carreira | DIRETOR R&B | ✓ Se atingir o teto máximo do nível | ✓ Avaliação Excelente | 🎁 Atualização salarial alinhada com a evolução do SMN | 🎁 5% do excedente do montante do EBITDA definido.",
      "Revisão do Sistema | MELHORIA CONTÍNUA | O modelo é revisto anualmente para garantir a sua sustentabilidade e adequação ao mercado."
    ],
    layout: "salary-progression",
    notes: "A evolução salarial assenta em três pilares: a atualização anual para todos (baseada no SMN/Inflação e EBITDA), os aumentos por mérito no fim de cada nível, e a via verde para talentos excecionais."
  },
  {
    id: "slide-6",
    title: "Estrutura de Carreira por Setor (1/2)",
    content: [
      "Food | PRODUÇÃO ALIMENTAR | Ajudante | Nível III | Chefe de Cozinha | Nível X | III → IV-IX → X",
      "Copa | APOIO & LIMPEZA | Copeiro Junior | Nível II | Chefe de Copa / Coz. 3ª | Nível V | II → III-IV → V",
      "Armazém | LOGÍSTICA | Ajudante | Nível III | Encarregado de Armazém | Nível VIII | III → IV-VII → VIII",
      "Manutenção | TÉCNICA | Ajudante | Nível III | Chefe de Manutenção, Conservação e Serviços Técnicos | Nível IX | III → IV-VIII → IX",
      "HouseKeeping | HIGIENE E LIMPEZA | Técnico de Limpeza | Nível III | Encarregado de Limpeza | Nível IV | III → IV",
      "Mesas | ATENDIMENTO AO CLIENTE | Ajudante | Nível III | Chefe de Sala | Nível VIII | III → IV-VII → VIII"
    ],
    layout: "career-structure",
    notes: "Apresentamos aqui a estrutura detalhada das carreiras operacionais (parte 1)."
  },
  {
    id: "slide-6b",
    title: "Estrutura de Carreira por Setor (2/2)",
    content: [
      "Drinks | BEBIDAS & MIXOLOGIA | Ajudante | Nível III | Chefe de Bar | Nível VIII | III → IV-VII → VIII",
      "Controlo | SUPORTE | Controlador - Caixa | Nível V | Chefe de Controlo | Nível VIII | V → VI-VII → VIII",
      "Felicidade | ACOLHIMENTO & VENDAS | Ajudante | Nível III | Gerente | Nível VIII | III → IV-VII → VIII",
      "Direção Operacional | GESTÃO ESTRATÉGICA | Assistente de Direção | Nível X | Diretor de R&B | Nível XI | X → XI",
      "Direção Corporativa | CORPORATIVO | Escriturário de 3ª | Nível V | Diretor de Serviços (Financeiros e Administrativos)\nDiretor de Serviços Técnicos (RH) | Nível X | V → VI-IX → X"
    ],
    layout: "career-structure",
    notes: "Apresentamos aqui a estrutura detalhada das carreiras de suporte e direção (parte 2)."
  },
  {
    id: "slide-8",
    title: "FOOD",
    content: [
      "Entrada típica (nível III): Ajudante de todas as secções | Estagiário de cozinheiro",
      "Fase | Função | Nível | Tempo nível | Progressão | VB Ref",
      "Entrada | Estagiário / Ajudante | III | 1 ano | 0–1 ano | 926€ - 1026€",
      "Consolidação | Cozinheiro de 3ª | V | 1 ano | 1–2 anos | 936€ - 1186€",
      "Profissionalização | Cozinheiro de 2ª / Pizzaiolo | VI | 2 anos | 2–4 anos | 952€ - 1302€",
      "Especialização | Cozinheiro de 1ª | VIII | 3 anos | 4–7 anos | 1028€ - 1628€",
      "Coordenação | Subchefe de cozinha | IX | 3 anos | 7–10 anos | 1136€ - 1961€",
      "Liderança | Chefe de Cozinha | X | (...) | +10 anos | 1364€ - 2489€"
    ],
    layout: "table",
    notes: "A progressão na cozinha é estruturada para garantir a aquisição progressiva de competências técnicas e de gestão."
  },
  {
    id: "slide-9",
    title: "COPA",
    content: [
      "Entrada típica (nível II) Copeiro Júnior",
      "Fase | Função | Nível | Tempo nível | Progressão | VB Ref",
      "Entrada | Copeiro Júnior (até dois anos) | II | 2 anos | 0–2 anos | 923€ - 1023€",
      "Consolidação | Copeiro Sénior (mais de dois anos) | III | 2 anos | 2–4 anos | 926€ - 1026€",
      "Coordenação | Chefe de copa | V | 2 anos | 4–6 anos | 936€ - 1186€",
      "Evolução transversal | Cozinheiro de 3.ª | V | + formação | + formação | 936€ - 1186€"
    ],
    layout: "table",
    notes: "A progressão na copa permite uma evolução sólida e até transversal para a cozinha."
  },
  {
    id: "slide-10",
    title: "ARMAZÉM",
    content: [
      "Entrada típica (nível III) Ajudante de todas as secções",
      "Fase | Função | Nível | Tempo nível | Progressão | VB Ref",
      "Entrada | Ajudante de todas as secções | III | 1 ano | 0–1 ano | 926€ - 1026€",
      "Consolidação | Assistente de armazém | V | 2 anos | 1–3 anos | 936€ - 1186€",
      "Profissionalização | Fiel de armazém | VI | 2 anos | 3–5 anos | 952€ - 1302€",
      "Coordenação | Encarregado de armazém | VIII | 3 anos | 5-8 anos | 1028€ - 1628€"
    ],
    layout: "table",
    notes: "A carreira de armazém valoriza a responsabilidade e a gestão logística."
  },
  {
    id: "slide-11",
    title: "MANUTENÇÃO",
    content: [
      "Entrada típica (nível III) Ajudante de todas as secções",
      "Fase | Função | Nível | Tempo nível | Progressão | VB Ref",
      "Entrada | Ajudante de todas as secções | III | 1 ano | 0–1 ano | 926€ - 1026€",
      "Consolidação | Carpinteiro em geral de 2ª | V | 1 ano | 1-2 anos | 936€ - 1186€",
      "Profissionalização | Carpinteiro em geral de 1ª | VI | 3 anos | 2–5 anos | 952€ - 1302€",
      "Coordenação | Chefe de manutenção | VIII | 3 anos | 5–8 anos | 926€ - 1026€",
      "Liderança | Chefe de manutenção, conservação e serviços técnicos | IX | (...) | +8 anos | 1136€ - 1961€"
    ],
    layout: "table",
    notes: "A manutenção exige conhecimentos técnicos especializados que evoluem com a experiência."
  },
  {
    id: "slide-12",
    title: "HOUSEKEEPING",
    content: [
      "Entrada típica (nível III) Técnico de limpeza",
      "Fase | Função | Nível | Tempo nível | Progressão | VB Ref",
      "Entrada e consolidação | Técnico de limpeza | III | 3 anos | 0–3 anos | 926€ - 1026€",
      "Coordenação | Encarregado de limpeza | IV | 4 anos | 3–7 anos | 931€ - 1106€"
    ],
    layout: "table",
    notes: "A progressão na limpeza foca-se na consolidação técnica e coordenação de equipas."
  },
  {
    id: "slide-13",
    title: "MESAS",
    content: [
      "Entrada típica (nível III) Ajudante de todas as secções | Estagiário de restauração e bebidas",
      "Fase | Função | Nível | Tempo nível | Progressão | VB Ref",
      "Entrada | Estagiário / Ajudante | III | 1 ano | 0–1 ano | 926€ - 1026€",
      "Profissionalização | Assistente de Sala de 2ª | VI | 2 anos | 1–3 anos | 952€ - 1302€",
      "Especialização | Assistente de Sala de 1ª | VII | 2 anos | 3–5 anos | 974€ - 1424€",
      "Coordenação | Subchefe de Sala | VII | 2 anos | 5–7 anos | 974€ - 1424€",
      "Liderança | Chefe de Sala | VIII | 2 anos | 7–9 anos | 1028€ - 1628€"
    ],
    layout: "table",
    notes: "A carreira de mesas oferece um percurso longo e estruturado, desde o estágio até à gerência."
  },
  {
    id: "slide-14",
    title: "DRINKS",
    content: [
      "Entrada típica (nível III) Ajudante de todas as secções | Estagiário barman/barmaid do 1º ano",
      "Fase | Função | Nível | Tempo nível | Progressão | VB Ref",
      "Entrada | Estagiário / Ajudante | III | 1 ano | 0–1 ano | 926€ - 1026€",
      "Consolidação | Barman/barmaid de 2ª | VI | 2 anos | 1–3 anos | 952€ - 1302€",
      "Profissionalização | Barman/barmaid de 1ª | VII | 3 anos | 3–6 anos | 974€ - 1424€",
      "Liderança | Chefe de Bar | VIII | 3 anos | 6–9 anos | 1028€ - 1628€"
    ],
    layout: "table",
    notes: "A carreira de bar evolui da aprendizagem para a liderança técnica e gestão."
  },
  {
    id: "slide-14-b",
    title: "OPERAÇÃO DA FRENTE",
    content: [
      "Entrada típica (nível IX) Supervisor de Operações",
      "Fase | Função | Nível | Tempo nível | Progressão | VB Ref",
      "Coordenação Transversal | Supervisor de Operações | IX | 5 anos | 1-5 anos | 1136€ - 1961€"
    ],
    layout: "table",
    notes: "A progressão na operação da frente é focada na supervisão e gestão de equipas."
  },
  {
    id: "slide-15",
    title: "CONTROLO",
    content: [
      "Entrada típica (nível V) Controlador - Caixa",
      "Fase | Função | Nível | Tempo nível | Progressão | VB Ref",
      "Entrada e Consolidação | Controlador-caixa | V | 2 anos | 0-2 anos | 936€ - 1186€",
      "Profissionalização | Controlador | VII | 2 anos | 2-4 anos | 974€ - 1424€",
      "Liderança | Chefe de Controlo | VIII | (...) | +4 anos | 1028€ - 1628€"
    ],
    layout: "table",
    notes: "A carreira de controlo foca-se no suporte e auditoria das operações."
  },
  {
    id: "slide-16",
    title: "FELICIDADE",
    content: [
      "Entrada típica (nível III) Ajudante de todas as secções | Estagiário de restauração e bebidas",
      "Fase | Função | Nível | Tempo nível | Progressão | VB Ref",
      "Entrada | Estagiário / Ajudante | III | 1 ano | 0–1 ano | 926€ - 1026€",
      "Consolidação | Assistente de vendas de 2ª\nRececionista de 2ª | VI | 2 anos | 1-3 anos | 952€ - 1302€",
      "Profissionalização | Assistente de vendas de 1ª\nRececionista de 1ª | VII | 2 anos | 3–5 anos | 974€ - 1424€",
      "Coordenação | Subgerente | VII | 2 anos | 5–7 anos | 974€ - 1424€",
      "Liderança | Gerente | VIII | 2 anos | 7-9 anos | 1028€ - 1628€"
    ],
    layout: "table",
    notes: "A carreira de felicidade combina competências de vendas, acolhimento e gestão, com um percurso claro até à gerência."
  },
  {
    id: "slide-17",
    title: "DIREÇÃO OPERACIONAL",
    content: [
      "Entrada típica (nível X) Assistente de Direção",
      "Fase | Função | Nível | Tempo nível | Progressão | VB Ref",
      "Subdireção | Assistente de Direção | X | 5 anos | 1-5 anos | 1364€ - 2489€",
      "Direção | Diretor de Restauração e Bebidas | XI | (...) | +5 anos | 1431€ - 3006€"
    ],
    layout: "table",
    notes: "A direção operacional representa o topo da carreira, com foco estratégico e de liderança."
  },
  {
    id: "slide-18",
    title: "DIREÇÃO CORPORATIVA",
    content: [
      "Entrada típica (nível V) Escriturário de 3ª",
      "Fase | Função | Nível | Tempo nível | Progressão | VB Ref",
      "Entrada | Escriturário de 3ª | V | 2 anos | 0-2 anos | 936€ - 1186€",
      "Consolidação | Escriturário de 2ª | VI | 2 anos | 2-4 anos | 952€ - 1302€",
      "Especialização | Escriturário de 1ª | VII | 2 anos | 4-6 anos | 974€ - 1424€",
      "Coordenação | Chefe de Secção | VIII | 2 anos | 6-8 anos | 1028€ - 1628€",
      "Direção | Diretor de Serviços (Administrativos e Financeiros)\nDiretor de Serviços Técnicos (Recursos Humanos) | X | (...) | +8 anos | 1364€ - 2489€"
    ],
    layout: "table",
    notes: "A direção corporativa foca-se na gestão financeira, administrativa e de recursos humanos."
  },
  {
    id: "slide-19",
    title: "Mensagem Final",
    content: [
      "Quando todos sabemos para onde ir e o que é esperado, ficamos mais fortes.\n\nA partir daqui, o crescimento passa a depender do compromisso e empenho de cada um!"
    ],
    layout: "quote",
    notes: "O nosso sistema é justo: garante evolução a quem cumpre, e acelera a quem supera. O teu crescimento está nas tuas mãos."
  }
];
