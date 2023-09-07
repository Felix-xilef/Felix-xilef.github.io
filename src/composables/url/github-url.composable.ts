export function useGithubUrl() {
  return `https://github.com/${import.meta.env.VITE_GITHUB_USERNAME}`;
}
