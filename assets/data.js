const IMAGES_DIR = './assets/images';

export default {
  profilePictureUrl: `${IMAGES_DIR}/profile-picture.jpg`,
  contacts: {
    github: {
      label: 'Felix-xilef',
      url: 'https://github.com/Felix-xilef',
      iconClass: 'bi-github',
    },
    mail: {
      label: 'felixpb@yahoo.com.br',
      url: 'mailto:felixpb@yahoo.com.br',
      iconClass: 'bi-envelope-fill',
    },
    facebook: {
      label: 'felix.petiz',
      url: 'https://www.facebook.com/felix.petiz/',
      iconClass: 'bi-facebook bi-is-gradient bi-has-background',
    },
    phone: {
      label: '+55 (11) 95331-1965',
      url: 'tel:+5511953311965',
      iconClass: 'bi-telephone-fill',
    },
    linkedin: {
      label: 'felix-xilef',
      url: 'https://www.linkedin.com/in/felix-xilef/',
      iconClass: 'bi-linkedin bi-has-background',
    },
    instagram: {
      label: 'petix_felix',
      url: 'https://www.instagram.com/petix_felix/',
      iconClass: 'bi-instagram bi-is-gradient',
    },
  },
  education: [
    {
      type: "Ensino Superior",
      content: [
        {
          heading: "Análise e Desenvolvimento de Sistemas",
          subheading: "Fatec São Caetano do Sul - Antônio Russo",
          status: "Concluído em Dez. de 2021"
        }
      ]
    },
    {
      type: "Cursos",
      content: [
        {
          heading: "Linux Essentials",
          subheading: "CISCO",
          status: "Concluído em Dez. de 2020"
        }
      ]
    },
    {
      type: "Idiomas",
      content: [
        {
          heading: "Inglês",
          subheading: "Avançado"
        },
        {
          heading: "Espanhol",
          subheading: "Avançado"
        },
        {
          heading: "Japonês",
          subheading: "Básico"
        }
      ]
    },
    {
      type: "Certificações",
      content: [
        {
          heading: "Certificação em Teste de Software CTFL",
          subheading: "BSTQB",
          status: "Emitido em Maio de 2019",
          extra: "N° do Certificado: 19-CTFL-09207-BR"
        }
      ]
    },
  ],
  languages: [
    {
      name: "HTML5",
      iconUrl: `${IMAGES_DIR}/html5-icon.svg`,
    },
    {
      name: "CSS3",
      iconUrl: `${IMAGES_DIR}/css3-icon.svg`,
    },
    {
      name: "JavaScript",
      iconUrl: `${IMAGES_DIR}/javascript-icon.svg`,
    },
    {
      name: "TypeScript",
      iconUrl: `${IMAGES_DIR}/typescript-icon.svg`,
    },
    {
      name: "Java",
      iconUrl: `${IMAGES_DIR}/java-icon.svg`,
    },
    {
      name: "Python",
      iconUrl: `${IMAGES_DIR}/python-icon.svg`,
    },
    {
      name: "C/C++",
      iconUrl: `${IMAGES_DIR}/c-cpp-icon.svg`,
    },
    {
      name: "SQL",
      iconUrl: `${IMAGES_DIR}/sql-icon.svg`,
    },
  ],
  knowledges: [
    {
      headings: [
        {
          name: "Vue.js",
          iconUrl: 'https://v3.vuejs.org/logo.png',
        },
        {
          name: "Angular",
          iconUrl: 'https://angular.io/assets/images/logos/angular/shield-large.svg',
        },
      ],
      description: 'Conhecimento em desenvolvimento de sistemas web (frontend) utilizando Angular com TypeScript e Vue 2 e 3 com JavaScript',
    },
    {
      headings: [
        {
          name: "Bootstrap",
          iconUrl: `${IMAGES_DIR}/bootstrap-icon.svg`,
        },
      ],
      description: 'Conhecimento na utilização do Boostrap no desenvolvimento de sistemas web',
    },
    {
      headings: [
        {
          name: "Figma",
          iconUrl: 'https://static.figma.com/app/icon/1/favicon.svg',
        },
      ],
      description: 'Conhecimento básico de design de interfaces utilizando Figma',
    },
    {
      headings: [
        {
          name: "Node.js",
          iconUrl: 'https://nodejs.org/static/images/favicons/apple-touch-icon.png',
        },
        {
          name: "NestJS",
          iconUrl: 'https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg',
        },
      ],
      description: "Conhecimento em desenvolvimento de APIs REST utilizando Node com TypeScript e NestJS (Framework baseado no Express)",
    },
    {
      headings: [
        {
          name: "TypeORM",
          iconUrl: `${IMAGES_DIR}/typeorm-icon.png`,
        },
      ],
      description: "Conhecimento na utilização do TypeORM para o desenvolvimento de APIs com Node e TypeScript",
    },
    {
      headings: [
        {
          name: "Android",
          iconUrl: `${IMAGES_DIR}/android-icon.svg`,
        },
      ],
      description: 'Conhecimento em desenvolvimento nativo para Android utilizando Android Studio e linguagem Java',
    },
    {
      headings: [
        {
          name: "Flutter",
          iconUrl: 'https://storage.googleapis.com/cms-storage-bucket/4fd0db61df0567c0f352.png',
        },
      ],
      description: 'Conhecimento básico em desenvolvimento de sistemas web e mobile utilizando Flutter',
    },
    {
      headings: [
        {
          name: "JSF",
          iconUrl: 'https://pbs.twimg.com/profile_images/1352023473/jsf-logo-no-text_400x400.png',
        },
        {
          name: "Play",
          iconUrl: 'https://www.playframework.com/assets/images/logos/2512c6416003429c3e7d3e9d389e52bd-play_icon_full_color.svg',
        },
      ],
      description: 'Conhecimento básico em desenvolvimento java utilizando JavaServer Faces e Play Framework através de manutenções relazidas em sistemas legado',
    },
  ],
  experiences: [
    {
      role: 'Estagiário em desenvolvimento de sistemas',
      enterprise: 'Smart Staff',
      beginDate: '05/2021',
      endDate: 'hoje',
      description: 'Sou estagiário na equipe de desenvolvimento da empresa Smart Staff. Atuo criando novos sistemas e dando manutenção, assim como criando novas funcionalidades para os já existentes. Incluindo sistemas em Angular, Vue, NestJS e legados em Java, utilizando JSF e Play Framework',
    },
    {
      role: 'Estagiário em atendimento ao cliente',
      enterprise: 'Sabesp',
      beginDate: '06/2017',
      endDate: '06/2018',
      description: 'Durante o 2°/3° ano do ensino médio estagiei na agência da Sabesp de São Mateus. Atuando principalmente na área de atendimento ao cliente, mas também na parte de organização interna',
    },
  ],
  projects: [
    'saver-books',
    'HavingOrder',
    'Curso-de-Python',
    'Estrutura-de-Dados',
    'Programacao-em-Scripts',
    'next-level-week-5-Flutter',
  ],
};
