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
import { IconType } from "src/modules/shared/UI/Icon/config";

const technologies: IconType[] = [
  "React",
  "Node",
  "Next",
  "Nest",
  "Netlify",
  "GraphQL",
  "Docker",
];

const Technologies: FC = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Heading>{t(TranslationKey.TECHNOLOGIES)}</Heading>
      <P>{t(TranslationKey.TECHNOLOGIES_SHORT_DESCRIPTION)}</P>
      <IconsWrapper>
        {technologies.map((it) => (
          <IconWrapper>
            <IconWithFlex type={it} title={it} />
          </IconWrapper>
        ))}
      </IconsWrapper>
    </Section>
  );
};

export default Technologies;
