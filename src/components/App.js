import React from 'react';
import { connect } from 'react-redux';
//import themoviedb from '../api/themoviedb';
import SearchField from './SearchField';
import { fetchMoviesAndShows } from '../actions/index';


const App = ({ fetchMoviesAndShows }) => {

  const onSearchSubmit = (value) => {
    fetchMoviesAndShows(value);
   /* themoviedb.get('/search/movie', {
      params: {
        api_key: "9f8233e5843d6fc70a65f379d4909c34",
        language: "en-US",
        query: value,
        include_adult: false,
        page:1
      }
    });*/
  };

  return ( 
    <div>
      <SearchField  onSearchSubmit = {onSearchSubmit}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('inMapStateToProps', state)
}

export default connect(mapStateToProps, { fetchMoviesAndShows })(App);