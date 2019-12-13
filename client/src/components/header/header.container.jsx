import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import HeaderCompoent from "./header.component";

const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

export default function() {
  return (
    <Query query={GET_CART_HIDDEN}>
      {({ data: { cartHidden } }) => <HeaderCompoent hidden={cartHidden} />}
    </Query>
  );
}
