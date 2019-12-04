import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleCart } from "../../redux/cart/cart.action";
import { selecterCartItemsCount } from "../../redux/cart/cart.selectors";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.style.scss";

function CartIconComponent() {
  const itemCount = useSelector(state => selecterCartItemsCount(state));
  const dispatch = useDispatch();
  const dropDownToggle = () => dispatch(toggleCart());

  return (
    <div className="cart-icon" onClick={dropDownToggle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

export default CartIconComponent;
