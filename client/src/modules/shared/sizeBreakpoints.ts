export const minSizeBreakpointsInPx = {
  small: 576,
  medium: 768,
  large: 992,
  extraLarge: 1200,
};

export type SizeBreakpoint = keyof typeof minSizeBreakpointsInPx;
