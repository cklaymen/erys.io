import React, { FC, useState, useMemo, useEffect, RefObject } from "react";
import { useTranslation } from "react-i18next";

import {
  InteractiveChatSectionWrapper,
  MessagesWrapper,
  InteractiveChatWrapper,
} from "./components";
import Avatar from "./Avatar";
import Message from "./Message";
import InitMessage from "./InitMessage";
import messagesConfigs, {
  QuestionMessageKey,
  getAnswerMessageKeyForQuestionMessageKey,
  MessageConfig,
} from "src/modules/InteractiveChat/messagesConfigs";
import { WRITING_MESSAGE_TIME_IN_MS } from "src/modules/InteractiveChat/Message/config";

interface Props {
  className?: string;
  scrollableWrapperRef?: RefObject<any>;
}

const InteractiveChat: FC<Props> = ({ className, scrollableWrapperRef }) => {
  const [chatMessagesConfigs, setChatMessagesConfigs] = useState<
    MessageConfig[]
  >([]);
  const [lastQuestionKey, setLastQuestionKey] = useState<QuestionMessageKey>();
  const { t } = useTranslation();

  const messages = useMemo(
    () =>
      chatMessagesConfigs.map((messageConfig, index) => {
        return (
          <Message
            author={messageConfig.author}
            key={index}
            writingBeforeShowMessage={messageConfig.writingBeforeShowMessage}
          >
            {t(messageConfig.translationKey)}
          </Message>
        );
      }),
    [chatMessagesConfigs, t]
  );
  useEffect(() => {
    if (scrollableWrapperRef) {
      scrollableWrapperRef.current?.scrollTo({
        behavior: "smooth",
        top: scrollableWrapperRef.current?.scrollHeight,
      });
    }
    if (lastQuestionKey) {
      const t = setTimeout(() => {
        const answerMessageKey = getAnswerMessageKeyForQuestionMessageKey(
          lastQuestionKey
        );
        setLastQuestionKey(undefined);
        setChatMessagesConfigs([
          ...chatMessagesConfigs,
          {
            ...messagesConfigs[lastQuestionKey],
            writingBeforeShowMessage: false,
            scrollIntoView: false,
          },
          messagesConfigs[answerMessageKey],
        ]);
      }, WRITING_MESSAGE_TIME_IN_MS);
      return () => clearTimeout(t);
    }
  }, [lastQuestionKey, chatMessagesConfigs, scrollableWrapperRef]);

  return (
    <InteractiveChatWrapper className={className}>
      <InteractiveChatSectionWrapper>
        <Avatar />
        <MessagesWrapper>
          <InitMessage askAbout={(key) => setLastQuestionKey(key)} />
          {messages}
        </MessagesWrapper>
      </InteractiveChatSectionWrapper>
      {lastQuestionKey && (
        <InteractiveChatSectionWrapper>
          {/* Workaround to get the same width as above */}
          <Avatar style={{ height: 0 }} />
          <MessagesWrapper>
            <Message author="user">
              {t(messagesConfigs[lastQuestionKey].translationKey)}
            </Message>
          </MessagesWrapper>
        </InteractiveChatSectionWrapper>
      )}
    </InteractiveChatWrapper>
  );
};

export default InteractiveChat;
