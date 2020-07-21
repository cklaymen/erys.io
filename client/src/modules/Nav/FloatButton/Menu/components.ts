import styled, { css } from "styled-components";

import {
  FloatButtonWrapper,
  FloatButtonIcon,
} from "src/modules/Nav/FloatButton/components";
import { DEFAULT_TRANSITION_TIME } from "src/modules/shared/UI/config";

interface MenuIconProps {
  icon: "Menu" | "Close";
}

export const MenuFloatButtonWrapper = styled(FloatButtonWrapper)``;

export const MenuIcon = styled(FloatButtonIcon).attrs(() => ({
  type: "Menu",
}))<MenuIconProps>`
  & rect {
    transition: all ${DEFAULT_TRANSITION_TIME};
  }
  ${(p) =>
    p.icon === "Close"
      ? css`
          rect:nth-child(1) {
            x: 5.82843;
            y: 3;
            transform: rotate(45deg);
            transform-origin: 5.82843px 3px;
          }
          rect:nth-child(2) {
            x: 11;
            y: 11;
            width: 4px;
            height: 4px;
          }
          rect:nth-child(3) {
            x: 3;
            y: 22.799;
            transform: rotate(-45deg);
            transform-origin: 3px 22.799px;
          }
        `
      : css``}
`;
