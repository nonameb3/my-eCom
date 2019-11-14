import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import {
  firestore,
  convertCollectionsToSnapshot
} from "../../firebase/firebase.utill";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Category from "../category/category.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { updateShopCollections } from "../../redux/shop/shop.action";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CategoryWithSpinner = WithSpinner(Category);

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;
  state = {
    isLoading: true
  };

  componentDidMount() {
    const collectionsRef = firestore.collection("collections");
    this.unsubscribeFromSnapshot = collectionsRef.onSnapshot(async snapshot => {
      const collectionsHashData = convertCollectionsToSnapshot(snapshot);
      this.props.updateShopCollections(collectionsHashData);
      this.setState({ isLoading: false });
    });
  }

  componentWillUnmount() {
    // stop firebase event
    this.unsubscribeFromSnapshot();
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          exact
          path={`${match.path}/:categoryId`}
          render={props => (
            <CategoryWithSpinner isLoading={isLoading} {...props} />
          )}
        />
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
