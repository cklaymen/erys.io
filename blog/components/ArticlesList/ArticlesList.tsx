import React, { FC } from "react";

import { ArticlesQuery } from "../../lib/graphql/articles.graphql";
import { ArticlesListWrapper } from "./components";
import Article from "./Article";

interface Props {
  articles: ArticlesQuery["articles"];
}

const ArticlesList: FC<Props> = ({ articles }) => {
  const mappedArticles = articles?.map((it) => (
    <Article
      key={it?.title}
      article={{
        title: it?.title!,
        description: it?.description!,
        author: it?.user?.username!,
        authorAvatarUrl: it?.user?.avatar?.url!,
        publishedDate: it?.published_at!,
        posterUrl: it?.poster?.url!,
      }}
    />
  ));

  return <ArticlesListWrapper>{mappedArticles}</ArticlesListWrapper>;
};

export default ArticlesList;
