import React, { FC } from "react";

import { IconType, icons } from "src/modules/shared/UI/Icon/config";

interface Props {
  type: IconType;
  className?: string;
}

const Icon: FC<Props> = ({ type, className }) => (
  <img src={icons[type]} alt={type} className={className} />
);

export default Icon;
