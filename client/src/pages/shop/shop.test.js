import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import config from "redux-mock-store";
import { shallow, mount } from "enzyme";

import Shop from "./shop.component";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.component";
import CategoryContainer from "../category/category.component";

const mockStore = config();
const mockItems = [{ id: 1 }, { id: 2 }, { id: 3 }];
const store = mockStore({
  shop: {
    isFetching: false,
    collection: {
      test: { items: mockItems, title: "test" }
    }}
});

let wrapper;
describe("Shop compoent", () => {
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Shop />
      </Provider>
    );
  });

  it("should rander shop compoent", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

/*
it("should rander shop compoent with CollectionOverviewContainer", () => {
  const mockProps = { match: {path: '/shop'}}
  wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <Shop {...mockProps}/>
      </BrowserRouter>
    </Provider>
  );

  expect(wrapper.find(CollectionOverviewContainer).exists()).toEqual(true);
});

it("should rander shop compoent with CategoryContainer", () => {
  const mockProps = { match: {path: '/shop/id'}}
  wrapper = mount(
    <BrowserRouter>
      <Provider store={store}>
        <Shop {...mockProps}/>
      </Provider>
    </BrowserRouter>
  );

  expect(wrapper.find(CategoryContainer).exists()).toEqual(true);
});
*/
