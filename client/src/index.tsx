import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";

import App from "./modules/App";
import * as serviceWorker from "./serviceWorker";
import initTranslations from "./modules/Translations";
import DeviceProvider from "src/modules/shared/useDevice/Provider";
import { BrowserRouter } from "react-router-dom";
import LocalStorageProvider from "src/modules/shared/useLocalStorage/Provider";
import { HelmetProvider } from "react-helmet-async";

initTranslations();

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <DeviceProvider>
          <LocalStorageProvider>
            <App />
          </LocalStorageProvider>
        </DeviceProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
