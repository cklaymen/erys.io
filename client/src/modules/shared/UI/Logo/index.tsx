import React, { FC } from "react";

import LogoSrc from "src/assets/images/Logo.svg";

interface Props {
  className?: string;
}

const Logo: FC<Props> = ({ className }) => (
  <img className={className} src={LogoSrc} alt="Logo" />
);

export default Logo;
