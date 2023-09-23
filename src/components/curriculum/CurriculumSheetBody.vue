<script setup lang="ts">
import { useGithubUrl } from '@/composables/url/github-url.composable';
import { useLinkedinUrl } from '@/composables/url/linkedin-url.composable';
import { useMessageStore } from '@/stores/message.store';
import { BrandStyle } from '@/utils/enums/brand-color.enum';
import { computed } from 'vue';

const EMAIL = import.meta.env.VITE_EMAIL;
const PHONE = import.meta.env.VITE_PHONE;
const PORTFOLIO_LINK = import.meta.env.VITE_PORTFOLIO_LINK;

const moreKnowledgebleItems = [
  BrandStyle.VUE,
  BrandStyle.VUETIFY,
  BrandStyle.ANGULAR,
  BrandStyle.BOOTSTRAP,
  BrandStyle.NESTJS,
  BrandStyle.TYPEORM,
  BrandStyle.SQL,
  BrandStyle.DOCKER,
  BrandStyle.PYTHON,
];

const messages = computed(
  () => useMessageStore().messages.curriculum.sheet.body,
);

function getFormattedUrl(url: string) {
  return url.replace(
    new RegExp(
      /^https*:\/\//,
      'g',
    ),
    '',
  ).replace(
    new RegExp(
      /^www\./,
      'g',
    ),
    '',
  );
}
</script>

<template>
  <v-row>
    <v-col cols="8">
      <div>
        <h3>
          {{ messages.presentation.title }}
        </h3>

        {{ messages.presentation.description }}
      </div>

      <div>
        <h3>
          {{ messages.college.title }}
        </h3>

        <h4>
          {{ messages.college.course }}
        </h4>

        <span>
          {{ messages.college.graduation }}
        </span>
      </div>

      <div>
        <h3>
          {{ messages.coursesAndCertifications.title }}
        </h3>

        <div v-for="item of messages.coursesAndCertifications.items">
          <h4>
            {{ item.title }}
          </h4>

          <span>
            {{ item.conclusion }}
          </span>
        </div>
      </div>

      <div>
        <h3>
          {{ messages.experiences.title }}
        </h3>

        <div v-for="item of messages.experiences.items">
          <h4>
            {{ item.title }}
          </h4>

          <span>
            {{ item.description }}
          </span>

          <div class="experience-techs">
            <v-chip
              v-for="brand of item.mainTechnologies"
              color="info"
              :text="brand.name"
              size="x-small"
            ></v-chip>
          </div>
        </div>
      </div>
    </v-col>

    <v-col cols="4">
      <div>
        <h3>
          {{ messages.mainTechnologies.title }}
        </h3>

        <div class="main-technologies">
          <v-chip
            v-for="item of moreKnowledgebleItems"
            :key="item.name"
            size="small"
            variant="outlined"
            color="grey"
          >
            <template #prepend>
              <v-icon
                :icon="item.icon"
                :color="item.color"
              ></v-icon>
            </template>

            <span>
              {{ item.name }}
            </span>
          </v-chip>
        </div>
      </div>

      <div>
        <h3>
          {{ messages.languages.title }}
        </h3>

        <li v-for="item of messages.languages.items">
          {{ item }}
        </li>
      </div>

      <div class="contact-informmation">
        <h3>
          {{ messages.contactInformation.title }}
        </h3>

        <li>
          {{ messages.contactInformation.email }}: {{ EMAIL }}
        </li>

        <li>
          {{ messages.contactInformation.phone }}: {{ PHONE }}
        </li>

        <li>
          Linkedin: {{ getFormattedUrl(useLinkedinUrl()) }}
        </li>

        <li>
          GitHub: {{ getFormattedUrl(useGithubUrl()) }}
        </li>

        <div class="qrcode">
          <div>
            {{ messages.contactInformation.portfolioDescription }}
          </div>

          <figure>
            <v-img
              src="@/assets/images/portfolio-qrcode.png"
              :alt="messages.contactInformation.portfolioQrCodeAlt"
            ></v-img>

            <figcaption>
              <v-btn
                variant="text"
                density="compact"
                :href="PORTFOLIO_LINK"
                target="_blank"
              >
                {{ PORTFOLIO_LINK }}
              </v-btn>
            </figcaption>
          </figure>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
.v-row {
  text-align: justify;

  list-style: none;

  & > .v-col {
    &:last-of-type {
      padding-left: 1.5rem;
    }

    & > div {
      &:not(:last-of-type) {
        padding-bottom: 1rem;
      }

      & > div:not(:last-of-type) {
        padding-bottom: .5rem;
      }

      & > li:not(:last-of-type) {
        padding-bottom: .25rem;
      }
    }
  }

  h3 {
    font-size: 12pt;
    text-transform: uppercase;

    color: rgb(var(--v-theme-info));
  }

  h4 {
    font-size: 12pt;
    font-weight: 500;
  }

  .experience-techs {
    display: flex;
    gap: .25rem;
    flex-wrap: wrap;

    padding-top: .25rem;
  }

  .main-technologies {
    display: flex;
    gap: .3rem;
    flex-wrap: wrap;

    .v-chip span {
      padding-left: .2rem;
      color: rgb(var(--v-theme-on-background));
    }
  }

  .contact-informmation {
    text-align: start;

    .qrcode {
      padding-top: .75rem;

      font-size: 9.5pt;
      text-align: center;

      figure {
        padding-top: .4rem;
        padding-left: 1rem;
        padding-right: 1rem;

        figcaption {
          padding-top: .1rem;

          .v-btn {
            text-transform: none;
            font-size: 8pt;
          }
        }
      }
    }
  }
}
</style>
