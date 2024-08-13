<script setup lang="ts">
import ChessGame from '@/assets/images/projects/chess-game.png';
import IconComponent from '@/assets/images/projects/icon-component.png';
import { BrandStyle } from '@/utils/enums/brand-color.enum';
import ProjectCard from './ProjectCard.vue';
import { computed } from 'vue';
import { useMessageStore } from '@/stores/message.store';

const CHESS_GAME_LINK = import.meta.env.VITE_PROJECT_LINK_CHESS_GAME;
const ICON_COMPONENT_LINK = import.meta.env.VITE_PROJECT_LINK_ICON_COMPONENT;

const messages = computed(
  () => useMessageStore().messages.home.projects,
);
</script>

<template>
  <v-container>
    <h1>
      {{ messages.title }}
    </h1>

    <v-row justify="center">
      <v-col cols="auto">
        <ProjectCard
          :image="ChessGame"
          :title="messages.items.chessGame.title"
          :description="messages.items.chessGame.description"
          :link="CHESS_GAME_LINK"
          :tecnology="BrandStyle.UNITY"
        />
      </v-col>

      <v-col cols="auto">
        <ProjectCard
          :image="IconComponent"
          :title="messages.items.iconComponent.title"
          :description="messages.items.iconComponent.description"
          :link="ICON_COMPONENT_LINK"
          :tecnology="BrandStyle.UNITY"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins.scss';

h1 {
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5rem;

  font-size: 40px;

  @include mixins.linear-text-gradient;
}
</style>
