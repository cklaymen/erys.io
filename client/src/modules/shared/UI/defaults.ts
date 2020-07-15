import { css } from "styled-components";

import media from "src/modules/shared/UI/media";

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
