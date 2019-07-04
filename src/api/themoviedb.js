import axios from 'axios';

const api_key = '9f8233e5843d6fc70a65f379d4909c34';


export const fetchData = async (url, query, page) => {
  
  const response = await axios.get(`https://api.themoviedb.org/3${url}`, {
    params: {
      api_key,
      query,
      page,
    }
  });

  return response.data
};

export const fetchDetails = async (url) => {
  const response = await axios.get(`https://api.themoviedb.org/3${url}`, {
    params: {
      api_key
    }
  });

  return response.data
};

export const fetchEpisodes = async (tvId, number) => {
  const response = await axios.get(`https://api.themoviedb.org/3/tv/${tvId}/season/${number}`, {
    params: {
      api_key
    }
  });

  return response.data.episodes;
};