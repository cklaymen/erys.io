import React, { FC } from "react";

import { IconType, icons } from "src/modules/shared/UI/Icon/config";
import { IconWrapper } from "src/modules/shared/UI/Icon/components";

interface Props {
  type: IconType;
  title?: string;
  className?: string;
  onClick?(): void;
}

const Icon: FC<Props> = ({ type, className, title, onClick }) => {
  const Icon = icons[type];

  return (
    <IconWrapper className={className} title={title} onClick={onClick}>
      <Icon />
    </IconWrapper>
  );
};

export default Icon;
