<script setup lang="ts">
import { useMessageStore } from '@/stores/message.store';
import { computed } from 'vue';
import EducationCard from './EducationCard.vue';

const messages = computed(
  () => useMessageStore().messages.home.education,
);
</script>

<template>
  <v-parallax src="@/assets/images/parallax-background.jpg">
    <v-container>
      <v-row>
        <v-col cols="12">
          <EducationCard
            icon="mdi-school"
            :title="messages.college.title"
            :items="[
              {
                name: messages.college.course,
                description: 'Fatec São Caetano do Sul - Antônio Russo',
                conclusionText: messages.college.graduation,
              },
            ]"
          />
        </v-col>

        <v-col>
          <EducationCard
            icon="mdi-certificate"
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
            icon="mdi-translate-variant"
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
.v-col {
  :deep(.v-card-title) {
    color: var(--text-blue);
  }

  &:nth-last-of-type(odd) :deep(.v-card-title) {
    color: var(--text-red);
  }
}
</style>
