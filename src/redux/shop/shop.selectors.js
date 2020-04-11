import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections =  createSelector(
    [selectShop],
    (shop) => shop.collections
);


// the collection will be a function which takes in the CollectionID as an arg
export const selectCollection = collectionsUrlParam => 
createSelector(
    [selectShopCollections],
    // sifting through arrays can be very time consuming so
    // we changed the shop_data to an object and can now
    // simply find the object with the correct key rather than
    // use a .find() on an array
    collections =>  collections[collectionsUrlParam]
);

