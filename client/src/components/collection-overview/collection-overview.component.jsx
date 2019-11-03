import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopCollectionsArray } from "../../redux/shop/shop.selection";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import "./collection-overview.style.scss"

export class CollectionOverview extends Component {
  state = {
    collection: this.props.shopData
  };

  render() {
    console.log(this.state.collection)
    return (
      <div className="collection-overview">
        {this.state.collection.map(({ id, ...Other }) => (
          <CollectionPreview key={id} {...Other} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  shopData: selectShopCollectionsArray
});

export default connect(mapStateToProps)(CollectionOverview);
