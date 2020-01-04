import React from "react";
import { shallow } from "enzyme";

import CartItem from "./cart-item.component";

const mockProps = {
  item: {
    imageUrl:
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    price: 99,
    name: "jacket",
    quantity: 10
  }
};

it("should render cartItem compoent", () => {
  const wrapper = shallow(<CartItem {...mockProps} />);
  expect(wrapper).toMatchSnapshot();
});
