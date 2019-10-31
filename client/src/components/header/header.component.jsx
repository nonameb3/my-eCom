import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utill";
import "./header.style.scss";

function Header({ currentUser, hidden }) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/hats">
          Hats
        </Link>
        {currentUser !== null ? (
          <div className="option" onClick={() => auth.signOut()}>
            SignOut
          </div>
        ) : (
          <Link className="option" to="/signin">
            SignIn
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </div>
  );
}

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser, 
  hidden: selectCartHidden
});

export default connect(mapStatetoProps)(Header);
