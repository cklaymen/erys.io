import styled, { css } from "styled-components";

import colors from "src/modules/shared/UI/colors";
import {
  defaultBoxFocus,
  defaultHover,
  defaultActive,
  defaultClickable,
} from "src/modules/shared/UI/defaults";

export const buttonHoverStyle = () => css`
  ${defaultHover()};
  background-color: ${colors.lightYellow};
  color: ${colors.lightBlack};
`;

export const buttonFocusStyle = () => css`
  ${defaultBoxFocus()};
  background-color: ${colors.lightYellow};
  color: ${colors.lightBlack};
`;

export const buttonActiveStyle = defaultActive;

const Button = styled.button.attrs((props) => ({
  onTouchStart: props.onTouchStart || (() => {}), // workaround for iOS to trigger :active pseudo-class
}))`
  ${defaultClickable()};
  border: none;
  border-radius: 15px;
  background-color: ${colors.yellow};
  color: ${colors.black};
  padding: 7px 25px 8px 25px;
  font-weight: 600;
  font-size: 1.1rem;

  &:hover {
    ${buttonHoverStyle()};
  }

  &:focus {
    ${buttonFocusStyle()};
  }

  &:active {
    ${buttonActiveStyle()};
  }
`;

export default Button;