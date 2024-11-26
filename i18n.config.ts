import { en, pt } from 'vuetify/locale';

export default defineI18nConfig(() => ({
  legacy: false,
  messages: {
    en: {
      $vuetify: en,
    },

    'pt-BR': {
      $vuetify: pt,
    },
  },
}));
