<template>
  <form action="">
    <div class="field">
      <label for="name">Fulde navn</label>
      <input type="text" name="name" id="name">
    </div>

    <div class="field">
      <label for="name">Email</label>
      <input type="text" name="email" id="email">
    </div>

    <div class="field">
      <label for="name">Telefon</label>
      <input type="text" name="phone" id="phone">
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
  }

  .field-group {
    @apply w-full flex gap-4;
  }
</style>