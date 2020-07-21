import styled from "styled-components";

import {
  FloatButtonWrapper,
  FloatButtonIcon,
} from "src/modules/Nav/FloatButton/components";

export const MenuFloatButtonWrapper = styled(FloatButtonWrapper)``;

export const MenuIcon = styled(FloatButtonIcon).attrs(() => ({
  type: "Menu",
}))``;
