import { combineReducers } from 'redux';
import contentItemsReducer from './contentItemsReducer';
import selectedItemReducer from './selectedItemReducer';

export default combineReducers({
  contentItems: contentItemsReducer,
  selectedItem: selectedItemReducer,
});