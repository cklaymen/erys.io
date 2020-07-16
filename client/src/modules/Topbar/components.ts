import styled, { css } from "styled-components";

import Logo from "src/modules/shared/UI/Logo";
import colors from "src/modules/shared/UI/colors";
import { DEFAULT_TRANSITION_TIME } from "src/modules/shared/UI/config";
import { defaultDropShadow } from "src/modules/shared/UI/defaults";
import media from "src/modules/shared/UI/media";

export const TOPBAR_HEIGHT = "90px";
export const TOPBAR_HEIGTH_MEDIUM = "140px";

interface Props {
  mini?: boolean;
}

export const TopbarWrapper = styled.div<Props>`
  position: fixed;
  padding: 15px;
  box-sizing: border-box;
  width: 100%;
  background-image: linear-gradient(
    ${colors.white},
    ${colors.white} 60px,
    ${colors.white}00 90px
  );
  z-index: 10;

  ${(p) =>
    p.mini &&
    css`
      background-image: linear-gradient(
        ${colors.white},
        ${colors.white} 50%,
        ${colors.white}00 100%
      );
    `}

  ${media.medium`
    padding: 30px;
    background-image: linear-gradient(
      ${colors.white},
      ${colors.white} 80px,
      ${colors.white}00 90px
    );
  `}
`;

export const LogoWrapper = styled.div<Props>`
  width: 100%;
  height: 60px;
  display: flex;
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
