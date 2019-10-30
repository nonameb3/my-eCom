import * as TYPE from "./cart.type";

export const toggleCart = () => {
  return  {
    type: TYPE.TOGGLE_CART_DROPDOWN
  }
}

export const addCartItem = item => {
  return {
    type: TYPE.ADD_CART_ITEMS,
    payload: item
  }
}
