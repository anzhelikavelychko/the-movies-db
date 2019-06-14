import React from 'react';
import { connect } from 'react-redux';
import SearchField from './SearchField';
import ItemList from './ItemList';
import { fetchMoviesAndShows } from '../actions/index';


const App = ({ moviesAndShows, fetchMoviesAndShows }) => {

  const onSearchSubmit = (value) => {
    fetchMoviesAndShows(value);
  };

  return ( 
    
    <div>
      <SearchField  onSearchSubmit = {onSearchSubmit}/>
      <ItemList list= {moviesAndShows} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    moviesAndShows: state.moviesAndShows
  }
}

export default connect(mapStateToProps, { fetchMoviesAndShows })(App);