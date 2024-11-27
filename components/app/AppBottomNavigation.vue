<script setup lang="ts">
import LanguageSelect from '../LanguageSelect.vue';
</script>

<template>
  <v-bottom-navigation elevation="0">
    <slot></slot>

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

  .language-wrapper {
    display: flex;
    align-items: center;

    padding-top: .25rem;
  }
}
</style>
