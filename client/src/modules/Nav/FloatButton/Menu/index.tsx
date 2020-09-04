import React, { FC } from "react";

import {
  MenuFloatButtonWrapper,
  MenuIcon,
} from "src/modules/Nav/FloatButton/Menu/components";

interface Props {
  className?: string;
  onClick?(): void;
  icon: "Menu" | "Close";
}

const MenuFloatButton: FC<Props> = ({ className, onClick, icon }) => (
  <MenuFloatButtonWrapper
    className={className}
    onClick={onClick}
    aria-label="Menu"
  >
    <MenuIcon icon={icon} />
  </MenuFloatButtonWrapper>
);

export default MenuFloatButton;
