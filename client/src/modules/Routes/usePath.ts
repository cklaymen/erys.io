import { useTranslation } from "react-i18next";

import pathKeys, { Location } from "src/modules/Routes/pathKeys";
import { useCallback } from "react";
import { Lang } from "src/modules/Translations/langs";
import pathVariables, { PathVariables } from "src/modules/Routes/pathVariables";
import { TranslationKey } from "src/modules/Translations/Translation";

export type VariablesOption = { [key in keyof PathVariables]?: string };

interface GetPathOptions {
  variables?: VariablesOption;
}

interface GetPathLangOptions extends GetPathOptions {
  lang: Lang;
}

interface GetPathLangsOptions extends GetPathOptions {
  langs: Lang[];
}

interface GetPath {
  (location: Location): string;
  (location: Location, options: GetPathOptions): string;
  (location: Location, options: GetPathLangOptions): string;
  (location: Location, options: GetPathLangsOptions): string[];
}

function joinSegments(subpaths: string[]): string {
  return "/" + subpaths.join("/");
}

function processVariables(segment: string, variables: VariablesOption) {
  const variableKeys = (Object.keys(
    variables
  ) as unknown) as (keyof PathVariables)[];
  for (let variableKey of variableKeys) {
    if (segment.match(pathVariables[variableKey as keyof PathVariables])) {
      return variables[variableKey as keyof PathVariables]!;
    }
  }
  return segment;
}

function usePath() {
  const { t } = useTranslation();

  const getPath = useCallback<GetPath>(
    (
      location: Location,
      options?: GetPathOptions | GetPathLangOptions | GetPathLangsOptions
    ): any => {
      let pathSegments = pathKeys[location] as string[];
      if (options) {
        if (options.variables) {
          pathSegments = pathSegments.map((it) =>
            processVariables(it, options.variables!)
          );
        }

        if ("lang" in options) {
          return joinSegments(
            pathSegments.map((it) =>
              it in TranslationKey ? t(it, { lng: options.lang }) : it
            )
          );
        } else if ("langs" in options) {
          return options.langs.map((lng) =>
            joinSegments(
              pathSegments.map((it) =>
                it in TranslationKey ? t(it, { lng }) : it
              )
            )
          );
        }
      }

      return joinSegments(
        pathSegments.map((it) => (it in TranslationKey ? t(it) : it))
      );
    },
    [t]
  );

  return {
    getPath,
  };
}

export default usePath;
