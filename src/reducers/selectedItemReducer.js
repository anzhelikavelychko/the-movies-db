
export default (state = null, action) => {
  switch(action.type) {
    case 'RECEIVE_SELECTED_ITEM': 
      return action.payload;

    case 'CLEAR_SELECTED_ITEM': 
      return null
      
    default: 
      return state;
  }
};  