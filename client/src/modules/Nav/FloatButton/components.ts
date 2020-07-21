import styled, { css } from "styled-components";

import Button, {
  buttonHoverStyle,
  buttonActiveStyle,
  buttonFocusStyle,
} from "src/modules/shared/UI/Button";
import Icon from "src/modules/shared/UI/Icon";
import { defaultDropShadow } from "src/modules/shared/UI/defaults";

export const FLOAT_BUTTON_SIZE_EXTRA_SMALL = "60px";

export const floatButtonHoverStyle = buttonHoverStyle;

export const floatButtonFocusStyle = buttonFocusStyle;

export const floatButtonActiveStyle = () => css`
  ${buttonActiveStyle()};
  opacity: initial;
`;

export const FloatButtonWrapper = styled(Button)`
  ${defaultDropShadow()};
  width: ${FLOAT_BUTTON_SIZE_EXTRA_SMALL};
  height: ${FLOAT_BUTTON_SIZE_EXTRA_SMALL};
  border-radius: 50%;
  padding: 15px;

  &:hover {
    ${floatButtonHoverStyle()};
  }
  &:focus {
    ${floatButtonFocusStyle()};
  }
  &:active {
    ${floatButtonActiveStyle()};
  }
`;

export const FloatButtonIcon = styled(Icon)`
  width: 100%;
`;
