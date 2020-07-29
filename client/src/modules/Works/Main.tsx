import React, { FC } from "react";

import { WorksMainWrapper } from "src/modules/Works/Main.components";
import Section from "src/modules/shared/UI/Section";
import Heading from "src/modules/shared/UI/Heading";
import P from "src/modules/shared/UI/Paragraph";

const WorksMain: FC = () => {
  return (
    <WorksMainWrapper>
      <Section>
        <Heading>Realizacje</Heading>
        <P>Opis...</P>
      </Section>
    </WorksMainWrapper>
  );
};

export default WorksMain;
