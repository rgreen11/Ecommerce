import { combineReducers } from 'redux';

import userReducer from './user/user.reducer.js';
import cartReducer from './cart/cart.reducer.js';
//combine all of the states together

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});