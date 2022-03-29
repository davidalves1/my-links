<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { LinkItem } from '../shared/types/link';
  import LinkCard from './LinkCard.vue';

  const links = ref<LinkItem[]>([])

  const getLinks = async () => {
    links.value = await new Promise(res => setTimeout(() => {
      res([
        { url: 'http://davidalves1.com/teste1', description: 'Este é o link 1', timestamp: new Date('2022-01-08T11:15') },
        { url: 'http://davidalves1.com/teste2', description: 'Este é o link 2', timestamp: new Date('2022-03-03T10:52') },
        { url: 'http://davidalves1.com/teste3', description: 'Este é o link 3', timestamp: new Date('2022-03-08T09:12') },
        { url: 'http://davidalves1.com/teste4', description: 'Este é o link 4', timestamp: new Date('2022-10-03T19:37') },
      ])
    }, 2000))
  }

  onMounted(() => getLinks());
</script>

<template>
  <div>
    <LinkCard v-for="link in links"
      class="mb-3"
      :url="link.url"
      :description="link.description"
      :timestamp="link.timestamp"
    />
  </div>
</template>
