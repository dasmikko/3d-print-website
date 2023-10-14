<template>
  <div class="navbar">
    <NuxtLink to="/" class="logo">
      <span>Holbæk 3D Print.dk</span>
    </NuxtLink>
    <div class="links">
      <NuxtLink to="/om-mig">Om mig</NuxtLink>
      <NuxtLink to="/faq">FAQ</NuxtLink>
      <NuxtLink to="/faa-et-tilbud" class="cta">Få et tilbud</NuxtLink>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.navbar {
  @apply bg-opacity-50 bg-slate-700 text-white flex justify-between items-center p-4 h-20 fixed w-full backdrop-filter backdrop-blur-lg;

  .logo {
    @apply flex gap-4 text-4xl text-white no-underline transition;
    font-family: 'Bebas Neue', sans-serif;

    &:hover {
      @apply   text-amber-300;
    }

    span {
      @apply flex justify-center items-center;
    }
  }

  .links {
    @apply flex gap-8 items-center font-bold;

    a {
      @apply px-4 py-2 rounded-full transition duration-150 text-white no-underline ;

      &:hover {
        @apply bg-green-700;
      }
    }

    .cta {
      @apply bg-green-600 text-slate-200 font-bold rounded-full px-4 py-2 transition duration-150 no-underline;

      &:hover {
        @apply bg-green-700 shadow-xl;
      }
    }
  }
}
</style>