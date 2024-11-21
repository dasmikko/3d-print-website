<template>
  <section
    class="leading"
    style="background-image: url('./hero.jpg')"
  >
    <div class="leading-bg">
      <iframe
        src="https://www.youtube.com/embed/?controls=0&autoplay=1&loop=1&mute=1&playsinline=1&list=PL81lbyZjsfgqiAUHjYQ4CwHdNTePsdPGb"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>

    <div class="leading-content">
        <h1>Din lokale 3D-print service</h1>
        <p class="subtitle">
          Hurtig og billig 3D print til dit projekt, drone, bil, pynt, osv...
        </p>
        <p class="subtitle">
          Det er kun din fantasi der sætter grænsen!
        </p>

        <NuxtLink
          role="button"
          class="button"
          to="/faa-et-tilbud"
        >
          Få et uforpligtende tilbud!
        </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.leading {
  @apply
    p-0
    m-0
    relative
    h-[calc(100vh-5rem)]
    bg-cover
    bg-center
    bg-no-repeat
    bg-gradient-to-r from-cyan-500 to-blue-500;

  .leading-bg {
    @apply
      absolute top-0 left-0 z-0 w-full
      flex flex-col gap-4 justify-center items-center
      bg-gray-900 bg-opacity-50
      h-[calc(100vh-5rem)];

    iframe {
      @apply
        w-full
        h-full
    }
  }

  .leading-content {
    @apply absolute w-full flex flex-col gap-4 justify-center items-center
    bg-gray-900 bg-opacity-80
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