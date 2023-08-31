import type { IconOptions } from "vuetify";
import { mdi } from 'vuetify/iconsets/mdi-svg';
import { customAliases, customSet } from "./custom.icons";
import { mdiAliases } from "./mdi.icons";

const config: IconOptions = {
  defaultSet: 'mdi',
  aliases: {
    ...mdiAliases,
    ...customAliases,
  },
  sets: {
    mdi,
    custom: customSet,
  },
};

export default config;
