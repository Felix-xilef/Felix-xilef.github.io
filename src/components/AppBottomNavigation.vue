<script setup lang="ts">
import { useCurriculumUrl } from '@/composables/url/curriculum-url.composable';
import { useMessageStore } from '@/stores/message.store';
import { computed } from 'vue';
import LanguageSelect from './LanguageSelect.vue';

const messages = computed(
  () => useMessageStore().messages.appBar,
);
</script>

<template>
  <v-bottom-navigation elevation="0">
    <v-btn
      :active="false"
      :href="useCurriculumUrl()"
      target="_blank"
      download
    >
      <v-icon
        icon="$mdi-file-document"
      ></v-icon>

      {{ messages.curriculumBtnLabel }}
    </v-btn>

    <div class="language-wrapper">
      <LanguageSelect />
    </div>
  </v-bottom-navigation>
</template>

<style scoped lang="scss">
.v-bottom-navigation {
  position: sticky !important;

  :deep(.v-bottom-navigation__content) {
    justify-content: space-around;
  }

  .v-btn,
  .language-wrapper {
    padding-top: .25rem;
  }

  .language-wrapper {
    display: flex;
    align-items: center;
  }
}
</style>
