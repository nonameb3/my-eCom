import React from "react";
import "./custom-button.style.scss";

export default function({ children, ...props }) {
  return <button className="custom-button" {...props}>{children}</button>;
}
