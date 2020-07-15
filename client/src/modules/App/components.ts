import styled from "styled-components";

import { TOPBAR_HEIGHT } from "src/modules/Topbar/components";
import media from "src/modules/shared/UI/media";

export const ContentWrapper = styled.div`
  ${media.get("extraSmall", "large")`
    padding-top: ${TOPBAR_HEIGHT};
  `}
`;
