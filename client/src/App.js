import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./components/header/header.component";
import SignIn from "./pages/singIn/signIn.component";
import Homepage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Checkout from "./pages/checkout/checkout.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utill";
import setCurrentUser from "./redux/user/user.action";
import "./App.css";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    // function call any time the auth state changes
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(snapShot => {
          setCurrentUser(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            },
            () => console.log(this.state)
          );
        });
      } else {
        setCurrentUser(user);
      }
    });
  }

  componentWillUnmount() {
    //function that can be used to remove the original.
    this.unsubscribeFromAuth();
  }

  render() {
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
}

const mapDispatchToProps = dispatch => {
  return { setCurrentUser: user => dispatch(setCurrentUser(user)) };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
