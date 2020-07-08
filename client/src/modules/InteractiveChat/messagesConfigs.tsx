import { TranslationKey } from "../Translations/Translation";
import { MessageProps } from "src/modules/InteractiveChat/Message";

export class MessageConfig implements MessageProps {
  constructor(
    public translationKey: TranslationKey,
    public author: "erys" | "user",
    public writingBeforeShowMessage?: boolean
  ) {}
}

const questionsMessages = {
  askAboutWebApps: new MessageConfig(
    TranslationKey.QUESTION_ABOUT_WEB_APPS,
    "user"
  ),
  askAboutWebsites: new MessageConfig(
    TranslationKey.QUESTION_ABOUT_WEBSITES,
    "user"
  ),
  askAboutModernTechnologies: new MessageConfig(
    TranslationKey.QUESTION_ABOUT_MODERN_TECHNOLOGIES,
    "user"
  ),
  askAboutEducation: new MessageConfig(
    TranslationKey.QUESTION_ABOUT_EDUCATION,
    "user"
  ),
  askAboutExperience: new MessageConfig(
    TranslationKey.QUESTION_ABOUT_EXPERIENCE,
    "user"
  ),
};

const answersMessages = {
  answerAboutWebApps: new MessageConfig(
    TranslationKey.ANSWER_ABOUT_WEB_APPS,
    "erys"
  ),
  answerAboutWebsites: new MessageConfig(
    TranslationKey.ANSWER_ABOUT_WEBSITES,
    "erys"
  ),
  answerAboutModernTechnologies: new MessageConfig(
    TranslationKey.ANSWER_ABOUT_MODERN_TECHNOLOGIES,
    "erys"
  ),
  answerAboutEducation: new MessageConfig(
    TranslationKey.ANSWER_ABOUT_EDUCATION,
    "erys"
  ),
  answerAboutExperience: new MessageConfig(
    TranslationKey.ANSWER_ABOUT_EXPERIENCE,
    "erys"
  ),
};

const messagesConfigs = {
  ...questionsMessages,
  ...answersMessages,
};

type AnswersForQuestions = {
  [key in QuestionMessageKey]: AnswerMessageKey;
};

const answersForQuestions: AnswersForQuestions = {
  askAboutWebApps: "answerAboutWebApps",
  askAboutWebsites: "answerAboutWebsites",
  askAboutModernTechnologies: "answerAboutModernTechnologies",
  askAboutEducation: "answerAboutEducation",
  askAboutExperience: "answerAboutExperience",
};

export function getAnswerMessageKeyForQuestionMessageKey(
  questionMessageKey: QuestionMessageKey
) {
  return answersForQuestions[questionMessageKey];
}

export type QuestionMessageKey = keyof typeof questionsMessages;
export type AnswerMessageKey = keyof typeof answersMessages;
export type MessageConfigKey = keyof typeof messagesConfigs;

export default messagesConfigs;
