export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: "remap" | "electronics" | "hardware" | "custom";
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  tags: string[];
  description: string;
  highlight?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "geral" | "tecnico" | "processo";
}

export interface BrandItem {
  name: string;
  type: "ecu" | "bike";
  logoImage?: string;
  accent: string;
  description: string;
}

export const SITE_CONFIG = {
  name: "Planet Xtune ECU",
  shortName: "XTUNE",
  tagline: "PERFORMANCE SEM LIMITES.",
  subheadline: "Tecnologia, precisão e experiência para extrair o máximo da sua motocicleta.",
  phone: "(44) 99824-3321", // Telefone de contato editável
  whatsappNumber: "5544998243321",
  whatsappDefaultMsg: "Olá! Conheci a Planet Xtune pelo site oficial e gostaria de falar sobre um projeto de remap e performance para minha moto.",
  instagram: {
    handle: "@planet.xtune.ecu",
    url: "https://www.instagram.com/planet.xtune.ecu/",
    followers: "5.3k+",
    posts: "60+",
  },
  address: {
    city: "Maringá",
    state: "PR",
    country: "Brasil",
    label: "Maringá, Paraná — Atendimento Nacional",
    mapsUrl: "https://maps.google.com/?q=Maringa+Parana+Planet+Xtune",
    schedule: "Segunda a Sexta: 08:30 às 18:00 | Sábado: Projetos com agendamento",
  },
  stats: [
    { value: "+1.000", label: "MOTOS REALIZADAS", detail: "Projetos de rua, pista e competição" },
    { value: "600cc", label: "RECORDISTA NACIONAL", detail: "Performance comprovada em pista oficial" },
    { value: "ECU", label: "ESPECIALISTAS EM ELETRÔNICA", detail: "Bancada, software e calibração fina" },
    { value: "100%", label: "FOCO ABSOLUTO EM RESULTADO", detail: "Engenharia aplicada a cada projeto" },
  ]
};

export const POSITIONING_PILLARS = [
  {
    number: "01",
    title: "PRECISÃO",
    subtitle: "Calibração sob medida",
    desc: "Acertos desenvolvidos considerando minuciosamente o conjunto mecânico, eletrônico e a dinâmica de pilotagem de cada motocicleta.",
    accent: "red"
  },
  {
    number: "02",
    title: "TECNOLOGIA",
    subtitle: "Ferramental de laboratório",
    desc: "Ferramentas dedicadas e soluções de bancada para diagnóstico avançado, leitura segura, gravação e telemetria de parâmetros.",
    accent: "purple"
  },
  {
    number: "03",
    title: "EXPERIÊNCIA",
    subtitle: "Histórico consolidado",
    desc: "Mais de 1.000 motocicletas atendidas, abrangendo modelos esportivos de alta cilindrada, motos de baixa cilindrada e projetos de pista.",
    accent: "red"
  },
  {
    number: "04",
    title: "RESULTADO",
    subtitle: "Performance comprovada",
    desc: "Resposta imediata de acelerador, linearidade na entrega de potência, otimização de torque e controle térmico aprimorado.",
    accent: "purple"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "remap-ecu",
    number: "01",
    title: "REMAP ECU",
    shortDesc: "Otimização dos parâmetros originais da central eletrônica.",
    fullDesc: "Reprogramação completa dos mapas de injeção, avanço de ignição, limites de giro, abertura de borboleta eletrônica (Ride-by-Wire) e eliminação de restrições de fábrica para resposta imediata.",
    category: "remap",
    tags: ["Injeção", "Ignição", "Ride-by-Wire", "Top Speed"]
  },
  {
    id: "acerto-ecu",
    number: "02",
    title: "ACERTO DE ECU",
    shortDesc: "Calibração personalizada para cada configuração mecânica.",
    fullDesc: "Ajuste fino sob medida para motocicletas com filtro esportivo, escapamento de alta performance, comando preparado ou preparações especiais em dinamômetro e bancada.",
    category: "remap",
    tags: ["Dinamômetro", "Sonda Wideband", "Filtro & Escape"]
  },
  {
    id: "fueltech",
    number: "03",
    title: "FUELTECH",
    shortDesc: "Instalação, configuração e acerto de módulos FuelTech.",
    fullDesc: "Integração completa de injeções FuelTech em motocicletas de arrancada, pista e projetos customizados com confecção de chicotes dedicados e mapas de partida a plena carga.",
    category: "electronics",
    tags: ["FT450", "FT550", "Chicote Dedicado", "Arrancada"]
  },
  {
    id: "injepro",
    number: "04",
    title: "INJEPRO",
    shortDesc: "Gerenciamento de injeção programável e alta performance.",
    fullDesc: "Desenvolvimento e acerto de sistemas de gerenciamento InjePro, calibrando curvas de avanço, enriquecimento por pressão/RPM e proteções de motor para competição.",
    category: "electronics",
    tags: ["Injeção Programável", "Mapeamento", "Pista"]
  },
  {
    id: "diagnostico",
    number: "05",
    title: "DIAGNÓSTICO ELETRÔNICO",
    shortDesc: "Diagnóstico profundo e análise de sistemas da moto.",
    fullDesc: "Varredura avançada com scanners de alta precisão, osciloscópio digital, análise de sensores (TPS, MAP, IAT, CKP) e correção de falhas eletrônicas complexas.",
    category: "hardware",
    tags: ["Osciloscópio", "Scanners Técnicos", "Sensores"]
  },
  {
    id: "preparacao",
    number: "06",
    title: "PREPARAÇÃO DE PERFORMANCE",
    shortDesc: "Soluções para motos originais, modificadas e track day.",
    fullDesc: "Consultoria técnica e execução de upgrades mecânicos e eletrônicos para equilibrar fluxo de admissão, exaustão e calibração de combustível para o máximo rendimento.",
    category: "custom",
    tags: ["Track Day", "Upgrades", "Motor"]
  },
  {
    id: "solucoes-xtune",
    number: "07",
    title: "SOLUÇÕES XTUNE",
    shortDesc: "Softwares e ferramentas desenvolvidos pela Planet Xtune.",
    fullDesc: "Desenvolvimento proprietário de ferramentas de calibração, softwares dedicados (como a linha XTune Lite) e pinagens exclusivas para centrais do mercado brasileiro.",
    category: "custom",
    tags: ["Software Próprio", "Pinagem", "Engenharia"]
  },
  {
    id: "projetos-especiais",
    number: "08",
    title: "PROJETOS ESPECIAIS",
    shortDesc: "Projetos exclusivos para motocicletas de alta exigência.",
    fullDesc: "Desenvolvimento para motos de recorde, protótipos de competição, adaptações de injeção direta/indireta e projetos que exigem engenharia sem precedentes.",
    category: "custom",
    tags: ["Competição", "Recordes", "Custom"]
  }
];

