import React, { ReactElement } from "react";

import { Location } from "src/modules/Routes/pathKeys";
import Layout from "src/modules/App/Layout";
import InteractiveChat from "src/modules/InteractiveChat";
import Home from "src/modules/Home";

interface RouteConfig {
  location: Location;
  render(): ReactElement;
}

const routesConfig: RouteConfig[] = [
  {
    location: "home",
    render: () => {
      return (
        <Layout
          renderMain={() => <Home />}
          renderSide={(sideWrapperRef) => (
            <InteractiveChat scrollableWrapperRef={sideWrapperRef} />
          )}
        />
      );
    },
  },
  {
    location: "about",
    render: () => {
      return (
        <Layout
          renderMain={() => <div>_ABOUT_</div>}
          renderSide={(sideWrapperRef) => (
            <InteractiveChat scrollableWrapperRef={sideWrapperRef} />
          )}
        />
      );
    },
  },
];

export default routesConfig;
