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
        typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
                window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    ) 

);

export default store;