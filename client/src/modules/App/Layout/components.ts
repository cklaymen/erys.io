import styled from "styled-components";

import {
  CONTENT_PADDING_EXTRA_SMALL,
  CONTENT_PADDING_MEDIUM,
  CONTENT_PADDING_LARGE,
} from "src/modules/App/Layout/const";
import media from "src/modules/shared/UI/media";

export const LayoutWrapper = styled.div``;

export const ContentWrapper = styled.div`
  padding: ${CONTENT_PADDING_EXTRA_SMALL};
  ${media.medium`
    padding: ${CONTENT_PADDING_MEDIUM.join(" ")};
  `}
  ${media.large`
    padding: ${CONTENT_PADDING_LARGE};
    display: flex;
    align-items: flex-start;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    max-height: 100%;
  `}
`;

export const ContentSideWrapper = styled.div`
  ${media.large`
    position: sticky;
    top: ${CONTENT_PADDING_LARGE};
    overflow-y: auto;
    height: calc(100vh - 2*${CONTENT_PADDING_LARGE});
    width: 50%;
    padding-right: 30px;
  `}
`;

export const ContentMainWrapper = styled.div`
  ${media.large`
    width: 50%;
    padding-left: 30px;
  `}
`;
