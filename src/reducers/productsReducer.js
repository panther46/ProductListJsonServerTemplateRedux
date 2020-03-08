// each reducer has a state:
const initialState ={
    products:[],
    error: false,
    loading: false;
}

// passing the state and action:
export default function(state = initialState, action){
    switch(action.type){
        default:
            return state; // always return state
    }
}