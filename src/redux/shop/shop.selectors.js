import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections =  createSelector(
    [selectShop],
    (shop) => shop.collections
);

// NEW selector to adjust for Shop_Data now being an object rather than
// an array
export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    // shop.collections is now an object rather than array
    // so Object.keys(xxx) returns an array of xxx's keys
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
    // then, we map over that array and for each key we return the collections 
    // value that is associated with it
)


// the collection will be a function which takes in the CollectionID as an arg
export const selectCollection = collectionsUrlParam => 
createSelector(
    [selectShopCollections],
    // sifting through arrays can be very time consuming so
    // we changed the shop_data to an object and can now
    // simply find the object with the correct key rather than
    // use a .find() on an array
    collections =>  (collections ? collections[collectionsUrlParam] : null)
);

