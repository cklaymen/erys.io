import React, { FC } from "react";

import { useArticlesQuery } from "src/generated/graphql";
import ArticlesList from "src/modules/Blog/ArticlesList/ArticlesList";

const ArticlesListContainer: FC = () => {
  const { data } = useArticlesQuery();

  return <ArticlesList articles={data?.articles} />;
};

export default ArticlesListContainer;
