<template>
  <form action="" class="bg-slate-600 p-8 rounded">
    <div class="field">
      <label for="name">Fulde navn</label>
      <input type="text" name="name" id="name">
    </div>

    <div class="field">
      <label for="email">Email</label>
      <input type="text" name="email" id="email">
    </div>

    <div class="field">
      <label for="phone">Telefon</label>
      <input type="tel" name="phone" id="phone">
    </div>

    <div class="field">
      <label for="model">3D model (.stl, .obj, .zip-fil hvis du har flere filer)</label>
      <input type="file" name="model" id="model">
    </div>

    <div class="field">
      <label for="comment">Kommentar</label>
      <p>Skriv om hvor meget infill du ønsker, hvilken filament og evt. andre ønsker. Hvis du har fundet din model på thingiverse, eller andre sider, er det en god idé at sende et link med.</p>
      <textarea name="comment" class="h-64" id="comment" ></textarea>
    </div>

    <div class="field flex justify-end">
      <button type="submit" class="button">Send</button>
    </div>
  </form>
</template>

<script setup lang="ts">

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