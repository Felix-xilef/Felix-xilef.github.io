<script setup lang="ts">
import AppBar from '~/components/app/AppBar.vue';
import AppBottomNavigation from '~/components/app/AppBottomNavigation.vue';
import AppFooter from '~/components/app/AppFooter.vue';
import CVMainContent from '~/components/cv/CVMainContent.vue';
import { useScrollbarStyleOnScroll } from '~/composables/style/scrollbar-style-on-scroll.composable';
import { useCurriculumUrl } from '~/composables/url/curriculum-url.composable';

const { t } = useI18n({
  useScope: 'local',
});

const { xs: isDisplayXs } = useDisplay();

onMounted(() => {
  useScrollbarStyleOnScroll();
});
</script>

<template>
  <AppBar>
    <v-col cols="auto">
      <v-btn
        variant="text"
        prepend-icon="mdi-file-document"
        :text="t('curriculumBtnLabel')"
        :href="useCurriculumUrl()"
        target="_blank"
        download
      ></v-btn>
    </v-col>
  </AppBar>

  <v-main>
    <CVMainContent />
  </v-main>

  <AppBottomNavigation v-if="isDisplayXs">
    <v-btn
      :active="false"
      prepend-icon="mdi-file-document"
      :text="t('curriculumBtnLabel')"
      :href="useCurriculumUrl()"
      target="_blank"
      download
      class="bottom-curriculum-btn"
    ></v-btn>
  </AppBottomNavigation>

  <AppFooter class="app-footer"/>
</template>

<style scoped lang="scss">
.v-main {
  margin-top: calc(68px + 1rem);
}

.bottom-curriculum-btn {
  padding-top: .25rem;
}

@media (min-width: 600px) {
  .app-footer {
    margin-top: 1rem;
  }
}
</style>

<i18n lang="yaml">
en:
  curriculumBtnLabel: 'Resume'

pt-BR:
  curriculumBtnLabel: 'Currículo'

</i18n>