export const XTUNE_LITE_PRODUCT = {
  name: "XTUNE LITE",
  badge: "SOFTWARE EXCLUSIVO XTUNE",
  tagline: "Software Honda Denso Baixa Cilindrada",
  headline: "A Ferramenta Definitiva para Leitura, Edição e Gravação de ECU Honda",
  description: "Desenvolvido pela Planet Xtune ECU, o XTune Lite é uma ferramenta técnica projetada para oficinas, preparadores e entusiastas que buscam autonomia e precisão na reprogramação de motocicletas Honda de baixa e média cilindrada.",
  price: "R$ 1.500,00",
  features: [
    { title: "Leitura Completa", desc: "Extração íntegra do mapa da ECU original com alta velocidade e segurança." },
    { title: "Edição de Parâmetros", desc: "Ajuste de tempo de injeção, avanço de ignição, limitadores e corte de giro." },
    { title: "Gravação Direta na ECU", desc: "Processo de flashing estável através de protocolo proprietário otimizado." },
    { title: "Manual de Pinagem Incluso", desc: "Esquemas elétricos detalhados com pinagem de bancada para cada central." },
    { title: "Interface Moderna e Ágil", desc: "Interface limpa, intuitiva e sem complexidades desnecessárias para o profissional." }
  ],
  compatibleModels: [
    { model: "Honda CG 160", year: "2022 em diante", note: "ECU Denso" },
    { model: "Honda CG 160 Start", year: "2022 em diante", note: "ECU Denso" },
    { model: "Honda Sahara 300", year: "Nova Geração", note: "ECU Denso" },
    { model: "Honda Tornado 300", year: "Nova Geração", note: "ECU Denso" },
  ],
  image: "/images/products/xtune-lite-laptop.jpg"
};

