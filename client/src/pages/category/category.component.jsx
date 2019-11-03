import React from "react";
import { connect } from "react-redux";

import { SelectShopCollection } from "../../redux/shop/shop.selection";
import "./category.style.scss";

function CategoryComponent({ collection }) {
  return <div className="category">Category Page</div>;
}

const mapStateToProps = (state, props) => {
  return {
    collection: SelectShopCollection(props.match.params.categoryId)(state)
  };
};
export default connect(mapStateToProps)(CategoryComponent);
