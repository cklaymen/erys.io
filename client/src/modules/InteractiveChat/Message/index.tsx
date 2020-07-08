import React, { FC, useState, useEffect } from "react";

import { MessageWrapper } from "./components";
import { WRITING_MESSAGE_TIME_IN_MS } from "./config";

export interface MessageProps {
  author: "erys" | "user";
  writingBeforeShowMessage?: boolean;
}

const Message: FC<MessageProps> = ({
  author,
  writingBeforeShowMessage = true,
  children,
}) => {
  const [loading, setLoading] = useState(writingBeforeShowMessage);
  useEffect(() => {
    if (loading) {
      const t = setTimeout(() => {
        setLoading(false);
      }, WRITING_MESSAGE_TIME_IN_MS);
      return () => clearTimeout(t);
    }
  }, [loading, setLoading]);
  return (
    <MessageWrapper author={author}>
      {loading ? "..." : children}
    </MessageWrapper>
  );
};

export default Message;
