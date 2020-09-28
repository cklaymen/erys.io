import React, { FC } from "react";
import { useRouteMatch } from "react-router-dom";

import { useArticleQuery } from "src/generated/graphql";
import { getAbsoluteApiUrl } from "src/modules/Api/helpers";
import ArticleDetails from "./ArticleDetails";

const ArticleDetailsContainer: FC = () => {
  // TODO: type route params
  const {
    params: { slug },
  } = useRouteMatch<{ slug: string }>();
  const { data } = useArticleQuery({ variables: { slug } });

  if (data?.articles && data.articles[0]) {
    const article = data.articles[0];
    return (
      <ArticleDetails
        article={{
          author: {
            avatarUrl: getAbsoluteApiUrl(article.user?.avatar?.url!),
            name: article.user?.username!,
          },
          posterUrl: getAbsoluteApiUrl(article.poster?.url!),
          publishedAt: new Date(article.published_at),
        }}
      />
    );
  }

  return <div>BRAK</div>;
};

export default ArticleDetailsContainer;
