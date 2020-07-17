import React, { FC } from "react";

import {
  IllustrationType,
  illustrations,
} from "src/modules/shared/UI/Illustration/config";

interface Props {
  type: IllustrationType;
  className?: string;
}

const Illustration: FC<Props> = ({ type, className }) => (
  <img src={illustrations[type]} alt={type} className={className} />
);

export default Illustration;
