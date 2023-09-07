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
    icon: 'custom:vue',
    color: '#42b883',
  },
  {
    name: 'Vuetify',
    icon: '$vuetify',
    color: '#1697F6',
  },
  {
    name: 'Angular',
    icon: 'custom:angular',
    color: '#c3002f',
  },
  {
    name: 'Bootstrap',
    icon: 'custom:bootstrap',
    color: '#9461fb',
  },
  {
    name: 'NestJS',
    icon: 'custom:nestjs',
    color: '#e0234e',
  },
  {
    name: 'TypeORM',
    icon: 'custom:typeorm',
    color: '#E83524',
  },
  {
    name: 'Sql',
    icon: '$mdi-database',
    color: '#ffc107',
  },
  {
    name: 'Docker',
    icon: 'custom:docker',
    color: '#1D63ED',
  },
  {
    name: 'Python',
    icon: 'custom:python',
    color: '#ffd343',
  },
  {
    name: 'Node.js',
    icon: 'custom:nodejs',
    color: '#5fa04e',
  },
  {
    name: 'TypeScript',
    icon: '$mdi-language-typescript',
    color: '#3178c6',
  },
  {
    name: 'JavaScript',
    icon: '$mdi-language-javascript',
    color: '#f7df1e',
  },
  {
    name: 'HTML5',
    icon: '$mdi-language-html5',
    color: '#ff5722',
  },
  {
    name: 'CSS3',
    icon: '$mdi-language-css3',
    color: '#2196f3',
  },
];

const lessKnowledgebleItems: KnowledgeItem[] = [
  {
    name: 'Java',
    icon: 'custom:java',
    color: '#3a75b0',
  },
  {
    name: 'Flutter',
    icon: 'custom:flutter',
    color: '#027DFD',
  },
  {
    name: 'Android Studio',
    icon: '$mdi-android',
    color: '#3ddc84',
  },
  {
    name: 'C',
    icon: '$mdi-language-c',
    color: '#00579E',
  },
  {
    name: 'C++',
    icon: '$mdi-language-cpp',
    color: '#00579E',
  },
];
</script>

<template>
  <div class="knowledge-wrapper">
    <h1>
      {{ messages.title }}
    </h1>

    <KnowledgeBox
      :title="messages.moreKnowledgebleBoxTitle"
      color="heading-1"
      :items="moreKnowledgebleItems"
      class="knowledge-box"
    />

    <KnowledgeBox
      :title="messages.lessKnowledgebleBoxTitle"
      color="on-background"
      :items="lessKnowledgebleItems"
      class="knowledge-box"
    />
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins.scss';

.knowledge-wrapper {
  padding-left: 3rem;
  padding-right: 3rem;

  h1 {
    max-width: fit-content;
    margin-left: auto;
    margin-right: auto;

    font-size: 32px;

    @include mixins.linear-text-gradient;
  }

  .knowledge-box {
    padding-top: 1.5rem;
  }
}
</style>
