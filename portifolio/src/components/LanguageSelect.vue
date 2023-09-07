<script setup lang="ts">
import { useMessageStore } from '@/stores/message.store';
import { LanguageTag } from '@/utils/enums/language-tag.enum';

const messagesStore = useMessageStore();

const languages = [
  {
    tag: LanguageTag.PORTUGUESE_BRAZIL,
    icon: 'br',
    label: 'Português',
  },
  {
    tag: LanguageTag.ENGLISH,
    icon: 'us',
    label: 'English',
  },
];
</script>

<template>
  <v-select
    variant="outlined"
    density="compact"
    :label="messagesStore.messages.appBar.language"
    v-model="messagesStore.currentLanguage"
    :items="languages"
    item-title="label"
    item-value="tag"
  >
    <template v-slot:item="{ props, item }">
      <v-list-item
        v-bind="props"
        :prepend-icon="`custom:flag-${item.raw.icon}`"
      ></v-list-item>
    </template>
  </v-select>
</template>

<style scoped lang="scss">
</style>
