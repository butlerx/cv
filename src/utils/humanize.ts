export const humanize = (str: string): string => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

export const trimReadme = (readme: string, length: number): string =>
  `${readme.substring(0, length)}...`;
