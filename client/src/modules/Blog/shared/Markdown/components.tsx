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

  & h1 a,
  & h2 a,
  & h3 a,
  & h4 a,
  & h5 a,
  & h6 a {
    text-decoration: none;

    :hover {
      color: inherit;
    }
  }
`;
