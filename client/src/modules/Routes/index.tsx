import React, { FC, useMemo } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import usePath from "src/modules/Routes/usePath";
import routesConfig from "src/modules/Routes/config";
import langs from "src/modules/Translations/langs";

const Routes: FC = () => {
  const { getPath } = usePath();
  const routes = useMemo(
    () =>
      routesConfig.map((it, index) => (
        <Route key={index} path={getPath(it.location, langs)} exact={true}>
          {it.render()}
        </Route>
      )),
    [getPath]
  );

  return (
    <BrowserRouter>
      <Switch>{routes}</Switch>
    </BrowserRouter>
  );
};

export default Routes;
