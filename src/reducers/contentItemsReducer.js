const initialState = {
    data: {
      contentItems: [],
      totalPages: null
    },
    loading: false,
    episodes: []
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
          },
          episodes: [],
          loading: false
        }
      case 'SET_LOADING': 
        return {
          ...state,
          loading: action.payload
        }
      case 'RECEIVE_EPISODES': 
        return {
          ...state,
          episodes: action.payload,
        }
      case 'CLEAR_SELECTED_EPISODE': 
        return {
          ...state,
          episodes: []
        }
      default: 
        return state;
    }
  }