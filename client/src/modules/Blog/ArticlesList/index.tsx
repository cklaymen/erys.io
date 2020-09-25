import React, { FC } from "react";

import { useArticlesQuery } from "src/generated/graphql";

const ArticlesList: FC = () => {
  const { data } = useArticlesQuery();
  const mappedArticles = data?.articles?.map((it) => (
    <li key={it?.id}>{it?.title}</li>
  ));

  return (
    <div>
      <ul>{mappedArticles}</ul>
    </div>
  );
};

export default ArticlesList;
