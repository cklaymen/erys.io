import { useTranslation } from "react-i18next";

import pathKeys, { Location } from "src/modules/Routes/pathKeys";
import { useCallback } from "react";
import { Lang } from "src/modules/Translations/langs";

interface GetPath {
  (location: Location): string;
  (location: Location, lang?: Lang): string;
  (location: Location, langs?: Lang[]): string[];
}

function joinSegments(subpaths: string[]): string {
  return "/" + subpaths.join("/");
}

function usePath() {
  const { t } = useTranslation();

  const getPath = useCallback<GetPath>(
    (location: Location, lang?: Lang | Lang[]): any => {
      const pathTranslationKeys = pathKeys[location];

      if (lang) {
        if (typeof lang === "string") {
          return joinSegments(
            pathTranslationKeys.map((it) => t(it, { lng: lang }))
          );
        } else {
          return (lang as string[]).map((lng) =>
            joinSegments(pathTranslationKeys.map((it) => t(it, { lng })))
          );
        }
      }
      return joinSegments(pathTranslationKeys.map((it) => t(it)));
    },
    [t]
  );

  return {
    getPath,
  };
}

export default usePath;
