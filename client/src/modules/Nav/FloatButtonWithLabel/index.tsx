import React, { FC } from "react";

import {
  FloatButtonWithLabelContainer,
  FloatButtonLabel,
  StyledFloatButton,
  FloatButtonWithLabelWrapper,
} from "src/modules/Nav/FloatButtonWithLabel/components";
import { IconType } from "src/modules/shared/UI/Icon/config";

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
    <StyledFloatButton iconType={iconType} />
  </FloatButtonWithLabelWrapper>
);

export default FloatButtonWithLabel;
