import Head from "next/head";
import { gql, useQuery } from "@apollo/client";

import { initializeApollo } from "../lib/apolloClient";

const query = gql`
  {
    posts {
      user {
        id
        username
        avatar {
          url
        }
      }
      title
      date
      description
      tags {
        name
      }
    }
  }
`;

export default function Home() {
  const { data } = useQuery(query);
  console.log(data);
  return (
    <div>
      <Head>
        <title>Blog | ERYS' - producent oprogramowania na zamówienie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Blog erys.io</h1>
      <div>{data && data.posts.map((it: any) => it.title).join(", ")}</div>
    </div>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}
