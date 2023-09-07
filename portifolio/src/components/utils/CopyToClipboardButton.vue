<script setup lang="ts">
import { useMessageStore } from '@/stores/message.store';
import { computed, ref, watch } from 'vue';

enum State {
  READY,
  LOADING,
  SUCCESS,
}

const props = defineProps<{
  label: string;
  contentToCopy: string;
}>();

const currentState = ref(State.READY);

const messages = computed(
  () => useMessageStore().messages.copyToClipboardButton,
);

async function copyToClipboard() {
  currentState.value = State.LOADING;

  await navigator.clipboard.writeText(
    props.contentToCopy,
  );

  currentState.value = State.SUCCESS;
}

watch(
  currentState,
  newValue => {
    if (newValue === State.SUCCESS) {
      setTimeout(
        () => currentState.value = State.READY,
        2000,
      );
    }
  },
);
</script>

<template>
  <v-btn
    variant="tonal"
    @click="copyToClipboard"
  >
    <v-scale-transition leave-absolute>
      <v-icon
        v-if="currentState === State.READY"
        icon="$mdi-content-copy"
        size="18"
      ></v-icon>
      <v-progress-circular
        v-else-if="currentState === State.LOADING"
        size="18"
        width="3"
        indeterminate
      ></v-progress-circular>
      <v-icon
        v-else
        icon="$mdi-check"
        size="18"
        color="success"
      ></v-icon>
    </v-scale-transition>

    <v-tooltip
      activator="parent"
      :text="
        currentState === State.READY ?
          `${messages.copyLabel} ${label}` :
        currentState === State.LOADING ?
          '...' :
        messages.successMessage
      "
    ></v-tooltip>
  </v-btn>
</template>

<style scoped lang="scss">
.v-btn {
  padding-left: .5rem;
  padding-right: .5rem;

  min-width: initial;
}
</style>
