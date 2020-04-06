// here we store reusable selectors in a more efficient way

import { createSelector } from 'reselect';

// 1. we make an INPUT SELECTOR. This is a function takes in the whole state
//  and returns a slice of it. In this case, the cart slice
const selectCart = state => state.cart;

// 2. now we want a property on the above selector - cartItems
//  and we make this using the createSelector

// createSelector takes 2 args
// first - a collection (an array) of input selectors (i.e. from step 1) or created selectors
// second - a function that returns the value we want from the selector
//          it's arguments will be the output of the input selectors from first arg
//           in this case, we want cartItems 
export const selectCartItems = createSelector(
    // first argument - input selector(s)
    [selectCart],
    // second argument - function that returns
    cart => cart.cartItems
);


// this slice of state is taken from cartItems state. There is
// no CartItemsCount state - it's only found here
export const selectCartItemsCount = createSelector(
    // first argument - input selector(s), which was created above
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulator, cartItem) => accumulator + cartItem.quantity,
        0
        )
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (accumulator, cartItem) => accumulator + cartItem.quantity * cartItem.price, 
        0
        )
);