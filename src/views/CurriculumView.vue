<script setup lang="ts">
import CurriculumSheet from '@/components/curriculum/CurriculumSheet.vue';
</script>

<template>
  <div class="curriculum-view-wrapper">
    <CurriculumSheet class="curriculum-sheet"/>
  </div>
</template>

<style scoped lang="scss">
.curriculum-view-wrapper {
  text-align: center;

  .curriculum-sheet {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
