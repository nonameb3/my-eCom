import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CategoryContainer from "../category/category.container";
import { fetchCollectionStart } from "../../redux/shop/shop.action";

function ShopPage({ match }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionStart());
  }, [dispatch]);

  return (
    <div  id ="123" className="shop-page">
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

export default ShopPage;
