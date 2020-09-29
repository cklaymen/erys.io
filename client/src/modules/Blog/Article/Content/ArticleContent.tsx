import React, { FC } from "react";

import Section from "src/modules/shared/UI/Section";
import Markdown from "src/modules/Blog/shared/Markdown";
import { Title } from "src/modules/Blog/Article/Content/components";

interface Props {
  article: {
    title: string;
    content: string;
  };
}

const ArticleContent: FC<Props> = ({ article: { title, content } }) => {
  return (
    <Section>
      <article>
        <Title>{title}</Title>
        <Markdown source={content} />
      </article>
    </Section>
  );
};

export default ArticleContent;
