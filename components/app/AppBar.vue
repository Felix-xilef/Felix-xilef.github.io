<script setup lang="ts">
import LanguageSelect from '../LanguageSelect.vue';
import AppLogo from './AppLogo.vue';

const { xs: displayIsXs } = useDisplay();
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
        <AppLogo height="2.5rem"/>
      </v-col>

      <v-spacer></v-spacer>

      <template v-if="!displayIsXs">
        <slot></slot>

        <v-col cols="auto">
          <LanguageSelect />
        </v-col>
      </template>
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

    gap: .5rem;
  }
}
</style>
