import React, { FC } from "react";

import {
  MenuFloatButtonWrapper,
  MenuIcon,
} from "src/modules/Nav/FloatButton/Menu/components";

interface Props {
  className?: string;
}

const MenuFloatButton: FC<Props> = ({ className }) => (
  <MenuFloatButtonWrapper className={className}>
    <MenuIcon />
  </MenuFloatButtonWrapper>
);

export default MenuFloatButton;
