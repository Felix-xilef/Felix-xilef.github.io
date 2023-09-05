<script setup lang="ts">
import { useWait } from '@/composables/timeout/wait.composable';
import { ref, watch } from 'vue';

enum State {
  DEFAULT,
  PROGRESS,
  SUCCESS,
}

const STATE_OPTIONS = {
  [State.DEFAULT]: {
    next: State.PROGRESS,
    timeout: 0,
  },
  [State.PROGRESS]: {
    next: State.SUCCESS,
    timeout: 200,
  },
  [State.SUCCESS]: {
    next: State.DEFAULT,
    timeout: 1000,
  },
}

const props = defineProps<{
  label: string;
  contentToCopy: string;
}>();

const currentState = ref(State.DEFAULT);

function copyToClipboard() {
  navigator.clipboard.writeText(
    props.contentToCopy,
  );

  goToNextState();
}

async function goToNextState() {
  if (STATE_OPTIONS[currentState.value].timeout > 0) {
    await useWait(
      STATE_OPTIONS[currentState.value].timeout,
    );
  }

  currentState.value = STATE_OPTIONS[currentState.value].next;
}

watch(
  currentState,
  newValue => {
    if (newValue !== State.DEFAULT) {
      goToNextState();
    }
  },
);
</script>

<template>
  <v-btn
    variant="tonal"
    @click="copyToClipboard"
  >
    <v-icon
      v-if="currentState === State.DEFAULT"
      icon="$mdi-content-copy"
      size="18"
    ></v-icon>
    <v-progress-circular
      v-else-if="currentState === State.PROGRESS"
      indeterminate
      size="18"
      width="2"
    ></v-progress-circular>
    <v-icon
      v-else
      icon="$mdi-check"
      size="18"
      color="success"
    ></v-icon>

    <v-tooltip
      activator="parent"
      :text="
        currentState === State.DEFAULT ?
          `Copiar ${label}` :
        currentState === State.SUCCESS ?
          'Copiado com sucesso!' :
        ''
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
