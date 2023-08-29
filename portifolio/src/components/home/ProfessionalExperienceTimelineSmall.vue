<script setup lang="ts">
import { useMessageStore } from '@/stores/message.store';
import type { EnterpriseStyle } from '@/utils/interfaces/enterprise-style.interface';
import { computed } from 'vue';
import ProfessionalExperienceDate from './ProfessionalExperienceDate.vue';

const props = defineProps<{
  enterprisesStyle: EnterpriseStyle[];
}>();

const messages = computed(
  () => useMessageStore().messages.home.professionalExperience.items,
);
</script>

<template>
  <v-expansion-panels class="parent">
    <template v-for="experience, i of messages">
      <v-expansion-panel :style="{ borderRadius: 'var(--border-radius) !important' }">
        <v-expansion-panel-title :style="{ backgroundColor: enterprisesStyle[i].color }">
          <v-row
            no-gutters
            align="center"
          >
            <v-col cols="auto">
              <v-avatar :image="enterprisesStyle[i].logo"></v-avatar>
            </v-col>

            <v-col>
              <h2>
                {{ experience.title }}
              </h2>
            </v-col>

            <v-col
              v-if="experience.current"
              cols="auto"
            >
              <v-badge
                color="success"
                :content="experience.current"
                inline
              ></v-badge>
            </v-col>
          </v-row>
        </v-expansion-panel-title>

        <v-expansion-panel-text>
          <h4>
            <v-icon icon="mdi-office-building-marker"></v-icon>

            <span>
              {{ experience.enterprise }}
            </span>
          </h4>

          <h4>
            <v-icon icon="mdi-calendar-range"></v-icon>

            <ProfessionalExperienceDate
              :start-date="experience.startDate"
              :end-date="experience.endDate"
            />
          </h4>

          <p>
            {{ experience.description }}
          </p>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <div v-if="experience.changesOfPosition">
        <v-expansion-panels class="child">
          <v-expansion-panel
            v-for="change of experience.changesOfPosition"
            class="change-of-position"
            :style="{ borderRadius: 'var(--border-radius) !important' }"
          >
            <v-expansion-panel-title :style="{ color: enterprisesStyle[i].color }">
              <v-row
                no-gutters
                align="center"
              >
                <v-col cols="auto">
                  <v-avatar
                    size="x-small"
                    :color="enterprisesStyle[i].color"
                  ></v-avatar>
                </v-col>

                <v-col>
                  <h2>
                    {{ change.positionName }}
                  </h2>
                </v-col>

                <v-col
                  v-if="change.current"
                  cols="auto"
                >
                  <v-badge
                    color="success"
                    :content="change.current"
                    inline
                  ></v-badge>
                </v-col>
              </v-row>
            </v-expansion-panel-title>

            <v-expansion-panel-text>
              <h4>
                <v-icon icon="mdi-calendar-range"></v-icon>
  
                <ProfessionalExperienceDate
                  :start-date="change.startDate"
                  :end-date="change.endDate"
                />
              </h4>

              <p>
                {{ change.description }}
              </p>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </template>
  </v-expansion-panels>
</template>

<style scoped lang="scss">
.v-expansion-panels {
  &.parent > .v-expansion-panel {
    margin-top: 1rem;
  }

  &.child {
    padding-left: .5rem;
    padding-right: .5rem;

    .v-expansion-panel {
      margin-top: .5rem;
    }
  }

  .v-expansion-panel {
    --border-radius: 4px;

    &::after {
      content: none;
    }

    .v-expansion-panel-title .v-row {
      padding-right: 1rem;
      gap: 1rem;
    }

    .v-expansion-panel-text {
      h4 {
        display: flex;
        align-items: flex-end;
        gap: .2rem;
        padding-bottom: .75rem;

        opacity: .5;
      }
    }
  }
}
</style>
