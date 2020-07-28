import React, { FC, useMemo, useRef, RefObject } from "react";

import {
  LayoutWrapper,
  ContentWrapper,
  ContentMainWrapper,
  SideContentWrapper,
  SideWrapper,
  StyledLogo,
  LogoWrapper,
} from "src/modules/App/Layout/components";
import ScrollProvider from "src/modules/Topbar/useScroll/Provider";
import Topbar from "src/modules/Topbar";
import useDevice from "src/modules/shared/useDevice";
import Footer from "src/modules/Footer";
import Nav from "src/modules/Nav";
import InternalLink from "src/modules/Routes/InternalLink";
import { Location } from "src/modules/Routes/pathKeys";

interface Props {
  renderMain(): JSX.Element;
  renderSide(wrapperRef?: RefObject<HTMLDivElement>): JSX.Element;
  currentLocation: Location;
}

const Layout: FC<Props> = ({ renderMain, renderSide, currentLocation }) => {
  const { isSize } = useDevice();
  const isLargerDeviceSize = useMemo(() => isSize("large", "extraLarge"), [
    isSize,
  ]);
  const sideWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <LayoutWrapper>
      <Nav currentLocation={currentLocation} />
      {!isLargerDeviceSize && (
        <ScrollProvider>
          <Topbar />
        </ScrollProvider>
      )}
      <ContentWrapper>
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
        <ContentMainWrapper>{renderMain()}</ContentMainWrapper>
      </ContentWrapper>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
