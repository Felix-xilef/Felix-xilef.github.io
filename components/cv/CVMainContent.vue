<script setup lang="ts">
import Education from './Education.vue';
import Knowledge from './Knowledge.vue';
import Presentation from './Presentation.vue';
import ProfessionalExperience from './ProfessionalExperience.vue';
import Projects from './Projects.vue';
</script>

<template>
  <div class="sections-wrapper">
    <section id="presentation">
      <Presentation />
    </section>

    <section id="projects">
      <Projects />
    </section>

    <section id="education">
      <Education />
    </section>

    <section id="knowledge">
      <Knowledge />
    </section>

    <section id="professional-experience">
      <ProfessionalExperience />
    </section>
  </div>
</template>

<style scoped lang="scss">
.sections-wrapper {
  --component-padding: 18vh;
  --component-gaps: 30vh;

  display: flex;
  flex-direction: column;

  padding-top: var(--component-padding);
  padding-bottom: var(--component-padding);
  gap: var(--component-gaps);

  @media (max-width: 960px) {
    --component-padding: 7vh;
    --component-gaps: 20vh;
  }
}
</style>
