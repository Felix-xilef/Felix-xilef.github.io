<script setup lang="ts">
import { BrandStyle } from '~/utils/enums/brand-color.enum';
import KnowledgeBox from './KnowledgeBox.vue';

const { t } = useI18n({
  useScope: 'local',
});
</script>

<template>
  <div class="knowledge-wrapper">
    <h1>
      {{ t('title') }}
    </h1>

    <KnowledgeBox
      :title="t('languages')"
      color="heading-1"
      :items="[
        BrandStyle.CSHARP,
        BrandStyle.PYTHON,
        BrandStyle.JAVASCRIPT,
        BrandStyle.TYPESCRIPT,
        BrandStyle.CPP,
        BrandStyle.C,
        BrandStyle.HTML5,
        BrandStyle.CSS3,
        BrandStyle.JAVA,
      ]"
      class="knowledge-box"
    />

    <KnowledgeBox
      :title="t('others')"
      color="on-background"
      :items="[
        BrandStyle.UNITY,
        BrandStyle.NODEJS,
        BrandStyle.SQL,
        BrandStyle.FLUTTER,
        BrandStyle.VUE,
        BrandStyle.NESTJS,
        BrandStyle.DOCKER,
      ]"
      class="knowledge-box"
    />
  </div>
</template>

<style scoped lang="scss">
@use '~/assets/styles/mixins.scss';

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

<i18n lang="yaml">
en:
  title: 'Knowledge & Skills'
  languages: 'Languages'
  others: 'Frameworks and others'

pt-BR:
  title: 'Conhecimentos'
  languages: 'Linguagens'
  others: 'Frameworks e outros'

</i18n>

