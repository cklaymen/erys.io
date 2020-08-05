import { css, keyframes } from "styled-components";

import media from "src/modules/shared/UI/media";
import colors from "src/modules/shared/UI/colors";
import {
  DEFAULT_TRANSITION_TIME,
  DEFAULT_TRANSITION_TIME_IN_MS,
} from "src/modules/shared/UI/config";

export const defaultBorderRadius = () =>
  css`
    border-radius: 20px;
    ${media.medium`
      border-radius: 30px;
    `}
  `;

export const defaultPadding = () =>
  css`
    padding: 10px 15px;
    ${media.medium`
      padding: 15px 25px;
    `}
  `;

export const defaultDropShadow = () => css`
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const defaultDropFadeWhiteShadow = () => css`
  box-shadow: 0 0 15px 15px ${colors.white};
`;

export const defaultHover = () => css`
  transform: scale(1.05);
`;

export const defaultActive = () => css`
  transform: scale(0.95);
  opacity: 0.9;
`;

export const defaultClickable = () => css`
  transition: all ${DEFAULT_TRANSITION_TIME};
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;

  &:hover {
    ${defaultHover()};
  }

  &:active {
    ${defaultActive()};
  }
`;

export const defaultBoxFocus = (color: string = colors.yellow) => css`
  &:focus {
    outline: none;
    box-shadow: 0 0 5px ${color};
  }
`;

const appearanceKeyframes = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

export const defaultAppearanceAnimation = (delayInMs: number = 0) => css`
  animation: ${appearanceKeyframes} ${DEFAULT_TRANSITION_TIME};
  animation-delay: ${delayInMs}ms;
  animation-fill-mode: backwards;
`;

const APPEARANCE_ANIMATION_SEQUENCE_INTERVAL_IN_MS =
  DEFAULT_TRANSITION_TIME_IN_MS / 2;

export const defaultAppearanceAnimationSequence = (ordinalNumber: number = 1) =>
  defaultAppearanceAnimation(
    (ordinalNumber - 1) * APPEARANCE_ANIMATION_SEQUENCE_INTERVAL_IN_MS
  );

export const defaultTextLink = () => css`
  font-weight: bold;

  &:hover {
    color: ${colors.yellow};
    cursor: pointer;
  }
`;
