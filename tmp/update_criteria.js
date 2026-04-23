const fs = require('fs');

const performanceIntroStr = `export interface PerformanceCriteria {
  title: string;
  organizational: string;
  technical: string[];
  behavioral: string[];
}

export const performanceIntro = {
  objective: "A avaliação de desempenho tem como objetivo acompanhar o desenvolvimento dos colaboradores, garantir padrões consistentes de trabalho e apoiar decisões de progressão e atualização salarial.\\n\\nA avaliação é realizada trimestralmente, sendo o resultado anual obtido pela análise conjunta das 4 avaliações do ano.",
  scale: [
    { level: 1, name: "Incumpridor", description: "Não cumpre os requisitos" },
    { level: 2, name: "Cumpridor", description: "Cumpre os requisitos mínimos" },
    { level: 3, name: "Bom", description: "Cumpre plenamente os requisitos" },
    { level: 4, name: "Excelente", description: "Excede consistentemente os requisitos" }
  ],
  criteriaTypes: [
    { type: "Organizacionais", weight: "10%", description: "Avaliam o alinhamento com os valores, cultura e padrões da empresa." },
    { type: "Técnicos", weight: "60%", description: "Avaliam a capacidade para executar corretamente as tarefas da tua função." },
    { type: "Comportamentais", weight: "30%", description: "Avaliam a forma como trabalha com colegas, clientes e liderança." }
  ],
  calculation: "A nota final resulta da média de cada grupo de critérios, aplicada ao respetivo peso."
};

`;

