<template>
  <div class="footer">
    <div class="footer-inner">
      <div class="justify-center">
        <h4>Holbæk 3D Print.dk</h4>
        <p>Lokal, personlig og billig 3D print</p>
      </div>
      <div>
        <h5>Social</h5>
        <ul>
          <li><a href="#">Facebook</a></li>
        </ul>
      </div>
      <div>
        <h5>Lokation</h5>
        <ul>
          <li>Baggesens Have 30<br>4300 Holbæk</li>
        </ul>
      </div>
      <div>
        <h5>Kontakt</h5>
        <ul>
          <li><a href="mailto:holbaek3dprint@protonmail.com ">holbaek3dprint@protonmail.com </a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
  .footer {
  @apply bg-slate-700 text-white flex justify-center ;

    .footer-inner {
      @apply container mx-auto flex justify-evenly p-16;

      div {
        @apply flex flex-col gap-4;

        a {
          @apply text-white no-underline;
        }

        h4 {
          @apply text-4xl mb-0 text-purple-300;
        }

        h5 {
          @apply text-2xl mb-4 text-purple-300;
        }

        ul {
          @apply flex flex-col gap-4;

          li {
            @apply text-base;
          }
        }
      }
    }


}
</style>