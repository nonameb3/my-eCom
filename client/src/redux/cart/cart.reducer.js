import * as TYPE from "./cart.type";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPE.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case TYPE.ADD_CART_ITEMS:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      }
    default:
      return state;
  }
}
