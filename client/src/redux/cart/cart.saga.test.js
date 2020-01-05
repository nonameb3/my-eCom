import { takeLatest, put } from "redux-saga/effects";

import * as TYPE from "../user/user.type";
import { clearAllCartItems } from "./cart.action";
import { clearCartStore, onSingOutSuccess  } from "./cart.saga";

describe("cart redux-saga testing", () => {
  it("should trigger on SIGN_OUT_SUCCESS", () => {
    const generator = onSingOutSuccess();
    expect(generator.next().value).toEqual(
      takeLatest(TYPE.SIGN_OUT_SUCCESS, clearCartStore)
    );
  });

  it("should fire clearCart", () => {
    const generator = clearCartStore();
    expect(generator.next().value).toEqual(put(clearAllCartItems()));
  });
});
