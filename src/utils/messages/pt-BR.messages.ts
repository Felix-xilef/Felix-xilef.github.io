import { AppMessages } from "../models/app-messages.model";

export default new AppMessages({
  appBar: {
    language: 'Idioma',
  },

  home: {
    presentation: {
      title: 'Olá, eu sou Felix!',
      description: 'Sou graduado em Análise e Desenvolvimento de Sistemas pela Fatec São Caetano do Sul e, atualmente, estou mergulhado no mundo do desenvolvimento FullStack.',

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
            conclusion: 'Concluída em Maio de 2019',
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
          title: 'Estágio em atendimento ao cliente',
          enterprise: 'Sabesp',
          startDate: 'Jul. de 2017',
          endDate: 'Jul. de 2018',
          description: 'No final do ensino médio fiz um estágio na agência da Sabesp de São Mateus. Atuando nas áreas de atendimento ao cliente e também organização interna.',
        },
        {
          title: 'Estágio em desenvolvimento de sistemas',
          enterprise: 'Smart Staff',
          startDate: 'Maio de 2021',
          description: 'Atuei criando novos sistemas e funcionalidades, assim como dando manutenção aos já existentes. Tive experiências, principalmente, com os frameworks Angular, Vue e NestJS, mas também trabalhei um puco com JSF e Play Framework.',
          changesOfPosition: [
            {
              positionName: 'Assistente de Desenvolvimento',
              startDate: 'Mar. de 2022',
              description: 'Ao final do estágio, fui contratado como assitente. Sendo responsável, principalmente, pelo desenvolvimento e manutenção de um sistema de controle de insumos e um sistema de controle de horário com foto e geolocalização. Usando Angular, Vue e NestJS com TypeORM.',
            },
            {
              positionName: 'Desenvolvedor de Sistemas Júnior III',
              startDate: 'Ago. de 2022',
              endDate: 'Hoje',
              current: 'Posição Atual',
              description: 'Atualmente atuo como desenvolvedor de sistemas júnior. Continuo trabalhando na maior parte do tempo com os mesmos sistemas, porém também participo das novas solução desenvolvidas pela equipe.',
            },
          ],
        },
      ],
    },

    knowledge: {
      title: 'Conhecimentos',
      moreKnowledgebleBoxTitle: 'Tenho mais experiência e conhecimento',
      lessKnowledgebleBoxTitle: 'Uso com menos frequência ou tenho menos conhecimento',
    },
  },

  footer: {
    linkLabel: 'link',
    emailLabel: 'e-mail',
    phoneLabel: 'telefone',
  },

  copyToClipboardButton: {
    copyLabel: 'Copiar',
    successMessage: 'Copiado com sucesso!',
  },
});
