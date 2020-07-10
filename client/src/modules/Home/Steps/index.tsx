import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { SectionWrapper } from "src/modules/Home/shared/components";
import Heading from "src/modules/shared/UI/Heading";
import P from "src/modules/shared/UI/Paragraph";
import { TranslationKey } from "src/modules/Translations/Translation";

const Steps: FC = () => {
  const { t } = useTranslation();
  return (
    <SectionWrapper>
      <Heading>{t(TranslationKey.STEPS)}</Heading>
      <P>{t(TranslationKey.STEPS_SHORT_DESCRIPTION)}</P>
    </SectionWrapper>
  );
};

export default Steps;
