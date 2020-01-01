import * as TYPE from "./cart.type";

export const toggleCart = () => {
  return {
    type: TYPE.TOGGLE_CART_DROPDOWN
  };
};

export const addCartItem = item => {
  return {
    type: TYPE.ADD_CART_ITEMS_START,
    payload: item
  };
};

export const addCartItemSuccess = item => {
  return {
    type: TYPE.ADD_CART_ITEMS_SUCCESS,
    payload: item
  }
}

export const deleteCartItem = item => {
  return {
    type: TYPE.DELETE_CART_ITEM_START,
    payload: item
  };
};

export const deleteCartItemSuccess = item => {
  return {
    type: TYPE.DELETE_CART_ITEM_SUCESS,
    payload: item
  }
}

export const removeCartItem = item => {
  return {
    type: TYPE.REMOVE_CART_ITEM_START,
    payload: item
  };
};

export const removeCartItemSuccess = item => {
  return {
    type: TYPE.REMOVE_CART_ITEM_SUCCESS,
    payload: item
  }
}

export const clearAllCartItems = () => {
  return { 
    type: TYPE.CLEAR_CART_SUCCESS
  }
};

export const fetchCartItemStart = () => {
  return {
    type: TYPE.FETCH_CART_ITEMS_START
  }
}

export const fetchCartItemSuccess = (cartItems) => {
  return {
    type: TYPE.FETCH_CART_ITEMS_SUCCESS,
    payload: cartItems
  }
}
