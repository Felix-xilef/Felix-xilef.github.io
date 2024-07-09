<script setup lang="ts">
import { useMessageStore } from '@/stores/message.store';
import { BrandStyle } from '@/utils/enums/brand-color.enum';
import type { KnowledgeItem } from '@/utils/interfaces/knowledge-item.interface';
import { computed } from 'vue';
import KnowledgeBox from './KnowledgeBox.vue';

const messages = computed(
  () => useMessageStore().messages.home.knowledge,
);

const languages: KnowledgeItem[] = [
  BrandStyle.CSHARP,
  BrandStyle.PYTHON,
  BrandStyle.JAVASCRIPT,
  BrandStyle.TYPESCRIPT,
  BrandStyle.CPP,
  BrandStyle.C,
  BrandStyle.HTML5,
  BrandStyle.CSS3,
  BrandStyle.JAVA,
];

const others: KnowledgeItem[] = [
  BrandStyle.UNITY,
  BrandStyle.NODEJS,
  BrandStyle.SQL,
  BrandStyle.FLUTTER,
  BrandStyle.VUE,
  BrandStyle.NESTJS,
  BrandStyle.DOCKER,
];
</script>

<template>
  <div class="knowledge-wrapper">
    <h1>
      {{ messages.title }}
    </h1>

    <KnowledgeBox
      :title="messages.languages"
      color="heading-1"
      :items="languages"
      class="knowledge-box"
    />

    <KnowledgeBox
      :title="messages.others"
      color="on-background"
      :items="others"
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
