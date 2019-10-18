import React from "react";
import "./custom-button.style.scss";

export default function({ children, googleSignInButton, ...props }) {
  return (
    <button className={`${googleSignInButton? "google-button" : ""} custom-button`} {...props}>
      {children}
    </button>
  );
}