export const BRANDS_ECOSYSTEM: BrandItem[] = [
  // Sistemas de Gerenciamento / ECU
  { name: "FuelTech", type: "ecu", accent: "#E50914", logoImage: "/images/brands/fueltech-highlight.jpg", description: "Módulos FT450, FT550 e FT600 com acerto e chicotes dedicados." },
  { name: "InjePro", type: "ecu", accent: "#FF5722", description: "Injeções programáveis EFI-Light, T-Series e soluções de telemetria." },
  { name: "Athlon", type: "ecu", accent: "#3B82F6", description: "Centrais plug-and-play e módulos de alta precisão para motocicletas." },
  { name: "Servitec", type: "ecu", accent: "#8B5CF6", description: "CDIs programáveis, limitadores e sistemas eletrônicos avançados." },
  // Marcas de Motocicletas
  { name: "BMW Motorrad", type: "bike", accent: "#0066B1", logoImage: "/images/brands/bmw-highlight.jpg", description: "S1000RR, S1000R, F850GS, R1250GS e linha esportiva completa." },
  { name: "Yamaha", type: "bike", accent: "#00205B", logoImage: "/images/brands/yamaha-highlight.jpg", description: "YZF-R1, MT-09, MT-07, YZF-R3 e motos de alta performance." },
  { name: "Kawasaki", type: "bike", accent: "#69BE28", logoImage: "/images/brands/kawasaki-highlight.jpg", description: "Ninja ZX-10R, ZX-6R (Recordista Nacional), Z900, Z1000." },
  { name: "Ducati", type: "bike", accent: "#CC0000", logoImage: "/images/brands/ducati-highlight.jpg", description: "Panigale V4, V2, Streetfighter, Monster e linha Desmosedici." },
  { name: "Honda", type: "bike", accent: "#E4002B", description: "CBR 1000RR-R Fireblade, CB 650R, CB 500F, linha 160/300 Denso." },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "record-600cc",
    title: "Kawasaki Ninja ZX-6R",
    subtitle: "Recordista Nacional Moto 600cc",
    category: "Pista / Competição",
    image: "/images/projects/record-600cc.jpg",
    tags: ["Recorde Nacional", "Kawasaki", "600cc", "Pista"],
    description: "Desenvolvimento eletrônico completo em bancada e dinamômetro. Calibração extrema para máxima eficiência de combustão em altas rotações, resultando na quebra do recorde nacional da categoria 600cc com troféus de 1º lugar.",
    highlight: "RECORDISTA NACIONAL"
  },
  {
    id: "dyno-tuning",
    title: "Calibração Fina em Dinamômetro",
    subtitle: "Acerto de Ponto e Combustível em Tempo Real",
    category: "Laboratório Dyno",
    image: "/images/projects/dyno-tuning.jpg",
    tags: ["Dinamômetro", "Sonda Wideband", "Telemetria", "Precisão"],
    description: "Cada curva de mapa é aferida sob carga contínua com monitoramento estequiométrico em tempo real. Eliminação precisa de buracos de aceleração e ganho substancial de torque utilizável.",
    highlight: "PRECISÃO DE BANCADA"
  },
  {
    id: "mxf-bosch",
    title: "Suporte XTune MXF 250 / 270 FI",
    subtitle: "Desenvolvimento para ECU Bosch MSE6.0",
    category: "Engenharia de Software",
    image: "/images/projects/mxf-bosch.jpg",
    tags: ["Bosch MSE6.0", "MXF Motors", "Solução Proprietária"],
    description: "Engenharia reversa e criação de solução eletrônica exclusiva para motocicletas MXF 250 RXI-R e 270 FI equipadas com central Bosch MSE6.0, liberando pleno controle de calibração.",
    highlight: "SOLUÇÃO EXCLUSIVA"
  },
  {
    id: "xtune-lite-soft",
    title: "Plataforma XTune Lite Honda",
    subtitle: "Software Dedicado para ECU Denso Baixa CC",
    category: "Software Proprietário",
    image: "/images/products/xtune-lite-laptop.jpg",
    tags: ["Honda 160", "Sahara 300", "Tornado 300", "Denso"],
    description: "Software autônomo com suporte para a nova linha Honda 2022+ com central Denso. Inclui rotinas de leitura direta, edição paramétrica e gravação segura sem necessidade de cortes no chicote original.",
    highlight: "INOVAÇÃO BRASIL"
  },
  {
    id: "xtune-team-bench",
    title: "Laboratório e Equipe Especialista",
    subtitle: "Infraestrutura Completa de Diagnóstico e Reprogramação",
    category: "Bastidores",
    image: "/images/about/xtune-team.jpg",
    tags: ["Equipe Técnica", "Mala de Testes", "Bancada ECU"],
    description: "Corpo técnico dedicado exclusivamente à eletrônica e performance sobre duas rodas. Equipamentos portáteis para atendimento de pistas, eventos e bancada de diagnóstico laboratorial.",
    highlight: "EQUIPE ESPECIALIZADA"
  }
];

