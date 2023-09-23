import { BrandStyle } from "../enums/brand-color.enum";
import { AppMessages } from "../models/app-messages.model";

export default new AppMessages({
  appBar: {
    language: 'Language',
  },

  home: {
    presentation: {
      title: 'Hello, I am Felix!',
      description: 'I hold a degree in System Analysis and Development from Fatec São Caetano do Sul, and currently, I am immersed in the world of FullStack development.',

      profilePictureAlt: 'Profile Photo',
    },

    education: {
      college: {
        title: 'Higher Education',
        course: 'System Analysis and Development',
        institution: 'Fatec São Caetano do Sul - Antônio Russo',
        graduation: 'Graduated in Dec. 2021',
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
              endDate: 'Present',
              current: 'Current Position',
              description: 'I currently work as a Junior Systems Developer. Most of the time, I still work on the same systems, but I also participate in the development of new solutions created by the team.',
            },
          ],
        },
      ],
    },

    knowledge: {
      title: 'Knowledge & Skills',
      moreKnowledgebleBoxTitle: 'I have more experience and knowledge',
      lessKnowledgebleBoxTitle: 'I use less often or have less knowledge',
    },
  },

  curriculum: {
    sheet: {
      head: {
        headingSubtitle: 'System Analysis and Development - Fatec São Caetano do Sul',
      },
      body: {
        presentation: {
          title: 'Introduction',
          description: 'Hello, my name is Felix and I am a systems developer in search of new experiences. I have knowledge, mainly, in FullStack development with modern technologies such as Vue, Angular, NestJS e TypeORM.',
        },
        college: {
          title: 'Higher Education',
          course: 'System Analysis and Development - Fatec São Caetano do Sul',
          graduation: 'Graduated in Dec. 2021',
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
              description: 'Since August 2022, I have been working as a junior systems developer. Most of the time, I still work on the same systems, but I also participate in the development of new solutions created by the team.',
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
