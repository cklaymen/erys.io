import React, { FC } from "react";

import { useArticlesQuery } from "src/generated/graphql";
import ArticlesList from "src/modules/Blog/ArticlesList/ArticlesList";
import ServerError from "src/modules/Blog/shared/ServerError";
import Loading from "src/modules/shared/UI/Loading";

const ArticlesListContainer: FC = () => {
  const { data, loading, error } = useArticlesQuery();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ServerError />;
  }

  return <ArticlesList articles={data?.articles} />;
};

export default ArticlesListContainer;
