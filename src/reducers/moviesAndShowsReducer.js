export default (state = [], action) => {
    switch(action.type) {
        case 'FETCH_MOVIES_AND_SHOWS': 
            return [...state, action.payload];

        default: 
            return state;
    }
};