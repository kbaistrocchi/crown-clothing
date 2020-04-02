import React from 'react';
import { connect } from 'react-redux';

// import an svg
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-cart-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)

// In order to have a count in the shopping cart, we need access to the 
// CartItems state, in particular, the quantity property
// therefore, we need to map state to props so we have access to that state
const mapStateToProps = ({ cart: { cartItems } }) => ({
    itemCount: cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity, 0)

})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
