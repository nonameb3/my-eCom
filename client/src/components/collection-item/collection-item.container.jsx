import React from "react";
import { useMutation } from "react-apollo";
import { gql } from 'apollo-boost';

import ItemCompoent from "./collection-item.component";

const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;

export default function(props) {
  const mutation = useMutation(ADD_ITEM_TO_CART);

  return (
    <ItemCompoent 
      addCartItem = {item => mutation[0]({variables: {item}})}
      {...props}
    />
  );
}
