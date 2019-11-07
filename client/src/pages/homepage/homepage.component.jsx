import React from "react";
import Directory from "../../components/directory/directory.component";

import { HomePage } from "./homepage.style";

export default function homepage() {
  return (
    <HomePage>
      <h1>Welcome to my Homepage</h1>
      <Directory />
    </HomePage>
  );
}
