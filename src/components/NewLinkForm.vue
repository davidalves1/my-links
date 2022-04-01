<script setup lang="ts">
  import { computed, ref } from 'vue';

  const link =  ref('');
  const description = ref('');
  const isSubmitButtonDisabled = computed(() => (!link.value || !description.value));

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
      :disabled="isSubmitButtonDisabled"
    >Adicionar</button>
  </form>
</template>
