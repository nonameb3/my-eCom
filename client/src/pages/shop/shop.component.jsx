import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CategoryContainer from "../category/category.container";
import { fetchCollectionStart } from "../../redux/shop/shop.action";
import { selectIsFetching, selectIsCollecttionLoaded } from "../../redux/shop/shop.selection";

class ShopPage extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionStart();
  }

  render() {
    const { match } = this.props;
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
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
  };
};

export default connect(mapStateToProps, mapDispatchToPros)(ShopPage);
