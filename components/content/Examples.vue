<template>
  <section class="text-content">
    <h2>Eksempler på 3D print</h2>
    <div class="examples">
      <div class="example">
        <img src="/3dprints/pikachu-purple-pla.jpg" alt="Sød lille Pikachu i Glossy Purple PLA">
        <p>Sød lille Pikachu i Glossy Purple PLA</p>
      </div>
      <div class="example">
        <img src="/3dprints/raspberry-pi-case.jpg" alt="Case til Raspberry Pi 4 i rød PLA-ST">
        <p>Case til Raspberry Pi 4 i rød PLA-ST</p>
      </div>

      <div class="example">
        <img src="/3dprints/reservedel-taske.jpg" alt="Ny taskestrop clips efter den originale knak Glossy Purple PLA">
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