import React, { FC } from "react";

import getAbsoluteApiUrl from "../../helpers/getAbsoluteApiUrl";
import {
  ArticleWrapper,
  Author,
  Avatar,
  Bar,
  Description,
  Poster,
  PublishedDate,
  Title,
} from "./components";

interface Props {
  article: {
    title: string;
    description: string;
    posterUrl: string;
    author: string;
    authorAvatarUrl: string;
    publishedDate: string;
  };
}

const Article: FC<Props> = ({
  article: {
    posterUrl,
    title,
    description,
    author,
    authorAvatarUrl,
    publishedDate,
  },
}) => {
  const publishedDateISO = new Date(publishedDate).toISOString();

  return (
    <ArticleWrapper>
      <Poster url={getAbsoluteApiUrl(posterUrl)} />
      <header>
        <Bar>
          <Author>
            <Avatar url={getAbsoluteApiUrl(authorAvatarUrl)} /> {author}
          </Author>
          <PublishedDate dateTime={publishedDateISO}>
            {publishedDateISO.split("T")[0]}
          </PublishedDate>
        </Bar>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </header>
    </ArticleWrapper>
  );
};

export default Article;
