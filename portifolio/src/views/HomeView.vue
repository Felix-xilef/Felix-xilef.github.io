<script setup lang="ts">
import Education from '@/components/home/Education.vue';
import Presentation from '@/components/home/Presentation.vue';
</script>

<template>
  <section id="presentation">
    <Presentation />
  </section>

  <section id="education">
    <Education />
  </section>
</template>

<style scoped lang="scss">
section {
  padding-top: 21vh;

  @media (max-width: 960px) {
    padding-top: 10vh;
  }
}
</style>
