import React from "react";

import GlobalStyle from "../shared/UI/GlobalStyle";
import Home from "../Home";
import Layout from "src/modules/App/Layout";
import InteractiveChat from "src/modules/InteractiveChat";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Layout
        renderMain={() => <Home />}
        renderSide={(sideWrapperRef) => (
          <InteractiveChat scrollableWrapperRef={sideWrapperRef} />
        )}
      />
    </div>
  );
}

export default App;
