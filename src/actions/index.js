
export const REQUEST_MULTI_DATA = 'REQUEST_MULTI_DATA';
export const REQUEST_MOVIES_DATA = 'REQUEST_MOVIES_DATA';
export const REQUEST_SHOWS_DATA = 'REQUEST_SHOWS_DATA';
export const RECEIVE_CONTENT  = 'RECEIVE_CONTENT';
export const CLEAN_CONTENT = 'CLEAN_CONTENT';
export const RECEIVE_SELECTED_ITEM = 'RECEIVE_SELECTED_ITEM';
export const CLEAR_SELECTED_ITEM = 'CLEAR_SELECTED_ITEM';
export const REQUEST_MOVIE_DETAILS = 'REQUEST_MOVIE_DETAILS';
export const REQUEST_TVSHOW_DETAILS = 'REQUEST_TVSHOW_DETAILS';
export const SET_LOADING = 'SET_LOADING';


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
const setLoading = (loading) => ({ type: SET_LOADING, payload: loading });


/*const fetchContent = (url, query, page) => async dispatch => {
  const response = await themoviedb.get(url, {
    params: {
      api_key,
      query,
      page,
    }
  });

  const { results, total_pages } = response.data;
  dispatch({ type: RECEIVE_CONTENT, payload: { 
    contentItems: results,
    totalPages: total_pages
  }});
};

const fetchMulti = (searchText, page = 1) => {
  return fetchContent(apiEndPoints.multiSearch, searchText, page);
};

const fetchMovies = (searchText, page = 1) => {
  return fetchContent(apiEndPoints.moviesSearch, searchText, page);
};

const fetchTvShows = (searchText, page = 1) => {
  return fetchContent(apiEndPoints.tvShowsSearch, searchText, page);
};

const cleanContent = () => {
  return {
    type: CLEAN_CONTENT,
  }
};

const fetchItemDetails = (url) => async dispatch => {
  const response = await themoviedb.get(url, {
    params: {
      api_key
    }
  });

  dispatch({ type: SET_SELECTED_ITEM, payload: response.data });
};

const requestMovieDetails = (id) => {
  const url = apiEndPoints.movieDetail + id;

  return fetchItemDetails(url);
};

const requestTvShowDetails = (id) => {
  const url = apiEndPoints.showDetail + id;

  return fetchItemDetails(url);
};

const clearSelectedItem = () => {
  return { type: CLEAR_SELECTED_ITEM }
};*/

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
  setLoading
}

