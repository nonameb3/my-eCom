import { all, put, call, takeEvery, takeLatest} from "redux-saga/effects";

import { getCurrentUser } from "../../firebase/firebase.utill";
import { addCartItemsToDocument } from "../../firebase/firebase.cart.utill";
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

function* removeCartItems() {
  yield console.log("removeCartItems");
}

function* deleteCartItems() {
  yield console.log("deleteCartItems");
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

export function* cartSaga() {
  yield all([
    call(onSingOutSuccess),
    call(onAddCartItems),
    call(onRemoveCartItems),
    call(onDeleteCartItems)
  ]);
}
