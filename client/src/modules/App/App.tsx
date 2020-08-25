import React, { useMemo } from "react";

import GlobalStyle from "../shared/UI/GlobalStyle";
import Layout from "src/modules/App/Layout";
import routesConfig, {
  routesMainConfig,
  routesSideConfig,
} from "src/modules/Routes/config";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import usePath from "src/modules/Routes/usePath";
import langs from "src/modules/Translations/langs";
import useDevice from "src/modules/shared/useDevice";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

function App() {
  const { getPath } = usePath();
  const { isSize } = useDevice();
  const sideOnlyOnLargerDevicePaths = useMemo(
    () =>
      routesConfig
        .filter((it) => it.side && it.side.onlyOnLargerDevice === true)
        .map((it) => getPath(it.location, langs))
        .reduce((a, b) => [...a, ...b], []),
    [getPath]
  );
  const { t } = useTranslation();
  const sideOnlyOnLargerDevice =
    useRouteMatch({
      path: sideOnlyOnLargerDevicePaths,
      exact: true,
    }) !== null;

  const isLargerDevice = isSize("large", "extraLarge");

  return (
    <>
      <GlobalStyle />
      <Layout
        hideSide={sideOnlyOnLargerDevice && !isLargerDevice}
        renderMain={() => (
          <Switch>
            {routesMainConfig.map((it, index) => {
              return (
                <Route
                  key={index}
                  path={getPath(it.location, langs)}
                  render={() => {
                    let helmet;
                    let title;
                    let description;
                    let keywords;

                    if (it.titleKey) {
                      title = t(it.titleKey);
                    }
                    if (it.descriptionKey) {
                      description = t(it.descriptionKey);
                    }
                    if (it.keywordsKey) {
                      keywords = t(it.keywordsKey);
                    }
                    if (title || description) {
                      helmet = (
                        <Helmet>
                          {title && <title>{title}</title>}
                          {description && (
                            <meta
                              name="description"
                              property="og:description"
                              content={description}
                            />
                          )}
                          {keywords && (
                            <meta name="keywords" content={keywords} />
                          )}
                        </Helmet>
                      );
                    }
                    return (
                      <>
                        {helmet}
                        {it.render()}
                      </>
                    );
                  }}
                  exact={it.exact !== undefined ? it.exact : true}
                />
              );
            })}
          </Switch>
        )}
        renderSide={(wrapperRef) => (
          <Switch>
            {routesSideConfig.map((it, index) => (
              <Route
                key={index}
                path={it.locations
                  .map((location) => getPath(location, langs))
                  .reduce((a, b) => [...a, ...b], [])}
                render={() =>
                  it.onlyOnLargerDevice && !isLargerDevice
                    ? null
                    : it.render(wrapperRef)
                }
                exact={it.exact !== undefined ? it.exact : true}
              />
            ))}
          </Switch>
        )}
      />
    </>
  );
}

export default App;
