import {
  REQUEST_MULTI_DATA,
  REQUEST_MOVIES_DATA,
  REQUEST_SHOWS_DATA,
  REQUEST_EPISODES,
  RECEIVE_EPISODES,
  REQUEST_MOVIE_DETAILS,
  REQUEST_TVSHOW_DETAILS,
  RECEIVE_SELECTED_ITEM,
  RECEIVE_CONTENT,
  CLEAN_CONTENT,
  CLEAR_SELECTED_ITEM,
  CLEAR_SELECTED_EPISODE
} from '../consts/ActionTypes';

const apiEndPoints = {
  multiSearch: '/search/multi',
  moviesSearch: '/search/movie',
  tvShowsSearch: '/search/tv',
  movieDetail: '/movie/',
  showDetail: '/tv/'
}

const fetchMulti = (searchText, page = 1) => (
  { type: REQUEST_MULTI_DATA, 
    payload: { url: apiEndPoints.multiSearch, query: searchText, page}
  }
);
const fetchMovies = (searchText, page = 1) => (
  { type: REQUEST_MOVIES_DATA, 
    payload: { url: apiEndPoints.moviesSearch, query: searchText, page }
  }
);
const fetchTvShows = (searchText, page = 1) => (
  { type: REQUEST_SHOWS_DATA, 
    payload: { url: apiEndPoints.tvShowsSearch, query: searchText, page }
  }
);

const fetchEpisodes = (tvId, number) => (
  { type: REQUEST_EPISODES,
    payload: { tvId, number }
  }
);
const receiveEpisodes = (data) => ({ type: RECEIVE_EPISODES, payload: data});

const requestMovieDetails = (id) => {
  const url = apiEndPoints.movieDetail + id;
  return ({ type: REQUEST_MOVIE_DETAILS, payload: url })
};
const requestTvShowDetails = (id) => {
  const url = apiEndPoints.showDetail + id;
  return ({ type: REQUEST_TVSHOW_DETAILS, payload: url })
};

const receiveSelectedItem = (data) => ({ type: RECEIVE_SELECTED_ITEM, payload: data })

const receiveContentData = (data) => ({ type: RECEIVE_CONTENT, payload: { 
  contentItems: data.results,
  totalPages: data.total_pages
}});

const cleanContent = () => ({ type: CLEAN_CONTENT });
const clearSelectedItem = () => ({ type: CLEAR_SELECTED_ITEM });
const clearSelectedEpisode = () => ({ type: CLEAR_SELECTED_EPISODE});

export {
  fetchMulti,
  fetchMovies,
  fetchTvShows,
  cleanContent,
  receiveContentData,
  receiveSelectedItem,
  requestMovieDetails,
  requestTvShowDetails,
  clearSelectedItem,
  fetchEpisodes,
  receiveEpisodes,
  clearSelectedEpisode
}

