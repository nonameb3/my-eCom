import React from 'react';
import { shallow} from 'enzyme';

import CartIcon from './cart-icon.component';
import { toggleCart } from "../../redux/cart/cart.action";

let wrapper;
const mockDispatch = jest.fn();
const mockItemCount = 99;

jest.mock("react-redux", () => ({
  useSelector: jest.fn(() => mockItemCount),
  useDispatch: () => mockDispatch
}));

describe('Cart-icon component', () => {
  beforeEach(() => {
    wrapper = shallow(<CartIcon />);
  })

  it('should rander cart-icon component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should action toggleCart when button is clicked', () => {
    wrapper.find('.cart-icon').simulate('click');
    expect(mockDispatch).toHaveBeenCalledWith(toggleCart());
  });

  it('should rander item count as expect', () => {
    wrapper.find('.cart-icon').simulate('click');
    expect(wrapper.find('.item-count').text()).toEqual(mockItemCount.toString())
  });
})