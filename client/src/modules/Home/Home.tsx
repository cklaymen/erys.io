import React, { FC } from "react";

import { HomeWrapper } from "src/modules/Home/components";
import Services from "src/modules/Home/Services";
import Steps from "src/modules/Home/Steps";
import Technologies from "src/modules/Home/Technologies";

const Home: FC = () => (
  <HomeWrapper>
    <Services />
    <Steps />
    <Technologies />
  </HomeWrapper>
);

export default Home;
