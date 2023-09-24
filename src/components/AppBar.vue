<script setup lang="ts">
import { useCurriculumUrl } from '@/composables/url/curriculum-url.composable';
import router from '@/router';
import { RouteName } from '@/router/route-name.enum';
import { useMessageStore } from '@/stores/message.store';
import { computed } from 'vue';
import { useDisplay } from 'vuetify';
import AppLogo from './AppLogo.vue';
import LanguageSelect from './LanguageSelect.vue';

const messages = computed(
  () => useMessageStore().messages.appBar,
);

const currentRoute = computed(
  () => router.currentRoute.value.name,
);

function goBack() {
  router.back();
}
</script>

<template>
  <v-app-bar
    height="auto"
    elevation="0"
  >
    <hr>

    <v-row
      align="center"
      no-gutters
    >
      <v-col cols="auto">
        <router-link :to="{ name: RouteName.HOME }">
          <AppLogo height="1.75rem"/>
        </router-link>
      </v-col>

      <v-spacer></v-spacer>

      <template v-if="!useDisplay().xs.value">
        <v-col cols="auto">
          <v-scroll-x-transition mode="out-in">
            <v-btn
              v-if="currentRoute !== RouteName.HOME"
              prepend-icon="$mdi-arrow-left"
              :text="messages.backBtnLabel"
              @click="goBack()"
              variant="text"
            ></v-btn>
            <v-btn
              v-else
              prepend-icon="$mdi-file-document"
              :text="messages.curriculumBtnLabel"
              variant="text"
              v-bind="
                useDisplay().mdAndUp.value ?
                  {
                    to: { name: RouteName.CURRICULUM },
                  } :
                {
                  href: useCurriculumUrl(),
                  target: '_blank',
                  download: '',
                }
              "
            ></v-btn>
          </v-scroll-x-transition>
        </v-col>

        <v-col cols="auto">
          <LanguageSelect />
        </v-col>
      </template>
    </v-row>
  </v-app-bar>
</template>

<style scoped lang="scss">
.v-app-bar {
  background-color: rgba(var(--v-theme-surface), .55) !important;
  backdrop-filter: blur(.6rem);

  :deep(.v-toolbar__content) {
    flex-direction: column;
    align-items: stretch;
  }

  hr {
    height: .5rem;
    width: 100%;

    border: none;

    background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  }

  .v-row {
    padding: .5rem;

    gap: .5rem;
  }
}
</style>
