import styled from "styled-components";

import {
  CONTENT_PADDING_EXTRA_SMALL,
  CONTENT_PADDING_MEDIUM,
  CONTENT_PADDING_LARGE,
} from "src/modules/App/Layout/const";
import media from "src/modules/shared/UI/media";
import Logo from "src/modules/shared/UI/Logo";
import colors from "src/modules/shared/UI/colors";
import {
  defaultDropFadeWhiteShadow,
  defaultAppearanceAnimation,
  defaultClickable,
} from "src/modules/shared/UI/defaults";

export const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentWrapper = styled.div`
  flex: auto;
  box-sizing: border-box;
  width: 100%;
  padding: ${CONTENT_PADDING_EXTRA_SMALL};
  display: flex;
  flex-direction: column;
  ${media.medium`
    padding: ${CONTENT_PADDING_MEDIUM.join(" ")};
  `}
  ${media.large`
    padding: ${CONTENT_PADDING_LARGE.join(" ")};
    flex-direction: row;
    align-items: flex-start;
    justify-content: middle;
    margin: 0 auto;
    position: relative;
  `}
`;

export const SideWrapper = styled.div`
  ${media.large`
    position: sticky;
    overflow-y: auto;
    scroll-behavior: smooth;
    top: ${CONTENT_PADDING_LARGE[0]};
    max-height: calc(100vh - ${CONTENT_PADDING_LARGE[0]} - ${CONTENT_PADDING_LARGE[2]});
    width: 50%;
  `}
`;

export const SideContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${media.large`
    padding-right: 3vw;
    margin-left: auto;
    margin-right: 0;
    box-sizing: border-box;
    max-width: 600px;
  `}
`;

export const LogoWrapper = styled.div`
  ${defaultDropFadeWhiteShadow()};
  ${defaultAppearanceAnimation()}
  position: sticky;
  top: 0;
  width: 100%;
  margin: 15vh auto 30px auto;
  padding: 0 30px 30px 110px;
  box-sizing: border-box;
  text-align: center;
  background-color: ${colors.white};
`;

export const StyledLogo = styled(Logo)`
  ${defaultClickable()};
  width: 80%;
  height: auto;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  justify-content: space-between;

  ${SideWrapper} + & {
    margin-top: 40px;
  }

  ${media.large`
    width: 50%;
  `}
`;

export const ContentMainWrapper = styled.div`
  &::after {
    display: block;
    content: "";
    height: 30px;
  }

  ${media.large`
    max-width: 600px;
    margin-left: 3vw;
  `}
`;
