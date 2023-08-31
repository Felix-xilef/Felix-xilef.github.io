import nestjs from '@/assets/images/icons/nestjs.svg';
import typeorm from '@/assets/images/icons/typeorm.svg';
import type { IconAliases, IconSet } from "vuetify";

export const customAliases: Partial<IconAliases> = {
  nestjs,
  typeorm,
};

export const customSet: IconSet = {
  component: props => {
    let icon = '';

    if (
      icon &&
      typeof props.icon === 'string'
    ) {
      icon = props.icon;
    }

    return customAliases[icon];
  },
};
