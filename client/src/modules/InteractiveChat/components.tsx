import styled from "styled-components";

export const InteractiveChatWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  & + & {
    margin-top: 15px;
  }
`;

export const MessagesWrapper = styled.div`
  margin-left: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;
