<script setup lang="ts">
const props = defineProps<{
  startDate: string;
  endDate?: string;
}>();
</script>

<template>
  <div class="wrapper">
    <span class="date">
      {{ startDate }}
    </span>

    <template v-if="endDate">
      <span>
        -
      </span>

      <span class="date">
        {{ endDate }}
      </span>
    </template>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  text-align: center;

  .date {
    line-break: strict;
  }
}
</style>
