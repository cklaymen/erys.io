import React, { FC, useMemo } from "react";
import marked from "marked";

import { MarkdownWrapper } from "src/modules/Blog/shared/Markdown/components";
import { API_URL } from "src/const";

interface Props {
  source: string;
}

const Markdown: FC<Props> = ({ source }) => {
  const sourceHtml = useMemo(
    () =>
      marked(source, {
        baseUrl: API_URL,
      }),
    [source]
  );

  return <MarkdownWrapper dangerouslySetInnerHTML={{ __html: sourceHtml }} />;
};

export default Markdown;
