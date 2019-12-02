import * as TYPE from "./user.type";

export const setCurrentUser = user => ({
  type: TYPE.SET_CURRENT_USER,
  payload: user
});

export const googleSignInStart = () => ({
  type: TYPE.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = input => ({
  type: TYPE.EMAIL_SIGN_IN_START,
  payload: input
});

export const signInSuccess = user => ({
  type: TYPE.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: TYPE.SIGN_IN_FAILURE,
  payload: error
});

export const signOutStart = () => ({
  type: TYPE.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: TYPE.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: TYPE.SIGN_OUT_FAILURE,
  payload: error
});

export const checkUserAuthentication = () => ({
  type: TYPE.CHECK_USER_SESSION
});

export const signUpStart = formInput => ({
  type: TYPE.SIGN_UP_START,
  payload: formInput
})

export const signUpSuccess = user => ({
  type: TYPE.SIGN_UP_SUCCESS,
  payload: user
})

export const SignUpFailure = error => ({
  type: TYPE.SIGN_UP_FAILURE,
  payload: error
})
