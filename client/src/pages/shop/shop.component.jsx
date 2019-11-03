import React from "react";
import { Route } from 'react-router-dom';

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Category from "../category/category.component";

export default function({match}) {
  return (
    <div className="shop-page">
      <Route exact path={match.path} component={CollectionOverview}/>
      <Route path={`${match.path}/:categoryId`} component={Category}/>
    </div>
  );
}
