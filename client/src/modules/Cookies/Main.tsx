import React, { FC, useEffect } from "react";

import Section from "src/modules/shared/UI/Section";
import Heading from "src/modules/shared/UI/Heading";
import { useTranslation } from "react-i18next";
import { TranslationKey } from "src/modules/Translations/Translation";
import P from "src/modules/shared/UI/Paragraph";
import useLocalStorage from "src/modules/shared/useLocalStorage";

const CookiesMain: FC = () => {
  const { t } = useTranslation();
  const { setItem } = useLocalStorage();
  useEffect(() => {
    setItem("isCookiesMessageClosed", "true");
  }, [setItem]);

  return (
    <Section>
      <Heading>{t(TranslationKey.COOKIES_POLICY)}</Heading>
      <P>{t(TranslationKey.COOKIES_POLICY_DESCRIPTION)}</P>
    </Section>
  );
};

export default CookiesMain;
