import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import Roasters from "./components/roasters";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://coffee-review.hasura.app/v1/graphql",
  }),
});

const App = () => (
  <ApolloProvider client={client}>
    <Roasters />
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));