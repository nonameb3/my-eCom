import React from "react";
import { shallow } from "enzyme";

import SignIn from "./signIn.component";

it("should rander signin component", () => {
  expect(shallow(<SignIn />)).toMatchSnapshot();
});
