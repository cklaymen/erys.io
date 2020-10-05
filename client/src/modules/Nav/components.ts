// *** TODO: REFACTOR NEEDED ***
import styled, { css, keyframes } from "styled-components";

import colors from "src/modules/shared/UI/colors";
import {
  defaultHover,
  defaultActive,
  defaultClickable,
  defaultAppearanceAnimationSequence,
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

const NAV_RIGHT_HIDDEN_IN_PX_EXTRA_SMALL = -(
  NAV_WIDTH_IN_PX_EXTRA_SMALL -
  FLOAT_BUTTON_SIZE_IN_PX_EXTRA_SMALL / 2
);
const NAV_RIGHT_HIDDEN_IN_PX_MEDIUM = -(
  NAV_WIDTH_IN_PX_MEDIUM -
  FLOAT_BUTTON_SIZE_IN_PX_MEDIUM / 2
);

export const FLOAT_BUTTON_MARGIN_IN_PX_EXTRA_SMALL = 15;
export const FLOAT_BUTTON_MARGIN_IN_PX_MEDIUM = 30;

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
  ${defaultAppearanceAnimationSequence(1)}
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

const START_APPEARANCE_ANIMATION_NAVBAR_ORDINAL_NUMBER = 1;

export const NavWrapper = styled.nav<NavWrapperProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 11;
  box-sizing: border-box;
  padding-left: ${FLOAT_BUTTON_SIZE_IN_PX_EXTRA_SMALL / 2}px;
  color: ${colors.yellow};
  width: ${NAV_WIDTH_IN_PX_EXTRA_SMALL}px;
  transition: right ${DEFAULT_TRANSITION_TIME},
    max-width ${DEFAULT_TRANSITION_TIME};
  pointer-events: none;

  ${(p) =>
    p.show
      ? css`
          right: 0;
          max-width: 100vw;
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

          & ${FloatButtonInternalLink}:nth-child(1) ${NavLink} {
            ${defaultAppearanceAnimationSequence(
              START_APPEARANCE_ANIMATION_NAVBAR_ORDINAL_NUMBER + 1
            )}
          }
          & ${FloatButtonInternalLink}:nth-child(2) ${NavLink} {
            ${defaultAppearanceAnimationSequence(
              START_APPEARANCE_ANIMATION_NAVBAR_ORDINAL_NUMBER + 2
            )}
          }
          & ${FloatButtonInternalLink}:nth-child(3) ${NavLink} {
            ${defaultAppearanceAnimationSequence(
              START_APPEARANCE_ANIMATION_NAVBAR_ORDINAL_NUMBER + 3
            )}
          }
          & ${FloatButtonInternalLink}:nth-child(4) ${NavLink} {
            ${defaultAppearanceAnimationSequence(
              START_APPEARANCE_ANIMATION_NAVBAR_ORDINAL_NUMBER + 4
            )}
          }

          & ${SocialLink}:nth-child(1) {
            ${defaultAppearanceAnimationSequence(
              START_APPEARANCE_ANIMATION_NAVBAR_ORDINAL_NUMBER + 5
            )}
          }
          & ${SocialLink}:nth-child(2) {
            ${defaultAppearanceAnimationSequence(
              START_APPEARANCE_ANIMATION_NAVBAR_ORDINAL_NUMBER + 4
            )}
          }
          & ${SocialLink}:nth-child(3) {
            ${defaultAppearanceAnimationSequence(
              START_APPEARANCE_ANIMATION_NAVBAR_ORDINAL_NUMBER + 3
            )}
          }

          & ${ExternalLink}:nth-child(2) ${NavLinkText} {
            ${defaultAppearanceAnimationSequence(
              START_APPEARANCE_ANIMATION_NAVBAR_ORDINAL_NUMBER + 2
            )}
          }
          & ${ExternalLink}:nth-child(3) ${NavLinkText} {
            ${defaultAppearanceAnimationSequence(
              START_APPEARANCE_ANIMATION_NAVBAR_ORDINAL_NUMBER + 1
            )}
          }

          ${media.medium`
            & ${NavLinkFloatButton} {
              left: -${FLOAT_BUTTON_SIZE_IN_PX_MEDIUM / 2}px;
            }
          `}
        `
      : css`
          right: ${NAV_RIGHT_HIDDEN_IN_PX_EXTRA_SMALL}px;
          max-width: ${NAV_WIDTH_IN_PX_EXTRA_SMALL}px;
          & ${NavLinkFloatButton} {
            left: -${FLOAT_BUTTON_SIZE_IN_PX_EXTRA_SMALL + FLOAT_BUTTON_MARGIN_IN_PX_EXTRA_SMALL}px;
          }

          ${media.medium`
            right: ${NAV_RIGHT_HIDDEN_IN_PX_MEDIUM}px;
            max-width: ${NAV_WIDTH_IN_PX_MEDIUM}px;

            & ${NavLinkFloatButton} {
              left: -${
                FLOAT_BUTTON_SIZE_IN_PX_MEDIUM +
                FLOAT_BUTTON_MARGIN_IN_PX_MEDIUM
              }px;
            }
          `}
        `}
  ${media.medium`
    width: ${NAV_WIDTH_IN_PX_MEDIUM}px;
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
  font-size: 2.2rem;
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
  & ${ExternalLink}:nth-child(2) ${NavLinkFloatButton} {
    ${defaultAppearanceAnimationSequence(2)}
  }
  & ${ExternalLink}:nth-child(3) ${NavLinkFloatButton} {
    ${defaultAppearanceAnimationSequence(3)}
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
  &:nth-child(1) {
    ${defaultAppearanceAnimationSequence()};
  }
  &:nth-child(2) {
    ${defaultAppearanceAnimationSequence(1)};
  }
  &:nth-child(3) {
    ${defaultAppearanceAnimationSequence(2)};
  }
  &:nth-child(4) {
    ${defaultAppearanceAnimationSequence(3)};
  }
`;

export const FloatButtonExternalLink = styled(ExternalLink)`
  display: block;
  text-decoration: none;
  &:nth-child(1) {
    ${defaultAppearanceAnimationSequence(3)};
  }
  &:nth-child(2) {
    ${defaultAppearanceAnimationSequence(4)};
  }
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
  pointer-events: none;

  & ${FloatButtonInternalLink}, & ${FloatButtonExternalLink} {
    pointer-events: all;
  }

  &
    ${FloatButtonInternalLink}
    + ${FloatButtonInternalLink},
    ${FloatButtonExternalLink}
    + ${FloatButtonExternalLink} {
    margin-top: 25px;
  }
  & ${NavPages}, & ${NavContact} {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;
