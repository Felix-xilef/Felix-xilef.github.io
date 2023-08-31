<script setup lang="ts">
import SabespLogo from '@/assets/images/sabesp_logo.png';
import SmartStaffLogo from '@/assets/images/smart-staff_logo.png';
import { useMessageStore } from '@/stores/message.store';
import type { EnterpriseStyle } from '@/utils/interfaces/enterprise-style.interface';
import { computed } from 'vue';
import { useDisplay } from 'vuetify';
import ProfessionalExperienceTimeline from './ProfessionalExperienceTimeline.vue';
import ProfessionalExperienceTimelineSmall from './ProfessionalExperienceTimelineSmall.vue';

const enterprisesStyle: EnterpriseStyle[] = [
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
</script>

<template>
  <div class="component-wrapper">
    <h1>
      {{ messages.title }}
    </h1>

    <hr>

    <ProfessionalExperienceTimelineSmall
      v-if="useDisplay().smAndDown.value"
      :enterprises-style="enterprisesStyle"
    />
    <ProfessionalExperienceTimeline
      v-else
      :enterprises-style="enterprisesStyle"
    />

    <hr>
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
}
</style>
