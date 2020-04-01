import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

// combineReducer just takes all the reducers and combines them into one

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});