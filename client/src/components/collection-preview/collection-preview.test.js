import React from "react";
import { shallow } from "enzyme";

import CollectionPreview from "./collection-preview.component";
import CollectionItem from "../collection-item/collection-item.component";

let wrapper;
const mockItems = [{ id: 1 }, { id: 2 }, { id: 3 }];
const mockProps = { items: mockItems, title: "test" };

describe("collection-preview component", () => {
  beforeEach(() => {
    wrapper = shallow(<CollectionPreview {...mockProps} />);
  });

  it("should render collection-preview component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render collection-item as expect", () => {
    expect(wrapper.find(CollectionItem).length).toBe(mockItems.length);
  });
});
