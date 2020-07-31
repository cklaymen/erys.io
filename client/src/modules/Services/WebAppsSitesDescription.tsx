import React, { FC } from "react";
import { Trans } from "react-i18next";

import { TranslationKey } from "src/modules/Translations/Translation";
import { WebAppsSitesOl } from "src/modules/Services/WebAppsSitesDescription.components";

// prettier-ignore
const WebAppsSitesDescription: FC = () => (
  <Trans i18nKey={TranslationKey.WEB_APPS_SITES_SERVICE_DESCRIPTION}>
    Projektuję oraz tworzę od postaw dedykowane oprogramowanie według konkretnych wytycznych zamawiającego. W zaleności od potrzeby jest to:
    <WebAppsSitesOl>
      <li>Rozbudowana aplikacja webowa, na którą składa się część działająca na serwerze oraz część działająca na urządzeniu użytkownika,</li>
      <li>Strona internetowa z możliwością edycji treści, która również wymaga części działającej na serwerze oraz na urządzeniu użytkownika,</li>
      <li>Statyczna strona internetowa, której treść nie jest możliwa do bezpośredniej modyfikacji.</li>
    </WebAppsSitesOl>
    Poszczególne rozwiązanie proponowane jest na podstawie wcześniejszych rozmów i ustaleń z zamawiającym.
  </Trans>
);

export default WebAppsSitesDescription;
