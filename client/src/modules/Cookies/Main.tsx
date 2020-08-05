import React, { FC, useEffect } from "react";

import Section from "src/modules/shared/UI/Section";
import Heading from "src/modules/shared/UI/Heading";
import { useTranslation, Trans } from "react-i18next";
import { TranslationKey } from "src/modules/Translations/Translation";
import P from "src/modules/shared/UI/Paragraph";
import useLocalStorage from "src/modules/shared/useLocalStorage";
import { Link } from "src/modules/Cookies/Main.components";

const CookiesMain: FC = () => {
  const { t } = useTranslation();
  const { setItem } = useLocalStorage();
  useEffect(() => {
    setItem("isCookiesMessageClosed", "true");
  }, [setItem]);

  // prettier-ignore
  return (
    <Section>
      <Heading>{t(TranslationKey.COOKIES_POLICY)}</Heading>
      <Trans i18nKey={TranslationKey.COOKIES_POLICY_DESCRIPTION}>
        <P>W celach dostosowania strony do potrzeb użytkowników oraz gromadzeniastatystyk witryna ta wykorzystuje pliki cookies. Pliki te niezawierają żadnych danych osobowych, a informacje w nich zawartewykorzystywane są do:</P><ul><li>Zbierania statystyk odnośnie użytkowników odwiedzających witrynę zwykorzystaniem narzędzi Google Analytics - szczegóły dotyczącedziałania znajdują się pod adresem <Link href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage">https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage</Link>,</li><li>Obserwowania aktywności odwiedzających z wykorzystaniem narzędziHotjar do tworzenia tzw. map cieplnych, które odwzorowują np.najczęściej klikane elementy - szczegóły dotyczące działaniaznajdują się pod adresem <Link href="https://help.hotjar.com/hc/en-us/articles/115011789248-Hotjar-Cookies">https://help.hotjar.com/hc/en-us/articles/115011789248-Hotjar-Cookies</Link>,</li><li>Dopasowania zawartości strony do preferencji użytkownika poprzezzapamiętanie wybranych ustawień.</li></ul><P>Użytkownik w każdej chwili może zmienić ustawienia przeglądarkiinternetowej w celu włączenia lub wyłączenia obsługi wspomnianychplików. Instrukcje dla poszczególnych przeglądarek znajdują się podwymienionymi adresami:</P><ul><li>Google Chrome - <Link href="https://support.google.com/chrome/answer/95647?hl=pl">https://support.google.com/chrome/answer/95647?hl=pl</Link></li><li>Mozilla Firefox - <Link href="https://support.mozilla.org/pl/kb/ciasteczka">https://support.mozilla.org/pl/kb/ciasteczka</Link></li><li>Internet Explorer - <Link href="https://support.microsoft.com/pl-pl/help/17442/windows-internet-explorer-delete-manage-cookies">https://support.microsoft.com/pl-pl/help/17442/windows-internet-explorer-delete-manage-cookies</Link></li><li>Safari - <Link href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac">https://support.apple.com/pl-pl/guide/safari/sfri11471/mac</Link></li></ul>
      </Trans>
    </Section>
  );
};

export default CookiesMain;
