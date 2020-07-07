import React, { FC } from "react";

import { InteractiveChatWrapper } from "./components";
import Avatar from "./Avatar";
import Message from "./Message";

const InteractiveChat: FC = () => (
  <InteractiveChatWrapper>
    <Avatar />
    <Message />
  </InteractiveChatWrapper>
);

export default InteractiveChat;
