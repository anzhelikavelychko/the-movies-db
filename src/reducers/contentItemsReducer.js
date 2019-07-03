import {
  REQUEST_MULTI_DATA,
  REQUEST_MOVIES_DATA,
  REQUEST_SHOWS_DATA,
  RECEIVE_EPISODES,
  RECEIVE_CONTENT,
  CLEAN_CONTENT,
  CLEAR_SELECTED_EPISODE
} from '../consts/ActionTypes';

const initialState = {
  data: {
    contentItems: [],
    totalPages: null
  },
  isFetching: false,
  episodes: []
};

export default (state = initialState, action) => {
  switch(action.type) {
    case REQUEST_MULTI_DATA:
    case REQUEST_MOVIES_DATA:
    case REQUEST_SHOWS_DATA:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_CONTENT:
      const { contentItems, totalPages } = action.payload;
      return {
        ...state,
        data: {
          contentItems: [...state.data.contentItems, ...contentItems],
          totalPages
        },
        isFetching: false
      }
    case CLEAN_CONTENT:
      return {
        data: {
          contentItems: [],
          totalPages: null
        },
        episodes: [],
      }
    case RECEIVE_EPISODES: 
      return {
        ...state,
        episodes: action.payload,
      }
    case CLEAR_SELECTED_EPISODE: 
      return {
        ...state,
        episodes: []
      }
    default: 
      return state;
  }
}