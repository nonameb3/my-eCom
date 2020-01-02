import { all, put, call, takeEvery, takeLatest } from "redux-saga/effects";

import { getCurrentUser } from "../../firebase/firebase.utill";
import {
  addCartItemsToDocument,
  fetchCartItemsFromFirestore,
  removeCartItemsFromFireStore
} from "../../firebase/firebase.cart.utill";
import * as cartAction from "./cart.action";
import * as CARTTYPE from "./cart.type";
import * as USERTYPE from "../user/user.type";

function* clearCartStore() {
  yield put(cartAction.clearAllCartItems());
}

function* addCartItems({ payload }) {
  const userAuth = yield getCurrentUser();
  if (!userAuth) return;

  yield addCartItemsToDocument(userAuth, payload);
  yield put(cartAction.addCartItemSuccess(payload));
}

function* removeCartItems({ payload }) {
  const userAuth = yield getCurrentUser();
  if (!userAuth) return;

  yield removeCartItemsFromFireStore(userAuth, payload);
  yield put(cartAction.removeCartItemSuccess(payload));
}

function* deleteCartItems() {
  yield console.log("deleteCartItems");
}

function* fetchCartItems() {
  const userAuth = yield getCurrentUser();
  if (!userAuth) return;

  const cartItems = yield fetchCartItemsFromFirestore(userAuth);
  yield put(cartAction.fetchCartItemSuccess(cartItems));
}

// handle function
function* onSingOutSuccess() {
  yield takeLatest(USERTYPE.SIGN_OUT_SUCCESS, clearCartStore);
}

function* onAddCartItems() {
  yield takeLatest(CARTTYPE.ADD_CART_ITEMS_START, addCartItems);
}

function* onRemoveCartItems() {
  yield takeLatest(CARTTYPE.REMOVE_CART_ITEM_START, removeCartItems);
}

function* onDeleteCartItems() {
  yield takeLatest(CARTTYPE.DELETE_CART_ITEM_START, deleteCartItems);
}

function* onFetchCartItems() {
  yield takeLatest(CARTTYPE.FETCH_CART_ITEMS_START, fetchCartItems);
}

export function* cartSaga() {
  yield all([
    call(onSingOutSuccess),
    call(onAddCartItems),
    call(onRemoveCartItems),
    call(onDeleteCartItems),
    call(onFetchCartItems)
  ]);
}
