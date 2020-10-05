import { ApolloProvider } from "@apollo/client";
import React, { FC } from "react";

import apolloClient from "src/modules/Apollo/apolloClient";
import ArticleContentContainer from "src/modules/Blog/Article/Content";

const ArticleMain: FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <ArticleContentContainer />
    </ApolloProvider>
  );
};

export default ArticleMain;
