import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopCollection } from "../../redux/shop/shop.selection";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

export class Shop extends Component {
  state = {
    collection: this.props.shopData
  };

  render() {
    return (
      <div className="shop-page">
        {this.state.collection.map(({ id, ...Other }) => (
          <CollectionPreview key={id} {...Other} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  shopData: selectShopCollection
});

export default connect(mapStateToProps)(Shop);
