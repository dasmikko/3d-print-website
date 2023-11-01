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


onMounted(() => {
  // initialize lightbox
  lightbox.init();
});
</script>

<template>
  <ContentDoc />
</template>