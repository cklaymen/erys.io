import React, { FC, useMemo, useRef, RefObject, ReactElement } from "react";

import {
  LayoutWrapper,
  ContentWrapper,
  ContentMainWrapper,
  SideContentWrapper,
  SideWrapper,
  StyledLogo,
  LogoWrapper,
  MainWrapper,
} from "components/Layout/components";
import ScrollProvider from "components/Topbar/useScroll/Provider";
import Topbar from "components/Topbar";
import useDevice from "components/shared/useDevice";
import Footer from "components/Footer";
import Nav from "components/Nav";
import InternalLink from "components/Link";
import GlobalStyle from "components/shared/UI/GlobalStyle";
// import CookiesFloatMessage from "components/Cookies/FloatMessage";
const CookiesFloatMessage = () => null;

interface Props {
  renderMain(): ReactElement;
  renderSide(wrapperRef?: RefObject<HTMLDivElement>): ReactElement;
  hideSide?: boolean;
}

const Layout: FC<Props> = ({ renderMain, renderSide, hideSide }) => {
  const { isSize } = useDevice();
  const isLargerDeviceSize = useMemo(() => isSize("large", "extraLarge"), [
    isSize,
  ]);
  const sideWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <LayoutWrapper>
      <GlobalStyle />
      <Nav />
      {!isLargerDeviceSize && (
        <ScrollProvider>
          <Topbar />
        </ScrollProvider>
      )}
      <ContentWrapper>
        {!hideSide && (
          <SideWrapper ref={sideWrapperRef}>
            <SideContentWrapper>
              {isLargerDeviceSize && (
                <LogoWrapper>
                  <InternalLink href="/" aria-label="home">
                    <StyledLogo />
                  </InternalLink>
                </LogoWrapper>
              )}
              {renderSide(isLargerDeviceSize ? sideWrapperRef : undefined)}
            </SideContentWrapper>
          </SideWrapper>
        )}
        <MainWrapper>
          <ContentMainWrapper>{renderMain()}</ContentMainWrapper>
          {isLargerDeviceSize && <CookiesFloatMessage />}
        </MainWrapper>
        {!isLargerDeviceSize && <CookiesFloatMessage />}
      </ContentWrapper>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
