<script setup lang="ts">
import CurriculumSheetBody from './CurriculumSheetBody.vue';
import CurriculumSheetHead from './CurriculumSheetHead.vue';
</script>

<template>
  <v-sheet
    height="297mm"
    width="210mm"
    color="background"
    theme="sheet"
  >
    <v-container>
      <CurriculumSheetHead class="curriculum-sheet-head"/>

      <CurriculumSheetBody />
    </v-container>
  </v-sheet>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins.scss';

.v-sheet {
  padding: 15px 25px;

  .curriculum-sheet-head {
    padding-bottom: 2rem;
  }

  & :deep() {
    font-size: 10pt;

    * {
      @include mixins.font-family-lato;
    }
  }
}
</style>
