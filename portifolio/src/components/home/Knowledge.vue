<script setup lang="ts">
import { useMessageStore } from '@/stores/message.store';
import { computed } from 'vue';

const messages = computed(
  () => useMessageStore().messages.home.education,
);
</script>

<template>
</template>

<style scoped lang="scss">
</style>
