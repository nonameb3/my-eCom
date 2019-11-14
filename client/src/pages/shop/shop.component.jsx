import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import {
  firestore,
  convertCollectionsToSnapshot
} from "../../firebase/firebase.utill";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Category from "../category/category.component";
import { updateShopCollections } from "../../redux/shop/shop.action";

class ShopPage extends React.Component {
  unsubscribeFromShop = null;

  componentDidMount() {
    const collectionsRef = firestore.collection("collections");
    this.unsubscribeFromShop = collectionsRef.onSnapshot(async snapshot => {
      const collectionsHashData = convertCollectionsToSnapshot(snapshot);
      this.props.updateShopCollections(collectionsHashData);
    });
  }

  componentWillUnmount() {
    // stop firebase event
    this.unsubscribeFromShop();
  }

  render() {
    const match = this.props;
    return (
      <div className="shop-page">
        <Route exact path={match.path} component={CollectionOverview} />
        <Route path={`${match.path}/:categoryId`} component={Category} />
      </div>
    );
  }
}

const mapDispatchToPros = dispatch => {
  return {
    updateShopCollections: collections =>
      dispatch(updateShopCollections(collections))
  };
};

export default connect(
  null,
  mapDispatchToPros
)(ShopPage);
