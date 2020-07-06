import styled from "styled-components";

import { defaultBorderRadius, defaultPadding } from "../../shared/UI/defaults";
import colors from "../../shared/UI/colors";

export const BubbleWrapper = styled.div`
  ${defaultBorderRadius()}
  ${defaultPadding()}
  background-color: ${colors.lightGray};
  color: ${colors.black};
  display: inline-block;
`;
