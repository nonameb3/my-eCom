import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  firestore,
  convertCollectionsToSnapshot
} from "../../firebase/firebase.utill";
import { fetchCollectionFailure, fetchCollectionSuccess } from "./shop.action";
import * as TYPE from "./shop.type";

export function* fetchCollectionAsync() {
  try {
    const collectionsRef = firestore.collection("collections");
    const snapshot = yield collectionsRef.get();
    const collectionsHashData = yield call(
      convertCollectionsToSnapshot,
      snapshot
    );
    yield put(fetchCollectionSuccess(collectionsHashData));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

// handle function
export function* fetchCollectionStart() {
  yield takeLatest(TYPE.UPDATE_SHOP_COLLECTIONS_API_START, fetchCollectionAsync);
}

export function* shopSaga() {
  yield all([call(fetchCollectionStart)]);
}
