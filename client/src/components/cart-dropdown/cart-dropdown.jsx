import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { selecterCartItems } from "../../redux/cart/cart.selectors";
import "./cart-dropdown.style.scss";

function cartDropdown({ cartItems, history }) {
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
      <CustomButton onClick={() => history.push("/checkout")}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}

const mapStateToProps = state => {
  return { cartItems: selecterCartItems(state) };
};

export default compose(
  withRouter,
  connect(mapStateToProps)
)(cartDropdown);
