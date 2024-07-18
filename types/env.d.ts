/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_USERNAME: string;

  readonly VITE_LINKEDIN_USERNAME: string;

  readonly VITE_UNITY_LEARN_LINK: string;

  readonly VITE_EMAIL: string;

  readonly VITE_PHONE: string;

  readonly VITE_PORTFOLIO_LINK: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
