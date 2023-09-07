<script setup lang="ts">
import SabespLogo from '@/assets/images/enterprises-logos/sabesp.png';
import SmartStaffLogo from '@/assets/images/enterprises-logos/smart-staff.png';
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
  <div class="professional-experience-wrapper">
    <h1>
      {{ messages.title }}
    </h1>

    <v-divider :thickness="3"></v-divider>

    <ProfessionalExperienceTimelineSmall
      v-if="useDisplay().smAndDown.value"
      :enterprises-style="enterprisesStyle"
    />
    <ProfessionalExperienceTimeline
      v-else
      :enterprises-style="enterprisesStyle"
    />

    <v-divider :thickness="3"></v-divider>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins.scss';

.professional-experience-wrapper {
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  h1 {
    max-width: fit-content;
    margin-right: auto;
    padding-bottom: .5rem;

    font-size: 36px;

    @include mixins.linear-text-gradient;
  }

  .v-divider {
    color: rgb(var(--v-border-color));
  }
}
</style>
