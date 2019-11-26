import { takeEvery, call, put } from "redux-saga/effects";

import {
  firestore,
  convertCollectionsToSnapshot
} from "../../firebase/firebase.utill";
import { fetchCollectionFailure, fetchCollectionSuccess } from "./shop.action";
import * as TYPE from "./shop.type";

function* fetchCollectionAsync() {
  // yield console.log("fired fn");
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

export function* fetchCollectionStart() {
  yield takeEvery(TYPE.UPDATE_SHOP_COLLECTIONS_API_START, fetchCollectionAsync);
}
