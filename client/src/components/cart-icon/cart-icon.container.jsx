import React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

import IconCompoent from "./cart-icon.component";

const TOGGLE_CART_HIDDENT = gql`
  mutation TogggleCartHidden {
    toggleCartHidden @client
  }
`;

export default function() {
  return (
    <Mutation mutation={TOGGLE_CART_HIDDENT}>
      {toggleCartHidden => <IconCompoent dropDownToggle={toggleCartHidden} />}
    </Mutation>
  );
}
