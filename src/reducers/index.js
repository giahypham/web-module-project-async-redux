import data from '../data/gifs'

//First thing, check slices of state in App.js

const initialStates = {
    gifs: data,
    loading: false,
    error: ''
}

const reducer = (state = initialStates, action) => {
    switch(action.type) {
        default:
            return (state);
    }
}

export default reducer;