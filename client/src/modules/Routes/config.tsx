import React, { ReactElement, RefObject } from "react";

import { Location } from "src/modules/Routes/pathKeys";
import InteractiveChat from "src/modules/InteractiveChat";
import Home from "src/modules/Home";
import { AboutMain, AboutSide } from "src/modules/About";
import WorksMain from "src/modules/Works/Main";
import ServicesMain from "src/modules/Services/Main";
import CookiesMain from "src/modules/Cookies/Main";
import { TranslationKey } from "src/modules/Translations/Translation";

type RenderSide = (wrapperRef?: RefObject<HTMLDivElement>) => ReactElement;
type RenderMain = () => ReactElement;

interface RouteConfig {
  location: Location;
  titleKey?: TranslationKey;
  descriptionKey?: TranslationKey;
  side: RouteSideConfig;
  main: RouteMainConfig;
}

interface RouteMainConfig {
  key: string;
  titleKey?: TranslationKey;
  descriptionKey?: TranslationKey;
  render: RenderMain;
}

interface RouteSideConfig {
  key: string;
  render: RenderSide;
  onlyOnLargerDevice?: boolean;
}

const routesConfig: RouteConfig[] = [
  {
    location: "home",
    side: {
      key: "InteractiveChat",
      render: (sideWrapperRef) => (
        <InteractiveChat scrollableWrapperRef={sideWrapperRef} />
      ),
    },
    main: {
      key: "Home",
      render: () => <Home />,
    },
  },
  {
    location: "about",
    titleKey: TranslationKey.ABOUT_PATH_TITLE,
    descriptionKey: TranslationKey.ABOUT_PATH_DESCRIPTION,
    side: {
      key: "AboutSide",
      render: () => <AboutSide />,
    },
    main: {
      key: "AboutMain",
      render: () => <AboutMain />,
    },
  },
  {
    location: "works",
    titleKey: TranslationKey.WORKS_PATH_TITLE,
    descriptionKey: TranslationKey.WORKS_PATH_DESCRIPTION,
    side: {
      key: "InteractiveChat",
      render: (sideWrapperRef) => (
        <InteractiveChat scrollableWrapperRef={sideWrapperRef} />
      ),
      onlyOnLargerDevice: true,
    },
    main: {
      key: "WorksMain",
      render: () => <WorksMain />,
    },
  },
  {
    location: "services",
    titleKey: TranslationKey.SERVICES_PATH_TITLE,
    descriptionKey: TranslationKey.SERVICES_PATH_DESCRIPTION,
    side: {
      key: "InteractiveChat",
      render: (sideWrapperRef) => (
        <InteractiveChat scrollableWrapperRef={sideWrapperRef} />
      ),
      onlyOnLargerDevice: true,
    },
    main: {
      key: "ServicesMain",
      render: () => <ServicesMain />,
    },
  },
  {
    location: "cookies",
    titleKey: TranslationKey.COOKIES_POLICY_PATH_TITLE,
    descriptionKey: TranslationKey.COOKIES_POLICY_PATH_DESCRIPTION,
    side: {
      key: "InteractiveChat",
      render: (sideWrapperRef) => (
        <InteractiveChat scrollableWrapperRef={sideWrapperRef} />
      ),
      onlyOnLargerDevice: true,
    },
    main: {
      key: "CookiesMain",
      render: () => <CookiesMain />,
    },
  },
];

export default routesConfig;

export const routesSideConfig = routesConfig
  .map((it) => ({ location: it.location, ...it.side }))
  .reduce((a, b) => {
    const foundElement = a.find((it) => it.key === b.key);
    if (foundElement) {
      foundElement.locations.push(b.location);
      return a;
    }
    const { location, ...restRouteProps } = b;
    return [...a, { locations: [location], ...restRouteProps }];
  }, [] as Array<RouteSideConfig & { locations: Location[] }>);
export const routesMainConfig = routesConfig.map((it) => ({
  location: it.location,
  titleKey: it.titleKey,
  descriptionKey: it.descriptionKey,
  ...it.main,
}));

// export const routesMainConfig: RouteMainConfig[] = [
//   { location: "home", render: () => <Home /> },
//   { location: "about", render: () => <AboutMain /> },
//   { location: "works", render: () => <WorksMain /> },
// ];

// export const routesSideConfig: RouteSideConfig[] = [
//   {
//     locations: ["home"],
//     render: (sideWrapperRef) => (
//       <InteractiveChat scrollableWrapperRef={sideWrapperRef} />
//     ),
//   },
//   { locations: ["about"], render: () => <AboutSide /> },
//   {
//     locations: ["works"],
//     render: (sideWrapperRef) => (
//       <InteractiveChat scrollableWrapperRef={sideWrapperRef} />
//     ),
//   },
// ];
