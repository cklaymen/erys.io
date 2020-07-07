import React, { FC } from "react";

import { MessageWrapper } from "./components";
import Avatar from "./Avatar";
import Bubble from "./Bubble";

const Message: FC = () => (
  <MessageWrapper>
    <Avatar />
    <Bubble />
  </MessageWrapper>
);

export default Message;
