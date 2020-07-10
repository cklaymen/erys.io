import styled from "styled-components";

import Tile from "src/modules/shared/UI/Tile";

export const ServicesWrapper = styled.section`
  margin-top: 40px;
`;

export const TilesWrapper = styled.div`
  margin-top: 40px;
`;

export const TileWithMargin = styled(Tile)`
  & + & {
    margin-top: 30px;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 40px;
  text-align: center;
`;
