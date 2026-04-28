export interface FunctionalProfile {
  title: string;
  mission: string;
  kpi?: string;
  responsibilities: string[];
  technicalSkills: string[];
  behavioralSkills: string[];
}

export interface Sector {
  name: string;
  roles: FunctionalProfile[];
}

export const functionalProfilesData: Sector[] = [
  {
    name: 'Armazém',
    roles: [
      {
        title: 'Ajudante de Todas as Secções (Armazém)',
        mission: 'Apoiar as diferentes secções do armazém nas tarefas de receção, movimentação e organização de mercadorias, contribuindo para o bom funcionamento logístico da operação.',
        responsibilities: [
          'Colaborar na receção e conferência de mercadorias',
          'Auxiliar na arrumação de produtos nos locais definidos',
          'Apoiar a distribuição interna de mercadorias',
          'Cumprir normas de higiene, segurança e organização',
          'Executar tarefas operacionais sob orientação',
          'Colaborar com diferentes áreas conforme necessidade'
        ],
        technicalSkills: [
          'Noções básicas de logística e armazenagem',
          'Capacidade de manuseamento de cargas',
          'Organização básica do espaço',
          'Cumprimento de procedimentos internos'
        ],
        behavioralSkills: [
          'Polivalência',
          'Espírito de equipa',
          'Responsabilidade',
          'Disponibilidade',
          'Capacidade de aprendizagem'
        ]
      },
      {
        title: 'Assistente de Armazém',
        mission: 'Assegurar a execução correta das operações de armazém, garantindo a organização, controlo e disponibilidade dos produtos necessários à operação.',
        responsibilities: [
          'Receber, conferir e registar mercadorias',
          'Organizar e manter o armazém funcional',
          'Preparar pedidos internos',
          'Executar tarefas de gestão e reposição de stocks',
          'Cumprir procedimentos e normas de segurança',
          'Identificar e comunicar anomalias'
        ],
        technicalSkills: [
          'Técnicas básicas de armazenagem (FIFO)',
          'Conferência de mercadorias',
          'Organização de stocks',
          'Utilização básica de sistemas ou registos',
          'Normas de segurança no trabalho'
        ],
        behavioralSkills: [
          'Atenção ao detalhe',
          'Autonomia operacional',
          'Sentido de organização',
          'Comunicação eficaz',
          'Fiabilidade'
        ]
      },
      {
        title: 'Fiel de Armazém',
        mission: 'Garantir o controlo rigoroso dos stocks e a fiabilidade da informação do armazém, assegurando a correta gestão de entradas, saídas e inventários.',
        responsibilities: [
          'Controlar entradas e saídas de mercadorias',
          'Assegurar registos corretos de stock',
          'Realizar inventários periódicos',
          'Controlar validade e rotação de produtos',
          'Apoiar o controlo de desperdícios',
          'Articular com compras e operação'
        ],
        technicalSkills: [
          'Gestão e controlo de stocks',
          'Técnicas de inventário',
          'Conhecimento aprofundado de FIFO/FEFO',
          'Registo e análise de dados',
          'Organização documental'
        ],
        behavioralSkills: [
          'Rigor e precisão',
          'Sentido de responsabilidade',
          'Capacidade analítica',
          'Organização',
          'Integridade'
        ]
      },
      {
        title: 'Encarregado de Armazém',
        mission: 'Coordenar a operação do armazém, assegurando a eficiência logística, o controlo de stocks e a liderança da equipa, alinhado com as necessidades da operação.',
        responsibilities: [
          'Garantir o abastecimento contínuo da operação através de planeamento eficaz de stocks, encomendas e compras.',
          'Assegurar a gestão e reposição da caixa de primeiros socorros e do material necessário aos nadadores-salvadores, garantindo a tua disponibilidade e organização.',
          'Certificar a fiabilidade da informação de stock através de controlo rigoroso de entradas, saídas e inventários.',
          'Negociar as condições de fornecimento com fornecedores garantindo equilíbrio entre custo, qualidade e prazos de entrega.',
          'Coordenar a equipa de armazém garantindo organização, segurança e eficiência logística.',
          'Identificar oportunidades de melhoria nos processos de armazenagem e distribuição interna.'
        ],
        technicalSkills: [
          'Gestão operacional de armazém',
          'Planeamento logístico',
          'Controlo avançado de stocks',
          'Liderança de equipas',
          'Conhecimento de sistemas de gestão'
        ],
        behavioralSkills: [
          'Liderança',
          'Capacidade de decisão',
          'Visão global',
          'Comunicação clara',
          'Orientação para resultados'
        ]
      }
    ]
  },
  {
    name: 'Drinks',
    roles: [
      {
        title: 'Estagiário / Ajudante de Todas as Secções (Bar)',
        mission: 'Apoiar o funcionamento do bar na preparação, organização e reposição, garantindo condições adequadas para o serviço e desenvolvimento de competências básicas de bar.',
        responsibilities: [
          'Apoiar na preparação do bar antes do serviço',
          'Repor bebidas, gelo e materiais',
          'Auxiliar na limpeza e organização do bar',
          'Apoiar o barman durante o serviço',
          'Cumprir normas de higiene e segurança',
          'Executar tarefas sob orientação da liderança'
        ],
        technicalSkills: [
          'Noções básicas de funcionamento de bar',
          'Conhecimento elementar de bebidas',
          'Organização do posto de trabalho',
          'Cumprimento de procedimentos'
        ],
        behavioralSkills: [
          'Vontade de aprender',
          'Espírito de equipa',
          'Responsabilidade',
          'Boa apresentação',
          'Disponibilidade'
        ]
      },
      {
        title: 'Barman / Barmaid de 2ª',
        mission: 'Executar o serviço de bar com autonomia operacional, assegurando qualidade, rapidez e cumprimento dos padrões definidos.',
        responsibilities: [
          'Preparar e servir bebidas simples',
          'Cumprir receitas e procedimentos do bar',
          'Manter o bar limpo e organizado durante o serviço',
          'Gerir reposição básica de produtos',
          'Atender clientes ao balcão',
          'Apoiar colegas e fluxo do serviço'
        ],
        technicalSkills: [
          'Técnicas básicas de bar e bebidas',
          'Conhecimento de receitas standard',
          'Organização do serviço',
          'Noções de controlo de desperdício'
        ],
        behavioralSkills: [
          'Agilidade',
          'Comunicação eficaz',
          'Atenção ao cliente',
          'Capacidade de trabalhar sob pressão',
          'Responsabilidade'
        ]
      },
      {
        title: 'Barman / Barmaid de 1ª',
        mission: 'Garantir excelência técnica e operacional no serviço de bar, sendo referência de qualidade, eficiência e atendimento ao cliente.',
        responsibilities: [
          'Preparar cocktails e bebidas de maior complexidade',
          'Garantir consistência e qualidade do serviço',
          'Apoiar a organização e funcionamento do bar',
          'Formar e acompanhar elementos menos experientes',
          'Resolver situações com clientes',
          'Controlar consumos da área',
          'Apoiar a liderança do bar na manutenção dos padrões técnicos e no acompanhamento de elementos do setor menos experientes.'
        ],
        technicalSkills: [
          'Domínio avançado de técnicas de bar',
          'Conhecimento aprofundado de bebidas e cocktails',
          'Organização e gestão do posto',
          'Noções de controlo de custos'
        ],
        behavioralSkills: [
          'Liderança informal',
          'Capacidade de decisão',
          'Organização',
          'Orientação para resultados'
        ]
      },
      {
        title: 'Chefe de Bar',
        mission: 'Coordenar e liderar a operação do bar, garantindo consistência das confeções, qualidade do serviço, rentabilidade da área e desenvolvimento da equipa.',
        responsibilities: [
          'Garantir consistência técnica e apresentação das bebidas, assegurando cumprimento das receitas e padrões definidos.',
          'Assegurar rentabilidade do setor de bar através do controlo de consumos, desperdício e níveis de stock.',
          'Coordenar a equipa de bar garantindo rapidez, organização e fluidez no serviço.',
          'Desenvolver novas propostas de bebidas em conjunto com a liderança, contribuindo para a atratividade e atualização da carta.',
          'Garantir a correta conservação e rotação de produtos, evitando perdas e ruturas.',
          'Promover boas práticas de higiene, segurança e organização no bar.',
          'Assegurar a formação da equipa de bar em técnicas de serviço e preparação de bebidas, garantindo qualidade, consistência e cumprimento dos padrões definidos.'
        ],
        technicalSkills: [
          'Domínio técnico de preparação de bebidas e cocktails.',
          'Conhecimento de ingredientes, bebidas e combinações.',
          'Capacidade de organização operacional do bar.',
          'Conhecimento de gestão de stocks e conservação de produtos.',
          'Capacidade de desenvolvimento de receitas e bebidas.'
        ],
        behavioralSkills: [
          'Liderança operacional da equipa.',
          'Organização e capacidade de trabalhar sob pressão.',
          'Criatividade e iniciativa.',
          'Comunicação clara com equipa e sala.',
          'Atenção ao detalhe e consistência na execução.'
        ]
      }
    ]
  },
  {
    name: 'Felicidade',
    roles: [
      {
        title: 'Estagiário / Ajudante de Todas as Secções (Receção)',
        mission: 'Assegurar o atendimento inicial ao cliente e apoiar as atividades de receção, garantindo organização, encaminhamento correto e uma primeira experiência positiva.',
        responsibilities: [
          'Realizar atendimento presencial, telefónico e digital',
          'Encaminhar clientes, pedidos e informações',
          'Apoiar registos e organização administrativa',
          'Assegurar imagem, ordem e funcionamento da receção',
          'Cumprir procedimentos de atendimento e comunicação',
          'Executar tarefas sob orientação da liderança'
        ],
        technicalSkills: [
          'Noções básicas de atendimento ao público',
          'Utilização elementar de sistemas informáticos',
          'Organização administrativa básica',
          'Cumprimento de procedimentos internos',
          'Inglês fluente (obrigatório)'
        ],
        behavioralSkills: [
          'Simpatia e cordialidade',
          'Boa comunicação',
          'Vontade de aprender',
          'Organização',
          'Responsabilidade',
          'Boa apresentação'
        ]
      },
      {
        title: 'Assistente de Vendas de 2ª',
        mission: 'Apoiar a atividade comercial da empresa através da prospeção de novos clientes e do acompanhamento de pedidos comerciais, contribuindo para o desenvolvimento do negócio e para a realização de eventos.',
        responsibilities: [
          'Apoiar a prospeção de novos clientes e oportunidades comerciais.',
          'Responder a pedidos de informação relacionados com eventos e serviços.',
          'Apoiar a preparação de propostas comerciais.',
          'Registar e acompanhar contactos comerciais em sistema, garantindo organização da informação comercial.',
          'Apoiar a organização e preparação de eventos confirmados.',
          'Garantir comunicação eficaz com as equipas operacionais relativamente aos eventos.',
          'Acompanhar pedidos comerciais garantindo resposta dentro dos prazos definidos.',
          'Apoiar a operação sempre que necessário, garantindo disponibilidade para colaborar em funções operacionais.'
        ],
        technicalSkills: [
          'Noções de atividade comercial e prospeção de clientes.',
          'Conhecimento dos serviços e oferta da empresa.',
          'Utilização de ferramentas de comunicação e registo de contactos.',
          'Apoio à preparação de propostas comerciais.'
        ],
        behavioralSkills: [
          'Boa capacidade de comunicação.',
          'Proatividade na identificação de oportunidades.',
          'Organização e acompanhamento de contactos.',
          'Orientação para o cliente.',
          'Postura profissional e boa apresentação',
          'Inglês fluente (obrigatório) / Francês funcional (valorizado)'
        ]
      },
      {
        title: 'Rececionista de 2ª',
        mission: 'Garantir um atendimento inicial acolhedor ao cliente e a correta gestão das reservas, contribuindo ativamente para uma experiência positiva, através de uma comunicação eficaz, empatia e capacidade de antecipar necessidades, promovendo a satisfação e fidelização dos clientes.',
        responsibilities: [
          'Realizar atendimento presencial e telefónico aos clientes.',
          'Registar e gerir reservas de acordo com os procedimentos definidos.',
          'Organizar a lista de reservas e comunicar informação relevante à sala.',
          'Prestar informações sobre serviços, horários e funcionamento do restaurante.',
          'Manter a área de receção organizada e alinhada com os padrões definidos.',
          'Apoiar o fluxo de entrada e acolhimento de clientes.'
        ],
        technicalSkills: [
          'Gestão de reservas e atendimento ao cliente.',
          'Utilização de sistemas de reservas.',
          'Organização de informação de clientes e horários.',
          'Conhecimento do funcionamento da operação.'
        ],
        behavioralSkills: [
          'Comunicação clara e cordial.',
          'Capacidade de organização.',
          'Gestão de situações de pressão.',
          'Orientação para o cliente.',
          'Postura profissional e boa apresentação',
          'Inglês fluente (obrigatório) / Francês funcional (valorizado)'
        ]
      },
      {
        title: 'Assistente de Vendas de 1ª',
        mission: 'Desenvolver e gerir a atividade comercial com autonomia, assegurando captação de clientes, conversão de oportunidades e preparação eficaz dos eventos, contribuindo diretamente para o crescimento do negócio.',
        responsibilities: [
          'Desenvolver e gerir contactos comerciais com autonomia',
          'Acompanhar os processos comerciais do primeiro contacto até à confirmação',
          'Elaborar propostas comerciais garantindo coerência e viabilidade',
          'Negociar condições dentro dos limites definidos',
          'Garantir a passagem completa e clara de informação à operação',
          'Acompanhar clientes garantindo consistência na experiência',
          'Identificar oportunidades de melhoria na atividade comercial',
          'Apoiar a organização do trabalho da equipa comercial'
        ],
        technicalSkills: [
          'Gestão autónoma de processos comerciais',
          'Elaboração e validação de propostas',
          'Negociação comercial',
          'Organização e acompanhamento de pipeline/pipedrive',
          'Conhecimento aprofundado da oferta e operação',
          'Inglês fluente (obrigatório) / Francês funcional (valorizado)'
        ],
        behavioralSkills: [
          'Orientação para resultados',
          'Capacidade de influência',
          'Organização e consistência',
          'Proatividade',
          'Responsabilidade sobre o resultado'
        ]
      },
      {
        title: 'Rececionista de 1ª',
        mission: 'Garantir a gestão eficaz da receção e reservas, assegurando organização, fluidez da operação e uma experiência consistente do cliente desde o primeiro contacto.',
        responsibilities: [
          'Gerir reservas com autonomia e organização',
          'Coordenar a distribuição de clientes garantindo o equilíbrio da operação',
          'Assegurar um acolhimento consistente e profissional',
          'Antecipar necessidades da operação com base nas reservas',
          'Resolver situações de reservas e atendimento com autonomia',
          'Garantir uma comunicação eficaz com a operação da frente',
          'Identificar melhorias na gestão de reservas e atendimento',
          'Apoiar a organização do trabalho da equipa de receção'
        ],
        technicalSkills: [
          'Gestão avançada de reservas',
          'Organização de fluxos de clientes',
          'Conhecimento da operação de sala',
          'Utilização de sistemas de reservas',
          'Capacidade de antecipação operacional',
          'Inglês fluente (obrigatório) / Francês funcional (valorizado)'
        ],
        behavioralSkills: [
          'Organização e antecipação',
          'Comunicação clara e empática',
          'Gestão de pressão',
          'Capacidade de decisão',
          'Responsabilidade pela experiência do cliente'
        ]
      },
      {
        title: 'Gerente',
        mission: 'Garantir a liderança e o desenvolvimento da área de receção e comercial, assegurando padrões consistentes de atendimento, crescimento da atividade comercial e uma experiência do cliente alinhada com os valores e posicionamento da empresa.',
        responsibilities: [
          'Liderar a equipa de receção e comercial garantindo organização e consistência no atendimento aos clientes.',
          'Assegurar o correto funcionamento da receção, gestão de reservas e acompanhamento de clientes.',
          'Orientar a atividade comercial promovendo captação de eventos e desenvolvimento de relações com clientes.',
          'Garantir que a comunicação entre área comercial e operação assegura a correta preparação dos eventos.',
          'Definir prioridades comerciais e orientar a equipa para o desenvolvimento da atividade comercial e fidelização de clientes.',
          'Garantir que os padrões de atendimento, apresentação e comunicação são cumpridos na receção e na área comercial.',
          'Contribuir para a melhoria contínua da experiência do cliente ao longo de todo o processo de contacto com a empresa.'
        ],
        technicalSkills: [
          'Conhecimento da operação de receção e gestão de reservas.',
          'Capacidade de organização e acompanhamento de processos comerciais.',
          'Conhecimento dos serviços e oferta da empresa.',
          'Capacidade de planeamento e acompanhamento de eventos.',
          'Capacidade de análise da experiência do cliente e identificação de oportunidades de melhoria.'
        ],
        behavioralSkills: [
          'Visão de negócio e liderança estratégica da equipa',
          'Capacidade de influência',
          'Capacidade de decisão, resolução de problemas e orientação para o cliente',
          'Boa apresentação'
        ]
      }
    ]
  },
  {
    name: 'Copa',
    roles: [
      {
        title: 'Copeiro Júnior (até 2 anos)',
        mission: 'Assegurar a limpeza, higienização e organização dos utensílios, equipamentos e áreas de apoio da cozinha, contribuindo para o bom funcionamento da operação e cumprimento das normas de higiene e segurança alimentar.',
        responsibilities: [
          'Lavar e higienizar louça, utensílios e equipamentos',
          'Manter a copa limpa e organizada',
          'Apoiar a reposição de material limpo na cozinha',
          'Cumprir normas de higiene, segurança e HACCP',
          'Apoiar na recolha e separação de resíduos',
          'Executar tarefas sob orientação da liderança'
        ],
        technicalSkills: [
          'Noções básicas de higiene e segurança alimentar',
          'Utilização correta de máquinas de lavagem',
          'Organização básica do espaço de trabalho',
          'Manuseamento seguro de produtos de limpeza'
        ],
        behavioralSkills: [
          'Sentido de responsabilidade',
          'Disciplina e pontualidade',
          'Atenção ao detalhe',
          'Espírito de equipa',
          'Capacidade de seguir instruções'
        ]
      },
      {
        title: 'Copeiro Sénior (mais de 2 anos)',
        mission: 'Garantir o funcionamento eficiente da copa, assegurando a higienização adequada dos materiais e apoiando a organização da cozinha, com maior autonomia e responsabilidade operacional.',
        responsibilities: [
          'Gerir o fluxo de lavagem e reposição de utensílios',
          'Assegurar padrões elevados de limpeza e higiene',
          'Identificar necessidades de reposição de material',
          'Apoiar na organização de armazéns e áreas comuns',
          'Orientar copeiros menos experientes',
          'Garantir cumprimento rigoroso das normas de segurança'
        ],
        technicalSkills: [
          'Domínio dos processos de lavagem e higienização',
          'Conhecimento de normas HACCP',
          'Organização e gestão de tempo',
          'Identificação de falhas operacionais',
          'Utilização correta de produtos e equipamentos'
        ],
        behavioralSkills: [
          'Autonomia',
          'Proatividade',
          'Fiabilidade',
          'Capacidade de trabalhar sob pressão',
          'Comunicação eficaz'
        ]
      },
      {
        title: 'Chefe de Copa',
        mission: 'Coordenar e supervisionar a equipa de copa, garantindo a eficiência operacional, o cumprimento das normas de higiene e a articulação eficaz com a cozinha.',
        responsibilities: [
          'Coordenar e distribuir tarefas da equipa de copa',
          'Assegurar funcionamento contínuo da operação',
          'Controlar stocks de material e produtos de limpeza',
          'Garantir cumprimento de normas legais e HACCP',
          'Formar e acompanhar novos elementos',
          'Articular com o Chefe de Cozinha e Subchefe',
          'Identificar oportunidades de melhoria operacional'
        ],
        technicalSkills: [
          'Gestão operacional de copa',
          'Planeamento e organização de turnos',
          'Controlo de stocks e consumos',
          'Conhecimento aprofundado de higiene e segurança alimentar',
          'Capacidade de resolução de problemas'
        ],
        behavioralSkills: [
          'Liderança',
          'Sentido de organização',
          'Capacidade de decisão',
          'Comunicação clara',
          'Responsabilidade e exemplo'
        ]
      }
    ]
  },
  {
    name: 'Direção Corporativa',
    roles: [
      {
        title: 'Escriturário de 3ª',
        mission: 'Executar tarefas administrativas de apoio, assegurando o correto tratamento documental e apoio básico às áreas administrativa/financeira e de recursos humanos.',
        responsibilities: [
          'Apoiar tarefas administrativas correntes',
          'Organizar e arquivar documentação física e digital',
          'Introduzir dados em sistemas administrativos',
          'Apoiar processos simples de recursos humanos',
          'Cumprir procedimentos internos definidos',
          'Garantir confidencialidade da informação tratada'
        ],
        technicalSkills: [
          'Noções básicas de serviços administrativos',
          'Utilização de ferramentas informáticas',
          'Organização documental',
          'Registo e tratamento de informação'
        ],
        behavioralSkills: [
          'Rigor e atenção ao detalhe',
          'Capacidade de seguir procedimentos',
          'Responsabilidade e fiabilidade',
          'Disponibilidade para aprender',
          'Discrição profissional'
        ]
      },
      {
        title: 'Escriturário de 2ª',
        mission: 'Assegurar a execução autónoma de tarefas administrativas, garantindo apoio consistente às áreas financeira e de recursos humanos.',
        responsibilities: [
          'Executar tarefas administrativas com autonomia',
          'Apoiar processos administrativos financeiros',
          'Apoiar processos de recursos humanos (registos, controlo documental)',
          'Atualizar bases de dados e sistemas internos',
          'Garantir cumprimento de prazos administrativos',
          'Assegurar confidencialidade da informação'
        ],
        technicalSkills: [
          'Conhecimentos administrativos intermédios',
          'Apoio a processos financeiros básicos',
          'Apoio a processos administrativos de RH',
          'Utilização eficaz de sistemas informáticos'
        ],
        behavioralSkills: [
          'Autonomia na execução de tarefas',
          'Organização e método',
          'Sentido de responsabilidade',
          'Comunicação clara e profissional',
          'Fiabilidade no cumprimento de prazos',
          'Discrição profissional'
        ]
      },
      {
        title: 'Escriturário de 1ª',
        mission: 'Gerir processos administrativos com elevado grau de autonomia, assegurando suporte técnico às áreas administrativa-financeira e de recursos humanos, garantindo rigor, fiabilidade e cumprimento de prazos.',
        responsibilities: [
          'Gerir processos administrativos de forma autónoma',
          'Apoiar a área financeira em tarefas de controlo e acompanhamento',
          'Apoiar a gestão administrativa de recursos humanos',
          'Validar e consolidar os registos de horários de trabalho',
          'Preparar informação administrativa para apoio à decisão',
          'Apoiar tecnicamente escriturários de níveis mais juniores',
          'Garantir confidencialidade e rigor da informação tratada'
        ],
        technicalSkills: [
          'Administração avançada',
          'Apoio a controlo financeiro',
          'Processos administrativos de recursos humanos',
          'Validação administrativa de horários e preparação de informação salarial',
          'Utilização avançada de sistemas administrativos'
        ],
        behavioralSkills: [
          'Elevado sentido de responsabilidade',
          'Autonomia e fiabilidade',
          'Organização e método',
          'Capacidade de priorização',
          'Discrição e ética profissional'
        ]
      },
      {
        title: 'Chefe de Secção',
        mission: 'Coordenar a área administrativa, garantindo o correto funcionamento dos processos administrativo-financeiros e de gestão administrativa de recursos humanos.',
        responsibilities: [
          'Coordenar a equipa administrativa',
          'Supervisionar processos administrativos e de recursos humanos',
          'Assegurar cumprimento de procedimentos legais e internos',
          'Articular com a Direção as necessidades administrativas e de recursos humanos',
          'Garantir fiabilidade da informação produzida',
          'Preparar e verificar informação de suporte ao processamento salarial',
          'Promover melhoria contínua dos processos administrativos',
          'Assegurar a gestão administrativa da loja, incluindo controlo de encomendas, acompanhamento de stocks, atualização de preçário e organização da informação de produtos.'
        ],
        technicalSkills: [
          'Coordenação de serviços administrativos',
          'Conhecimentos de administração financeira',
          'Processos administrativos de recursos humanos',
          'Planeamento e organização administrativa',
          'Ensino Secundário'
        ],
        behavioralSkills: [
          'Liderança funcional',
          'Capacidade de organização e planeamento',
          'Comunicação clara e assertiva',
          'Capacidade de decisão operacional',
          'Sentido de responsabilidade institucional'
        ]
      },
      {
        title: 'Diretor de Serviços (Administrativos e Financeiros)',
        mission: 'Definir e assegurar a estratégia administrativa e financeira, garantindo sustentabilidade, controlo financeiro, conformidade legal e fiabilidade da informação de gestão.',
        responsibilities: [
          'Definir a estratégia administrativa e financeira da empresa',
          'Supervisionar a gestão financeira global',
          'Assegurar conformidade legal, fiscal e administrativa',
          'Analisar indicadores financeiros e administrativos',
          'Assegurar a recolha, validação e análise das caixas diárias de faturação da operação',
          'Avaliar propostas e acordos com base na análise de indicadores financeiros, assegurando a sua viabilidade económica e apoiando a tomada de decisão estratégica',
          'Assegurar, em articulação com o Encarregado de Armazém, o controlo rigoroso de custos operacionais, garantindo o alinhamento entre compras, consumos e registos',
          'Garantir a existência, atualização e fiabilidade das fichas técnicas, assegurando a correta definição de custos e o cumprimento dos objetivos de food cost',
          'Acompanhar e validar os inventários realizados em parceria com o armazém, garantindo consistência de stocks e identificação de desvios relevantes',
          'Monitorizar desvios entre custos teóricos e reais (nomeadamente food cost e custos fixos), assegurando análise crítica e implementação de medidas corretivas'
        ],
        technicalSkills: [
          'Gestão financeira estratégica',
          'Planeamento e controlo financeiro',
          'Conhecimento legal e fiscal',
          'Controlo e validação de faturação diária e fluxos financeiros operacionais',
          'Análise de indicadores de gestão (incluindo food cost e rentabilidade)',
          'Licenciatura ou formação superior relevante na área de Gestão, Economia, Contabilidade, Finanças ou área equivalente'
        ],
        behavioralSkills: [
          'Visão estratégica',
          'Capacidade de decisão',
          'Liderança institucional',
          'Rigor e ética profissional',
          'Comunicação institucional'
        ]
      },
      {
        title: 'Diretor de Serviços Técnicos (Recursos Humanos)',
        mission: 'Definir, liderar e garantir a estratégia de recursos humanos da organização, assegurando o alinhamento com os objetivos do negócio, a sustentabilidade da estrutura, o desenvolvimento das equipas e a coerência cultural.',
        responsibilities: [
          'Definir e implementar a estratégia global de recursos humanos alinhada com a visão e os objetivos do negócio',
          'Assegurar a sustentabilidade da estrutura de recursos humanos, garantindo equilíbrio entre custos, produtividade e necessidades operacionais',
          'Liderar os processos de recrutamento, desenvolvimento, avaliação de desempenho e progressão de carreira',
          'Analisar indicadores de recursos humanos (custos, produtividade, rotatividade, desempenho) e suportar decisões estratégicas',
          'Garantir a conformidade legal laboral',
          'Apoiar e questionar a liderança na tomada de decisão sobre equipas, estrutura e desempenho',
          'Assegurar a coerência e consistência na aplicação de políticas e práticas de gestão de pessoas',
          'Promover e proteger a cultura organizacional, garantindo o alinhamento entre comportamento, valores e exigência operacional'
        ],
        technicalSkills: [
          'Gestão estratégica de recursos humanos orientada ao negócio',
          'Planeamento e dimensionamento de equipas',
          'Análise de indicadores de RH e impacto financeiro',
          'Sistemas de avaliação de desempenho e gestão de carreira',
          'Conhecimento aprofundado de legislação laboral e risco organizacional',
          'Licenciatura ou formação superior relevante na área de Recursos Humanos, Gestão, Psicologia, ou área equivalente'
        ],
        behavioralSkills: [
          'Liderança estratégica e capacidade de posicionamento ao nível da Direção',
          'Capacidade de influência e assertividade na tomada de decisão',
          'Pensamento crítico e orientação para resultados',
          'Comunicação institucional clara e estruturada',
          'Elevado sentido ético, confidencialidade e responsabilidade',
          'Visão de longo prazo'
        ]
      }
    ]
  },
  {
    name: 'Food',
    roles: [
      {
        title: 'Estagiário / Ajudante de Cozinha',
        mission: 'Apoiar a equipa de cozinha na preparação, organização e limpeza, garantindo o cumprimento das normas de higiene e segurança alimentar, enquanto desenvolve competências técnicas básicas.',
        responsibilities: [
          'Apoiar na preparação básica de alimentos (lavar, cortar)',
          'Assegurar a limpeza e organização da cozinha',
          'Auxiliar na receção e arrumação de mercadorias',
          'Cumprir normas de higiene e segurança alimentar',
          'Executar tarefas sob orientação direta',
          'Apoiar diferentes secções conforme necessidade'
        ],
        technicalSkills: [
          'Noções básicas de higiene e segurança alimentar',
          'Conhecimento elementar de utensílios de cozinha',
          'Capacidade de seguir instruções simples',
          'Organização básica do posto de trabalho'
        ],
        behavioralSkills: [
          'Vontade de aprender',
          'Responsabilidade',
          'Espírito de equipa',
          'Pontualidade e disciplina',
          'Atenção ao detalhe'
        ]
      },
      {
        title: 'Cozinheiro de 3ª - Operação',
        mission: 'Executar o serviço de cozinha, assegurando apoio à operação e cumprimento dos padrões definidos.',
        responsibilities: [
          'Executar pratos de acordo com fichas técnicas e orientações',
          'Corresponder ao ritmo do serviço durante os períodos de maior afluência',
          'Assegurar o correto empratamento e apresentação',
          'Garantir reposição de ingredientes e materiais durante o serviço',
          'Articular com a equipa de preparação sempre que necessário',
          'Cumprir normas de higiene e segurança alimentar',
          'Manter a organização e limpeza do posto de trabalho'
        ],
        technicalSkills: [
          'Execução de tarefas de cozinha conforme orientações',
          'Capacidade de acompanhar o ritmo do serviço',
          'Conhecimento de procedimentos e segurança alimentar',
          'Capacidade de reposição e organização durante o serviço',
          'Cumprimento de padrões de qualidade definidos',
          'Controlo eficiente de quantidades, contribuindo para a redução de desperdício'
        ],
        behavioralSkills: [
          'Sentido de responsabilidade',
          'Espírito de equipa',
          'Vontade para aprender',
          'Resistência ao stress',
          'Organização'
        ]
      },
      {
        title: 'Cozinheiro de 3ª - Preparação',
        mission: 'Executar as atividades de preparação, garantindo disponibilidade de produtos para o serviço.',
        responsibilities: [
          'Executar tarefas de preparação de acordo com orientações',
          'Apoiar na organização das atividades de preparação',
          'Garantir disponibilidade de produtos para o serviço',
          'Assegurar a correta conservação e armazenamento',
          'Cumprir fichas técnicas e padrões definidos',
          'Manter a organização e limpeza da área'
        ],
        technicalSkills: [
          'Execução de tarefas de preparação',
          'Cumprimento de orientações e fichas técnicas',
          'Conhecimento elementar de métodos de conservação e armazenamento de alimentos',
          'Capacidade de organização do posto de trabalho',
          'Apoio na reposição e preparação de produtos'
        ],
        behavioralSkills: [
          'Sentido de responsabilidade',
          'Espírito de equipa',
          'Disponibilidade para aprender',
          'Organização',
          'Atenção ao detalhe'
        ]
      },
      {
        title: 'Cozinheiro de 2ª - Operação',
        mission: 'Executar o serviço de cozinha com autonomia, garantindo consistência, ritmo e qualidade durante a operação.',
        responsibilities: [
          'Executar pratos de acordo com fichas técnicas e padrões definidos',
          'Garantir fluidez e ritmo do serviço nos períodos de maior afluência',
          'Assegurar o correto empratamento e apresentação',
          'Antecipar necessidades durante o serviço, evitando ruturas',
          'Articular com a equipa de preparação garantindo disponibilidade de produtos',
          'Cumprir normas de higiene e segurança alimentar',
          'Manter organização e limpeza do posto de trabalho'
        ],
        technicalSkills: [
          'Execução consistente de pratos conforme fichas técnicas',
          'Capacidade de manter ritmo e organização durante o serviço',
          'Conhecimento dos procedimentos de cozinha e segurança alimentar',
          'Capacidade de antecipação de necessidades operacionais',
          'Controlo de qualidade no empratamento e apresentação'
        ],
        behavioralSkills: [
          'Sentido de responsabilidade',
          'Resistência ao stress',
          'Espírito de equipa',
          'Proatividade',
          'Organização'
        ]
      },
      {
        title: 'Cozinheiro de 2ª - Preparação',
        mission: 'Assegurar a preparação organizada e atempada dos produtos, garantindo suporte eficiente à cozinha da operação.',
        responsibilities: [
          'Executar preparações de acordo com necessidades da operação',
          'Organizar e planear as tarefas de preparação ao longo do dia',
          'Garantir que a cozinha da operação dispõe dos produtos necessários em tempo útil',
          'Controlar quantidades evitando ruturas ou desperdício',
          'Assegurar a correta conservação e rotatividade de produtos',
          'Cumprir as fichas técnicas e padrões definidos',
          'Manter a organização e limpeza da área'
        ],
        technicalSkills: [
          'Execução de preparações conforme fichas técnicas',
          'Capacidade de organização e planeamento das tarefas',
          'Controlo de quantidades e gestão de desperdício',
          'Conhecimento de métodos de conservação e armazenamento de alimentos',
          'Garantia de disponibilidade de produtos para o serviço'
        ],
        behavioralSkills: [
          'Organização',
          'Sentido de responsabilidade',
          'Proatividade',
          'Atenção ao detalhe',
          'Espírito de equipa'
        ]
      },
      {
        title: 'Pizzaiolo',
        mission: 'Preparar e confecionar pizzas de acordo com os padrões definidos, garantindo consistência, qualidade e eficiência durante o serviço.',
        responsibilities: [
          'Preparar massas e ingredientes',
          'Executar pizzas conforme fichas técnicas',
          'Controlar tempos de fermentação e cozedura',
          'Garantir a qualidade visual e gustativa',
          'Manter limpeza do posto e forno',
          'Gerir stocks da secção de pizzas'
        ],
        technicalSkills: [
          'Técnicas de preparação de massa',
          'Manuseamento de forno',
          'Conhecimento de fermentações',
          'Organização de secção',
          'Controlo de desperdício'
        ],
        behavioralSkills: [
          'Precisão e consistência',
          'Resistência ao stress',
          'Foco na qualidade',
          'Autonomia',
          'Responsabilidade'
        ]
      },
      {
        title: 'Cozinheiro de 1ª',
        mission: 'Garantir a excelência técnica na confeção dos pratos, assegurando a coordenação da tua secção e contribuindo para a melhoria contínua da operação.',
        responsibilities: [
          'Coordenar uma secção da cozinha',
          'Garantir consistência e qualidade dos pratos',
          'Apoiar o Subchefe na gestão diária',
          'Formar e acompanhar cozinheiros de 3ª e 2ª',
          'Controlar desperdícios e custos da secção',
          'Assegurar a coordenação da cozinha na ausência do Subchefe ou do Chefe de Cozinha, garantindo continuidade do serviço',
          'Garantir cumprimento de normas e procedimentos'
        ],
        technicalSkills: [
          'Domínio técnico avançado',
          'Gestão de secção',
          'Controlo de qualidade',
          'Leitura e otimização de fichas técnicas',
          'Noções sólidas de custos e stocks'
        ],
        behavioralSkills: [
          'Liderança informal',
          'Capacidade de decisão',
          'Comunicação eficaz',
          'Organização e orientação para resultados'
        ]
      },
      {
        title: 'Subchefe de Cozinha',
        mission: 'Apoiar o Chefe de Cozinha na gestão operacional e da equipa, assegurando o bom funcionamento diário da cozinha e a qualidade do serviço.',
        responsibilities: [
          'Coordenar a equipa em ausência do Chefe',
          'Supervisionar a execução do serviço',
          'Apoiar planeamento de produção',
          'Controlar custos, stocks e desperdícios',
          'Garantir cumprimento de normas legais',
          'Contribuir ativamente para a formação da equipa'
        ],
        technicalSkills: [
          'Gestão operacional de cozinha',
          'Planeamento de produção',
          'Controlo de custos e stocks',
          'Conhecimento aprofundado de HACCP',
          'Capacidade de resolução de problemas'
        ],
        behavioralSkills: [
          'Liderança',
          'Gestão de conflitos',
          'Tomada de decisão',
          'Comunicação clara',
          'Resiliência'
        ]
      },
      {
        title: 'Chefe de Cozinha',
        mission: 'Definir, liderar e assegurar a estratégia culinária e operacional da cozinha, garantindo qualidade, rentabilidade e desenvolvimento da equipa.',
        responsibilities: [
          'Garantir consistência técnica e qualidade dos pratos servidos de acordo com as fichas técnicas definidas.',
          'Assegurar organização eficiente da cozinha garantindo cumprimento dos tempos de serviço.',
          'Controlar custos e desperdício alimentar através de planeamento de produção e gestão de stocks.',
          'Supervisionar a execução técnica da equipa garantindo cumprimento de normas de higiene e segurança alimentar.',
          'Desenvolver e atualizar processos de produção que aumentem eficiência e consistência operacional.',
          'Formar e desenvolver a equipa de cozinha garantindo evolução técnica e alinhamento com os padrões definidos.'
        ],
        technicalSkills: [
          'Gestão global de cozinha',
          'Planeamento financeiro e controlo de custos',
          'Desenvolvimento de menus',
          'Gestão de equipas',
          'Conhecimento legal e de segurança alimentar'
        ],
        behavioralSkills: [
          'Liderança estratégica',
          'Visão de negócio',
          'Capacidade de motivar equipas',
          'Tomada de decisão',
          'Elevado sentido de responsabilidade'
        ]
      }
    ]
  },
  {
    name: 'Operação da Frente',
    roles: [
      {
        title: 'Supervisor de Operações',
        mission: 'Garantir o bom funcionamento diário da Operação da Frente, acompanhando de perto a área do bar e mesas e assegurando que os padrões de serviço, organização e experiência do cliente são cumpridos de forma consistente.',
        responsibilities: [
          'Supervisionar o funcionamento das mesas e bar garantindo organização da operação.',
          'Acompanhar o desempenho das equipas operacionais assegurando cumprimento de padrões de serviço.',
          'Identificar falhas operacionais e implementar melhorias na organização do serviço.',
          'Colaborar com o Chefe de Bar na criação de novas receitas, propostas de bebidas e seleção de marcas da carta.',
          'Garantir que a experiência do cliente se mantém consistente durante todo o serviço.',
          'Apoiar as lideranças operacionais na resolução de situações que possam afetar o serviço.',
          'Substituir o Chefe de Sala e/ou Chefe de Bar na sua ausência, garantindo a continuidade da operação do setor.'
        ],
        technicalSkills: [
          'Conhecimento profundo da operação de sala e bar.',
          'Capacidade de organização e supervisão operacional.',
          'Capacidade de análise da experiência do cliente.',
          'Conhecimento da oferta gastronómica e de bebidas.',
          'Capacidade de desenvolvimento de propostas para a carta de bebidas.'
        ],
        behavioralSkills: [
          'Liderança operacional e capacidade de decisão em contexto de serviço.',
          'Comunicação clara com equipas.',
          'Proatividade na identificação de melhorias.',
          'Orientação para a experiência do cliente.'
        ]
      }
    ]
  },
  {
    name: 'Direção Operacional',
    roles: [
      {
        title: 'Assistente de Direção',
        mission: 'Garantir a execução consistente da estratégia, a coordenação eficaz das operações e a continuidade da liderança, assumindo a gestão global na ausência do Diretor de R&B.',
        responsibilities: [
          'Assegurar a execução da estratégia definida pela Direção de Restauração e Bebidas',
          'Coordenar diretamente as lideranças intermédias, garantindo o alinhamento, ritmo e foco em resultados',
          'Acompanhar e intervir sobre indicadores operacionais e financeiros (vendas, custos, rentabilidade)',
          'Identificar desvios e implementar ações corretivas com impacto direto na operação',
          'Garantir o cumprimento rigoroso dos padrões operacionais, de serviço e de produto',
          'Liderar a operação na ausência do Diretor de R&B, assumindo a tomada de decisão',
          'Participar ativamente na definição de planos de melhoria e iniciativas estratégicas',
          'Assegurar a ligação eficaz entre a estratégia e a operacionalização no terreno'
        ],
        technicalSkills: [
          'Gestão operacional avançada em restauração e bebidas',
          'Leitura e interpretação de indicadores de desempenho (KPIs operacionais e financeiros)',
          'Controlo de custos e otimização de rentabilidade',
          'Planeamento e coordenação de operações complexas',
          'Conhecimento aprofundado de procedimentos operacionais e enquadramento legal'
        ],
        behavioralSkills: [
          'Liderança executiva e capacidade de decisão',
          'Elevado sentido de responsabilidade e accountability',
          'Capacidade de influência sobre as equipas de liderança',
          'Pensamento crítico e orientação para resultados',
          'Elevado nível de maturidade e consistência sob pressão'
        ]
      },
      {
        title: 'Diretor de Restauração e Bebidas',
        mission: 'Definir, liderar e garantir a estratégia global de restauração e bebidas, assegurando rentabilidade, excelência operacional, posicionamento de marca e desenvolvimento sustentável das equipas.',
        responsibilities: [
          'Definir a estratégia global de restauração e bebidas',
          'Garantir a rentabilidade e controlo financeiro da área',
          'Liderar os líderes de topo de cada setor',
          'Definir padrões de qualidade, serviço e produto',
          'Analisar resultados e tomar decisões estratégicas',
          'Representar a operação junto da direção geral',
          'Promover a inovação e melhoria contínua',
          'Garantir a conformidade legal e boa reputação'
        ],
        technicalSkills: [
          'Gestão estratégica de restauração e bebidas',
          'Planeamento financeiro e orçamental avançado',
          'Análise de desempenho e indicadores estratégicos',
          'Gestão de múltiplas unidades ou operações complexas',
          'Conhecimento aprofundado do mercado e tendências'
        ],
        behavioralSkills: [
          'Liderança estratégica e inspiradora',
          'Visão de negócio de longo prazo',
          'Capacidade de influência e negociação',
          'Tomada de decisão em contextos complexos',
          'Elevado sentido ético e de responsabilidade'
        ]
      }
    ]
  },
  {
    name: 'Housekeeping',
    roles: [
      {
        title: 'Técnico de Limpeza',
        mission: 'Assegurar a limpeza, higienização e conservação dos espaços, equipamentos e superfícies, garantindo ambientes seguros, organizados e em conformidade com as normas de higiene e segurança.',
        responsibilities: [
          'Executar a limpeza e higienização dos espaços atribuídos',
          'Utilizar corretamente produtos e equipamentos de limpeza',
          'Cumprir planos e rotinas de limpeza definidos',
          'Assegurar a correta separação e encaminhamento de resíduos',
          'Cumprir normas de higiene, segurança e utilização de EPI',
          'Comunicar anomalias ou necessidades de reposição'
        ],
        technicalSkills: [
          'Técnicas de limpeza e higienização',
          'Utilização segura de produtos e equipamentos',
          'Conhecimento básico de normas de higiene e segurança',
          'Organização do posto de trabalho'
        ],
        behavioralSkills: [
          'Rigor e atenção ao detalhe',
          'Responsabilidade',
          'Autonomia',
          'Disciplina',
          'Espírito de equipa'
        ]
      },
      {
        title: 'Encarregado de Limpeza',
        mission: 'Coordenar e supervisionar a equipa de limpeza, assegurando o cumprimento dos planos de higienização, a qualidade do serviço e a articulação com as restantes áreas operacionais.',
        responsibilities: [
          'Coordenar e distribuir tarefas da equipa de limpeza',
          'Assegurar cumprimento dos planos e horários de limpeza',
          'Supervisionar a qualidade dos serviços prestados',
          'Controlar stocks de materiais e produtos de limpeza',
          'Garantir cumprimento de normas de higiene e segurança',
          'Formar e acompanhar novos elementos',
          'Articular com liderança das áreas operacionais'
        ],
        technicalSkills: [
          'Gestão operacional de serviços de limpeza',
          'Planeamento de rotinas e equipas',
          'Controlo de stocks e consumos',
          'Conhecimento aprofundado de normas de higiene',
          'Capacidade de supervisão e controlo de qualidade'
        ],
        behavioralSkills: [
          'Liderança',
          'Organização',
          'Capacidade de decisão',
          'Comunicação clara',
          'Sentido de responsabilidade'
        ]
      }
    ]
  },
  {
    name: 'Manutenção',
    roles: [
      {
        title: 'Ajudante de Todas as Secções (Manutenção)',
        mission: 'Apoiar as diferentes áreas de manutenção na execução de tarefas básicas, contribuindo para o bom funcionamento das instalações, equipamentos e infraestruturas.',
        responsibilities: [
          'Apoiar trabalhos básicos de manutenção geral',
          'Auxiliar na movimentação e preparação de materiais',
          'Executar tarefas simples sob orientação técnica',
          'Cumprir normas de segurança e utilização de EPI',
          'Apoiar diferentes especialidades conforme necessidade',
          'Manter áreas de trabalho limpas e organizadas'
        ],
        technicalSkills: [
          'Noções básicas de manutenção geral',
          'Utilização elementar de ferramentas manuais',
          'Conhecimento básico de segurança no trabalho',
          'Capacidade de executar instruções técnicas simples'
        ],
        behavioralSkills: [
          'Disponibilidade',
          'Espírito de equipa',
          'Responsabilidade',
          'Vontade de aprender',
          'Disciplina operacional'
        ]
      },
      {
        title: 'Carpinteiro em Geral de 2ª',
        mission: 'Executar trabalhos de manutenção e carpintaria de média complexidade, assegurando a conservação das instalações e equipamentos com autonomia operacional.',
        responsibilities: [
          'Executar trabalhos de carpintaria e manutenção geral',
          'Realizar reparações simples e substituições',
          'Interpretar instruções técnicas básicas',
          'Garantir uso correto de ferramentas e materiais',
          'Cumprir normas de segurança e qualidade',
          'Reportar necessidades ou anomalias técnicas'
        ],
        technicalSkills: [
          'Técnicas intermédias de carpintaria',
          'Manutenção geral de edifícios',
          'Leitura básica de desenhos ou esquemas',
          'Utilização segura de ferramentas elétricas',
          'Noções de outros ofícios (canalização, serralharia, etc.)'
        ],
        behavioralSkills: [
          'Autonomia',
          'Sentido prático',
          'Rigor na execução',
          'Capacidade de resolução de problemas',
          'Responsabilidade'
        ]
      },
      {
        title: 'Carpinteiro em Geral de 1ª',
        mission: 'Executar trabalhos de carpintaria e manutenção de elevada complexidade, garantindo qualidade técnica, segurança e apoio à coordenação da equipa.',
        responsibilities: [
          'Executar trabalhos técnicos complexos de carpintaria',
          'Diagnosticar avarias e propor soluções',
          'Apoiar e orientar carpinteiros menos experientes',
          'Garantir qualidade e acabamentos dos trabalhos',
          'Cumprir e promover normas de segurança',
          'Apoiar planeamento de intervenções técnicas'
        ],
        technicalSkills: [
          'Domínio avançado de carpintaria',
          'Leitura e interpretação de projetos',
          'Diagnóstico e resolução técnica de problemas',
          'Utilização avançada de ferramentas e equipamentos',
          'Conhecimentos sólidos de manutenção geral'
        ],
        behavioralSkills: [
          'Liderança técnica informal',
          'Precisão e rigor',
          'Capacidade de decisão',
          'Organização',
          'Responsabilidade técnica'
        ]
      },
      {
        title: 'Chefe de Manutenção',
        mission: 'Coordenar a equipa de manutenção, assegurando a operacionalidade das instalações e equipamentos, bem como a execução eficiente dos planos de manutenção.',
        responsibilities: [
          'Planear e coordenar trabalhos de manutenção',
          'Supervisionar a equipa técnica',
          'Garantir cumprimento de planos preventivos',
          'Controlar materiais, ferramentas e consumos',
          'Assegurar cumprimento de normas de segurança',
          'Articular com outras áreas operacionais'
        ],
        technicalSkills: [
          'Gestão operacional de manutenção',
          'Planeamento de manutenção preventiva e corretiva',
          'Liderança de equipas técnicas',
          'Conhecimento de instalações e infraestruturas',
          'Capacidade de gestão de recursos'
        ],
        behavioralSkills: [
          'Liderança',
          'Organização',
          'Tomada de decisão',
          'Comunicação eficaz',
          'Orientação para resultados'
        ]
      },
      {
        title: 'Chefe de Manutenção, Conservação e Serviços Técnicos',
        mission: 'Definir, coordenar e supervisionar a estratégia global de manutenção e serviços técnicos, garantindo a fiabilidade das infraestruturas, segurança e otimização de recursos.',
        responsibilities: [
          'Garantir disponibilidade operacional das instalações e equipamentos através de manutenção preventiva eficaz.',
          'Coordenar intervenções técnicas assegurando rapidez de resolução e minimização de impacto na operação.',
          'Identificar riscos técnicos nas instalações e implementar ações preventivas.',
          'Assegurar cumprimento das normas de segurança e requisitos legais aplicáveis.',
          'Gerir recursos técnicos e materiais garantindo eficiência na utilização dos mesmos.'
        ],
        technicalSkills: [
          'Gestão estratégica de manutenção',
          'Conhecimento técnico multidisciplinar',
          'Planeamento financeiro e controlo de custos',
          'Gestão de contratos e fornecedores',
          'Conhecimento de legislação e normas técnicas'
        ],
        behavioralSkills: [
          'Liderança estratégica',
          'Visão global',
          'Capacidade analítica',
          'Comunicação eficaz',
          'Elevado sentido de responsabilidade'
        ]
      }
    ]
  },
  {
    name: 'Mesas',
    roles: [
      {
        title: 'Estagiário / Ajudante de Todas as Secções (Sala)',
        mission: 'Apoiar o funcionamento do serviço de sala através da preparação das áreas de trabalho, transporte de materiais e apoio à equipa, garantindo organização e condições adequadas para o serviço.',
        responsibilities: [
          'Apoiar a preparação das mesas e áreas de serviço antes do início do serviço.',
          'Transportar louça e materiais necessários ao funcionamento do serviço.',
          'Assegurar reposição de materiais necessários ao serviço (copos, pratos, guardanapos, etc.).',
          'Apoiar a equipa das mesas na organização dos espaços durante o serviço.',
          'Manter as áreas de trabalho organizadas e alinhadas com os padrões definidos.',
          'Cumprir normas de higiene, segurança e apresentação.'
        ],
        technicalSkills: [
          'Noções básicas de serviço de mesas.',
          'Preparação e organização de mesas e áreas de serviço.',
          'Transporte correto de materiais e louça.',
          'Cumprimento de normas básicas de higiene e segurança alimentar.',
          'Conhecimento básico da organização do serviço de restaurante',
          'Inglês funcional (obrigatório)'
        ],
        behavioralSkills: [
          'Disponibilidade para aprender e evoluir no serviço de mesas.',
          'Espírito de equipa e colaboração com equipa.',
          'Responsabilidade no cumprimento das tarefas atribuídas.',
          'Boa apresentação e postura profissional.'
        ]
      },
      {
        title: 'Assistente de Sala de 2ª',
        mission: 'Executar o serviço de mesas garantindo atendimento correto ao cliente, organização do serviço e cumprimento dos padrões definidos pela empresa.',
        responsibilities: [
          'Executar o serviço de mesas garantindo correto atendimento aos clientes.',
          'Preparar a mise-en-place das mesas antes do início do serviço.',
          'Conhecer a ementa e esclarecer dúvidas básicas dos clientes.',
          'Registar pedidos e assegurar comunicação correta com cozinha e bar.',
          'Garantir organização das mesas e áreas de serviço durante o turno.',
          'Cumprir os procedimentos definidos para o serviço de restaurante.'
        ],
        technicalSkills: [
          'Técnicas intermédias de serviço de mesas.',
          'Conhecimento da ementa e produtos disponíveis.',
          'Registo correto de pedidos.',
          'Organização da mise-en-place e das mesas.',
          'Cumprimento de normas de higiene e segurança alimentar.',
          'Técnicas básicas de venda adicional',
          'Inglês fluente (obrigatório) / Francês funcional (valorizado)'
        ],
        behavioralSkills: [
          'Orientação para o cliente e qualidade do atendimento.',
          'Comunicação clara com clientes e equipa.',
          'Capacidade de trabalhar sob pressão durante o serviço.',
          'Responsabilidade na execução do serviço.',
          'Boa apresentação e postura profissional.'
        ]
      },
      {
        title: 'Assistente de Sala de 1ª',
        mission: 'Garantir excelência no serviço de sala, assumindo responsabilidades de coordenação operacional e sendo referência de qualidade e atendimento.',
        responsibilities: [
          'Coordenar serviço da tua área, garantindo organização das mesas e apoio à equipa',
          'Garantir qualidade e consistência do atendimento',
          'Apoiar tecnicamente assistentes de sala menos experientes garantindo cumprimento consistente dos padrões de serviço.',
          'Apoiar o Subchefe de Sala',
          'Formar e acompanhar Assistentes de sala',
          'Resolver situações com clientes',
          'Assegurar cumprimento dos procedimentos'
        ],
        technicalSkills: [
          'Domínio avançado de serviço de sala',
          'Gestão operacional de área',
          'Resolução de reclamações',
          'Técnicas de venda e fidelização',
          'Conhecimento de vinhos e bebidas',
          'Inglês fluente (obrigatório) / Francês funcional (valorizado)'
        ],
        behavioralSkills: [
          'Liderança informal',
          'Capacidade de decisão',
          'Empatia',
          'Organização',
          'Orientação para resultados',
          'Boa apresentação'
        ]
      },
      {
        title: 'Subchefe de Sala',
        mission: 'Apoiar o Gerente de Sala na coordenação da equipa de mesas e do serviço, assegurando padrões elevados de atendimento e eficiência operacional.',
        responsibilities: [
          'Coordenar equipa durante o serviço',
          'Supervisionar qualidade do atendimento',
          'Apoiar planeamento de escalas',
          'Resolver situações operacionais e com clientes',
          'Garantir cumprimento de procedimentos',
          'Apoiar formação e desenvolvimento da equipa'
        ],
        technicalSkills: [
          'Gestão operacional de sala (planeamento e organização)',
          'Liderança de equipas',
          'Gestão de conflitos',
          'Conhecimento de indicadores de serviço',
          'Inglês fluente (obrigatório) / Francês funcional (valorizado)'
        ],
        behavioralSkills: [
          'Liderança e sentido de responsabilidade',
          'Comunicação clara',
          'Capacidade de decisão',
          'Resiliência',
          'Boa apresentação'
        ]
      },
      {
        title: 'Chefe de Sala',
        mission: 'Liderar e garantir o funcionamento diário da equipa das mesas, assegurando a qualidade do serviço, a organização da equipa e a consistência da experiência do cliente.',
        kpi: 'Venda média por cliente / mesa.',
        responsibilities: [
          'Garantir organização e fluidez do serviço de mesa, assegurando atendimento eficiente mesmo em períodos de maior volume.',
          'Acompanhar o desempenho da equipa garantindo cumprimento consistente dos padrões de atendimento.',
          'Assegurar gestão equilibrada do fluxo de clientes e ocupação das mesas.',
          'Resolver reclamações ou situações de insatisfação garantindo recuperação da experiência do cliente.',
          'Assegurar a formação da equipa em serviço e técnicas de venda, garantindo consistência, qualidade e evolução do desempenho em vendas.',
          'Promover a venda média através da orientação da equipa para sugestões de venda e conhecimento da carta.',
          'Desenvolver a equipa das mesas garantindo alinhamento com os padrões de serviço e comportamento definidos.'
        ],
        technicalSkills: [
          'Gestão operacional do setor das mesas em contexto de restauração.',
          'Organização de equipas de serviço.',
          'Conhecimento profundo de padrões de hospitalidade e atendimento.',
          'Gestão de fluxos operacionais entre mesas, bar e cozinha.',
          'Capacidade de acompanhamento e desenvolvimento da venda média.',
          'Inglês e Francês fluente (obrigatório)'
        ],
        behavioralSkills: [
          'Liderança de equipa de forma clara e assertiva.',
          'Capacidade de decisão em contexto de pressão e de motivação de equipas.',
          'Foco na experiência do cliente.',
          'Sentido de responsabilidade, exemplo profissional e boa apresentação.'
        ]
      }
    ]
  },
  {
    name: 'Controlo',
    roles: [
      {
        title: 'Controlador-caixa',
        mission: 'Assegurar o correto registo e controlo das operações de caixa, garantindo fiabilidade da faturação, organização da informação financeira diária e cumprimento dos procedimentos definidos.',
        responsibilities: [
          'Registar e controlar as operações de caixa garantindo correção dos valores faturados.',
          'Conferir pagamentos recebidos em numerário, cartão ou outros meios de pagamento.',
          'Garantir abertura e fecho de caixa de acordo com os procedimentos definidos.',
          'Identificar e comunicar discrepâncias ou irregularidades nos movimentos de caixa.',
          'Organizar e preparar documentação de suporte às caixas diárias.',
          'Apoiar o controlo da faturação diária garantindo fiabilidade da informação registada.'
        ],
        technicalSkills: [
          'Conhecimento de sistemas de faturação e registo de pagamentos.',
          'Conferência de valores e movimentos de caixa.',
          'Organização de documentação financeira.',
          'Cumprimento de procedimentos administrativos e financeiros.',
          'Atenção ao detalhe no tratamento de informação monetária.'
        ],
        behavioralSkills: [
          'Rigor e precisão no tratamento de valores.',
          'Sentido de responsabilidade e fiabilidade.'
        ]
      },
      {
        title: 'Controlador',
        mission: 'Acompanhar e controlar a informação operacional e financeira da operação, garantindo fiabilidade dos dados, suporte à gestão e cumprimento dos procedimentos definidos.',
        responsibilities: [
          'Controlar e validar informação relacionada com faturação e caixas diárias da operação.',
          'Acompanhar indicadores operacionais garantindo fiabilidade dos dados registados.',
          'Identificar inconsistências na informação operacional e comunicar à liderança.',
          'Apoiar o Chefe de Controlo na monitorização das condições operacionais da equipa.',
          'Organizar informação de suporte à análise de desempenho da operação.',
          'Garantir cumprimento dos procedimentos definidos para controlo da operação.'
        ],
        technicalSkills: [
          'Controlo e validação de informação operacional e financeira.',
          'Utilização de sistemas de registo e análise de dados.',
          'Organização e tratamento de informação administrativa.',
          'Interpretação básica de indicadores operacionais.',
          'Cumprimento de procedimentos de controlo interno.'
        ],
        behavioralSkills: [
          'Capacidade analítica e atenção ao detalhe.',
          'Sentido de responsabilidade na gestão da informação.',
          'Organização e método no acompanhamento dos processos.',
          'Comunicação clara com liderança e diferentes áreas da operação.'
        ]
      },
      {
        title: 'Chefe de Controlo',
        mission: 'Garantir que a operação dispõe das condições necessárias para que as equipas trabalhem com eficiência e foco, assegurando organização e melhoria contínua, suporte técnico e coordenação de áreas de apoio que contribuem para a rentabilidade da equipa e para o bom funcionamento do serviço.',
        responsibilities: [
          'Elaborar horários equilibrados que assegurem cobertura eficiente da operação.',
          'Coordenar a equipa de limpeza garantindo organização e fluidez das operações.',
          'Certificar que estão asseguradas todas as condições operacionais necessárias ao funcionamento da equipa.',
          'Garantir a operacionalidade do setor de take-away, assegurando a reposição, organização e arrumação de todos os materiais e produtos necessários, para que o serviço esteja totalmente preparado e a funcionar em pleno.',
          'Assegurar o funcionamento dos equipamentos e sistemas, acionando as intervenções técnicas necessárias e garantindo a resolução dos problemas.',
          'Identificar e resolver rapidamente problemas operacionais que possam afetar o serviço.',
          'Colaborar com o setor de armazém sempre que necessário, apoiando as operações e o cumprimento dos procedimentos.',
          'Garantir a continuidade da operação, assegurando os recursos humanos necessários e assumindo diretamente qualquer função em caso de falha na equipa.'
        ],
        technicalSkills: [
          'Planeamento e gestão de horários de trabalho.',
          'Organização e coordenação de operações de apoio.',
          'Conhecimento elementar dos processos de armazém e controlo de recursos.',
          'Noções do funcionamento de equipamentos e sistemas operacionais.',
          'Capacidade de análise e resolução de problemas operacionais.'
        ],
        behavioralSkills: [
          'Elevado sentido de responsabilidade.',
          'Capacidade de organização e planeamento e autonomia na resolução de problemas.',
          'Comunicação clara com diferentes equipas.',
          'Capacidade de coordenação e acompanhamento de equipas.'
        ]
      }
    ]
  }
];
