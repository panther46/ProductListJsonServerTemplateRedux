// Combining reducers on index:
import from {combineReducers} from 'redux';
// importing the reducer.
import productsReducer from './productsReducers';


// Including and combining if we have multiple reducers, we asign a custom name:
export default combineReducers({
    products: productsReducer
})