export const addNewCartItems = (cartitems = [], newCartItem = {}) => {
  // find existing
  const existingCartItem = cartitems.find(
    cartitem => cartitem.id === newCartItem.id
  );

  // +1 quantity if exist
  if (existingCartItem) {
    // return array
    return cartitems.map(cartitem =>
      cartitem.id === newCartItem.id
        ? { ...cartitem, quantity: cartitem.quantity + 1 }
        : cartitem
    );
  }

  // new item
  return [...cartitems, { ...newCartItem, quantity: 1 }];
};

export const removeCartItem = (cartitems = [], removeCartItem = {}) => {
  // find existing
  const existingCartItem = cartitems.find(
    cartitem => cartitem.id === removeCartItem.id
  );

  // -1 quantity if exist
  if (existingCartItem && existingCartItem.quantity > 1) {
    // return array
    return cartitems.map(cartitem =>
      cartitem.id === removeCartItem.id
        ? { ...cartitem, quantity: cartitem.quantity - 1 }
        : cartitem
    );
  }

  return cartitems;
}
