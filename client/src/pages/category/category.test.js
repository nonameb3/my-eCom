import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import configStore from "redux-mock-store";

import Category from "./category.component";
import CollectionItem from "../../components/collection-item/collection-item.component";

const mockStore = configStore();

let wrapper;
const mockItems = [{ id: 1 }, { id: 2 }, { id: 3 }];
const props = { match: { params: { categoryId: "test" } } };
const store = mockStore({
  shop: {
    collection: {
      test: { items: mockItems, title: "test" }
    }
  }
});

describe("Category component", () => {
  it("should render catagory compoent", () => {
    wrapper = shallow(
      <Provider store={store}>
        <Category {...props} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("should rander collection-items same as number of collection arry", () => {
    wrapper = mount(
      <Provider store={store}>
        <Category {...props} />
      </Provider>
    );
    expect(wrapper.find(CollectionItem).length).toBe(mockItems.length);
  });
});
