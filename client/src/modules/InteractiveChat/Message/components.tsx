import styled, { css, keyframes } from "styled-components";

import {
  defaultBorderRadius,
  defaultPadding,
  defaultAppearanceAnimation,
} from "src/modules/shared/UI/defaults";
import colors from "src/modules/shared/UI/colors";
import { WRITING_MESSAGE_TIME_IN_MS } from "src/modules/InteractiveChat/Message/config";

const writingMessageAppearance = keyframes`
  0% {
    transform: scale(0);
  }
  16% {
    transform: scale(1);
  }
`;

export const MessageWrapper = styled.div<{
  author: "erys" | "user";
  isLoading: boolean;
}>`
  ${(p) =>
    p.isLoading
      ? css`
          animation: ${writingMessageAppearance} ${WRITING_MESSAGE_TIME_IN_MS}ms;
        `
      : css`
          ${defaultAppearanceAnimation()};
        `}
  ${defaultBorderRadius()}
  ${defaultPadding()}
  display: inline-block;
  & + & {
    margin-top: 15px;
  }
  ${(p) =>
    p.author === "erys"
      ? css`
          margin-right: 45px;
          background-color: ${colors.lightGray};
          align-self: flex-start;
        `
      : css`
          align-self: flex-end;
          margin-left: 45px;
          background-color: ${colors.yellow};
        `};
`;

export const Link = styled.span`
  font-weight: bold;

  &:hover {
    color: ${colors.yellow};
    cursor: pointer;
  }
`;
