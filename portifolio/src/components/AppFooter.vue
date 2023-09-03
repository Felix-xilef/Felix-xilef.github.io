<script setup lang="ts">
import AppFooterContactInfo from './AppFooterContactInfo.vue';

</script>

<template>
  <v-footer>
    <v-row no-gutters>
      <v-col>
        <AppFooterContactInfo
          icon="$mdi-github"
          text="Felix-xilef"
          color="#171515"
        />
      </v-col>

      <v-col>
        <AppFooterContactInfo
          icon="$mdi-linkedin"
          text="felix-xilef"
          color="#0077b5"
        />
      </v-col>

      <v-col>
        <AppFooterContactInfo
          icon="$mdi-email"
          text="petizfelix@gmail.com"
          color="secondary"
        />
      </v-col>
    </v-row>

    <h2>
      Felix Petiz Bonilho
    </h2>
  </v-footer>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins.scss';

.v-footer {
  flex-direction: column;
  justify-content: center;

  // padding-top: 0;

  .v-row {
    width: 100%;

    background-color: #e9e9e9;
  }

  h2 {
    max-width: fit-content;

    @include mixins.linear-text-gradient;
  }
}
</style>
