export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: {
    enabled: true,
  },

  app: {
    head: {
      meta: [
        {
          charset: 'utf-8',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg',
        },
      ],
    },
  },

  modules: [
    'vuetify-nuxt-module',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],

  css: [
    '~/assets/styles/index.scss',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },

  i18n: {
    strategy: 'no_prefix',
    vueI18n: './i18n.config.ts',

    locales: [
      {
        code: 'en',
        language: 'en-US',
        name: 'English',
      },
      {
        code: 'pt-BR',
        language: 'pt-BR',
        name: 'Português',
      },
    ],
  },

  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark',
        themes: {
          dark: {
            colors: {
              primary: '#9f58ea',
              secondary: '#ed5058',
              success: '#3ddc84',
              "on-success": '#ffffff',
              info: '#2178eb',
              "on-info": '#ffffff',
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
          },
        },
      },
    },
  },
});