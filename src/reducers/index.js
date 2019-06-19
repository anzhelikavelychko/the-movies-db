import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import tvShowsReducer from './tvShowsReducer';

export default combineReducers({
  movies: moviesReducer,
  tvShows: tvShowsReducer
});