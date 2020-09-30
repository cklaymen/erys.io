import React, { FC } from "react";
import { getAbsoluteApiUrl } from "src/modules/Api/helpers";
import InternalLink from "src/modules/Routes/InternalLink";

import {
  ArticleWrapper,
  Author,
  Avatar,
  Bar,
  Content,
  Description,
  Poster,
  PublishedDate,
  Side,
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
    slug: string;
  };
  ordinalNumber?: number;
}

const Article: FC<Props> = ({
  article: {
    posterUrl,
    title,
    description,
    author,
    authorAvatarUrl,
    publishedDate: publishedDateString,
    slug,
  },
  ordinalNumber,
}) => {
  const publishedDate = new Date(publishedDateString);
  const publishedDateISO = publishedDate.toISOString();

  return (
    <ArticleWrapper ordinalNumber={ordinalNumber}>
      <InternalLink location="blogArticle" variables={{ slug }}>
        <header>
          <Side>
            <Poster url={getAbsoluteApiUrl(posterUrl)} />

            <Bar>
              <Author>
                <Avatar
                  url={getAbsoluteApiUrl(authorAvatarUrl)}
                  title={author}
                />
              </Author>
              <PublishedDate
                dateTime={publishedDateISO}
                title={publishedDate.toLocaleString()}
              >
                {publishedDateISO.split("T")[0]}
              </PublishedDate>
            </Bar>
          </Side>
          <Content>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Content>
        </header>
      </InternalLink>
    </ArticleWrapper>
  );
};

export default Article;
