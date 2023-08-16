<script setup lang="ts">
import { useMessageStore } from '@/stores/message.store';
import { computed } from 'vue';

const messages = computed(
  () => useMessageStore().messages.home,
);
</script>

<template>
  <section>
    <h1>
      {{ messages.presentation.title }}
    </h1>

    <p>
      {{ messages.presentation.description }}
    </p>
  </section>
</template>

<style scoped lang="scss">
</style>
