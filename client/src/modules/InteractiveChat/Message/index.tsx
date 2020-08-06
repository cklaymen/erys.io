import React, { FC, useState, useEffect, useRef } from "react";

import { MessageWrapper } from "./components";
import { WRITING_MESSAGE_TIME_IN_MS } from "./config";
import useDevice from "src/modules/shared/useDevice";

export interface MessageProps {
  author: "erys" | "user";
  writingBeforeShowMessage?: boolean;
  scrollIntoView?: boolean;
  onMessageLoaded?(): void;
}

const Message: FC<MessageProps> = ({
  author,
  writingBeforeShowMessage = true,
  scrollIntoView = true,
  onMessageLoaded,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(writingBeforeShowMessage);
  const { isSize } = useDevice();
  useEffect(() => {
    if (scrollIntoView && isSize("extraSmall", "small", "medium")) {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    if (loading) {
      const t = setTimeout(() => {
        setLoading(false);
      }, WRITING_MESSAGE_TIME_IN_MS);
      return () => clearTimeout(t);
    }
  }, [loading, setLoading, scrollIntoView, isSize]);
  useEffect(() => {
    if (!loading && onMessageLoaded) {
      onMessageLoaded();
    }
  }, [loading, onMessageLoaded]);
  return (
    <MessageWrapper author={author} ref={ref} isLoading={loading}>
      {loading ? "..." : children}
    </MessageWrapper>
  );
};

export default Message;
