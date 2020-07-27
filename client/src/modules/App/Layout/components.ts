import styled from "styled-components";

import {
  CONTENT_PADDING_EXTRA_SMALL,
  CONTENT_PADDING_MEDIUM,
  CONTENT_PADDING_LARGE,
} from "src/modules/App/Layout/const";
import media from "src/modules/shared/UI/media";
import Logo from "src/modules/shared/UI/Logo";
import colors from "src/modules/shared/UI/colors";
import { defaultDropFadeWhiteShadow } from "src/modules/shared/UI/defaults";

export const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentWrapper = styled.div`
  padding: ${CONTENT_PADDING_EXTRA_SMALL};
  ${media.medium`
    padding: ${CONTENT_PADDING_MEDIUM.join(" ")};
  `}
  ${media.large`
    padding: ${CONTENT_PADDING_LARGE.join(" ")};
    display: flex;
    align-items: flex-start;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
  `}
`;

export const SideWrapper = styled.div`
  /* Reverse flex for auto scroll to bottom */
  display: flex;
  flex-direction: column-reverse;
  ${media.large`
    position: sticky;
    overflow-y: auto;
    top: ${CONTENT_PADDING_LARGE[0]};
    max-height: calc(100vh - ${CONTENT_PADDING_LARGE[0]} - ${CONTENT_PADDING_LARGE[2]});
    width: 50%;
    padding-right: 3vw;
  `}
`;

export const SideContentWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex-shrink: 0;
`;

export const LogoWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  margin: 15vh auto 6vh auto;
  padding: 0 30px 30px 110px;
  box-sizing: border-box;
  text-align: center;
  background-color: ${colors.white};
  ${defaultDropFadeWhiteShadow()};
`;

export const StyledLogo = styled(Logo)`
  width: 80%;
`;

export const ContentMainWrapper = styled.div`
  &::after {
    display: block;
    content: "";
    height: 30px;
  }

  ${media.large`
    width: 50%;
    margin-left: 3vw;
  `}
`;
