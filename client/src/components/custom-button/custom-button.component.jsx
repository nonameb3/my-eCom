import React from "react";
import { CustomeButtonContainer } from "./custom-button.style";

export default function({ children, ...props }) {
  return <CustomeButtonContainer className="custom-button" {...props}>{children}</CustomeButtonContainer>;
}
