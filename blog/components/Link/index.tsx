import NextLink from "next/link";
import styled from "styled-components";

const Link = styled(NextLink)`
  display: inline;
  text-decoration: none;
  color: inherit;
  -webkit-tap-highlight-color: transparent;
`;

export default Link;
