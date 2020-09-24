import styled from "styled-components";

import colors from "components/shared/UI/colors";
import {
  CONTENT_PADDING_EXTRA_SMALL,
  CONTENT_PADDING_MEDIUM,
  CONTENT_PADDING_LARGE,
} from "components/Layout/const";
import Icon from "components/shared/UI/Icon";
import {
  defaultClickable,
  defaultAppearanceAnimationSequence,
} from "components/shared/UI/defaults";
import media from "components/shared/UI/media";
import { NAV_FLOAT_BUTTON_BAR_WIDTH_IN_PX_EXTRA_SMALL } from "components/Nav/components";
import ExternalLink from "components/shared/ExternalLink";

export const FooterWrapper = styled.footer`
  background-color: ${colors.black};
  color: ${colors.white};
  display: flex;
  padding: ${CONTENT_PADDING_EXTRA_SMALL}
    ${NAV_FLOAT_BUTTON_BAR_WIDTH_IN_PX_EXTRA_SMALL}px
    ${CONTENT_PADDING_EXTRA_SMALL} ${CONTENT_PADDING_EXTRA_SMALL};
  position: relative;

  ${media.medium`
    padding: ${CONTENT_PADDING_MEDIUM.join(" ")};
  `}
  ${media.large`
    padding: 3vh 5vw;
    align-items: center;
    padding: ${CONTENT_PADDING_LARGE.join(" ")};
  `}
`;

export const ElementHeading = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  ${media.large`
    display: none;
  `}
`;

export const FooterElement = styled.div`
  flex: auto;

  &:nth-child(1) ${ElementHeading} {
    ${defaultAppearanceAnimationSequence(1)}
  }
  &:nth-child(2) ${ElementHeading} {
    ${defaultAppearanceAnimationSequence(2)}
  }

  & + & {
    margin-left: 20px;
  }

  ${media.medium`
    & + & {
      margin-left: 6vw;
    }
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
  ${defaultAppearanceAnimationSequence(1)}
  margin: 0;
  font-size: 0.9rem;
  text-align: justify;
`;

export const ContactIcon = styled(Icon)`
  color: ${colors.yellow};
  width: 20px;
  vertical-align: middle;

  ${media.large`
    width: 28px;
  `}
`;

export const ContactLink = styled(ExternalLink)`
  ${defaultClickable()};
  display: inline-block;
  font-size: 1.3rem;
  font-weight: 600;
  white-space: nowrap;

  &:hover {
    & ${ContactIcon} {
      color: ${colors.lightYellow};
    }
  }

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
  & ${ContactLink}:nth-child(1) {
    ${defaultAppearanceAnimationSequence(2)}
  }
  & ${ContactLink}:nth-child(2) {
    ${defaultAppearanceAnimationSequence(3)}
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
  padding-left: 30px;
  white-space: nowrap;

  & ${ContactLink} + ${ContactLink} {
    margin-left: 10px;
  }

  & ${ContactLink}:nth-child(1) {
    ${defaultAppearanceAnimationSequence(4)}
  }
  & ${ContactLink}:nth-child(2) {
    ${defaultAppearanceAnimationSequence(5)}
  }
  & ${ContactLink}:nth-child(3) {
    ${defaultAppearanceAnimationSequence(6)}
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

export const FooterCopyright = styled.div`
  position: absolute;
  font-size: 0.7rem;
  bottom: 3px;
  right: 3px;
`;
