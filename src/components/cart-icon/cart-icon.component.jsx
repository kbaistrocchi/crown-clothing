import React from 'react';

// import an svg
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-cart-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = () => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
)

export default CartIcon;