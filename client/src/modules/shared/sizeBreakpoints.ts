export const minSizeBreakpointsInPx = {
  extraSmall: 0,
  small: 576,
  medium: 768,
  large: 992,
  extraLarge: 1200,
};

export type SizeBreakpoint = keyof typeof minSizeBreakpointsInPx;
