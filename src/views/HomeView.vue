<script setup lang="ts">
import Education from '@/components/home/Education.vue';
import Knowledge from '@/components/home/Knowledge.vue';
import Presentation from '@/components/home/Presentation.vue';
import ProfessionalExperience from '@/components/home/ProfessionalExperience.vue';
import Projects from '@/components/home/Projects.vue';
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

    <section id="projects">
      <Projects />
    </section>

    <section id="knowledge">
      <Knowledge />
    </section>
  </div>
</template>

<style scoped lang="scss">
.home-view-wrapper {
  --component-padding: 18vh;
  --component-gaps: 30vh;

  @media (max-width: 960px) {
    --component-padding: 7vh;
    --component-gaps: 20vh;
  }

  display: flex;
  flex-direction: column;

  padding-top: var(--component-padding);
  padding-bottom: var(--component-padding);
  gap: var(--component-gaps);
}
</style>
