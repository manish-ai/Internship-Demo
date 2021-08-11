import { combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import wishReducer from './wishReducer';

export default combineReducers({
    products: productReducer,
    cart: cartReducer,
    wish: wishReducer
})