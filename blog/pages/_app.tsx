import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";

import "../styles/globals.css";
import { useApollo } from "../lib/apolloClient";
import Layout from "components/Layout";
import DeviceProvider from "components/shared/useDevice/Provider";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <DeviceProvider>
        <Layout
          renderMain={() => <Component {...pageProps} />}
          renderSide={() => <>"_SIDE_"</>}
        />
      </DeviceProvider>
    </ApolloProvider>
  );
}

export default MyApp;
