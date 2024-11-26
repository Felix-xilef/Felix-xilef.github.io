<script setup lang="ts">
import ChessGameImage from '~/assets/images/projects/chess-game.png';
import SaverBooksImage from '~/assets/images/projects/saver-books.png';
import SimpleCallImage from '~/assets/images/projects/simple-call.png';
import { BrandStyle } from '~/utils/enums/brand-color.enum';
import ProjectCard from './ProjectCard.vue';

const SIMPLE_CALL_LINK = import.meta.env.VITE_PROJECT_LINK_SIMPLE_CALL;
const SAVER_BOOKS_LINK = import.meta.env.VITE_PROJECT_LINK_SAVER_BOOKS;
const CHESS_GAME_LINK = import.meta.env.VITE_PROJECT_LINK_CHESS_GAME;

const { t } = useI18n({
  useScope: 'local',
});
</script>

<template>
  <v-container>
    <h1>
      {{ t('title') }}
    </h1>

    <v-row
      justify="center"
      align="stretch"
    >
      <v-col cols="auto">
        <ProjectCard
          :image="SimpleCallImage"
          :title="t('simpleCallTitle')"
          :description="t('simpleCallDescription')"
          :link="SIMPLE_CALL_LINK"
          :stacks="[BrandStyle.NUXT]"
        />
      </v-col>

      <v-col cols="auto">
        <ProjectCard
          :image="SaverBooksImage"
          :title="t('saverBooksTitle')"
          :description="t('saverBooksDescription')"
          :link="SAVER_BOOKS_LINK"
          :stacks="[
            BrandStyle.VUE,
            BrandStyle.NODEJS,
          ]"
        />
      </v-col>

      <v-col cols="auto">
        <ProjectCard
          :image="ChessGameImage"
          :title="t('chessGameTitle')"
          :description="t('chessGameDescription')"
          :link="CHESS_GAME_LINK"
          :stacks="[BrandStyle.UNITY]"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
@use '~/assets/styles/mixins.scss';

h1 {
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5rem;

  font-size: 40px;

  @include mixins.linear-text-gradient;
}
</style>

<i18n lang="yaml">
en:
  title: 'Projects'

  simpleCallTitle: 'Simple Call'
  simpleCallDescription: 'A peer-to-peer video conference web app that uses WebRTC and was built with Nuxt and Socket.io.'

  saverBooksTitle: 'Saver Books'
  saverBooksDescription: 'Library book management system with an online reservation module. The project was developed with Vue.js and Express as the final work for my undergraduate degree.'

  chessGameTitle: 'Chess Game'
  chessGameDescription: 'A chess game made with Unity, with options to play versus the computer or another local player.'

pt-BR:
  title: 'Projetos'

  simpleCallTitle: 'Simple Call'
  simpleCallDescription: 'Um web app de vídeo conferência peer-to-peer que usa WebRTC e foi desenvolvido com Nuxt e Socket.io.'

  saverBooksTitle: 'Saver Books'
  saverBooksDescription: 'Sistema de gestão de livros de uma biblioteca com módulo de reserva online. Este projeto foi desenvolvido com Vue.js e Express para o TCC do curso de Análise e Desenvolvimento de Sistemas.'

  chessGameTitle: 'Jogo de Xadrez'
  chessGameDescription: 'Um jogo de xadrez feito com Unity, com opção para jogar contra o computador ou com outro jogador local.'

</i18n>
