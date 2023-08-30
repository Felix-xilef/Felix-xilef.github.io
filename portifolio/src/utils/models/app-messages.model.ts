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

type ChangeOfPosition<EndDateType extends string | undefined = undefined> = {
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
        graduation: string;
      };

      coursesAndCertifications: {
        title: string;
        items: Record<
          'linuxEssentials' | 'ctfl',
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
          ChangeOfPosition<string>,
        ]>,
      ];
    };

    knowledge: {
      title: string;
      moreKnowledgebleBoxTitle: string;
      lessKnowledgebleBoxTitle: string;
    };
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
