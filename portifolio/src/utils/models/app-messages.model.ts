export interface AppMessages {
  home: {
    presentation: {
      title: string;
      description: string;
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
