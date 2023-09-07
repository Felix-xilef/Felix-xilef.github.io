/// <reference types="vite/client" />

interface ImportMetaEnv {
  GITHUB_USERNAME: string;

  LINKEDIN_USERNAME: string;

  EMAIL: string;

  PHONE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
