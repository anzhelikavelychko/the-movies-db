const initialState = {
    data: {
      contentItems: [],
      totalPages: null
    },
    loading: false
  };
  
  export default (state = initialState, action) => {
    switch(action.type) {
      case 'RECEIVE_CONTENT':
        const { contentItems, totalPages } = action.payload;
        return {
          ...state,
          data: {
            contentItems: [...state.data.contentItems, ...contentItems],
            totalPages
          }
        }
      case 'CLEAN_CONTENT':
        return {
          data: {
            contentItems: [],
            totalPages: null
          }
        }
      case 'SET_LOADING': 
        return {
          ...state,
          loading: action.payload
        }
      default: 
        return state;
    }
  }