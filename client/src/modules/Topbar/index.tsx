import React, { FC, useMemo } from "react";

import {
  TopbarContainer,
  LogoWrapper,
  StyledLogo,
  TopbarWrapper,
} from "src/modules/Topbar/components";
import useScroll from "src/modules/Topbar/useScroll";

const Topbar: FC = () => {
  const { pageYOffset } = useScroll();
  const isMini = useMemo(() => pageYOffset > 30, [pageYOffset]);

  return (
    <TopbarWrapper>
      <TopbarContainer mini={isMini}>
        <LogoWrapper mini={isMini}>
          <StyledLogo />
        </LogoWrapper>
      </TopbarContainer>
    </TopbarWrapper>
  );
};

export default Topbar;
