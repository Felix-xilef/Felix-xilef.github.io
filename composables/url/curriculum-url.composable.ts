export function useCurriculumUrl() {
  let { locale } = useI18n();

  return `curriculums/CV_Felix-Petiz-Bonilho_${locale.value}.pdf`;
}
