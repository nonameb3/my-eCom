import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import {auth} from '../../firebase/firebase.utill'
import "./header.style.scss";

export default function({ currentUser }) {
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
        {
          currentUser !== null ? (
            <div className="option" onClick={() => auth.signOut()}>
              SignOut
            </div>
          ) : (
            <Link className="option" to="/signin">
              SignIn
            </Link>
          )
        }
      </div>
    </div>
  );
}
