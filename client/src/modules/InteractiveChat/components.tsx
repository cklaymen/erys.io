import styled from "styled-components";
import media from "src/modules/shared/UI/media";

export const InteractiveChatWrapper = styled.div`
  /* Reverse flex for auto scroll chat to bottom */
  display: flex;
  flex-direction: column-reverse;
  align-items: stretch;
`;

export const InteractiveChatSectionsWrapper = styled.div`
  flex: 1;
`;

export const InteractiveChatSectionWrapper = styled.div`
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
  ${media.medium`
    margin-left: 30px;
  `}
`;
