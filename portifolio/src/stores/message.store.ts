import vuetify from "@/plugins/vuetify";
import { LanguageTag } from "@/utils/enums/language-tag.enum";
import enMessages from "@/utils/messages/en.messages";
import type { AppMessages } from "@/utils/models/app-messages.model";
import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

const DEFAULT_LANGUAGE = LanguageTag.ENGLISH;
const DEFAULT_LANGUAGE_MESSAGES = enMessages;

const CURRENT_LANGUAGE_STORAGE_KEY = 'currentLanguage';

function languageTagIncludes(languageTag: string) {
  return Object.values(
    LanguageTag,
  ).includes(
    languageTag as any,
  );
}

async function getMessages(languageTag: LanguageTag) {
  return (
    await import(`../utils/messages/${languageTag}.messages.ts`)
  ).default as AppMessages;
}

export const useMessageStore = defineStore(
  'message',
  () => {
    const vuetifyLocale = vuetify.locale.current;

    const currentLanguage = ref(DEFAULT_LANGUAGE);
    const messages = ref(DEFAULT_LANGUAGE_MESSAGES);

    function initializeStore() {
      let currentLanguageFromStore = localStorage.getItem(
        CURRENT_LANGUAGE_STORAGE_KEY,
      );

      if (
        currentLanguageFromStore &&
        languageTagIncludes(currentLanguageFromStore)
      ) {
        currentLanguage.value = currentLanguageFromStore as LanguageTag;

      } else {
        for (let i in navigator.languages) {
          if (languageTagIncludes(navigator.languages[i])) {
            currentLanguage.value = navigator.languages[i] as LanguageTag;
  
            break;
          }
        }
      }
    }

    watch(
      currentLanguage,
      async (newValue, oldValue) => {
        if (newValue !== oldValue) {
          localStorage.setItem(
            CURRENT_LANGUAGE_STORAGE_KEY,
            newValue,
          );

          vuetifyLocale.value = newValue;

          messages.value = await getMessages(
            newValue,
          );
        }
      },
    );

    initializeStore();

    return {
      currentLanguage,
      messages: computed(
        () => messages.value,
      ),
    };
  },
);
