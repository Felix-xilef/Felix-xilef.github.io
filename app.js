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
          name: "Angular",
          iconUrl: `${ IMAGES_DIR }/angular-icon.svg`,
        },
      ],
      description: 'Conhecimento em desenvolvimento web utilizando Angular com Typescript',
    },
    {
      headings: [
        {
          name: "JQuery",
          iconUrl: `${ IMAGES_DIR }/jquery-icon.svg`,
        },
        {
          name: "Bootstrap",
          iconUrl: `${ IMAGES_DIR }/bootstrap-icon.svg`,
        },
      ],
      description: 'Conhecimento em desenvolvimento de sistemas web utilizando JQuery e  Boostrap',
    },
    {
      headings: [
        {
          name: "Figma",
          iconUrl: `${ IMAGES_DIR }/figma-icon.svg`,
        },
      ],
      description: 'Conhecimento básico de design de interfaces utilizando Figma',
    },
    {
      headings: [
        {
          name: "Android",
          iconUrl: `${ IMAGES_DIR }/android-icon.svg`,
        },
      ],
      description: 'Conhecimento em desenvolvimento nativo para Android utilizando Android Studio e linguagem Java, através do curso de Android da plataforma Estudonauta',
    },
    {
      headings: [
        {
          name: "React",
          iconUrl: `${ IMAGES_DIR }/react-icon.svg`,
        },
      ],
      description: 'Conhecimento em desenvolvimento backend, web e mobile utilizando React e React Native com Typescript e TSX através da NLW3 apresentada pela Rocketseat',
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
