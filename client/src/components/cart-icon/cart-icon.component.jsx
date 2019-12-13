import React from "react";
import { connect } from "react-redux";

import { selecterCartItemsCount } from "../../redux/cart/cart.selectors";
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

const mapStateToProps = state => {
  return {
    itemCount: selecterCartItemsCount(state)
  };
};

export default connect(mapStateToProps)(cartIconComponent);
