import * as TYPE from "./cart.type";
import { addNewCartItems, removeCartItem } from './cart.utils'

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
    case TYPE.FETCH_CART_ITEMS_SUCCESS:
      return {
        ...state,
        cartItems: action.payload
      }
    case TYPE.ADD_CART_ITEMS_SUCCESS:
      return {
        ...state,
        cartItems: addNewCartItems(state.cartItems, action.payload)
      }
    case TYPE.REMOVE_CART_ITEM_SUCCESS:
      return {
        ...state,
        // cartItems: removeCartItem(state.cartItems, action.payload)
      }
    case TYPE.DELETE_CART_ITEM_SUCESS:
      return {
        ...state,
        // cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      }
    case TYPE.CLEAR_CART_SUCCESS:
      return {
        ...state,
        cartItems: []
      }
    default:
      return state;
  }
}