const criteria = [
  {
    title: "Rececionista de 2ª",
    organizational: "Representa os pontos de cultura na forma como trabalha e se relaciona com equipa, clientes e/ou fornecedores?",
    technical: [
      "Garante rigor na gestão e atualização das reservas?",
      "Comunica corretamente toda a informação relevante à equipa da frente?",
      "Presta informações corretas sobre os serviços e o funcionamento?",
      "Garante o acolhimento fluido e organizado dos clientes?",
      "Antecipa e gera alterações de reservas garantindo o equilíbrio do serviço?"
    ],
    behavioral: [
      "Comunica de forma clara e cordial com os clientes e a equipa?",
      "Mantém uma organização consistente do posto de trabalho?",
      "Mantém a sua eficácia e eficiência sob pressão?",
      "Demonstra uma real orientação para o cliente?"
    ]
  },
  {
    title: "Supervisor de Operações",
    organizational: "Representa os pontos de cultura na forma como trabalha e se relaciona com equipa, clientes e/ou fornecedores?",
    technical: [
      "Garante a organização da operação da frente (mesas e bar)?",
      "Acompanha o desempenho das equipas na operação?",
      "Identifica falhas operacionais e implementa melhorias concretas?",
      "Garante a consistência da experiência do cliente?",
      "Assegura uma articulação eficaz entre os setores?"
    ],
    behavioral: [
      "Toma decisões rápidas e eficazes durante o serviço?",
      "Comunica claramente com as diferentes equipas?",
      "Atua de forma proativa na melhoria do desempenho da operação?",
      "Mantém controlo e organização da operação mesmo em contexto de pressão?"
    ]
  },
  {
    title: "Cozinheiro de 3ª - Operação",
    organizational: "Representa os pontos de cultura na forma como trabalha e se relaciona com equipa, clientes e/ou fornecedores?",
    technical: [
      "Executa tarefas conforme as orientações recebidas?",
      "Cumpre as fichas técnicas e receitas na execução?",
      "Mantém a organização e limpeza do setor?",
      "Garante a reposição de produtos?",
      "Cumpre as normas de higiene e segurança alimentar?"
    ],
    behavioral: [
      "Demonstra responsabilidade nas tarefas que executa?",
      "Trabalha bem em equipa?",
      "Mostra vontade de aprender?",
      "Mantém uma organização consistente?"
    ]
  },
  {
    title: "Diretor de Serviços (Administrativos e Financeiros)",
    organizational: "Representa os pontos de cultura na forma como trabalha e se relaciona com equipa, clientes e/ou fornecedores?",
    technical: [
      "Define e ajusta a estratégia financeira com base nos indicadores?",
      "Garante o controlo e a fiabilidade da informação financeira?",
      "Analisa possíveis desvios (custos fixos, food cost, etc.) e atua sobre eles?",
      "Avalia a viabilidade económica de decisões e/ou propostas?",
      "Garante o controlo rigoroso de fluxos financeiros operacionais?"
    ],
    behavioral: [
      "Toma decisões estratégicas sustentadas?",
      "Comunica de forma estruturada e profissional?",
      "Atua com rigor e ética em todas as decisões?",
      "Demonstra uma visão global e pensamento crítico?"
    ]
  },
  {
    title: "Chefe de Secção",
    organizational: "Representa os pontos de cultura na forma como trabalha e se relaciona com equipa, clientes e/ou fornecedores?",
    technical: [
      "Garante a organização e eficiência dos processos administrativos?",
      "Assegura cumprimento das obrigações legais e prazos administrativos?",
      "Garante a fiabilidade da informação produzida?",
      "Prepara e valida a informação para processamento salarial?",
      "Garante a gestão administrativa da loja (stocks, encomendas, preçário)?"
    ],
    behavioral: [
      "Demonstra autonomia na gestão do trabalho e prioridades?",
      "Mantém a organização e método consistentes?",
      "Comunica de forma assertiva?",
      "Toma decisões operacionais com segurança?"
    ]
  },
  {
    title: "Diretor de Serviços Técnicos (Recursos Humanos)",
    organizational: "Representa os pontos de cultura na forma como trabalha e se relaciona com equipa, clientes e/ou fornecedores?",
    technical: [
      "Define e implementa a estratégia de RH alinhada com o negócio?",
      "Garante a sustentabilidade da estrutura de recursos humanos?",
      "Analisa os indicadores de RH e toma decisões com base neles?",
      "Garante a conformidade legal laboral?",
      "Garante a coerência na aplicação de políticas de RH?"
    ],
    behavioral: [
      "Influencia decisões ao nível da direção?",
      "Demonstra um pensamento crítico consistente?",
      "Comunica de forma clara e estruturada?",
      "Atua com elevado nível ético e de confidencialidade?"
    ]
  },
  {
    title: "Assistente de Sala de 2ª",
    organizational: "Representa os pontos de cultura na forma como trabalha e se relaciona com equipa, clientes e/ou fornecedores?",
    technical: [
      "Executa corretamente o serviço de mesas?",
      "Garante ritmo e fluidez do serviço durante o seu turno?",
      "Regista pedidos sem erros?",
      "Conhece a ementa e aconselha os clientes?",
      "Cumpre normas de higiene e segurança?"
    ],
    behavioral: [
      "Demonstra orientação para o cliente?",
      "Comunica eficazmente com a equipa e clientes?",
      "Mantém o seu desempenho sob pressão?",
      "Demonstra responsabilidade no serviço?"
    ]
  },
  {
    title: "Técnico de Limpeza",
    organizational: "Representa os pontos de cultura na forma como trabalha e se relaciona com equipa, clientes e/ou fornecedores?",
    technical: [
      "Executa corretamente as tarefas de limpeza atribuídas?",
      "Utiliza adequadamente os produtos e equipamentos?",
      "Cumpre os planos de limpeza definidos?",
      "Garante a consistência na qualidade da limpeza ao longo do turno?",
      "Identifica e comunica necessidades de reposição ou avarias?"
    ],
    behavioral: [
      "Demonstra rigor no trabalho que executa?",
      "Trabalha com autonomia?",
      "Demonstra proatividade na organização dos espaços?",
      "Colabora ativamente com a equipa?"
    ]
  },
  {
    title: "Diretor de Restauração e Bebidas",
    organizational: "Representa os pontos de cultura na forma como trabalha e se relaciona com equipa, clientes e/ou fornecedores?",
    technical: [
      "Define e executa a estratégia global do negócio?",
      "Garante o alinhamento operacional entre os diferentes setores?",
      "Analisa os indicadores e toma decisões estratégicas?",
      "Garante a evolução consistente dos resultados operacionais?",
      "Lidera os líderes de setor com foco em resultados?"
    ],
    behavioral: [
      "Demonstra uma liderança estratégica?",
      "Toma decisões em contextos complexos?",
      "Influencia positivamente a equipa de liderança?",
      "Mantém uma visão de longo prazo?"
    ]
  },
  {
    title: "Gerente",
    organizational: "Representa os pontos de cultura na forma como trabalha e se relaciona com equipa, clientes e/ou fornecedores?",
    technical: [
      "Garante o funcionamento eficiente da receção e da área comercial?",
      "Acompanha e desenvolve a atividade comercial?",
      "Garante o alinhamento entre a área comercial e a operação?",
      "Garante a consistência no acolhimento do cliente?",
      "Identifica melhorias na experiência do cliente?"
    ],
    behavioral: [
      "Demonstra uma liderança clara da equipa?",
      "Influencia os resultados da equipa?",
      "Resolve desafios com eficácia e eficiência?",
      "Garante alinhamento e consistência no desempenho da equipa?"
    ]
  },
  {
    title: "Chefe de Cozinha",
    organizational: "Representa os pontos de cultura na forma como trabalha e se relaciona com equipa, clientes e/ou fornecedores?",
    technical: [
      "Garante a consistência e qualidade dos pratos?",
      "Assegura a organização e ritmo da cozinha durante o serviço?",
      "Controla custos e desperdícios?",
      "Garante o cumprimento de normas de HACCP?",
      "Desenvolve processos de melhoria operacional?"
    ],
    behavioral: [
      "Lidera a equipa de forma clara?",
      "Toma decisões sob pressão?",
      "Desenvolve a equipa tecnicamente?",
      "Demonstra elevado sentido de responsabilidade?"
    ]
  },
  {
    title: "Encarregado de Armazém",
    organizational: "Representa os pontos de cultura na forma como trabalha e se relaciona com equipa, clientes e/ou fornecedores?",
    technical: [
      "Garante o stock contínuo para a operação?",
      "Controla rigorosamente os stocks e inventários?",
      "Negocia eficazmente com fornecedores?",
      "Garante a organização logística do armazém?",
      "Identifica melhorias nos processos?"
    ],
    behavioral: [
      "Demonstra capacidade de decisão?",
      "Lidera a sua equipa com clareza?",
      "Comunica eficazmente com a equipa?",
      "Atua com visão global da operação?"
    ]
  },
  {
    title: "Chefe de Controlo",
    organizational: "Representa os pontos de cultura na forma como trabalha e se relaciona com equipa, clientes e/ou fornecedores?",
    technical: [
      "Elabora horários equilibrados e eficientes?",
      "Garante todas as condições operacionais para a equipa?",
      "Coordena a equipa de limpeza garantindo organização e fluidez da operação?",
      "Assegura a rápida resolução de falhas de equipamentos, materiais ou recursos?",
      "Assegura a continuidade da operação em falhas humanas?"
    ],
    behavioral: [
      "Demonstra polivalência e disponibilidade para assumir diferentes funções?",
      "Atua com autonomia na resolução de problemas?",
      "Mantém controlo e organização mesmo em contextos de pressão?",
      "Comunica de forma clara e direta?"
    ]
  },
  {
    title: "Chefe de Bar",
    organizational: "Representa os pontos de cultura na forma como trabalha e se relaciona com equipa, clientes e/ou fornecedores?",
    technical: [
      "Garante a consistência técnica das bebidas?",
      "Controla custos e desperdícios do setor?",
      "Assegura a organização e fluidez do serviço de bar?",
      "Desenvolve novas receitas com a liderança?",
      "Forma a equipa garantindo os padrões técnicos definidos?"
    ],
    behavioral: [
      "Lidera a equipa de forma operacional?",
      "Mantém a organização sob pressão?",
      "Demonstra iniciativa e criatividade?",
      "Comunica eficazmente com a equipa de diferentes setores?"
    ]
  },
  {
    title: "Chefe de Sala",
    organizational: "Representa os pontos de cultura na forma como trabalha e se relaciona com equipa, clientes e/ou fornecedores?",
    technical: [
      "Garante a fluidez e organização do serviço?",
      "Acompanha o desempenho da equipa?",
      "Garante a gestão equilibrada de clientes?",
      "Resolve eficazmente as reclamações?",
      "Desenvolve a venda média através da equipa?"
    ],
    behavioral: [
      "Lidera com clareza e assertividade?",
      "Toma decisões sob pressão?",
      "Motiva a equipa para atingir os resultados?",
      "Foca-se na experiência do cliente?"
    ]
  },
  {
    title: "Assistente de Vendas de 2ª",
    organizational: "Representa os pontos de cultura na forma como trabalha e se relaciona com equipa, clientes e/ou fornecedores?",
    technical: [
      "Promove a prospeção de clientes?",
      "Responde a pedidos comerciais dentro do prazo?",
      "Regista corretamente os contactos comerciais?",
      "Apoia a preparação de propostas?",
      "Garante a articulação com operação?"
    ],
    behavioral: [
      "Comunica eficazmente?",
      "Demonstra proatividade comercial?",
      "Organiza e acompanha contactos?",
      "Mantém a orientação para o cliente?"
    ]
  },
  {
    title: "Chefe de Manutenção, Conservação e Serviços Técnicos",
    organizational: "Representa os pontos de cultura na forma como trabalha e se relaciona com equipa, clientes e/ou fornecedores?",
    technical: [
      "Garante a disponibilidade operacional das instalações e equipamentos?",
      "Planeia e executa a manutenção preventiva de forma eficaz?",
      "Assegura a rápida resolução de avarias com o mínimo impacto na operação?",
      "Identifica riscos técnicos e implementa medidas preventivas?",
      "Gere os recursos técnicos e custos de manutenção de forma eficiente?"
    ],
    behavioral: [
      "Demonstra liderança clara da sua equipa?",
      "Toma decisões rápidas e eficazes em situações críticas?",
      "Comunica de forma clara com a operação e direção?",
      "Atua com elevado sentido de responsabilidade sobre a operação?"
    ]
  },
  {
    title: "Cozinheiro de 3ª - Preparação",
    organizational: "Representa os pontos de cultura na forma como trabalha e se relaciona com equipa, clientes e/ou fornecedores?",
    technical: [
      "Executa tarefas de preparação conforme as orientações?",
      "Cumpre as fichas técnicas e receitas da preparação?",
      "Garante a correta conservação e armazenamento de alimentos?",
      "Mantém a organização e limpeza da área de preparação?",
      "Assegura a disponibilidade de produtos para o serviço?"
    ],
    behavioral: [
      "Demonstra responsabilidade na execução das tarefas?",
      "Trabalha de forma colaborativa com a equipa?",
      "Demonstra vontade de aprender e evoluir?",
      "Mantém a organização e disciplina no trabalho?"
    ]
  },
  {
    title: "Cozinheiro de 2ª - Preparação",
    organizational: "Representa os pontos de cultura na forma como trabalha e se relaciona com equipa, clientes e/ou fornecedores?",
    technical: [
      "Executa preparações com autonomia e sem erros?",
      "Assegura o planeamento eficaz da preparação?",
      "Garante a disponibilidade atempada de produtos para o serviço?",
      "Controla quantidades evitando ruturas e desperdício?",
      "Assegura a correta conservação e rotatividade de produtos?"
    ],
    behavioral: [
      "Demonstra proatividade na organização do trabalho?",
      "Apresenta disciplina e consistência no cumprimento dos processos?",
      "Comunica eficazmente com a equipa de cozinha?",
      "Mantém a consistência e rigor na execução?"
    ]
  },
  {
    title: "Cozinheiro de 2ª - Operação",
    organizational: "Representa os pontos de cultura na forma como trabalha e se relaciona com equipa, clientes e/ou fornecedores?",
    technical: [
      "Executa pratos com consistência conforme as fichas técnicas?",
      "Mantém o ritmo e fluidez durante o serviço?",
      "Garante qualidade no empratamento e apresentação?",
      "Antecipa necessidades evitando falhas no serviço?",
      "Cumpre as normas de higiene e segurança alimentar?"
    ],
    behavioral: [
      "Mantém desempenho sob pressão?",
      "Demonstra responsabilidade no serviço?",
      "Trabalha em equipa de forma eficaz?",
      "Demonstra proatividade durante o serviço?"
    ]
  },
  {
    title: "Cozinheiro de 1ª",
    organizational: "Representa os pontos de cultura na forma como trabalha e se relaciona com equipa, clientes e/ou fornecedores?",
    technical: [
      "Garante a consistência técnica e qualidade dos pratos?",
      "Coordena o setor assegurando organização e eficiência?",
      "Controla desperdícios da sua área?",
      "Forma e acompanha cozinheiros menos experientes?",
      "Garante o cumprimento rigoroso de normas e procedimentos definidos?"
    ],
    behavioral: [
      "Demonstra liderança técnica junto da equipa?",
      "Toma decisões eficazes durante o serviço?",
      "Comunica de forma clara com equipa e liderança?",
      "Atua com foco em resultados e melhoria contínua?"
    ]
  }
];

const fileContent = performanceIntroStr +
  'export const performanceCriteriaData: PerformanceCriteria[] = ' +
  JSON.stringify(criteria, null, 2) +
  ';\\n';

fs.writeFileSync('src/data/performanceCriteria.ts', fileContent);
console.log('Finished updating performanceCriteria.ts');
