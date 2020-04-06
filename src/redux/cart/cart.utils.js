// utility function to help keep code clean
// these can be used in many places

// Instead of adding the same item to the cart multiple times, 
// we will check to see if it already exists in the cart and if so,
// we increase a quantitiy property,
// if it doesn't exist, we simply add it to the cartItems array
export const addItemToCart = (cartItems, cartItemToAdd) => {
    // first see if the cartItemToAdd is alerady in the cart
    const existingCartItem = cartItems.find(cartItem => 
        cartItem.id === cartItemToAdd.id);  
        //  returns undefined if not found
        //  returns the cartItem if is found

    // if it is found then return a NEW object with the cartItem already there
    // and add a quantity property and increase it by 1 
        //  needs to be a new object so that state is updated and comps re-render 
    if(existingCartItem) {
        return (
            // map returns a NEW array
            cartItems.map(cartItem => 
                // check if the item in the cart is same as item coming in
                cartItem.id === cartItemToAdd.id ?
                // if true, return an object with quantity
                { ...cartItem, quantity: cartItem.quantity + 1 } :
                // if false, just return the cartItem
                cartItem 
                )
        )
    }

    // if incoming item was not found in cartItems then we're going to create a NEW
    // array which contains all the items already in the array (...) 
    // and add an object containing the new item and give it a quantity property with a base value of 1
    // i.e. All new items going into the cartItems will be objects with quantity property of 1
    else {
        return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
        // remember, cartItemToAdd is an item and is an object. 
        // the ...cartItemToAdd passes in all the properties of that 
        // item object and adds the quantity property
    }
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    // find the cartItemToRemove from inside cartItems
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );
    
    // if quantity is 1  then remove item from cart
    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    // else, reduce quanitity by 1
    else {
        return cartItems.map(
            cartItem => cartItem.id === cartItemToRemove.id 
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
            );
    };
};