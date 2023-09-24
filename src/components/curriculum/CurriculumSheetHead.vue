<script setup lang="ts">
import { useEmailUrl } from '@/composables/url/email-url.composable';
import { useGithubUrl } from '@/composables/url/github-url.composable';
import { useLinkedinUrl } from '@/composables/url/linkedin-url.composable';
import { useWhatsappUrl } from '@/composables/url/whatsapp-url.composable';
import { useMessageStore } from '@/stores/message.store';
import { BrandStyle } from '@/utils/enums/brand-color.enum';
import { computed } from 'vue';
import CurriculumSheetContactButton from './CurriculumSheetContactButton.vue';

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;
const LINKEDIN_USERNAME = import.meta.env.VITE_LINKEDIN_USERNAME;
const EMAIL = import.meta.env.VITE_EMAIL;
const PHONE = import.meta.env.VITE_PHONE;

const messages = computed(
  () => useMessageStore().messages.curriculum.sheet.head,
);

function getWrappedString(value: string, wrapPoint: string) {
  let wrapIndex = value.indexOf(
    wrapPoint,
  );

  return `${value.slice(0, wrapIndex)}<br>${value.slice(wrapIndex)}`;
}
</script>

<template>
  <v-row align="center">
    <v-col
      cols="8"
      class="heading"
    >
      <h1>
        Felix Petiz Bonilho
      </h1>

      <span>
        {{ messages.headingSubtitle }}
      </span>
    </v-col>

    <v-col cols="4">
      <v-row class="contact-infos">
        <v-col cols="6">
          <CurriculumSheetContactButton
            :href="useGithubUrl()"
            :icon="BrandStyle.GITHUB.icon"
            :icon-color="BrandStyle.GITHUB.color"
          >
            <div>
              {{ GITHUB_USERNAME }}
            </div>
          </CurriculumSheetContactButton>
        </v-col>

        <v-col cols="6">
          <CurriculumSheetContactButton
            :href="useWhatsappUrl()"
            :icon="BrandStyle.WHATSAPP.icon"
            :icon-color="BrandStyle.WHATSAPP.color"
          >
            <div
              v-html="getWrappedString(PHONE, '9')"
            ></div>
          </CurriculumSheetContactButton>
        </v-col>

        <v-col cols="6">
          <CurriculumSheetContactButton
            :href="useLinkedinUrl()"
            :icon="BrandStyle.LINKEDIN.icon"
            :icon-color="BrandStyle.LINKEDIN.color"
          >
            <div>
              {{ LINKEDIN_USERNAME }}
            </div>
          </CurriculumSheetContactButton>
        </v-col>

        <v-col cols="6">
          <CurriculumSheetContactButton
            :href="useEmailUrl()"
            icon="$mdi-email"
            icon-color="secondary"
          >
            <div
              v-html="getWrappedString(EMAIL, '@')"
            ></div>
          </CurriculumSheetContactButton>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
.v-row {
  .heading {
    text-align: start;

    h1 {
      font-size: 36pt;
      line-height: 1.2em;
    }
  }

  .contact-infos .v-col {
    padding: .4rem;
  }
}
</style>
