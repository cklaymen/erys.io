import { ApolloProvider } from "@apollo/client";
import React, { FC } from "react";

import apolloClient from "src/modules/Apollo/apolloClient";
import ArticlesList from "src/modules/Blog/ArticlesList";

const BlogMain: FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <ArticlesList />
    </ApolloProvider>
  );
};

export default BlogMain;
