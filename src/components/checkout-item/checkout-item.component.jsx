import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: { name, price, imageUrl, quantity }}) => (
    // by de-structuring props like this, we don't have access to cartItem,
    // only to it's properties that we further de-structured

    
    <div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={imageUrl} />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='remove-button'>&#10005;</div>

    </div>
);

export default CheckoutItem;