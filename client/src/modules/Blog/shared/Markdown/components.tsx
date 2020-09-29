import styled from "styled-components";

import { defaultTextLink } from "src/modules/shared/UI/defaults";

export const MarkdownWrapper = styled.div`
  & img {
    max-width: 100%;
  }

  & p {
    text-align: justify;
  }

  & a {
    ${defaultTextLink()}
  }
`;
