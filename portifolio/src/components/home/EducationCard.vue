<script setup lang="ts">
const props = defineProps<{
  icon: string;
  title: string;
  items: {
    name: string;
    description: string;
    conclusionText?: string;
  }[];
}>();
</script>

<template>
  <v-card>
    <v-card-title tag="h4">
      <v-icon :icon="icon"></v-icon>

      <span>
        {{ title }}
      </span>
    </v-card-title>

    <v-card-item
      v-for="item, i in items"
      :key="`item-${i}`"
    >
      <v-card-text>
        <div class="name">
          {{ item.name }}
        </div>

        <div class="description">
          {{ item.description }}
        </div>
      </v-card-text>

      <v-card-actions v-if="item.conclusionText">
        <v-spacer></v-spacer>

        <span>
          {{ item.conclusionText }}
        </span>
      </v-card-actions>
    </v-card-item>
  </v-card>
</template>

<style scoped lang="scss">
.v-card {
  .v-card-title {
    font-size: 32px;
    font-weight: 600;

    padding-bottom: 1rem;

    display: flex;
    align-items: center;
    gap: .5rem;

    .v-icon {
      --v-icon-size-multiplier: .8;
    }
  }

  .v-card-item {
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;

    .v-card-text {
      padding-top: 0;
      padding-bottom: 0;

      .name {
        font-size: 22px;
        padding-bottom: .3rem;
      }

      .description {
        font-size: 17px;
        opacity: var(--v-medium-emphasis-opacity);
      }
    }

    .v-card-actions {
      padding-top: 0;
      padding-bottom: 0;

      span {
        font-size: small;
        opacity: var(--v-medium-emphasis-opacity);
      }
    }
  }
}
</style>
