<script setup lang="ts">
import AppLogo from './AppLogo.vue';

</script>

<template>
  <v-app-bar>
    <hr>

    <v-row
      align="center"
      no-gutters
    >
      <v-col>
        <AppLogo height="1.75rem"/>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<style scoped lang="scss">
.v-app-bar {
  :deep(.v-toolbar__content) {
    flex-direction: column;
    align-items: stretch;
  }

  hr {
    height: .5rem;
    width: 100%;

    border: none;

    background: linear-gradient(to right, var(--gradient-blue), var(--gradient-purple));
  }

  .v-row {
    padding-top: .5rem;
    padding-left: .5rem;
    padding-right: .5rem;
  }
}
</style>
