// Combining reducers on index:
import {combineReducers} from 'redux';
// importing the reducer.
import productsReducer from './productsReducer';


// Including and combining if we have multiple reducers, we asign a custom name:
export default combineReducers({
    products: productsReducer
})