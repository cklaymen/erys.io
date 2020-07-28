import React from "react";

import GlobalStyle from "../shared/UI/GlobalStyle";
import Layout from "src/modules/App/Layout";
import routesConfig from "src/modules/Routes/config";
import { Route, Switch } from "react-router-dom";
import usePath from "src/modules/Routes/usePath";

function App() {
  const { getPath } = usePath();

  return (
    <>
      <GlobalStyle />
      <Layout
        renderMain={() => (
          <Switch>
            {routesConfig.map((it, index) => (
              <Route
                key={index}
                path={getPath(it.location)}
                render={it.renderMain}
                exact={true}
              />
            ))}
          </Switch>
        )}
        renderSide={(wrapperRef) => (
          <Switch>
            {routesConfig.map((it, index) => (
              <Route
                key={index}
                path={getPath(it.location)}
                render={() => it.renderSide(wrapperRef)}
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
