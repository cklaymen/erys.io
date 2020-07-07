import styled from "styled-components";

import {
  defaultBorderRadius,
  defaultPadding,
  defaultFontSize,
} from "src/modules/shared/UI/defaults";
import colors from "src/modules/shared/UI/colors";

export const BubbleWrapper = styled.div`
  ${defaultBorderRadius()}
  ${defaultPadding()}
  ${defaultFontSize()}
  background-color: ${colors.lightGray};
  color: ${colors.black};
  display: inline-block;
`;

export const Link = styled.span`
  font-weight: bold;

  &:hover {
    color: ${colors.yellow};
    cursor: pointer;
  }
`;
