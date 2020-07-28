import styled from "styled-components";

import rp_400 from "src/assets/images/rp_400.jpg";
import Icon from "src/modules/shared/UI/Icon";
import colors from "src/modules/shared/UI/colors";
import media from "src/modules/shared/UI/media";

export const AboutSideWrapper = styled.div`
  text-align: center;
  ${media.large`
    margin-left: 40px;
  `}
`;

export const AboutPortrait = styled.img.attrs({
  src: rp_400,
  alt: "Ryszard Plewnia",
})`
  width: 50%;
  border-radius: 50%;
`;

export const AboutName = styled.div`
  margin-top: 20px;
  font-weight: 600;
  font-size: 2.4rem;
`;

export const AboutContact = styled.div`
  margin-top: 20px;
  font-size: 1.7rem;
  /* font-weight: 600; */
`;

export const ContactElement = styled.a`
  white-space: nowrap;
  color: inherit;
  text-decoration: none;
  display: inline-block;

  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export const ContactIcon = styled(Icon)`
  width: 20px;
  height: 20px;
  vertical-align: text-top;
  margin-right: 15px;
  color: ${colors.yellow};
`;

export const ContactValue = styled.span``;
