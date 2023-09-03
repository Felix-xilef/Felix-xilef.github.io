<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import AppBar from './components/AppBar.vue';
import AppFooter from './components/AppFooter.vue';
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

    <AppFooter class="app-footer"/>
  </v-app>
</template>

<style scoped lang="scss">
.v-main,
.app-footer {
  margin-top: 21vh;

  @media (max-width: 960px) {
    margin-top: 10vh;
  }
}
</style>
