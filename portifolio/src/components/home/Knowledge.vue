<script setup lang="ts">
import { useMessageStore } from '@/stores/message.store';
import type { KnowledgeItem } from '@/utils/interfaces/knowledge-item.interface';
import { computed } from 'vue';
import KnowledgeBox from './KnowledgeBox.vue';

const messages = computed(
  () => useMessageStore().messages.home.knowledge,
);

const moreKnowledgebleItems: KnowledgeItem[] = [
  {
    name: 'Vue',
    icon: 'mdi-vuejs',
    color: '#42b883',
  },
  {
    name: 'Vuetify',
    icon: 'mdi-vuetify',
    color: '#2196f3',
  },
  {
    name: 'Angular',
    icon: 'mdi-angular',
    color: '#c3002f',
  },
  {
    name: 'Bootstrap',
    icon: 'mdi-bootstrap',
    color: '#9461fb',
  },
  {
    name: 'NestJS',
    icon: 'custom:nestjs',
    color: '#ea2845',
  },
  {
    name: 'TypeORM',
    icon: 'custom:typeorm',
    color: '#E83524',
  },
  {
    name: 'Sql',
    icon: 'mdi-database',
    color: '#ffc107',
  },
  {
    name: 'Docker',
    icon: 'mdi-docker',
    color: '#007bff',
  },
  {
    name: 'Python',
    icon: 'mdi-language-python',
    color: '#ffd343',
  },
  {
    name: 'TypeScript',
    icon: 'mdi-language-typescript',
    color: '#3178c6',
  },
  {
    name: 'JavaScript',
    icon: 'mdi-language-javascript',
    color: '#f7df1e',
  },
  {
    name: 'HTML 5',
    icon: 'mdi-language-html5',
    color: '#ff5722',
  },
  {
    name: 'CSS 3',
    icon: 'mdi-language-css3',
    color: '#2196f3',
  },
];

const lessKnowledgebleItems: KnowledgeItem[] = [
  {
    name: 'Java',
    icon: 'mdi-language-java',
    color: '#3a75b0',
  },
  {
    name: 'C',
    icon: 'mdi-language-c',
    color: '#004284',
  },
  {
    name: 'C++',
    icon: 'mdi-language-cpp',
    color: '#004284',
  },
];
</script>

<template>
  <div class="component-wrapper">
    <h1>
      {{ messages.title }}
    </h1>

    <KnowledgeBox
      :title="messages.moreKnowledgebleBoxTitle"
      color="primary"
      :items="moreKnowledgebleItems"
      class="knowledge-box"
    />

    <KnowledgeBox
      :title="messages.lessKnowledgebleBoxTitle"
      color="secondary"
      :items="lessKnowledgebleItems"
      class="knowledge-box"
    />
  </div>
</template>

<style scoped lang="scss">
.component-wrapper {
  padding-left: 3rem;
  padding-right: 3rem;

  h1 {
    text-align: center;
  }

  .knowledge-box {
    padding-top: 1.5rem;
  }
}
</style>
