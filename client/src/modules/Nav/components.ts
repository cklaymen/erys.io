import styled, { css } from "styled-components";

import colors from "src/modules/shared/UI/colors";
import { defaultHover, defaultActive } from "src/modules/shared/UI/defaults";
import FloatButton from "src/modules/Nav/FloatButton";
import { DEFAULT_TRANSITION_TIME } from "src/modules/shared/UI/config";
import {
  FLOAT_BUTTON_SIZE_EXTRA_SMALL,
  floatButtonHoverStyle,
  floatButtonFocusStyle,
  floatButtonActiveStyle,
} from "src/modules/Nav/FloatButton/components";
import MenuFloatButton from "src/modules/Nav/FloatButton/Menu";

interface NavWrapperProps {
  show: boolean;
}

const NAV_WIDTH = "min(320px, 100vw)";

export const NavLinkFloatButton = styled(FloatButton)`
  position: absolute;
`;

export const StyledMenuFloatButton = styled(MenuFloatButton)`
  position: fixed;
  top: 15px;
  right: 15px;
`;

export const NavWrapper = styled.nav<NavWrapperProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 11;
  box-sizing: border-box;
  padding-left: 30px;
  color: ${colors.yellow};
  width: ${NAV_WIDTH};
  transition: right ${DEFAULT_TRANSITION_TIME};
  pointer-events: none;

  ${(p) =>
    p.show
      ? css`
          right: 0;
          & ${NavLinkFloatButton} {
            left: -30px;
            box-shadow: none;
          }
          & ${StyledMenuFloatButton} {
            box-shadow: none;
          }
        `
      : css`
          right: max(-290px, -100vw);
          & ${NavLinkFloatButton} {
            left: -75px;
          }
        `}
`;

export const NavContainer = styled.div`
  background-color: ${colors.black};
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: all;
`;

export const NavPages = styled.div`
  margin-top: 100px;
`;

export const NavLinkText = styled.span`
  display: inline-block;
`;

export const NavLink = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 70px;
  font-weight: 600;
  font-size: 2.4rem;
  user-select: none;

  &:hover {
    cursor: pointer;
  }

  & ${NavLinkText} {
    transition: all ${DEFAULT_TRANSITION_TIME};
  }
  &:hover ${NavLinkText} {
    ${defaultHover()};
    -webkit-text-stroke: 1px ${colors.lightYellow};
    color: ${colors.lightYellow};
  }
  &:active ${NavLinkText} {
    ${defaultActive()};
  }
  &:hover ${NavLinkFloatButton} {
    ${floatButtonHoverStyle()};
  }
  &:focus ${NavLinkFloatButton} {
    ${floatButtonFocusStyle()};
  }
  &:active ${NavLinkFloatButton} {
    ${floatButtonActiveStyle()};
  }
`;

export const NavContact = styled.div`
  position: absolute;
  bottom: 15px;

  & ${NavLink} {
    box-sizing: border-box;
    height: ${FLOAT_BUTTON_SIZE_EXTRA_SMALL};
  }
  & ${NavLink} + ${NavLink} {
    margin-top: 10px;
  }
`;
