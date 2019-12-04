import React from "react";
import { useDispatch } from "react-redux";

import { addCartItem } from "../../redux/cart/cart.action";
import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.style.scss";

const CollectionItem = ({ items }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = items;
  const addItems = cartItems => dispatch(addCartItem(cartItems));

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItems(items)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
