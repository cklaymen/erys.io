import React, { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { SectionWrapper } from "src/modules/Home/shared/components";
import Heading from "src/modules/shared/UI/Heading";
import P from "src/modules/shared/UI/Paragraph";
import { TranslationKey } from "src/modules/Translations/Translation";
import {
  TilesWrapper,
  TileWithWidth,
  TilesScrollableContainer,
} from "src/modules/Home/Steps/components";
import useDevice from "src/modules/shared/useDevice";

const Steps: FC = () => {
  const { t } = useTranslation();
  const { isSize } = useDevice();
  const view = useMemo(
    () => (isSize("large", "extraLarge") ? "horizontal" : "vertical"),
    [isSize]
  );
  return (
    <SectionWrapper>
      <Heading>{t(TranslationKey.STEPS)}</Heading>
      <P>{t(TranslationKey.STEPS_SHORT_DESCRIPTION)}</P>
      <TilesWrapper>
        <TilesScrollableContainer>
          <TileWithWidth
            title={t(TranslationKey.NEED_ANALYSIS_STEP_TITLE)}
            text={t(TranslationKey.NEED_ANALYSIS_STEP_DESCRIPTION)}
            illustrationType="Checklist"
            ordinalNumber={1}
            view={view}
          />
          <TileWithWidth
            title={t(TranslationKey.GRAPHIC_DESIGN_STEP_TITLE)}
            text={t(TranslationKey.GRAPHIC_DESIGN_STEP_DESCRIPTION)}
            illustrationType="Project"
            ordinalNumber={2}
            view={view}
          />
          <TileWithWidth
            title={t(TranslationKey.CREATING_APP_STEP_TITLE)}
            text={t(TranslationKey.CREATING_APP_STEP_DESCRIPTION)}
            illustrationType="Developer"
            ordinalNumber={3}
            view={view}
          />
          <TileWithWidth
            title={t(TranslationKey.SUPPORT_STEP_TITLE)}
            text={t(TranslationKey.SUPPORT_STEP_DESCRIPTION)}
            illustrationType="DoneApp"
            ordinalNumber={4}
            view={view}
          />
        </TilesScrollableContainer>
      </TilesWrapper>
    </SectionWrapper>
  );
};

export default Steps;
