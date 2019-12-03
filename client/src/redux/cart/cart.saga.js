import { all ,put ,call ,takeLatest } from 'redux-saga/effects';

import { clearAllCartItems } from './cart.action';
import * as USERTYPE from '../user/user.type';

function* clearCartStore() {
  yield put(clearAllCartItems());
}

// handle function
function* onSingOutSuccess() {
  yield takeLatest(USERTYPE.SIGN_OUT_SUCCESS, clearCartStore)
}

export function* cartSaga() {
  yield all([call(onSingOutSuccess)])
}
