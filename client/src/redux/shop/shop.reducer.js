import { SHOP_DATA } from "./shop.data";
import { UPDATE_SHOP_COLLECTIONS} from './shop.type';

const INITIAL_STATE = {
  collection: SHOP_DATA
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_SHOP_COLLECTIONS:
      return {
        ...state,
        collection: action.payload
      }
    default:
      return state;
  }
}
