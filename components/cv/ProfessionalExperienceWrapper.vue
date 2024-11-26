<script setup lang="ts">
const {
  smAndDown: isDisplaySmAndDown,
} = useDisplay();
</script>

<template>
  <v-expansion-panels v-if="isDisplaySmAndDown">
    <slot></slot>
  </v-expansion-panels>
  <template v-else>
    <v-divider :thickness="3"></v-divider>

    <v-timeline side="end">
      <slot></slot>
    </v-timeline>

    <v-divider :thickness="3"></v-divider>
  </template>
</template>

<style scoped lang="scss">
.v-divider {
  color: rgb(var(--v-border-color));
}
</style>
