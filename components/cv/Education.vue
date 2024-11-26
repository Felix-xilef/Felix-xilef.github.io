<script setup lang="ts">
import EducationCard from './EducationCard.vue';

const { t } = useI18n({
  useScope: 'local',
});
</script>

<template>
  <v-parallax
    src="~/assets/images/parallax-background.jpg"
    height="fit-content"
  >
    <v-container>
      <v-row>
        <v-col cols="12">
          <EducationCard
            icon="mdi-school"
            :title="t('higherEducation.title')"
            :items="[
              {
                name: t('higherEducation.college.name'),
                description: t('higherEducation.college.institute'),
                conclusionText: t('higherEducation.college.conclusion'),
              },
              {
                name: t('higherEducation.postDegree.name'),
                description: t('higherEducation.postDegree.institute'),
                conclusionText: t('higherEducation.postDegree.conclusion'),
              },
            ]"
          />
        </v-col>

        <v-col>
          <EducationCard
            icon="mdi-certificate"
            :title="t('coursesAndCertifications.title')"
            :items="[
              {
                name: t('coursesAndCertifications.linuxEssentials.name'),
                description: t('coursesAndCertifications.linuxEssentials.institute'),
                conclusionText: t('coursesAndCertifications.linuxEssentials.conclusion'),
              },
              {
                name: t('coursesAndCertifications.ctfl.name'),
                description: t('coursesAndCertifications.ctfl.institute'),
                conclusionText: t('coursesAndCertifications.ctfl.conclusion'),
              },
              {
                name: t('coursesAndCertifications.unityJuniorProgrammer.name'),
                description: t('coursesAndCertifications.unityJuniorProgrammer.institute'),
                conclusionText: t('coursesAndCertifications.unityJuniorProgrammer.conclusion'),
              },
            ]"
          />
        </v-col>

        <v-col>
          <EducationCard
            icon="mdi-translate"
            :title="t('languages.title')"
            :items="[
              {
                name: t('languages.portuguese.name'),
                description: t('languages.portuguese.level'),
              },
              {
                name: t('languages.english.name'),
                description: t('languages.english.level'),
              },
              {
                name: t('languages.spanish.name'),
                description: t('languages.spanish.level'),
              },
              {
                name: t('languages.japanese.name'),
                description: t('languages.japanese.level'),
              },
            ]"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<style scoped lang="scss">
.v-parallax {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;

  :deep(.v-responsive__sizer) {
    padding: 0 !important;
  }
}
</style>

<i18n lang="yaml">
en:
  higherEducation:
    title: 'Degree'

    college:
      name: 'Higher Education in System Analysis and Development'
      institute: 'Fatec São Caetano do Sul - Antônio Russo'
      conclusion: 'Graduated in Dec. 2021'

    postDegree:
      name: 'Specialization in Game Development'
      institute: 'Unopar'
      conclusion: 'Completed in July 2024'

  coursesAndCertifications:
    title: 'Courses and Certifications'

    linuxEssentials:
      name: 'Linux Essentials Course'
      institute: 'CISCO'
      conclusion: 'Completed in Dec. 2020'

    ctfl:
      name: 'Certified Tester Foundation Level (CTFL)'
      institute: 'ISTQB'
      conclusion: 'Completed in May 2019'

    unityJuniorProgrammer:
      name: 'Unity Junior Programmer'
      institute: 'Unity Learn'
      conclusion: 'Completed in Jul 2024'

  languages:
    title: 'Languages'

    portuguese:
      name: 'Portuguese'
      level: 'Native'

    english:
      name: 'English'
      level: 'Advanced'

    spanish:
      name: 'Spanish'
      level: 'Advanced'

    japanese:
      name: 'Japanese'
      level: 'Basic'

pt-BR:
  higherEducation:
    title: 'Ensino Superior'

    college:
      name: 'Graduação em Análise e Desenvolvimento de Sistemas'
      institute: 'Fatec São Caetano do Sul - Antônio Russo'
      conclusion: 'Graduado em Dez. de 2021'

    postDegree:
      name: 'Especialização em Desenvolvimento de Games'
      institute: 'Unopar'
      conclusion: 'Concluída em Jul. de 2024'

  coursesAndCertifications:
    title: 'Cursos e Certificações'

    linuxEssentials:
      name: 'Curso Linux Essentials'
      institute: 'CISCO'
      conclusion: 'Concluído em Dez. de 2020'

    ctfl:
      name: 'Certificação em Teste de Software CTFL'
      institute: 'ISTQB'
      conclusion: 'Concluída em Maio de 2019'

    unityJuniorProgrammer:
      name: 'Unity Junior Programmer'
      institute: 'Unity Learn'
      conclusion: 'Concluído em Jul. de 2024'

  languages:
    title: 'Idiomas'

    portuguese:
      name: 'Português'
      level: 'Nativo'

    english:
      name: 'Inglês'
      level: 'Avançado'

    spanish:
      name: 'Espanhol'
      level: 'Avançado'

    japanese:
      name: 'Japonês'
      level: 'Básico'

</i18n>

