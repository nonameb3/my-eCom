import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import * as Style from "./header.style";

function Header() {
  const dispatch = useDispatch();
  const onSignOut = () => dispatch(signOutStart());
  const { currentUser, hidden } = useSelector(
    createStructuredSelector({
      currentUser: selectCurrentUser,
      hidden: selectCartHidden
    })
  );

  return (
    <Style.HeaderContainer>
      <Style.LogoContainer to="/">
        <Logo style={{height:'100%', width:'100%'}}/>
      </Style.LogoContainer>
      <Style.OptionsContainer>
        <Style.OptionLink to="/shop">Shop</Style.OptionLink>
        {currentUser !== null ? (
          <Style.OptionDiv onClick={onSignOut}>SignOut</Style.OptionDiv>
        ) : (
          <Style.OptionLink to="/signin">SignIn</Style.OptionLink>
        )}
        <CartIcon />
      </Style.OptionsContainer>
      {!hidden && <CartDropdown />}
    </Style.HeaderContainer>
  );
}

export default Header;
