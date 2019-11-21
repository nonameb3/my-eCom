import { takeEvery } from "redux-saga/effects";

import * as TYPE from "./shop.type";

function* fetchCollectionAsync() {
  yield console.log("fired fn");
}

export function* fetchCollectionStart() {
  yield takeEvery(TYPE.UPDATE_SHOP_COLLECTIONS_API_START, fetchCollectionAsync);
}
