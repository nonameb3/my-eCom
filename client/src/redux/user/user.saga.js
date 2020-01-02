import { takeLatest, put, all, call } from "redux-saga/effects";

import {
  googleProvider,
  auth,
  createUserProfileDocument,
  getCurrentUser
} from "../../firebase/firebase.utill";
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  SignUpFailure
} from "./user.actions";
import { fetchCartItemStart } from '../cart/cart.action';
import * as TYPE from "./user.type";

function* processUserSnapshot(user, additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, user, additionalData);
    const userSnapshot = yield userRef.get();

    // put is send data back to redux
    yield put(
      signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data()
      })
    );
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* siginWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield processUserSnapshot(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signinWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(
      email.trim(),
      password
    );
    yield processUserSnapshot(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    console.log('start')
    yield processUserSnapshot(userAuth);
    yield put(fetchCartItemStart()); // fetch cartItems
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

function* signUpStart(props) {
  const { email, password } = props.payload.additionalData;
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(
      email.trim(),
      password
    );

    yield put(signUpSuccess(user));
    yield processUserSnapshot(user, props.payload.additionalData);
    props.payload.history.push("/");
  } catch (error) {
    yield put(SignUpFailure(error))
  }
};

// handle function
function* onGoogleSignInStartSaga() {
  yield takeLatest(TYPE.GOOGLE_SIGN_IN_START, siginWithGoogle);
}

function* onEmailSignInStartSaga() {
  yield takeLatest(TYPE.EMAIL_SIGN_IN_START, signinWithEmail);
}

function* onCheckUserSaga() {
  yield takeLatest(TYPE.CHECK_USER_SESSION, isUserAuthenticated);
}

function* onSignOut() {
  yield takeLatest(TYPE.SIGN_OUT_START, signOut);
}

function* onSignUpStart() {
  yield takeLatest(TYPE.SIGN_UP_START, signUpStart)
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStartSaga),
    call(onEmailSignInStartSaga),
    call(onCheckUserSaga),
    call(onSignOut),
    call(onSignUpStart),
  ]);
}
