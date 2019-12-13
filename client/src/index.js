import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/es/integration/react";
import { Provider } from "react-redux";
import { ApolloClient, gql } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import App from "./App";
import { store, persistor } from "./redux/store";
import { resolvers, typeDefs } from "./graphql/resolver";
import "./index.css";

const httpLink = createHttpLink({
  uri: "https://www.crwn-clothing.com"
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
  resolvers,
  typeDefs
});

client.writeData({
  data: {
    cartHidden: true
  }
});

// TEST QUERY
if (process.env.NODE_ENV !== "production") {
  client
    .query({
      query: gql`
        {
          getCollectionsByTitle(title: "hats") {
            id
            title
          }
        }
      `
    })
    .then(res => console.log("testGQL", res));
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
