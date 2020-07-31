import styled, { css } from "styled-components";
import Illustration from "src/modules/shared/UI/Illustration";
import colors from "src/modules/shared/UI/colors";

interface Props {
  view?: "horizontal" | "vertical";
}

export const TileWrapper = styled.div<Props>`
  display: flex;
  ${(p) =>
    p.view === "horizontal"
      ? css`
          align-items: flex-start;
        `
      : css`
          flex-direction: column;
          align-items: center;
        `}
`;

export const TileTitle = styled.h2<Props>`
  font-size: 1.4rem;
  font-weight: 600;
  ${(p) =>
    p.view === "horizontal"
      ? css`
          margin: 0 0 0 15px;
        `
      : css`
          margin: 5px 0 0 0;
          text-align: center;
        `};
`;

export const TileDescription = styled.div<Props>`
  ${(p) =>
    p.view === "horizontal"
      ? css`
          margin-left: 25px;
        `
      : css`
          text-align: justify;
        `}
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 1.1rem;
`;

export const TileIllustration = styled(Illustration)`
  max-width: 100%;
  max-height: 100%;
`;

export const TileIllustrationWrapper = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 1px solid ${colors.lightGray};
  position: relative;
  margin: 5px;
`;

export const TileOrdinalNumber = styled.div`
  position: absolute;
  top: -24px;
  left: -5px;
  font-size: 64px;
  font-weight: bold;
  color: ${colors.lightGray};
`;

export const TileContent = styled.div`
  flex: 1;
`;
