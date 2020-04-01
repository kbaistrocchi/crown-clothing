import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];   // can add more middleware to array in future

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;