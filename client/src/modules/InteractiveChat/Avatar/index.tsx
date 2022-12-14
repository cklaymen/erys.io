import styled from "styled-components";

import rp_400 from "src/assets/images/rp_400.jpg";
import media from "src/modules/shared/UI/media";
import { defaultAppearanceAnimation } from "src/modules/shared/UI/defaults";

const Avatar = styled.div`
  ${defaultAppearanceAnimation()};
  background-image: url(${rp_400});
  background-size: cover;
  width: 55px;
  height: 55px;
  ${media.medium`
    width: 80px;
    height: 80px;
  `}
  border-radius: 50%;
`;

export default Avatar;
