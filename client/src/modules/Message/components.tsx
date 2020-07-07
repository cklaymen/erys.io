import styled from "styled-components";

export const MessageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: 45px;

  & > * + * {
    margin-left: 15px;
  }
`;
