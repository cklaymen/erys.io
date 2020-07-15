import styled from "styled-components";

import media from "src/modules/shared/UI/media";
import InteractiveChat from "src/modules/InteractiveChat";

export const HOME_PADDING_EXTRA_SMALL = "15px";
export const HOME_PADDING_MEDIUM = ["3vw", "9vw"] as const;
export const HOME_PADDING_LARGE = "3vw";

export const HomeWrapper = styled.div`
  padding: ${HOME_PADDING_EXTRA_SMALL};
  ${media.medium`
    padding: ${HOME_PADDING_MEDIUM.join(" ")};
  `}
  ${media.large`
    padding: ${HOME_PADDING_LARGE};
    display: flex;
    align-items: flex-start;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    max-height: 100%;
  `}
`;

export const HomeInteractiveChat = styled(InteractiveChat)`
  ${media.large`
    position: sticky;
    top: ${HOME_PADDING_LARGE};
    overflow-y: auto;
    height: calc(100vh - 2*${HOME_PADDING_LARGE});
    width: 50%;
    padding-right: 30px;
  `}
`;

export const HomeContentWrapper = styled.div`
  ${media.large`
    width: 50%;
    padding-left: 30px;
  `}
`;
