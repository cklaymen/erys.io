import React, { FC, useMemo, useCallback } from "react";

import { StyledLink } from "src/modules/Routes/InternalLink/components";
import usePath from "src/modules/Routes/usePath";
import { Location } from "src/modules/Routes/pathKeys";

interface Props {
  location: Location;
  className?: string;
}

const InternalLink: FC<Props> = ({ location, children, className }) => {
  const { getPath } = usePath();

  const path = useMemo(() => getPath(location), [location, getPath]);

  const scrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <StyledLink to={path} onClick={scrollTop} className={className}>
      {children}
    </StyledLink>
  );
};

export default InternalLink;
