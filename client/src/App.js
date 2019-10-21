import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import SignIn from "./pages/singIn/signIn.component";
import Homepage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import { auth, createUserProfileDoccument } from "./firebase/firebase.utill";
import "./App.css";

class App extends React.Component {
  unsubscribeFromAuth = null;
  state = {
    currentUser: null
  };

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      this.setState({ currentUser: user });
      createUserProfileDoccument(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/hats" exact component={() => <div>Hats Pages</div>} />
          <Route
            path="/hats/:id"
            exact
            component={() => <div>Hats Pages : id</div>}
          />
          <Route path="/shop" exact component={Shop} />
          <Route path="/signin" exact component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
