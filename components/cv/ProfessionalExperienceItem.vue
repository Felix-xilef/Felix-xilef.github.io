<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    color: string;
    lastPosition: string;
    otherPositions?: string[];
    enterprise: string;
    startDate: Date;
    endDate: string | Date;
    description?: string;
  }>(),
  {
    otherPositions: () => [],
  },
);

const { locale } = useI18n();

const { smAndDown: isDisplaySmAndDown } = useDisplay();

function getFormattedDate(date: Date) {
  return date.toLocaleDateString(
    locale.value,
    {
      month: 'short',
      year: 'numeric',
    },
  );
}
</script>

<template>
  <v-expansion-panel
    v-if="isDisplaySmAndDown"
    class="experience-expansion-panel"
  >
    <v-expansion-panel-title
      :color="color"
      class="position-title-wrapper"
      #default="{ expanded }"
    >
      <v-col class="position-title">
        <h2>
          {{ lastPosition }}
        </h2>

        <v-expand-transition>
          <div v-if="expanded">
            <h3 v-for="position in otherPositions">
              {{ position }}
            </h3>
          </div>
        </v-expand-transition>

        <div class="enterprise-subtitle">
          <v-icon icon="mdi-office-building-marker"></v-icon>

          <span>
            {{ enterprise }}
          </span>
        </div>
      </v-col>
    </v-expansion-panel-title>

    <v-expansion-panel-text>
      <slot>
        {{ description }}
      </slot>
    </v-expansion-panel-text>
  </v-expansion-panel>
  <v-timeline-item v-else :dot-color="color">
    <template #opposite>
      {{ getFormattedDate(startDate) }} - {{ endDate instanceof Date ? getFormattedDate(endDate) : endDate }}
    </template>

    <v-card class="experience-card">
      <v-card-title
        tag="h2"
        class="position-title"
      >
        <div>
          {{ lastPosition }}
        </div>

        <div v-for="position in otherPositions">
          {{ position }}
        </div>
      </v-card-title>

      <v-card-subtitle class="enterprise-subtitle">
        <v-icon icon="mdi-office-building-marker"></v-icon>

        <span>
          {{ enterprise }}
        </span>
      </v-card-subtitle>

      <v-card-text>
        <slot>
          {{ description }}
        </slot>
      </v-card-text>
    </v-card>
  </v-timeline-item>
</template>

<style scoped lang="scss">
.experience-expansion-panel .position-title-wrapper {
  padding: 14px;

  .position-title {
    padding: 0;

    h2 {
      color: white;
      font-size: 15px;
    }

    h3 {
      color: rgb(240, 240, 240);
      font-size: 13px;

      padding-top: 5px;
    }

    .enterprise-subtitle {
      color: rgb(230, 230, 230);
      font-size: 13px;

      padding-top: 10px;
    }
  }
}

.experience-card {
  .position-title {
    background-color: v-bind(color);
  }

  .enterprise-subtitle {
    display: flex;
    align-items: flex-end;
    gap: 5px;

    padding-top: 10px;
  }
}
</style>
