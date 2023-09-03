<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import AppBar from './components/AppBar.vue';
import { useScrollbarStyleOnScroll } from './composables/scrollbar-style-on-scroll.composable';

onMounted(() => {
  useScrollbarStyleOnScroll();
});
</script>

<template>
  <v-app>
    <AppBar />

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped lang="scss">
</style>
