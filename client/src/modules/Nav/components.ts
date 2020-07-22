import styled, { css, keyframes } from "styled-components";

import colors from "src/modules/shared/UI/colors";
import { defaultHover, defaultActive } from "src/modules/shared/UI/defaults";
import FloatButton from "src/modules/Nav/FloatButton";
import { DEFAULT_TRANSITION_TIME } from "src/modules/shared/UI/config";
import {
  FLOAT_BUTTON_SIZE_IN_PX_EXTRA_SMALL,
  floatButtonHoverStyle,
  floatButtonFocusStyle,
  floatButtonActiveStyle,
  FLOAT_BUTTON_SIZE_IN_PX_MEDIUM,
} from "src/modules/Nav/FloatButton/components";
import MenuFloatButton from "src/modules/Nav/FloatButton/Menu";
import media from "src/modules/shared/UI/media";

interface NavWrapperProps {
  show: boolean;
}

const NAV_WIDTH_IN_PX_EXTRA_SMALL = 320;
const NAV_WIDTH_IN_PX_MEDIUM = 420;
const NAV_WIDTH_EXTRA_SMALL = `min(${NAV_WIDTH_IN_PX_EXTRA_SMALL}px, 100vw)`;
const NAV_WIDTH_MEDIUM = `min(${NAV_WIDTH_IN_PX_MEDIUM}px, 100vw)`;

const NAV_RIGHT_HIDDEN_EXTRA_SMALL = `max(-${
  NAV_WIDTH_IN_PX_EXTRA_SMALL - FLOAT_BUTTON_SIZE_IN_PX_EXTRA_SMALL / 2
}px, -100vw)`;
const NAV_RIGHT_HIDDEN_MEDIUM = `max(-${
  NAV_WIDTH_IN_PX_MEDIUM - FLOAT_BUTTON_SIZE_IN_PX_MEDIUM / 2
}px, -100vw)`;

const FLOAT_BUTTON_MARGIN_IN_PX_EXTRA_SMALL = 15;
const FLOAT_BUTTON_MARGIN_IN_PX_MEDIUM = 30;

export const NAV_FLOAT_BUTTON_BAR_WIDTH_IN_PX_EXTRA_SMALL =
  FLOAT_BUTTON_SIZE_IN_PX_EXTRA_SMALL +
  2 * FLOAT_BUTTON_MARGIN_IN_PX_EXTRA_SMALL;
export const NAV_FLOAT_BUTTON_BAR_WIDTH_IN_PX_MEDIUM =
  FLOAT_BUTTON_SIZE_IN_PX_MEDIUM + 2 * FLOAT_BUTTON_MARGIN_IN_PX_MEDIUM;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const DimBackground = styled.div<NavWrapperProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: all;
  background-color: ${colors.black}80;
  animation: ${fadeIn} ${DEFAULT_TRANSITION_TIME};
`;

export const NavLinkFloatButton = styled(FloatButton)`
  position: absolute;
`;

export const StyledMenuFloatButton = styled(MenuFloatButton)`
  position: fixed;
  top: ${FLOAT_BUTTON_MARGIN_IN_PX_EXTRA_SMALL}px;
  right: ${FLOAT_BUTTON_MARGIN_IN_PX_EXTRA_SMALL}px;
  ${media.medium`
    top: ${FLOAT_BUTTON_MARGIN_IN_PX_MEDIUM}px;
    right: ${FLOAT_BUTTON_MARGIN_IN_PX_MEDIUM}px;
  `}
`;

export const NavWrapper = styled.nav<NavWrapperProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 11;
  box-sizing: border-box;
  padding-left: ${FLOAT_BUTTON_SIZE_IN_PX_EXTRA_SMALL / 2}px;
  color: ${colors.yellow};
  width: ${NAV_WIDTH_EXTRA_SMALL};
  transition: right ${DEFAULT_TRANSITION_TIME};
  pointer-events: none;

  ${(p) =>
    p.show
      ? css`
          right: 0;
          & ${NavLinkFloatButton} {
            left: -${FLOAT_BUTTON_SIZE_IN_PX_EXTRA_SMALL / 2}px;
            box-shadow: none;
          }
          & ${StyledMenuFloatButton} {
            box-shadow: none;
          }
          & ${NavContainer} {
            box-shadow: 0 0 30px 0 ${colors.black};
          }

          ${media.medium`
            & ${NavLinkFloatButton} {
              left: -${FLOAT_BUTTON_SIZE_IN_PX_MEDIUM / 2}px;
            }
          `}
        `
      : css`
          right: ${NAV_RIGHT_HIDDEN_EXTRA_SMALL};
          & ${NavLinkFloatButton} {
            left: -${FLOAT_BUTTON_SIZE_IN_PX_EXTRA_SMALL + FLOAT_BUTTON_MARGIN_IN_PX_EXTRA_SMALL}px;
          }

          ${media.medium`
            right: ${NAV_RIGHT_HIDDEN_MEDIUM};
            & ${NavLinkFloatButton} {
              left: -${
                FLOAT_BUTTON_SIZE_IN_PX_MEDIUM +
                FLOAT_BUTTON_MARGIN_IN_PX_MEDIUM
              }px;
            }
          `}
        `}
  ${media.medium`
    width: ${NAV_WIDTH_MEDIUM};
    padding-left: ${FLOAT_BUTTON_SIZE_IN_PX_MEDIUM / 2}px;
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
  color: ${colors.yellow};
  text-decoration: none;

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
  bottom: ${FLOAT_BUTTON_MARGIN_IN_PX_EXTRA_SMALL}px;

  & ${NavLink} {
    box-sizing: border-box;
    height: ${FLOAT_BUTTON_SIZE_IN_PX_EXTRA_SMALL}px;
  }
  & ${NavLink} + ${NavLink} {
    margin-top: 10px;
  }

  ${media.medium`
    bottom: ${FLOAT_BUTTON_MARGIN_IN_PX_MEDIUM}px;

    & ${NavLink} {
      height: ${FLOAT_BUTTON_SIZE_IN_PX_MEDIUM}px;
    }
    & ${NavLink} + ${NavLink} {
      margin-top: 20px;
    }
  `}
`;
