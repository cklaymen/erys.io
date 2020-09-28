import { ApolloProvider } from "@apollo/client";
import React, { FC } from "react";

import apolloClient from "src/modules/Apollo/apolloClient";
import ArticleDetailsContainer from "src/modules/Blog/Article/Details";

const ArticleSide: FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <ArticleDetailsContainer />
    </ApolloProvider>
  );
};

export default ArticleSide;
