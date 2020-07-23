import React, { FC, useMemo } from "react";

import {
  FooterWrapper,
  FooterElement,
  ElementHeading,
  ElementContent,
  ContentParagraph,
  ContactContent,
  ContactIcon,
  ContactLink,
  ContactSocials,
  ContactInfo,
  FooterCopyright,
} from "src/modules/Footer/components";
import { useTranslation } from "react-i18next";
import { TranslationKey } from "src/modules/Translations/Translation";
import {
  EMAIL,
  PHONE,
  PHONE_VALUE,
  FB_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  COMPANY_NAME,
} from "src/const";

const Footer: FC = () => {
  const { t } = useTranslation();
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <FooterWrapper>
      <FooterElement>
        <ElementHeading>{t(TranslationKey.ABOUT_ME)}</ElementHeading>
        <ElementContent>
          <ContentParagraph>
            {t(TranslationKey.ABOUT_ME_SHORT_DESCRIPTION)}
          </ContentParagraph>
        </ElementContent>
      </FooterElement>
      <FooterElement>
        <ElementHeading>{t(TranslationKey.CONTACT)}</ElementHeading>
        <ContactContent>
          <ContactInfo>
            <ContactLink href={`mailto:${EMAIL}`}>
              <ContactIcon type="Mail" />
              {EMAIL}
            </ContactLink>
            <ContactLink href={`tel:${PHONE_VALUE}`}>
              <ContactIcon type="Phone" />
              {PHONE}
            </ContactLink>
          </ContactInfo>
          <ContactSocials>
            <ContactLink href={FB_URL} target="_blank">
              <ContactIcon type="Fb" />
            </ContactLink>
            <ContactLink href={INSTAGRAM_URL} target="_blank">
              <ContactIcon type="Instagram" />
            </ContactLink>
            <ContactLink href={LINKEDIN_URL} target="_blank">
              <ContactIcon type="LinkedIn" />
            </ContactLink>
          </ContactSocials>
        </ContactContent>
      </FooterElement>
      <FooterCopyright>
        © {currentYear} {COMPANY_NAME}
      </FooterCopyright>
    </FooterWrapper>
  );
};

export default Footer;
