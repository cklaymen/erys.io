import Head from "next/head";
import ArticlesList from "../components/ArticlesList/ArticlesList";

import { initializeApollo } from "../lib/apolloClient";
import {
  ArticlesDocument,
  useArticlesQuery,
} from "../lib/graphql/articles.graphql";

export default function Home() {
  const { data } = useArticlesQuery();
  console.log(data?.articles);
  return (
    <div>
      <Head>
        <title>Blog | ERYS' - producent oprogramowania na zamówienie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Blog erys.io</h1>
      <ArticlesList articles={data?.articles} />
    </div>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ArticlesDocument,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}
