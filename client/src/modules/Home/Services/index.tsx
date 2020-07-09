import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { ServicesWrapper } from "src/modules/Home/Services/components";
import Heading from "src/modules/shared/UI/Heading";
import { TranslationKey } from "src/modules/Translations/Translation";
import P from "src/modules/shared/UI/Paragraph";

const Services: FC = () => {
  const { t } = useTranslation();
  return (
    <ServicesWrapper>
      <Heading>{t(TranslationKey.SERVICES)}</Heading>
      <P>{t(TranslationKey.SERVICES_SHORT_DESCRIPTION)}</P>
    </ServicesWrapper>
  );
};

export default Services;
