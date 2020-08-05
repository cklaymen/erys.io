import React, { FC, useCallback } from "react";
import { Trans } from "react-i18next";

import {
  CookiesFloatMessageWrapper,
  CloseIcon,
  Link,
} from "src/modules/Cookies/FloatMessage.components";
import { TranslationKey } from "src/modules/Translations/Translation";
import usePath from "src/modules/Routes/usePath";
import langs from "src/modules/Translations/langs";
import { useRouteMatch } from "react-router-dom";
import useLocalStorage from "src/modules/shared/useLocalStorage";

const CookiesFloatMessage: FC = () => {
  const { getItem, setItem } = useLocalStorage();
  const { getPath } = usePath();
  const isCookiesPath =
    useRouteMatch({
      path: getPath("cookies", langs),
      exact: true,
    }) !== null;

  const handleCloseClick = useCallback(() => {
    setItem("isCookiesMessageClosed", "true");
  }, [setItem]);
  const isShow = !(getItem("isCookiesMessageClosed") === "true");

  if (!isShow || isCookiesPath) {
    return null;
  }
  // prettier-ignore
  return (
    <CookiesFloatMessageWrapper>
      <span>
        <Trans i18nKey={TranslationKey.COOKIES_SHORT_DESCRIPTION}>
          <span role="img" aria-label="cookie">🍪</span> Wykorzystuję pliki cookies - więcej szczegółów <Link location="cookies">tutaj</Link>.
        </Trans>
      </span>
      <CloseIcon onClick={handleCloseClick} />
    </CookiesFloatMessageWrapper>
  );
};

export default CookiesFloatMessage;
