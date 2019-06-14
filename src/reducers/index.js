import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import tvShowsReducer from './tvShowsReducer';
import moviesAndShowsReducer from './moviesAndShowsReducer';

export default combineReducers({
  movies: moviesReducer,
  tvShows: tvShowsReducer,
  moviesAndShows: moviesAndShowsReducer
});