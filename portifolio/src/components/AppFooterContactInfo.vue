<script setup lang="ts">
const props = defineProps<{
  icon: string;
  text: string;
  color: string;
}>();
</script>

<template>
  <div class="contact-info-wrapper">
    <v-btn
      variant="outlined"
      color="background"
    >
      <template v-slot:prepend>
        <v-icon
          :icon="icon"
          :color="color"
          size="x-large"
        ></v-icon>
      </template>

      {{ text }}

      <template v-slot:append>
        <v-icon icon="$mdi-content-copy"></v-icon>
      </template>
    </v-btn>
  </div>
</template>

<style scoped lang="scss">
.contact-info-wrapper {
  // display: flex;
  // flex-direction: row;
  // align-items: center;

  // gap: .25rem;

  padding: .75rem;

  .v-btn {
    text-transform: none;
  }
}
</style>
