import React, { ReactElement, RefObject } from "react";

import { Location } from "src/modules/Routes/pathKeys";
import InteractiveChat from "src/modules/InteractiveChat";
import Home from "src/modules/Home";
import { AboutMain, AboutSide } from "src/modules/About";
import WorksMain from "src/modules/Works/Main";
import ServicesMain from "src/modules/Services/Main";
import CookiesMain from "src/modules/Cookies/Main";
import { TranslationKey } from "src/modules/Translations/Translation";
import Main404 from "src/modules/404/main";
import BlogMain from "src/modules/Blog/Main";
import ArticleMain from "src/modules/Blog/Article/Main";
import ArticleSide from "src/modules/Blog/Article/Side";

type RenderSide = (wrapperRef?: RefObject<HTMLDivElement>) => ReactElement;
type RenderMain = () => ReactElement;

interface RouteConfig {
  location: Location;
  titleKey?: TranslationKey;
  descriptionKey?: TranslationKey;
  keywordsKey?: TranslationKey;
  side?: RouteSideConfig;
  main: RouteMainConfig;
  exact?: boolean;
}

interface RouteMainConfig {
  key: string;
  titleKey?: TranslationKey;
  descriptionKey?: TranslationKey;
  keywordsKey?: TranslationKey;
  render: RenderMain;
  exact?: boolean;
}

interface RouteSideConfig {
  key: string;
  render: RenderSide;
  onlyOnLargerDevice?: boolean;
  exact?: boolean;
}

const routesConfig: RouteConfig[] = [
  {
    location: "home",
    titleKey: TranslationKey.HOME_PATH_TITLE,
    descriptionKey: TranslationKey.HOME_PATH_DESCRIPTION,
    keywordsKey: TranslationKey.HOME_PATH_KEYWORDS,
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
    keywordsKey: TranslationKey.ABOUT_PATH_KEYWORDS,
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
    keywordsKey: TranslationKey.WORKS_PATH_KEYWORDS,
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
    keywordsKey: TranslationKey.SERVICES_PATH_KEYWORDS,
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
    keywordsKey: TranslationKey.COOKIES_POLICY_PATH_KEYWORDS,
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
  {
    location: "blogArticle",
    main: { key: "ArticleMain", render: () => <ArticleMain /> },
    side: {
      key: "ArticleSide",
      render: () => <ArticleSide />,
    },
  },
  {
    location: "blog",
    main: { key: "BlogMain", render: () => <BlogMain /> },
    side: {
      key: "InteractiveChat",
      render: (sideWrapperRef) => (
        <InteractiveChat scrollableWrapperRef={sideWrapperRef} />
      ),
      onlyOnLargerDevice: true,
    },
  },

  // Always on bottom:
  {
    location: "home",
    exact: false,
    titleKey: TranslationKey.NOT_FOUND_PATH_TITLE,
    main: { key: "Main404", render: () => <Main404 /> },
  },
];

export default routesConfig;

export const routesSideConfig = routesConfig
  .filter((it) => it.side !== undefined)
  .map((it) => ({ location: it.location, exact: it.exact, ...it.side! }))
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
  keywordsKey: it.keywordsKey,
  exact: it.exact,
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
