<script setup lang="ts">
import ProfessionalExperienceItem from './ProfessionalExperienceItem.vue';
import ProfessionalExperienceWrapper from './ProfessionalExperienceWrapper.vue';

const { t } = useI18n({
  useScope: 'local',
});
</script>

<template>
  <div class="professional-experience-wrapper">
    <h1>
      {{ t('title') }}
    </h1>

    <ProfessionalExperienceWrapper>
      <ProfessionalExperienceItem
        color="#00A5E4"
        :last-position="t('sabesp.title')"
        enterprise="Sabesp"
        :start-date="new Date(2017, 6)"
        :end-date="new Date(2018, 6)"
        :description="t('sabesp.description')"
      />

      <ProfessionalExperienceItem
        color="#99225c"
        enterprise="Smart Staff"
        :last-position="t('smartStaff.title.juniorDeveloper')"
        :other-positions="[
          t('smartStaff.title.assistant'),
          t('smartStaff.title.intern'),
        ]"  
        :start-date="new Date(2021, 4)"
        :end-date="new Date(2023, 11)"
      >
        <ul class="experience-list">
          <li>
            {{ t('smartStaff.description.inputSystem') }}
          </li>
          <li>
            {{ t('smartStaff.description.checkinSystem') }}
          </li>
          <li>
            {{ t('smartStaff.description.legacySystem') }}
          </li>
          <li>
            {{ t('smartStaff.description.biSystem') }}
          </li>
        </ul>
      </ProfessionalExperienceItem>
    </ProfessionalExperienceWrapper>
  </div>
</template>

<style scoped lang="scss">
@use '~/assets/styles/mixins.scss';

.professional-experience-wrapper {
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  h1 {
    max-width: fit-content;
    margin-right: auto;
    padding-bottom: .5rem;

    font-size: 36px;

    @include mixins.linear-text-gradient;
  }

  .experience-list {
    padding-left: 20px;
  }
}
</style>

<i18n lang="yaml">
en:
  title: 'Professional Experiences'

  sabesp:
    title: 'Customer Service Internship'
    description: 'In my last 2 years of high school, I did an internship at a Sabesp (Water treatment company) agency. Where I worked with customer service and internal organization.'

  smartStaff:
    title:
      juniorDeveloper: 'Junior Systems Developer III'
      assistant: 'Development Assistant'
      intern: 'Systems Development Intern'

    description:
      inputSystem: 'Participated in the last part of the development of an input system, as well as in it''s maintenance later on (Angular, NestJS)'
      checkinSystem: 'Developed from beginning to end a check in system with photo and geolocation features (Vue 3, NestJS)'
      legacySystem: 'Took part in the optimization and maintenance of a legacy system that played an important role in the internal organization of the company (Java Server Faces)'
      biSystem: 'Got involved in the development of a Business Intelligence System with Multi Tenant features (Vue 2, NestJS)'

pt-BR:
  title: 'Experiências Profissionais'

  sabesp:
    title: 'Estágio em atendimento ao cliente'
    description: 'No final do ensino médio fiz um estágio na agência da Sabesp de São Mateus. Atuando nas áreas de atendimento ao cliente e também organização interna.'

  smartStaff:
    title:
      juniorDeveloper: 'Desenvolvedor de Sistemas Júnior III'
      assistant: 'Assistente de Desenvolvimento'
      intern: 'Estagiário em desenvolvimento de sistemas'

    description:
      inputSystem: 'Participei das etapas finais de desenvolvimento de um sistema de controle de insumos, assim como de sua posterior manutenção (Angular, NestJS)'
      checkinSystem: 'Desenvolvi do início ao fim um sistema de check-in com funcionalidades de foto e geolocalização (Vue 3, NestJS)'
      legacySystem: 'Ajudei na otimização e manutenção de um sistema legado que tinha grande importância para o gerenciamento interno da empresa (Java Server Faces)'
      biSystem: 'Me envolvi no desenvolvimento de um sistema de Business Intelligence (BI), o qual utilizava um sistema Multi Tenant (Vue 2, NestJS)'

</i18n>
