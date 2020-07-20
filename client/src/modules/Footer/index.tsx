import React, { FC } from "react";

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
} from "src/modules/Footer/components";
import { useTranslation } from "react-i18next";
import { TranslationKey } from "src/modules/Translations/Translation";

const Footer: FC = () => {
  const { t } = useTranslation();

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
            <ContactLink href="mailto:hello@erys.io">
              <ContactIcon type="Mail" />
              hello@erys.io
            </ContactLink>
            <ContactLink href="tel:+48699712600">
              <ContactIcon type="Phone" />
              699 712 600
            </ContactLink>
          </ContactInfo>
          <ContactSocials>
            <ContactLink href="https://fb.com/erys.ioo" target="_blank">
              <ContactIcon type="Fb" />
            </ContactLink>
            <ContactLink href="https://instagram.com/erys.io" target="_blank">
              <ContactIcon type="Instagram" />
            </ContactLink>
            <ContactLink
              href="https://linkedin.com/in/ryszard-plewnia"
              target="_blank"
            >
              <ContactIcon type="LinkedIn" />
            </ContactLink>
          </ContactSocials>
        </ContactContent>
      </FooterElement>
    </FooterWrapper>
  );
};

export default Footer;
