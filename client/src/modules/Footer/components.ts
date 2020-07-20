import styled from "styled-components";

import colors from "src/modules/shared/UI/colors";
import {
  CONTENT_PADDING_EXTRA_SMALL,
  CONTENT_PADDING_MEDIUM,
} from "src/modules/App/Layout/const";
import Icon from "src/modules/shared/UI/Icon";
import { defaultClickable } from "src/modules/shared/UI/defaults";
import media from "src/modules/shared/UI/media";

export const FooterWrapper = styled.footer`
  background-color: ${colors.black};
  color: ${colors.white};
  display: flex;
  padding: ${CONTENT_PADDING_EXTRA_SMALL};
  ${media.medium`
    padding: ${CONTENT_PADDING_MEDIUM.join(" ")}
  `}
`;

export const FooterElement = styled.div`
  flex: 1;

  & + & {
    margin-left: 20px;

    ${media.medium`
      margin-left: 6vw;
    `}
  }
`;

export const ElementHeading = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
`;

export const ElementContent = styled.div`
  margin-top: 5px;
`;

export const ContactContent = styled(ElementContent)`
  margin-top: 10px;
`;

export const ContentParagraph = styled.p`
  margin: 0;
  font-size: 0.9rem;
  text-align: justify;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ContactIcon = styled(Icon)`
  color: ${colors.yellow};
  width: 15px;
  margin-right: 10px;
  vertical-align: middle;
`;

export const ContactLink = styled.a`
  ${defaultClickable()};
  display: inline-block;
  text-decoration: none;
  color: inherit;
  font-weight: 600;

  &:hover {
    & ${ContactIcon} {
      color: ${colors.lightYellow};
    }
  }

  & + & {
    margin-top: 7px;
  }
`;

export const ContactSocials = styled.div`
  margin-top: 10px;
  padding-left: 25px;
`;
