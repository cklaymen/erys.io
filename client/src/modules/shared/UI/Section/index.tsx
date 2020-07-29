import styled from "styled-components";

import media from "src/modules/shared/UI/media";

const Section = styled.section`
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
