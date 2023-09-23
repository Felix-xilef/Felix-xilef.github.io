<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import AppBar from './components/AppBar.vue';
import AppFooter from './components/AppFooter.vue';
import { useScrollbarStyleOnScroll } from './composables/style/scrollbar-style-on-scroll.composable';

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
.v-main {
  margin-top: calc(68px + 1rem);
}

.app-footer {
  margin-top: 1rem;
}
</style>
