import * as TYPE from "./shop.type";

const INITIAL_STATE = {
  collection: null,
  isFetching: false,
  errorMessage: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPE.UPDATE_SHOP_COLLECTIONS:
      return {
        ...state,
        collection: action.payload
      };
    case TYPE.UPDATE_SHOP_COLLECTIONS_API_START:
      return {
        ...state,
        isFetching: true
      };
    case TYPE.UPDATE_SHOP_COLLECTIONS_API_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collection: action.payload
      };
    case TYPE.UPDATE_SHOP_COLLECTIONS_API_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
}
