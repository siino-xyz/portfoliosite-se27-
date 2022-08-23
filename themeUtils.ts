export const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1200,
};

export const mediaQueries = {
  tablet: `screen and (min-width: ${breakpoints.tablet}px)`,
  desktop: `screen and (min-width: ${breakpoints.desktop}px)`,
};

export type Breakpoint = keyof typeof breakpoints;
