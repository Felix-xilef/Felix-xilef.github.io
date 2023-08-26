<script setup lang="ts">
import SabespLogo from '@/assets/images/sabesp_logo.png';
import SmartStaffLogo from '@/assets/images/smart-staff_logo.png';
import { useMessageStore } from '@/stores/message.store';
import { computed } from 'vue';

const enterprisesStyle = [
  {
    logo: SabespLogo,
    color: '#00A5E4',
  },
  {
    logo: SmartStaffLogo,
    color: '#99225c',
  },
];

const messages = computed(
  () => useMessageStore().messages.home.professionalExperience,
);

function getCurrentSlot(index: number) {
  return index % 2 === 0 ? 'opposite' : 'default';
}
</script>

<template>
  <div class="component-wrapper">
    <h1>
      {{ messages.title }}
    </h1>

    <hr>

    <v-timeline side="end">
      <template
        v-for="experience, i of messages.items"
        :key="`experience-${i}`"
      >
        <v-timeline-item>
          <template v-slot:icon>
            <v-avatar size="42" :image="enterprisesStyle[i].logo"></v-avatar>
          </template>

          <template v-slot:[getCurrentSlot(i)]>
            <span>
              {{ experience.startDate }}
            </span>

            <template v-if="experience.endDate">
              <span>
                -
              </span>

              <span>
                {{ experience.endDate }}
              </span>
            </template>
          </template>

          <template v-slot:[getCurrentSlot(i+1)]>
            <v-card>
              <v-card-title :style="{ backgroundColor: enterprisesStyle[i].color }">
                {{ experience.title }}
              </v-card-title>

              <v-card-subtitle>
                <v-icon icon="mdi-office-building-marker"></v-icon>

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
            <template v-slot:[getCurrentSlot(i)]>
              <span>
                {{ change.startDate }}
              </span>

              <template v-if="change.endDate">
                <span>
                  -
                </span>

                <span>
                  {{ change.endDate }}
                </span>
              </template>
            </template>

            <template v-slot:[getCurrentSlot(i+1)]>
              <v-card
                color="transparent"
                elevation="0"
              >
                <v-card-title :style="{ color: enterprisesStyle[i].color }">
                  {{ change.positionName }}
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
  </div>
</template>

<style scoped lang="scss">
.component-wrapper {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  text-align: center;

  h1 {
    font-size: 32px;
  }

  hr {
    height: 2px;
    width: 100%;

    border: none;

    background: rgba(var(--v-border-color), var(--v-border-opacity));
  }

  .v-card-subtitle {
    display: flex;
    align-items: flex-end;
    gap: .2rem;

    padding-top: .5rem;
  }
}
</style>
