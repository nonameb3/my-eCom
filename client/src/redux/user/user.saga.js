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
  signOutFailure
} from "./user.actions";
import * as TYPE from "./user.type";

function* processUserSnapshot(user) {
  try {
    const userRef = yield call(createUserProfileDocument, user);
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

function* isUserAuthenticatd() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield processUserSnapshot(userAuth);
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

export function* onGoogleSignInStartSaga() {
  yield takeLatest(TYPE.GOOGLE_SIGN_IN_START, siginWithGoogle);
}

export function* onEmailSignInStartSaga() {
  yield takeLatest(TYPE.EMAIL_SIGN_IN_START, signinWithEmail);
}

export function* onCheckUserSaga() {
  yield takeLatest(TYPE.CHECK_USER_SESSION, isUserAuthenticatd);
}

export function* onSignOut() {
  yield takeLatest(TYPE.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStartSaga),
    call(onEmailSignInStartSaga),
    call(onCheckUserSaga),
    call(onSignOut)
  ]);
}
