import React, { useState } from 'react';
import { connect } from 'react-redux';

import { fetchMulti, fetchMovies, fetchTvShows, cleanContent } from '../actions/index';

import SearchField from './SearchField';
import TabBarMenu from './TabBarMenu';
import MenuItemContent from './MenuItemContent';



const App = ({ 
  contentItems,
  totalPages,
  fetchMulti, 
  fetchMovies, 
  fetchTvShows, 
  cleanContent
}) => {

  const [activeTab, setActiveTab] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const onSearchSubmit = (searchText) => {
    if (!searchText) {
      return;
    }

    if (contentItems.length) {
      cleanContent();
    }

    if (activeTab === 0) {
      fetchMulti(searchText);
    } else if (activeTab === 1) {
      fetchMovies(searchText);
    } else if (activeTab === 2) {
      fetchTvShows(searchText);
    }
  };

  const updateActiveTab = (tab) => {
    if (contentItems.length) {
      cleanContent();
    }

    setActiveTab(tab);
  };

  return ( 
    <div>
     <SearchField
        inputValue={inputValue}
        setInputValue={setInputValue}
        onSearchSubmit={onSearchSubmit}
      />
      { contentItems.length ? <TabBarMenu activeTab={activeTab} setActiveTab={updateActiveTab} /> : null }
      { activeTab === 0 &&
        <MenuItemContent
          fetchData={fetchMulti}
          items={contentItems}
          totalPages={totalPages}
          searchText={inputValue}
        /> 
      } 
      { activeTab === 1 &&
        <MenuItemContent
          fetchData={fetchMovies}
          items={contentItems}
          totalPages={totalPages}
          searchText={inputValue}
        /> 
      }
      { activeTab === 2 &&
        <MenuItemContent 
          fetchData={fetchTvShows}
          items={contentItems}
          totalPages={totalPages}
          searchText={inputValue}
        /> 
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  const { contentItems, totalPages } = state.contentItems.data;

  
  return {
    contentItems,
    totalPages
  }
}

export default connect(
  mapStateToProps, 
  { 
    fetchMulti, 
    fetchMovies, 
    fetchTvShows, 
    cleanContent  
  })(App);