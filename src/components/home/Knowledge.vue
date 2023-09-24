<script setup lang="ts">
import { useMessageStore } from '@/stores/message.store';
import { BrandStyle } from '@/utils/enums/brand-color.enum';
import type { KnowledgeItem } from '@/utils/interfaces/knowledge-item.interface';
import { computed } from 'vue';
import KnowledgeBox from './KnowledgeBox.vue';

const messages = computed(
  () => useMessageStore().messages.home.knowledge,
);

const moreKnowledgebleItems: KnowledgeItem[] = [
  BrandStyle.VUE,
  BrandStyle.VUETIFY,
  BrandStyle.ANGULAR,
  BrandStyle.BOOTSTRAP,
  BrandStyle.NESTJS,
  BrandStyle.TYPEORM,
  BrandStyle.SQL,
  BrandStyle.DOCKER,
  BrandStyle.PYTHON,
  BrandStyle.NODEJS,
  BrandStyle.TYPESCRIPT,
  BrandStyle.JAVASCRIPT,
  BrandStyle.HTML5,
  BrandStyle.CSS3,
];

const lessKnowledgebleItems: KnowledgeItem[] = [
  BrandStyle.JAVA,
  BrandStyle.FLUTTER,
  BrandStyle.ANDROID_STUDIO,
  BrandStyle.C,
  BrandStyle.CPP,
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
