import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utill";
import * as Style from "./header.style";

function Header({ currentUser, hidden }) {
  return (
    <Style.HeaderContainer>
      <Style.LogoContainer to="/">
        <Logo />
      </Style.LogoContainer>
      <Style.OptionsContainer>
        <Style.OptionLink to="/shop">Shop</Style.OptionLink>
        {currentUser !== null ? (
          <Style.OptionDiv onClick={() => auth.signOut()}>
            SignOut
          </Style.OptionDiv>
        ) : (
          <Style.OptionLink to="/signin">SignIn</Style.OptionLink>
        )}
        <CartIcon />
      </Style.OptionsContainer>
      {!hidden && <CartDropdown />}
    </Style.HeaderContainer>
  );
}

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStatetoProps)(Header);
