import React, { FC } from "react";

import { IconType, icons } from "./config";
import { IconWrapper } from "./components";

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
