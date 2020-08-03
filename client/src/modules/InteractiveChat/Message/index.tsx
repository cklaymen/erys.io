import React, { FC, useState, useEffect, useRef } from "react";

import { MessageWrapper } from "./components";
import { WRITING_MESSAGE_TIME_IN_MS } from "./config";
import useDevice from "src/modules/shared/useDevice";

export interface MessageProps {
  author: "erys" | "user";
  writingBeforeShowMessage?: boolean;
  scrollIntoView?: boolean;
}

const Message: FC<MessageProps> = ({
  author,
  writingBeforeShowMessage = true,
  scrollIntoView = true,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(writingBeforeShowMessage);
  const { isSize } = useDevice();
  useEffect(() => {
    if (scrollIntoView && isSize("extraSmall", "small", "medium")) {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
    if (loading) {
      const t = setTimeout(() => {
        setLoading(false);
      }, WRITING_MESSAGE_TIME_IN_MS);
      return () => clearTimeout(t);
    }
  }, [loading, setLoading, scrollIntoView, isSize]);
  return (
    <MessageWrapper author={author} ref={ref} isLoading={loading}>
      {loading ? "..." : children}
    </MessageWrapper>
  );
};

export default Message;
