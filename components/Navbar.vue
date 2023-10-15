<template>
  <div class="navbar">
    <div class="flex justify-between items-center h-20 px-4">
      <NuxtLink to="/" class="logo">
        <span>Holbæk 3D Print.dk</span>
      </NuxtLink>
      <div class="links desktop">
        <NuxtLink to="/om-mig">Om mig</NuxtLink>
        <NuxtLink to="/inspiration">Inspiration</NuxtLink>
        <NuxtLink to="/faq">FAQ</NuxtLink>
        <NuxtLink to="/faa-et-tilbud" class="cta">Få et tilbud</NuxtLink>
      </div>
      <div class="links mobile">
        <Menu2Icon @click="toggleMenu"/>
      </div>
    </div>
    <div class="mobile-links" v-if="showMenu" key="mobile-links">
      <NuxtLink to="/om-mig" @click="toggleMenu">Om mig</NuxtLink>
      <NuxtLink to="/inspiration">Inspiration</NuxtLink>
      <NuxtLink to="/faq" @click="toggleMenu">FAQ</NuxtLink>
      <NuxtLink to="/faa-et-tilbud" @click="toggleMenu" class="cta">Få et tilbud</NuxtLink>
    </div>


  </div>
</template>

<script setup>
import { Menu2Icon } from 'vue-tabler-icons'


const showMenu = ref(false)

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}
</script>

<style lang="scss" scoped>
.navbar {
  @apply bg-opacity-50 bg-slate-700 text-white flex flex-col justify-center fixed w-full backdrop-filter backdrop-blur-lg;

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

    &.desktop {
      @apply hidden sm:flex;
    }

    &.mobile {
      @apply flex sm:hidden;
    }

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

  .mobile-links {
    @apply flex gap-8 flex-col flex-1 justify-start items-start px-4 pb-4 sm:hidden;

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