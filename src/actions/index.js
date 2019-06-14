import themoviedb from '../api/themoviedb';

export const fetchMoviesAndShows = (value) => async (dispatch, getState) => {
  console.log('fetchMoviesAndShows', value);
  await dispatch(fetchMovies(value));
  await dispatch(fetchTVShows(value));

  const movies = getState().movies[0]; 
  const tvShows = getState().tvShows[0];
  const moviesAndShows = [].concat(movies, tvShows);

  dispatch({ type: 'FETCH_MOVIES_AND_SHOWS', payload: moviesAndShows });
};

export const fetchMovies =  (value) => async  dispatch => {
  const response = await themoviedb.get('/search/movie', {
    params: {
      api_key: "9f8233e5843d6fc70a65f379d4909c34",
      language: "en-US",
      query: value,
      include_adult: false,
      page:1
    }
    });

  dispatch({ type: 'FETCH_MOVIES', payload: response.data.results });
};

export const fetchTVShows =  value =>  async dispatch => {
  const response = await themoviedb.get('/search/tv', {
    params: {
      api_key: "9f8233e5843d6fc70a65f379d4909c34",
      language: "en-US",
      query: value,
      include_adult: false,
      page:1
    }
    });
  dispatch({ type: 'FETCH_TVSHOWS', payload: response.data.results });
};
   