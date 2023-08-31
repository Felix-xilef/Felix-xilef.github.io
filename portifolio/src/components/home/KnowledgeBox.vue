<script setup lang="ts">
import type { KnowledgeItem } from '@/utils/interfaces/knowledge-item.interface';

const props = defineProps<{
  title: string;
  color: string;
  items: KnowledgeItem[];
}>();
</script>

<template>
  <v-card
    variant="outlined"
    :color="color"
    elevation="0"
    border="0"
  >
    <v-card-title tag="h3">
      {{ title }}
    </v-card-title>

    <v-card
      variant="outlined"
      :color="color"
      elevation="0"
      border="dashed"
    >
      <v-row justify="center">
        <v-col
          v-for="item, i of items"
          :key="`item-${i}`"
          cols="auto"
        >
          <v-icon
            size="x-large"
            :icon="item.icon"
            :color="item.color"
          ></v-icon>

          <span>
            {{ item.name }}
          </span>
        </v-col>
      </v-row>
    </v-card>
  </v-card>
</template>

<style scoped lang="scss">
.v-card {
  width: fit-content;

  margin-left: auto;
  margin-right: auto;

  .v-card-title {
    text-align: center;
  }

  .v-row {
    padding: 1.5rem;
    gap: .5rem;

    .v-col {
      display: flex;
      flex-direction: column;
      align-items: center;

      color: rgb(var(--v-theme-on-background));
    }
  }
}
</style>
