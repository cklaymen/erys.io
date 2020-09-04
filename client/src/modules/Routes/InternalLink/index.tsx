import React, { FC, useMemo, useCallback } from "react";

import { StyledLink } from "src/modules/Routes/InternalLink/components";
import usePath from "src/modules/Routes/usePath";
import { Location } from "src/modules/Routes/pathKeys";

interface Props {
  location: Location;
  className?: string;
  "aria-label"?: string;
  onClick?(event: React.MouseEvent): void;
}

const InternalLink: FC<Props> = ({
  location,
  children,
  className,
  "aria-label": ariaLabel,
  onClick,
}) => {
  const { getPath } = usePath();

  const path = useMemo(() => getPath(location), [location, getPath]);

  const handleClick = useCallback(
    (event: React.MouseEvent) => {
      if (onClick) {
        onClick(event);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [onClick]
  );

  return (
    <StyledLink
      to={path}
      onClick={handleClick}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </StyledLink>
  );
};

export default InternalLink;
