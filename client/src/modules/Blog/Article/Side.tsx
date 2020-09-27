import { ApolloProvider } from "@apollo/client";
import React, { FC } from "react";

import apolloClient from "src/modules/Apollo/apolloClient";

const ArticleSide: FC = () => {
  return <ApolloProvider client={apolloClient}>_ARTICLE_SIDE_</ApolloProvider>;
};

export default ArticleSide;
