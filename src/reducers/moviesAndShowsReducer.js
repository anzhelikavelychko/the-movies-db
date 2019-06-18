const initialState = { searchedItems: [], totalPages: null }


export default (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_MOVIES_AND_SHOWS': 
      return Object.assign({}, state, {
        searchedItems: action.payload
      })

    case 'RECEIVE_TOTAL_PAGES':
      return Object.assign({}, state, {
        totalPages: action.payload
      });

    default: 
      return state;
  }
};