import React, { FC } from "react";

import {
  LoadingSpinner,
  LoadingWrapper,
} from "src/modules/shared/UI/Loading/components";

const Loading: FC = () => (
  <LoadingWrapper>
    <LoadingSpinner />
  </LoadingWrapper>
);

export default Loading;
