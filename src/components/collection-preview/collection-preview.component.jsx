import React from 'react';

import './collection-preview.styles.scss';

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preivew'>
            {
                items
                .filter((item, index) => index < 4)
                .map((item) => <div key={item.id}>{item.name}</div>)
                // NOTE this will be called everytime CollectionPreview is re-rendered
                // and this could become slow if the array is really large
            }
        </div>
    </div>
)

export default CollectionPreview;

