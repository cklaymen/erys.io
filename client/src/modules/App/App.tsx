import React from "react";

import GlobalStyle from "../shared/UI/GlobalStyle";
import Home from "../Home";
import DeviceProvider from "src/modules/shared/useDevice/Provider";

function App() {
  return (
    <DeviceProvider>
      <GlobalStyle />
      <Home />
    </DeviceProvider>
  );
}

export default App;
