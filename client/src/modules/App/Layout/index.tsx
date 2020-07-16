import React, { FC, useMemo } from "react";

import {
  LayoutWrapper,
  ContentWrapper,
  ContentMainWrapper,
  ContentSideWrapper,
} from "src/modules/App/Layout/components";
import ScrollProvider from "src/modules/Topbar/useScroll/Provider";
import Topbar from "src/modules/Topbar";
import useDevice from "src/modules/shared/useDevice";

interface Props {
  MainComponent: FC;
  SideComponent: FC;
}

const Layout: FC<Props> = ({ MainComponent, SideComponent }) => {
  const { isSize } = useDevice();
  const showSmallerTopbar = useMemo(
    () => isSize("extraSmall", "small", "medium"),
    [isSize]
  );

  return (
    <LayoutWrapper>
      {showSmallerTopbar && (
        <ScrollProvider>
          <Topbar />
        </ScrollProvider>
      )}
      <ContentWrapper>
        <ContentSideWrapper>
          <SideComponent />
        </ContentSideWrapper>
        <ContentMainWrapper>
          <MainComponent />
        </ContentMainWrapper>
      </ContentWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
