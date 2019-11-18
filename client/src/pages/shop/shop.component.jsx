import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Category from "../category/category.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { fetchCollectionAsync } from "../../redux/shop/shop.action";
import { selectIsFetching } from "../../redux/shop/shop.selection";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CategoryWithSpinner = WithSpinner(Category);

class ShopPage extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionAsync();
  }

  render() {
    const { match, isFetching } = this.props;
    console.log("isFetching", isFetching);
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionOverviewWithSpinner isLoading={isFetching} {...props} />
          )}
        />
        <Route
          exact
          path={`${match.path}/:categoryId`}
          render={props => (
            <CategoryWithSpinner isLoading={isFetching} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsFetching
});

const mapDispatchToPros = dispatch => {
  return {
    fetchCollectionAsync: () => dispatch(fetchCollectionAsync())
  };
};

export default connect(mapStateToProps, mapDispatchToPros)(ShopPage);
