

<template>
  <Navbar />

  <div class="page-content">
    <router-view />
  </div>

  <Footer />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue';
</script>

<style lang="scss">

html, body {
  @apply bg-slate-800;

  .page-content {
    @apply text-white;

    section {
      @apply py-16;

      &.text-content {
        @apply container mx-auto;
      }
    }
  }
}

h1 {
  @apply text-6xl;
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
  @apply underline text-amber-600;
}



h1, h2, h3, h4, h5, h6 {
  @apply mb-8;
  font-family: 'Bebas Neue', sans-serif;
}

button {
  @apply bg-green-600 text-white font-bold rounded-full px-4 py-2 transition duration-150;

  &:hover {
    @apply bg-green-700 shadow-xl;
  }
}

</style>
