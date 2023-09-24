import { useMessageStore } from "@/stores/message.store";

export function useCurriculumUrl() {
  let messagesStore = useMessageStore();

  return `curriculums/${messagesStore.currentLanguage}/${messagesStore.messages.curriculum.filename}.pdf`;
}
