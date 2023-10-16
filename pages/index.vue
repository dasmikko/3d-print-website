<script setup>

</script>

<template>
  <section class="leading" style="background-image: url('./hero.jpg')">
    <div class="leading-bg">
      <h1>Dit lokale 3D-print service</h1>
      <p class="subtitle">Hurtig og billig 3D print til dit projekt, drone, pynt eller hvad ellers kan finde på</p>
      <NuxtLink role="button" class="button" to="/faa-et-tilbud">Få et uforpligtende tilbud!</NuxtLink>
    </div>
  </section>

  <section class="text-content">
    <h2>Eksempler på 3D print</h2>
    <div class="examples">
      <div class="example">
        <img src="https://placehold.co/600x400/png" alt="3D print af en drone">
        <p>3D print til drone</p>
      </div>
      <div class="example">
        <img src="https://placehold.co/600x400/png" alt="3D print af en drone">
        <p>Sød lille figur i skinnede lilla PLA filament</p>
      </div>

      <div class="example">
        <img src="https://placehold.co/600x400/png" alt="3D print af en drone">
        <p>Sød lille figur i skinnede lilla PLA filament</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
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


  .examples {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20;

    .example {
      img {
        @apply mb-4;
      }
    }
  }
</style>