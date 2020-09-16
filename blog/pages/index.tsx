import Head from "next/head";

import { initializeApollo } from "../lib/apolloClient";
import { usePostsQuery, PostsDocument } from "../lib/graphql/posts.graphql";

export default function Home() {
  const { data } = usePostsQuery();
  console.log(data?.posts);
  return (
    <div>
      <Head>
        <title>Blog | ERYS' - producent oprogramowania na zamówienie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Blog erys.io</h1>
      <div>{data && data.posts!.map((it: any) => it.title).join(", ")}</div>
    </div>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: PostsDocument,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}
