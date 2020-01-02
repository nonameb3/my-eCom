import React, { useEffect } from "react";
import { useDispatch, batch} from "react-redux";
import { Route, Switch } from "react-router-dom";

import { checkUserAuthentication } from "./redux/user/user.actions";
import { fetchCartItemStart } from './redux/cart/cart.action';

import Header from "./components/header/header.component";
import Spiner from "./components/spiner/spiner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import "./App.css";

const SignIn = React.lazy(() => import("./pages/singIn/signIn.component"));
const Homepage = React.lazy(() =>
  import("./pages/homepage/homepage.component")
);
const Shop = React.lazy(() => import("./pages/shop/shop.component"));
const Checkout = React.lazy(() =>
  import("./pages/checkout/checkout.component")
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    batch(() => {
      dispatch(checkUserAuthentication());
      dispatch(fetchCartItemStart());
    })
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <React.Suspense fallback={<Spiner />}>
          <Route
            path="/"
            exact
            render={props => (
              <ErrorBoundary {...props}>
                <Homepage />
              </ErrorBoundary>
            )}
          />
          <Route path="/checkout" component={Checkout} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" exact component={SignIn} />
        </React.Suspense>
      </Switch>
    </div>
  );
}

export default App;
