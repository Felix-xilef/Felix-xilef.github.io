<script setup lang="ts">
import { useGithubUrl } from '~/composables/url/github-url.composable';
import { useLinkedinUrl } from '~/composables/url/linkedin-url.composable';
import { BrandStyle } from '~/utils/enums/brand-color.enum';

const { t } = useI18n({
  useScope: 'local',
});
</script>

<template>
  <v-container>
    <v-row
      align="center"
      justify="center"
      justify-md="space-around"
    >
      <v-col
        cols="12"
        md="6"
        lg="8"
        order="2"
        order-md="1"
      >
        <h1>
          {{ t('title') }}
        </h1>

        <p>
          {{ t('description') }}
        </p>

        <div class="social-links">
          <v-btn
            :icon="BrandStyle.GITHUB.icon"
            :aria-label="BrandStyle.GITHUB.name"
            variant="text"
            density="compact"
            size="x-large"
            :href="useGithubUrl()"
            target="_blank"
          ></v-btn>

          <v-btn
            :icon="BrandStyle.LINKEDIN.icon"
            :aria-label="BrandStyle.LINKEDIN.name"
            variant="text"
            density="compact"
            size="x-large"
            :href="useLinkedinUrl()"
            target="_blank"
          ></v-btn>
        </div>
      </v-col>

      <v-col
        cols="auto"
        order="1"
        order-md="2"
      >
        <v-img
          width="auto"
          src="~/assets/images/profile-picture.jpg"
          :alt="t('profilePictureAlt')"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
@use '~/assets/styles/mixins.scss';

.v-row {
  padding: 1rem;

  h1 {
    max-width: fit-content;
    font-size: 45px;

    @include mixins.linear-text-gradient;
  }

  .social-links {
    padding-top: .5rem;

    display: flex;
    gap: .75rem;

    .v-btn {
      width: 3.5rem;
      height: 3.5rem;

      font-size: 1.75rem;
    }
  }

  .v-img {
    $circumference-width: .25rem;

    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));

    border-radius: 50%;

    :deep(img) {
      border-radius: 50%;

      top: $circumference-width;
      left: $circumference-width;

      width: calc(100% - #{$circumference-width * 2});
      height: calc(100% - #{$circumference-width * 2});

      padding: .5rem;
      background: rgb(var(--v-theme-background));
    }
  }
}
</style>

<i18n lang="yaml">
en:
  title: 'Hello, I am Felix!'
  description: 'I graduated in System Analysis and Development at Fatec São Caetano do Sul and have some experience with FullStack development, using primarily TypeScript and JavaScript as programming languages, Vue and Angular for Frontend development and NodeJS with NestJS and MySQL for Backend.'
  profilePictureAlt: 'Profile Photo'

pt-BR:
  title: 'Olá, eu sou Felix!'
  description: 'Sou graduado em Análise e Desenvolvimento de Sistemas pela Fatec São Caetano do Sul e tenho experiência com desenvolvimento FullStack, usando principalmente TypeScript e JavaScript como linguagens de programação, Vue e Angular no desenvolvimento Frontend e NodeJS, NestJS e MySQL no Backend.'
  profilePictureAlt: 'Foto de perfil'

</i18n>

