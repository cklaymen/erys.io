import React, { FC } from "react";

import {
  FloatButtonWrapper,
  FloatButtonIcon,
} from "src/modules/Nav/FloatButton/components";
import { IconType } from "src/modules/shared/UI/Icon/config";

interface Props {
  iconType: IconType;
  className?: string;
}

const FloatButton: FC<Props> = ({ iconType, className }) => (
  <FloatButtonWrapper className={className}>
    <FloatButtonIcon type={iconType} />
  </FloatButtonWrapper>
);

export default FloatButton;
