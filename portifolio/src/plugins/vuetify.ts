import icons from '@/icons';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

export default createVuetify({
  icons,

  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          primary: '#9f58ea',
          secondary: '#ed5058',
          background: '#1a1a1a',
          'on-background': '#a4a4a4',
          surface: '#2f2f2f',
          'on-surface': '#b9b9b9',
          'heading-1': '#ffffff',
          'heading-2': '#e9e9e9',
          'heading-3': '#d2d2d2',
          'heading-4': '#bbbbbb',
        },
      },
    },
  },
});
