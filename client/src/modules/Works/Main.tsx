import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { WorksMainWrapper } from "src/modules/Works/Main.components";
import Section from "src/modules/shared/UI/Section";
import Heading from "src/modules/shared/UI/Heading";
import P from "src/modules/shared/UI/Paragraph";
import worksConfig from "src/modules/Works/config";
import Work from "src/modules/Works/Work";
import { TranslationKey } from "src/modules/Translations/Translation";

const WorksMain: FC = () => {
  const { t } = useTranslation();

  return (
    <WorksMainWrapper>
      <Section>
        <Heading>{t(TranslationKey.WORKS)}</Heading>
        <P>{t(TranslationKey.WORKS_DESCRIPTION)}</P>
      </Section>
      {worksConfig.map((it) => (
        <Work key={it.titleKey} config={it} />
      ))}
    </WorksMainWrapper>
  );
};

export default WorksMain;
