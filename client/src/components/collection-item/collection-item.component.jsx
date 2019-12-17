import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.style.scss";

const CollectionItem = ({ items, addCartItem }) => {
  const { name, price, imageUrl } = items;
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
      <CustomButton inverted onClick={() => addCartItem(items)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
