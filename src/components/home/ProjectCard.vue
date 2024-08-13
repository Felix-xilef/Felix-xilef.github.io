<script setup lang="ts">
import { useMessageStore } from '@/stores/message.store';
import { BrandStyle } from '@/utils/enums/brand-color.enum';
import { computed } from 'vue';

const props = defineProps<{
  image: string;
  title: string;
  description: string;
  link: string;
  tecnology?: ValueOf<typeof BrandStyle>;
}>();

const messages = computed(
  () => useMessageStore().messages.home.projects,
);
</script>

<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card
      max-width="250"
      v-bind="props"
    >
      <picture cover>
        <v-img
          :src="image"
          height="150"
          cover
          :class="{ 'blurred': isHovering }"
        ></v-img>

        <div
          class="project-link-wrapper"
          :class="{ 'active': isHovering }"
        >
          <v-btn
            variant="flat"
            color="primary"
            :text="messages.hiddenExploreButton"
            append-icon="$mdi-open-in-new"
            :href="link"
            target="_blank"
          ></v-btn>
        </div>
      </picture>

      <v-card-title>
        {{ title }}
      </v-card-title>

      <v-card-text>
        {{ description }}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-chip
          v-if="tecnology"
          :prepend-icon="tecnology.icon"
          :color="tecnology.color"
          variant="tonal"
        >
          {{ tecnology.name }}
        </v-chip>

        <v-spacer></v-spacer>

        <v-btn
          variant="text"
          color="secondary"
          :text="messages.smallerExploreButton"
          append-icon="$mdi-open-in-new"
          :href="link"
          target="_blank"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<style scoped lang="scss">
picture {
  position: relative;

  .v-img {
    transition: all .3s ease-in-out;

    &.blurred {
      filter: blur(3px);
      -webkit-filter: blur(3px);
    }
  }

  .project-link-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all .3s ease-in-out;
    scale: 0;

    &.active {
      scale: 1;
    }
  }
}
</style>
