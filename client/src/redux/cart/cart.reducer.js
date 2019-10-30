import * as TYPE from "./cart.type";
import { addNewCartItems } from './cart.utils'

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
        cartItems: addNewCartItems(state.cartItems, action.payload)
      }
    default:
      return state;
  }
}
