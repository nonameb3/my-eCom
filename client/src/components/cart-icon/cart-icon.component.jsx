import React from "react";
import { connect } from "react-redux";

import { toggleCart } from "../../redux/cart/cart.action";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.style.scss";

function cartIconComponent({ dropDownToggle }) {
  return (
    <div className="cart-icon" onClick={dropDownToggle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    dropDownToggle: () => dispatch(toggleCart())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(cartIconComponent);
