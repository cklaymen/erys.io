import styled, { css } from "styled-components";

import {
  defaultBorderRadius,
  defaultPadding,
  defaultFontSize,
} from "src/modules/shared/UI/defaults";
import colors from "src/modules/shared/UI/colors";

export const MessageWrapper = styled.div<{ author: "erys" | "user" }>`
  ${defaultBorderRadius()}
  ${defaultPadding()}
  ${defaultFontSize()}
  color: ${colors.black};
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
          float: right;
        `};
`;

export const Link = styled.span`
  font-weight: bold;

  &:hover {
    color: ${colors.yellow};
    cursor: pointer;
  }
`;
