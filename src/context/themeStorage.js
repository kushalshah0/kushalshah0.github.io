export const THEME_STORAGE_KEY = 'portfolio-pro-theme';

export const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark';

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;

  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches;
  return prefersDark ? 'dark' : 'light';
};
