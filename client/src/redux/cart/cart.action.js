import * as TYPE from "./cart.type";

export const toggleCart = () => {
  return {
    type: TYPE.TOGGLE_CART_DROPDOWN
  };
};

export const addCartItem = item => {
  return {
    type: TYPE.ADD_CART_ITEMS,
    payload: item
  };
};

export const deleteCartItem = item => {
  return {
    type: TYPE.DELETE_CART_ITEM,
    payload: item
  };
};

export const removeCartItem = item => {
  return {
    type: TYPE.REMOVE_CART_ITEM,
    payload: item
  };
};

export const clearAllCartItems = () => {
  return { 
    type: TYPE.CLEAR_CART
  }
};
