import { createSelector } from 'reselect';

// create an object that maps the id to the string corresponding to 
// the collection name. This is so that the url param gets the 
// proper collection
const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

const selectShop = state => state.shop;

export const selectShopCollections =  createSelector(
    [selectShop],
    (shop) => shop.collections
);


// the collection will be a function which takes in the CollectionID as an arg
export const selectCollection = collectionsUrlParam => 
createSelector(
    [selectShopCollections],
    collections =>  collections.find(
        collection => collection.id === COLLECTION_ID_MAP[collectionsUrlParam]
    )
);

