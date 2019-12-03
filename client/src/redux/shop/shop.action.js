import * as TYPE from "./shop.type";
import {
  firestore,
  convertCollectionsToSnapshot
} from "../../firebase/firebase.utill";

export const updateShopCollections = collections => {
  return {
    type: TYPE.UPDATE_SHOP_COLLECTIONS,
    payload: collections
  };
};

export const fetchCollectionStart = () => ({
  type: TYPE.UPDATE_SHOP_COLLECTIONS_API_START
});

export const fetchCollectionSuccess = collectionsItems => {
  return {
    type: TYPE.UPDATE_SHOP_COLLECTIONS_API_SUCCESS,
    payload: collectionsItems
  };
};

export const fetchCollectionFailure = errorMessage => {
  return {
    type: TYPE.UPDATE_SHOP_COLLECTIONS_API_FAILURE,
    payload: errorMessage
  };
};

// fetch data
export const fetchCollectionAsync = () => dispatch => {
  dispatch(fetchCollectionStart());
  const collectionsRef = firestore.collection("collections");
  collectionsRef
    .get()
    .then(snapshot => {
      const collectionsHashData = convertCollectionsToSnapshot(snapshot);
      dispatch(fetchCollectionSuccess(collectionsHashData));
    })
    .catch(error => dispatch(fetchCollectionFailure(error.message)));
};
