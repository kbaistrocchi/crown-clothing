import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({ match }) => {
    console.log('match', match);
    return (
        <div className='collection'>
        <h2>Collection PAGE</h2>
    </div>
    )
    
};

export default CollectionPage;