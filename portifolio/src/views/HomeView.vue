<script setup lang="ts">
import { useMessageStore } from '@/stores/message.store';
import { computed } from 'vue';

const messages = computed(
  () => useMessageStore().messages.home,
);
</script>

<template>
  <v-container>
    <v-row
      align="center"
      justify="center"
      justify-md="space-around"
    >
      <v-col
        cols="12"
        md="6"
        order="2"
        order-md="1"
      >
        <h1>
          {{ messages.presentation.title }}
        </h1>

        <p>
          {{ messages.presentation.description }}
        </p>

        <div class="social-links">
          <v-btn
            icon="mdi-github"
            variant="text"
            density="compact"
            size="x-large"
            href="https://github.com/Felix-xilef"
            target="_blank"
          ></v-btn>

          <v-btn
            icon="mdi-linkedin"
            variant="text"
            density="compact"
            size="x-large"
            href="https://www.linkedin.com/in/felix-xilef/"
            target="_blank"
          ></v-btn>
        </div>
      </v-col>

      <v-col
        cols="auto"
        order="1"
        order-md="2"
      >
        <v-img
          width="auto"
          src="../assets/images/profile-picture.jpg"
          :alt="messages.presentation.profilePictureAlt"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
@mixin text-gradient {
  color: transparent;
  background: linear-gradient(to right, var(--gradient-purple), var(--gradient-blue));
  background-clip: text;
  -moz-background-clip: text;
  -webkit-background-clip: text;
}

.v-container {
  padding-top: 21vh;

  @media (max-width: 960px) {
    padding-top: 10vh;
  }

  .v-row {
    padding: 1rem;

    h1 {
      width: fit-content;
      font-size: 45px;

      @include text-gradient;
    }

    .social-links {
      padding-top: .5rem;

      display: flex;
      gap: .75rem;

      .v-btn {
        width: 3.5rem;
        height: 3.5rem;

        font-size: 1.75rem;
      }
    }

    .v-img {
      $circumference-width: .25rem;

      background: linear-gradient(135deg, var(--gradient-blue), var(--gradient-purple));

      border-radius: 50%;

      :deep(img) {
        border-radius: 50%;

        top: $circumference-width;
        left: $circumference-width;

        width: calc(100% - #{$circumference-width * 2});
        height: calc(100% - #{$circumference-width * 2});

        padding: .5rem;
        background: rgb(var(--v-theme-background));
      }
    }
  }
}
</style>
