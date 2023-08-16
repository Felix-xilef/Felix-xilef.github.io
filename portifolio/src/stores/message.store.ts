import { LanguageTag } from "@/utils/enums/language-tag.enum";
import enMessages from "@/utils/messages/en.messages";
import type { AppMessages } from "@/utils/models/app-messages.model";
import { defineStore } from "pinia";

type ImportFunction = () => Promise<any>;

const DEFAULT_LANGUAGE = LanguageTag.ENGLISH;
const DEFAULT_LANGUAGE_MESSAGES = enMessages;

const messagesImports = import.meta.glob('../utils/messages/*.messages.ts');

function getMessagesImport<T extends string | LanguageTag>(languageTag: T): T extends LanguageTag ? ImportFunction : ImportFunction | null {
  return messagesImports[`../utils/messages/${languageTag}.messages.ts`];
}

export const useMessageStore = defineStore(
  'message',
  {
    state: (): {
      currentLanguage: string;
      messages: AppMessages;
    } => ({
      currentLanguage: DEFAULT_LANGUAGE,
      messages: DEFAULT_LANGUAGE_MESSAGES,
    }),

    actions: {
      async initialize() {
        let chosenLanguage = localStorage.getItem(
          'chosenLanguage',
        );

        if (chosenLanguage) {
          await this.changeLanguage(
            chosenLanguage,
          );

        } else {
          for (let i in navigator.languages) {
            let importFunction = getMessagesImport(
              navigator.languages[i],
            );
  
            if (importFunction) {
              this.currentLanguage = navigator.languages[i];
              this.messages = (await importFunction()).default;
  
              break;
            }
          }
        }
      },

      async changeLanguage(languageTag: LanguageTag) {
        this.currentLanguage = languageTag;

        this.messages = (
          await getMessagesImport(
            languageTag,
          )()
        ).default;

        localStorage.setItem(
          'chosenLanguage',
          languageTag,
        );
      },
    },
  },
);
