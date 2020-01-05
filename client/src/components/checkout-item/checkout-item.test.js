import React from "react";
import { shallow } from "enzyme";

import CheckoutItem from "./checkout-item.component";
import {
  deleteCartItem,
  addCartItem,
  removeCartItem
} from "../../redux/cart/cart.action";

let wrapper;
const mockDispatch = jest.fn();
const mockCartItem = {
  imageUrl:
    "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  price: 99,
  name: "jacket",
  quantity: 10
};

jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch
}));

describe("checkout-item component", () => {
  beforeEach(() => {
    wrapper = shallow(<CheckoutItem {...{ cartItem: mockCartItem }} />);
  });

  it("should render checkout-item component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should action add-item when button is clicked", () => {
    wrapper.find("#add-item").simulate("click");
    expect(mockDispatch).toHaveBeenCalledWith(addCartItem(mockCartItem));
  });

  it("should action remove-item when button is clicked", () => {
    wrapper.find("#remove-item").simulate("click");
    expect(mockDispatch).toHaveBeenCalledWith(removeCartItem(mockCartItem));
  });

  it("should action delete-item when button is clicked", () => {
    wrapper.find(".remove-button").simulate("click");
    expect(mockDispatch).toHaveBeenCalledWith(deleteCartItem(mockCartItem));
  });
});
