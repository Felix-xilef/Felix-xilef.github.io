<script setup lang="ts">
import type { BrandStyle } from '~/utils/enums/brand-color.enum';

const props = withDefaults(
  defineProps<{
    image: string;
    title: string;
    description: string;
    link: string;
    stacks: ValueOf<typeof BrandStyle>[];
  }>(),
  {
    stacks: () => [],
  },
);

const { t } = useI18n({
  useScope: 'local',
});
</script>

<template>
  <div class="project-card-wrapper">
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        max-width="325"
        height="100%"
        v-bind="props"
      >
        <picture cover>
          <v-img
            :src="image"
            height="150"
            cover
            :class="{ 'blurred': isHovering }"
          ></v-img>

          <div
            class="project-link-wrapper"
            :class="{ 'active': isHovering }"
          >
            <v-btn
              variant="flat"
              color="primary"
              :text="t('hiddenProjectLinkText')"
              append-icon="mdi-open-in-new"
              :href="link"
              target="_blank"
            ></v-btn>
          </div>
        </picture>

        <v-card-title>
          {{ title }}
        </v-card-title>

        <v-card-text>
          {{ description }}
        </v-card-text>

        <v-spacer></v-spacer>

        <v-divider></v-divider>

        <v-card-actions>
          <v-chip
            v-for="stack in stacks"
            :key="stack.name"
            :prepend-icon="stack.icon"
            :color="stack.color"
            variant="tonal"
          >
            {{ stack.name }}
          </v-chip>

          <v-spacer></v-spacer>

          <v-btn
            variant="text"
            color="secondary"
            :text="t('smallerProjectLinkText')"
            append-icon="mdi-open-in-new"
            :href="link"
            target="_blank"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-hover>
  </div>
</template>

<style scoped lang="scss">
.project-card-wrapper {
  height: 100%;

  .v-card {
    display: flex;
    flex-direction: column;

    picture {
      position: relative;

      .v-img {
        transition: all .3s ease-in-out;

        &.blurred {
          filter: blur(3px);
          -webkit-filter: blur(3px);
        }
      }

      .project-link-wrapper {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        display: flex;
        justify-content: center;
        align-items: center;

        transition: all .3s ease-in-out;
        scale: 0;

        &.active {
          scale: 1;
        }
      }
    }
  }
}
</style>

<i18n lang="yaml">
en:
  hiddenProjectLinkText: 'Check project'
  smallerProjectLinkText: 'Check'

pt-BR:
  hiddenProjectLinkText: 'Conferir projeto'
  smallerProjectLinkText: 'Conferir'

</i18n>
