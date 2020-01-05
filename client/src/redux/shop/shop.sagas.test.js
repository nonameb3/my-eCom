import { takeLatest, put, call} from "redux-saga/effects";

import * as TYPE from "./shop.type";
import {
  firestore,
  convertCollectionsToSnapshot
} from "../../firebase/firebase.utill";
import { fetchCollectionSuccess, fetchCollectionFailure } from "./shop.action";
import { fetchCollectionAsync, fetchCollectionStart } from "./shop.sagas";

it("should trigger on UPDATE_SHOP_COLLECTIONS", () => {
  const generator = fetchCollectionStart();
  expect(generator.next().value).toEqual(
    takeLatest(TYPE.UPDATE_SHOP_COLLECTIONS_API_START, fetchCollectionAsync)
  );
});

describe("shop redux-saga fetchCollectionAsync testing", () => {
  const generator = fetchCollectionAsync();

  it("should call firestore collection ", () => {
    const getCollection = jest.spyOn(firestore, 'collection');
    generator.next();
    expect(getCollection).toHaveBeenCalledTimes(1);
  });

  it("should call convertCollectionsSnapshot saga ", () => {
    const mockSnapshot = {};
    expect(generator.next(mockSnapshot).value).toEqual(
      call(convertCollectionsToSnapshot, mockSnapshot)
    );
  });

  it(
    "should fire fetchCollectionsSuccess if collectionsMap is succesful",
    () => {
      const mockCollectionsMap = {
        hats: { id: 1 }
      };
      expect(generator.next(mockCollectionsMap).value).toEqual(
        put(fetchCollectionSuccess(mockCollectionsMap))
      );
    }
  );

  it("should fire fetchCollectionsFailure if get collection fails at any point", () => {
    const newGenerator = fetchCollectionAsync();
    newGenerator.next();
    expect(newGenerator.throw({ message: "error" }).value).toEqual(
      put(fetchCollectionFailure("error"))
    );
  });
});
