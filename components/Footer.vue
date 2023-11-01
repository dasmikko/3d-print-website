<template>
  <div class="footer">
    <div class="footer-inner">
      <div class="items-start">
        <h4>Holbæk 3D Print</h4>
        <p>Lokal, personlig og billig 3D print.</p>
        <img src="/logo-noinfill.svg" alt="Logo" class="h-28 transform rotate-12">
      </div>
      <div>
        <h5>Links</h5>
        <ul>
          <li><NuxtLink to="/om-mig">Om mig</NuxtLink></li>
          <li><NuxtLink to="/faq">FAQ</NuxtLink></li>
        </ul>
      </div>
      <div>
        <h5>Social</h5>
        <ul>
          <li><BrandFacebookIcon/> <a href="https://www.facebook.com/profile.php?id=61552288271021">Facebook</a></li>
        </ul>
      </div>
      <div>
        <h5>Lokation</h5>
        <ul>
          <li><HomeIcon/> Baggesens Have 30<br>4300 Holbæk</li>
        </ul>
      </div>
      <div>
        <h5>Kontakt</h5>
        <ul>
          <li><MailIcon/> <a href="mailto:dasmikko@gmail.com">dasmikko@gmail.com</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { MailIcon, HomeIcon, BrandFacebookIcon } from 'vue-tabler-icons'
</script>

<style scoped lang="scss">
  .footer {
  @apply bg-slate-700 text-white flex justify-center h-auto lg:h-96;

    .footer-inner {
      @apply container mx-auto flex justify-between py-16 px-8 flex-col lg:flex-row;

      div {
        @apply flex flex-col gap-4;

        a {
          @apply text-white no-underline;
          &:hover {
            @apply underline;
          }
        }

        h4 {
          @apply text-4xl mb-0 text-amber-300;
        }

        h5 {
          @apply text-2xl mb-4 text-amber-300;
        }

        ul {
          @apply flex flex-col gap-4;

          li {
            @apply flex gap-2 items-center text-base;
          }
        }
      }
    }


}
</style>