import React from "react";
import { shallow } from "enzyme";

import { SignUpCompoent } from "./signUp.compoent";

let wrapper;
const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch
}));

wrapper = shallow(<SignUpCompoent />);
it("should render sign-up component", () => {
  expect(wrapper).toMatchSnapshot();
});
