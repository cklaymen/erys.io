import React, { FC } from "react";
import { Trans } from "react-i18next";

import Message from "./Message";
import { Link } from "src/modules/InteractiveChat/Message/components";
import { QuestionMessageKey } from "./messagesConfigs";
import { TranslationKey } from "src/modules/Translations/Translation";
import InternalLink from "src/modules/Routes/InternalLink";

interface Props {
  askAbout(key: QuestionMessageKey): void;
}

const InitMessage: FC<Props> = ({ askAbout }) => {
  // prettier-ignore
  return (
    <Message author="erys" scrollIntoView={false}>
      <Trans i18nKey={TranslationKey.INIT_BUBBLE_MESSAGE}>
        Zajmuję się tworzeniem oprogramowania (złożonych <Link onClick={() => askAbout("askAboutWebApps")}>aplikacji webowych</Link> jak i prostych <Link onClick={() => askAbout("askAboutWebsites")}>stron internetowych</Link>). Chętnie podejmuję się realizacji dedykowanych rozwiązań, które mogą zautomatyzować bądź usprawnić zadania w Państwa działalności. Wykorzystuję <Link onClick={() => askAbout("askAboutModernTechnologies")}>nowoczesne technologie</Link>, które zapewniają sprawne i bezpieczne działanie programu. Posiadam odpowiednie <Link onClick={() => askAbout("askAboutEducation")}>wykształcenie</Link> oraz <Link onClick={() => askAbout("askAboutExperience")}>doświadczenie</Link> w tym kierunku. Więcej o mnie dowiesz się <InternalLink location="about"><Link>tutaj</Link></InternalLink>.
      </Trans>
    </Message>
  );
};

export default InitMessage;
