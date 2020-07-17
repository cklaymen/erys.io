import { css } from "styled-components";

import {
  minSizeBreakpointsInPx,
  SizeBreakpoint,
} from "src/modules/shared/sizeBreakpoints";

function getMedia(
  fromBreakpoint: SizeBreakpoint,
  toBreakpoint?: SizeBreakpoint
): typeof css {
  const result = (...args: any[]) =>
    toBreakpoint
      ? css`
          @media only screen and (min-width: ${minSizeBreakpointsInPx[
              fromBreakpoint
            ]}px) and (max-width: ${minSizeBreakpointsInPx[toBreakpoint] -
            1}px) {
            ${css(...(args as [any, ...any[]]))};
          }
        `
      : css`
          @media only screen and (min-width: ${minSizeBreakpointsInPx[
              fromBreakpoint
            ]}px) {
            ${css(...(args as [any, ...any[]]))};
          }
        `;
  return result;
}

const media = {
  small: getMedia("small"),
  medium: getMedia("medium"),
  large: getMedia("large"),
  extraLarge: getMedia("extraLarge"),
  get: getMedia,
};

export default media;
