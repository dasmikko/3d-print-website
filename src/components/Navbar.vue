<template>
  <div class="navbar">
    <div class="logo">
      <span>Hobby Print</span>
    </div>
    <div class="links">
      <a href="#">Om mig</a>
      <a href="#">FAQ</a>
      <a href="#" class="cta">Få et tilbud</a>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.navbar {
  @apply bg-slate-700 text-white flex justify-between items-center p-4 h-20;

  .logo {
    @apply flex gap-4 text-4xl;
    font-family: 'Bebas Neue', sans-serif;

    span {
      @apply flex justify-center items-center;
    }
  }

  .links {
    @apply flex gap-8 items-center font-bold;

    a {
      @apply px-4 py-2 rounded-full transition duration-150;

      &:hover {
        @apply bg-purple-700;
      }
    }

    .cta {
      @apply bg-purple-500 text-white font-bold rounded-full px-4 py-2 transition duration-150;

      &:hover {
        @apply bg-purple-600 shadow-xl;
      }
    }
  }
}
</style>