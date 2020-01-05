import React from "react";
import { shallow } from "enzyme";

import { Menuitem } from "./menu-item.component";

let wrapper;
const mockHistory = {push: jest.fn()}
const mockProps = {
  title: "test-title",
  size: 99,
  imageUrl: "abc.com",
  history: mockHistory,
  match: {url:'/abc'},
  linkUrl: "/url.com"
};

describe('munu-item component', () => {
  beforeEach(() => {
    wrapper= shallow(<Menuitem {...mockProps}/>);
  });

  it('should render menu-item component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should rander title as expect', () => {
    expect(wrapper.find('.title').text()).toEqual(mockProps.title)
  });

  it('should action history.push when click', () => {
    wrapper.find('.menu-item').simulate('click');
    expect(mockHistory.push).toHaveBeenCalledWith(`${mockProps.match.url}${mockProps.linkUrl}`);
  });
})
