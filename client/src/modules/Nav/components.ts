// *** TODO: REFACTOR NEEDED ***
import styled, { css, keyframes } from "styled-components";

import colors from "src/modules/shared/UI/colors";
import {
  defaultHover,
  defaultActive,
  defaultClickable,
} from "src/modules/shared/UI/defaults";
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
import Icon from "src/modules/shared/UI/Icon";
import ExternalLink from "src/modules/shared/ExternalLink";
import InternalLink from "src/modules/Routes/InternalLink";

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

const NAV_CONTAINER_PADDING_LEFT_IN_PX_EXTRA_SMALL = 70;
const NAV_CONTAINER_PADDING_LEFT_IN_PX_MEDIUM = 90;

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
  pointer-events: all;
  z-index: 11;
  ${media.medium`
    top: ${FLOAT_BUTTON_MARGIN_IN_PX_MEDIUM}px;
    right: ${FLOAT_BUTTON_MARGIN_IN_PX_MEDIUM}px;
  `};
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NavPages = styled.div`
  margin-top: 100px;
  margin-bottom: 10px;
  ${media.get("extraSmall", "large")`
    overflow-y: auto;
  `}
  ${media.get("extraSmall", "medium", "landscape")`
    margin-top: ${FLOAT_BUTTON_MARGIN_IN_PX_EXTRA_SMALL}px;
  `}
  ${media.large`
    margin-top: 0;
  `}
`;

export const NavLinkText = styled.span`
  display: inline-block;
`;

export const NavLink = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px ${NAV_CONTAINER_PADDING_LEFT_IN_PX_EXTRA_SMALL}px;
  font-weight: 600;
  font-size: 2.4rem;
  user-select: none;
  color: ${colors.yellow};
  text-decoration: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

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

  ${media.medium`
    padding: 10px ${NAV_CONTAINER_PADDING_LEFT_IN_PX_MEDIUM}px;
  `}
`;

export const NavContact = styled.div`
  margin-bottom: ${FLOAT_BUTTON_MARGIN_IN_PX_EXTRA_SMALL}px;
  & ${ExternalLink} {
    display: inline-block;
  }

  & ${NavLink} {
    box-sizing: border-box;
    height: ${FLOAT_BUTTON_SIZE_IN_PX_EXTRA_SMALL}px;
  }
  & ${ExternalLink} + ${ExternalLink} {
    margin-top: 10px;
  }

  ${media.medium`
    margin-bottom: ${FLOAT_BUTTON_MARGIN_IN_PX_MEDIUM}px;

    & ${NavLink} {
      height: ${FLOAT_BUTTON_SIZE_IN_PX_MEDIUM}px;
    }
    & ${ExternalLink} + ${ExternalLink} {
      margin-top: 20px;
    }
  `}
  ${media.large`
    margin-bottom: 0;
  `}
`;

export const NavSocials = styled.div`
  padding-left: ${NAV_CONTAINER_PADDING_LEFT_IN_PX_EXTRA_SMALL}px;
  margin-bottom: 15px;

  ${media.get("extraSmall", "medium", "landscape")`
    display: none;
  `}
  ${media.medium`
    padding-left: ${NAV_CONTAINER_PADDING_LEFT_IN_PX_MEDIUM}px;
    margin-bottom: 25px;
  `}
`;

export const SocialLink = styled(ExternalLink)`
  ${defaultClickable()};
  display: inline-block;
  color: ${colors.yellow};

  &:hover,
  &:focus,
  &:active {
    color: ${colors.lightYellow};
  }

  & + & {
    margin-left: 15px;
  }

  ${media.medium`
    & + & {
      margin-left: 25px;
    }
  `}
`;

export const SocialIcon = styled(Icon)`
  width: 28px;

  ${media.medium`
    width: 35px;
  `}
`;

export const FloatButtonInternalLink = styled(InternalLink)`
  display: block;
  text-decoration: none;
`;

export const FloatButtonExternalLink = styled(ExternalLink)`
  display: block;
  text-decoration: none;
`;

export const FloatButtonsWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: ${140}px;
  z-index: 12;
  padding: ${FLOAT_BUTTON_MARGIN_IN_PX_MEDIUM}px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &
    ${FloatButtonInternalLink}
    + ${FloatButtonInternalLink},
    ${FloatButtonExternalLink}
    + ${FloatButtonExternalLink} {
    margin-top: 30px;
  }
  & ${NavPages}, & ${NavContact} {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;
