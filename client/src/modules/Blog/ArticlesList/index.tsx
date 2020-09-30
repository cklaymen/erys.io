import React, { FC } from "react";

import { useArticlesQuery } from "src/generated/graphql";
import ArticlesList from "src/modules/Blog/ArticlesList/ArticlesList";
import Loading from "src/modules/shared/UI/Loading";

const ArticlesListContainer: FC = () => {
  const { data, loading } = useArticlesQuery();

  if (loading) {
    return <Loading />;
  }

  return <ArticlesList articles={data?.articles} />;
};

export default ArticlesListContainer;
