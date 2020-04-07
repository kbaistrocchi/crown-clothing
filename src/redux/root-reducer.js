import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// type of storage we want from redux-persist. In this case, we want to use the window.storage
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

// object containing json configurations that we want for persist
const persistConfig = {
    // key tells it at what point we want to start storing
    key: 'root',
    storage,    // this notation is the same as storage: storage (imported above)
    // an array of reducers we want to persist
    whitelist: ['cart']
}

// combineReducer just takes all the reducers and combines them into one

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);