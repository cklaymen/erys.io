import React, { FC } from "react";

import { PostsQuery } from "../../lib/graphql/posts.graphql";
import { PostsListWrapper } from "./components";
import Post from "./Post";

interface Props {
  posts: PostsQuery["posts"];
}

const PostsList: FC<Props> = ({ posts }) => {
  const mappedPosts = posts?.map((it) => (
    <Post
      key={it?.title}
      post={{
        title: it?.title!,
        description: it?.description!,
        author: it?.user?.username!,
        authorAvatarUrl: it?.user?.avatar?.url!,
        publishedDate: it?.published_at!,
        posterUrl: it?.poster?.url!,
      }}
    />
  ));

  return <PostsListWrapper>{mappedPosts}</PostsListWrapper>;
};

export default PostsList;
