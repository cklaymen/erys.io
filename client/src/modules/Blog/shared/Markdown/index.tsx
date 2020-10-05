import React, { FC, useMemo } from "react";
import marked from "marked";

import { MarkdownWrapper } from "src/modules/Blog/shared/Markdown/components";
import { API_URL } from "src/const";

interface Props {
  source: string;
}

function parseTextToId(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ /g, "-");
}

const renderer = new marked.Renderer();
renderer.heading = (text, level, raw) => {
  const id = parseTextToId(text);
  return `<h${level} id="${id}"><a href="#${id}">${text}</a></h${level}>`;
};

const Markdown: FC<Props> = ({ source }) => {
  const sourceHtml = useMemo(
    () =>
      marked(source, {
        baseUrl: API_URL,
        renderer,
      }),
    [source]
  );

  return <MarkdownWrapper dangerouslySetInnerHTML={{ __html: sourceHtml }} />;
};

export default Markdown;
