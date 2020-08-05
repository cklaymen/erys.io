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
} from "src/modules/App/Layout/components";
import ScrollProvider from "src/modules/Topbar/useScroll/Provider";
import Topbar from "src/modules/Topbar";
import useDevice from "src/modules/shared/useDevice";
import Footer from "src/modules/Footer";
import Nav from "src/modules/Nav";
import InternalLink from "src/modules/Routes/InternalLink";
import CookiesFloatMessage from "src/modules/Cookies/FloatMessage";

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
              {renderSide(isLargerDeviceSize ? sideWrapperRef : undefined)}
              {isLargerDeviceSize && (
                <LogoWrapper>
                  <InternalLink location="home">
                    <StyledLogo />
                  </InternalLink>
                </LogoWrapper>
              )}
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
