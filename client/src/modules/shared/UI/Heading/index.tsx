import styled from "styled-components";

import colors from "src/modules/shared/UI/colors";

const Heading = styled.h1`
  font-size: 2.2rem;
  font-weight: 600;

  &::first-letter {
    color: ${colors.yellow};
  }
`;

export default Heading;
