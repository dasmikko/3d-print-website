// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';


export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['/assets/css/main.css'],
  nitro: {
    preset: 'static'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@nuxt/content',
    '@formkit/auto-animate/nuxt',
    "@nuxtjs/sitemap",
    '@primevue/nuxt-module',
    'nuxt-gtag'
  ],

  content: {
  },
  routeRules: {
    '/': { prerender: true }
  },
  site: {
    url: 'https://holbaek3dprint.dk',
  },
  gtag: {
    id: 'G-VC4KLM1PJT',
    initCommands: [
      ['consent', 'default', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied',
        wait_for_update: 500
      }]
    ]
  },
  compatibilityDate: '2024-07-04',
  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  }
})