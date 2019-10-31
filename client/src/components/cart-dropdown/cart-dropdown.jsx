import React from "react";
import { connect } from "react-redux";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { selecterCartItems } from "../../redux/cart/cart.selectors";
import "./cart-dropdown.style.scss";

function cartDropdown({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

const mapStateToProps = state => {
  return { cartItems: selecterCartItems(state) };
};

export default connect(mapStateToProps)(cartDropdown);
