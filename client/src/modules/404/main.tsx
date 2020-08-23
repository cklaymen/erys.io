import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import Section from "src/modules/shared/UI/Section";
import Heading from "src/modules/shared/UI/Heading";
import { TranslationKey } from "src/modules/Translations/Translation";

const Main404: FC = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Heading>404</Heading>
      <div>{t(TranslationKey.PAGE_NOT_FOUND)}</div>
    </Section>
  );
};

export default Main404;
