import { ApolloProvider } from "@apollo/client";
import React, { FC } from "react";

import apolloClient from "src/modules/Apollo/apolloClient";

const ArticleMain: FC = () => {
  return <ApolloProvider client={apolloClient}>_ARTILCE_MAIN_</ApolloProvider>;
};

export default ArticleMain;
