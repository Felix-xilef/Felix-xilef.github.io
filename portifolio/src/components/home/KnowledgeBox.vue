<script setup lang="ts">
import type { KnowledgeItem } from '@/utils/interfaces/knowledge-item.interface';

const props = defineProps<{
  title: string;
  color: string;
  items: KnowledgeItem[];
}>();
</script>

<template>
  <v-container>
    <h3>
      {{ title }}
    </h3>

    <v-row>
      <v-col
        v-for="item, i of items"
        :key="`item-${i}`"
      >
        <v-icon
          size="x-large"
          :icon="item.icon"
        ></v-icon>

        <span>
          {{ item.name }}
        </span>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
</style>
