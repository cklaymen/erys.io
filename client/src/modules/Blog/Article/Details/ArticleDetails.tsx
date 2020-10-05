import React, { FC } from "react";

import {
  ArticleDetailsWrapper,
  Author,
  Avatar,
  Details,
  Poster,
  PublishedDate,
  Scrollable,
  Tag,
  TagsWrapper,
} from "src/modules/Blog/Article/Details/components";

interface Props {
  article: {
    posterUrl: string;
    publishedAt: Date;
    author: {
      avatarUrl: string;
      name: string;
    };
    tags: string[];
  };
}

const ArticleDetails: FC<Props> = ({
  article: { posterUrl, publishedAt, author, tags },
}) => {
  const publishedAtISO = publishedAt.toISOString();
  const formattedPublishedAt = publishedAt
    .toLocaleString()
    .split(":")
    .slice(0, 2)
    .join(":");

  return (
    <ArticleDetailsWrapper>
      <Poster src={posterUrl} />
      <Details>
        <Author>
          <Avatar src={author.avatarUrl} /> {author.name}
        </Author>
        <PublishedDate dateTime={publishedAtISO}>
          {formattedPublishedAt}
        </PublishedDate>
        <TagsWrapper>
          <Scrollable>
            {tags.map((it) => (
              <Tag key={it}>#{it}</Tag>
            ))}
          </Scrollable>
        </TagsWrapper>
      </Details>
    </ArticleDetailsWrapper>
  );
};

export default ArticleDetails;
