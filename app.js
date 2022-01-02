import data from './assets/data.js';

const lastStyleSheetIndex = document.styleSheets.length - 1;
const lastCssRuleIndex = document.styleSheets[lastStyleSheetIndex].cssRules.length;

const addStyle = (stringfiedCss = '') => document.styleSheets[lastStyleSheetIndex].insertRule(stringfiedCss, lastCssRuleIndex);

const app = Vue.createApp({
  data() {
    return {
      profilePictureUrl: data.profilePictureUrl,
      contacts: data.contacts,
      education: data.education,
      languages: data.languages,
      knowledges: data.knowledges,
      experiences: data.experiences,
      projects: data.projects,
    }
  },
  methods: {
    adaptScrollBar() {
      if (document.documentElement.scrollTop == 0) {
        addStyle('::-webkit-scrollbar-thumb { border-top-left-radius: 0; border-top-right-radius: 0; }');

      } else if (document.documentElement.scrollTop == document.documentElement.scrollHeight - document.documentElement.clientHeight) {
        addStyle('::-webkit-scrollbar-thumb { border-bottom-left-radius: 0; border-bottom-right-radius: 0; }');

      } else if (document.styleSheets[lastStyleSheetIndex].cssRules[lastCssRuleIndex]) {
        document.styleSheets[lastStyleSheetIndex].deleteRule(lastCssRuleIndex);
      }
    },
  },
  mounted() {
    this.adaptScrollBar();
    window.onscroll = this.adaptScrollBar;
  },
});

app.mount('#app');
