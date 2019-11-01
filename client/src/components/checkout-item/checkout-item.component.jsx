import React from 'react';
import './checkout-item.style.scss';

const CheckoutItem = ({cartItem: {imageUrl, name, price, quantity}}) => {
  return(
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10008;</div>
    </div>
  )  
}

export default CheckoutItem;