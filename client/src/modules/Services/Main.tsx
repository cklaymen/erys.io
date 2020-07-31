import React, { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { ServicesMainWrapper } from "src/modules/Services/Main.components";
import Section from "src/modules/shared/UI/Section";
import Heading from "src/modules/shared/UI/Heading";
import { TranslationKey } from "src/modules/Translations/Translation";
import P from "src/modules/shared/UI/Paragraph";
import {
  TilesWrapper,
  TileWithMargin,
} from "src/modules/Home/Services/components";
import WebAppsSitesDescription from "src/modules/Services/WebAppsSitesDescription";
import useDevice from "src/modules/shared/useDevice";
import { TileProps } from "src/modules/shared/UI/Tile";

const ServicesMain: FC = () => {
  const { t } = useTranslation();
  const { isSize } = useDevice();

  const isExtraSmall = isSize("extraSmall");
  const tileView: TileProps["view"] = useMemo(
    () => (isExtraSmall ? "vertical" : "horizontal"),
    [isExtraSmall]
  );

  return (
    <ServicesMainWrapper>
      <Section>
        <Heading>{t(TranslationKey.SERVICES)}</Heading>
        {t(TranslationKey.SERVICES_DESCRIPTION)
          .split("\n\n")
          .map((it, index) => (
            <P key={index}>{it}</P>
          ))}
      </Section>
      <TilesWrapper>
        <TileWithMargin
          illustrationType="Application"
          title={t(TranslationKey.WEB_APPS_SITES)}
          description={<WebAppsSitesDescription />}
          view={tileView}
        />
        <TileWithMargin
          illustrationType="Programming"
          title={t(TranslationKey.CODING)}
          description={t(TranslationKey.CODING_SERVICE_DESCRIPTION)}
          view={tileView}
        />
        <TileWithMargin
          illustrationType="Server"
          title={t(TranslationKey.SERVER_DOMAIN)}
          description={t(TranslationKey.SERVER_DOMAIN_SERVICE_DESCRIPTION)}
          view={tileView}
        />
      </TilesWrapper>
      <P>{t(TranslationKey.SERVICES_DESCRIPTION_SUMMARY)}</P>
    </ServicesMainWrapper>
  );
};

export default ServicesMain;
