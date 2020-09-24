import React, { FC } from "react";

import { FloatButtonWrapper, FloatButtonIcon } from "./components";
import { IconType } from "components/shared/UI/Icon/config";

interface Props {
  iconType: IconType;
  className?: string;
  "aria-label"?: string;
}

const FloatButton: FC<Props> = ({
  iconType,
  className,
  "aria-label": ariaLabel,
}) => (
  <FloatButtonWrapper className={className} aria-label={ariaLabel}>
    <FloatButtonIcon type={iconType} />
  </FloatButtonWrapper>
);

export default FloatButton;
