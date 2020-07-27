import React, { FC } from "react";

import {
  AboutMainWrapper,
  AboutCompanyDetails,
} from "src/modules/About/Main.components";
import Heading from "src/modules/shared/UI/Heading";
import P from "src/modules/shared/UI/Paragraph";
import Section from "src/modules/shared/UI/Section";
import { COMPANY_DETAILS } from "src/const";
import { useTranslation } from "react-i18next";
import { TranslationKey } from "src/modules/Translations/Translation";

const AboutMain: FC = () => {
  const { t } = useTranslation();

  return (
    <AboutMainWrapper>
      <Section>
        <Heading>{t(TranslationKey.ABOUT_ME)}</Heading>
        <P>{t(TranslationKey.ABOUT_ME_DESCRIPTION)}</P>
      </Section>
      <Section>
        <Heading>{t(TranslationKey.ABOUT_COMPANY)}</Heading>
        <P>{t(TranslationKey.ABOUT_COMPANY_DESCRIPTION)}</P>
        <AboutCompanyDetails>{COMPANY_DETAILS}</AboutCompanyDetails>
      </Section>
    </AboutMainWrapper>
  );
};

export default AboutMain;
