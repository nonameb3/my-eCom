import React from 'react';
import { shallow} from 'enzyme';

import CollectionItem from './collection-item.component';
import { addCartItem } from "../../redux/cart/cart.action";
import CustomButton from "../custom-button/custom-button.component";

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

describe('collection-item compnent', () => {
  beforeEach(() => {
    wrapper = shallow(
      <CollectionItem {...{items: mockCartItem}}/>
    );
  });
  
  it('should render collection-item component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should action add to cart when click', () => {
    wrapper.find(CustomButton).simulate('click');
    expect(mockDispatch).toHaveBeenCalledWith(addCartItem(mockCartItem));
  })
});
