import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import {
  TilesWrapper,
  TileWithMargin,
  ButtonWrapper,
} from "src/modules/Home/Services/components";
import Heading from "src/modules/shared/UI/Heading";
import { TranslationKey } from "src/modules/Translations/Translation";
import P from "src/modules/shared/UI/Paragraph";
import Button from "src/modules/shared/UI/Button";
import Section from "src/modules/shared/UI/Section";
import InternalLink from "src/modules/Routes/InternalLink";

const Services: FC = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <Heading>{t(TranslationKey.SERVICES)}</Heading>
      <P>{t(TranslationKey.SERVICES_SHORT_DESCRIPTION)}</P>
      <TilesWrapper>
        <TileWithMargin
          title={t(TranslationKey.WEB_APPS_SITES)}
          description={t(
            TranslationKey.WEB_APPS_SITES_SERVICE_SHORT_DESCRIPTION
          )}
          illustrationType="Application"
        />
        <TileWithMargin
          title={t(TranslationKey.CODING)}
          description={t(TranslationKey.CODING_SERVICE_SHORT_DESCRIPTION)}
          illustrationType="Programming"
        />
        <TileWithMargin
          title={t(TranslationKey.SERVER_DOMAIN)}
          description={t(
            TranslationKey.SERVER_DOMAIN_SERVICE_SHORT_DESCRIPTION
          )}
          illustrationType="Server"
        />
      </TilesWrapper>
      <ButtonWrapper>
        <InternalLink location="services">
          <Button>{t(TranslationKey.MORE_ABOUT_SERVICES)}</Button>
        </InternalLink>
      </ButtonWrapper>
    </Section>
  );
};

export default Services;
