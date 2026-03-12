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
      "Condição de Vaga | DISPONIBILIDADE | A progressão não é automática, depende de vaga.\n\nNa ausência de vaga, mantém o nível e função e fica sinalizado para futura progressão. | Contrapartida: Se atingir o teto máximo do nível, por cada fim de nível, beneficiará da atualização salarial alinhada com a evolução do SMN + 1 dia de férias.",
      "Regra de Coerência | DESEMPENHO CONSISTENTE | A progressão não ocorre pela inexistência de interesse em progredir. | Contrapartida: Se atingir o teto máximo do nível, por cada fim de nível, beneficiará da atualização salarial alinhada com a evolução do SMN + 0,5 dia de férias.",
      "Regra de Consistência | BLOQUEIO | A progressão exige consistência, não apenas um pico de desempenho no final de nível. | Penalização: Com 1 avaliação Incumpridor e/ou 2 Cumpridor dentro de um nível, bloqueia a progressão mais 1 ano no nível.",
      "Mobilidade | FLEXIBILIDADE | A mobilidade entre empresas do grupo é possível e incentivada, conforme a necessidade operacional e perfil do colaborador.",
      "Acesso à Liderança/Direção | RECRUTAMENTO ESPECÍFICO | O acesso a estas funções depende de:\n✓ Avaliação de desempenho\n✓ Aprovação em Processo Interno de recrutamento especifico"
    ],
    layout: "rules",
    notes: "Estas são as regras de ouro. Destaco a dependência de vagas e a possibilidade de mobilidade entre empresas do grupo, o que aumenta as vossas oportunidades."
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
    title: "Estrutura de Carreira por Setor",
    content: [
      "Cozinha | PRODUÇÃO ALIMENTAR | Estagiário / Ajudante | Nível III | Chefe de Cozinha | Nível X | III → IV-IX → X",
      "Copa | APOIO & LIMPEZA | Copeiro | Nível II | Chefe de Copa / Coz. 3ª | Nível V | II → III-IV → V",
      "Armazém | LOGÍSTICA | Ajudante | Nível III | Encarregado | Nível VIII | III → IV-VII → VIII",
      "Manutenção | TÉCNICA | Ajudante | Nível III | Chefe de Manutenção | Nível IX | III → IV-VIII → IX",
      "HouseKeeping | TÉCNICO | Técnico | Nível III | Encarregado | Nível IV | III → IV",
      "Mesas | SERVIÇO DE SALA | Estagiário | Nível III | Gerente de Sala | Nível VIII | III → IV-VII → VIII",
      "Drinks | BEBIDAS & MIXOLOGIA | Estagiário | Nível III | Chefe de Bar | Nível VIII | III → IV-VII → VIII",
      "Controlo | AUDITORIA & QUALIDADE | Assistente | Nível III | Controller | Nível VIII | III → IV-VII → VIII",
      "Felicidade | ACOLHIMENTO & VENDAS | Estagiário | Nível III | Gerente Comercial | Nível VIII | III → IV-VII → VIII"
    ],
    layout: "career-structure",
    notes: "Apresentamos aqui a estrutura detalhada das carreiras operacionais, definindo claramente os pontos de entrada, o topo da carreira e os níveis de evolução para cada setor."
  },
  {
    id: "slide-8",
    title: "COZINHA",
    content: [
      "Entrada típica (nível III): Ajudante de todas as secções | Estagiário de cozinheiro",
      "Fase | Função | Nível | Tempo nível | Progressão",
      "Entrada | Estagiário / Ajudante | III | 1 ano | 0–1 ano",
      "Consolidação | Cozinheiro de 3ª | V | 1 ano | 1–2 anos",
      "Profissionalização | Cozinheiro de 2ª / Pizzaiolo | VI | 2 anos | 2–4 anos",
      "Especialização | Cozinheiro de 1ª | VIII | 3 anos | 4–7 anos",
      "Coordenação | Subchefe de cozinha | IX | 3 anos | 7–10 anos",
      "Liderança | Chefe de cozinha | X (… 3 anos…) | +10 anos"
    ],
    layout: "table",
    notes: "A progressão na cozinha é estruturada para garantir a aquisição progressiva de competências técnicas e de gestão."
  },
  {
    id: "slide-9",
    title: "COPA",
    content: [
      "Entrada típica (nível II) Copeiro",
      "Fase | Função | Nível | Tempo em cada nível | Progressão anual",
      "Entrada | Copeiro (até dois anos) | II | 2 anos | 0–2 anos",
      "Consolidação | Copeiro (mais de dois anos) | III | 2 anos | 2–4 anos",
      "Coordenação | Chefe de copa | V | 2 anos | 4–6 anos",
      "Evolução transversal | Cozinheiro de 3.ª | V | + formação | + formação"
    ],
    layout: "table",
    notes: "A progressão na copa permite uma evolução sólida e até transversal para a cozinha."
  },
  {
    id: "slide-10",
    title: "ARMAZÉM",
    content: [
      "Entrada típica (nível III) Ajudante de todas as secções",
      "Fase | Função | Nível | Tempo nível | Progressão",
      "Entrada | Ajudante de todas as secções | III | 1 ano | 0–1 ano",
      "Consolidação | Assistente de armazém | V | 2 anos | 1–3 anos",
      "Profissionalização | Fiel de armazém | VI | 2 anos | 3–5 anos",
      "Coordenação | Encarregado de armazém | VIII | 3 anos | 5-8 anos"
    ],
    layout: "table",
    notes: "A carreira de armazém valoriza a responsabilidade e a gestão logística."
  },
  {
    id: "slide-11",
    title: "MANUTENÇÃO",
    content: [
      "Entrada típica (nível III) Ajudante de todas as secções",
      "Fase | Função | Nível | Tempo nível | Progressão",
      "Entrada | Ajudante de todas as secções | III | 1 ano | 0–1 ano",
      "Consolidação | Carpinteiro em geral de 2ª | V | 1 ano | 1-2 anos",
      "Profissionalização | Carpinteiro em geral de 1ª | VI | 3 anos | 2–5 anos",
      "Coordenação | Chefe de manutenção | VIII | 3 anos | 5–8 anos",
      "Liderança | Chefe de manutenção e serviços técnicos | IX (… 3 anos…) | +8 anos"
    ],
    layout: "table",
    notes: "A manutenção exige conhecimentos técnicos especializados que evoluem com a experiência."
  },
  {
    id: "slide-12",
    title: "LIMPEZA",
    content: [
      "Entrada típica (nível III) Técnico de limpeza",
      "Fase | Função | Nível | Tempo nível | Progressão",
      "Entrada e consolidação | Técnico de limpeza | III | 3 anos | 0–3 anos",
      "Coordenação | Encarregado de limpeza | IV | 4 anos | 3–7 anos"
    ],
    layout: "table",
    notes: "A progressão na limpeza foca-se na consolidação técnica e coordenação de equipas."
  },
  {
    id: "slide-13",
    title: "MESAS",
    content: [
      "Entrada típica (nível III) Ajudante de todas as secções | Estagiário de restauração e bebidas",
      "Fase | Função | Nível | Tempo nível | Progressão",
      "Entrada | Estagiário / Ajudante | III | 1 ano | 0–1 ano",
      "Consolidação | Assistente de sala (até dois anos) | V | 1 ano | 1–2 anos",
      "Profissionalização | Assistente de sala de 2ª | VI | 2 anos | 2–4 anos",
      "Especialização | Assistente de sala de 1ª | VII | 2 anos | 4–6 anos",
      "Coordenação | Subchefe de sala | VII | 2 anos | 6–8 anos",
      "Liderança | Gerente (Sala) | VIII | 2 anos | 8–10 anos"
    ],
    layout: "table",
    notes: "A carreira de mesas oferece um percurso longo e estruturado, desde o estágio até à gerência."
  },
  {
    id: "slide-14",
    title: "BAR",
    content: [
      "Entrada típica (nível III) Ajudante de todas as secções | Estagiário barman/barmaid do 1º ano",
      "Fase | Função | Nível | Tempo nível | Progressão",
      "Entrada | Estagiário / Ajudante | III | 1 ano | 0–1 ano",
      "Base | Barman/barmaid de 2ª | VI | 2 anos | 1–3 anos",
      "Profissionalização | Barman/barmaid de 1ª | VII | 3 anos | 3–6 anos",
      "Liderança | Chefe de bar | VIII | 3 anos | 6–9 anos"
    ],
    layout: "table",
    notes: "A carreira de bar evolui da aprendizagem para a liderança técnica e gestão."
  },
  {
    id: "slide-15",
    title: "RECEÇÃO",
    content: [
      "Entrada típica (nível III) Ajudante de todas as secções | Estagiário de restauração e bebidas",
      "Fase | Função | Nível | Tempo nível | Progressão",
      "Entrada | Estagiário / Ajudante | III | 1 ano | 0–1 ano",
      "Consolidação | Assistente de vendas de 2ª | VI | 2 anos | 1-3 anos",
      "Profissionalização | Assistente de vendas de 1ª | VII | 3 anos | 3–6 anos",
      "Coordenação | Subgerente (Comercial) | VII | 2 anos | 6–8 anos",
      "Liderança | Gerente (Comercial) | VIII | 2 anos | 8-10 anos"
    ],
    layout: "table",
    notes: "A carreira de receção combina competências de vendas e gestão, com um percurso claro até à gerência."
  },
  {
    id: "slide-16",
    title: "OPERAÇÃO DA FRENTE",
    content: [
      "Entrada típica (nível IX) Supervisor de Operações",
      "Fase | Função | Nível | Tempo nível | Progressão",
      "Coordenação Transversal | Supervisor de Operações | IX | 5 anos | 1-5 anos"
    ],
    layout: "table",
    notes: "A progressão na operação da frente é focada na supervisão e gestão de equipas."
  },
  {
    id: "slide-17",
    title: "DIREÇÃO",
    content: [
      "Entrada típica (nível X) Assistente de Direção",
      "Fase | Função | Nível | Tempo nível | Progressão",
      "Subdireção | Assistente de Direção | X | 5 anos | 1-5 anos",
      "Direção | Diretor de restauração e bebidas | XI | … | +5 anos"
    ],
    layout: "table",
    notes: "A direção representa o topo da carreira, com foco estratégico e de liderança."
  },
  {
    id: "slide-18",
    title: "Mensagem Final",
    content: [
      "\"Todos progridem com o tempo. Os melhores progridem mais depressa.\""
    ],
    layout: "quote",
    notes: "O nosso sistema é justo: garante evolução a quem cumpre, e acelera a quem supera. O vosso crescimento está nas vossas mãos."
  }
];
