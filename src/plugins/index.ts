import type { App } from 'vue';
import router from '../router';
import pinia from '../stores';
import vuetify from './vuetify';
import { loadFonts } from './webfontloader';

export function registerPlugins(app: App) {
  loadFonts();

  app.use(vuetify)
  .use(router)
  .use(pinia);
}
