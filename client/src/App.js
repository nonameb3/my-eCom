import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import SignIn from "./pages/singIn/signIn.component";
import Homepage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Checkout from "./pages/checkout/checkout.component";
import { checkUserAuthentication } from "./redux/user/user.actions";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserAuthentication());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" exact component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
