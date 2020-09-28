import React, { FC } from "react";

interface Props {
  article: {
    title: string;
    content: string;
  };
}

const ArticleContent: FC<Props> = ({ article: { title, content } }) => {
  return (
    <div>
      _ARTICLE_CONTENT_ {title} {content}
    </div>
  );
};

export default ArticleContent;
