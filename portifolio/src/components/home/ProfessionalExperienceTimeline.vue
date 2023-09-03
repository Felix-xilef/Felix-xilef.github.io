<script setup lang="ts">
import { useMessageStore } from '@/stores/message.store';
import { type EnterpriseStyle } from '@/utils/interfaces/enterprise-style.interface';
import { computed } from 'vue';
import { useDisplay } from 'vuetify';
import ProfessionalExperienceDate from './ProfessionalExperienceDate.vue';

const props = defineProps<{
  enterprisesStyle: EnterpriseStyle[];
}>();

const messages = computed(
  () => useMessageStore().messages.home.professionalExperience.items,
);

function getCurrentSlot(isDateSection: boolean, index: number) {
  if (useDisplay().mdAndDown.value) {
    index = Number(!isDateSection);

  } else if (isDateSection) {
    index++;
  }

  return index % 2 === 0 ?
    'opposite' :
  'default';
}
</script>

<template>
  <v-timeline side="end">
    <template
      v-for="experience, i of messages"
      :key="`experience-${i}`"
    >
      <v-timeline-item>
        <template v-slot:icon>
          <v-avatar
            size="42"
            :image="enterprisesStyle[i].logo"
          ></v-avatar>
        </template>

        <template v-slot:[getCurrentSlot(true,i)]>
          <ProfessionalExperienceDate
            :start-date="experience.startDate"
            :end-date="experience.endDate"
          />
        </template>

        <template v-slot:[getCurrentSlot(false,i)]>
          <v-card>
            <v-card-title :style="{ backgroundColor: enterprisesStyle[i].color }">
              {{ experience.title }}

              <v-badge
                v-if="experience.current"
                color="success"
                :content="experience.current"
                inline
              ></v-badge>
            </v-card-title>

            <v-card-subtitle>
              <v-icon icon="$mdi-office-building-marker"></v-icon>

              <span>
                {{ experience.enterprise }}
              </span>
            </v-card-subtitle>

            <v-card-text>
              {{ experience.description }}
            </v-card-text>
          </v-card>
        </template>
      </v-timeline-item>

      <template v-if="experience.changesOfPosition">
        <v-timeline-item
          v-for="change of experience.changesOfPosition"
          :key="`change-${i}`"
          :dot-color="enterprisesStyle[i].color"
        >
          <template v-slot:[getCurrentSlot(true,i)]>
            <ProfessionalExperienceDate
              :start-date="change.startDate"
              :end-date="change.endDate"
            />
          </template>

          <template v-slot:[getCurrentSlot(false,i)]>
            <v-card
              color="transparent"
              elevation="0"
            >
              <v-card-title :style="{ color: enterprisesStyle[i].color }">
                {{ change.positionName }}

                <v-badge
                  v-if="change.current"
                  color="success"
                  :content="change.current"
                  inline
                ></v-badge>
              </v-card-title>

              <v-card-text>
                {{ change.description }}
              </v-card-text>
            </v-card>
          </template>
        </v-timeline-item>
      </template>
    </template>
  </v-timeline>
</template>

<style scoped lang="scss">
.v-card-subtitle {
  display: flex;
  align-items: flex-end;
  gap: .2rem;

  padding-top: .5rem;
}
</style>
