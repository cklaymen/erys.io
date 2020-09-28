import React, { FC } from "react";
import { useRouteMatch } from "react-router-dom";

import { useArticleQuery } from "src/generated/graphql";
import ArticleContent from "./ArticleContent";

const ArticleContentContainer: FC = () => {
  // TODO: type route params
  const {
    params: { slug },
  } = useRouteMatch<{ slug: string }>();
  const { data } = useArticleQuery({ variables: { slug } });

  if (data?.articles && data.articles[0]) {
    return <ArticleContent article={data?.articles[0]} />;
  }

  return <div>BRAK</div>;
};

export default ArticleContentContainer;
