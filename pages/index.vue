<script setup>
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import {onMounted} from 'vue';


const lightbox = new PhotoSwipeLightbox({
  // may select multiple "galleries"
  gallery: '.photoswipe',

  // Elements within gallery (slides)
  children: 'a.photoswipe__link',

  // setup PhotoSwipe Core dynamic import
  pswpModule: () => import('photoswipe')
});

const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})


// Set page title and meta description from front-matter
watch(() => page.value, (newPage) => {
  if (newPage) {
    useHead({
      title: newPage.title,
      meta: [
        { name: 'description', content: newPage.description }
      ]
    })
  }
}, { immediate: true })



onMounted(() => {
  // initialize lightbox
  lightbox.init();
});
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
</template>