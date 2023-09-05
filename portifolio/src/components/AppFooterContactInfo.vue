<script setup lang="ts">
const props = defineProps<{
  icon: string;
  iconColor: string;
  text: string;
  href: string;
  contentToCopy: string;
}>();

function copyToClipboard() {
  navigator.clipboard.writeText(
    props.contentToCopy,
  );
}
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

    <v-btn
      variant="tonal"
      class="copy-to-clipboard-button"
      @click="copyToClipboard"
    >
      <v-icon icon="$mdi-content-copy"></v-icon>
    </v-btn>
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

    &.copy-to-clipboard-button {
      padding-left: .5rem;
      padding-right: .5rem;

      min-width: initial;
    }
  }
}
</style>
