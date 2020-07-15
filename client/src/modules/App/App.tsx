import React, { useMemo } from "react";

import GlobalStyle from "../shared/UI/GlobalStyle";
import Home from "../Home";
import Topbar from "src/modules/Topbar";
import ScrollProvider from "src/modules/Topbar/useScroll/Provider";
import { ContentWrapper } from "src/modules/App/components";
import useDevice from "src/modules/shared/useDevice";

function App() {
  const { isSize } = useDevice();
  const showTopbar = useMemo(() => isSize("extraSmall", "small", "medium"), [
    isSize,
  ]);

  return (
    <div>
      <GlobalStyle />
      {showTopbar && (
        <ScrollProvider>
          <Topbar />
        </ScrollProvider>
      )}
      <ContentWrapper>
        <Home />
      </ContentWrapper>
    </div>
  );
}

export default App;
