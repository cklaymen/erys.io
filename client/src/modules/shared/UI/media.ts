import { css } from "styled-components";

const settings = {
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1024px)",
};

export type MediaSetting = keyof typeof settings;

function getMedia(setting: MediaSetting): typeof css {
  const result = (...args: any[]) =>
    css`
      @media ${settings[setting]} {
        ${css(...(args as [any, ...any[]]))};
      }
    `;
  return result;
}

const media = {
  tablet: getMedia("tablet"),
  desktop: getMedia("desktop"),
};

export default media;
