import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import Heading from "src/modules/shared/UI/Heading";
import P from "src/modules/shared/UI/Paragraph";
import { TranslationKey } from "src/modules/Translations/Translation";
import {
  IconsWrapper,
  IconWithFlex,
  IconWrapper,
} from "src/modules/Home/Technologies/components";
import Section from "src/modules/shared/UI/Section";

const Technologies: FC = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Heading>{t(TranslationKey.TECHNOLOGIES)}</Heading>
      <P>{t(TranslationKey.TECHNOLOGIES_SHORT_DESCRIPTION)}</P>
      <IconsWrapper>
        <IconWrapper>
          <IconWithFlex type="React" />
        </IconWrapper>
        <IconWrapper>
          <IconWithFlex type="Node" />
        </IconWrapper>
        <IconWrapper>
          <IconWithFlex type="GraphQL" />
        </IconWrapper>
        <IconWrapper>
          <IconWithFlex type="Docker" />
        </IconWrapper>
      </IconsWrapper>
    </Section>
  );
};

export default Technologies;
