import * as TYPE from "./directory.type";
import { data } from "./directory.data";

const INITIAL_STATE = {
  sections: data
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPE.INITIAL_DATA:
      return {
        ...state,
        sections: action.payload
      };
    default:
      return state;
  }
}
