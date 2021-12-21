const IMAGES_DIR = './images';

const data = {
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
      iconUrl: `${ IMAGES_DIR }/html5-icon.svg`,
    },
    {
      name: "CSS3",
      iconUrl: `${ IMAGES_DIR }/css3-icon.svg`,
    },
    {
      name: "JavaScript",
      iconUrl: `${ IMAGES_DIR }/javascript-icon.svg`,
    },
    {
      name: "TypeScript",
      iconUrl: `${ IMAGES_DIR }/typescript-icon.svg`,
    },
    {
      name: "Java",
      iconUrl: `${ IMAGES_DIR }/java-icon.svg`,
    },
    {
      name: "Python",
      iconUrl: `${ IMAGES_DIR }/python-icon.svg`,
    },
    {
      name: "C/C++",
      iconUrl: `${ IMAGES_DIR }/c-cpp-icon.svg`,
    },
    {
      name: "SQL",
      iconUrl: `${ IMAGES_DIR }/sql-icon.svg`,
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
          iconUrl: `${ IMAGES_DIR }/bootstrap-icon.svg`,
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
          iconUrl: `${ IMAGES_DIR }/typeorm-icon.png`,
        },
      ],
      description: "Conhecimento na utilização do TypeORM para o desenvolvimento de APIs com Node e TypeScript",
    },
    {
      headings: [
        {
          name: "Android",
          iconUrl: `${ IMAGES_DIR }/android-icon.svg`,
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
  ],
};

const app = Vue.createApp({
  data() {
    return {
      education: data.education,
      languages: data.languages,
      knowledges: data.knowledges,
    }
  },
  methods: {
    setEducationColor(educationArray=[]) {
      let blue = true, count = 1;

      educationArray.forEach(item => {
        if (count >= 2) {
          count = 0;
          blue = !blue;
        }

        item.color = blue ? 'font-blue' : 'font-red';
        count++;
      });
    },
  },
  mounted() {
    this.setEducationColor(this.education);
  },
});

app.mount('#app');
