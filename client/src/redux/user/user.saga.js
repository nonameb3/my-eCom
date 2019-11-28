import { takeLatest, put, all, call } from "redux-saga/effects";

import {
  googleProvider,
  auth,
  createUserProfileDocument
} from "../../firebase/firebase.utill";
import { googleSignInSuccess, googleSignInFailure } from "./user.actions";
import * as TYPE from "./user.type";

function* siginWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();

    // put is send data back to redux
    yield put(
      googleSignInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data()
      })
    );
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* googleSignInStartSaga() {
  yield takeLatest(TYPE.GOOGLE_SIGN_IN_START, siginWithGoogle);
}

export function* userSagas() {
  yield all([call(googleSignInStartSaga)]);
}
