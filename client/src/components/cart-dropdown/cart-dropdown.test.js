import React from "react";
import { shallow } from "enzyme";

import { CartDropdown } from "./cart-dropdown.component";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { toggleCart } from "../../redux/cart/cart.action";

let wrapper;
const mockDispatch = jest.fn();
let mockHistory = { push: jest.fn() };
let mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

jest.mock("react-redux", () => ({
  useSelector: jest.fn(() => mockCartItems),
  useDispatch: () => mockDispatch
}));

const mockProps = {
  history: mockHistory
};

describe("CartDropdown", () => {
  beforeEach(() => {
    wrapper = shallow(<CartDropdown {...mockProps} />);
  });

  it("should rander CartDropdown", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("shouild rander cartItem same as array", () => {
    expect(wrapper.find(CartItem).length).toBe(mockCartItems.length);
  });

  it('should call history.push when button is clicked', () => {
    wrapper.find(CustomButton).simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(toggleCart());
  });
});

it("should render empty-message if cartItems is empty", () => {
  mockCartItems = [];
  wrapper = shallow(<CartDropdown {...mockProps} />);
  expect(wrapper.find(".empty-text")).toHaveLength(1);
});
