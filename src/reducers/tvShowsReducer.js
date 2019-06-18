const initialState = {searchedItems: [], totalPages: null};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_TVSHOWS': 
      return Object.assign({}, state, {
        searchedItems: [].concat(state.searchedItems, action.payload)
  })

    case 'RECEIVE_TOTAL_PAGES_FOR_SHOWS':
      return Object.assign({}, state, {
        totalPages: action.payload
      });
    default: 
      return state;
  }
};  