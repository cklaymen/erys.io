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
            transform: rotate(45deg) translateX(5.82843px);
            transform-origin: 5.82843px 3px;
          }
          rect:nth-child(2) {
            transform: translateX(12px);
            width: 4px;
            height: 4px;
          }
          rect:nth-child(3) {
            transform: rotate(-45deg) translate(3px, 1.799px);
            transform-origin: 3px 22.799px;
          }
        `
      : css``}
`;
