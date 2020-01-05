import { takeLatest, put, all, call } from "redux-saga/effects";

import {
  googleProvider,
  auth,
  createUserProfileDocument,
  getCurrentUser
} from "../../firebase/firebase.utill";
import * as TYPE from "./user.type";
import * as ACTION from "./user.actions";
import * as SAGA from "./user.saga";

it("should trigger onGoogleSignInStartSaga", () => {
  const generator = SAGA.onGoogleSignInStartSaga();
  expect(generator.next().value).toEqual(
    takeLatest(TYPE.GOOGLE_SIGN_IN_START, SAGA.siginWithGoogle)
  );
});

it("should trigger onEmailSignInStartSaga", () => {
  const generator = SAGA.onEmailSignInStartSaga();
  expect(generator.next().value).toEqual(
    takeLatest(TYPE.EMAIL_SIGN_IN_START, SAGA.signinWithEmail)
  );
});

it("should trigger onCheckUserSaga", () => {
  const generator = SAGA.onCheckUserSaga();
  expect(generator.next().value).toEqual(
    takeLatest(TYPE.CHECK_USER_SESSION, SAGA.isUserAuthenticated)
  );
});

it("should trigger onSignOut", () => {
  const generator = SAGA.onSignOut();
  expect(generator.next().value).toEqual(
    takeLatest(TYPE.SIGN_OUT_START, SAGA.signOut)
  );
});

it("should trigger onSignUpStart", () => {
  const generator = SAGA.onSignUpStart();
  expect(generator.next().value).toEqual(
    takeLatest(TYPE.SIGN_UP_START, SAGA.signUpStart)
  );
});

describe("on sign up saga", () => {
  const mockEmail = "cindy@gmail.com";
  const mockPassword = "test123";
  const mockDisplayName = "cindy";

  const mockAction = {
    payload: {
      email: mockEmail,
      password: mockPassword,
      displayName: mockDisplayName
    }
  };

  const generator = SAGA.signinWithEmail(mockAction);

  it("should call auth.createUserWithEmailAndPassword", () => {
    const signInWithEmailAndPassword = jest.spyOn(
      auth,
      "signInWithEmailAndPassword"
    );
    generator.next();
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });
});

describe("on sign out saga", () => {
  const generator = SAGA.signOut();

  it("should call auth.signOut", () => {
    const expectSignOut = jest.spyOn(auth, "signOut");
    generator.next();
    expect(expectSignOut).toHaveBeenCalled();
  });

  it("should call signOutSuccess", () => {
    expect(generator.next().value).toEqual(put(ACTION.signOutSuccess()));
  });

  it("should call signOutFailure on error", () => {
    const newGenerator = SAGA.signOut();
    newGenerator.next();
    expect(newGenerator.throw("error").value).toEqual(
      put(ACTION.signOutFailure("error"))
    );
  });
});

describe("is user authenticated saga", () => {
  const generator = SAGA.isUserAuthenticated();

  it("should call getCurrentUser", () => {
    expect(generator.next().value).toEqual(getCurrentUser());
  });

  it("should call getSnapshotFromUserAuth if userAuth exists", () => {
    const mockUserAuth = { uid: "123da" };
    expect(generator.next(mockUserAuth).value).toEqual(
      SAGA.processUserSnapshot(mockUserAuth)
    );
  });

  it("should call signInFailure on error", () => {
    const newGenerator = SAGA.isUserAuthenticated();
    newGenerator.next();
    expect(newGenerator.throw("error").value).toEqual(
      put(ACTION.signInFailure("error"))
    );
  });
});

describe("processUserSnapshot saga", () => {
  const mockUser = { uid: 123, name: "test" };
  const mockAdditionalData = {};
  const generator = SAGA.processUserSnapshot(mockUser, mockAdditionalData);

  it("fire createUserProfileDocument", () => {
    expect(generator.next().value).toEqual(
      call(createUserProfileDocument, mockUser, mockAdditionalData)
    );
  });

  it("should call signInFailure on error", () => {
    const newGenerator = SAGA.processUserSnapshot(mockUser, mockAdditionalData);
    newGenerator.next();
    expect(newGenerator.throw("error").value).toEqual(
      put(ACTION.signInFailure("error"))
    );
  });
});
