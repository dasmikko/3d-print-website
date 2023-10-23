<template>
  <section class="text-content">
    <h2>Eksempler på 3D print</h2>
    <div class="examples photoswipe">
      <div class="example">
        <a
            class="photoswipe__link"
            data-pswp-width="1350"
            data-pswp-height="930"
            href="/3dprints/pikachu-purple-pla.jpg">
          <img src="/3dprints/pikachu-purple-pla.jpg" alt="Sød lille Pikachu i Glossy Purple PLA">
        </a>
        <p>Sød lille Pikachu i Glossy Purple PLA</p>
      </div>
      <div class="example">
        <a
            class="photoswipe__link"
            data-pswp-width="1350"
            data-pswp-height="930"
            href="/3dprints/raspberry-pi-case.jpg">
            <img src="/3dprints/raspberry-pi-case.jpg" alt="Case til Raspberry Pi 4 i rød PLA-ST">
          </a>
        <p>Case til Raspberry Pi 4 i rød PLA-ST</p>
      </div>

      <div class="example">
        <a
            class="photoswipe__link"
            data-pswp-width="1350"
            data-pswp-height="930"
            href="/3dprints/reservedel-taske.jpg">
          <img src="/3dprints/reservedel-taske.jpg" alt="Ny taskestrop clips efter den originale knak Glossy Purple PLA">
        </a>
        <p>Ny taskestrop clips efter den originale knak Glossy Purple PLA</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.examples {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20;

  .example {
    img {
      @apply mb-4 max-w-full;
    }
  }
}
</style>