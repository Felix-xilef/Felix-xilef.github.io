<script setup lang="ts">
import { useMessageStore } from '@/stores/message.store';
import { computed } from 'vue';
import EducationCard from './EducationCard.vue';

const messages = computed(
  () => useMessageStore().messages.home.education,
);
</script>

<template>
  <v-parallax
    src="@/assets/images/parallax-background.jpg"
    height="fit-content"
  >
    <v-container>
      <v-row>
        <v-col cols="12">
          <EducationCard
            icon="$mdi-school"
            :title="messages.college.title"
            :items="[
              {
                name: messages.college.course,
                description: messages.college.institution,
                conclusionText: messages.college.graduation,
              },
            ]"
          />
        </v-col>

        <v-col cols="12">
          <EducationCard
            icon="$mdi-school"
            :title="messages.postDegree.title"
            :items="[
              {
                name: messages.postDegree.course,
                description: messages.postDegree.institution,
                conclusionText: messages.postDegree.graduation,
              },
            ]"
          />
        </v-col>

        <v-col>
          <EducationCard
            icon="$mdi-certificate"
            :title="messages.coursesAndCertifications.title"
            :items="Object.values(messages.coursesAndCertifications.items).map(
              item => ({
                name: item.name,
                description: item.institution,
                conclusionText: item.conclusion,
              }),
            )"
          />
        </v-col>

        <v-col>
          <EducationCard
            icon="$mdi-translate-variant"
            :title="messages.languages.title"
            :items="Object.values(messages.languages.items).map(
              item => ({
                name: item.name,
                description: item.level,
              }),
            )"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<style scoped lang="scss">
.v-parallax {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;

  :deep(.v-responsive__sizer) {
    padding: 0 !important;
  }
}
</style>
