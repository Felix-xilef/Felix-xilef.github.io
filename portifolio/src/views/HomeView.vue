<script setup lang="ts">
import Education from '@/components/home/Education.vue';
import Presentation from '@/components/home/Presentation.vue';
import ProfessionalExperience from '@/components/home/ProfessionalExperience.vue';
</script>

<template>
  <section id="presentation">
    <Presentation />
  </section>

  <section id="education">
    <Education />
  </section>

  <section id="professional-experience">
    <ProfessionalExperience />
  </section>
</template>

<style scoped lang="scss">
section {
  padding-top: 30vh;

  &:first-of-type {
    padding-top: 21vh;
  }

  @media (max-width: 960px) {
    padding-top: 20vh;

    &:first-of-type {
      padding-top: 10vh;
    }
  }
}
</style>
