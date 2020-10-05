import React, { FC } from "react";

import { ArticlesListWrapper } from "./components";
import Article from "./Article";
import { ArticlesQuery } from "src/generated/graphql";

interface Props {
  articles: ArticlesQuery["articles"];
}

const ArticlesList: FC<Props> = ({ articles }) => {
  const mappedArticles = articles?.map((it, i) => (
    <Article
      key={it?.title}
      article={{
        title: it?.title!,
        description: it?.description!,
        author: it?.user?.username!,
        authorAvatarUrl: it?.user?.avatar?.url!,
        publishedDate: it?.published_at!,
        posterUrl: it?.poster?.formats.small.url,
        slug: it?.slug!,
      }}
      ordinalNumber={i + 1}
    />
  ));

  return <ArticlesListWrapper>{mappedArticles}</ArticlesListWrapper>;
};

export default ArticlesList;
