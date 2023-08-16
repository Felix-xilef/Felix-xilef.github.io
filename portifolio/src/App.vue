<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppBar from './components/AppBar.vue';
import { useMessageStore } from './stores/message.store';

useMessageStore().initialize();
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
