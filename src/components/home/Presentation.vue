<script setup lang="ts">
import { useGithubUrl } from '@/composables/url/github-url.composable';
import { useLinkedinUrl } from '@/composables/url/linkedin-url.composable';
import { useMessageStore } from '@/stores/message.store';
import { BrandStyle } from '@/utils/enums/brand-color.enum';
import { computed } from 'vue';

const messages = computed(
  () => useMessageStore().messages.home.presentation,
);
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
          {{ messages.title }}
        </h1>

        <p>
          {{ messages.description }}
        </p>

        <div class="social-links">
          <v-btn
            :icon="BrandStyle.GITHUB.icon"
            variant="text"
            density="compact"
            size="x-large"
            :href="useGithubUrl()"
            target="_blank"
          ></v-btn>

          <v-btn
            :icon="BrandStyle.LINKEDIN.icon"
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
          src="@/assets/images/profile-picture.jpg"
          :alt="messages.profilePictureAlt"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins.scss';

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
