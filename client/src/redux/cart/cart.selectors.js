import { createSelector } from "reselect";

// reselect will select only value change
const selectCart = state => state.cart;

export const selecterCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selecterCartItemsCount = createSelector(
  [selecterCartItems],
  cartItems => cartItems.reduce((preItem, item) => preItem + item.quantity, 0)
);
