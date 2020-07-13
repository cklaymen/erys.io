import { css } from "styled-components";

const minBreakpoints = {
  small: "576px",
  medium: "768px",
  large: "992px",
  extraLarge: "1200px",
};

export type MediaBreakpoint = keyof typeof minBreakpoints;

function getMedia(minBreakpoint: MediaBreakpoint): typeof css {
  const result = (...args: any[]) =>
    css`
      @media (min-width: ${minBreakpoints[minBreakpoint]}) {
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