export const GALLERY_ITEMS = [
  {
    id: "gal-1",
    title: "Kawasaki Ninja ZX-6R Recordista",
    caption: "A moto recordista nacional com os troféus de 1º lugar conquistados em pista.",
    image: "/images/projects/record-600cc.jpg",
    category: "Competição"
  },
  {
    id: "gal-2",
    title: "Acerto em Dinamômetro",
    caption: "Técnico especialista ajustando parâmetros na moto sobre o dinamômetro de rolo.",
    image: "/images/projects/dyno-tuning.jpg",
    category: "Laboratório"
  },
  {
    id: "gal-3",
    title: "Centrais Bosch MSE6.0 & Software",
    caption: "Bancada de desenvolvimento e testes para centrais de injeção eletrônica Bosch.",
    image: "/images/projects/mxf-bosch.jpg",
    category: "Eletrônica"
  },
  {
    id: "gal-4",
    title: "Software XTune Lite em Operação",
    caption: "Interface técnica de leitura e calibração para a linha Honda Denso.",
    image: "/images/products/xtune-lite-laptop.jpg",
    category: "Software"
  },
  {
    id: "gal-5",
    title: "Identidade Visual XT Performance",
    caption: "Grafismo oficial XT com visual underground motorsport e cores vibrantes.",
    image: "/images/xt-banner.jpg",
    category: "Branding"
  },
  {
    id: "gal-6",
    title: "Equipe Planet Xtune ECU",
    caption: "Profissionais prontos para diagnosticar, mapear e entregar performance sem limites.",
    image: "/images/about/xtune-team.jpg",
    category: "Equipe"
  }
];

