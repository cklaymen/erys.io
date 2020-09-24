import styled from "styled-components";

export const IconWrapper = styled.span`
  display: inline-block;
  & path,
  & rect {
    fill: currentColor;
  }
  & svg {
    width: 100%;
    height: 100%;
  }
`;
