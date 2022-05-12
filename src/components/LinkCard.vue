<script setup lang="ts">
  const props = defineProps<{
    url: string;
    description: string;
    timestamp?: Date;
  }>()
</script>

<template>
  <a :href="props.url" target="_blank" class="is-block" >
    <div class="card">
      <div class="card-content">
        <div class="content">
          <p><strong>{{ props.url }}</strong></p>
          <p>{{ props.description }}</p>
        </div>
      </div>
    </div>
  </a>
</template>
