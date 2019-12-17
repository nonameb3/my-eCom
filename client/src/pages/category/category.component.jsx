import React from "react";

import CollectionItem from "../../components/collection-item/collection-item.container";
import "./category.style.scss";

function CategoryComponent({ collection }) {
  const { title, items } = collection;
  return (
    <div className="category-page">
      <h3 className="title">{title.toUpperCase()}</h3>
      <div className="items">
        {items !== null &&
          items.map(items => <CollectionItem key={items.id} items={items} />)}
      </div>
    </div>
  );
}

export default CategoryComponent;
