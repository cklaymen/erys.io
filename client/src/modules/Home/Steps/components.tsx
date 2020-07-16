import styled from "styled-components";

import Tile from "src/modules/shared/UI/Tile";
import colors from "src/modules/shared/UI/colors";
import media from "src/modules/shared/UI/media";
import {
  CONTENT_PADDING_EXTRA_SMALL,
  CONTENT_PADDING_MEDIUM,
} from "src/modules/App/Layout/const";

export const TilesWrapper = styled.div`
  position: relative;

  ${media.get("extraSmall", "large")`
    margin: 0 -${CONTENT_PADDING_EXTRA_SMALL};
    &::before {
      content: "";
      width: ${CONTENT_PADDING_EXTRA_SMALL};
      background-image: linear-gradient(
        to right,
        ${colors.white},
        ${colors.white}00
      );
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      z-index: 1;
    }

    &::after {
      content: "";
      width: ${CONTENT_PADDING_EXTRA_SMALL};
      background-image: linear-gradient(
        to left,
        ${colors.white},
        ${colors.white}00
      );
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
    }

    ${media.medium`
      margin: 0 -${CONTENT_PADDING_MEDIUM[1]};
      &::before, &::after {
        width: ${CONTENT_PADDING_MEDIUM[1]};
      }
    `}
  `}
`;

export const TilesScrollableContainer = styled.div`
  display: flex;
  padding: 40px ${CONTENT_PADDING_EXTRA_SMALL} 0 ${CONTENT_PADDING_EXTRA_SMALL};
  overflow-x: auto;

  ${media.medium`
    padding: 40px ${CONTENT_PADDING_MEDIUM[1]} 0 ${CONTENT_PADDING_MEDIUM[1]};
  `}

  ${media.large`
    padding: 40px 0 0 0;
    flex-direction: column;
  `}
`;

export const TileWithWidth = styled(Tile)`
  width: 140px;
  flex: none;
  padding-right: 15px;

  &:last-child {
    padding-right: ${CONTENT_PADDING_EXTRA_SMALL};
  }

  ${media.medium`
    width: 220px;
    padding-right: 25px;

    &:last-child {
      padding-right: ${CONTENT_PADDING_MEDIUM[1]};
    }
  `}

  ${media.large`
    width: auto;
    padding-right: 0;
    padding-bottom: 30px;
    &:last-child {
      padding-right: 0;
      padding-bottom: 0;
    }
  `}
`;
