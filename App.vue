<template>
  <Navbar />

  {{ cookieStatus }}

  <div class="page-content">
    <NuxtPage/>
  </div>

  <vue-cookie-accept-decline
      :debug="false"
      :disableDecline="false"
      :showPostponeButton="false"
      @status="cookieStatus"
      @clicked-accept="cookieClickedAccept"
      @clicked-decline="cookieClickedDecline"
      elementId="myPanel1"
      position="bottom-left"
      ref="myPanel1"
      transitionName="slideFromBottom"
      type="floating"
  >
    <!-- Optional -->
    <template #message>
      <p>Vi bruger cookies til at sikre den bedste mulige oplevelse.</p>
      <nuxt-link to="/privatliv">Læs mere her...</nuxt-link>
    </template>

    <!-- Optional -->
    <template #declineContent>Nej tak!</template>

    <!-- Optional -->
    <template #acceptContent>Helt ok!</template>
  </vue-cookie-accept-decline>

  <Footer />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import VueCookieAcceptDecline from 'vue-cookie-accept-decline';
import 'vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css';
import 'photoswipe/style.css'
import { initConsentRef } from '~/utils/consent.js';
import {onMounted} from 'vue';

const { gtag, grantConsent, revokeConsent } = useGtag()

useHead({
  link: [
    {href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa:wght@700&display=swap',
      rel: 'stylesheet'}
  ]
})

const myPanel1 = ref(null)
const cookieStatus = ref(null)

const cookieClickedAccept = () => {
  console.log('cookieClickedAccept')
  grantConsent()
}

const cookieClickedDecline = () => {
  console.log('cookieClickedDecline')
  revokeConsent()
}

onMounted(() => {
  initConsentRef(myPanel1.value)
})
</script>

<style lang="scss">

html, body {
  @apply bg-slate-800;

  .page-content {
    @apply text-white pt-20;

    section {
      @apply py-16 px-8 md:px-0;

      &.text-content {
        @apply container mx-auto;
      }
    }
  }
}

h1 {
  @apply text-5xl md:text-6xl;
}

h2 {
  @apply text-4xl;
}

h3 {
  @apply text-2xl;
}

h4 {
  @apply text-xl;
}

h6 {
  @apply text-sm;
}

img {
  @apply max-w-full rounded-xl;
}

a {
  @apply underline text-amber-400;
}

p, pre, ul, ol {
  @apply mb-4;
}

pre {
  @apply bg-gray-900 text-white p-4 rounded-xl;
}

ul {
  @apply list-disc list-inside;
}


h1, h2, h3, h4, h5, h6 {
  @apply mt-8 mb-4;
  font-family: 'Bebas Neue', sans-serif;
}

button, .button {
  @apply bg-green-600 text-white font-bold rounded-full px-4 py-2 transition duration-150 no-underline;

  &:hover {
    @apply bg-green-700 shadow-xl;
  }
}

input, textarea {
  @apply w-full border border-gray-400 rounded px-4 py-2 text-black;
}

</style>
