import * as TYPE from "./user.type";

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPE.GOOGLE_SIGN_IN_SUCCESS:
    case TYPE.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case TYPE.GOOGLE_SIGN_IN_FAILURE:
    case TYPE.EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
