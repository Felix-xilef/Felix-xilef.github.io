import { LanguageTag } from "@/utils/enums/language-tag.enum";
import enMessages from "@/utils/messages/en.messages";
import ptBRMessages from "@/utils/messages/pt-BR.messages";
import { createPinia, setActivePinia } from "pinia";
import { afterAll, beforeAll, describe, expect, test } from "vitest";
import { useMessageStore } from "./message.store";

const DEFAULT_LANGUAGE = LanguageTag.ENGLISH;
const DEFAULT_LANGUAGE_MESSAGES = enMessages;

const CURRENT_LANGUAGE_STORAGE_KEY = 'currentLanguage';

function initializePinia() {
  setActivePinia(
    createPinia(),
  );
}

describe(
  'message Store',
  () => {
    describe.each([
      {
        message: 'no language at store',
        languageAtStore: undefined,
        currentLanguage: {
          message: 'default currentLanguage was loaded',
          expected: DEFAULT_LANGUAGE,
        },
        messages: {
          message: 'default messages were loaded',
          expected: DEFAULT_LANGUAGE_MESSAGES,
        },
      },
      {
        message: 'unaccepted language at store',
        languageAtStore: 'unaccepted-language',
        currentLanguage: {
          message: 'default currentLanguage was loaded',
          expected: DEFAULT_LANGUAGE,
        },
        messages: {
          message: 'default messages were loaded',
          expected: DEFAULT_LANGUAGE_MESSAGES,
        },
      },
      {
        message: 'accepted language at store',
        languageAtStore: LanguageTag.PORTUGUESE_BRAZIL,
        currentLanguage: {
          message: 'currentLanguage was loaded based on store',
          expected: LanguageTag.PORTUGUESE_BRAZIL,
        },
        messages: {
          message: 'messages were loaded based on store',
          expected: ptBRMessages,
        },
      },
    ])(
      '$message',
      ({ languageAtStore, currentLanguage, messages }) => {
        beforeAll(
          () => {
            if (languageAtStore) {
              localStorage.setItem(
                CURRENT_LANGUAGE_STORAGE_KEY,
                languageAtStore,
              );
            }

            initializePinia();
          },
        );

        afterAll(
          () => {
            localStorage.clear();
          },
        );

        test(
          currentLanguage.message,
          () => {
            expect(
              useMessageStore().currentLanguage,
            ).toBe(
              currentLanguage.expected,
            );
          },
        );

        test(
          messages.message,
          () => {
            expect(
              useMessageStore().messages,
            ).toEqual(
              messages.expected,
            );
          },
        );
      },
    );

    test(
      'on currentLanguage change messages updated',
      async () => {
        localStorage.clear();

        await initializePinia();

        useMessageStore().currentLanguage = LanguageTag.PORTUGUESE_BRAZIL;

        await new Promise<void>(
          resolve => {
            setTimeout(
              () => resolve(),
              100,
            )
          },
        );

        expect(
          useMessageStore().messages,
        ).toEqual(
          ptBRMessages,
        );
      },
    );
  },
);
