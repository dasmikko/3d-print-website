<template>
  <div class="navbar">
    <div class="logo">
      <span>Holbæk 3D Print.dk</span>
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