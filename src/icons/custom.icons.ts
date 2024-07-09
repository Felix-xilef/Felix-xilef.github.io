import angular from "@/assets/images/icons/angular.svg";
import bootstrap from "@/assets/images/icons/bootstrap.svg";
import cCpp from "@/assets/images/icons/c-cpp.svg";
import docker from "@/assets/images/icons/docker.svg";
import flutter from "@/assets/images/icons/flutter.svg";
import android from "@/assets/images/icons/android.svg";
import java from "@/assets/images/icons/java.png";
import nestjs from "@/assets/images/icons/nestjs.svg";
import nodejs from "@/assets/images/icons/nodejs.svg";
import python from "@/assets/images/icons/python.svg";
import typeorm from "@/assets/images/icons/typeorm.png";
import vue from "@/assets/images/icons/vue.svg";
import CustomIconVue from "@/components/utils/CustomIcon.vue";
import br from "flag-icons/flags/4x3/br.svg";
import us from "flag-icons/flags/4x3/us.svg";
import { h } from 'vue';
import type { IconSet } from "vuetify";

export const customAliases: Record<string, string> = {
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
  'flag-br': br,
  'flag-us': us,
};

export const customSet: IconSet = {
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
      CustomIconVue,
      {
        wrapperTag: props.tag,
        iconPath: icon,
      },
    );
  },
};
