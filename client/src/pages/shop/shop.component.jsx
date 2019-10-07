import React, { Component } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { SHOP_DATA } from "./shop.data";

export class Shop extends Component {
  state = {
    collection: SHOP_DATA
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

export default Shop;
