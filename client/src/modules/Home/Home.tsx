import React, { FC } from "react";

import { HomeWrapper } from "src/modules/Home/components";
import InteractiveChat from "src/modules/InteractiveChat";
import Services from "src/modules/Home/Services";
import Steps from "src/modules/Home/Steps";

const Home: FC = () => (
  <HomeWrapper>
    <InteractiveChat />
    <Services />
    <Steps />
  </HomeWrapper>
);

export default Home;
