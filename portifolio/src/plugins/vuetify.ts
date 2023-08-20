import { LanguageTag } from '@/utils/enums/language-tag.enum';
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

export default createVuetify({
  locale: {
    fallback: LanguageTag.ENGLISH,
  },

  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
        },
      },
    },
  },
});
