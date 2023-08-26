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

    professionalExperience: {
      title: 'Experiências Profissionais',
      items: [
        {
          title: 'Estagiário em atendimento ao cliente',
          enterprise: 'Sabesp',
          startDate: 'Jul. de 2017',
          endDate: 'Jul. de 2018',
          description: 'No final do ensino médio fiz um estágio na agência da Sabesp de São Mateus. Atuando nas áreas de atendimento ao cliente e também organização interna.',
        },
        {
          title: 'Estagiário em desenvolvimento de sistemas',
          enterprise: 'Smart Staff',
          startDate: 'Maio de 2021',
          description: 'Atuei criando novos sistemas e funcionalidades, assim como dando manutenção aos já existentes. Tive experiências, principalmente com os frameworks Angular, Vue e NestJS em TypeScript/JavaScript, assim como JSF e Play em Java.',
          changesOfPosition: [
            {
              positionName: 'Assistente de Desenvolvimento',
              startDate: 'Mar. de 2022',
              description: 'Ao final do estágio, fui contratado como assitente Sendo responsável, principalmente pelo desenvolvimento e manutenção de um sistema de controle de insumos e um sistema de controle de horário com foto e geolocalização. Usando, principalmente Angular e Vue no front-end e NestJS no back-end.',
            },
            {
              positionName: 'Desenvolvedor de Sistemas Júnior',
              startDate: 'Ago. de 2022',
              endDate: 'Hoje',
              description: 'Atualmente atuo como desenvolvedor de sistemas júnior. Continuo trabalhando na maior parte do tempo com os mesmos sistemas, porém também participo das novas solução desenvolvidas pela equipe.',
            },
          ],
        },
      ],
    },
  },
});
