export interface PerformanceCriteria {
  title: string;
  organizational: string;
  technical: string[];
  behavioral: string[];
}

export const performanceIntro = {
  objective: "A avaliação de desempenho tem como objetivo acompanhar o desenvolvimento dos colaboradores, garantir padrões consistentes de trabalho e apoiar decisões de progressão e atualização salarial.\n\nA avaliação é realizada trimestralmente, sendo o resultado anual obtido pela análise conjunta das 4 avaliações do ano.",
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

export const performanceCriteriaData: PerformanceCriteria[] = [
  {
    "title": "Copeiro Júnior (até 2 anos)",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Lava e arruma a loiça de acordo com os procedimentos definidos.",
      "Mantém a copa limpa e organizada durante o turno.",
      "Cumpre as normas básicas de higiene e segurança alimentar.",
      "Garante reposição de loiça quando solicitado pela cozinha ou sala.",
      "Utiliza corretamente os equipamentos da copa."
    ],
    "behavioral": [
      "Cumpre horários, pausas e escalas definidos.",
      "Segue instruções da liderança sem necessidade de repetição constante.",
      "Mantém colaboração com a equipa durante o serviço.",
      "Comunica falhas ou necessidades operacionais à liderança.",
      "Mantém a apresentação pessoal e higiene adequadas durante o turno."
    ]
  },
  {
    "title": "Copeiro Sénior (mais de 2 anos)",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Executa a lavagem e arrumação da loiça de forma correta e consistente.",
      "Mantém a copa organizada e funcional ao longo de todo o serviço.",
      "Cumpre rigorosamente as normas de higiene e segurança alimentar.",
      "Garante reposição contínua de loiça sem necessidade de solicitação.",
      "Utiliza equipamentos corretamente, prevenindo avarias e desperdícios."
    ],
    "behavioral": [
      "Cumpre horários e escalas sem incumprimentos recorrentes.",
      "Mantém ritmo de trabalho adequado em períodos de maior movimento.",
      "Colabora ativamente com os outros setores.",
      "Comunica antecipadamente problemas ou ruturas.",
      "Mantém postura profissional e apresentação adequada."
    ]
  },
  {
    "title": "Chefe de Copa",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Organiza e distribui tarefas da equipa de copa de forma eficaz.",
      "Garante cumprimento dos procedimentos de higiene e segurança.",
      "Assegura a disponibilidade contínua de loiça e utensílios.",
      "Supervisiona o funcionamento e conservação dos equipamentos.",
      "Controla a organização e limpeza geral da área de copa."
    ],
    "behavioral": [
      "Lidera a equipa pelo exemplo no cumprimento de regras.",
      "Comunica de forma clara com os outros setores.",
      "Resolve falhas operacionais garantindo que não faltam utensílios e loiça.",
      "Forma e acompanha copeiros menos experientes.",
      "Mantém postura profissional, liderança e apresentação adequadas."
    ]
  },
  {
    "title": "Técnico de Limpeza",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Executa as tarefas de limpeza conforme os procedimentos definidos.",
      "Garante níveis adequados de higiene nas áreas atribuídas.",
      "Utiliza corretamente os produtos e equipamentos de limpeza.",
      "Cumpre planos de limpeza nos horários estabelecidos.",
      "Mantém os materiais de limpeza organizados e identificados."
    ],
    "behavioral": [
      "Cumpre os horários e escalas definidos.",
      "Executa as tarefas sem interferir com o conforto ou circulação dos clientes.",
      "Comunica necessidades adicionais de limpeza ou de reposição.",
      "Segue instruções da liderança sem necessidade de correções frequentes.",
      "Mantém a apresentação pessoal adequada."
    ]
  },
  {
    "title": "Encarregado de Limpeza",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Distribui tarefas da equipa de limpeza de forma eficiente.",
      "Garante o cumprimento dos planos e padrões de limpeza.",
      "Supervisiona e corrige falhas de execução.",
      "Gere as escalas assegurando cobertura de todas as áreas definidas.",
      "Controla a utilização correta dos produtos e equipamentos."
    ],
    "behavioral": [
      "Comunica orientações de forma clara à equipa.",
      "Atua preventivamente na identificação de falhas.",
      "Mantém a organização geral das áreas sob responsabilidade.",
      "Acompanha o trabalho da equipa e corrige falhas de execução quando necessário.",
      "Mantém uma postura profissional e apresentação adequadas."
    ]
  },
  {
    "title": "Ajudante de Todas as Secções (Armazém)",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Colabora na receção, transporte e organização de mercadorias no armazém.",
      "Executa corretamente as tarefas operacionais atribuídas.",
      "Cumpre os procedimentos de higiene, segurança e organização do armazém.",
      "Contribui para a manutenção da limpeza e organização do espaço de trabalho.",
      "Colabora com a equipa para assegurar o bom funcionamento das atividades do armazém."
    ],
    "behavioral": [
      "Cumpre horários e escalas definidos.",
      "Segue instruções sem necessidade de repetição constante.",
      "Colabora com a equipa de forma contínua.",
      "Comunica dificuldades ou erros identificados.",
      "Mantém uma postura profissional e apresentação adequada."
    ]
  },
  {
    "title": "Assistente de Armazém",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Executa tarefas de receção, armazenamento e reposição de mercadorias com autonomia.",
      "Garante a correta organização e identificação dos produtos no armazém.",
      "Cumpre e aplica os procedimentos de controlo e registo de materiais.",
      "Assegura a disponibilidade dos materiais necessários às diferentes áreas da operação.",
      "Contribui para a eficiência do funcionamento do armazém através da correta gestão das tarefas atribuídas."
    ],
    "behavioral": [
      "Cumpre horários e as responsabilidades atribuídas.",
      "Mantém organização e método de trabalho.",
      "Comunica ruturas ou inconformidades ao Fiel de armazém.",
      "Colabora com as outras áreas operacionais.",
      "Mantém uma postura profissional e apresentação adequada."
    ]
  },
  {
    "title": "Fiel de Armazém",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Assegura o controlo e atualização dos registos de stock.",
      "Executa e acompanha inventários garantindo fiabilidade da informação.",
      "Garante o correto registo de entradas e saídas de mercadorias.",
      "Identifica desvios ou necessidades de reposição e comunica atempadamente.",
      "Contribui para a melhoria da organização e controlo."
    ],
    "behavioral": [
      "Comunica de forma clara com liderança e fornecedores.",
      "Identifica antecipadamente necessidades de reposição de produtos.",
      "Mantém a organização e disciplina no armazém.",
      "Apoia tecnicamente funções de armazém menos experientes.",
      "Mantém uma postura profissional e apresentação adequada."
    ]
  },
  {
    "title": "Encarregado de Armazém",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Planeia e coordena a gestão de stocks garantindo o abastecimento adequado da operação.",
      "Organiza e supervisiona o trabalho da equipa do armazém.",
      "Garante a fiabilidade dos registos de stock e dos inventários.",
      "Negocia com fornecedores e acompanha processos de encomenda e abastecimento.",
      "Identifica e implementa melhorias na organização e funcionamento do armazém."
    ],
    "behavioral": [
      "Lidera a equipa com clareza e assertividade.",
      "Toma decisões operacionais em tempo útil.",
      "Comunica eficazmente com lideranças operacionais e equipa.",
      "Garante o cumprimento de regras e procedimentos.",
      "Mantém uma postura profissional e apresentação adequadas."
    ]
  },
  {
    "title": "Ajudante de Todas as Secções (Manutenção)",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Apoia tarefas básicas de manutenção conforme instruções recebidas.",
      "Utiliza corretamente ferramentas manuais simples.",
      "Mantém as áreas de trabalho limpas e organizadas após intervenções.",
      "Executa tarefas de transporte e apoio logístico de materiais.",
      "Cumpre as regras básicas de segurança no trabalho."
    ],
    "behavioral": [
      "Cumpre horários, pausas e escalas definidos.",
      "Segue instruções técnicas sem necessidade de repetição constante.",
      "Demonstra disponibilidade para apoiar em diferentes secções.",
      "Comunica dificuldades ou erros identificados durante as tarefas.",
      "Mantém uma postura profissional e apresentação adequada."
    ]
  },
  {
    "title": "Carpinteiro em Geral de 2ª",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Executa trabalhos de manutenção e reparação conforme as orientações técnicas.",
      "Utiliza corretamente ferramentas e equipamentos da sua área.",
      "Cumpre as normas de segurança em todas as intervenções.",
      "Realiza trabalhos dentro dos prazos definidos.",
      "Identifica necessidades básicas de reparação nas instalações."
    ],
    "behavioral": [
      "Cumpre horários e responsabilidades atribuídas.",
      "Mantém método e organização no trabalho.",
      "Colabora com colegas e outras áreas operacionais.",
      "Comunica de forma clara o estado das intervenções.",
      "Mantém uma postura profissional e apresentação adequada."
    ]
  },
  {
    "title": "Carpinteiro em Geral de 1ª",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Executa trabalhos técnicos complexos com autonomia.",
      "Interpreta corretamente instruções técnicas e desenhos simples.",
      "Garante qualidade e acabamento adequado dos trabalhos realizados.",
      "Cumpre rigorosamente normas de segurança e boas práticas.",
      "Identifica e propõe soluções técnicas para problemas recorrentes."
    ],
    "behavioral": [
      "Cumpre os prazos definidos para as intervenções.",
      "Mantém organização e disciplina no trabalho.",
      "Apoia tecnicamente os elementos menos experientes.",
      "Comunica antecipadamente necessidades de materiais ou intervenções técnicas.",
      "Mantém uma postura profissional e apresentação adequada."
    ]
  },
  {
    "title": "Chefe de Manutenção",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Planeia e organiza as atividades de manutenção preventiva e corretiva.",
      "Coordena a execução das intervenções técnicas da equipa.",
      "Garante o cumprimento das normas de segurança e legais.",
      "Controla o estado das instalações e equipamentos.",
      "Articula as várias intervenções de manutenção."
    ],
    "behavioral": [
      "Lidera a equipa com clareza.",
      "Toma decisões técnicas em tempo útil.",
      "Comunica eficazmente com a direção e áreas operacionais.",
      "Identifica riscos técnicos nas instalações e planeia intervenções antes de ocorrerem falhas.",
      "Mantém uma postura profissional e apresentação adequadas."
    ]
  },
  {
    "title": "Chefe de Manutenção, Conservação e Serviços Técnicos",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Define e gere o plano global de manutenção e serviços técnicos.",
      "Supervisiona todas as áreas técnicas do setor.",
      "Garante conformidade legal e segurança das instalações.",
      "Controla custos e recursos da área técnica.",
      "Avalia o desempenho técnico das equipas e fornecedores."
    ],
    "behavioral": [
      "Lidera equipas técnicas com uma visão global.",
      "Toma decisões estratégicas relacionadas com manutenção.",
      "Comunica de forma clara com direção e liderança operacional.",
      "Atua preventivamente na melhoria contínua das instalações.",
      "Mantém uma postura profissional e apresentação adequadas."
    ]
  },
  {
    "title": "Estagiário / Ajudante de Cozinha",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Executa tarefas básicas de apoio à cozinha conforme as instruções recebidas.",
      "Realiza a preparação simples de alimentos de acordo com orientações.",
      "Mantém o posto de trabalho limpo e organizado.",
      "Cumpre normas básicas de higiene e segurança alimentar.",
      "Utiliza corretamente os utensílios e equipamentos simples."
    ],
    "behavioral": [
      "Cumpre horários, pausas e escalas definidos.",
      "Segue as instruções da liderança sem necessidade de repetição constante.",
      "Demonstra disponibilidade para aprender e executar novas tarefas.",
      "Colabora com a equipa durante o serviço.",
      "Mantém uma apresentação pessoal e higiene adequadas."
    ]
  },
  {
    "title": "Cozinheiro de 3ª",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Executa preparações simples conforme fichas técnicas ou orientações.",
      "Cumpre tempos e métodos de confeção definidos.",
      "Mantém organization e limpeza do posto de trabalho.",
      "Cumpre normas de higiene e segurança alimentar.",
      "Utiliza corretamente os equipamentos e utensílios da cozinha."
    ],
    "behavioral": [
      "Cumpre horários e responsabilidades atribuídas.",
      "Mantém ritmo de trabalho adequado durante o serviço.",
      "Segue instruções técnicas sem necessidade de correções frequentes.",
      "Colabora com colegas de forma consistente.",
      "Mantém uma postura profissional e apresentação adequadas."
    ]
  },
  {
    "title": "Cozinheiro de 2ª",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Executa preparações com autonomia dentro da sua secção.",
      "Cumpre fichas técnicas, métodos e padrões definidos.",
      "Garante qualidade e consistência dos pratos executados.",
      "Cumpre rigorosamente normas de higiene e segurança alimentar.",
      "Organiza e prepara a secção antes do serviço."
    ],
    "behavioral": [
      "Cumpre prazos e tempos de serviço definidos.",
      "Mantém organização e método de trabalho.",
      "Comunica necessidades ou falhas à liderança.",
      "Colabora ativamente com a equipa durante o serviço.",
      "Mantém uma postura profissional e apresentação adequadas."
    ]
  },
  {
    "title": "Pizzaiolo",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Prepara massas e ingredientes de acordo com os padrões definidos.",
      "Executa pizzas respeitando tempos, temperaturas e métodos.",
      "Garante qualidade, apresentação e consistência do produto final.",
      "Cumpre normas de higiene e segurança alimentar.",
      "Mantém organização e limpeza da área de trabalho."
    ],
    "behavioral": [
      "Cumpre horários e ritmo de produção definidos.",
      "Mantém foco e precisão durante períodos de maior volume.",
      "Comunica necessidades de ingredientes ou falhas técnicas.",
      "Colabora com a equipa da cozinha durante o serviço.",
      "Mantém uma postura profissional e apresentação adequadas."
    ]
  },
  {
    "title": "Cozinheiro de 1ª",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Executa preparações culinárias complexas com autonomia e rigor técnico.",
      "Garante qualidade, sabor e apresentação consistentes dos pratos da sua secção.",
      "Cumpre e aplica corretamente fichas técnicas, métodos e padrões definidos.",
      "Organiza e coordena o funcionamento da sua secção durante o serviço.",
      "Assume a coordenação da cozinha na ausência do Subchefe ou Chefe de Cozinha, garantindo organização e continuidade do serviço."
    ],
    "behavioral": [
      "Mantém desempenho consistente mesmo em períodos de maior pressão operacional.",
      "Apoia tecnicamente cozinheiros menos experientes quando necessário.",
      "Comunica de forma clara com a equipa de cozinha durante o serviço.",
      "Demonstra sentido de responsabilidade no cumprimento dos padrões da cozinha.",
      "Mantém uma postura profissional e apresentação adequadas."
    ]
  },
  {
    "title": "Subchefe de Cozinha",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Coordena a execução das secções durante o serviço.",
      "Supervisiona a qualidade e consistência dos pratos.",
      "Garante o cumprimento de normas de higiene e segurança.",
      "Organiza e distribui tarefas da equipa de cozinha.",
      "Substitui o Chefe de Cozinha na sua ausência."
    ],
    "behavioral": [
      "Lidera a equipa com clareza e firmeza.",
      "Mantém controlo emocional em períodos de pressão.",
      "Comunica de forma eficaz com a equipa e liderança.",
      "Identifica falhas na organização da cozinha e corrige-as antes de afetarem o serviço.",
      "Mantém uma postura profissional e apresentação adequadas."
    ]
  },
  {
    "title": "Chefe de Cozinha",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Planeia e organiza o funcionamento global da cozinha e supervisiona o desempenho técnico da equipa.",
      "Define e implementa padrões de qualidade e produção.",
      "Garante o cumprimento das normas legais, de higiene e segurança.",
      "Controla custos, desperdícios e recursos da cozinha.",
      "Controla o food cost da cozinha através da gestão eficiente das matérias-primas, cumprimento rigoroso das fichas técnicas e redução consistente do desperdício."
    ],
    "behavioral": [
      "Lidera e desenvolve a equipa de cozinha.",
      "Toma decisões operacionais e técnicas em tempo útil.",
      "Comunica eficazmente com liderança e outras áreas.",
      "Implementa melhorias na organização, produção e funcionamento da cozinha.",
      "Mantém uma postura profissional e representação institucional adequadas."
    ]
  },
  {
    "title": "Estagiário / Ajudante de Todas as Secções (Sala)",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Prepara mesas e áreas de serviço de acordo com os padrões definidos.",
      "Transporta materiais e louça de forma correta e segura.",
      "Apoia a equipa garantindo reposição de materiais necessários ao serviço.",
      "Mantém organização e limpeza das áreas de trabalho durante o serviço.",
      "Cumpre normas básicas de higiene e segurança alimentar."
    ],
    "behavioral": [
      "Demonstra disponibilidade para aprender e evoluir no serviço.",
      "Colabora com os colegas garantindo fluidez do serviço.",
      "Cumpre as tarefas atribuídas com responsabilidade.",
      "Mantém uma apresentação pessoal e imagem adequadas."
    ]
  },
  {
    "title": "Assistente de Sala de 2ª",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Executa o serviço de mesas garantindo atendimento correto aos clientes.",
      "Prepara corretamente a mise-en-place antes do serviço.",
      "Conhece a ementa e presta informações básicas aos clientes.",
      "Regista pedidos de forma correta e comunica eficazmente com cozinha e bar.",
      "Mantém organização das mesas e áreas de serviço durante o turno."
    ],
    "behavioral": [
      "Demonstra orientação para o cliente no atendimento prestado, comunicando de forma clara.",
      "Comunica de forma clara com a equipa e colabora garantindo a fluidez do serviço.",
      "Mantém desempenho consistente durante períodos de maior movimento.",
      "Mantém uma apresentação pessoal adequada ao padrão da empresa."
    ]
  },
  {
    "title": "Assistente de Sala de 1ª",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Executa o serviço completo de mesas com autonomia.",
      "Assegura um atendimento personalizado ao cliente.",
      "Conhece profundamente a ementa e sugere produtos.",
      "Gere mesas e prioridades de serviço da sua área de forma eficaz.",
      "Resolve situações simples de insatisfação do cliente."
    ],
    "behavioral": [
      "Mantém o desempenho consistente sob pressão.",
      "Comunica de forma clara com equipa e liderança.",
      "Apoia tecnicamente elementos menos experientes do setor das mesas.",
      "Intervém quando identifica situações que possam comprometer o serviço ao cliente.",
      "Mantém uma apresentação pessoal adequada ao padrão da empresa."
    ]
  },
  {
    "title": "Subchefe de Sala",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Coordena a equipa das mesas durante o serviço.",
      "Distribui tarefas e assegura a cobertura das diversas áreas.",
      "Supervisiona a qualidade do serviço prestado.",
      "Garante o cumprimento dos procedimentos e padrões definidos.",
      "Substitui o Chefe de Sala na sua ausência."
    ],
    "behavioral": [
      "Lidera a equipa com clareza.",
      "Mantém controlo emocional em períodos de maior pressão.",
      "Comunica eficazmente com cozinha, bar e receção.",
      "Identifica problemas operacionais durante o serviço e intervém antes de afetarem o cliente.",
      "Mantém uma apresentação pessoal adequada ao padrão da empresa."
    ]
  },
  {
    "title": "Chefe de Sala",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Organiza o funcionamento do setor das mesas garantindo qualidade e fluidez do serviço.",
      "Acompanha o desempenho da equipa assegurando cumprimento dos padrões de atendimento.",
      "Garante uma gestão eficiente do fluxo de clientes e organização das mesas.",
      "Resolve situações operacionais e reclamações garantindo a satisfação do cliente.",
      "Promove o aumento da venda média através da organização do serviço, orientação da equipa e aplicação consistente de técnicas de sugestão de venda."
    ],
    "behavioral": [
      "Lidera a equipa das mesas com clareza e consistência durante o serviço.",
      "Intervém e resolve situações de insatisfação ou conflito com clientes.",
      "Demonstra capacidade de decisão em momentos de pressão operacional.",
      "Desenvolve a equipa incentivando sugestões e melhoria da venda média.",
      "Mantém uma apresentação pessoal adequada ao padrão da empresa, postura profissional e exemplo de comportamento para a equipa."
    ]
  },
  {
    "title": "Controlador-caixa",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Regista corretamente as operações de caixa garantindo fiabilidade dos valores faturados.",
      "Executa abertura e fecho de caixa de acordo com os procedimentos definidos.",
      "Confere pagamentos e meios de pagamento garantindo correspondência com a faturação.",
      "Organiza e prepara a documentação de suporte às caixas diárias.",
      "Identifica e comunica discrepâncias ou irregularidades nos movimentos de caixa."
    ],
    "behavioral": [
      "Demonstra rigor e atenção ao detalhe na gestão de valores.",
      "Cumpre procedimentos definidos garantindo fiabilidade da informação.",
      "Comunica de forma clara com liderança e equipa sobre movimentos de caixa.",
      "Mantém organização e método no trabalho administrativo."
    ]
  },
  {
    "title": "Controlador",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Controla e valida a informação de faturação garantindo fiabilidade dos dados registados.",
      "Acompanha indicadores operacionais garantindo consistência da informação utilizada pela gestão.",
      "Identifica e comunica inconsistências ou erros na informação operacional.",
      "Apoia o Chefe de Controlo na monitorização das condições operacionais da equipa.",
      "Organiza informação de suporte à análise do desempenho da operação."
    ],
    "behavioral": [
      "Demonstra rigor analítico no tratamento da informação.",
      "Organiza o trabalho garantindo fiabilidade dos dados analisados.",
      "Comunica de forma clara com liderança e diferentes áreas da operação.",
      "Atua com responsabilidade e confidencialidade no tratamento da informação."
    ]
  },
  {
    "title": "Chefe de Controlo",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Coordena a equipa de limpeza garantindo que os espaços operacionais se mantêm organizados, funcionais e alinhados com os padrões definidos.",
      "Assegura o funcionamento contínuo dos sistemas e equipamentos necessários à operação, articulando intervenções técnicas sempre que necessário.",
      "Acompanha o funcionamento do armazém garantindo que os recursos e materiais necessários à operação estão disponíveis em tempo útil.",
      "Identifica antecipadamente falhas ou necessidades operacionais e implementa soluções eficazes, garantindo continuidade da operação sem impacto no serviço.",
      "Garante eficiência na utilização da equipa através de planeamento eficaz de horários e distribuição equilibrada de recursos humanos, assegurando rentabilidade da operação."
    ],
    "behavioral": [
      "Atua rapidamente na resolução de problemas que possam afetar o desempenho da equipa.",
      "Demonstra capacidade de organização e priorização de tarefas operacionais.",
      "Comunica de forma clara com as diferentes equipas e lideranças operacionais.",
      "Mantém uma postura proativa na identificação de melhorias na organização da operação.",
      "Assume a coordenação da sala na ausência do Chefe de Sala garantindo continuidade do serviço."
    ]
  },
  {
    "title": "Estagiário / Ajudante de Todas as Secções (Bar)",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Apoia tarefas básicas de bar conforme instruções recebidas.",
      "Prepara o posto de trabalho antes do serviço.",
      "Realiza a reposição de bebidas e materiais necessários.",
      "Cumpre normas básicas de higiene e segurança alimentar.",
      "Mantém organização e limpeza da área de bar."
    ],
    "behavioral": [
      "Cumpre horários, pausas e escalas definidos.",
      "Segue instruções da liderança sem necessidade de repetição constante.",
      "Demonstra disponibilidade para aprender tarefas de bar.",
      "Colabora com a equipa durante o serviço.",
      "Mantém uma apresentação pessoal e imagem adequadas."
    ]
  },
  {
    "title": "Barman / Barmaid de 2ª",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Prepara e serve bebidas de acordo com as receitas e padrões definidos.",
      "Cumpre os procedimentos de serviço e higiene aplicáveis ao bar.",
      "Mantém a organização e limpeza da área de bar durante o serviço.",
      "Garante rapidez e precisão na execução das bebidas solicitadas.",
      "Colabora com a equipa para assegurar fluidez e eficiência no serviço."
    ],
    "behavioral": [
      "Cumpre tempos de serviço definidos.",
      "Mantém o ritmo de trabalho adequado em períodos de maior movimento.",
      "Comunica pedidos e necessidades à equipa.",
      "Colabora ativamente com colegas de bar, mesas e cozinha.",
      "Mantém uma postura profissional e apresentação adequadas."
    ]
  },
  {
    "title": "Barman / Barmaid de 1ª",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Prepara e serve bebidas assegurando elevado padrão técnico.",
      "Garante o cumprimento das receitas e dos procedimentos de bar.",
      "Apoia colegas menos experientes na execução correta das tarefas.",
      "Contribui para a organização e eficiência do funcionamento do bar.",
      "Identifica oportunidades de melhoria na operação e qualidade do serviço de bar."
    ],
    "behavioral": [
      "Mantém o desempenho consistente sob pressão.",
      "Comunica de forma clara com equipa e liderança.",
      "Apoia tecnicamente elementos menos experientes do setor de bar.",
      "Garante qualidade e apresentação consistentes das bebidas servidas aos clientes.",
      "Mantém uma postura profissional e apresentação adequadas."
    ]
  },
  {
    "title": "Chefe de Bar",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Coordena a operação do bar garantindo consistência na preparação das bebidas.",
      "Organiza o funcionamento do bar assegurando eficiência durante o serviço.",
      "Controla stocks e garante correta conservação dos produtos do bar.",
      "Forma e orienta a equipa de bar garantindo cumprimento dos padrões definidos.",
      "Garante controlo consistente do beverage cost, assegurando utilização eficiente das bebidas, cumprimento das margens definidas e redução de desperdícios."
    ],
    "behavioral": [
      "Coordena a equipa de bar garantindo organização e ritmo durante o serviço.",
      "Comunica orientações de forma clara à equipa.",
      "Mantém uma postura profissional e foco durante períodos de maior pressão.",
      "Acompanha o trabalho da equipa e corrige falhas quando necessário.",
      "Demonstra iniciativa na melhoria contínua do funcionamento do bar."
    ]
  },
  {
    "title": "Estagiário / Ajudante de Todas as Secções (Receção)",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Realiza o atendimento presencial e telefónico conforme orientações.",
      "Encaminha clientes, chamadas e pedidos corretamente.",
      "Regista informações básicas nos sistemas definidos.",
      "Mantém a área de receção organizada e funcional.",
      "Cumpre procedimentos básicos de receção e comunicação."
    ],
    "behavioral": [
      "Cumpre horários, pausas e escalas definidos.",
      "Mantém uma postura cordial e educada no atendimento.",
      "Comunica de forma clara e respeitosa com clientes e equipa.",
      "Segue instruções da liderança sem necessidade de repetição constante.",
      "Mantém uma postura profissional e apresentação irrepreensível."
    ]
  },
  {
    "title": "Assistente de Vendas de 2ª",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Identifica oportunidades de contacto com potenciais clientes para eventos ou serviços.",
      "Regista corretamente pedidos e contactos comerciais no sistema.",
      "Apoia a preparação de propostas comerciais para eventos.",
      "Acompanha pedidos de clientes garantindo resposta dentro dos prazos definidos.",
      "Partilha com a operação a informação necessária para preparação de eventos."
    ],
    "behavioral": [
      "Demonstra iniciativa na prospeção de novos contactos comerciais.",
      "Comunica de forma clara e profissional com potenciais clientes.",
      "Mantém organização no acompanhamento de contactos e pedidos.",
      "Demonstra persistência no acompanhamento de contactos comerciais até obter resposta do cliente.",
      "Mantém uma postura profissional e apresentação irrepreensível."
    ]
  },
  {
    "title": "Rececionista de 2ª",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Regista corretamente reservas no sistema utilizado pela empresa.",
      "Atualiza a lista de reservas garantindo informação clara para o setor das mesas.",
      "Presta informações corretas sobre funcionamento e serviços do restaurante.",
      "Mantém organização da área de receção.",
      "Comunica à operação da frente alterações ou informações relevantes sobre reservas."
    ],
    "behavioral": [
      "Recebe os clientes de forma cordial e profissional.",
      "Mantém a calma e organização em períodos de maior movimento.",
      "Comunica de forma clara com clientes e equipa da frente.",
      "Demonstra atenção e cuidado no atendimento ao cliente.",
      "Mantém uma postura profissional, acolhedora e apresentação irrepreensível."
    ]
  },
  {
    "title": "Assistente de Vendas de 1ª",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Desenvolve contactos comerciais com potenciais clientes para eventos.",
      "Elabora propostas comerciais claras e adequadas aos pedidos dos clientes.",
      "Acompanha clientes desde o primeiro contacto até à confirmação do evento.",
      "Negocia condições comerciais dentro dos limites definidos pela empresa.",
      "Garante que a informação necessária para a realização do evento é transmitida à operação."
    ],
    "behavioral": [
      "Demonstra iniciativa na captação de novos clientes.",
      "Comunica de forma persuasiva e profissional com clientes.",
      "Mantém organização no acompanhamento de processos comerciais.",
      "Acompanha oportunidades comerciais com foco na conversão de pedidos em eventos confirmados.",
      "Mantém uma postura profissional e apresentação irrepreensível e representa a empresa de forma profissional no relacionamento com clientes."
    ]
  },
  {
    "title": "Rececionista de 1ª",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Coordena a gestão diária das reservas garantindo organização dos espaços e equilíbrio no fluxo de clientes.",
      "Distribui reservas de forma equilibrada de acordo com a capacidade do restaurante.",
      "Gere alterações ou imprevistos relacionados com reservas.",
      "Garante uma comunicação eficaz com a operação da frente sobre o fluxo de clientes.",
      "Apoia rececionistas menos experientes na gestão da receção."
    ],
    "behavioral": [
      "Comunica de forma clara e profissional com clientes, garantindo um atendimento consistente na receção.",
      "Mantém organização e rigor no acompanhamento das reservas e pedidos dos clientes.",
      "Demonstra autonomia na resolução de situações relacionadas com reservas ou atendimento.",
      "Colabora com a equipa da frente garantindo alinhamento na preparação do serviço.",
      "Mantém postura profissional e acolhedora, garantindo uma apresentação irrepreensível e contribuindo para que os padrões de atendimento da receção sejam cumpridos."
    ]
  },
  {
    "title": "Subgerente",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Coordena a atividade diária da equipa comercial e de receção.",
      "Acompanha o desempenho e resultados da equipa.",
      "Garante o cumprimento dos procedimentos comerciais e de atendimento.",
      "Resolve situações comerciais e de atendimento complexas.",
      "Apoia a execução de ações e campanhas comerciais."
    ],
    "behavioral": [
      "Orienta a equipa comercial e de receção garantindo alinhamento nas práticas de atendimento e acompanhamento de clientes.",
      "Comunica objetivos e orientações de forma eficaz.",
      "Identifica problemas operacionais ou comerciais e intervém antes de afetarem o serviço ao cliente.",
      "Mantém o alinhamento entre receção, comercial e operação.",
      "Mantém postura profissional e imagem alinhadas com os padrões da empresa, dando o exemplo e assegurando o mesmo nível de rigor na equipa."
    ]
  },
  {
    "title": "Gerente",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Garante o funcionamento eficiente da receção e correta gestão das reservas.",
      "Acompanha e orienta a atividade comercial promovendo captação de eventos e desenvolvimento de clientes.",
      "Assegura comunicação eficaz entre área comercial e operação para preparação dos eventos.",
      "Define prioridades e acompanha o trabalho da equipa garantindo consistência no atendimento e acompanhamento comercial.",
      "Garante elevados níveis de satisfação e felicidade do cliente, assegurando que a experiência global corresponde de forma consistente aos padrões definidos."
    ],
    "behavioral": [
      "Orienta a equipa de receção e comercial garantindo alinhamento nas práticas de atendimento e acompanhamento de clientes.",
      "Mantém comunicação clara e profissional com clientes, parceiros e equipa.",
      "Demonstra capacidade de decisão e intervention na resolução de situações que possam afetar o serviço.",
      "Promove a organização e consistência no acompanhamento de clientes e eventos.",
      "Mantém postura profissional exemplar e assegura que os padrões de atendimento e imagem da empresa são consistentemente aplicados na receção e na área comercial."
    ]
  },
  {
    "title": "Supervisor de Operações",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Supervisiona a operação das mesas e bar garantindo organização, ritmo e fluidez do serviço.",
      "Identifica falhas operacionais e intervém rapidamente para garantir continuidade do serviço.",
      "Garante alinhamento entre as equipas das mesas e bar durante o serviço.",
      "Verifica o cumprimento dos padrões de serviço e apresentação nas áreas de mesas e bar.",
      "Assegura equilíbrio entre faturação e beverage cost, garantindo eficiência operacional da área e contribuindo para a rentabilidade global da operação."
    ],
    "behavioral": [
      "Comunica orientações operacionais de forma clara às equipas.",
      "Intervém rapidamente quando identifica problemas que possam afetar o serviço.",
      "Mantém postura profissional e controlo da operação em momentos de pressão.",
      "Apoia as lideranças de setor na organização do trabalho das equipas.",
      "Demonstra iniciativa na melhoria contínua da experiência do cliente."
    ]
  },
  {
    "title": "Assistente de Direção",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Apoia o Diretor de R&B na coordenação global da operação.",
      "Acompanha resultados operacionais e financeiros da unidade.",
      "Coordena e acompanha lideranças intermédias no cumprimento de objetivos.",
      "Garante aplicação das políticas, procedimentos e orientações da Direção Operacional.",
      "Representa o Diretor de R&B na sua ausência em decisões operacionais."
    ],
    "behavioral": [
      "Demonstra capacidade de liderança transversal.",
      "Comunica de forma clara e profissional with equipas e lideranças.",
      "Atua com discrição e confidencialidade na gestão de informação.",
      "Mantém controlo emocional em contextos de pressão.",
      "Mantém postura profissional e imagem alinhadas com a Direção."
    ]
  },
  {
    "title": "Diretor de Restauração e Bebidas",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Garante rentabilidade e sustentabilidade financeira da operação.",
      "Define padrões de qualidade, serviço e produto.",
      "Analisa indicadores estratégicos e toma decisões corretivas.",
      "Define prioridades estratégicas, identifica oportunidades de melhoria na operação e lidera mudanças.",
      "Garante o desempenho económico positivo da área de restauração e bebidas, assegurando evolução do EBITDA através da otimização da operação, crescimento da faturação e controlo de custos."
    ],
    "behavioral": [
      "Lidera a organização com visão estratégica.",
      "Toma decisões estruturais com base em dados e contexto.",
      "Comunica de forma clara, inspiradora e profissional.",
      "Atua com foco em resultados e desenvolvimento sustentável.",
      "Demonstra elevado sentido ético e responsabilidade profissional."
    ]
  },
  {
    "title": "Escriturário de 3ª",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Executa tarefas administrativas básicas garantindo organização e rigor na informação tratada.",
      "Regista e atualiza dados em sistemas administrativos de forma correta e atempada.",
      "Organiza e arquiva documentação física e digital garantindo fácil acesso à informação.",
      "Cumpre os procedimentos administrativos definidos para cada processo.",
      "Apoia tarefas administrativas das diferentes áreas conforme orientação da liderança."
    ],
    "behavioral": [
      "Cumpre as tarefas atribuídas com responsabilidade e atenção ao detalhe.",
      "Comunica de forma clara com colegas e liderança sobre o trabalho realizado.",
      "Demonstra disponibilidade para aprender novos processos e tarefas.",
      "Colabora com a equipa garantindo bom funcionamento das atividades administrativas."
    ]
  },
  {
    "title": "Escriturário de 2ª",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Executa tarefas administrativas com autonomia garantindo cumprimento de prazos definidos.",
      "Apoia processos administrativos das áreas financeira e de recursos humanos.",
      "Atualiza e controla informação em sistemas administrativos garantindo fiabilidade dos dados.",
      "Organiza documentação administrativa assegurando rastreabilidade da informação.",
      "Acompanha processos administrativos garantindo o seu correto seguimento."
    ],
    "behavioral": [
      "Demonstra organização e método na execução das tarefas.",
      "Comunica de forma clara com colegas e liderança sobre processos administrativos.",
      "Assume responsabilidade pelo cumprimento dos prazos administrativos.",
      "Colabora com diferentes áreas garantindo fluidez nos processos internos."
    ]
  },
  {
    "title": "Escriturário de 1ª",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Gere processos administrativos com elevado grau de autonomia garantindo rigor e fiabilidade da informação tratada.",
      "Apoia a área financeira no acompanhamento e organização da informação administrativa necessária ao controlo da atividade.",
      "Apoia a gestão administrativa de recursos humanos garantindo organização e atualização da documentação dos colaboradores.",
      "Organiza e prepara documentação administrativa necessária ao funcionamento dos processos financeiros e de recursos humanos.",
      "Analisa e verifica informação administrativa garantindo fiabilidade dos dados utilizados nos processos financeiros e de recursos humanos."
    ],
    "behavioral": [
      "Demonstra elevado sentido de responsabilidade na gestão da informação.",
      "Comunica de forma clara com liderança e diferentes áreas da organização.",
      "Organiza prioridades garantindo cumprimento de prazos administrativos.",
      "Apoia tecnicamente elementos administrativos menos experientes."
    ]
  },
  {
    "title": "Chefe de Secção",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Coordena a equipa administrativa garantindo organização e eficiência dos processos.",
      "Supervisiona processos administrativos e de recursos humanos garantindo cumprimento de procedimentos e fiabilidade de informação.",
      "Assegura cumprimento de obrigações administrativas e legais aplicáveis à empresa e à sua atividade.",
      "Valida registos administrativos e informação de suporte ao processamento salarial garantindo correção dos dados.",
      "Assegura a gestão administrativa da loja, incluindo controlo de encomendas, acompanhamento de stocks e atualização de preçários."
    ],
    "behavioral": [
      "Lidera a equipa administrativa com clareza e organização.",
      "Comunica de forma eficaz com direção e diferentes áreas da empresa.",
      "Toma decisões operacionais garantindo continuidade dos processos administrativos.",
      "Desenvolve competências da equipa administrativa."
    ]
  },
  {
    "title": "Diretor de Serviços (Administrativos e Financeiros)",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Define e implementa a estratégia administrativa e financeira da empresa.",
      "Supervisiona a gestão financeira garantindo controlo rigoroso de resultados.",
      "Assegura conformidade legal, fiscal e administrativa da organização.",
      "Analisa indicadores financeiros e apoia a direção na tomada de decisões estratégicas.",
      "Avalia propostas e acordos com base na análise de indicadores financeiros garantindo a sua viabilidade económica."
    ],
    "behavioral": [
      "Demonstra visão estratégica na gestão administrativa e financeira.",
      "Comunica de forma clara e estruturada com a direção e restantes áreas da organização.",
      "Toma decisões fundamentadas com base na análise financeira e nos indicadores de gestão.",
      "Demonstra rigor analítico e sentido crítico na interpretação de informação financeira, apoiando decisões com base em dados fiáveis."
    ]
  },
  {
    "title": "Diretor de Serviços Técnicos (Recursos Humanos)",
    "organizational": "Representa os pontos de cultura na forma como trabalha e interage com a equipa e clientes, garantindo cuidado com imagem, higiene, comunicação e atenção ao detalhe na experiência do cliente.",
    "technical": [
      "Define e implementa a estratégia de recursos humanos garantindo alinhamento entre necessidades da operação e desenvolvimento das equipas.",
      "Assegura o cumprimento da legislação laboral e dos procedimentos internos relacionados com a gestão de pessoas.",
      "Garante a implementação eficaz dos processos de recrutamento, avaliação de desempenho e desenvolvimento de colaboradores.",
      "Apoia a liderança no desenvolvimento das equipas e na gestão de desempenho dos colaboradores.",
      "Monitoriza e controla os custos totais de recursos humanos, garantindo que a percentagem anual definida pela empresa é respeitada através do acompanhamento rigoroso dos indicadores e apoio técnico à tomada de decisão."
    ],
    "behavioral": [
      "Demonstra capacidade de influência junto da liderança promovendo boas práticas de gestão de pessoas.",
      "Comunica de forma clara e estruturada com direção, lideranças e colaboradores.",
      "Atua com elevado sentido de ética, confidencialidade e responsabilidade institucional.",
      "Promove um ambiente organizacional equilibrado através da mediação construtiva de situações relacionadas com pessoas e equipas."
    ]
  }
];
