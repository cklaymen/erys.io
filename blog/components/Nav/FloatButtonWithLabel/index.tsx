import React, { FC } from "react";

import {
  FloatButtonWithLabelContainer,
  FloatButtonLabel,
  StyledFloatButton,
  FloatButtonWithLabelWrapper,
} from "./components";
import { IconType } from "components/shared/UI/Icon/config";

interface Props {
  iconType: IconType;
  label: string;
  active?: boolean;
  className?: string;
}

const FloatButtonWithLabel: FC<Props> = ({
  iconType,
  label,
  active,
  className,
}) => (
  <FloatButtonWithLabelWrapper className={className} active={active}>
    <FloatButtonWithLabelContainer>
      <FloatButtonLabel>{label}</FloatButtonLabel>
    </FloatButtonWithLabelContainer>
    <StyledFloatButton iconType={iconType} aria-label={label} />
  </FloatButtonWithLabelWrapper>
);

export default FloatButtonWithLabel;
