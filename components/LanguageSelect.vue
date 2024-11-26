<script setup lang="ts">
const {
  t,
  locale,
  locales,
  setLocale,
} = useI18n({
  useScope: 'local',
});

function getFlagIcon(item: any) {
  return `custom:flag-${item.raw.language}`;
}
</script>

<template>
  <v-select
    variant="outlined"
    density="compact"
    :label="t('language')"
    :model-value="locale"
    v-on:update:model-value="setLocale"
    :items="locales"
    item-title="name"
    item-value="code"
    hide-details
  >
    <template v-slot:selection="{ item }">
      <v-icon
        :icon="getFlagIcon(item)"
      ></v-icon>
    </template>

    <template v-slot:item="{ props, item }">
      <v-list-item
        v-bind="props"
        :prepend-icon="getFlagIcon(item)"
      ></v-list-item>
    </template>
  </v-select>
</template>

<style scoped lang="scss">
</style>

<i18n lang="yaml">
en:
  language: 'Language'

pt-BR:
  language: 'Idioma'

</i18n>
