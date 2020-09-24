import styled from "styled-components";

import media from "../media";
import { defaultAppearanceAnimationSequence } from "../defaults";

const Section = styled.section`
  &:nth-child(1) {
    ${defaultAppearanceAnimationSequence(1)};
  }
  &:nth-child(2) {
    ${defaultAppearanceAnimationSequence(2)};
  }
  &:nth-child(3) {
    ${defaultAppearanceAnimationSequence(3)};
  }
  & + & {
    margin-top: 40px;
  }
  ${media.medium`
    & + & {
      margin-top: 80px;
    }
  `}
`;

export default Section;
