import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import Heading from "src/modules/shared/UI/Heading";
import P from "src/modules/shared/UI/Paragraph";
import Section from "src/modules/shared/UI/Section";
import { TranslationKey } from "src/modules/Translations/Translation";

const ServerError: FC = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <Heading>{t(TranslationKey.SERVER_ERROR)}</Heading>
      <P>{t(TranslationKey.SERVER_ERROR_MESSAGE)}</P>
    </Section>
  );
};

export default ServerError;
