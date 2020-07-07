import React, { FC } from "react";
import { Trans } from "react-i18next";

import { MessageWrapper, Link } from "./components";

const Message: FC = () => {
  return (
    <MessageWrapper>
      <Trans i18nKey="INIT_BUBBLE_MESSAGE">
        Zajmuję się tworzeniem oprogramowania (złożonych{" "}
        <Link>aplikacji webowych</Link> jak i prostych{" "}
        <Link>stron internetowych</Link>). Chętnie podejmuję się realizacji
        dedykowanych rozwiązań, które mogą zautomatyzować bądź usprawnić zadania
        w Państwa działalności. Wykorzystuję <Link>nowoczesne technologie</Link>
        , które zapewniają sprawne i bezpieczne działanie programu. Posiadam
        odpowiednie <Link>wykształcenie</Link> oraz <Link>doświadczenie</Link> w
        tym kierunku. Więcej o mnie dowiesz się <Link>tutaj</Link>.
      </Trans>
    </MessageWrapper>
  );
};

export default Message;
