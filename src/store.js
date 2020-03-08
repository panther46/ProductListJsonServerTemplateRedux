// Importing tools to create the store
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
// Including the Reducer index Will seek the index.js auto
import reducer from './reducers';

// creating store:
// passing parameters:
const store = createStore(
    reducer,
    compose(applyMiddleware(thunk),
    ) 

);

export default store;