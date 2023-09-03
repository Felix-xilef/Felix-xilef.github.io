import { mdiAndroid, mdiCalendarRange, mdiCertificate, mdiDatabase, mdiGithub, mdiLanguageC, mdiLanguageCpp, mdiLanguageCss3, mdiLanguageHtml5, mdiLanguageJavascript, mdiLanguageTypescript, mdiLinkedin, mdiOfficeBuildingMarker, mdiSchool, mdiTranslateVariant } from "@mdi/js";
import type { IconAliases } from "vuetify";
import { aliases } from "vuetify/iconsets/mdi-svg";

export const mdiAliases: Partial<IconAliases> = {
  ...aliases,
  'mdi-android': mdiAndroid,
  'mdi-calendar-range': mdiCalendarRange,
  'mdi-certificate': mdiCertificate,
  'mdi-database': mdiDatabase,
  'mdi-github': mdiGithub,
  'mdi-language-c': mdiLanguageC,
  'mdi-language-cpp': mdiLanguageCpp,
  'mdi-language-css3': mdiLanguageCss3,
  'mdi-language-html5': mdiLanguageHtml5,
  'mdi-language-javascript': mdiLanguageJavascript,
  'mdi-language-typescript': mdiLanguageTypescript,
  'mdi-linkedin': mdiLinkedin,
  'mdi-office-building-marker': mdiOfficeBuildingMarker,
  'mdi-school': mdiSchool,
  'mdi-translate-variant': mdiTranslateVariant,
};
