import React, { FC } from "react";

import { IconType, icons } from "src/modules/shared/UI/Icon/config";
import { IconWrapper } from "src/modules/shared/UI/Icon/components";

interface Props {
  type: IconType;
  title?: string;
  className?: string;
}

const Icon: FC<Props> = ({ type, className, title }) => {
  const Icon = icons[type];

  return (
    <IconWrapper className={className} title={title}>
      <Icon />
    </IconWrapper>
  );
};

export default Icon;
