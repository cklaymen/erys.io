import React, { FC, useMemo } from "react";

import {
  TopbarWrapper,
  LogoWrapper,
  StyledLogo,
} from "src/modules/Topbar/components";
import useScroll from "src/modules/Topbar/useScroll";

const Topbar: FC = () => {
  const { pageYOffset } = useScroll();
  const isMini = useMemo(() => pageYOffset > 30, [pageYOffset]);

  return (
    <TopbarWrapper mini={isMini}>
      <LogoWrapper mini={isMini}>
        <StyledLogo />
      </LogoWrapper>
    </TopbarWrapper>
  );
};

export default Topbar;
