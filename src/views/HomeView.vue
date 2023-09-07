<script setup lang="ts">
import Education from '@/components/home/Education.vue';
import Knowledge from '@/components/home/Knowledge.vue';
import Presentation from '@/components/home/Presentation.vue';
import ProfessionalExperience from '@/components/home/ProfessionalExperience.vue';
</script>

<template>
  <div class="home-view-wrapper">
    <section id="presentation">
      <Presentation />
    </section>

    <section id="education">
      <Education />
    </section>

    <section id="professional-experience">
      <ProfessionalExperience />
    </section>

    <section id="knowledge">
      <Knowledge />
    </section>
  </div>
</template>

<style scoped lang="scss">
.home-view-wrapper {
  display: flex;
  flex-direction: column;

  gap: 30vh;

  @media (max-width: 960px) {
    gap: 20vh;
  }
}
</style>
