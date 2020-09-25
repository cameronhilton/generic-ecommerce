import { createSelector } from 'reselect'
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections,
);

// Convert collections object to array of values
export const selectColelctionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = memoize(
  collectionUrlParam =>
    createSelector(
      [selectCollections],
      collections => collections[collectionUrlParam]
    )
);
