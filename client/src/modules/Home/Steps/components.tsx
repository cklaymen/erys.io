import styled from "styled-components";

import Tile from "src/modules/shared/UI/Tile";
import { HOME_PADDING_MOBILE } from "src/modules/Home/components";
import colors from "src/modules/shared/UI/colors";

export const TilesWrapper = styled.div`
  position: relative;
  margin: 0 -${HOME_PADDING_MOBILE} 0 -${HOME_PADDING_MOBILE};

  &::before {
    content: "";
    width: ${HOME_PADDING_MOBILE};
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
    width: ${HOME_PADDING_MOBILE};
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
`;

export const TilesScrollableContainer = styled.div`
  display: flex;
  padding: 40px ${HOME_PADDING_MOBILE} 0 ${HOME_PADDING_MOBILE};
  overflow-x: auto;

  &::after {
    content: "";
    width: ${HOME_PADDING_MOBILE};
    height: 100%;
    background-color: red;
  }
`;

export const TileWithWidth = styled(Tile)`
  width: 140px;
  flex: none;

  padding-right: 15px;

  &:last-child {
    padding-right: ${HOME_PADDING_MOBILE};
  }
`;
