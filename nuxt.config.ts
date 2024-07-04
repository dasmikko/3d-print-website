// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['/assets/css/main.css'],

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
    documentDriven: true,
  },

  site: {
    url: 'https://holbaek3dprint.dk',
    strictNuxtContentPaths: true,
  },

  compatibilityDate: '2024-07-04',
})