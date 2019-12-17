import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.style.scss";

function cartIconComponent({ dropDownToggle, itemCount }) {
  return (
    <div className="cart-icon" onClick={() => dropDownToggle()}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

export default cartIconComponent;
