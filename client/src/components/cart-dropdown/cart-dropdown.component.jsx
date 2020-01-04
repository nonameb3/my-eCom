import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { toggleCart } from "../../redux/cart/cart.action";
import { selecterCartItems } from "../../redux/cart/cart.selectors";
import "./cart-dropdown.style.scss";

export const CartDropdown = ({ history }) => {
  const cartItems = useSelector(state => selecterCartItems(state));
  const dispatch = useDispatch();

  const onClick = () => {
    history.push("/checkout");
    dispatch(toggleCart());
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

export default compose(withRouter)(CartDropdown);
