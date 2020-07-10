import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import {
  ServicesWrapper,
  TilesWrapper,
  TileWithMargin,
  ButtonWrapper,
} from "src/modules/Home/Services/components";
import Heading from "src/modules/shared/UI/Heading";
import { TranslationKey } from "src/modules/Translations/Translation";
import P from "src/modules/shared/UI/Paragraph";
import Button from "src/modules/shared/UI/Button";

const Services: FC = () => {
  const { t } = useTranslation();
  return (
    <ServicesWrapper>
      <Heading>{t(TranslationKey.SERVICES)}</Heading>
      <P>{t(TranslationKey.SERVICES_SHORT_DESCRIPTION)}</P>
      <TilesWrapper>
        <TileWithMargin
          title={t(TranslationKey.WEB_APPS_SITES)}
          text={t(TranslationKey.WEB_APPS_SITES_SERVICE_SHORT_DESCRIPTION)}
          illustrationType="Application"
        />
        <TileWithMargin
          title={t(TranslationKey.CODING)}
          text={t(TranslationKey.CODING_SERVICE_SHORT_DESCRIPTION)}
          illustrationType="Programming"
        />
        <TileWithMargin
          title={t(TranslationKey.SERVER_DOMAIN)}
          text={t(TranslationKey.SERVER_DOMAIN_SERVICE_SHORT_DESCRIPTION)}
          illustrationType="Server"
        />
      </TilesWrapper>
      <ButtonWrapper>
        <Button>{t(TranslationKey.MORE_ABOUT_SERVICES)}</Button>
      </ButtonWrapper>
    </ServicesWrapper>
  );
};

export default Services;
