<template>
  <section class="leading" style="background-image: url('./hero.jpg')">
    <div class="leading-bg">
      <h1>Din lokale 3D-print service</h1>
      <p class="subtitle">Hurtig og billig 3D print til dit projekt, drone, pynt eller hvad ellers kan finde på</p>
      <NuxtLink role="button" class="button" to="/faa-et-tilbud">Få et uforpligtende tilbud!</NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.leading {
  @apply
  p-0
  bg-center
  bg-no-repeat
  bg-gradient-to-r from-cyan-500 to-blue-500;

  .leading-bg {
    @apply
    flex flex-col gap-8 justify-center items-center
    bg-gray-900 bg-opacity-50
    h-[calc(100vh-5rem)]
    px-8 md:px-0;
  }

  h1 {
    @apply text-4xl md:text-6xl font-bold text-white;
    font-family: 'Bebas Neue', sans-serif;
  }

  .subtitle {
    @apply text-xl md:text-2xl;
  }

  .button {
    @apply text-xl md:text-3xl py-4 px-8;
  }
}
</style>