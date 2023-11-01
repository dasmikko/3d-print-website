<template>
  <p>
    <a
      :href="src"
      class="photoswipe__link"
      :data-pswp-width="width"
      :data-pswp-height="height">
      <img :src="src" :alt="alt">
    </a>
  </p>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  height: {
    type: String,
  },
  width: {
    type: String,
  }
})
</script>

<style scoped lang="scss">

</style>