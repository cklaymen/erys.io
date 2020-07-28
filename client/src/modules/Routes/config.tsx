import React, { ReactElement, RefObject } from "react";

import { Location } from "src/modules/Routes/pathKeys";
import InteractiveChat from "src/modules/InteractiveChat";
import Home from "src/modules/Home";
import { AboutMain, AboutSide } from "src/modules/About";

interface RouteConfig {
  location: Location;
  renderMain(): ReactElement;
  renderSide(wrapperRef?: RefObject<HTMLDivElement>): ReactElement;
}

const routesConfig: RouteConfig[] = [
  {
    location: "home",
    renderMain: () => <Home />,
    renderSide: (sideWrapperRef) => (
      <InteractiveChat scrollableWrapperRef={sideWrapperRef} />
    ),
  },
  {
    location: "about",
    renderMain: () => <AboutMain />,
    renderSide: () => <AboutSide />,
  },
];

export default routesConfig;
