import themoviedb from '../api/themoviedb';

const api_key = '9f8233e5843d6fc70a65f379d4909c34';
const apiEndPoints = {
  multiSearch: '/search/multi',
  moviesSearch: '/search/movie',
  tvShowsSearch: '/search/tv',
  movieDetail: '/movie/',
  showDetail: '/tv/'
}
const fetchContent = (url, query, page) => async dispatch => {
  const response = await themoviedb.get(url, {
    params: {
      api_key,
      query,
      page,
    }
  });

  const { results, total_pages } = response.data;
  dispatch({ type: 'RECEIVE_CONTENT', payload: { 
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
    type: 'CLEAN_CONTENT',
  }
};

const fetchItemDetails = (url) => async dispatch => {
  const response = await themoviedb.get(url, {
    params: {
      api_key
    }
  });

  dispatch({ type: 'SET_SELECTED_ITEM', payload: response.data });
};

const fetchMovieDetails = (id) => {
  const url = apiEndPoints.movieDetail + id;

  return fetchItemDetails(url);
};

const fetchTvShowDetails = (id) => {
  const url = apiEndPoints.showDetail + id;

  return fetchItemDetails(url);
};

const clearSelectedItem = () => {
  return { type: 'CLEAR_SELECTED_ITEM' }
};

export {
  fetchMulti,
  fetchMovies,
  fetchTvShows,
  cleanContent,
  fetchItemDetails,
  fetchMovieDetails,
  fetchTvShowDetails,
  clearSelectedItem,
}

