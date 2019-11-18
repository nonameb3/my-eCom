import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CategoryContainer from "../category/category.container";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { fetchCollectionAsync } from "../../redux/shop/shop.action";
import { selectIsFetching, selectIsCollecttionLoaded } from "../../redux/shop/shop.selection";

// const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
// const CategoryWithSpinner = WithSpinner(Category);

class ShopPage extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionAsync();
  }

  render() {
    const { match, isFetching, isLoaded } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          exact
          path={`${match.path}/:categoryId`}
          component={CategoryContainer}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsFetching,
  isLoaded: selectIsCollecttionLoaded
});

const mapDispatchToPros = dispatch => {
  return {
    fetchCollectionAsync: () => dispatch(fetchCollectionAsync())
  };
};

export default connect(mapStateToProps, mapDispatchToPros)(ShopPage);
