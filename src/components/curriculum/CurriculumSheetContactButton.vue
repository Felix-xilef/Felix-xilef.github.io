<script setup lang="ts">
const props = defineProps<{
  href: string;
  icon: string;
  iconColor: string;
}>();
</script>

<template>
  <v-btn
    variant="text"
    density="compact"
    :href="href"
    target="_blank"
    height="100%"
    width="100%"
    stacked
  >
    <v-icon
      :icon="icon"
      :color="iconColor"
      size="32"
    ></v-icon>

    <slot></slot>
  </v-btn>
</template>

<style scoped lang="scss">
.v-btn {
  padding: .5rem;

  font-size: 10.2pt;
  font-weight: bold;
  text-transform: none;
}
</style>
