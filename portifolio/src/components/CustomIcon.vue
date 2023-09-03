<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

const props = defineProps<{
  wrapperTag: string,
  iconPath: string,
}>();

const svg = ref<string>();

const iconIsSvg = computed(
  () => props.iconPath.match(
    new RegExp(
      /.*\.svg$/,
      'g',
    ),
  ),
);

function getSvg() {
  return fetch(
    props.iconPath,
  ).then(
    result => result.text().then(
      text => svg.value = text,
    ),
  );
}

onMounted(() => {
  if (iconIsSvg.value) {
    getSvg();
  }
});
</script>

<template>
  <component
    v-if="iconIsSvg"
    :is="wrapperTag"
    v-html="svg"
  ></component>

  <component
    v-else
    :is="wrapperTag"
  >
    <img :src="iconPath">
  </component>
</template>

<style scoped lang="scss">
img {
  height: 1em;
}
</style>
