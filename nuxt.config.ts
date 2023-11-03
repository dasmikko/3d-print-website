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
    'nuxt-gtag'
  ],
  content: {
    // ... options
  },
  gtag: {
    id: 'G-VC4KLM1PJT',
    initialConsent: false,
  }
})
