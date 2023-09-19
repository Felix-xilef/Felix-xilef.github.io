<script setup lang="ts">
import { useEmailUrl } from '@/composables/url/email-url.composable';
import { useGithubUrl } from '@/composables/url/github-url.composable';
import { useLinkedinUrl } from '@/composables/url/linkedin-url.composable';
import { useWhatsappUrl } from '@/composables/url/whatsapp-url.composable';
import { useMessageStore } from '@/stores/message.store';
import { BrandStyle } from '@/utils/enums/brand-color.enum';
import { computed } from 'vue';
import AppFooterContactInfo from './AppFooterContactInfo.vue';

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;
const LINKEDIN_USERNAME = import.meta.env.VITE_LINKEDIN_USERNAME;
const EMAIL = import.meta.env.VITE_EMAIL;
const PHONE = import.meta.env.VITE_PHONE;

const messages = computed(
  () => useMessageStore().messages.footer,
);
</script>

<template>
  <v-footer>
    <v-row
      justify="space-evenly"
      no-gutters
    >
      <v-col cols="auto">
        <AppFooterContactInfo
          :icon="BrandStyle.GITHUB.icon"
          :icon-color="BrandStyle.GITHUB.color"
          :label="messages.linkLabel"
          :text="GITHUB_USERNAME"
          :href="useGithubUrl()"
          :content-to-copy="GITHUB_USERNAME"
        />
      </v-col>

      <v-col cols="auto">
        <AppFooterContactInfo
          :icon="BrandStyle.LINKEDIN.icon"
          :icon-color="BrandStyle.LINKEDIN.color"
          :label="messages.linkLabel"
          :text="LINKEDIN_USERNAME"
          :href="useLinkedinUrl()"
          :content-to-copy="LINKEDIN_USERNAME"
        />
      </v-col>

      <v-col cols="auto">
        <AppFooterContactInfo
          icon="$mdi-email"
          icon-color="secondary"
          :label="messages.emailLabel"
          :text="EMAIL"
          :href="useEmailUrl()"
          :content-to-copy="EMAIL"
        />
      </v-col>

      <v-col cols="auto">
        <AppFooterContactInfo
          :icon="BrandStyle.WHATSAPP.icon"
          :icon-color="BrandStyle.WHATSAPP.color"
          :label="messages.phoneLabel"
          :text="PHONE"
          :href="useWhatsappUrl()"
          :content-to-copy="PHONE"
        />
      </v-col>
    </v-row>

    <h2>
      Felix Petiz Bonilho
    </h2>
  </v-footer>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins.scss';

.v-footer {
  flex-direction: column;
  justify-content: center;

  padding: 0;

  .v-row {
    width: 100%;

    padding: .75rem .25rem;

    background-image: url('@/assets/images/parallax-background.jpg');
    background-repeat: no-repeat;
    background-size: 200%;
    background-position-x: center;
    background-position-y: bottom;

    gap: .25rem;
  }

  h2 {
    max-width: fit-content;

    padding: .2rem;

    @include mixins.linear-text-gradient;
  }
}
</style>
