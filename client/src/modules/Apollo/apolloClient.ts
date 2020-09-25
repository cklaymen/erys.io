import { ApolloClient, InMemoryCache } from "@apollo/client";

import { GRAPHQL_URL } from "src/const";

const apolloClient = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export default apolloClient;
