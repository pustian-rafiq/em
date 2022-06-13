import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { createUploadLink } from "apollo-upload-client";
import ws from "ws";
import MainLayout from "../components/Layout/MainLayout";

import "../styles/globals.css";

// http link for query and mutation
const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
});

// websocket link for subscription
const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://localhost:4000/subscriptions",
    webSocketImpl: ws,
  })
);

// conditionally serve link for query, mutation or subscription
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  createUploadLink(httpLink)
);

// initialize apollo client
const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

const EhsanMarketing = ({ Component, pageProps }) => {
  if (Component.getLayout) {
    return Component.getLayout(
      <ApolloProvider client={client}>
        <Component {...pageProps} />{" "}
      </ApolloProvider>
    );
  }

  return (
    <>
      <ApolloProvider client={client}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ApolloProvider>
    </>
  );
};

export default EhsanMarketing;
