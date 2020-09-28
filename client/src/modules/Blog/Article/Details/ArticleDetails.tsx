import React, { FC } from "react";

interface Props {
  article: {
    posterUrl: string;
    publishedAt: Date;
    author: {
      avatarUrl: string;
      name: string;
    };
  };
}

const ArticleDetails: FC<Props> = ({
  article: { posterUrl, publishedAt, author },
}) => {
  return (
    <div>
      _ARTICLE_DETAILS_ {posterUrl} {publishedAt.toISOString()}{" "}
      {author.avatarUrl} {author.name}
    </div>
  );
};

export default ArticleDetails;
