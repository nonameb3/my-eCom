import React from "react";
import { shallow } from "enzyme";

import Header from "./header.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { signOutStart } from "../../redux/user/user.actions";

let wrapper;
const mockDispatch = jest.fn();
const mockState = {
  currentUser: { id: 1, name: "test" },
  hidden: false
};
jest.mock("react-redux", () => ({
  useSelector: jest.fn(() => mockState),
  useDispatch: () => mockDispatch
}));

describe("header component", () => {
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it("should render header component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render cart-dropdown component", () => {
    expect(wrapper.find(CartDropdown).exists()).toBe(true);
  });

  it("should action logout when click sign-out", () => {
    wrapper.find("#signout-btn").simulate("click");
    expect(mockDispatch).toHaveBeenCalledWith(signOutStart());
  });
});
