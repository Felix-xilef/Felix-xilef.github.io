import { BrandStyle } from "../enums/brand-color.enum";
import { AppMessages } from "../models/app-messages.model";

export default new AppMessages({
  appBar: {
    backBtnLabel: 'Voltar',
    curriculumBtnLabel: 'Currículo',
    language: 'Idioma',
  },

  home: {
    presentation: {
      title: 'Olá, eu sou Felix!',
      description: 'Sou graduado em Análise e Desenvolvimento de Sistemas pela Fatec São Caetano do Sul e pós-graduado em Desenvolvimento de Games pela Unopar. Possuo 3 anos de experiência trabalhando com desenvolvimento FullStack, além de projetos pessoais na área de jogos.',

      profilePictureAlt: 'Foto de perfil',
    },

    education: {
      college: {
        title: 'Ensino Superior',
        course: 'Análise e Desenvolvimento de Sistemas',
        institution: 'Fatec São Caetano do Sul - Antônio Russo',
        graduation: 'Graduado em Dez. de 2021',
      },

      postDegree: {
        title: 'Especialização',
        course: 'Desenvolvimento de Games',
        institution: 'Unopar',
        graduation: 'Concluída em Jul. de 2024',
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
          unityJuniorProgrammer: {
            name: 'Unity Junior Programmer',
            institution: 'Unity',
            conclusion: 'Concluído em Jul. de 2024',
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
              endDate: 'Dez. de 2023',
              description: 'Passei a atuar como desenvolvedor de sistemas júnior. Continuei trabalhando na maior parte do tempo com os mesmos sistemas, porém também participei das novas soluções desenvolvidas pela equipe.',
            },
          ],
        },
      ],
    },

    projects: {
      title: 'Projetos',
      hiddenExploreButton: 'Conferir projeto',
      smallerExploreButton: 'Conferir',
      items: {
        chessGame: {
          title: 'Jogo de Xadrez',
          description: 'Um jogo de xadrez feito com Unity, com opção para jogar contra o computador ou com outro jogador local.',
        },
        iconComponent: {
          title: 'Componente de Ícones',
          description: 'Um componente para o UI Toolkit da Unity que facilita o uso de ícones através de fontes na interface.',
        },
      },
    },

    knowledge: {
      title: 'Conhecimentos',
      languages: 'Linguagens',
      others: 'Frameworks, Engines e outros',
    },
  },

  curriculum: {
    filename: 'CV_Felix-Petiz-Bonilho',
    sheet: {
      head: {
        headingSubtitle: 'Análise e Desenvolvimento de Sistemas - Fatec São Caetano do Sul',
      },
      body: {
        presentation: {
          title: 'Apresentação',
          description: 'Olá, me chamo Felix, tenho 3 anos de experiencia como desenvolvedor Fullstack e experiências adicionais em projetos pessoais na área de Desenvolvimento de Games, utilizando principalmente Unity e C#',
        },
        college: {
          title: 'Formação Superior',
          course: 'Análise e Desenvolvimento de Sistemas - Fatec São Caetano do Sul',
          graduation: 'Graduado em Dez. de 2021',
        },
        postDegree: {
          title: 'Especialização',
          course: 'Desenvolvimento de Games - Unopar',
          graduation: 'Concluída em Jul. de 2024',
        },
        coursesAndCertifications: {
          title: 'Cursos e Certificações',
          items: [
            {
              title: 'Curso Linux Essentials - CISCO',
              conclusion: 'Concluído em Dez. de 2020',
            },
            {
              title: 'Certificação em Teste de Software CTFL - ISTQB',
              conclusion: 'Concluída em Maio de 2019',
            },
            {
              title: 'Unity Junior Programmer',
              conclusion: 'Concluído em Jul. de 2024',
            },
          ],
        },
        experiences: {
          title: 'Experiências',
          items: [
            {
              title: 'Estágio em desenvolvimento de sistemas - Smart Staff',
              description: 'Em Maio de 2021, comecei a atuar como estagiário. Trabalhei criando novos sistemas e funcionalidades, assim como dando manutenção aos já existentes.',
              mainTechnologies: [
                BrandStyle.VUE,
                BrandStyle.ANGULAR,
                BrandStyle.NESTJS,
                BrandStyle.JAVA,
              ],
            },
            {
              title: 'Assistente de Desenvolvimento - Smart Staff',
              description: 'Em Março de 2022, fui contratado como assitente. Sendo responsável pelo desenvolvimento e manutenção de um sistema de controle de insumos e outro de controle de horário com foto e geolocalização.',
              mainTechnologies: [
                BrandStyle.VUE,
                BrandStyle.ANGULAR,
                BrandStyle.NESTJS,
                BrandStyle.TYPEORM,
              ],
            },
            {
              title: 'Desenvolvedor de Sistemas Júnior III - Smart Staff',
              description: 'De Agosto de 2022 até Dezembro de 2023, atuei como desenvolvedor de sistemas júnior. Trabalhando, em grande parte, com os mesmos sistemas, porém também participei das novas soluções desenvolvidas pela equipe.',
              mainTechnologies: [
                BrandStyle.VUE,
                BrandStyle.VUETIFY,
                BrandStyle.ANGULAR,
                BrandStyle.NESTJS,
              ],
            },
          ],
        },
        mainTechnologies: {
          title: 'Principais Tecnologias',
        },
        languages: {
          title: 'Idiomas',
          items: [
            'Português - Nativo',
            'Inglês - Avançado',
            'Espanhol - Avançado',
            'Japonês - Básico',
          ],
        },
        contactInformation: {
          title: 'Contato',
          email: 'E-mail',
          phone: 'Telefone',
          portfolioDescription: 'Para saber mais sobre mim, acesse:',
          portfolioQrCodeAlt: 'QrCode do link',
        },
      },
    },
    downloadButtonLabel: 'Baixar Currículo',
    printButtonLabel: 'Imprimir Currículo',
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
