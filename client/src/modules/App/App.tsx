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

function App() {
  const { getPath } = usePath();
  const { isSize } = useDevice();
  const sideOnlyOnLargerDevicePaths = useMemo(
    () =>
      routesConfig
        .filter((it) => it.side.onlyOnLargerDevice === true)
        .map((it) => getPath(it.location, langs))
        .reduce((a, b) => [...a, ...b], []),
    [getPath]
  );
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
                  render={it.render}
                  exact={true}
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
                exact={true}
              />
            ))}
          </Switch>
        )}
      />
    </>
  );
}

export default App;
