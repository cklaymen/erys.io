import React, { FC } from "react";

import {
  AboutSideWrapper,
  AboutPortrait,
  AboutName,
  AboutContact,
  ContactValue,
  ContactIcon,
  ContactElement,
} from "src/modules/About/Side.components";
import { PHONE, EMAIL, PHONE_VALUE } from "src/const";

const AboutSide: FC = () => (
  <AboutSideWrapper>
    <AboutPortrait />
    <AboutName>Ryszard Plewnia</AboutName>
    <AboutContact>
      <ContactElement href={`tel:${PHONE_VALUE}`}>
        <ContactIcon type="Phone" />
        <ContactValue>{PHONE}</ContactValue>
      </ContactElement>
      <ContactElement href={`mailto:${EMAIL}`}>
        <ContactIcon type="Mail" />
        <ContactValue>{EMAIL}</ContactValue>
      </ContactElement>
    </AboutContact>
  </AboutSideWrapper>
);

export default AboutSide;
