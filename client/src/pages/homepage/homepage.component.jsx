import React from "react";
import Directory from "../../components/directory/directory.component";

import { HomePage, H1 } from "./homepage.style";

export default function homepage() {
  return (
    <HomePage>
      <H1>Welcome to my Homepage</H1>
      <Directory />
    </HomePage>
  );
}
