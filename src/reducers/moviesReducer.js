const initialState = {searchedItems: [], totalPages: null};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_MOVIES': 
      return Object.assign({}, state, {
        searchedItems: [].concat(state.searchedItems, action.payload)
      })

    case 'RECEIVE_TOTAL_PAGES_FOR_MOVIES':
      return Object.assign({}, state, {
        totalPages: action.payload
      });
    
    case 'CLEAR_DATA_OF_MOVIES': 
      return Object.assign({}, state, {
        totalPages: null,
        searchedItems: []
      });
    default: 
      return state;
  }
};  