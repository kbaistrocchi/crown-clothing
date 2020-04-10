import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({ match }) => {
    console.log('match', match);
    // we need access to the each collection and it's properties
    // HOW?
    // at this point we can access the collection from the url
    // 1. we'll create a map of url strings (collection names) to collection IDs
        // this will be done inside the Shop Selector
    // 2. We'll create a selector that uses that map to find the correct
        // collection based on the url param
    // 3. Using mapStateToProps, we can get access to that selection
        // of the store data

    // THIS WILL BE DONE THROUGH CURRYING
    return (
        <div className='collection'>
        <h2>Collection PAGE</h2>
    </div>
    )
    
};

export default CollectionPage;