import React from "react";
import { Route } from 'react-router-dom';

import { firestore, convertCollectionsToSnapshot } from '../../firebase/firebase.utill';
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Category from "../category/category.component";

class ShopPage extends React.Component{
  unsubscribeFromShop = null;

  componentDidMount(){
    const collectionsRef = firestore.collection('collections')
    this.unsubscribeFromShop = collectionsRef.onSnapshot(async snapshot => {
      console.log(convertCollectionsToSnapshot(snapshot))
    })
  }

  componentWillUnmount(){
    // stop firebase event
    this.unsubscribeFromShop();
  }

  render() {
    const match = this.props;
    return (
      <div className="shop-page">
        <Route exact path={match.path} component={CollectionOverview}/>
        <Route path={`${match.path}/:categoryId`} component={Category}/>
      </div>
    );
  }
}

export default ShopPage;
