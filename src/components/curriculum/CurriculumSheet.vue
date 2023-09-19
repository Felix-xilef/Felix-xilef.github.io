<script setup lang="ts">
import { useEmailUrl } from '@/composables/url/email-url.composable';
import { useGithubUrl } from '@/composables/url/github-url.composable';
import { useLinkedinUrl } from '@/composables/url/linkedin-url.composable';
import { useWhatsappUrl } from '@/composables/url/whatsapp-url.composable';
import { useMessageStore } from '@/stores/message.store';
import { BrandStyle } from '@/utils/enums/brand-color.enum';
import { computed } from 'vue';

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;
const LINKEDIN_USERNAME = import.meta.env.VITE_LINKEDIN_USERNAME;
const EMAIL = import.meta.env.VITE_EMAIL;
const PHONE = import.meta.env.VITE_PHONE;

const messages = computed(
  () => useMessageStore().messages.curriculum,
);
</script>

<template>
  <v-sheet
    height="297mm"
    width="210mm"
    color="#fff"
    theme="sheet"
  >
    <v-row>
      <v-col cols="8">
        <h1>
          Felix Petiz Bonilho
        </h1>

        <small>
          {{ messages.superiorCourse }} - Fatec São Caetano do Sul
        </small>
      </v-col>

      <v-col cols="4">
        <v-row>
          <v-col cols="6">
            <v-btn
              variant="text"
              density="compact"
              :href="useGithubUrl()"
              target="_blank"
              stacked
            >
              <template v-slot:prepend>
                <v-icon
                  :icon="BrandStyle.GITHUB.icon"
                  :color="BrandStyle.GITHUB.color"
                  size="x-large"
                ></v-icon>
              </template>

              {{ GITHUB_USERNAME }}
            </v-btn>
          </v-col>

          <v-col cols="6">
            <v-btn
              variant="text"
              density="compact"
              :href="useWhatsappUrl()"
              target="_blank"
              stacked
            >
              <template v-slot:prepend>
                <v-icon
                  :icon="BrandStyle.WHATSAPP.icon"
                  :color="BrandStyle.WHATSAPP.color"
                  size="x-large"
                ></v-icon>
              </template>

              {{ PHONE }}
            </v-btn>
          </v-col>

          <v-col cols="6">
            <v-btn
              variant="text"
              density="compact"
              :href="useLinkedinUrl()"
              target="_blank"
              stacked
            >
              <template v-slot:prepend>
                <v-icon
                  :icon="BrandStyle.LINKEDIN.icon"
                  :color="BrandStyle.LINKEDIN.color"
                  size="x-large"
                ></v-icon>
              </template>

              {{ LINKEDIN_USERNAME }}
            </v-btn>
          </v-col>

          <v-col cols="6">
            <v-btn
              variant="text"
              density="compact"
              :href="useEmailUrl()"
              target="_blank"
              stacked
            >
              <template v-slot:prepend>
                <v-icon
                  icon="$mdi-email"
                  color="secondary"
                  size="x-large"
                ></v-icon>
              </template>

              {{ EMAIL }}
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<style scoped lang="scss">
</style>
