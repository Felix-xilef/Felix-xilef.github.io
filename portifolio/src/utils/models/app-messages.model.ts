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
