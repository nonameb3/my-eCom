import React from "react";
import { useQuery, useMutation } from "react-apollo";
import { gql } from "apollo-boost";

import CartDropdownCompoent from "./cart-dropdown";

const TOGGLE_CART_HIDDENT = gql`
  mutation TogggleCartHidden {
    toggleCartHidden @client
  }
`;

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

export default function() {
  const {data} = useQuery(GET_CART_ITEMS);
  const mutation = useMutation(TOGGLE_CART_HIDDENT);

  return (
    <CartDropdownCompoent
      cartItems={data.cartItems}
      toggleCartHidden={mutation[0]}
    />
  );
}
