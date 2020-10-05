import { css } from "styled-components";

import { minSizeBreakpointsInPx, SizeBreakpoint } from "../sizeBreakpoints";

interface MediaProperties {
  "min-width": string;
  "max-width"?: string;
  orientation?: "portrait" | "landscape";
}

function getMedia(
  fromBreakpoint: SizeBreakpoint,
  toBreakpoint?: SizeBreakpoint,
  orientation?: "portrait" | "landscape"
): typeof css {
  const properties: MediaProperties = {
    "min-width": `${minSizeBreakpointsInPx[fromBreakpoint]}px`,
  };
  if (toBreakpoint) {
    properties["max-width"] = `${minSizeBreakpointsInPx[toBreakpoint] - 1}px`;
  }
  if (orientation) {
    properties.orientation = orientation;
  }
  const propertiesKeys = Object.keys(properties) as Array<
    keyof MediaProperties
  >;
  const mediaString = propertiesKeys
    .map((it) => `(${it}: ${properties[it]})`)
    .join(" and ");

  const result = (...args: any[]) => css`
    @media only screen and ${mediaString} {
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
