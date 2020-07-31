import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import Section from "src/modules/shared/UI/Section";
import {
  WorkVideo,
  TechnologiesWrapper,
  TechnologyIcon,
} from "src/modules/Works/Work.components";
import { WorkConfig } from "src/modules/Works/config";
import Heading from "src/modules/shared/UI/Heading";
import P from "src/modules/shared/UI/Paragraph";
import { TranslationKey } from "src/modules/Translations/Translation";

interface Props {
  config: WorkConfig;
}

const Work: FC<Props> = ({ config }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { t } = useTranslation();
  return (
    <Section style={{ position: "relative" }}>
      <WorkVideo
        src={config.videoSrc}
        poster={config.videoPosterSrc}
        isPlaying={isPlaying}
        controls
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <Heading>{t(config.titleKey)}</Heading>
      <P>{t(config.descriptionKey)}</P>
      <TechnologiesWrapper>
        <span>{t(TranslationKey.USED_TECHNOLOGIES)}:</span>
        {config.technologies.map((iconType) => (
          <TechnologyIcon key={iconType} type={iconType} title={iconType} />
        ))}
      </TechnologiesWrapper>
    </Section>
  );
};

export default Work;
