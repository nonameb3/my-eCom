import React from "react";
import { connect } from "react-redux";

import {
  deleteCartItem,
  addCartItem,
  removeCartItem
} from "../../redux/cart/cart.action";
import "./checkout-item.style.scss";

const CheckoutItem = ({ cartItem, deleteItem, addItem, removeItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <span className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </span>
      </div>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => deleteItem(cartItem)}>
        &#10008;
      </div>
    </div>
  );
};

const mapDispathToProps = dispatch => ({
  deleteItem: item => dispatch(deleteCartItem(item)),
  addItem: item => dispatch(addCartItem(item)),
  removeItem: item => dispatch(removeCartItem(item))
});

export default connect(
  null,
  mapDispathToProps
)(CheckoutItem);
