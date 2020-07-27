import styled, { css } from "styled-components";

import Logo from "src/modules/shared/UI/Logo";
import colors from "src/modules/shared/UI/colors";
import { DEFAULT_TRANSITION_TIME } from "src/modules/shared/UI/config";
import {
  defaultDropShadow,
  defaultDropFadeWhiteShadow,
} from "src/modules/shared/UI/defaults";
import media from "src/modules/shared/UI/media";
import { CONTENT_PADDING_MEDIUM } from "src/modules/App/Layout/const";

export const TOPBAR_HEIGHT = "90px";
export const TOPBAR_HEIGTH_MEDIUM = "140px";

interface Props {
  mini?: boolean;
}

export const TopbarContainer = styled.div<Props>`
  height: 75px;
  position: fixed;
  padding: 15px;
  box-sizing: border-box;
  width: 100%;
  z-index: 10;
  background-color: ${colors.white};
  transition: padding ${DEFAULT_TRANSITION_TIME};

  ${(p) =>
    p.mini &&
    css`
      ${defaultDropFadeWhiteShadow()};
      height: 45px;
    `}

  ${media.medium<Props>`
    height: 110px;
    ${(p) =>
      p.mini
        ? css`
            height: 70px;
            padding: 30px;
          `
        : css`
            padding: 30px ${CONTENT_PADDING_MEDIUM[1]} 30px
              ${CONTENT_PADDING_MEDIUM[3]};
          `}
  `};
`;

export const TopbarWrapper = styled.div`
  height: ${TOPBAR_HEIGHT};
  ${media.medium`
    height: ${TOPBAR_HEIGTH_MEDIUM};
  `}
`;

export const LogoWrapper = styled.div<Props>`
  width: 100%;
  height: 60px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 4px;
  border-radius: 50%;
  transition: border-radius ${DEFAULT_TRANSITION_TIME},
    width ${DEFAULT_TRANSITION_TIME}, border ${DEFAULT_TRANSITION_TIME},
    background-color ${DEFAULT_TRANSITION_TIME},
    box-shadow ${DEFAULT_TRANSITION_TIME};

  ${(p) =>
    p.mini &&
    css`
      width: 60px;
      border: 1px solid ${colors.lightGray};
      background-color: ${colors.white};
      ${defaultDropShadow()}

      ${media.medium`
        width: 80px;
      `}
    `}

  ${media.medium`
    height: 80px;
  `}
`;

export const StyledLogo = styled(Logo)`
  max-width: 100%;

  ${media.medium`
    height: 85%;
  `}
`;
