import styled from "styled-components";
import Illustration from "src/modules/shared/UI/Illustration";
import colors from "src/modules/shared/UI/colors";

export const TileWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const TileTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0 0 0 15px;
`;

export const TileText = styled.p`
  margin-left: 25px;
  margin-top: 5px;
`;

export const TileIllustration = styled(Illustration)`
  max-width: 100%;
  max-height: 100%;
`;

export const TileIllustrationWrapper = styled.div`
  width: 120px;
  border-radius: 50%;
  border: 1px solid ${colors.lightGray};
`;

export const TileContent = styled.div`
  flex: 1;
`;
