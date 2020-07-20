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
    padding: ${CONTENT_PADDING_MEDIUM.join(" ")};
  `}
  ${media.large`
    padding: 3vh 5vw;
    align-items: center;
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
  ${media.large`
    display: none;
  `}
`;

export const ElementContent = styled.div`
  margin-top: 5px;
`;

export const ContactContent = styled(ElementContent)`
  margin-top: 10px;
  ${media.large`
    margin-top: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `}
`;

export const ContentParagraph = styled.p`
  margin: 0;
  font-size: 0.9rem;
  text-align: justify;
`;

export const ContactIcon = styled(Icon)`
  color: ${colors.yellow};
  width: 15px;
  vertical-align: middle;

  ${media.medium`
    width: 20px;
  `}
  ${media.large`
    width: 28px;
  `}
`;

export const ContactLink = styled.a`
  ${defaultClickable()};
  display: inline-block;
  text-decoration: none;
  color: inherit;
  font-weight: 600;
  white-space: nowrap;

  &:hover {
    & ${ContactIcon} {
      color: ${colors.lightYellow};
    }
  }

  ${media.medium`
    font-size: 1.3rem;
  `}
  ${media.large`
    font-size: 1.4rem;
  `}
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & ${ContactIcon} {
    margin-right: 10px;
  }
  & ${ContactLink} + ${ContactLink} {
    margin-top: 7px;
  }

  ${media.large`
    flex-direction: row;
    align-items: center;

    & ${ContactIcon} {
      margin-right: 15px;
    }
    & ${ContactLink} + ${ContactLink} {
      margin-top: 0;
      margin-left: 30px;
    }
  `}
`;

export const ContactSocials = styled.div`
  margin-top: 10px;
  padding-left: 25px;
  white-space: nowrap;

  & ${ContactLink} + ${ContactLink} {
    margin-left: 10px;
  }

  ${media.medium`
    padding-left: 30px;

    & ${ContactLink} + ${ContactLink} {
      margin-left: 15px;
    }
  `}
  ${media.large`
    margin-top: 0;
    padding-left: 30px;

    & ${ContactLink} + ${ContactLink} {
      margin-left: 30px;
    }
  `}
`;
