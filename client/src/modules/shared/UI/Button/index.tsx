import styled from "styled-components";

import colors from "src/modules/shared/UI/colors";
import { DEFAULT_TRANSITION_TIME } from "src/modules/shared/UI/config";

const Button = styled.button`
  border: none;
  border-radius: 15px;
  background-color: ${colors.yellow};
  color: ${colors.black};
  padding: 7px 25px 8px 25px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: color ${DEFAULT_TRANSITION_TIME},
    background-color ${DEFAULT_TRANSITION_TIME},
    transform ${DEFAULT_TRANSITION_TIME};
  user-select: none;

  &:hover,
  &:focus {
    background-color: ${colors.lightYellow};
    color: ${colors.lightBlack};
    cursor: pointer;
  }

  &:active {
    transform: scale(0.95);
    opacity: 0.9;
  }

  &:focus {
    -webkit-tap-highlight-color: transparent;
    outline: none;
    box-shadow: 0 0 5px ${colors.lightYellow};
  }
`;

export default Button;
