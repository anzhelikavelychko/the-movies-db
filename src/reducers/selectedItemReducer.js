import {
  RECEIVE_SELECTED_ITEM,
  CLEAR_SELECTED_ITEM,
  REQUEST_MOVIE_DETAILS,
  REQUEST_TVSHOW_DETAILS
} from '../consts/ActionTypes';

export default (state = { data: null, isfetchingDetails: false }, action) => {
  switch(action.type) {
    case REQUEST_MOVIE_DETAILS:
    case REQUEST_TVSHOW_DETAILS: 
      return {
        ...state,
        isfetchingDetails: true
      }
    case RECEIVE_SELECTED_ITEM: 
      return {
        ...state,
        data: action.payload,
        isfetchingDetails: false
      }

    case CLEAR_SELECTED_ITEM: 
      return {
        data: null,
        isfetchingDetails: false
      }
      
    default: 
      return state;
  }
};  