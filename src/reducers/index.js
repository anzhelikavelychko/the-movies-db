import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import tvShowsReducer from './tvShowsReducer';
import selectedItemReducer from './selectedItemReducer';

export default combineReducers({
  movies: moviesReducer,
  tvShows: tvShowsReducer,
  selectedItem: selectedItemReducer
});