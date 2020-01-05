import React from 'react';
import { shallow } from 'enzyme';

import Directory from './directory.component';
import MenuItem from "../menu-item/menu-item.component";

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
  useSelector: jest.fn(() => mockCollection)
}));

describe('directory component', () => {
  beforeEach(() => {
    wrapper = shallow(<Directory />);
  });

  it('should render directory component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('sould render munu-item as expect', () => {
    expect(wrapper.find(MenuItem).length).toBe(mockCollection.length);
  })
})