export const BEHIND_THE_SCENES_STEPS = [
  {
    step: "FASE 01",
    title: "DIAGNÓSTICO ELETRÔNICO INICIAL",
    desc: "Antes de qualquer alteração, a moto passa por varredura completa de sensores, leitura de falhas e checagem de saúde do motor e chicote.",
    telemetry: "SCAN // DTC CHECK // OK"
  },
  {
    step: "FASE 02",
    title: "EXTRAÇÃO E BACKUP DA ECU",
    desc: "Realizamos a leitura íntegra do mapa original da motocicleta e armazenamos um backup seguro e definitivo em nossos servidores.",
    telemetry: "BIN FILE // FLASH READ // 100%"
  },
  {
    step: "FASE 03",
    title: "DESENVOLVIMENTO DO MAPA",
    desc: "Calibração minuciosa dos mapas de combustível, curvas de ponto de ignição, controle de abertura de borboleta e desligamento de restrições.",
    telemetry: "IGN MAP // AFR TARGET 13.0 // WRITE"
  },
  {
    step: "FASE 04",
    title: "AFERIÇÃO E VALIDAÇÃO FINAL",
    desc: "Validação em dinamômetro e testes sob condições reais de carga térmica, garantindo resposta linear e segurança mecânica contínua.",
    telemetry: "DYNO LOG // FULL LOAD // VALIDATED"
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: "O que é o Remap de ECU e como ele age na motocicleta?",
    answer: "O Remap consiste na reprogramação dos parâmetros do software interno gravado na Unidade de Controle Eletrônico (ECU) da moto. Ajustamos curvas de injeção de combustível, avanço de ignição, tempo de abertura das borboletas eletrônicas (Ride-by-Wire) e eliminamos restrições que os fabricantes impõem para homologações de emissões globais, entregando mais torque, resposta e linearidade.",
    category: "tecnico"
  },
  {
    question: "O remap serve para qualquer modelo ou cilindrada?",
    answer: "Trabalhamos com uma ampla gama de motocicletas, desde esportivas e nakeds de alta cilindrada (BMW, Yamaha, Kawasaki, Ducati, Honda) até projetos especiais e motocicletas de baixa/média cilindrada através de nossas ferramentas proprietárias como o XTune Lite. Cada projeto recebe uma análise prévia de compatibilidade.",
    category: "geral"
  },
  {
    question: "O remap altera ou compromete a originalidade da ECU?",
    answer: "A carcaça física da central é preservada. Realizamos a leitura e gravação por conectores originais ou pinagem técnica segura de bancada. Sempre guardamos o arquivo original da sua ECU em backup, permitindo que a motocicleta retorne aos parâmetros 100% de fábrica a qualquer momento se o proprietário desejar.",
    category: "tecnico"
  },
  {
    question: "É possível fazer remap em moto já modificada (escape esportivo, filtro de ar)?",
    answer: "Sim, e é justamente onde o remap é mais recomendado! Quando você instala um escapamento esportivo ou filtro de ar de alto fluxo, a proporção ar/combustível da moto tende a empobrecer, o que causa superaquecimento das válvulas e perda de resposta. O remap da Planet Xtune calibra o mapa especificamente para a nova vazão mecânica.",
    category: "geral"
  },
  {
    question: "A Planet Xtune trabalha com módulos programáveis FuelTech e InjePro?",
    answer: "Sim! Somos especialistas na instalação, configuração e acerto fino de injeções programáveis FuelTech (FT450, FT550, etc.) e InjePro para motos de arrancada, circuito fechado, track days e projetos personalizados, com desenvolvimento de chicotes dedicados e calibração de bancada.",
    category: "tecnico"
  },
  {
    question: "Moro em outra cidade ou estado, posso enviar apenas a minha ECU?",
    answer: "Sim, atendemos clientes de todo o Brasil via Sedex/Transportadora! Você retira a central da motocicleta e a envia devidamente embalada para o nosso laboratório em Maringá-PR. Realizamos a leitura, o remap com base nas especificações do seu projeto e reenviamos com rastreamento expresso.",
    category: "processo"
  },
  {
    question: "Vocês desenvolvem acertos específicos para pista e track day?",
    answer: "Com certeza. Inclusive, somos detentores de recorde nacional na categoria 600cc. Desenvolvemos mapas para uso em circuito com respostas de acelerador sem atraso (ride-by-wire 1:1), controle de freio motor sob medida e corte de giro ajustado para extrair o limite seguro da motocicleta.",
    category: "geral"
  },
  {
    question: "Quanto de potência minha moto vai ganhar com o remap?",
    answer: "Os ganhos variam conforme a cilindrada, arquitetura do motor (2, 3 ou 4 cilindros) e modificações existentes (escapamento, filtro). Mais do que apenas o pico de cavalaria máxima, o maior benefício do remap Planet Xtune é a curva de torque preenchida em baixas e médias rotações e a resposta sem engasgos do acelerador. Uma avaliação técnica prévia indicará as estimativas realistas para o seu modelo.",
    category: "tecnico"
  },
  {
    question: "Cada motocicleta recebe um acerto individualizado?",
    answer: "Sim. Na Planet Xtune repudiamos o uso de mapas genéricos copiados. Cada moto possui desgastes, tolerâncias, combustível utilizado e preferências de pilotagem únicas. O mapa é refinado e validado considerando todos os detalhes do seu conjunto.",
    category: "processo"
  },
  {
    question: "Qual o prazo médio de execução do serviço de remap?",
    answer: "Para motocicletas atendidas presencialmente com agendamento prévio, a calibração e validação costuma ser realizada no mesmo dia ou em até 24 a 48 horas. Para centrais enviadas por correio, o processo no laboratório leva geralmente de 24 a 48 horas úteis após o recebimento.",
    category: "processo"
  }
];

export const BIKE_BRANDS_SELECTOR = [
  { name: "BMW", label: "BMW Motorrad", image: "/images/brands/bmw-highlight.jpg", popular: "S1000RR / F850GS / R1250GS" },
  { name: "Yamaha", label: "Yamaha", image: "/images/brands/yamaha-highlight.jpg", popular: "MT-09 / R1 / MT-07 / R3" },
  { name: "Kawasaki", label: "Kawasaki", image: "/images/brands/kawasaki-highlight.jpg", popular: "ZX-6R / ZX-10R / Z900 / Z1000" },
  { name: "Ducati", label: "Ducati", image: "/images/brands/ducati-highlight.jpg", popular: "Panigale V4 / V2 / Streetfighter" },
  { name: "Honda", label: "Honda", image: null, popular: "CBR 1000RR / CB 650R / 160 / 300 Denso" },
  { name: "Outras", label: "Outras Marcas", image: null, popular: "Triumph, Suzuki, KTM, etc." },
];

