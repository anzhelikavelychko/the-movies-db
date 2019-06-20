import React, { useState } from 'react';
import { connect } from 'react-redux';
import { 
  fetchMovies, 
  fetchTVShows, 
  clearDataFromStore,
  fetchMovieDetails,
  fetchShowDetails,
  clearSelectedItem 
} from '../actions/index';

import SearchField from './SearchField';
import TabBarMenu from './TabBarMenu';
import MenuItemContent from './MenuItemContent';



const App = ({ 
  moviesAndShows, 
  movies, 
  tvShows,
  fetchMovies,
  fetchTVShows, 
  clearDataFromStore,
  fetchMovieDetails,
  fetchShowDetails,
  clearSelectedItem 
}) => {

  const [activeTab, setActiveTab] = useState(0);
  const [inputValue, setInputValue] = useState('');


  const onSearchSubmit = (text) => {
    fetchMovies(text);
    fetchTVShows(text);
  };

  const loadMoreMovies = (searchText, page) => {
    fetchMovies(searchText, page);
  };

  const loadMoreShows = (searchText, page) => {
    fetchTVShows(searchText, page);
  };

  const loadMoreMoviesAndShows = (searchText, page) => {
    fetchMovies(searchText, page);
    fetchTVShows(searchText, page);
  };

  const getMovieDetails = (id) => {
    fetchMovieDetails(id);
  };

  const getShowDetails = (id) => {
    fetchShowDetails(id);
  }; 

  return ( 
    <div>
      <SearchField  inputValue = {inputValue} setInputValue={setInputValue} onSearchSubmit = {onSearchSubmit}/>
      {(movies.searchedItems.length || tvShows.searchedItems.length) ?
        <TabBarMenu activeTab={activeTab} setActiveTab={setActiveTab} /> :
        <div>Here will be some default message!</div> 
      }
      { activeTab === 0 && 
        <MenuItemContent 
          fetchData={loadMoreMoviesAndShows} 
          data={moviesAndShows} 
          searchText={inputValue}
          clearDataFromStore={clearDataFromStore}
          clearSelectedItem={clearSelectedItem} 
        /> 
      } 
      { activeTab === 1 && 
        <MenuItemContent 
          fetchData={loadMoreMovies} 
          data={movies} 
          searchText={inputValue}
          clearDataFromStore={clearDataFromStore} 
          getItemDetails={getMovieDetails}
          clearSelectedItem={clearSelectedItem}
        /> 
      }
      { activeTab === 2 && 
        <MenuItemContent 
          fetchData={loadMoreShows} 
          data={tvShows} 
          searchText={inputValue}
          clearDataFromStore={clearDataFromStore} 
          getItemDetails={getShowDetails}
          clearSelectedItem={clearSelectedItem}
        /> 
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  const totalPages = (state.movies.totalPages > state.tvShows.totalPages) ? state.movies.totalPages : state.tvShows.totalPages
  const moviesAndShows = {
    searchedItems: [].concat(state.movies.searchedItems, state.tvShows.searchedItems), 
    totalPages
  };

  return {
    moviesAndShows, 
    movies: state.movies,
    tvShows: state.tvShows
  }
}

export default connect(
  mapStateToProps, 
  { 
    fetchMovies, 
    fetchTVShows, 
    clearDataFromStore, 
    fetchShowDetails, 
    fetchMovieDetails,
    clearSelectedItem  
  })(App);