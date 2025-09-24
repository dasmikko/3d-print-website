<template>
  <section class="text-content">
    <h2>Hvad tilbyder jeg?</h2>
    <div class="examples photoswipe">
      <div class="example">
        <a
          class="photoswipe__link"
          data-pswp-width="1536"
          data-pswp-height="2048"
          href="/3dprints/reverse-engineer.jpg"
        >
          <div
            alt="Reverse engineering"
            class="relative h-80 w-18 rounded-xl bg-center bg-no-repeat bg-cover overflow-hidden">
            <img
              class="absolute -top-1/2"
              src="/3dprints/reverse-engineer.jpg"
              alt="Ny taskestrop clips efter den originale knak Glossy Purple PLA"
            >
          </div>
        </a>
        <p>
          Har du en eller anden plastik dims, som er gået i stykker, eller mangler flere af dem?<br>
        </p>
        <p>Så kan jeg lave kopier af de fleste ting, <strong>og du betaler KUN, hvis jeg kan lave en tegning.</strong></p>
        <p>Det kan også være du mangler et special designet beslag, eller holder til en ting. Det er i virkeligheden kun dig der sætter grænsen!</p>
      </div>

      <div class="example">
        <a
          class="photoswipe__link"
          data-pswp-width="1536"
          data-pswp-height="2048"
          href="/3dprints/filament.jpg"
        >
          <div
            alt="Reverse engineering"
            class="relative h-80 w-18 rounded-xl bg-center bg-no-repeat bg-cover overflow-hidden">
            <img
              class="absolute -top-1/2"
              src="/3dprints/filament.jpg"
              alt="Printer og ABS filament rulle">
          </div>
        </a>
        <p>
          Jeg tilyder en række type materialer og farver, lige til dit projekt eller opgave.
        </p>
        <p>Jeg tilbyder f.eks: <strong>PLA, PLA+, PETG, ABS.</strong> Hvis du er i tvivl, skal jeg nok vejlede i hvilken type der skal bruges.</p>
        <p>Jeg kan også skaffe hjem, hvis der er brug for noget, som jeg ikke har liggende.</p>
      </div>
      <div class="example">
        <a
          class="photoswipe__link "
          data-pswp-width="1080"
          data-pswp-height="882"
          href="/trustpilot/review-trustpilot.jpg"
        >
          <div
            alt="Trustpilot anmeldelse"
            class="relative h-80 w-18 rounded-xl bg-center bg-no-repeat bg-cover overflow-hidden">
            <img
              class="absolute"
              src="/trustpilot/review-trustpilot.jpg"
              alt="Trustpilot anmeldelse">
          </div>
        </a>
        <p>
          <strong>Glade kunder!</strong>
        </p>
        <p>God kundeservice er meget vigtigt for mig, og jeg vil gøre mit for at du får en god oplevelse.</p>
        <p><a href="https://dk.trustpilot.com/review/holbaek3dprint.dk">Læs flere anmeldelser på Trustpilot</a></p>
      </div>
    </div>
  </section>
</template>

<script setup >

</script>

<style scoped lang="scss">
.examples {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20;

  .example {
    img, div {
      @apply mb-4 max-w-full;
    }
  }
}
</style>