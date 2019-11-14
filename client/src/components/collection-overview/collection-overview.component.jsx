import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopCollectionsArray } from "../../redux/shop/shop.selection";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import "./collection-overview.style.scss";

export class CollectionOverview extends Component {
  state = {
    collections: this.props.shopData
  };

  render() {
    const { collections } = this.state;
    return (
      <div className="collection-overview">
        {collections &&
          collections.map(({ id, ...Other }) => (
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
