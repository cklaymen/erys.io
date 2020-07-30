import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { ServicesMainWrapper } from "src/modules/Services/Main.components";
import Section from "src/modules/shared/UI/Section";
import Heading from "src/modules/shared/UI/Heading";
import { TranslationKey } from "src/modules/Translations/Translation";
import P from "src/modules/shared/UI/Paragraph";

const ServicesMain: FC = () => {
  const { t } = useTranslation();

  return (
    <ServicesMainWrapper>
      <Section>
        <Heading>{t(TranslationKey.SERVICES)}</Heading>
        <P>{t(TranslationKey.SERVICES_DESCRIPTION)}</P>
      </Section>
    </ServicesMainWrapper>
  );
};

export default ServicesMain;
