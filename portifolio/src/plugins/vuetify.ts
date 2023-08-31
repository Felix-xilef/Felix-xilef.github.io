import icons from '@/icons';
import { LanguageTag } from '@/utils/enums/language-tag.enum';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

export default createVuetify({
  locale: {
    fallback: LanguageTag.ENGLISH,
  },

  icons,

  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          primary: '#4B9EF3',
          secondary: '#ED5058',
        },
      },
    },
  },
});
