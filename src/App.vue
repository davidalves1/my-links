<script setup lang="ts">
  import NewLinkFormVue from './components/NewLinkForm.vue';
  import LinkList from './components/LinkList.vue';
</script>

<template>
  <section class="container mt-5">
    <div class="column">
      <h1 class="title">My Links</h1>
    </div>
    <div class="columns">
      <div class="column">
        <LinkList />
      </div>
      <div class="column is-4">
        <NewLinkFormVue />
      </div>
    </div>
  </section>
</template>
