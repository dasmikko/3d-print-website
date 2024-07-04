// https://nuxt.com/docs/api/configuration/nuxt-config
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
    "@nuxtjs/sitemap"
  ],

  content: {
  },
  routeRules: {
    '/': { prerender: true }
  },
  site: {
    url: 'https://holbaek3dprint.dk',
  },

  compatibilityDate: '2024-07-04',
})