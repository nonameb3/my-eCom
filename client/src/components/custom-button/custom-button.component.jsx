import React from "react";
import "./custom-button.style.scss";

export default function({ children, googleSignInButton, inverted, ...props }) {
  return (
    <button className={`${inverted ? "inverted" : ""} ${googleSignInButton? "google-button" : ""} custom-button`} {...props}>
      {children}
    </button>
  );
}
