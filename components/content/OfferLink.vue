<template>
  <p>
    <a
      class="button inline-block"
      :href="linkHref"
      target="_blank"
    >Send mail</a>
  </p>
</template>

<script setup>

import {computed} from 'vue';


const mailSubject = 'Ønske om tilbud'
const mailBody = `Navn:

Filament (PLA? Farve?):

Link til model:

Infill:

Sendes eller afhentes?:

Andre bemærkninger: `


const linkHref = computed(() => {
  return `mailto:dasmikko@gmail.com?subject=${mailSubject}&body=${encodeURIComponent(mailBody)}`
 })
</script>

<style scoped lang="scss">
  label {
    @apply block font-bold mb-2;
  }

  .field {
    @apply mb-8 flex-grow;

    &:last-child {
      @apply mb-0;
    }
  }

  .field-group {
    @apply w-full flex gap-4;
  }
</style>