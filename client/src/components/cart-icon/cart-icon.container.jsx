import React from "react";
import { graphql } from "react-apollo";
import { compose } from "redux";
import { gql } from "apollo-boost";

import IconCompoent from "./cart-icon.component";

const TOGGLE_CART_HIDDENT = gql`
  mutation TogggleCartHidden {
    toggleCartHidden @client
  }
`;

const GET_ITEMS_COUNT = gql`
  {
    itemCount @client
  }
`;

function CartIconContainer({ data: { itemCount }, toggleCartHidden }) {
  return (
    <IconCompoent
      IconCompoent
      dropDownToggle={toggleCartHidden}
      itemCount={itemCount}
    />
  );
}

export default compose(
  graphql(GET_ITEMS_COUNT),
  graphql(TOGGLE_CART_HIDDENT, { name: "toggleCartHidden" })
)(CartIconContainer);
