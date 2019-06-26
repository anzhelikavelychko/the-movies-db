import themoviedb from '../api/themoviedb';

const api_key = '9f8233e5843d6fc70a65f379d4909c34';
const apiEndPoints = {
  multiSearch: '/search/multi',
  moviesSearch: '/search/movie',
  tvShowsSearch: '/search/tv'
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
}

const fetchMovies = (searchText, page = 1) => {
  return fetchContent(apiEndPoints.moviesSearch, searchText, page);
}

const fetchTvShows = (searchText, page = 1) => {
  return fetchContent(apiEndPoints.tvShowsSearch, searchText, page);
}

const cleanContent = () => {
  return {
    type: 'CLEAN_CONTENT',
  }
}

export {
  fetchMulti,
  fetchMovies,
  fetchTvShows,
  cleanContent,
}

/*export const fetchMovieDetails = (id) => async dispatch =>  {
  const response = await themoviedb.get(`/movie/${id}`, {
    params: {
      api_key: "9f8233e5843d6fc70a65f379d4909c34",
      language: "en-US",
    }
    });
    

  dispatch({ type: 'SET_SELECTED_ITEM', payload: response.data });
};

export const fetchShowDetails = (id) => async dispatch =>  {
  const response = await themoviedb.get(`/tv/${id}`, {
    params: {
      api_key: "9f8233e5843d6fc70a65f379d4909c34",
      language: "en-US",
    }
    });
    
  dispatch({ type: 'SET_SELECTED_ITEM', payload: response.data });
};

export const clearSelectedItem = () => {
  return { type: 'CLEAR_SELECTED_ITEM' }
};*/

