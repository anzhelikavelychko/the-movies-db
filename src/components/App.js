import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchMoviesAndShows, fetchMovies, fetchTVShows } from '../actions/index';

import SearchField from './SearchField';
import TabBarMenu from './TabBarMenu';
import MenuItemContent from './MenuItemContent';



const App = ({ 
  moviesAndShows, 
  movies, 
  tvShows, 
  fetchMoviesAndShows,
  fetchMovies,
  fetchTVShows 
}) => {

  const [activeTab, setActiveTab] = useState(0);
  const [ inputValue, setInputValue ] =  useState('');


  const onSearchSubmit = (value) => {
    fetchMoviesAndShows(value);
  };

  const loadMoreMovies = (searchText, page) => {
    fetchMovies(searchText, page);
  };

  const loadMoreShows = (searchText, page) => {
    fetchTVShows(searchText, page);
  };

  const loadMoreMoviesAndShows = (searchText, page) => {
    fetchMoviesAndShows(searchText, page);
  };

  return ( 
    <div>
      <SearchField  inputValue = {inputValue} setInputValue={setInputValue} onSearchSubmit = {onSearchSubmit}/>
      <TabBarMenu activeTab={activeTab} setActiveTab={setActiveTab} />
      { activeTab === 0 && <MenuItemContent fetchData={loadMoreMoviesAndShows} data={moviesAndShows} searchText={inputValue} /> }
      { activeTab === 1 && <MenuItemContent fetchData={loadMoreMovies} data={movies} searchText={inputValue} /> }
      { activeTab === 2 && <MenuItemContent fetchData={loadMoreShows} data={tvShows} searchText={inputValue} /> }
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('our STATE', state);
  return {
    moviesAndShows: state.moviesAndShows,
    movies: state.movies,
    tvShows: state.tvShows
  }
}

export default connect(mapStateToProps, { fetchMoviesAndShows, fetchMovies, fetchTVShows })(App);