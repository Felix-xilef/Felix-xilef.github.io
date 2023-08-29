<script setup lang="ts">
import { type KnowledgeItem } from '@/utils/interfaces/knowledge-item.interface.ts';

const props = defineProps<{
  title: string;
  color: string;
  items: KnowledgeItem[];
}>();
</script>

<template>
</template>

<style scoped lang="scss">
</style>
