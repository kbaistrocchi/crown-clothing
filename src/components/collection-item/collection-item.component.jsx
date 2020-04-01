import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl })=> (
    <div className='collection-item'>
        <div 
        className='image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>${price}</span>
        </div>

        <CustomButton inverted>Add to cart</CustomButton>
        {/* We can style only these CustomButtons not only by passing props to be
             classNames, but also by nesting the comp's className ('custom-button')
             under it's parent div, as usually in Sass  */}

        
    </div>
)

export default CollectionItem;