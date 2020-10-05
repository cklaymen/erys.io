import Link from "next/link";
import React, { FC, useMemo } from "react";

import {
  TopbarContainer,
  LogoWrapper,
  StyledLogo,
  TopbarWrapper,
} from "./components";
import useScroll from "./useScroll";

const Topbar: FC = () => {
  const { pageYOffset } = useScroll();
  const isMini = useMemo(() => pageYOffset > 30, [pageYOffset]);

  return (
    <TopbarWrapper>
      <TopbarContainer mini={isMini}>
        <Link href="/">
          <LogoWrapper mini={isMini}>
            <StyledLogo />
          </LogoWrapper>
        </Link>
      </TopbarContainer>
    </TopbarWrapper>
  );
};

export default Topbar;
