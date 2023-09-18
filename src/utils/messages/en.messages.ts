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
