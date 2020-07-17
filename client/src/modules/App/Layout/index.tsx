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

interface Props {
  renderMain(): JSX.Element;
  renderSide(wrapperRef?: RefObject<HTMLDivElement>): JSX.Element;
}

const Layout: FC<Props> = ({ renderMain, renderSide }) => {
  const { isSize } = useDevice();
  const isLargerDeviceSize = useMemo(() => isSize("large", "extraLarge"), [
    isSize,
  ]);
  const sideWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <LayoutWrapper>
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
                <StyledLogo />
              </LogoWrapper>
            )}
          </SideContentWrapper>
        </SideWrapper>
        <ContentMainWrapper>{renderMain()}</ContentMainWrapper>
      </ContentWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
