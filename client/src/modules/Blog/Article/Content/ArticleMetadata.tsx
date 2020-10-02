import React, { FC } from "react";
import { Helmet } from "react-helmet-async";

interface Props {
  title: string;
  description: string;
  keywords: string[];
}

const ArticleMetadata: FC<Props> = ({ title, description, keywords }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" property="og:description" content={description} />
    <meta name="keywords" content={keywords.join(", ")} />
  </Helmet>
);

export default ArticleMetadata;
