import { BrandStyle } from "../enums/brand-color.enum";
import { AppMessages } from "../models/app-messages.model";

export default new AppMessages({
  appBar: {
    backBtnLabel: 'Go Back',
    curriculumBtnLabel: 'Curriculum',
    language: 'Language',
  },

  home: {
    presentation: {
      title: 'Hello, I am Felix!',
      description: 'I graduated in System Analysis and Development at Fatec São Caetano do Sul and completed post-graduation in Game Development at Unopar. I have 3 years of experience working with FullStack development, in addition to personal game development projects.',

      profilePictureAlt: 'Profile Photo',
    },

    education: {
      college: {
        title: 'Higher Education',
        course: 'System Analysis and Development',
        institution: 'Fatec São Caetano do Sul - Antônio Russo',
        graduation: 'Graduated in Dec. 2021',
      },

      postDegree: {
        title: 'Specialization',
        course: 'Game Development',
        institution: 'Unopar',
        graduation: 'Completed in July 2024',
      },

      coursesAndCertifications: {
        title: 'Courses and Certifications',
        items: {
          linuxEssentials: {
            name: 'Linux Essentials Course',
            institution: 'CISCO',
            conclusion: 'Completed in Dec. 2020',
          },
          ctfl: {
            name: 'Certified Tester Foundation Level (CTFL)',
            institution: 'ISTQB',
            conclusion: 'Completed in May 2019',
          },
          unityJuniorProgrammer: {
            name: 'Unity Junior Programmer',
            institution: 'Unity',
            conclusion: 'Completed in Jul 2024',
          },
        },
      },

      languages: {
        title: 'Languages',
        items: {
          portuguese: {
            name: 'Portuguese',
            level: 'Native',
          },
          english: {
            name: 'English',
            level: 'Advanced',
          },
          spanish: {
            name: 'Spanish',
            level: 'Advanced',
          },
          japanese: {
            name: 'Japanese',
            level: 'Basic',
          },
        },
      },
    },

    professionalExperience: {
      title: 'Professional Experiences',
      items: [
        {
          title: 'Customer Service Internship',
          enterprise: 'Sabesp',
          startDate: 'July 2017',
          endDate: 'July 2018',
          description: 'In my last 2 years of high school, I did an internship at a Sabesp (Water treatment company) agency. Where I worked with customer service and internal organization.',
        },
        {
          title: 'Systems Development Internship',
          enterprise: 'Smart Staff',
          startDate: 'May 2021',
          description: 'I worked on creating new systems and functionalities, as well as providing maintenance for existing ones. I gained experience, primarily with the Angular, Vue, and NestJS, but I also had some exposure to JSF and Play Framework.',
          changesOfPosition: [
            {
              positionName: 'Development Assistant',
              startDate: 'Mar. 2022',
              description: 'At the end of the internship, I was hired as an assistant, primarily responsible for the development and maintenance of an input control system and a time tracking system with photo and geolocation features. I used Angular, Vue, and NestJS with TypeORM for these tasks.',
            },
            {
              positionName: 'Junior Systems Developer III',
              startDate: 'Aug. 2022',
              endDate: 'Dec. 2023',
              description: 'I was promoted to Junior Systems Developer. Most of the time, I still worked on the same systems, but I also participated in the development of new solutions created by the team.',
            },
          ],
        },
      ],
    },

    projects: {
      title: 'Projects',
      hiddenExploreButton: 'Explore project',
      smallerExploreButton: 'Explore',
      items: {
        chessGame: {
          title: 'Chess Game',
          description: 'A chess game made with Unity, with options to play versus the computer or another local player.',
        },
        iconComponent: {
          title: 'Icon Component',
          description: 'An Unity UI Toolkit component for simple usage of icon fonts at the UI.',
        },
      },
    },

    knowledge: {
      title: 'Knowledge & Skills',
      languages: 'Languages',
      others: 'Frameworks, Engines and others',
    },
  },

  curriculum: {
    filename: 'CV_Felix-Petiz-Bonilho',
    sheet: {
      head: {
        headingSubtitle: 'System Analysis and Development - Fatec São Caetano do Sul',
      },
      body: {
        presentation: {
          title: 'Introduction',
          description: 'Hello, my name is Felix, I have 3 years of experience working with FullStack development and additional experience with personal Game Development projects using mainly Unity and C#',
        },
        college: {
          title: 'Higher Education',
          course: 'System Analysis and Development - Fatec São Caetano do Sul',
          graduation: 'Graduated in Dec. 2021',
        },
        postDegree: {
          title: 'Specialization',
          course: 'Game Development - Unopar',
          graduation: 'Completed in July 2024',
        },
        coursesAndCertifications: {
          title: 'Courses and Certifications',
          items: [
            {
              title: 'Linux Essentials Course - CISCO',
              conclusion: 'Completed in Dec. 2020',
            },
            {
              title: 'Certified Tester Foundation Level (CTFL) - ISTQB',
              conclusion: 'Completed in May 2019',
            },
            {
              title: 'Unity Junior Programmer',
              conclusion: 'Completed in Jul 2024',
            },
          ],
        },
        experiences: {
          title: 'Experiences',
          items: [
            {
              title: 'Systems Development Internship - Smart Staff',
              description: 'In May 2021, I began as an intern. I worked on creating new systems and functionalities, as well as providing maintenance for existing ones.',
              mainTechnologies: [
                BrandStyle.VUE,
                BrandStyle.ANGULAR,
                BrandStyle.NESTJS,
                BrandStyle.JAVA,
              ],
            },
            {
              title: 'Development Assistant - Smart Staff',
              description: 'In March 2022, I was hired as an assistant. I was primarily responsible for the development and maintenance of an input control system and a time tracking system with photo and geolocation features.',
              mainTechnologies: [
                BrandStyle.VUE,
                BrandStyle.ANGULAR,
                BrandStyle.NESTJS,
                BrandStyle.TYPEORM,
              ],
            },
            {
              title: 'Junior Systems Developer III - Smart Staff',
              description: 'From August 2022 until December 2023, I worked as a junior systems developer. Most of the time, I still worked on the same systems, but I also participated in the development of new solutions created by the team.',
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
          title: 'Main Technologies',
        },
        languages: {
          title: 'Languages',
          items: [
            'Portuguese - Native',
            'English - Advanced',
            'Spanish - Advanced',
            'Japanese - Basic',
          ],
        },
        contactInformation: {
          title: 'Contact Information',
          email: 'E-mail',
          phone: 'Phone',
          portfolioDescription: 'To know more about me, check out:',
          portfolioQrCodeAlt: 'link QrCode',
        },
      },
    },
    downloadButtonLabel: 'Download Curriculum',
    printButtonLabel: 'Print Curriculum',
  },

  footer: {
    linkLabel: 'link',
    emailLabel: 'e-mail',
    phoneLabel: 'phone',
  },

  copyToClipboardButton: {
    copyLabel: 'Copy',
    successMessage: 'Successfully copied!',
  },
});
