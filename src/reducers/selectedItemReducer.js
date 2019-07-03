import {
  RECEIVE_SELECTED_ITEM,
  CLEAR_SELECTED_ITEM,
} from '../consts/ActionTypes';

export default (state = null, action) => {
  switch(action.type) {
    case RECEIVE_SELECTED_ITEM: 
      return action.payload;

    case CLEAR_SELECTED_ITEM: 
      return null
      
    default: 
      return state;
  }
};  