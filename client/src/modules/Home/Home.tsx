import React, { FC } from "react";

import InteractiveChat from "../InteractiveChat";
import Services from "src/modules/Home/Services";

const Home: FC = () => (
  <div>
    <InteractiveChat />
    <Services />
  </div>
);

export default Home;
