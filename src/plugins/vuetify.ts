import icons from '@/icons';
import { createVuetify } from 'vuetify';
import type { ThemeDefinition } from 'vuetify/dist/vuetify.js';
import 'vuetify/styles';

const darkTheme: ThemeDefinition = {
  colors: {
    primary: '#9f58ea',
    secondary: '#ed5058',
    success: '#3ddc84',
    "on-success": '#ffffff',
    background: '#1a1a1a',
    'on-background': '#a4a4a4',
    surface: '#2f2f2f',
    'on-surface': '#b9b9b9',
    'heading-1': '#ffffff',
    'heading-2': '#e9e9e9',
    'heading-3': '#d2d2d2',
    'heading-4': '#bbbbbb',
  },
  dark: true,
};

const sheetTheme: ThemeDefinition = {
  colors: {
    ...darkTheme.colors,
    background: '#ffffff',
    'on-background': '#212529',
    'heading-1': '#0b0b0b',
    'heading-2': '#0b0b0b',
    'heading-3': '#0b0b0b',
    'heading-4': '#0b0b0b',
  },
  dark: false,
};

export default createVuetify({
  icons,

  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: darkTheme,
      sheet: sheetTheme,
    },
  },
});
