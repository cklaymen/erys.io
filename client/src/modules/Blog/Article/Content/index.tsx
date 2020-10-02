import React, { FC } from "react";
import { useRouteMatch } from "react-router-dom";

import { useArticleQuery } from "src/generated/graphql";
import Main404 from "src/modules/404/main";
import ArticleMetadata from "src/modules/Blog/Article/Content/ArticleMetadata";
import ServerError from "src/modules/Blog/shared/ServerError";
import ArticleContent from "./ArticleContent";

const ArticleContentContainer: FC = () => {
  // TODO: type route params
  const {
    params: { slug },
  } = useRouteMatch<{ slug: string }>();
  const { data, loading, error } = useArticleQuery({ variables: { slug } });

  if (loading) {
    return null;
  }

  if (error) {
    return <ServerError />;
  }

  if (!data?.articles?.length) {
    return <Main404 />;
  }

  if (data?.articles && data.articles[0]) {
    const article = data.articles[0];
    return (
      <>
        <ArticleMetadata
          title={article.title}
          description={article.description}
          keywords={article.tags!.map((it) => it!.name!)}
        />
        <ArticleContent article={article} />
      </>
    );
  }

  return null;
};

export default ArticleContentContainer;
