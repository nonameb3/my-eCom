import * as TYPE from "./user.type";

export const setCurrentUser = user => ({
  type: TYPE.SET_CURRENT_USER,
  payload: user
});

export const googleSignInStart = () => ({ type: TYPE.GOOGLE_SIGN_IN_START });

export const googleSignInSuccess = user => ({
  type: TYPE.GOOGLE_SIGN_IN_SUCCESS,
  payload: user
});

export const googleSignInFailure = error => ({
  type: TYPE.GOOGLE_SIGN_IN_FAILURE,
  payload: error
});

export const emailSignInStart = () => ({ type: TYPE.EMAIL_SIGN_IN_START });

export const emailSignInSuccess = user => ({
  type: TYPE.EMAIL_SIGN_IN_SUCCESS,
  payload: user
});

export const emailSignInFailure = error => ({
  type: TYPE.EMAIL_SIGN_IN_FAILURE,
  payload: error
});
