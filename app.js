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
  ]
};

const app = Vue.createApp({
  data() {
    return {
      education: data.education,
    }
  },
  methods: {
    setEducationOrder(educationArray=[]) {
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
    this.setEducationOrder(this.education);
  },
});

app.mount('#app');
