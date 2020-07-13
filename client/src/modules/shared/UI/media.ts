import { css } from "styled-components";

import {
  minSizeBreakpointsInPx,
  SizeBreakpoint,
} from "src/modules/shared/sizeBreakpoints";

function getMedia(minBreakpoint: SizeBreakpoint): typeof css {
  const result = (...args: any[]) =>
    css`
      @media only screen and (min-width: ${minSizeBreakpointsInPx[
          minBreakpoint
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
};

export default media;
