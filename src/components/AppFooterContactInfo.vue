<script setup lang="ts">
import CopyToClipboardButton from './utils/CopyToClipboardButton.vue';

const props = defineProps<{
  icon: string;
  iconColor?: string;
  label: string;
  text: string;
  href: string;
  contentToCopy: string;
}>();
</script>

<template>
  <div class="contact-info-wrapper">
    <v-btn
      variant="text"
      :href="href"
      target="_blank"
    >
      <template v-slot:prepend>
        <v-icon
          :icon="icon"
          :color="iconColor"
          size="x-large"
        ></v-icon>
      </template>

      {{ text }}
    </v-btn>

    <CopyToClipboardButton
      :label="label"
      :content-to-copy="contentToCopy"
    />
  </div>
</template>

<style scoped lang="scss">
.contact-info-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: .25rem;

  padding: .5rem;

  max-width: fit-content;
  border-radius: 4px;

  background-color: rgb(var(--v-theme-surface));

  .v-btn {
    text-transform: none;
  }
}
</style>
