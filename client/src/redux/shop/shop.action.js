import { UPDATE_SHOP_COLLECTIONS } from "./shop.type";

export const updateShopCollections = collections => {
  return {
    type: UPDATE_SHOP_COLLECTIONS,
    payload: collections
  };
};
