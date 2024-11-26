import br from "flag-icons/flags/4x3/br.svg";
import us from "flag-icons/flags/4x3/us.svg";
import android from "~/assets/images/icons/android.svg";
import angular from "~/assets/images/icons/angular.svg";
import bootstrap from "~/assets/images/icons/bootstrap.svg";
import cCpp from "~/assets/images/icons/c-cpp.svg";
import docker from "~/assets/images/icons/docker.svg";
import flutter from "~/assets/images/icons/flutter.svg";
import java from "~/assets/images/icons/java.png";
import nestjs from "~/assets/images/icons/nestjs.svg";
import nodejs from "~/assets/images/icons/nodejs.svg";
import nuxt from "~/assets/images/icons/nuxt.svg";
import python from "~/assets/images/icons/python.svg";
import typeorm from "~/assets/images/icons/typeorm.png";
import vue from "~/assets/images/icons/vue.svg";

const customAliases: Record<string, string> = {
  angular,
  bootstrap,
  'c-cpp': cCpp,
  docker,
  flutter,
  android,
  java,
  nestjs,
  nodejs,
  python,
  typeorm,
  vue,
  nuxt,
  'flag-pt-BR': br,
  'flag-en-US': us,
};

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.hook(
    'vuetify:before-create',
    ({ vuetifyOptions }) => {
      vuetifyOptions.icons = {
        ...vuetifyOptions.icons,

        aliases: {
          ...vuetifyOptions.icons?.aliases,
          ...customAliases,
        },

        sets: {
          ...vuetifyOptions.icons?.sets,

          custom: {
            component: props => {
              let icon = '';

              if (typeof props.icon === 'string') {
                icon = customAliases[props.icon];
              }

              if (!icon) {
                throw new Error(
                  `Not found custom icon for ${props.icon}`,
                );
              }

              return h(
                props.tag,
                h(
                  'img',
                  {
                    src: icon,
                    height: '100%',
                  },
                ),
              );
            },
          },
        },
      };
    },
  );
});
