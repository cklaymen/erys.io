import React, { ReactElement } from "react";

import { Location } from "src/modules/Routes/pathKeys";
import Layout from "src/modules/App/Layout";
import InteractiveChat from "src/modules/InteractiveChat";
import Home from "src/modules/Home";
import { AboutMain, AboutSide } from "src/modules/About";

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
          currentLocation="home"
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
          currentLocation="about"
          renderMain={() => <AboutMain />}
          renderSide={() => <AboutSide />}
        />
      );
    },
  },
];

export default routesConfig;
