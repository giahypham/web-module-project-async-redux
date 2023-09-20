import data from '../data/gifs'

import { FETCH_START, FETCH_SUCCESS } from '../actions'

//First thing, check slices of state in App.js

const initialStates = {
    gifs: [],
    loading: false,
    error: ''
}

const reducer = (state = initialStates, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                loading: true,
                error: ""
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                gifs: action.payload,
                error: ""
            }
        default:
            return (state);
    }
}

export default reducer;