import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selecterCartItems,
  selecterCartItemsTotalCount
} from "../../redux/cart/cart.selectors";
import CheckoutButton from '../../components/stripe-button/stripe-button.component';
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
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
      {cartItems.map(cartItem => (
        <CheckoutItem
          key={cartItem.id}
          cartItem={cartItem}
        />
      ))}
      <div className="total">${total}</div>
      <div className="note">
        **Please use following credit card for test payment**
        <br/>
        Number: 4242 4242 4242 4242, Exp: 01/12, CVV: 123
      </div>
      <CheckoutButton price={total}/>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selecterCartItems,
  total: selecterCartItemsTotalCount
});

export default connect(mapStateToProps)(CheckoutComponent);
