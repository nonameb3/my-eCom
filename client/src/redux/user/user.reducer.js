import * as TYPE from "./user.type";

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPE.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case TYPE.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      }
    case TYPE.SIGN_IN_FAILURE:
    case TYPE.SIGN_OUT_FAILURE:
    case TYPE.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
