import styled from "styled-components";

import colors from "src/modules/shared/UI/colors";
import {
  defaultClickable,
  defaultBoxFocus,
} from "src/modules/shared/UI/defaults";

const Button = styled.button.attrs((props) => ({
  onTouchStart: props.onTouchStart || (() => {}), // workaround for iOS to trigger :active pseudo-class
}))`
  ${defaultClickable()};
  ${defaultBoxFocus()};
  border: none;
  border-radius: 15px;
  background-color: ${colors.yellow};
  color: ${colors.black};
  padding: 7px 25px 8px 25px;
  font-weight: 600;
  font-size: 1.1rem;

  &:hover,
  &:focus {
    background-color: ${colors.lightYellow};
    color: ${colors.lightBlack};
  }
`;

export default Button;
