import { useMessageStore } from "@/stores/message.store";

export function useCurriculumUrl() {
  let messagesStore = useMessageStore();

  return `curriculums/${messagesStore.messages.curriculum.filename}_${messagesStore.currentLanguage}.pdf`;
}
