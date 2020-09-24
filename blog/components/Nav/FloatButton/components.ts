import styled, { css } from "styled-components";

import Button, {
  buttonHoverStyle,
  buttonActiveStyle,
  buttonFocusStyle,
} from "components/shared/UI/Button";
import Icon from "components/shared/UI/Icon";
import { defaultDropShadow } from "components/shared/UI/defaults";
import media from "components/shared/UI/media";

export const FLOAT_BUTTON_SIZE_IN_PX_EXTRA_SMALL = 60;

export const FLOAT_BUTTON_SIZE_IN_PX_MEDIUM = 80;

export const floatButtonHoverStyle = buttonHoverStyle;

export const floatButtonFocusStyle = buttonFocusStyle;

export const floatButtonActiveStyle = () => css`
  ${buttonActiveStyle()};
  opacity: initial;
`;

export const FloatButtonWrapper = styled(Button)`
  ${defaultDropShadow()};
  width: ${FLOAT_BUTTON_SIZE_IN_PX_EXTRA_SMALL}px;
  height: ${FLOAT_BUTTON_SIZE_IN_PX_EXTRA_SMALL}px;
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

  ${media.medium`
    width: ${FLOAT_BUTTON_SIZE_IN_PX_MEDIUM}px;
    height: ${FLOAT_BUTTON_SIZE_IN_PX_MEDIUM}px;
    padding: 20px;
  `}
`;

export const FloatButtonIcon = styled(Icon)`
  width: 100%;
`;
