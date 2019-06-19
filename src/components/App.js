import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, fetchTVShows, clearDataFromStore } from '../actions/index';

import SearchField from './SearchField';
import TabBarMenu from './TabBarMenu';
import MenuItemContent from './MenuItemContent';



const App = ({ 
  moviesAndShows, 
  movies, 
  tvShows,
  fetchMovies,
  fetchTVShows, 
  clearDataFromStore 
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

  return ( 
    <div>
      <SearchField  inputValue = {inputValue} setInputValue={setInputValue} onSearchSubmit = {onSearchSubmit}/>
      { (movies.searchedItems.length || tvShows.searchedItems.length) && <TabBarMenu activeTab={activeTab} setActiveTab={setActiveTab} /> }
      { activeTab === 0 && 
        <MenuItemContent 
          fetchData={loadMoreMoviesAndShows} 
          data={moviesAndShows} 
          searchText={inputValue}
          clearDataFromStore={clearDataFromStore} 
        /> 
      } 
      { activeTab === 1 && 
        <MenuItemContent 
          fetchData={loadMoreMovies} 
          data={movies} 
          searchText={inputValue}
          clearDataFromStore={clearDataFromStore} 
        /> 
      }
      { activeTab === 2 && 
        <MenuItemContent 
          fetchData={loadMoreShows} 
          data={tvShows} 
          searchText={inputValue}
          clearDataFromStore={clearDataFromStore} 
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

export default connect(mapStateToProps, { fetchMovies, fetchTVShows, clearDataFromStore })(App);