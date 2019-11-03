import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collection
);

export const selectShopCollectionsArray = createSelector(
  [selectShopCollections],
  selectShopCollections => Object.values(selectShopCollections)
)

export const SelectShopCollection = selectRouteName =>
  createSelector(
    [selectShopCollections],
    shopCollection =>
      shopCollection[selectRouteName]
  );
