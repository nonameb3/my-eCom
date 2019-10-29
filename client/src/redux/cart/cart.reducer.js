import * as TYPE from "./cart.type";

const INITIAL_STATE = {
  hidden: true
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPE.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
}
