import { createSelector } from "reselect";

//Collection routing and selector
/* const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
};

after this data normalization we don't need this object */

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

//Data flow in our App
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);

//data normalization + collection page(after shop.data.js)
export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
);


//Collection routing and selector
// export const selectCollection = collectionUrlParam => createSelector(
//     [selectCollections],
//     collections => collections.find(
//         collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//     )
// );