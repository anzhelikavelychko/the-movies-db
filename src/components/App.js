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

  const onSearchSubmit = (value) => {
    fetchMoviesAndShows(value);
  };
  
  return ( 
    <div>
      <SearchField  onSearchSubmit = {onSearchSubmit}/>
      <TabBarMenu activeTab={activeTab} setActiveTab={setActiveTab} />
      { activeTab === 0 && <MenuItemContent fetchData={fetchMoviesAndShows} data={moviesAndShows}/> }
      { activeTab === 1 && <MenuItemContent fetchData={fetchMovies} data={movies}/> }
      { activeTab === 2 && <MenuItemContent fetchData={fetchTVShows} data={tvShows}/> }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    moviesAndShows: state.moviesAndShows,
    movies: state.movies,
    tvShows: state.tvShows
  }
}

export default connect(mapStateToProps, { fetchMoviesAndShows, fetchMovies, fetchTVShows })(App);