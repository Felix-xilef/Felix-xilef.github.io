<script setup lang="ts">
enum State {
  READY,
  LOADING,
  SUCCESS,
}

const props = defineProps<{
  label: string;
  contentToCopy: string;
}>();

const { t } = useI18n({
  useScope: 'local',
});

const currentState = ref(State.READY);

async function copyToClipboard() {
  currentState.value = State.LOADING;

  await navigator.clipboard.writeText(
    props.contentToCopy,
  );

  currentState.value = State.SUCCESS;

  setTimeout(
    () => currentState.value = State.READY,
    2000,
  );
}
</script>

<template>
  <v-btn
    variant="tonal"
    @click="copyToClipboard"
  >
    <v-scale-transition leave-absolute>
      <v-icon
        v-if="currentState === State.READY"
        icon="mdi-content-copy"
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
        icon="mdi-check"
        size="18"
        color="success"
      ></v-icon>
    </v-scale-transition>

    <v-tooltip
      activator="parent"
      :text="
        currentState === State.READY ?
          `${t('copyLabel')} ${label}` :
        currentState === State.LOADING ?
          '...' :
        t('successMessage')
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

<i18n lang="yaml">
en:
  copyLabel: 'Copy'
  successMessage: 'Successfully copied!'

pt-BR:
  copyLabel: 'Copiar'
  successMessage: 'Copiado com sucesso!'

</i18n>
