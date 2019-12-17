import React from "react";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.style.scss";

const cartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  const onClick = () => {
    history.push("/checkout");
    toggleCartHidden();
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-text">Cart is Empty</span>
        )}
      </div>
      <CustomButton onClick={onClick}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default withRouter(cartDropdown);
