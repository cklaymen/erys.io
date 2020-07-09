import React, { FC } from "react";

import InteractiveChat from "../InteractiveChat";
import Services from "src/modules/Home/Services";
import { HomeWrapper } from "src/modules/Home/components";

const Home: FC = () => (
  <HomeWrapper>
    <InteractiveChat />
    <Services />
  </HomeWrapper>
);

export default Home;
