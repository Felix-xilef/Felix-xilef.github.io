import { AppMessages } from "../models/app-messages.model";

export default new AppMessages({
  home: {
    presentation: {
      title: 'Olá, eu sou Felix!',
      description: 'Prazer, sou formado em Análise e Desenvolvimento de Sistemas pela Fatec São Caetano do Sul e atualmente atuo como desenvolvedor FullStack.',

      profilePictureAlt: 'Foto de perfil',
    },

    education: {
      college: {
        title: 'Ensino Superior',
        course: 'Análise e Desenvolvimento de Sistemas',
        graduation: 'Graduado em Dez. de 2021',
      },

      coursesAndCertifications: {
        title: 'Cursos e Certificações',
        items: {
          linuxEssentials: {
            name: 'Curso Linux Essentials',
            institution: 'CISCO',
            conclusion: 'Concluído em Dez. de 2020',
          },
          ctfl: {
            name: 'Certificação em Teste de Software CTFL',
            institution: 'ISTQB',
            conclusion: 'Emitido em Maio de 2019',
          },
        },
      },

      languages: {
        title: 'Idiomas',
        items: {
          portuguese: {
            name: 'Português',
            level: 'Nativo',
          },
          english: {
            name: 'Inglês',
            level: 'Avançado',
          },
          spanish: {
            name: 'Espanhol',
            level: 'Avançado',
          },
          japanese: {
            name: 'Japonês',
            level: 'Básico',
          },
        },
      },
    },
  },
});
