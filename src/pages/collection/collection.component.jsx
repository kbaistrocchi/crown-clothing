import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
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
        <div className='collection-page'>
            <h2>{title}</h2>
            <div className='items'>
                {
                    items.map(item =>
                        <CollectionItem key={item.id} item={item} />
                        )
                }
            </div>
        </div>
    )
    
};

// because our selector takes in a parameter (url param), we need
// to use the second optional arg in mapState function, which is the props of the component  
const mapStateToProps = (state, ownProps) => ({
    // this is called currying, as we're passing two arguments separately
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);