import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selecterCartItems,
  selecterCartItemsTotalCount,
} from "../../redux/cart/cart.selectors";
import "./checkout.style.scss";

const CheckoutComponent = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">Product</div>
        <div className="header-block">Description</div>
        <div className="header-block">Quantity</div>
        <div className="header-block">Price</div>
        <div className="header-block">Remove</div>
      </div>
      <div className="total">${total}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selecterCartItems,
  total: selecterCartItemsTotalCount
});

export default connect(mapStateToProps)(CheckoutComponent);
