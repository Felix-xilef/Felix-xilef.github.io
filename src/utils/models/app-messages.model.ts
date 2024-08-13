import type { BrandStyle } from "../enums/brand-color.enum";

type ProfessionalExperienceItem<T extends ChangeOfPosition<any>[] | undefined = undefined> = {
  title: string;
  enterprise: string;
  startDate: string;
  endDate?: string;
  current?: string;
  description: string;
} & (
  T extends ChangeOfPosition<any>[] ?
    {
      changesOfPosition: T;
    } :
  {
    changesOfPosition?: T;
  }
);

type ChangeOfPosition<EndDateType extends string | any = any> = {
  positionName: string;
  startDate: string;
  description: string;
} & (
  EndDateType extends string ?
    {
      endDate: EndDateType;
      current: string;
    } :
  {
    endDate?: EndDateType;
    current?: string;
  }
);

export interface AppMessages {
  appBar: {
    backBtnLabel: string;
    curriculumBtnLabel: string;
    language: string;
  };

  home: {
    presentation: {
      title: string;
      description: string;

      profilePictureAlt: string;
    };

    education: {
      college: {
        title: string;
        course: string;
        institution: string;
        graduation: string;
      };

      postDegree: {
        title: string;
        course: string;
        institution: string;
        graduation: string;
      };

      coursesAndCertifications: {
        title: string;
        items: Record<
          'linuxEssentials' | 'ctfl' | 'unityJuniorProgrammer',
          {
            name: string;
            institution: string;
            conclusion: string;
          }
        >;
      };

      languages: {
        title: string;
        items: Record<
          'portuguese' | 'english' | 'spanish' | 'japanese',
          {
            name: string;
            level: string;
          }
        >;
      };
    };

    professionalExperience: {
      title: string;
      items: [
        ProfessionalExperienceItem,
        ProfessionalExperienceItem<[
          ChangeOfPosition,
          ChangeOfPosition,
        ]>,
      ];
    };

    projects: {
      title: string;
      hiddenExploreButton: string;
      smallerExploreButton: string;
      items: Record<
        'chessGame' | 'iconComponent',
        {
          title: string;
          description: string;
        }
      >;
    };

    knowledge: {
      title: string;
      languages: string;
      others: string;
    };
  };

  curriculum: {
    filename: string;
    sheet: {
      head: {
        headingSubtitle: string;
      };
      body: {
        presentation: {
          title: string;
          description: string;
        };
        college: {
          title: string;
          course: string;
          graduation: string;
        };
        postDegree: {
          title: string;
          course: string;
          graduation: string;
        };
        coursesAndCertifications: {
          title: string;
          items: {
            title: string;
            conclusion: string;
          }[];
        };
        experiences: {
          title: string;
          items: {
            title: string;
            description: string;
            mainTechnologies?: ValueOf<typeof BrandStyle>[];
          }[];
        };
        mainTechnologies: {
          title: string;
        };
        languages: {
          title: string;
          items: string[];
        };
        contactInformation: {
          title: string;
          email: string;
          phone: string;
          portfolioDescription: string;
          portfolioQrCodeAlt: string;
        };
      };
    };
    downloadButtonLabel: string;
    printButtonLabel: string;
  };

  footer: {
    linkLabel: string;
    emailLabel: string;
    phoneLabel: string;
  };

  copyToClipboardButton: {
    copyLabel: string;
    successMessage: string;
  };
}

export class AppMessages {
  constructor(
    messages: AppMessages,
  ) {
    Object.assign(
      this,
      messages,
    );
  }
}
