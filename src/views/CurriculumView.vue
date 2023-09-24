<script setup lang="ts">
import CurriculumSheet from '@/components/curriculum/CurriculumSheet.vue';
import { useCurriculumUrl } from '@/composables/url/curriculum-url.composable';
import { useMessageStore } from '@/stores/message.store';
import { computed } from 'vue';

const messages = computed(
  () => useMessageStore().messages.curriculum,
);

function printCurriculumSheet() {
  window.print();
}
</script>

<template>
  <div class="curriculum-view-wrapper">
    <CurriculumSheet class="curriculum-sheet"/>

    <div class="curriculum-actions">
      <v-btn
        icon="$mdi-download"
        size="x-large"
        color="info"
        variant="elevated"
        :href="useCurriculumUrl()"
        target="_blank"
        :aria-label="messages.downloadButtonLabel"
        download
      ></v-btn>

      <v-btn
        icon="$mdi-printer"
        size="x-large"
        color="info"
        variant="elevated"
        @click="printCurriculumSheet()"
        class="print-curriculum-btn"
        :aria-label="messages.printButtonLabel"
      ></v-btn>
    </div>
  </div>
</template>

<style scoped lang="scss">
@supports selector(:has(.curriculum-sheet)) {
  @page {
    size: A4;
    margin: 0;
  }

  @media print {
    :global(:not(.curriculum-sheet):not(.curriculum-sheet *)) {
      display: none;
    }

    :global(:has(.curriculum-sheet)) {
      display: contents !important;
    }

    .curriculum-sheet {
      page-break-after: always;
    }
  }
}

@supports not selector(:has(.curriculum-sheet)) {
  .print-curriculum-btn {
    display: none;
  }
}

.curriculum-view-wrapper {
  text-align: center;

  .curriculum-sheet {
    margin-left: auto;
    margin-right: auto;
  }

  .curriculum-actions {
    position: sticky;
    bottom: 5vh;

    margin-left: auto;
    margin-right: 4vw;

    width: fit-content;
    display: flex;
    gap: 1rem;
  }
}
</style>
