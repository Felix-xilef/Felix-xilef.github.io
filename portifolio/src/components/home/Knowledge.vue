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
  },
  {
    name: 'Vuetify',
    icon: 'mdi-vuetify',
  },
  {
    name: 'Angular',
    icon: 'mdi-angular',
  },
  {
    name: 'Bootstrap',
    icon: 'mdi-bootstrap',
  },
  {
    name: 'NestJS',
    icon: 'nestjs',
  },
  {
    name: 'TypeORM',
    icon: 'typeorm',
  },
  {
    name: 'Sql',
    icon: 'mdi-database',
  },
  {
    name: 'Docker',
    icon: 'mdi-docker',
  },
  {
    name: 'Python',
    icon: 'mdi-language-python',
  },
  {
    name: 'TypeScript',
    icon: 'mdi-language-typescript',
  },
  {
    name: 'JavaScript',
    icon: 'mdi-language-javascript',
  },
  {
    name: 'HTML 5',
    icon: 'mdi-language-html5',
  },
  {
    name: 'CSS 3',
    icon: 'mdi-language-css3',
  },
];

const lessKnowledgebleItems: KnowledgeItem[] = [
  {
    name: 'Java',
    icon: 'mdi-language-java',
  },
  {
    name: 'C',
    icon: 'mdi-language-c',
  },
  {
    name: 'C++',
    icon: 'mdi-language-cpp',
  },
];
</script>

<template>
  <div>
    <h1>
      {{ messages.title }}
    </h1>

    <KnowledgeBox
      :title="messages.moreKnowledgebleBoxTitle"
      color="primary"
      :items="moreKnowledgebleItems"
    />

    <KnowledgeBox
      :title="messages.lessKnowledgebleBoxTitle"
      color="warning"
      :items="lessKnowledgebleItems"
    />
  </div>
</template>

<style scoped lang="scss">
</style>
