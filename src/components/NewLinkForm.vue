<script setup lang="ts">
  import { computed } from 'vue';

  const link =  '';
  const description = '';
  const isDisabled = computed(() => {
    return !link || !description;
  });

  const onSubmit = () => {
    alert('Link adicionado com sucesso!');
  }
</script>

<template>
  <form @submit.prevent="onSubmit">
    <label for="link">Link</label>
    <input type="text" class="input mb-3" id="link" v-model="link" />

    <label for="description">Descrição</label>
    <input type="text" class="input mb-3" id="description" v-model="description" />

    <button
      type="submit"
      class="button is-primary is-medium is-fullwidth"
      :disabled="isDisabled"
    >Adicionar</button>
  </form>
</template>
