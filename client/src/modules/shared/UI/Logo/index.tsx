import React, { FC } from "react";

import { ReactComponent as LogoSvg } from "src/assets/images/Logo.svg";

interface Props {
  className?: string;
}

const Logo: FC<Props> = ({ className }) => <LogoSvg className={className} />;

export default Logo;
