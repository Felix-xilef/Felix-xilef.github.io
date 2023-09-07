<script setup lang="ts">
import AppLogo from './AppLogo.vue';
import LanguageSelect from './LanguageSelect.vue';
</script>

<template>
  <v-app-bar
    height="auto"
    elevation="0"
  >
    <hr>

    <v-row
      align="center"
      no-gutters
    >
      <v-col cols="auto">
        <AppLogo height="1.75rem"/>
      </v-col>

      <v-spacer></v-spacer>

      <v-col cols="auto">
        <LanguageSelect />
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<style scoped lang="scss">
.v-app-bar {
  background-color: rgba(var(--v-theme-surface), .55) !important;
  backdrop-filter: blur(.6rem);

  :deep(.v-toolbar__content) {
    flex-direction: column;
    align-items: stretch;
  }

  hr {
    height: .5rem;
    width: 100%;

    border: none;

    background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  }

  .v-row {
    padding: .5rem;
  }
}
</style>
