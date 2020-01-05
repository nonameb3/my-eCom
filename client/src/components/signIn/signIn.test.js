import React from "react";
import { shallow } from "enzyme";

import SignIn from "./signIn.component";

let wrapper;
const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch
}));

wrapper = shallow(<SignIn />);
it("should render sign-in component", () => {
  expect(wrapper).toMatchSnapshot();
});
