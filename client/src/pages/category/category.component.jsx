import React from "react";
import { connect } from "react-redux";

import { selectShopCollection } from "../../redux/shop/shop.selection";
import CollectionItem from "../../components/collection-item/collection-item.component";
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

const mapStateToProps = (state, props) => {
  return {
    collection: selectShopCollection(props.match.params.categoryId)(state)
  };
};
export default connect(mapStateToProps)(CategoryComponent);
