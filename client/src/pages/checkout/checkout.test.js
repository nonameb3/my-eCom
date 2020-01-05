import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";

import Checkout from "./checkout.component";
import { store } from "../../redux/store";

let wrapper;
beforeEach(() => {
  const mockData = {
    cartItems: [],
    total: 99
  };

  wrapper = shallow(
    <Provider store={store}>
      <Checkout {...mockData} />
    </Provider>
  );
});

it("should render checkout component", () => {
  expect(wrapper).toMatchSnapshot();
});
