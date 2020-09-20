import React, { FC } from "react";

import getAbsoluteApiUrl from "../../helpers/getAbsoluteApiUrl";
import {
  Author,
  Avatar,
  Bar,
  Description,
  Poster,
  PostWrapper,
  PublishedDate,
  Title,
} from "./components";

interface Props {
  post: {
    title: string;
    description: string;
    posterUrl: string;
    author: string;
    authorAvatarUrl: string;
    publishedDate: string;
  };
}

const Post: FC<Props> = ({
  post: {
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
    <PostWrapper>
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
    </PostWrapper>
  );
};

export default Post;
