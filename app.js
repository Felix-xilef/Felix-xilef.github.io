import data from './assets/data.js';

const app = Vue.createApp({
  data() {
    return {
      profilePictureUrl: data.profilePictureUrl,
      contacts: data.contacts,
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
