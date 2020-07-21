import React, { FC } from "react";

import {
  MenuFloatButtonWrapper,
  MenuIcon,
} from "src/modules/Nav/FloatButton/Menu/components";

interface Props {
  className?: string;
  onClick?(): void;
}

const MenuFloatButton: FC<Props> = ({ className, onClick }) => (
  <MenuFloatButtonWrapper className={className} onClick={onClick}>
    <MenuIcon />
  </MenuFloatButtonWrapper>
);

export default MenuFloatButton;
