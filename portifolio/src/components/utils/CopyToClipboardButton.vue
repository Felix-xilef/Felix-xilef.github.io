<script setup lang="ts">
import { useMessageStore } from '@/stores/message.store';
import { computed, ref, watch } from 'vue';

enum State {
  DEFAULT,
  SUCCESS,
}

const props = defineProps<{
  label: string;
  contentToCopy: string;
}>();

const currentState = ref(State.DEFAULT);

const messages = computed(
  () => useMessageStore().messages.copyToClipboardButton,
);

function copyToClipboard() {
  navigator.clipboard.writeText(
    props.contentToCopy,
  );

  currentState.value = State.SUCCESS;
}

watch(
  currentState,
  newValue => {
    if (newValue === State.SUCCESS) {
      setTimeout(
        () => currentState.value = State.DEFAULT,
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
        v-if="currentState === State.DEFAULT"
        icon="$mdi-content-copy"
        size="18"
      ></v-icon>
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
        currentState === State.DEFAULT ?
          `${messages.copyLabel} ${label}` :
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
