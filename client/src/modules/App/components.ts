import styled from "styled-components";

import {
  TOPBAR_HEIGHT,
  TOPBAR_HEIGTH_MEDIUM,
} from "src/modules/Topbar/components";
import media from "src/modules/shared/UI/media";

export const ContentWrapper = styled.div`
  ${media.get("extraSmall", "medium")`
    padding-top: ${TOPBAR_HEIGHT};
  `}
  ${media.get("medium", "large")`
    padding-top: ${TOPBAR_HEIGTH_MEDIUM}
  `}
`;
