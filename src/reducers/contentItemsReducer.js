const initialState = {
    data: {
      contentItems: [],
      totalPages: null
    }
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
      default: 
        return state;
    }
  }