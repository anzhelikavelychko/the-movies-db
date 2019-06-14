import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchMoviesAndShows } from '../actions/index';

import SearchField from './SearchField';
import TabBarMenu from './TabBarMenu';
import ItemList from './ItemList';


const App = ({ moviesAndShows, movies, tvShows, fetchMoviesAndShows }) => {

  const [activeTab, setActiveTab] = useState(0);

  const onSearchSubmit = (value) => {
    fetchMoviesAndShows(value);
  };

  const getListOfItems = () => {
    if(activeTab === 1) {
      return movies
    } else if (activeTab === 2) {
      return tvShows
    }
    return moviesAndShows;
  }; 

  return ( 
    <div>
      <SearchField  onSearchSubmit = {onSearchSubmit}/>
      <TabBarMenu activeTab={activeTab} setActiveTab={setActiveTab} />
      <ItemList list= {getListOfItems()} />
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

export default connect(mapStateToProps, { fetchMoviesAndShows })(App);