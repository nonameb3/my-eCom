import React from "react";
import { shallow } from "enzyme";

import CollectionOverview from "./collection-overview.component";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

let wrapper;
const mockCollection = [
  {
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    id: 1,
    linkUrl: "shop/hats"
  },
  {
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    id: 2,
    linkUrl: "shop/jackets"
  }
];

jest.mock("react-redux", () => ({
  useSelector: jest.fn(() => ({ collections: mockCollection }))
}));

describe("collection-overview component", () => {
  beforeEach(() => {
    wrapper = shallow(<CollectionOverview />);
  });

  it("should render collection-overview component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render collection-preview as expect", () => {
    expect(wrapper.find(CollectionPreview).length).toBe(mockCollection.length);
  });
});
